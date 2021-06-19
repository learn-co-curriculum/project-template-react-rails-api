import { NumberFormatOptions } from '../internationalization';
import { IntlBase as base } from './intl-base';
/**
 * interface for Numeric Formatting Parts
 */
export interface NumericParts {
    symbolRegex?: RegExp;
    nData?: base.NegativeData;
    pData?: base.NegativeData;
    infinity?: string;
    type?: string;
    fractionDigits?: number;
    isAccount?: boolean;
    custom?: boolean;
    maximumFractionDigits?: number;
}
/**
 * Module for Number Parser.
 * @private
 */
export declare class NumberParser {
    /**
     * Returns the parser function for given skeleton.
     * @param {string} -  Specifies the culture name to be which formatting.
     * @param {NumberFormatOptions} - Specific the format in which number  will parsed.
     * @param {cldr} - Specifies the global cldr data collection.
     * @return Function.
     */
    static numberParser(culture: string, option: NumberFormatOptions, cldr: Object): Function;
    /**
     * Returns parsed number for the provided formatting options
     * @param {string} value
     * @param {NumericParts} options
     * @param {NumericOptions} numOptions
     * @returns {number}
     */
    private static getParsedNumber;
    private static convertMaxFracDigits;
}
