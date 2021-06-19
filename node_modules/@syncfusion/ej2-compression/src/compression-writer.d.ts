/**
 * represent compression stream writer
 * ```typescript
 * let compressedWriter = new CompressedStreamWriter();
 * let text: string = 'Hello world!!!';
 * compressedWriter.write(text, 0, text.length);
 * compressedWriter.close();
 * ```
 */
export declare class CompressedStreamWriter {
    private static isHuffmanTreeInitiated;
    private stream;
    private pendingBuffer;
    private pendingBufLength;
    private pendingBufCache;
    private pendingBufBitsInCache;
    private treeLiteral;
    private treeDistances;
    private treeCodeLengths;
    private bufferPosition;
    private arrLiterals;
    private arrDistances;
    private extraBits;
    private currentHash;
    private hashHead;
    private hashPrevious;
    private matchStart;
    private matchLength;
    private matchPrevAvail;
    private blockStart;
    private stringStart;
    private lookAhead;
    private dataWindow;
    private inputBuffer;
    private totalBytesIn;
    private inputOffset;
    private inputEnd;
    private windowSize;
    private windowMask;
    private hashSize;
    private hashMask;
    private hashShift;
    private maxDist;
    private checkSum;
    private noWrap;
    /**
     * get compressed data
     */
    readonly compressedData: Uint8Array[];
    readonly getCompressedString: string;
    /**
     * Initializes compressor and writes ZLib header if needed.
     * @param {boolean} noWrap - optional if true, ZLib header and checksum will not be written.
     */
    constructor(noWrap?: boolean);
    /**
     * Compresses data and writes it to the stream.
     * @param {Uint8Array} data - data to compress
     * @param {number} offset - offset in data
     * @param {number} length - length of the data
     * @returns {void}
     */
    write(data: Uint8Array | string, offset: number, length: number): void;
    /**
     * write ZLib header to the compressed data
     * @return {void}
     */
    writeZLibHeader(): void;
    /**
     *  Write Most Significant Bytes in to stream
     * @param {number} s - check sum value
     */
    pendingBufferWriteShortBytes(s: number): void;
    private compressData;
    private compressSlow;
    private discardMatch;
    private matchPreviousAvailable;
    private matchPreviousBest;
    private lookAheadCompleted;
    private huffmanIsFull;
    private fillWindow;
    private slideWindow;
    private insertString;
    private findLongestMatch;
    private updateHash;
    private huffmanTallyLit;
    private huffmanTallyDist;
    private huffmanFlushBlock;
    private huffmanFlushStoredBlock;
    private huffmanLengthCode;
    private huffmanDistanceCode;
    private huffmanSendAllTrees;
    private huffmanReset;
    private huffmanCompressBlock;
    /**
     * write bits in to internal buffer
     * @param {number} b - source of bits
     * @param {number} count - count of bits to write
     */
    pendingBufferWriteBits(b: number, count: number): void;
    private pendingBufferFlush;
    private pendingBufferFlushBits;
    private pendingBufferWriteByteBlock;
    private pendingBufferWriteShort;
    private pendingBufferAlignToByte;
    /**
     * Huffman Tree literal calculation
     * @private
     */
    static initHuffmanTree(): void;
    /**
     * close the stream and write all pending buffer in to stream
     * @returns {void}
     */
    close(): void;
    /**
     * release allocated un-managed resource
     * @returns {void}
     */
    destroy(): void;
}
/**
 * represent the Huffman Tree
 */
export declare class CompressorHuffmanTree {
    private codeFrequency;
    private codes;
    private codeLength;
    private lengthCount;
    private codeMinCount;
    private codeCount;
    private maxLength;
    private writer;
    private static reverseBits;
    static huffCodeLengthOrders: number[];
    readonly treeLength: number;
    readonly codeLengths: Uint8Array;
    readonly codeFrequencies: Uint16Array;
    /**
     * Create new Huffman Tree
     * @param {CompressedStreamWriter} writer instance
     * @param {number} elementCount - element count
     * @param {number} minCodes - minimum count
     * @param {number} maxLength - maximum count
     */
    constructor(writer: CompressedStreamWriter, elementCount: number, minCodes: number, maxLength: number);
    setStaticCodes(codes: Int16Array, lengths: Uint8Array): void;
    /**
     * reset all code data in tree
     * @returns {void}
     */
    reset(): void;
    /**
     * write code to the compressor output stream
     * @param {number} code - code to be written
     * @returns {void}
     */
    writeCodeToStream(code: number): void;
    /**
     * calculate code from their frequencies
     * @returns {void}
     */
    buildCodes(): void;
    static bitReverse(value: number): number;
    /**
     * calculate length of compressed data
     * @returns {number}
     */
    getEncodedLength(): number;
    /**
     * calculate code frequencies
     * @param {CompressorHuffmanTree} blTree
     * @returns {void}
     */
    calculateBLFreq(blTree: CompressorHuffmanTree): void;
    /**
     * @param {CompressorHuffmanTree} blTree - write tree to output stream
     * @returns {void}
     */
    writeTree(blTree: CompressorHuffmanTree): void;
    /**
     * Build huffman tree
     * @returns {void}
     */
    buildTree(): void;
    private constructHuffmanTree;
    private buildLength;
    private recreateTree;
    private calculateOptimalCodeLength;
}
/**
 * Checksum calculator, based on Adler32 algorithm.
 */
export declare class ChecksumCalculator {
    private static checkSumBitOffset;
    private static checksumBase;
    private static checksumIterationCount;
    /**
     * Updates checksum by calculating checksum of the
     * given buffer and adding it to current value.
     * @param {number} checksum - current checksum.
     * @param {Uint8Array} buffer - data byte array.
     * @param {number} offset - offset in the buffer.
     * @param {number} length - length of data to be used from the stream.
     * @returns {number}
     */
    static checksumUpdate(checksum: number, buffer: Uint8Array, offset: number, length: number): number;
}
