import { NumberFormatOptions, DateFormatOptions } from '../internationalization';
import { FormatParts, CommonOptions } from './number-formatter';
export declare const blazorCultureFormats: Object;
/**
 * Date base common constants and function for date parser and formatter.
 */
export declare namespace IntlBase {
    const negativeDataRegex: RegExp;
    const customRegex: RegExp;
    const latnParseRegex: RegExp;
    const defaultCurrency: string;
    const dateConverterMapper: RegExp;
    const islamicRegex: RegExp;
    interface NumericSkeleton {
        type?: string;
        isAccount?: boolean;
        fractionDigits?: number;
    }
    interface GenericFormatOptions {
        nData?: NegativeData;
        pData?: NegativeData;
        zeroData?: NegativeData;
    }
    interface GroupSize {
        primary?: number;
        secondary?: number;
    }
    interface NegativeData extends FormatParts {
        nlead?: string;
        nend?: string;
        groupPattern?: string;
        minimumFraction?: number;
        maximumFraction?: number;
    }
    const formatRegex: RegExp;
    const currencyFormatRegex: RegExp;
    const curWithoutNumberRegex: RegExp;
    const dateParseRegex: RegExp;
    const basicPatterns: string[];
    interface Dependables {
        parserObject?: Object;
        dateObject?: Object;
        numericObject?: Object;
    }
    interface TimeZoneOptions {
        hourFormat?: string;
        gmtFormat?: string;
        gmtZeroFormat?: string;
    }
    const defaultObject: Object;
    const blazorDefaultObject: Object;
    const monthIndex: Object;
    /**
     *
     */
    const month: string;
    const days: string;
    /**
     * Default numerber Object
     */
    const patternMatcher: {
        [key: string]: Object;
    };
    /**
     * Returns the resultant pattern based on the skeleton, dateObject and the type provided
     * @private
     * @param {string} skeleton
     * @param {Object} dateObject
     * @param {string} type
     * @returns {string}
     */
    function getResultantPattern(skeleton: string, dateObject: Object, type: string, isIslamic?: boolean, blazorCulture?: string): string;
    interface DateObject {
        year?: number;
        month?: number;
        date?: number;
    }
    /**
     * Returns the dependable object for provided cldr data and culture
     * @private
     * @param {Object} cldr
     * @param {string} culture
     * @param {boolean} isNumber
     * @returns {Dependables}
     */
    function getDependables(cldr: Object, culture: string, mode: string, isNumber?: boolean): Dependables;
    /**
     * Returns the symbol pattern for provided parameters
     * @private
     * @param {string} type
     * @param {string} numSystem
     * @param {Object} obj
     * @param {boolean} isAccount
     * @returns {string}
     */
    function getSymbolPattern(type: string, numSystem: string, obj: Object, isAccount: boolean): string;
    function ConvertDateToWeekFormat(format: string): string;
    function compareBlazorDateFormats(formatOptions: DateFormatOptions, culture?: string): DateFormatOptions;
    /**
     * Returns proper numeric skeleton
     * @private
     * @param {string} skeleton
     * @returns {NumericSkeleton}
     */
    function getProperNumericSkeleton(skeleton: string): NumericSkeleton;
    /**
     * Returns format data for number formatting like minimum fraction, maximum fraction, etc..,
     * @private
     * @param {string} pattern
     * @param {boolean} needFraction
     * @param {string} cSymbol
     * @param {boolean} fractionOnly
     * @returns {NegativeData}
     */
    function getFormatData(pattern: string, needFraction: boolean, cSymbol: string, fractionOnly?: boolean): NegativeData;
    /**
     * Returns currency symbol based on currency code
     * @private
     * @param {Object} numericObject
     * @param {string} currencyCode
     * @returns {string}
     */
    function getCurrencySymbol(numericObject: Object, currencyCode: string, altSymbol?: string): string;
    /**
     * Returns formatting options for custom number format
     * @private
     * @param {string} format
     * @param {CommonOptions} dOptions
     * @param {Dependables} obj
     * @returns {GenericFormatOptions}
     */
    function customFormat(format: string, dOptions: CommonOptions, obj: Dependables): GenericFormatOptions;
    /**
     * Returns formatting options for currency or percent type
     * @private
     * @param {string[]} parts
     * @param {string} actual
     * @param {string} symbol
     * @returns {NegativeData}
     */
    function isCurrencyPercent(parts: string[], actual: string, symbol: string): NegativeData;
    /**
     * Returns culture based date separator
     * @private
     * @param {Object} dateObj
     * @returns {string}
     */
    function getDateSeparator(dateObj: Object): string;
    /**
     * Returns Native Date Time pattern
     * @private
     * @param {string} culture
     * @param {DateFormatOptions} options
     * @param {Object} cldr
     * @returns {string}
     */
    function getActualDateTimeFormat(culture: string, options: DateFormatOptions, cldr?: Object, isExcelFormat?: boolean): string;
    /**
     * Returns Native Number pattern
     * @private
     * @param {string} culture
     * @param {NumberFormatOptions} options
     * @param {Object} cldr
     * @returns {string}
     */
    function getActualNumberFormat(culture: string, options: NumberFormatOptions, cldr?: Object, isExcel?: Boolean): string;
    function getWeekData(culture: string, cldr?: Object): number;
    /**
     * @private
     * @param pData
     * @param aCurrency
     * @param rCurrency
     */
    function replaceBlazorCurrency(pData: NegativeData[], aCurrency: string, rCurrency: string): void;
    /**
     * @private
     */
    function getWeekOfYear(date: Date): number;
}
