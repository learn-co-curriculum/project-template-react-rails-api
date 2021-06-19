import { isUndefined, throwError, isNullOrUndefined, extend, isBlazor, getValue } from '../util';
import { defaultCurrencyCode } from '../internationalization';
import { IntlBase as base } from './intl-base';
import { ParserBase as parser } from './parser-base';
var errorText = {
    'ms': 'minimumSignificantDigits',
    'ls': 'maximumSignificantDigits',
    'mf': 'minimumFractionDigits',
    'lf': 'maximumFractionDigits',
};
var integerError = 'minimumIntegerDigits';
var percentSign = 'percentSign';
var minusSign = 'minusSign';
var spaceRegex = /\s/;
var mapper = ['infinity', 'nan', 'group', 'decimal', 'exponential'];
var infinity = 'infinity';
var nan = 'nan';
/**
 * Module for number formatting.
 * @private
 */
var NumberFormat = /** @class */ (function () {
    function NumberFormat() {
    }
    /**
     * Returns the formatter function for given skeleton.
     * @param {string} culture -  Specifies the culture name to be which formatting.
     * @param {NumberFormatOptions} option - Specific the format in which number  will format.
     * @param {Object} object- Specifies the global cldr data collection.
     * @return Function.
     */
    NumberFormat.numberFormatter = function (culture, option, cldr) {
        var _this = this;
        var fOptions = extend({}, option);
        var cOptions = {};
        var dOptions = {};
        var symbolPattern;
        var dependable = base.getDependables(cldr, culture, '', true);
        var numObject = dependable.numericObject;
        dOptions.numberMapper = isBlazor() ? extend({}, numObject) :
            parser.getNumberMapper(dependable.parserObject, parser.getNumberingSystem(cldr), true);
        dOptions.currencySymbol = isBlazor() ? getValue('currencySymbol', numObject) : base.getCurrencySymbol(dependable.numericObject, fOptions.currency || defaultCurrencyCode, option.altSymbol);
        /* tslint:disable no-any */
        dOptions.percentSymbol = isBlazor() ? getValue('numberSymbols.percentSign', numObject) :
            dOptions.numberMapper.numberSymbols[percentSign];
        dOptions.minusSymbol = isBlazor() ? getValue('numberSymbols.minusSign', numObject) :
            dOptions.numberMapper.numberSymbols[minusSign];
        var symbols = dOptions.numberMapper.numberSymbols;
        if ((option.format) && !(base.formatRegex.test(option.format))) {
            cOptions = base.customFormat(option.format, dOptions, dependable.numericObject);
        }
        else {
            extend(fOptions, base.getProperNumericSkeleton(option.format || 'N'));
            fOptions.isCurrency = fOptions.type === 'currency';
            fOptions.isPercent = fOptions.type === 'percent';
            if (!isBlazor()) {
                symbolPattern = base.getSymbolPattern(fOptions.type, dOptions.numberMapper.numberSystem, dependable.numericObject, fOptions.isAccount);
            }
            fOptions.groupOne = this.checkValueRange(fOptions.maximumSignificantDigits, fOptions.minimumSignificantDigits, true);
            this.checkValueRange(fOptions.maximumFractionDigits, fOptions.minimumFractionDigits, false, true);
            if (!isUndefined(fOptions.fractionDigits)) {
                fOptions.minimumFractionDigits = fOptions.maximumFractionDigits = fOptions.fractionDigits;
            }
            if (isUndefined(fOptions.useGrouping)) {
                fOptions.useGrouping = true;
            }
            if (fOptions.isCurrency && !isBlazor()) {
                symbolPattern = symbolPattern.replace(/\u00A4/g, base.defaultCurrency);
            }
            if (!isBlazor()) {
                var split = symbolPattern.split(';');
                cOptions.nData = base.getFormatData(split[1] || '-' + split[0], true, dOptions.currencySymbol);
                cOptions.pData = base.getFormatData(split[0], false, dOptions.currencySymbol);
                if (fOptions.useGrouping) {
                    fOptions.groupSeparator = symbols[mapper[2]];
                    fOptions.groupData = this.getGroupingDetails(split[0]);
                }
            }
            else {
                cOptions.nData = extend({}, {}, getValue(fOptions.type + 'nData', numObject));
                cOptions.pData = extend({}, {}, getValue(fOptions.type + 'pData', numObject));
                if (fOptions.type === 'currency' && option.currency) {
                    base.replaceBlazorCurrency([cOptions.pData, cOptions.nData], dOptions.currencySymbol, option.currency);
                }
            }
            var minFrac = isUndefined(fOptions.minimumFractionDigits);
            if (minFrac) {
                fOptions.minimumFractionDigits = cOptions.nData.minimumFraction;
            }
            if (isUndefined(fOptions.maximumFractionDigits)) {
                var mval = cOptions.nData.maximumFraction;
                fOptions.maximumFractionDigits = isUndefined(mval) && fOptions.isPercent ? 0 : mval;
            }
            var mfrac = fOptions.minimumFractionDigits;
            var lfrac = fOptions.maximumFractionDigits;
            if (!isUndefined(mfrac) && !isUndefined(lfrac)) {
                if (mfrac > lfrac) {
                    fOptions.maximumFractionDigits = mfrac;
                }
            }
        }
        extend(cOptions.nData, fOptions);
        extend(cOptions.pData, fOptions);
        return function (value) {
            if (isNaN(value)) {
                return symbols[mapper[1]];
            }
            else if (!isFinite(value)) {
                return symbols[mapper[0]];
            }
            return _this.intNumberFormatter(value, cOptions, dOptions);
        };
    };
    /**
     * Returns grouping details for the pattern provided
     * @param {string} pattern
     * @returns {GroupDetails}
     */
    NumberFormat.getGroupingDetails = function (pattern) {
        var ret = {};
        var match = pattern.match(base.negativeDataRegex);
        if (match && match[4]) {
            var pattern_1 = match[4];
            var p = pattern_1.lastIndexOf(',');
            if (p !== -1) {
                var temp = pattern_1.split('.')[0];
                ret.primary = (temp.length - p) - 1;
                var s = pattern_1.lastIndexOf(',', p - 1);
                if (s !== -1) {
                    ret.secondary = p - 1 - s;
                }
            }
        }
        return ret;
    };
    /**
     * Returns if the provided integer range is valid.
     * @param {number} val1
     * @param {number} val2
     * @param {boolean} checkbothExist
     * @param {boolean} isFraction
     * @returns {boolean}
     */
    NumberFormat.checkValueRange = function (val1, val2, checkbothExist, isFraction) {
        var decide = isFraction ? 'f' : 's';
        var dint = 0;
        var str1 = errorText['l' + decide];
        var str2 = errorText['m' + decide];
        if (!isUndefined(val1)) {
            this.checkRange(val1, str1, isFraction);
            dint++;
        }
        if (!isUndefined(val2)) {
            this.checkRange(val2, str2, isFraction);
            dint++;
        }
        if (dint === 2) {
            if (val1 < val2) {
                throwError(str2 + 'specified must be less than the' + str1);
            }
            else {
                return true;
            }
        }
        else if (checkbothExist && dint === 1) {
            throwError('Both' + str2 + 'and' + str2 + 'must be present');
        }
        return false;
    };
    /**
     * Check if the provided fraction range is valid
     * @param {number} val
     * @param {string} text
     * @param {boolean} isFraction
     * @returns {void}
     */
    NumberFormat.checkRange = function (val, text, isFraction) {
        var range = isFraction ? [0, 20] : [1, 21];
        if (val < range[0] || val > range[1]) {
            throwError(text + 'value must be within the range' + range[0] + 'to' + range[1]);
        }
    };
    /**
     * Returns formatted numeric string for provided formatting options
     * @param {number} value
     * @param {base.GenericFormatOptions} fOptions
     * @param {CommonOptions} dOptions
     * @returns {string}
     */
    NumberFormat.intNumberFormatter = function (value, fOptions, dOptions) {
        var curData;
        if (isUndefined(fOptions.nData.type)) {
            return undefined;
        }
        else {
            if (value < 0) {
                value = value * -1;
                curData = fOptions.nData;
            }
            else if (value === 0) {
                curData = fOptions.zeroData || fOptions.pData;
            }
            else {
                curData = fOptions.pData;
            }
            var fValue = '';
            if (curData.isPercent) {
                value = value * 100;
            }
            if (curData.groupOne) {
                fValue = this.processSignificantDigits(value, curData.minimumSignificantDigits, curData.maximumSignificantDigits);
            }
            else {
                fValue = this.processFraction(value, curData.minimumFractionDigits, curData.maximumFractionDigits);
                if (curData.minimumIntegerDigits) {
                    fValue = this.processMinimumIntegers(fValue, curData.minimumIntegerDigits);
                }
            }
            if (curData.type === 'scientific') {
                fValue = value.toExponential(curData.maximumFractionDigits);
                fValue = fValue.replace('e', dOptions.numberMapper.numberSymbols[mapper[4]]);
            }
            fValue = fValue.replace('.', dOptions.numberMapper.numberSymbols[mapper[3]]);
            if (curData.useGrouping) {
                fValue = this.groupNumbers(fValue, curData.groupData.primary, curData.groupSeparator || ',', dOptions.numberMapper.numberSymbols[mapper[3]] || '.', curData.groupData.secondary);
            }
            fValue = parser.convertValueParts(fValue, base.latnParseRegex, dOptions.numberMapper.mapper);
            if (curData.nlead === 'N/A') {
                return curData.nlead;
            }
            else {
                return curData.nlead + fValue + curData.nend;
            }
        }
    };
    /**
     * Returns significant digits processed numeric string
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @returns {string}
     */
    NumberFormat.processSignificantDigits = function (value, min, max) {
        var temp = value + '';
        var tn;
        var length = temp.length;
        if (length < min) {
            return value.toPrecision(min);
        }
        else {
            temp = value.toPrecision(max);
            tn = +temp;
            return tn + '';
        }
    };
    /**
     * Returns grouped numeric string
     * @param {string} val
     * @param {number} level1
     * @param {string} sep
     * @param {string} decimalSymbol
     * @param {number} level2
     * @returns {string}
     */
    NumberFormat.groupNumbers = function (val, level1, sep, decimalSymbol, level2) {
        var flag = !isNullOrUndefined(level2) && level2 !== 0;
        var split = val.split(decimalSymbol);
        var prefix = split[0];
        var length = prefix.length;
        var str = '';
        while (length > level1) {
            str = prefix.slice(length - level1, length) + (str.length ?
                (sep + str) : '');
            length -= level1;
            if (flag) {
                level1 = level2;
                flag = false;
            }
        }
        split[0] = prefix.slice(0, length) + (str.length ? sep : '') + str;
        return split.join(decimalSymbol);
    };
    /**
     * Returns fraction processed numeric string
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @returns {string}
     */
    NumberFormat.processFraction = function (value, min, max) {
        var temp = (value + '').split('.')[1];
        var length = temp ? temp.length : 0;
        if (min && length < min) {
            var ret = '';
            if (length === 0) {
                ret = value.toFixed(min);
            }
            else {
                ret += value;
                for (var j = 0; j < min - length; j++) {
                    ret += '0';
                }
                return ret;
            }
            return value.toFixed(min);
        }
        else if (!isNullOrUndefined(max) && (length > max || max === 0)) {
            return value.toFixed(max);
        }
        return value + '';
    };
    /**
     * Returns integer processed numeric string
     * @param {string} value
     * @param {number} min
     * @returns {string}
     */
    NumberFormat.processMinimumIntegers = function (value, min) {
        var temp = value.split('.');
        var lead = temp[0];
        var len = lead.length;
        if (len < min) {
            for (var i = 0; i < min - len; i++) {
                lead = '0' + lead;
            }
            temp[0] = lead;
        }
        return temp.join('.');
    };
    return NumberFormat;
}());
export { NumberFormat };
