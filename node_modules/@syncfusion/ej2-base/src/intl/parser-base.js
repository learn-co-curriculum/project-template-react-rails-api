/**
 * Parser
 */
var defaultNumberingSystem = {
    'latn': {
        '_digits': '0123456789',
        '_type': 'numeric'
    }
};
import { isUndefined, getValue, isBlazor } from '../util';
var latnRegex = /^[0-9]*$/;
var defaultNumberSymbols = {
    'decimal': '.',
    'group': ',',
    'percentSign': '%',
    'plusSign': '+',
    'minusSign': '-',
    'infinity': '∞',
    'nan': 'NaN',
    'exponential': 'E'
};
var latnNumberSystem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
/**
 * Interface for parser base
 * @private
 */
var ParserBase = /** @class */ (function () {
    function ParserBase() {
    }
    /**
     * Returns the cldr object for the culture specifies
     * @param {Object} obj - Specifies the object from which culture object to be acquired.
     * @param {string} cName - Specifies the culture name.
     * @returns {Object}
     */
    ParserBase.getMainObject = function (obj, cName) {
        var value = isBlazor() ? cName : 'main.' + cName;
        return getValue(value, obj);
    };
    /**
     * Returns the numbering system object from given cldr data.
     * @param {Object} obj - Specifies the object from which number system is acquired.
     * @returns {Object}
     */
    ParserBase.getNumberingSystem = function (obj) {
        return getValue('supplemental.numberingSystems', obj) || this.numberingSystems;
    };
    /**
     * Returns the reverse of given object keys or keys specified.
     * @param {Object} prop - Specifies the object to be reversed.
     * @param {number[]} keys - Optional parameter specifies the custom keyList for reversal.
     * @returns {Object}
     */
    ParserBase.reverseObject = function (prop, keys) {
        var propKeys = keys || Object.keys(prop);
        var res = {};
        for (var _i = 0, propKeys_1 = propKeys; _i < propKeys_1.length; _i++) {
            var key = propKeys_1[_i];
            /* tslint:disable no-any */
            if (!res.hasOwnProperty(prop[key])) {
                res[prop[key]] = key;
            }
        }
        return res;
    };
    /**
     * Returns the symbol regex by skipping the escape sequence.
     * @param {string[]} props - Specifies the array values to be skipped.
     * @returns {RegExp}
     */
    ParserBase.getSymbolRegex = function (props) {
        var regexStr = props.map(function (str) {
            return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
        }).join('|');
        return new RegExp(regexStr, 'g');
    };
    ParserBase.getSymbolMatch = function (prop) {
        var matchKeys = Object.keys(defaultNumberSymbols);
        var ret = {};
        for (var _i = 0, matchKeys_1 = matchKeys; _i < matchKeys_1.length; _i++) {
            var key = matchKeys_1[_i];
            ret[prop[key]] = defaultNumberSymbols[key];
        }
        return ret;
    };
    /**
     * Returns regex string for provided value
     * @param {string} val
     * @returns {string}
     */
    ParserBase.constructRegex = function (val) {
        var len = val.length;
        var ret = '';
        for (var i = 0; i < len; i++) {
            if (i !== len - 1) {
                ret += val[i] + '|';
            }
            else {
                ret += val[i];
            }
        }
        return ret;
    };
    /**
     * Returns the replaced value of matching regex and obj mapper.
     * @param {string} value - Specifies the  values to be replaced.
     * @param {RegExp} regex - Specifies the  regex to search.
     * @param {Object} obj - Specifies the  object matcher to be replace value parts.
     * @returns {string}
     */
    ParserBase.convertValueParts = function (value, regex, obj) {
        return value.replace(regex, function (str) {
            return obj[str];
        });
    };
    /**
     * Returns default numbering system object for formatting from cldr data
     * @param {Object} obj
     * @returns {NumericObject}
     */
    ParserBase.getDefaultNumberingSystem = function (obj) {
        var ret = {};
        ret.obj = getValue('numbers', obj);
        ret.nSystem = getValue('defaultNumberingSystem', ret.obj);
        return ret;
    };
    /**
     * Returns the replaced value of matching regex and obj mapper.
     */
    ParserBase.getCurrentNumericOptions = function (curObj, numberSystem, needSymbols, blazorMode) {
        var ret = {};
        var cur = this.getDefaultNumberingSystem(curObj);
        if (!isUndefined(cur.nSystem) || blazorMode) {
            var digits = blazorMode ? getValue('obj.mapperDigits', cur) : getValue(cur.nSystem + '._digits', numberSystem);
            if (!isUndefined(digits)) {
                ret.numericPair = this.reverseObject(digits, latnNumberSystem);
                ret.numberParseRegex = new RegExp(this.constructRegex(digits), 'g');
                ret.numericRegex = '[' + digits[0] + '-' + digits[9] + ']';
                if (needSymbols) {
                    ret.numericRegex = digits[0] + '-' + digits[9];
                    ret.symbolNumberSystem = getValue(blazorMode ? 'numberSymbols' : 'symbols-numberSystem-' + cur.nSystem, cur.obj);
                    ret.symbolMatch = this.getSymbolMatch(ret.symbolNumberSystem);
                    ret.numberSystem = cur.nSystem;
                }
            }
        }
        return ret;
    };
    /**
     * Returns number mapper object for the provided cldr data
     * @param {Object} curObj
     * @param {Object} numberSystem
     * @param {boolean} isNumber
     * @returns {NumberMapper}
     */
    ParserBase.getNumberMapper = function (curObj, numberSystem, isNumber) {
        var ret = { mapper: {} };
        var cur = this.getDefaultNumberingSystem(curObj);
        if (!isUndefined(cur.nSystem)) {
            ret.numberSystem = cur.nSystem;
            ret.numberSymbols = getValue('symbols-numberSystem-' + cur.nSystem, cur.obj);
            ret.timeSeparator = getValue('timeSeparator', ret.numberSymbols);
            var digits = getValue(cur.nSystem + '._digits', numberSystem);
            if (!isUndefined(digits)) {
                for (var _i = 0, latnNumberSystem_1 = latnNumberSystem; _i < latnNumberSystem_1.length; _i++) {
                    var i = latnNumberSystem_1[_i];
                    ret.mapper[i] = digits[i];
                }
            }
        }
        return ret;
    };
    ParserBase.nPair = 'numericPair';
    ParserBase.nRegex = 'numericRegex';
    ParserBase.numberingSystems = defaultNumberingSystem;
    return ParserBase;
}());
export { ParserBase };
/**
 * @private
 */
