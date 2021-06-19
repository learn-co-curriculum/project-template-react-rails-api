import { Encoding } from '@syncfusion/ej2-file-utils';
/**
 * array literal codes
 */
var ARR_LITERAL_CODES = new Int16Array(286);
var ARR_LITERAL_LENGTHS = new Uint8Array(286);
var ARR_DISTANCE_CODES = new Int16Array(30);
var ARR_DISTANCE_LENGTHS = new Uint8Array(30);
/**
 * represent compression stream writer
 * ```typescript
 * let compressedWriter = new CompressedStreamWriter();
 * let text: string = 'Hello world!!!';
 * compressedWriter.write(text, 0, text.length);
 * compressedWriter.close();
 * ```
 */
var CompressedStreamWriter = /** @class */ (function () {
    /**
     * Initializes compressor and writes ZLib header if needed.
     * @param {boolean} noWrap - optional if true, ZLib header and checksum will not be written.
     */
    function CompressedStreamWriter(noWrap) {
        this.pendingBuffer = new Uint8Array(1 << 16);
        this.pendingBufLength = 0;
        this.pendingBufCache = 0;
        this.pendingBufBitsInCache = 0;
        this.bufferPosition = 0;
        this.extraBits = 0;
        this.currentHash = 0;
        this.matchStart = 0;
        this.matchLength = 0;
        this.matchPrevAvail = false;
        this.blockStart = 0;
        this.stringStart = 0;
        this.lookAhead = 0;
        this.totalBytesIn = 0;
        this.inputOffset = 0;
        this.inputEnd = 0;
        this.windowSize = 1 << 15;
        this.windowMask = this.windowSize - 1;
        this.hashSize = 1 << 15;
        this.hashMask = this.hashSize - 1;
        this.hashShift = Math.floor((15 + 3 - 1) / 3);
        this.maxDist = this.windowSize - 262;
        this.checkSum = 1;
        this.noWrap = false;
        if (!CompressedStreamWriter.isHuffmanTreeInitiated) {
            CompressedStreamWriter.initHuffmanTree();
            CompressedStreamWriter.isHuffmanTreeInitiated = true;
        }
        this.treeLiteral = new CompressorHuffmanTree(this, 286, 257, 15);
        this.treeDistances = new CompressorHuffmanTree(this, 30, 1, 15);
        this.treeCodeLengths = new CompressorHuffmanTree(this, 19, 4, 7);
        this.arrDistances = new Uint16Array((1 << 14));
        this.arrLiterals = new Uint8Array((1 << 14));
        this.stream = [];
        this.dataWindow = new Uint8Array(2 * this.windowSize);
        this.hashHead = new Int16Array(this.hashSize);
        this.hashPrevious = new Int16Array(this.windowSize);
        this.blockStart = this.stringStart = 1;
        this.noWrap = noWrap;
        if (!noWrap) {
            this.writeZLibHeader();
        }
    }
    Object.defineProperty(CompressedStreamWriter.prototype, "compressedData", {
        /**
         * get compressed data
         */
        get: function () {
            return this.stream;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompressedStreamWriter.prototype, "getCompressedString", {
        get: function () {
            var compressedString = '';
            if (this.stream !== undefined) {
                for (var i = 0; i < this.stream.length; i++) {
                    compressedString += String.fromCharCode.apply(null, this.stream[i]);
                }
            }
            return compressedString;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Compresses data and writes it to the stream.
     * @param {Uint8Array} data - data to compress
     * @param {number} offset - offset in data
     * @param {number} length - length of the data
     * @returns {void}
     */
    CompressedStreamWriter.prototype.write = function (data, offset, length) {
        if (data === undefined || data === null) {
            throw new Error('ArgumentException: data cannot null or undefined');
        }
        var end = offset + length;
        if (0 > offset || offset > end || end > data.length) {
            throw new Error('ArgumentOutOfRangeException: Offset or length is incorrect');
        }
        if (typeof data === 'string') {
            var encode = new Encoding(false);
            encode.type = 'Utf8';
            data = new Uint8Array(encode.getBytes(data, 0, data.length));
            end = offset + data.length;
        }
        this.inputBuffer = data;
        this.inputOffset = offset;
        this.inputEnd = end;
        if (!this.noWrap) {
            this.checkSum = ChecksumCalculator.checksumUpdate(this.checkSum, this.inputBuffer, this.inputOffset, end);
        }
        while (!(this.inputEnd === this.inputOffset) || !(this.pendingBufLength === 0)) {
            this.pendingBufferFlush();
            this.compressData(false);
        }
    };
    /**
     * write ZLib header to the compressed data
     * @return {void}
     */
    CompressedStreamWriter.prototype.writeZLibHeader = function () {
        /* Initialize header.*/
        var headerDate = (8 + (7 << 4)) << 8;
        /* Save compression level.*/
        headerDate |= ((5 >> 2) & 3) << 6;
        /* Align header.*/
        headerDate += 31 - (headerDate % 31);
        /* Write header to stream.*/
        this.pendingBufferWriteShortBytes(headerDate);
    };
    /**
     *  Write Most Significant Bytes in to stream
     * @param {number} s - check sum value
     */
    CompressedStreamWriter.prototype.pendingBufferWriteShortBytes = function (s) {
        this.pendingBuffer[this.pendingBufLength++] = s >> 8;
        this.pendingBuffer[this.pendingBufLength++] = s;
    };
    CompressedStreamWriter.prototype.compressData = function (finish) {
        var success;
        do {
            this.fillWindow();
            var canFlush = (finish && this.inputEnd === this.inputOffset);
            success = this.compressSlow(canFlush, finish);
        } while (this.pendingBufLength === 0 && success);
        return success;
    };
    CompressedStreamWriter.prototype.compressSlow = function (flush, finish) {
        if (this.lookAhead < 262 && !flush) {
            return false;
        }
        while (this.lookAhead >= 262 || flush) {
            if (this.lookAhead === 0) {
                return this.lookAheadCompleted(finish);
            }
            if (this.stringStart >= 2 * this.windowSize - 262) {
                this.slideWindow();
            }
            var prevMatch = this.matchStart;
            var prevLen = this.matchLength;
            if (this.lookAhead >= 3) {
                this.discardMatch();
            }
            if (prevLen >= 3 && this.matchLength <= prevLen) {
                prevLen = this.matchPreviousBest(prevMatch, prevLen);
            }
            else {
                this.matchPreviousAvailable();
            }
            if (this.bufferPosition >= (1 << 14)) {
                return this.huffmanIsFull(finish);
            }
        }
        return true;
    };
    CompressedStreamWriter.prototype.discardMatch = function () {
        var hashHead = this.insertString();
        if (hashHead !== 0 && this.stringStart - hashHead <= this.maxDist && this.findLongestMatch(hashHead)) {
            if (this.matchLength <= 5 && (this.matchLength === 3 && this.stringStart - this.matchStart > 4096)) {
                this.matchLength = 3 - 1;
            }
        }
    };
    CompressedStreamWriter.prototype.matchPreviousAvailable = function () {
        if (this.matchPrevAvail) {
            this.huffmanTallyLit(this.dataWindow[this.stringStart - 1] & 0xff);
        }
        this.matchPrevAvail = true;
        this.stringStart++;
        this.lookAhead--;
    };
    CompressedStreamWriter.prototype.matchPreviousBest = function (prevMatch, prevLen) {
        this.huffmanTallyDist(this.stringStart - 1 - prevMatch, prevLen);
        prevLen -= 2;
        do {
            this.stringStart++;
            this.lookAhead--;
            if (this.lookAhead >= 3) {
                this.insertString();
            }
        } while (--prevLen > 0);
        this.stringStart++;
        this.lookAhead--;
        this.matchPrevAvail = false;
        this.matchLength = 3 - 1;
        return prevLen;
    };
    CompressedStreamWriter.prototype.lookAheadCompleted = function (finish) {
        if (this.matchPrevAvail) {
            this.huffmanTallyLit(this.dataWindow[this.stringStart - 1] & 0xff);
        }
        this.matchPrevAvail = false;
        this.huffmanFlushBlock(this.dataWindow, this.blockStart, this.stringStart - this.blockStart, finish);
        this.blockStart = this.stringStart;
        return false;
    };
    CompressedStreamWriter.prototype.huffmanIsFull = function (finish) {
        var len = this.stringStart - this.blockStart;
        if (this.matchPrevAvail) {
            len--;
        }
        var lastBlock = (finish && this.lookAhead === 0 && !this.matchPrevAvail);
        this.huffmanFlushBlock(this.dataWindow, this.blockStart, len, lastBlock);
        this.blockStart += len;
        return !lastBlock;
    };
    CompressedStreamWriter.prototype.fillWindow = function () {
        if (this.stringStart >= this.windowSize + this.maxDist) {
            this.slideWindow();
        }
        while (this.lookAhead < 262 && this.inputOffset < this.inputEnd) {
            var more = 2 * this.windowSize - this.lookAhead - this.stringStart;
            if (more > this.inputEnd - this.inputOffset) {
                more = this.inputEnd - this.inputOffset;
            }
            this.dataWindow.set(this.inputBuffer.subarray(this.inputOffset, this.inputOffset + more), this.stringStart + this.lookAhead);
            this.inputOffset += more;
            this.totalBytesIn += more;
            this.lookAhead += more;
        }
        if (this.lookAhead >= 3) {
            this.updateHash();
        }
    };
    CompressedStreamWriter.prototype.slideWindow = function () {
        this.dataWindow.set(this.dataWindow.subarray(this.windowSize, this.windowSize + this.windowSize), 0);
        this.matchStart -= this.windowSize;
        this.stringStart -= this.windowSize;
        this.blockStart -= this.windowSize;
        for (var i = 0; i < this.hashSize; ++i) {
            var m = this.hashHead[i] & 0xffff;
            this.hashHead[i] = (((m >= this.windowSize) ? (m - this.windowSize) : 0));
        }
        for (var i = 0; i < this.windowSize; i++) {
            var m = this.hashPrevious[i] & 0xffff;
            this.hashPrevious[i] = ((m >= this.windowSize) ? (m - this.windowSize) : 0);
        }
    };
    CompressedStreamWriter.prototype.insertString = function () {
        var match;
        var hash = ((this.currentHash << this.hashShift) ^ this.dataWindow[this.stringStart + (3 - 1)]) & this.hashMask;
        this.hashPrevious[this.stringStart & this.windowMask] = match = this.hashHead[hash];
        this.hashHead[hash] = this.stringStart;
        this.currentHash = hash;
        return match & 0xffff;
    };
    CompressedStreamWriter.prototype.findLongestMatch = function (curMatch) {
        var chainLen = 4096;
        var niceLen = 258;
        var scan = this.stringStart;
        var match;
        var bestEnd = this.stringStart + this.matchLength;
        var bestLength = Math.max(this.matchLength, 3 - 1);
        var limit = Math.max(this.stringStart - this.maxDist, 0);
        var stringEnd = this.stringStart + 258 - 1;
        var scanEnd1 = this.dataWindow[bestEnd - 1];
        var scanEnd = this.dataWindow[bestEnd];
        var data = this.dataWindow;
        if (bestLength >= 32) {
            chainLen >>= 2;
        }
        if (niceLen > this.lookAhead) {
            niceLen = this.lookAhead;
        }
        do {
            if (data[curMatch + bestLength] !== scanEnd ||
                data[curMatch + bestLength - 1] !== scanEnd1 ||
                data[curMatch] !== data[scan] ||
                data[curMatch + 1] !== data[scan + 1]) {
                continue;
            }
            match = curMatch + 2;
            scan += 2;
            /* tslint:disable */
            while (data[++scan] === data[++match] && data[++scan] === data[++match] &&
                data[++scan] === data[++match] && data[++scan] === data[++match] &&
                data[++scan] === data[++match] && data[++scan] === data[++match] &&
                data[++scan] === data[++match] && data[++scan] === data[++match] && scan < stringEnd) {
                /* tslint:disable */
            }
            if (scan > bestEnd) {
                this.matchStart = curMatch;
                bestEnd = scan;
                bestLength = scan - this.stringStart;
                if (bestLength >= niceLen) {
                    break;
                }
                scanEnd1 = data[bestEnd - 1];
                scanEnd = data[bestEnd];
            }
            scan = this.stringStart;
        } while ((curMatch = (this.hashPrevious[curMatch & this.windowMask] & 0xffff)) > limit && --chainLen !== 0);
        this.matchLength = Math.min(bestLength, this.lookAhead);
        return this.matchLength >= 3;
    };
    CompressedStreamWriter.prototype.updateHash = function () {
        this.currentHash = (this.dataWindow[this.stringStart] << this.hashShift) ^ this.dataWindow[this.stringStart + 1];
    };
    CompressedStreamWriter.prototype.huffmanTallyLit = function (literal) {
        this.arrDistances[this.bufferPosition] = 0;
        this.arrLiterals[this.bufferPosition++] = literal;
        this.treeLiteral.codeFrequencies[literal]++;
        return this.bufferPosition >= (1 << 14);
    };
    CompressedStreamWriter.prototype.huffmanTallyDist = function (dist, len) {
        this.arrDistances[this.bufferPosition] = dist;
        this.arrLiterals[this.bufferPosition++] = (len - 3);
        var lc = this.huffmanLengthCode(len - 3);
        this.treeLiteral.codeFrequencies[lc]++;
        if (lc >= 265 && lc < 285) {
            this.extraBits += Math.floor((lc - 261) / 4);
        }
        var dc = this.huffmanDistanceCode(dist - 1);
        this.treeDistances.codeFrequencies[dc]++;
        if (dc >= 4) {
            this.extraBits += Math.floor((dc / 2 - 1));
        }
        return this.bufferPosition >= (1 << 14);
    };
    CompressedStreamWriter.prototype.huffmanFlushBlock = function (stored, storedOffset, storedLength, lastBlock) {
        this.treeLiteral.codeFrequencies[256]++;
        this.treeLiteral.buildTree();
        this.treeDistances.buildTree();
        this.treeLiteral.calculateBLFreq(this.treeCodeLengths);
        this.treeDistances.calculateBLFreq(this.treeCodeLengths);
        this.treeCodeLengths.buildTree();
        var blTreeCodes = 4;
        for (var i = 18; i > blTreeCodes; i--) {
            if (this.treeCodeLengths.codeLengths[CompressorHuffmanTree.huffCodeLengthOrders[i]] > 0) {
                blTreeCodes = i + 1;
            }
        }
        var opt_len = 14 + blTreeCodes * 3 + this.treeCodeLengths.getEncodedLength() +
            this.treeLiteral.getEncodedLength() + this.treeDistances.getEncodedLength() + this.extraBits;
        var static_len = this.extraBits;
        for (var i = 0; i < 286; i++) {
            static_len += this.treeLiteral.codeFrequencies[i] * ARR_LITERAL_LENGTHS[i];
        }
        for (var i = 0; i < 30; i++) {
            static_len += this.treeDistances.codeFrequencies[i] * ARR_DISTANCE_LENGTHS[i];
        }
        if (opt_len >= static_len) {
            // Force static trees.
            opt_len = static_len;
        }
        if (storedOffset >= 0 && storedLength + 4 < opt_len >> 3) {
            this.huffmanFlushStoredBlock(stored, storedOffset, storedLength, lastBlock);
        }
        else if (opt_len == static_len) {
            // Encode with static tree.
            this.pendingBufferWriteBits((1 << 1) + (lastBlock ? 1 : 0), 3);
            this.treeLiteral.setStaticCodes(ARR_LITERAL_CODES, ARR_LITERAL_LENGTHS);
            this.treeDistances.setStaticCodes(ARR_DISTANCE_CODES, ARR_DISTANCE_LENGTHS);
            this.huffmanCompressBlock();
            this.huffmanReset();
        }
        else {
            this.pendingBufferWriteBits((2 << 1) + (lastBlock ? 1 : 0), 3);
            this.huffmanSendAllTrees(blTreeCodes);
            this.huffmanCompressBlock();
            this.huffmanReset();
        }
    };
    CompressedStreamWriter.prototype.huffmanFlushStoredBlock = function (stored, storedOffset, storedLength, lastBlock) {
        this.pendingBufferWriteBits((0 << 1) + (lastBlock ? 1 : 0), 3);
        this.pendingBufferAlignToByte();
        this.pendingBufferWriteShort(storedLength);
        this.pendingBufferWriteShort(~storedLength);
        this.pendingBufferWriteByteBlock(stored, storedOffset, storedLength);
        this.huffmanReset();
    };
    CompressedStreamWriter.prototype.huffmanLengthCode = function (len) {
        if (len === 255) {
            return 285;
        }
        var code = 257;
        while (len >= 8) {
            code += 4;
            len >>= 1;
        }
        return code + len;
    };
    CompressedStreamWriter.prototype.huffmanDistanceCode = function (distance) {
        var code = 0;
        while (distance >= 4) {
            code += 2;
            distance >>= 1;
        }
        return code + distance;
    };
    CompressedStreamWriter.prototype.huffmanSendAllTrees = function (blTreeCodes) {
        this.treeCodeLengths.buildCodes();
        this.treeLiteral.buildCodes();
        this.treeDistances.buildCodes();
        this.pendingBufferWriteBits(this.treeLiteral.treeLength - 257, 5);
        this.pendingBufferWriteBits(this.treeDistances.treeLength - 1, 5);
        this.pendingBufferWriteBits(blTreeCodes - 4, 4);
        for (var rank = 0; rank < blTreeCodes; rank++) {
            this.pendingBufferWriteBits(this.treeCodeLengths.codeLengths[CompressorHuffmanTree.huffCodeLengthOrders[rank]], 3);
        }
        this.treeLiteral.writeTree(this.treeCodeLengths);
        this.treeDistances.writeTree(this.treeCodeLengths);
    };
    CompressedStreamWriter.prototype.huffmanReset = function () {
        this.bufferPosition = 0;
        this.extraBits = 0;
        this.treeLiteral.reset();
        this.treeDistances.reset();
        this.treeCodeLengths.reset();
    };
    CompressedStreamWriter.prototype.huffmanCompressBlock = function () {
        for (var i = 0; i < this.bufferPosition; i++) {
            var literalLen = this.arrLiterals[i] & 255;
            var dist = this.arrDistances[i];
            if (dist-- !== 0) {
                var lc = this.huffmanLengthCode(literalLen);
                this.treeLiteral.writeCodeToStream(lc);
                var bits = Math.floor((lc - 261) / 4);
                if (bits > 0 && bits <= 5) {
                    this.pendingBufferWriteBits(literalLen & ((1 << bits) - 1), bits);
                }
                var dc = this.huffmanDistanceCode(dist);
                this.treeDistances.writeCodeToStream(dc);
                bits = Math.floor(dc / 2 - 1);
                if (bits > 0) {
                    this.pendingBufferWriteBits(dist & ((1 << bits) - 1), bits);
                }
            }
            else {
                this.treeLiteral.writeCodeToStream(literalLen);
            }
        }
        this.treeLiteral.writeCodeToStream(256);
    };
    /**
     * write bits in to internal buffer
     * @param {number} b - source of bits
     * @param {number} count - count of bits to write
     */
    CompressedStreamWriter.prototype.pendingBufferWriteBits = function (b, count) {
        var uint = new Uint32Array(1);
        uint[0] = this.pendingBufCache | (b << this.pendingBufBitsInCache);
        this.pendingBufCache = uint[0];
        this.pendingBufBitsInCache += count;
        this.pendingBufferFlushBits();
    };
    CompressedStreamWriter.prototype.pendingBufferFlush = function (isClose) {
        this.pendingBufferFlushBits();
        if (this.pendingBufLength > 0) {
            var array = new Uint8Array(this.pendingBufLength);
            array.set(this.pendingBuffer.subarray(0, this.pendingBufLength), 0);
            this.stream.push(array);
        }
        this.pendingBufLength = 0;
    };
    CompressedStreamWriter.prototype.pendingBufferFlushBits = function () {
        var result = 0;
        while (this.pendingBufBitsInCache >= 8 && this.pendingBufLength < (1 << 16)) {
            this.pendingBuffer[this.pendingBufLength++] = this.pendingBufCache;
            this.pendingBufCache >>= 8;
            this.pendingBufBitsInCache -= 8;
            result++;
        }
        return result;
    };
    CompressedStreamWriter.prototype.pendingBufferWriteByteBlock = function (data, offset, length) {
        var array = data.subarray(offset, offset + length);
        this.pendingBuffer.set(array, this.pendingBufLength);
        this.pendingBufLength += length;
    };
    CompressedStreamWriter.prototype.pendingBufferWriteShort = function (s) {
        this.pendingBuffer[this.pendingBufLength++] = s;
        this.pendingBuffer[this.pendingBufLength++] = (s >> 8);
    };
    CompressedStreamWriter.prototype.pendingBufferAlignToByte = function () {
        if (this.pendingBufBitsInCache > 0) {
            this.pendingBuffer[this.pendingBufLength++] = this.pendingBufCache;
        }
        this.pendingBufCache = 0;
        this.pendingBufBitsInCache = 0;
    };
    /**
     * Huffman Tree literal calculation
     * @private
     */
    CompressedStreamWriter.initHuffmanTree = function () {
        var i = 0;
        while (i < 144) {
            ARR_LITERAL_CODES[i] = CompressorHuffmanTree.bitReverse((0x030 + i) << 8);
            ARR_LITERAL_LENGTHS[i++] = 8;
        }
        while (i < 256) {
            ARR_LITERAL_CODES[i] = CompressorHuffmanTree.bitReverse((0x190 - 144 + i) << 7);
            ARR_LITERAL_LENGTHS[i++] = 9;
        }
        while (i < 280) {
            ARR_LITERAL_CODES[i] = CompressorHuffmanTree.bitReverse((0x000 - 256 + i) << 9);
            ARR_LITERAL_LENGTHS[i++] = 7;
        }
        while (i < 286) {
            ARR_LITERAL_CODES[i] = CompressorHuffmanTree.bitReverse((0x0c0 - 280 + i) << 8);
            ARR_LITERAL_LENGTHS[i++] = 8;
        }
        for (i = 0; i < 30; i++) {
            ARR_DISTANCE_CODES[i] = CompressorHuffmanTree.bitReverse(i << 11);
            ARR_DISTANCE_LENGTHS[i] = 5;
        }
    };
    /**
     * close the stream and write all pending buffer in to stream
     * @returns {void}
     */
    CompressedStreamWriter.prototype.close = function () {
        do {
            this.pendingBufferFlush(true);
            if (!this.compressData(true)) {
                this.pendingBufferFlush(true);
                this.pendingBufferAlignToByte();
                if (!this.noWrap) {
                    this.pendingBufferWriteShortBytes(this.checkSum >> 16);
                    this.pendingBufferWriteShortBytes(this.checkSum & 0xffff);
                }
                this.pendingBufferFlush(true);
            }
        } while (!(this.inputEnd === this.inputOffset) ||
            !(this.pendingBufLength === 0));
    };
    /**
     * release allocated un-managed resource
     * @returns {void}
     */
    CompressedStreamWriter.prototype.destroy = function () {
        this.stream = [];
        this.stream = undefined;
        this.pendingBuffer = undefined;
        this.treeLiteral = undefined;
        this.treeDistances = undefined;
        this.treeCodeLengths = undefined;
        this.arrLiterals = undefined;
        this.arrDistances = undefined;
        this.hashHead = undefined;
        this.hashPrevious = undefined;
        this.dataWindow = undefined;
        this.inputBuffer = undefined;
        this.pendingBufLength = undefined;
        this.pendingBufCache = undefined;
        this.pendingBufBitsInCache = undefined;
        this.bufferPosition = undefined;
        this.extraBits = undefined;
        this.currentHash = undefined;
        this.matchStart = undefined;
        this.matchLength = undefined;
        this.matchPrevAvail = undefined;
        this.blockStart = undefined;
        this.stringStart = undefined;
        this.lookAhead = undefined;
        this.totalBytesIn = undefined;
        this.inputOffset = undefined;
        this.inputEnd = undefined;
        this.windowSize = undefined;
        this.windowMask = undefined;
        this.hashSize = undefined;
        this.hashMask = undefined;
        this.hashShift = undefined;
        this.maxDist = undefined;
        this.checkSum = undefined;
        this.noWrap = undefined;
    };
    CompressedStreamWriter.isHuffmanTreeInitiated = false;
    return CompressedStreamWriter;
}());
export { CompressedStreamWriter };
/**
 * represent the Huffman Tree
 */
var CompressorHuffmanTree = /** @class */ (function () {
    /**
     * Create new Huffman Tree
     * @param {CompressedStreamWriter} writer instance
     * @param {number} elementCount - element count
     * @param {number} minCodes - minimum count
     * @param {number} maxLength - maximum count
     */
    function CompressorHuffmanTree(writer, elementCount, minCodes, maxLength) {
        this.writer = writer;
        this.codeMinCount = minCodes;
        this.maxLength = maxLength;
        this.codeFrequency = new Uint16Array(elementCount);
        this.lengthCount = new Int32Array(maxLength);
    }
    Object.defineProperty(CompressorHuffmanTree.prototype, "treeLength", {
        get: function () {
            return this.codeCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompressorHuffmanTree.prototype, "codeLengths", {
        get: function () {
            return this.codeLength;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompressorHuffmanTree.prototype, "codeFrequencies", {
        get: function () {
            return this.codeFrequency;
        },
        enumerable: true,
        configurable: true
    });
    CompressorHuffmanTree.prototype.setStaticCodes = function (codes, lengths) {
        var temp = new Int16Array(codes.length);
        temp.set(codes, 0);
        this.codes = temp;
        var lengthTemp = new Uint8Array(lengths.length);
        lengthTemp.set(lengths, 0);
        this.codeLength = lengthTemp;
    };
    /**
     * reset all code data in tree
     * @returns {void}
     */
    CompressorHuffmanTree.prototype.reset = function () {
        for (var i = 0; i < this.codeFrequency.length; i++) {
            this.codeFrequency[i] = 0;
        }
        this.codes = undefined;
        this.codeLength = undefined;
    };
    /**
     * write code to the compressor output stream
     * @param {number} code - code to be written
     * @returns {void}
     */
    CompressorHuffmanTree.prototype.writeCodeToStream = function (code) {
        this.writer.pendingBufferWriteBits(this.codes[code] & 0xffff, this.codeLength[code]);
    };
    /**
     * calculate code from their frequencies
     * @returns {void}
     */
    CompressorHuffmanTree.prototype.buildCodes = function () {
        var nextCode = new Int32Array(this.maxLength);
        this.codes = new Int16Array(this.codeCount);
        var code = 0;
        for (var bitsCount = 0; bitsCount < this.maxLength; bitsCount++) {
            nextCode[bitsCount] = code;
            code += this.lengthCount[bitsCount] << (15 - bitsCount);
        }
        for (var i = 0; i < this.codeCount; i++) {
            var bits = this.codeLength[i];
            if (bits > 0) {
                this.codes[i] = CompressorHuffmanTree.bitReverse(nextCode[bits - 1]);
                nextCode[bits - 1] += 1 << (16 - bits);
            }
        }
    };
    CompressorHuffmanTree.bitReverse = function (value) {
        return (CompressorHuffmanTree.reverseBits[value & 15] << 12
            | CompressorHuffmanTree.reverseBits[(value >> 4) & 15] << 8
            | CompressorHuffmanTree.reverseBits[(value >> 8) & 15] << 4
            | CompressorHuffmanTree.reverseBits[value >> 12]);
    };
    /**
     * calculate length of compressed data
     * @returns {number}
     */
    CompressorHuffmanTree.prototype.getEncodedLength = function () {
        var len = 0;
        for (var i = 0; i < this.codeFrequency.length; i++) {
            len += this.codeFrequency[i] * this.codeLength[i];
        }
        return len;
    };
    /**
     * calculate code frequencies
     * @param {CompressorHuffmanTree} blTree
     * @returns {void}
     */
    CompressorHuffmanTree.prototype.calculateBLFreq = function (blTree) {
        var maxCount;
        var minCount;
        var count;
        var curLen = -1;
        var i = 0;
        while (i < this.codeCount) {
            count = 1;
            var nextLen = this.codeLength[i];
            if (nextLen === 0) {
                maxCount = 138;
                minCount = 3;
            }
            else {
                maxCount = 6;
                minCount = 3;
                if (curLen !== nextLen) {
                    blTree.codeFrequency[nextLen]++;
                    count = 0;
                }
            }
            curLen = nextLen;
            i++;
            while (i < this.codeCount && curLen === this.codeLength[i]) {
                i++;
                if (++count >= maxCount) {
                    break;
                }
            }
            if (count < minCount) {
                blTree.codeFrequency[curLen] += count;
            }
            else if (curLen !== 0) {
                blTree.codeFrequency[16]++;
            }
            else if (count <= 10) {
                blTree.codeFrequency[17]++;
            }
            else {
                blTree.codeFrequency[18]++;
            }
        }
    };
    /**
     * @param {CompressorHuffmanTree} blTree - write tree to output stream
     * @returns {void}
     */
    CompressorHuffmanTree.prototype.writeTree = function (blTree) {
        var maxRepeatCount;
        var minRepeatCount;
        var currentRepeatCount;
        var currentCodeLength = -1;
        var i = 0;
        while (i < this.codeCount) {
            currentRepeatCount = 1;
            var nextLen = this.codeLength[i];
            if (nextLen === 0) {
                maxRepeatCount = 138;
                minRepeatCount = 3;
            }
            else {
                maxRepeatCount = 6;
                minRepeatCount = 3;
                if (currentCodeLength !== nextLen) {
                    blTree.writeCodeToStream(nextLen);
                    currentRepeatCount = 0;
                }
            }
            currentCodeLength = nextLen;
            i++;
            while (i < this.codeCount && currentCodeLength === this.codeLength[i]) {
                i++;
                if (++currentRepeatCount >= maxRepeatCount) {
                    break;
                }
            }
            if (currentRepeatCount < minRepeatCount) {
                while (currentRepeatCount-- > 0) {
                    blTree.writeCodeToStream(currentCodeLength);
                }
            }
            else if (currentCodeLength !== 0) {
                blTree.writeCodeToStream(16);
                this.writer.pendingBufferWriteBits(currentRepeatCount - 3, 2);
            }
            else if (currentRepeatCount <= 10) {
                blTree.writeCodeToStream(17);
                this.writer.pendingBufferWriteBits(currentRepeatCount - 3, 3);
            }
            else {
                blTree.writeCodeToStream(18);
                this.writer.pendingBufferWriteBits(currentRepeatCount - 11, 7);
            }
        }
    };
    /**
     * Build huffman tree
     * @returns {void}
     */
    CompressorHuffmanTree.prototype.buildTree = function () {
        var codesCount = this.codeFrequency.length;
        var arrTree = new Int32Array(codesCount);
        var treeLength = 0;
        var maxCount = 0;
        for (var n = 0; n < codesCount; n++) {
            var freq = this.codeFrequency[n];
            if (freq !== 0) {
                var pos = treeLength++;
                var pPos = 0;
                while (pos > 0 && this.codeFrequency[arrTree[pPos = Math.floor((pos - 1) / 2)]] > freq) {
                    arrTree[pos] = arrTree[pPos];
                    pos = pPos;
                }
                arrTree[pos] = n;
                maxCount = n;
            }
        }
        while (treeLength < 2) {
            arrTree[treeLength++] =
                (maxCount < 2) ? ++maxCount : 0;
        }
        this.codeCount = Math.max(maxCount + 1, this.codeMinCount);
        var leafsCount = treeLength;
        var nodesCount = leafsCount;
        var child = new Int32Array(4 * treeLength - 2);
        var values = new Int32Array(2 * treeLength - 1);
        for (var i = 0; i < treeLength; i++) {
            var node = arrTree[i];
            var iIndex = 2 * i;
            child[iIndex] = node;
            child[iIndex + 1] = -1;
            values[i] = (this.codeFrequency[node] << 8);
            arrTree[i] = i;
        }
        this.constructHuffmanTree(arrTree, treeLength, values, nodesCount, child);
        this.buildLength(child);
    };
    CompressorHuffmanTree.prototype.constructHuffmanTree = function (arrTree, treeLength, values, nodesCount, child) {
        do {
            var first = arrTree[0];
            var last = arrTree[--treeLength];
            var lastVal = values[last];
            var pPos = 0;
            var path = 1;
            while (path < treeLength) {
                if (path + 1 < treeLength && values[arrTree[path]] > values[arrTree[path + 1]]) {
                    path++;
                }
                arrTree[pPos] = arrTree[path];
                pPos = path;
                path = pPos * 2 + 1;
            }
            while ((path = pPos) > 0 && values[arrTree[pPos = Math.floor((path - 1) / 2)]] > lastVal) {
                arrTree[path] = arrTree[pPos];
            }
            arrTree[path] = last;
            var second = arrTree[0];
            last = nodesCount++;
            child[2 * last] = first;
            child[2 * last + 1] = second;
            var minDepth = Math.min(values[first] & 0xff, values[second] & 0xff);
            values[last] = lastVal = values[first] + values[second] - minDepth + 1;
            pPos = 0;
            path = 1;
            /* tslint:disable */
            while (path < treeLength) {
                if (path + 1 < treeLength && values[arrTree[path]] > values[arrTree[path + 1]]) {
                    path++;
                }
                arrTree[pPos] = arrTree[path];
                pPos = path;
                path = pPos * 2 + 1;
            } /* tslint:disable */
            while ((path = pPos) > 0 && values[arrTree[pPos = Math.floor((path - 1) / 2)]] > lastVal) {
                arrTree[path] = arrTree[pPos];
            }
            arrTree[path] = last;
        } while (treeLength > 1);
    };
    CompressorHuffmanTree.prototype.buildLength = function (child) {
        this.codeLength = new Uint8Array(this.codeFrequency.length);
        var numNodes = Math.floor(child.length / 2);
        var numLeafs = Math.floor((numNodes + 1) / 2);
        var overflow = 0;
        for (var i = 0; i < this.maxLength; i++) {
            this.lengthCount[i] = 0;
        }
        overflow = this.calculateOptimalCodeLength(child, overflow, numNodes);
        if (overflow === 0) {
            return;
        }
        var iIncreasableLength = this.maxLength - 1;
        do {
            while (this.lengthCount[--iIncreasableLength] === 0) {
                /* tslint:disable */
            }
            do {
                this.lengthCount[iIncreasableLength]--;
                this.lengthCount[++iIncreasableLength]++;
                overflow -= (1 << (this.maxLength - 1 - iIncreasableLength));
            } while (overflow > 0 && iIncreasableLength < this.maxLength - 1);
        } while (overflow > 0);
        this.recreateTree(child, overflow, numLeafs);
    };
    CompressorHuffmanTree.prototype.recreateTree = function (child, overflow, numLeafs) {
        this.lengthCount[this.maxLength - 1] += overflow;
        this.lengthCount[this.maxLength - 2] -= overflow;
        var nodePtr = 2 * numLeafs;
        for (var bits = this.maxLength; bits !== 0; bits--) {
            var n = this.lengthCount[bits - 1];
            while (n > 0) {
                var childPtr = 2 * child[nodePtr++];
                if (child[childPtr + 1] === -1) {
                    this.codeLength[child[childPtr]] = bits;
                    n--;
                }
            }
        }
    };
    CompressorHuffmanTree.prototype.calculateOptimalCodeLength = function (child, overflow, numNodes) {
        var lengths = new Int32Array(numNodes);
        lengths[numNodes - 1] = 0;
        for (var i = numNodes - 1; i >= 0; i--) {
            var childIndex = 2 * i + 1;
            if (child[childIndex] !== -1) {
                var bitLength = lengths[i] + 1;
                if (bitLength > this.maxLength) {
                    bitLength = this.maxLength;
                    overflow++;
                }
                lengths[child[childIndex - 1]] = lengths[child[childIndex]] = bitLength;
            }
            else {
                var bitLength = lengths[i];
                this.lengthCount[bitLength - 1]++;
                this.codeLength[child[childIndex - 1]] = lengths[i];
            }
        }
        return overflow;
    };
    CompressorHuffmanTree.reverseBits = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
    CompressorHuffmanTree.huffCodeLengthOrders = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    return CompressorHuffmanTree;
}());
export { CompressorHuffmanTree };
/**
 * Checksum calculator, based on Adler32 algorithm.
 */
var ChecksumCalculator = /** @class */ (function () {
    function ChecksumCalculator() {
    }
    /**
     * Updates checksum by calculating checksum of the
     * given buffer and adding it to current value.
     * @param {number} checksum - current checksum.
     * @param {Uint8Array} buffer - data byte array.
     * @param {number} offset - offset in the buffer.
     * @param {number} length - length of data to be used from the stream.
     * @returns {number}
     */
    ChecksumCalculator.checksumUpdate = function (checksum, buffer, offset, length) {
        var uint = new Uint32Array(1);
        uint[0] = checksum;
        var checksum_uint = uint[0];
        var s1 = uint[0] = checksum_uint & 65535;
        var s2 = uint[0] = checksum_uint >> ChecksumCalculator.checkSumBitOffset;
        while (length > 0) {
            var steps = Math.min(length, ChecksumCalculator.checksumIterationCount);
            length -= steps;
            while (--steps >= 0) {
                s1 = s1 + (uint[0] = (buffer[offset++] & 255));
                s2 = s2 + s1;
            }
            s1 %= ChecksumCalculator.checksumBase;
            s2 %= ChecksumCalculator.checksumBase;
        }
        checksum_uint = (s2 << ChecksumCalculator.checkSumBitOffset) | s1;
        return checksum_uint;
    };
    ChecksumCalculator.checkSumBitOffset = 16;
    ChecksumCalculator.checksumBase = 65521;
    ChecksumCalculator.checksumIterationCount = 3800;
    return ChecksumCalculator;
}());
export { ChecksumCalculator };
