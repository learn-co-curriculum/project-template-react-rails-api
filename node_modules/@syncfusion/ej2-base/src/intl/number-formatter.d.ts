import { NumberFormatOptions } from '../internationalization';
import { IntlBase as base } from './intl-base';
import { NumberMapper } from './parser-base';
/**
 * Interface for default formatting options
 * @private
 */
export interface FormatParts extends base.NumericSkeleton, NumberFormatOptions {
    groupOne?: boolean;
    isPercent?: boolean;
    isCurrency?: boolean;
    isNegative?: boolean;
    groupData?: GroupDetails;
    groupSeparator?: string;
}
/**
 * Interface for common formatting options
 */
export interface CommonOptions {
    numberMapper?: NumberMapper;
    currencySymbol?: string;
    percentSymbol?: string;
    minusSymbol?: string;
}
/**
 * Interface for grouping process
 */
export interface GroupDetails {
    primary?: number;
    secondary?: number;
}
/**
 * Module for number formatting.
 * @private
 */
export declare class NumberFormat {
    /**
     * Returns the formatter function for given skeleton.
     * @param {string} culture -  Specifies the culture name to be which formatting.
     * @param {NumberFormatOptions} option - Specific the format in which number  will format.
     * @param {Object} object- Specifies the global cldr data collection.
     * @return Function.
     */
    static numberFormatter(culture: string, option: NumberFormatOptions, cldr: Object): Function;
    /**
     * Returns grouping details for the pattern provided
     * @param {string} pattern
     * @returns {GroupDetails}
     */
    static getGroupingDetails(pattern: string): GroupDetails;
    /**
     * Returns if the provided integer range is valid.
     * @param {number} val1
     * @param {number} val2
     * @param {boolean} checkbothExist
     * @param {boolean} isFraction
     * @returns {boolean}
     */
    private static checkValueRange;
    /**
     * Check if the provided fraction range is valid
     * @param {number} val
     * @param {string} text
     * @param {boolean} isFraction
     * @returns {void}
     */
    private static checkRange;
    /**
     * Returns formatted numeric string for provided formatting options
     * @param {number} value
     * @param {base.GenericFormatOptions} fOptions
     * @param {CommonOptions} dOptions
     * @returns {string}
     */
    private static intNumberFormatter;
    /**
     * Returns significant digits processed numeric string
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @returns {string}
     */
    private static processSignificantDigits;
    /**
     * Returns grouped numeric string
     * @param {string} val
     * @param {number} level1
     * @param {string} sep
     * @param {string} decimalSymbol
     * @param {number} level2
     * @returns {string}
     */
    private static groupNumbers;
    /**
     * Returns fraction processed numeric string
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @returns {string}
     */
    private static processFraction;
    /**
     * Returns integer processed numeric string
     * @param {string} value
     * @param {number} min
     * @returns {string}
     */
    private static processMinimumIntegers;
}