var blazorCurrencyData = {
    'DJF': 'Fdj',
    'ERN': 'Nfk',
    'ETB': 'Br',
    'NAD': '$',
    'ZAR': 'R',
    'XAF': 'FCFA',
    'GHS': 'GH₵',
    'XDR': 'XDR',
    'AED': 'د.إ.‏',
    'BHD': 'د.ب.‏',
    'DZD': 'د.ج.‏',
    'EGP': 'ج.م.‏',
    'ILS': '₪',
    'IQD': 'د.ع.‏',
    'JOD': 'د.ا.‏',
    'KMF': 'CF',
    'KWD': 'د.ك.‏',
    'LBP': 'ل.ل.‏',
    'LYD': 'د.ل.‏',
    'MAD': 'د.م.‏',
    'MRU': 'أ.م.',
    'OMR': 'ر.ع.‏',
    'QAR': 'ر.ق.‏',
    'SAR': 'ر.س.‏',
    'SDG': 'ج.س.',
    'SOS': 'S',
    'SSP': '£',
    'SYP': 'ل.س.‏',
    'TND': 'د.ت.‏',
    'YER': 'ر.ي.‏',
    'CLP': '$',
    'INR': '₹',
    'TZS': 'TSh',
    'EUR': '€',
    'AZN': '₼',
    'RUB': '₽',
    'BYN': 'Br',
    'ZMW': 'K',
    'BGN': 'лв.',
    'NGN': '₦',
    'XOF': 'CFA',
    'BDT': '৳',
    'CNY': '¥',
    'BAM': 'КМ',
    'UGX': 'USh',
    'USD': '$',
    'CZK': 'Kč',
    'GBP': '£',
    'DKK': 'kr.',
    'KES': 'Ksh',
    'CHF': 'CHF',
    'MVR': 'ރ.',
    'BTN': 'Nu.',
    'XCD': 'EC$',
    'AUD': '$',
    'BBD': '$',
    'BIF': 'FBu',
    'BMD': '$',
    'BSD': '$',
    'BWP': 'P',
    'BZD': '$',
    'CAD': '$',
    'NZD': '$',
    'FJD': '$',
    'FKP': '£',
    'GIP': '£',
    'GMD': 'D',
    'GYD': '$',
    'HKD': '$',
    'IDR': 'Rp',
    'JMD': '$',
    'KYD': '$',
    'LRD': '$',
    'MGA': 'Ar',
    'MOP': 'MOP$',
    'MUR': 'Rs',
    'MWK': 'MK',
    'MYR': 'RM',
    'PGK': 'K',
    'PHP': '₱',
    'PKR': 'Rs',
    'RWF': 'RF',
    'SBD': '$',
    'SCR': 'SR',
    'SEK': 'kr',
    'SGD': '$',
    'SHP': '£',
    'SLL': 'Le',
    'ANG': 'NAf.',
    'SZL': 'E',
    'TOP': 'T$',
    'TTD': '$',
    'VUV': 'VT',
    'WST': 'WS$',
    'ARS': '$',
    'BOB': 'Bs',
    'BRL': 'R$',
    'COP': '$',
    'CRC': '₡',
    'CUP': '$',
    'DOP': '$',
    'GTQ': 'Q',
    'HNL': 'L',
    'MXN': '$',
    'NIO': 'C$',
    'PAB': 'B/.',
    'PEN': 'S/',
    'PYG': '₲',
    'UYU': '$',
    'VES': 'Bs.S',
    'IRR': 'ريال',
    'GNF': 'FG',
    'CDF': 'FC',
    'HTG': 'G',
    'XPF': 'FCFP',
    'HRK': 'kn',
    'HUF': 'Ft',
    'AMD': '֏',
    'ISK': 'kr',
    'JPY': '¥',
    'GEL': '₾',
    'CVE': '​',
    'KZT': '₸',
    'KHR': '៛',
    'KPW': '₩',
    'KRW': '₩',
    'KGS': 'сом',
    'AOA': 'Kz',
    'LAK': '₭',
    'MZN': 'MTn',
    'MKD': 'ден',
    'MNT': '₮',
    'BND': '$',
    'MMK': 'K',
    'NOK': 'kr',
    'NPR': 'रु',
    'AWG': 'Afl.',
    'SRD': '$',
    'PLN': 'zł',
    'AFN': '؋',
    'STN': 'Db',
    'MDL': 'L',
    'RON': 'lei',
    'UAH': '₴',
    'LKR': 'රු.',
    'ALL': 'Lekë',
    'RSD': 'дин.',
    'TJS': 'смн',
    'THB': '฿',
    'TMT': 'm.',
    'TRY': '₺',
    'UZS': 'сўм',
    'VND': '₫',
    'TWD': 'NT$'
};
export function getBlazorCurrencySymbol(currencyCode) {
    return getValue(currencyCode || '', blazorCurrencyData);
}
