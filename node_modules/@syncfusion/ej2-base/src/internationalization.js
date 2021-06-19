import { DateFormat } from './intl/date-formatter';
import { NumberFormat } from './intl/number-formatter';
import { DateParser } from './intl/date-parser';
import { NumberParser } from './intl/number-parser';
import { IntlBase } from './intl/intl-base';
import { extend, getValue, isBlazor } from './util';
import { Observer } from './observer';
/**
 * Specifies the observer used for external change detection.
 */
export var onIntlChange = new Observer();
/**
 * Specifies the default rtl status for EJ2 components.
 */
export var rightToLeft = false;
/**
 * Specifies the CLDR data loaded for internationalization functionalities.
 * @private
 */
export var cldrData = {};
/**
 * Specifies the default culture value to be considered.
 * @private
 */
export var defaultCulture = 'en-US';
/**
 * Specifies default currency code to be considered
 * @private
 */
export var defaultCurrencyCode = 'USD';
var mapper = ['numericObject', 'dateObject'];
/**
 * Internationalization class provides support to parse and format the number and date object to the desired format.
 * ```typescript
 * // To set the culture globally
 * setCulture('en-GB');
 *
 * // To set currency code globally
 * setCurrencyCode('EUR');
 *
 * //Load cldr data
 * loadCldr(gregorainData);
 * loadCldr(timeZoneData);
 * loadCldr(numbersData);
 * loadCldr(numberSystemData);
 *
 * // To use formatter in component side
 * let Intl:Internationalization = new Internationalization();
 *
 * // Date formatting
 * let dateFormatter: Function = Intl.getDateFormat({skeleton:'long',type:'dateTime'});
 * dateFormatter(new Date('11/2/2016'));
 * dateFormatter(new Date('25/2/2030'));
 * Intl.formatDate(new Date(),{skeleton:'E'});
 *
 * //Number formatting
 * let numberFormatter: Function = Intl.getNumberFormat({skeleton:'C5'})
 * numberFormatter(24563334);
 * Intl.formatNumber(123123,{skeleton:'p2'});
 *
 * // Date parser
 * let dateParser: Function = Intl.getDateParser({skeleton:'short',type:'time'});
 * dateParser('10:30 PM');
 * Intl.parseDate('10',{skeleton:'H'});
 * ```
 */
var Internationalization = /** @class */ (function () {
    function Internationalization(cultureName) {
        if (cultureName) {
            this.culture = cultureName;
        }
    }
    /**
     * Returns the format function for given options.
     * @param {DateFormatOptions} options - Specifies the format options in which the format function will return.
     * @returns {Function}
     */
    Internationalization.prototype.getDateFormat = function (options) {
        return DateFormat.dateFormat(this.getCulture(), options || { type: 'date', skeleton: 'short' }, cldrData);
    };
    /**
     * Returns the format function for given options.
     * @param {NumberFormatOptions} options - Specifies the format options in which the format function will return.
     * @returns {Function}
     */
    Internationalization.prototype.getNumberFormat = function (options) {
        if (options && !options.currency) {
            options.currency = defaultCurrencyCode;
        }
        if (isBlazor() && options && !options.format) {
            options.minimumFractionDigits = 0;
        }
        return NumberFormat.numberFormatter(this.getCulture(), options || {}, cldrData);
    };
    /**
     * Returns the parser function for given options.
     * @param {DateFormatOptions} options - Specifies the format options in which the parser function will return.
     * @returns {Function}
     */
    Internationalization.prototype.getDateParser = function (options) {
        return DateParser.dateParser(this.getCulture(), options || { skeleton: 'short', type: 'date' }, cldrData);
    };
    /**
     * Returns the parser function for given options.
     * @param {NumberFormatOptions} options - Specifies the format options in which the parser function will return.
     * @returns {Function}
     */
    Internationalization.prototype.getNumberParser = function (options) {
        if (isBlazor() && options && !options.format) {
            options.minimumFractionDigits = 0;
        }
        return NumberParser.numberParser(this.getCulture(), options || { format: 'N' }, cldrData);
    };
    /**
     * Returns the formatted string based on format options.
     * @param {Number} value - Specifies the number to format.
     * @param {NumberFormatOptions} option - Specifies the format options in which the number will be formatted.
     * @returns {string}
     */
    Internationalization.prototype.formatNumber = function (value, option) {
        return this.getNumberFormat(option)(value);
    };
    /**
     * Returns the formatted date string based on format options.
     * @param {Number} value - Specifies the number to format.
     * @param {DateFormatOptions} option - Specifies the format options in which the number will be formatted.
     * @returns {string}
     */
    Internationalization.prototype.formatDate = function (value, option) {
        return this.getDateFormat(option)(value);
    };
    /**
     * Returns the date object for given date string and options.
     * @param {string} value - Specifies the string to parse.
     * @param {DateFormatOptions} option - Specifies the parse options in which the date string will be parsed.
     * @returns {Date}
     */
    Internationalization.prototype.parseDate = function (value, option) {
        return this.getDateParser(option)(value);
    };
    /**
     * Returns the number object from the given string value and options.
     * @param {string} value - Specifies the string to parse.
     * @param {NumberFormatOptions} option - Specifies the parse options in which the  string number  will be parsed.
     * @returns {number}
     */
    Internationalization.prototype.parseNumber = function (value, option) {
        return this.getNumberParser(option)(value);
    };
    /**
     * Returns Native Date Time Pattern
     * @param {DateFormatOptions} option - Specifies the parse options for resultant date time pattern.
     * @param {boolean} isExcelFormat - Specifies format value to be converted to excel pattern.
     * @returns {string}
     * @private
     */
    Internationalization.prototype.getDatePattern = function (option, isExcelFormat) {
        return IntlBase.getActualDateTimeFormat(this.getCulture(), option, cldrData, isExcelFormat);
    };
    /**
     * Returns Native Number Pattern
     * @param {NumberFormatOptions} option - Specifies the parse options for resultant number pattern.
     * @returns {string}
     * @private
     */
    Internationalization.prototype.getNumberPattern = function (option, isExcel) {
        return IntlBase.getActualNumberFormat(this.getCulture(), option, cldrData, isExcel);
    };
    /**
     * Returns the First Day of the Week
     * @returns {number}
     */
    Internationalization.prototype.getFirstDayOfWeek = function () {
        return IntlBase.getWeekData(this.getCulture(), cldrData);
    };
    Internationalization.prototype.getCulture = function () {
        return this.culture || defaultCulture;
    };
    return Internationalization;
}());
export { Internationalization };
/**
 * Set the default culture to all EJ2 components
 * @param {string} cultureName - Specifies the culture name to be set as default culture.
 */
