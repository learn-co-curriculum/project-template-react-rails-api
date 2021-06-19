import { DateFormatOptions } from '../internationalization';
/**
 * Date Parser.
 * @private
 */
export declare class DateParser {
    /**
     * Returns the parser function for given skeleton.
     * @param {string} -  Specifies the culture name to be which formatting.
     * @param {DateFormatOptions} - Specific the format in which string date  will be parsed.
     * @param {cldr} - Specifies the global cldr data collection.
     *  @return Function.
     */
    static dateParser(culture: string, option: DateFormatOptions, cldr: Object): Function;
    /**
     * Returns date object for provided date options
     * @param {DateParts} options
     * @param {Date} value
     * @returns {Date}
     */
    private static getDateObject;
    /**
     * Returns date parsing options for provided value along with parse and numeric options
     * @param {string} value
     * @param {ParseOptions} parseOptions
     * @param {NumericOptions} num
     * @returns {DateParts}
     */
    private static internalDateParse;
    /**
     * Returns parsed number for provided Numeric string and Numeric Options
     * @param {string} value
     * @param {NumericOptions} option
     * @returns {number}
     */
    private static internalNumberParser;
    /**
     * Returns parsed time zone RegExp for provided hour format and time zone
     * @param {string} hourFormat
     * @param {base.TimeZoneOptions} tZone
     * @param {string} nRegex
     * @returns {string}
     */
    private static parseTimeZoneRegx;
    /**
     * Returns zone based value.
     * @param {boolean} flag
     * @param {string} val1
     * @param {string} val2
     * @param {NumericOptions} num
     * @returns {number}
     */
    private static getZoneValue;
}
