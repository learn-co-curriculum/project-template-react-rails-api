/**
 * Encoding class: Contains the details about encoding type, whether to write a Unicode byte order mark (BOM).
 * ```typescript
 * let encoding : Encoding = new Encoding();
 * encoding.type = 'Utf8';
 * encoding.getBytes('Encoding', 0, 5);
 * ```
 */
var Encoding = /** @class */ (function () {
    /**
     * Initializes a new instance of the Encoding class. A parameter specifies whether to write a Unicode byte order mark
     * @param  {boolean} includeBom?-true to specify that a Unicode byte order mark is written; otherwise, false.
     */
    function Encoding(includeBom) {
        this.emitBOM = true;
        this.encodingType = 'Ansi';
        this.initBOM(includeBom);
    }
    Object.defineProperty(Encoding.prototype, "includeBom", {
        /**
         * Gets a value indicating whether to write a Unicode byte order mark
         * @returns boolean- true to specify that a Unicode byte order mark is written; otherwise, false
         */
        get: function () {
            return this.emitBOM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Encoding.prototype, "type", {
        /**
         * Gets the encoding type.
         * @returns EncodingType
         */
        get: function () {
            return this.encodingType;
        },
        /**
         * Sets the encoding type.
         * @param  {EncodingType} value
         */
        set: function (value) {
            this.encodingType = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize the includeBom to emit BOM or Not
     * @param  {boolean} includeBom
     */
    Encoding.prototype.initBOM = function (includeBom) {
        if (includeBom === undefined || includeBom === null) {
            this.emitBOM = true;
        }
        else {
            this.emitBOM = includeBom;
        }
    };
    /**
     * Calculates the number of bytes produced by encoding the characters in the specified string
     * @param  {string} chars - The string containing the set of characters to encode
     * @returns {number} - The number of bytes produced by encoding the specified characters
     */
    Encoding.prototype.getByteCount = function (chars) {
        var byteCount = 0;
        validateNullOrUndefined(chars, 'string');
        if (chars === '') {
            var byte = this.utf8Len(chars.charCodeAt(0));
            return byte;
        }
        if (this.type === null || this.type === undefined) {
            this.type = 'Ansi';
        }
        return this.getByteCountInternal(chars, 0, chars.length);
    };
    /**
     * Return the Byte of character
     * @param  {number} codePoint
     * @returns {number}
     */
    Encoding.prototype.utf8Len = function (codePoint) {
        var bytes = codePoint <= 0x7F ? 1 :
            codePoint <= 0x7FF ? 2 :
                codePoint <= 0xFFFF ? 3 :
                    codePoint <= 0x1FFFFF ? 4 : 0;
        return bytes;
    };
    /**
     * for 4 byte character return surrogate pair true, otherwise false
     * @param  {number} codeUnit
     * @returns {boolean}
     */
    Encoding.prototype.isHighSurrogate = function (codeUnit) {
        return codeUnit >= 0xD800 && codeUnit <= 0xDBFF;
    };
    /**
     * for 4byte character generate the surrogate pair
     * @param  {number} highCodeUnit
     * @param  {number} lowCodeUnit
     */
    Encoding.prototype.toCodepoint = function (highCodeUnit, lowCodeUnit) {
        highCodeUnit = (0x3FF & highCodeUnit) << 10;
        var u = highCodeUnit | (0x3FF & lowCodeUnit);
        return u + 0x10000;
    };
    /**
     * private method to get the byte count for specific charindex and count
     * @param  {string} chars
     * @param  {number} charIndex
     * @param  {number} charCount
     */
    Encoding.prototype.getByteCountInternal = function (chars, charIndex, charCount) {
        var byteCount = 0;
        if (this.encodingType === 'Utf8' || this.encodingType === 'Unicode') {
            var isUtf8 = this.encodingType === 'Utf8';
            for (var i = 0; i < charCount; i++) {
                var charCode = chars.charCodeAt(isUtf8 ? charIndex : charIndex++);
                if (this.isHighSurrogate(charCode)) {
                    if (isUtf8) {
                        var high = charCode;
                        var low = chars.charCodeAt(++charIndex);
                        byteCount += this.utf8Len(this.toCodepoint(high, low));
                    }
                    else {
                        byteCount += 4;
                        ++i;
                    }
                }
                else {
                    if (isUtf8) {
                        byteCount += this.utf8Len(charCode);
                    }
                    else {
                        byteCount += 2;
                    }
                }
                if (isUtf8) {
                    charIndex++;
                }
            }
            return byteCount;
        }
        else {
            byteCount = charCount;
            return byteCount;
        }
    };
    /**
     * Encodes a set of characters from the specified string into the ArrayBuffer.
     * @param  {string} s- The string containing the set of characters to encode
     * @param  {number} charIndex-The index of the first character to encode.
     * @param  {number} charCount- The number of characters to encode.
     * @returns {ArrayBuffer} - The ArrayBuffer that contains the resulting sequence of bytes.
     */
    Encoding.prototype.getBytes = function (s, charIndex, charCount) {
        validateNullOrUndefined(s, 'string');
        validateNullOrUndefined(charIndex, 'charIndex');
        validateNullOrUndefined(charCount, 'charCount');
        if (charIndex < 0 || charCount < 0) {
            throw new RangeError('Argument Out Of Range Exception: charIndex or charCount is less than zero');
        }
        if (s.length - charIndex < charCount) {
            throw new RangeError('Argument Out Of Range Exception: charIndex and charCount do not denote a valid range in string');
        }
        var bytes;
        if (s === '') {
            bytes = new ArrayBuffer(0);
            return bytes;
        }
        if (this.type === null || this.type === undefined) {
            this.type = 'Ansi';
        }
        var byteCount = this.getByteCountInternal(s, charIndex, charCount);
        switch (this.type) {
            case 'Utf8':
                bytes = this.getBytesOfUtf8Encoding(byteCount, s, charIndex, charCount);
                return bytes;
            case 'Unicode':
                bytes = this.getBytesOfUnicodeEncoding(byteCount, s, charIndex, charCount);
                return bytes;
            default:
                bytes = this.getBytesOfAnsiEncoding(byteCount, s, charIndex, charCount);
                return bytes;
        }
    };
    /**
     * Decodes a sequence of bytes from the specified ArrayBuffer into the string.
     * @param  {ArrayBuffer} bytes- The ArrayBuffer containing the sequence of bytes to decode.
     * @param  {number} index- The index of the first byte to decode.
     * @param  {number} count- The number of bytes to decode.
     * @returns {string} - The string that contains the resulting set of characters.
     */
    Encoding.prototype.getString = function (bytes, index, count) {
        validateNullOrUndefined(bytes, 'bytes');
        validateNullOrUndefined(index, 'index');
        validateNullOrUndefined(count, 'count');
        if (index < 0 || count < 0) {
            throw new RangeError('Argument Out Of Range Exception: index or count is less than zero');
        }
        if (bytes.byteLength - index < count) {
            throw new RangeError('Argument Out Of Range Exception: index and count do not denote a valid range in bytes');
        }
        if (bytes.byteLength === 0 || count === 0) {
            return '';
        }
        if (this.type === null || this.type === undefined) {
            this.type = 'Ansi';
        }
        var out = '';
        var byteCal = new Uint8Array(bytes);
        switch (this.type) {
            case 'Utf8':
                var s = this.getStringOfUtf8Encoding(byteCal, index, count);
                return s;
            case 'Unicode':
                var byteUnicode = new Uint16Array(bytes);
                out = this.getStringofUnicodeEncoding(byteUnicode, index, count);
                return out;
            default:
                var j = index;
                for (var i = 0; i < count; i++) {
                    var c = byteCal[j];
                    out += String.fromCharCode(c); // 1 byte(ASCII) character                  
                    j++;
                }
                return out;
        }
    };
    Encoding.prototype.getBytesOfAnsiEncoding = function (byteCount, s, charIndex, charCount) {
        var bytes = new ArrayBuffer(byteCount);
        var bufview = new Uint8Array(bytes);
        var k = 0;
        for (var i = 0; i < charCount; i++) {
            var charcode = s.charCodeAt(charIndex++);
            if (charcode < 0x800) {
                bufview[k] = charcode;
            }
            else {
                bufview[k] = 63; //replacement character '?'
            }
            k++;
        }
        return bytes;
    };
    Encoding.prototype.getBytesOfUtf8Encoding = function (byteCount, s, charIndex, charCount) {
        var bytes = new ArrayBuffer(byteCount);
        var uint = new Uint8Array(bytes);
        var index = charIndex;
        var j = 0;
        for (var i = 0; i < charCount; i++) {
            var charcode = s.charCodeAt(index);
            if (charcode <= 0x7F) { // 1 byte character 2^7
                uint[j] = charcode;
            }
            else if (charcode < 0x800) { // 2 byte character 2^11
                uint[j] = 0xc0 | (charcode >> 6);
                uint[++j] = 0x80 | (charcode & 0x3f);
            }
            else if ((charcode < 0xd800 || charcode >= 0xe000)) { // 3 byte character 2^16        
                uint[j] = 0xe0 | (charcode >> 12);
                uint[++j] = 0x80 | ((charcode >> 6) & 0x3f);
                uint[++j] = 0x80 | (charcode & 0x3f);
            }
            else {
                uint[j] = 0xef;
                uint[++j] = 0xbf;
                uint[++j] = 0xbd; // U+FFFE "replacement character"
            }
            ++j;
            ++index;
        }
        return bytes;
    };
    Encoding.prototype.getBytesOfUnicodeEncoding = function (byteCount, s, charIndex, charCount) {
        var bytes = new ArrayBuffer(byteCount);
        var uint16 = new Uint16Array(bytes);
        for (var i = 0; i < charCount; i++) {
            var charcode = s.charCodeAt(i);
            uint16[i] = charcode;
        }
        return bytes;
    };
    Encoding.prototype.getStringOfUtf8Encoding = function (byteCal, index, count) {
        var j = 0;
        var i = index;
        var s = '';
        for (j; j < count; j++) {
            var c = byteCal[i++];
            while (i > byteCal.length) {
                return s;
            }
            if (c > 127) {
                if (c > 191 && c < 224 && i < count) {
                    c = (c & 31) << 6 | byteCal[i] & 63;
                }
                else if (c > 223 && c < 240 && i < byteCal.byteLength) {
                    c = (c & 15) << 12 | (byteCal[i] & 63) << 6 | byteCal[++i] & 63;
                }
                else if (c > 239 && c < 248 && i < byteCal.byteLength) {
                    c = (c & 7) << 18 | (byteCal[i] & 63) << 12 | (byteCal[++i] & 63) << 6 | byteCal[++i] & 63;
                }
                ++i;
            }
            s += String.fromCharCode(c); // 1 byte(ASCII) character                          
        }
        return s;
    };
    Encoding.prototype.getStringofUnicodeEncoding = function (byteUni, index, count) {
        if (count > byteUni.length) {
            throw new RangeError('ArgumentOutOfRange_Count');
        }
        var byte16 = new Uint16Array(count);
        var out = '';
        for (var i = 0; i < count && i < byteUni.length; i++) {
            byte16[i] = byteUni[index++];
        }
        out = String.fromCharCode.apply(null, byte16);
        return out;
    };
    /**
     * To clear the encoding instance
     * @return {void}
     */
    Encoding.prototype.destroy = function () {
        this.emitBOM = undefined;
        this.encodingType = undefined;
    };
    return Encoding;
}());
export { Encoding };
/**
 * To check the object is null or undefined and throw error if it is null or undefined
 * @param {Object} value - object to check is null or undefined
 * @return {boolean}
 * @throws {ArgumentException} - if the value is null or undefined
 * @private
 */
export function validateNullOrUndefined(value, message) {
    if (value === null || value === undefined) {
        throw new Error('ArgumentException: ' + message + ' cannot be null or undefined');
    }
}