export function setCulture(cultureName) {
    defaultCulture = cultureName;
    onIntlChange.notify('notifyExternalChange', { 'locale': defaultCulture });
}
/**
 * Set the default currency code to all EJ2 components
 * @param {string} currencyCode Specifies the culture name to be set as default culture.
 * @returns {void}
 */
export function setCurrencyCode(currencyCode) {
    defaultCurrencyCode = currencyCode;
    onIntlChange.notify('notifyExternalChange', { 'currencyCode': defaultCurrencyCode });
}
/**
 * Load the CLDR data into context
 * @param {Object[]} obj Specifies the CLDR data's to be used for formatting and parser.
 * @returns {void}
 */
export function loadCldr() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
        var obj = data_1[_a];
        extend(cldrData, obj, {}, true);
    }
}
/**
 * To enable or disable RTL functionality for all components globally.
 * @param {boolean} status - Optional argument Specifies the status value to enable or disable rtl option.
 * @returns {void}
 */
export function enableRtl(status) {
    if (status === void 0) { status = true; }
    rightToLeft = status;
    onIntlChange.notify('notifyExternalChange', { enableRtl: rightToLeft });
}
/**
 * To get the numeric CLDR object for given culture
 * @param {string} locale - Specifies the locale for which numericObject to be returned.
 * @ignore
 * @private
 */
export function getNumericObject(locale, type) {
    /* tslint:disable no-any */
    var numObject = IntlBase.getDependables(cldrData, locale, '', true)[mapper[0]];
    var dateObject = IntlBase.getDependables(cldrData, locale, '')[mapper[1]];
    var numSystem = getValue('defaultNumberingSystem', numObject);
    var symbPattern = isBlazor() ? getValue('numberSymbols', numObject) : getValue('symbols-numberSystem-' + numSystem, numObject);
    var pattern = IntlBase.getSymbolPattern(type || 'decimal', numSystem, numObject, false);
    return extend(symbPattern, IntlBase.getFormatData(pattern, true, '', true), { 'dateSeparator': IntlBase.getDateSeparator(dateObject) });
}
/**
 * To get the numeric CLDR  number base object for given culture
 * @param {string} locale - Specifies the locale for which numericObject to be returned.
 * @param {string} currency - Specifies the currency for which numericObject to be returned.
 * @ignore
 * @private
 */
export function getNumberDependable(locale, currency) {
    var numObject = IntlBase.getDependables(cldrData, locale, '', true);
    return IntlBase.getCurrencySymbol(numObject.numericObject, currency);
}
/**
 * To get the default date CLDR object.
 * @ignore
 * @private
 */
export function getDefaultDateObject(mode) {
    return IntlBase.getDependables(cldrData, '', mode, false)[mapper[1]];
}
