import { DateFormatOptions } from '../internationalization';
import { NumberMapper } from './parser-base';
import { IntlBase as base } from './intl-base';
export declare const basicPatterns: string[];
/**
 * Interface for Date Format Options Modules.
 * @private
 */
export interface FormatOptions {
    month?: Object;
    weekday?: Object;
    pattern?: string;
    designator?: Object;
    timeZone?: base.TimeZoneOptions;
    era?: Object;
    hour12?: boolean;
    numMapper?: NumberMapper;
    dateSeperator?: string;
    isIslamic?: boolean;
    weekOfYear?: string;
}
export declare const datePartMatcher: {
    [key: string]: Object;
};
/**
 * Date Format is a framework provides support for date formatting.
 * @private
 */
export declare class DateFormat {
    /**
     * Returns the formatter function for given skeleton.
     * @param {string} -  Specifies the culture name to be which formatting.
     * @param {DateFormatOptions} - Specific the format in which date  will format.
     * @param {cldr} - Specifies the global cldr data collection.
     * @return Function.
     */
    static dateFormat(culture: string, option: DateFormatOptions, cldr: Object): Function;
    /**
     * Returns formatted date string based on options passed.
     * @param {Date} value
     * @param {FormatOptions} options
     */
    private static intDateFormatter;
    private static getCurrentDateValue;
    /**
     * Returns two digit numbers for given value and length
     */
    private static checkTwodigitNumber;
    /**
     * Returns the value of the Time Zone.
     * @param {number} tVal
     * @param {string} pattern
     * @private
     */
    static getTimeZoneValue(tVal: number, pattern: string): string;
}
