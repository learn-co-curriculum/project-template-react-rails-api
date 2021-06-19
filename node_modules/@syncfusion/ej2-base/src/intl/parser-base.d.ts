/**
 * Parser
 */
/**
 * Interface for numeric Options
 */
export interface NumericOptions {
    numericPair?: Object;
    numericRegex?: string;
    numberParseRegex?: RegExp;
    symbolNumberSystem?: Object;
    symbolMatch?: Object;
    numberSystem?: string;
}
/**
 * Interface for numeric object
 */
export interface NumericObject {
    obj?: Object;
    nSystem?: string;
}
/**
 * Interface for number mapper
 */
export interface NumberMapper {
    mapper?: Object;
    timeSeparator?: string;
    numberSymbols?: Object;
    numberSystem?: string;
}
/**
 * Interface for parser base
 * @private
 */
export declare class ParserBase {
    static nPair: string;
    static nRegex: string;
    static numberingSystems: Object;
    /**
     * Returns the cldr object for the culture specifies
     * @param {Object} obj - Specifies the object from which culture object to be acquired.
     * @param {string} cName - Specifies the culture name.
     * @returns {Object}
     */
    static getMainObject(obj: Object, cName: string): Object;
    /**
     * Returns the numbering system object from given cldr data.
     * @param {Object} obj - Specifies the object from which number system is acquired.
     * @returns {Object}
     */
    static getNumberingSystem(obj: Object): Object;
    /**
     * Returns the reverse of given object keys or keys specified.
     * @param {Object} prop - Specifies the object to be reversed.
     * @param {number[]} keys - Optional parameter specifies the custom keyList for reversal.
     * @returns {Object}
     */
    static reverseObject(prop: Object, keys?: number[]): Object;
    /**
     * Returns the symbol regex by skipping the escape sequence.
     * @param {string[]} props - Specifies the array values to be skipped.
     * @returns {RegExp}
     */
    static getSymbolRegex(props: string[]): RegExp;
    private static getSymbolMatch;
    /**
     * Returns regex string for provided value
     * @param {string} val
     * @returns {string}
     */
    private static constructRegex;
    /**
     * Returns the replaced value of matching regex and obj mapper.
     * @param {string} value - Specifies the  values to be replaced.
     * @param {RegExp} regex - Specifies the  regex to search.
     * @param {Object} obj - Specifies the  object matcher to be replace value parts.
     * @returns {string}
     */
    static convertValueParts(value: string, regex: RegExp, obj: Object): string;
    /**
     * Returns default numbering system object for formatting from cldr data
     * @param {Object} obj
     * @returns {NumericObject}
     */
    static getDefaultNumberingSystem(obj: Object): NumericObject;
    /**
     * Returns the replaced value of matching regex and obj mapper.
     */
    static getCurrentNumericOptions(curObj: Object, numberSystem: Object, needSymbols?: boolean, blazorMode?: boolean): Object;
    /**
     * Returns number mapper object for the provided cldr data
     * @param {Object} curObj
     * @param {Object} numberSystem
     * @param {boolean} isNumber
     * @returns {NumberMapper}
     */
    static getNumberMapper(curObj: Object, numberSystem: Object, isNumber?: boolean): NumberMapper;
}
export declare function getBlazorCurrencySymbol(currencyCode: string): string;
