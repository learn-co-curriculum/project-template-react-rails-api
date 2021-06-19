/**
 * Encoding class: Contains the details about encoding type, whether to write a Unicode byte order mark (BOM).
 * ```typescript
 * let encoding : Encoding = new Encoding();
 * encoding.type = 'Utf8';
 * encoding.getBytes('Encoding', 0, 5);
 * ```
 */
export declare class Encoding {
    private emitBOM;
    private encodingType;
    /**
     * Gets a value indicating whether to write a Unicode byte order mark
     * @returns boolean- true to specify that a Unicode byte order mark is written; otherwise, false
     */
    readonly includeBom: boolean;
    /**
     * Gets the encoding type.
     * @returns EncodingType
     */
    /**
    * Sets the encoding type.
    * @param  {EncodingType} value
    */
    type: EncodingType;
    /**
     * Initializes a new instance of the Encoding class. A parameter specifies whether to write a Unicode byte order mark
     * @param  {boolean} includeBom?-true to specify that a Unicode byte order mark is written; otherwise, false.
     */
    constructor(includeBom?: boolean);
    /**
     * Initialize the includeBom to emit BOM or Not
     * @param  {boolean} includeBom
     */
    private initBOM;
    /**
     * Calculates the number of bytes produced by encoding the characters in the specified string
     * @param  {string} chars - The string containing the set of characters to encode
     * @returns {number} - The number of bytes produced by encoding the specified characters
     */
    getByteCount(chars: string): number;
    /**
     * Return the Byte of character
     * @param  {number} codePoint
     * @returns {number}
     */
    private utf8Len;
    /**
     * for 4 byte character return surrogate pair true, otherwise false
     * @param  {number} codeUnit
     * @returns {boolean}
     */
    private isHighSurrogate;
    /**
     * for 4byte character generate the surrogate pair
     * @param  {number} highCodeUnit
     * @param  {number} lowCodeUnit
     */
    private toCodepoint;
    /**
     * private method to get the byte count for specific charindex and count
     * @param  {string} chars
     * @param  {number} charIndex
     * @param  {number} charCount
     */
    private getByteCountInternal;
    /**
     * Encodes a set of characters from the specified string into the ArrayBuffer.
     * @param  {string} s- The string containing the set of characters to encode
     * @param  {number} charIndex-The index of the first character to encode.
     * @param  {number} charCount- The number of characters to encode.
     * @returns {ArrayBuffer} - The ArrayBuffer that contains the resulting sequence of bytes.
     */
    getBytes(s: string, charIndex: number, charCount: number): ArrayBuffer;
    /**
     * Decodes a sequence of bytes from the specified ArrayBuffer into the string.
     * @param  {ArrayBuffer} bytes- The ArrayBuffer containing the sequence of bytes to decode.
     * @param  {number} index- The index of the first byte to decode.
     * @param  {number} count- The number of bytes to decode.
     * @returns {string} - The string that contains the resulting set of characters.
     */
    getString(bytes: ArrayBuffer, index: number, count: number): string;
    private getBytesOfAnsiEncoding;
    private getBytesOfUtf8Encoding;
    private getBytesOfUnicodeEncoding;
    private getStringOfUtf8Encoding;
    private getStringofUnicodeEncoding;
    /**
     * To clear the encoding instance
     * @return {void}
     */
    destroy(): void;
}
/**
 * EncodingType : Specifies the encoding type
 */
export declare type EncodingType = 
/**
 * Specifies the Ansi encoding
 */
'Ansi' | 
/**
 * Specifies the utf8 encoding
 */
'Utf8' | 
/**
 * Specifies the Unicode encoding
 */
'Unicode';
/**
 * To check the object is null or undefined and throw error if it is null or undefined
 * @param {Object} value - object to check is null or undefined
 * @return {boolean}
 * @throws {ArgumentException} - if the value is null or undefined
 * @private
 */
export declare function validateNullOrUndefined(value: Object, message: string): void;
