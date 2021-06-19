var instances = 'ej2_instances';
var uid = 0;
var isBlazorPlatform = false;
/**
 * Function to check whether the platform is blazor or not.
 * @return {boolean} result
 * @private
 */
export function disableBlazorMode() {
    isBlazorPlatform = false;
}
/**
 * Create Instance from constructor function with desired parameters.
 * @param {Function} classFunction - Class function to which need to create instance
 * @param {any[]} params - Parameters need to passed while creating instance
 * @return {any}
 * @private
 */
export function createInstance(classFunction, params) {
    var arrayParam = params;
    arrayParam.unshift(undefined);
    return new (Function.prototype.bind.apply(classFunction, arrayParam));
}
/**
 * To run a callback function immediately after the browser has completed other operations.
 * @param {Function} handler - callback function to be triggered.
 * @return {Function}
 * @private
 */
export function setImmediate(handler) {
    var unbind;
    var num = new Uint16Array(5);
    var intCrypto = window.msCrypto || window.crypto;
    intCrypto.getRandomValues(num);
    var secret = 'ej2' + combineArray(num);
    var messageHandler = function (event) {
        if (event.source === window && typeof event.data === 'string' && event.data.length <= 32 && event.data === secret) {
            handler();
            unbind();
        }
    };
    window.addEventListener('message', messageHandler, false);
    window.postMessage(secret, '*');
    return unbind = function () {
        window.removeEventListener('message', messageHandler);
        handler = messageHandler = secret = undefined;
    };
}
/**
 * To get nameSpace value from the desired object.
 * @param {string} nameSpace - String value to the get the inner object
 * @param {any} obj - Object to get the inner object value.
 * @return {any}
 * @private
 */
export function getValue(nameSpace, obj) {
    /* tslint:disable no-any */
    var value = obj;
    var splits = nameSpace.replace(/\[/g, '.').replace(/\]/g, '').split('.');
    for (var i = 0; i < splits.length && !isUndefined(value); i++) {
        value = value[splits[i]];
    }
    return value;
}
/**
 * To set value for the nameSpace in desired object.
 * @param {string} nameSpace - String value to the get the inner object
 * @param {any} value - Value that you need to set.
 * @param {any} obj - Object to get the inner object value.
 * @return {void}
 * @private
 */
export function setValue(nameSpace, value, obj) {
    var keys = nameSpace.replace(/\[/g, '.').replace(/\]/g, '').split('.');
    var start = obj || {};
    var fromObj = start;
    var i;
    var length = keys.length;
    var key;
    for (i = 0; i < length; i++) {
        key = keys[i];
        if (i + 1 === length) {
            fromObj[key] = value === undefined ? {} : value;
        }
        else if (isNullOrUndefined(fromObj[key])) {
            fromObj[key] = {};
        }
        fromObj = fromObj[key];
    }
    return start;
}
/**
 * Delete an item from Object
 * @param {any} obj - Object in which we need to delete an item.
 * @param {string} params - String value to the get the inner object
 * @return {void}
 * @private
 */
export function deleteObject(obj, key) {
    delete obj[key];
}
/**
 * Check weather the given argument is only object.
 * @param {any} obj - Object which is need to check.
 * @return {boolean}
 * @private
 */
export function isObject(obj) {
    var objCon = {};
    return (!isNullOrUndefined(obj) && obj.constructor === objCon.constructor);
}
/**
 * To get enum value by giving the string.
 * @param {any} enumObject - Enum object.
 * @param {string} enumValue - Enum value to be searched
 * @return {any}
 * @private
 */
export function getEnumValue(enumObject, enumValue) {
    return enumObject[enumValue];
}
/**
 * Merge the source object into destination object.
 * @param {any} source - source object which is going to merge with destination object
 * @param {any} destination - object need to be merged
 * @return {void}
 * @private
 */
export function merge(source, destination) {
    if (!isNullOrUndefined(destination)) {
        var temrObj = source;
        var tempProp = destination;
        var keys = Object.keys(destination);
        var deepmerge = 'deepMerge';
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!isNullOrUndefined(temrObj[deepmerge]) && (temrObj[deepmerge].indexOf(key) !== -1) &&
                (isObject(tempProp[key]) || Array.isArray(tempProp[key]))) {
                extend(temrObj[key], temrObj[key], tempProp[key], true);
            }
            else {
                temrObj[key] = tempProp[key];
            }
        }
    }
}
/**
 * Extend the two object with newer one.
 * @param {any} copied - Resultant object after merged
 * @param {Object} first - First object need to merge
 * @param {Object} second - Second object need to merge
 * @return {Object}
 * @private
 */
export function extend(copied, first, second, deep) {
    var result = copied && typeof copied === 'object' ? copied : {};
    var length = arguments.length;
    if (deep) {
        length = length - 1;
    }
    var _loop_1 = function (i) {
        if (!arguments_1[i]) {
            return "continue";
        }
        var obj1 = arguments_1[i];
        Object.keys(obj1).forEach(function (key) {
            var src = result[key];
            var copy = obj1[key];
            var clone;
            var isArrayChanged = Array.isArray(copy) && Array.isArray(src) && (copy.length !== src.length);
            var blazorEventExtend = isBlazor() ? (!(src instanceof Event) && !isArrayChanged) : true;
            if (deep && blazorEventExtend && (isObject(copy) || Array.isArray(copy))) {
                if (isObject(copy)) {
                    clone = src ? src : {};
                    if (Array.isArray(clone) && clone.hasOwnProperty('isComplexArray')) {
                        extend(clone, {}, copy, deep);
                    }
                    else {
                        result[key] = extend(clone, {}, copy, deep);
                    }
                }
                else {
                    /* istanbul ignore next */
                    clone = isBlazor() ? src && Object.keys(copy).length : src ? src : [];
                    result[key] = extend([], clone, copy, deep);
                }
            }
            else {
                result[key] = copy;
            }
        });
    };
    var arguments_1 = arguments;
    for (var i = 1; i < length; i++) {
        _loop_1(i);
    }
    return result;
}
/**
 * To check whether the object is null or undefined.
 * @param {Object} value - To check the object is null or undefined
 * @return {boolean}
 * @private
 */
export function isNullOrUndefined(value) {
    return value === undefined || value === null;
}
/**
 * To check whether the object is undefined.
 * @param {Object} value - To check the object is undefined
 * @return {boolean}
 * @private
 */
export function isUndefined(value) {
    return ('undefined' === typeof value);
}
/**
 * To return the generated unique name
 * @param {string} definedName - To concatenate the unique id to provided name
 * @return {string}
 * @private
 */
export function getUniqueID(definedName) {
    return definedName + '_' + uid++;
}
/**
 * It limits the rate at which a function can fire. The function will fire only once every provided second instead of as quickly.
 * @param {Function} eventFunction - Specifies the function to run when the event occurs
 * @param {number} delay - A number that specifies the milliseconds for function delay call option
 * @return {Function}
 * @private
 */
export function debounce(eventFunction, delay) {
    var out;
    // tslint:disable-next-line
    return function () {
        var _this = this;
        var args = arguments;
        var later = function () {
            out = null;
            return eventFunction.apply(_this, args);
        };
        clearTimeout(out);
        out = setTimeout(later, delay);
    };
}
// Added since lint ignored after added '//tslint:disable-next-line' 
/* tslint:disable:no-any */
/**
 * To convert the object to string for query url
 * @param  {Object} data
 * @returns string
 * @private
 */
export function queryParams(data) {
    var array = [];
    var keys = Object.keys(data);
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        array.push(encodeURIComponent(key) + '=' + encodeURIComponent('' + data[key]));
    }
    return array.join('&');
}
/**
 * To check whether the given array contains object.
 * @param {T[]} value- Specifies the T type array to be checked.
 * @private
 */
export function isObjectArray(value) {
    var parser = Object.prototype.toString;
    if (parser.call(value) === '[object Array]') {
        if (parser.call(value[0]) === '[object Object]') {
            return true;
        }
    }
    return false;
}
/**
 * To check whether the  child element is descendant to parent element or parent and child are same element.
 * @param{Element} - Specifies the child element to compare with parent.
 * @param{Element} - Specifies the parent element.
 * @return boolean
 * @private
 */
export function compareElementParent(child, parent) {
    var node = child;
    if (node === parent) {
        return true;
    }
    else if (node === document || !node) {
        return false;
    }
    else {
        return compareElementParent(node.parentNode, parent);
    }
}
/**
 * To throw custom error message.
 * @param{string} - Specifies the error message to be thrown.
 * @private
 */
export function throwError(message) {
    try {
        throw new Error(message);
    }
    catch (e) {
        throw e.message + '\n' + e.stack;
    }
}
/**
 * This function is used to print given element
 * @param{Element} element - Specifies the print content element.
 * @param{Window} printWindow - Specifies the print window.
 * @private
 */
export function print(element, printWindow) {
    var div = document.createElement('div');
    var links = [].slice.call(document.getElementsByTagName('head')[0].querySelectorAll('base, link, style'));
    var blinks = [].slice.call(document.getElementsByTagName('body')[0].querySelectorAll('link, style'));
    if (blinks.length) {
        for (var l = 0, len = blinks.length; l < len; l++) {
            links.push(blinks[l]);
        }
    }
    var reference = '';
    if (isNullOrUndefined(printWindow)) {
        printWindow = window.open('', 'print', 'height=452,width=1024,tabbar=no');
    }
    div.appendChild(element.cloneNode(true));
    for (var i = 0, len = links.length; i < len; i++) {
        reference += links[i].outerHTML;
    }
    printWindow.document.write('<!DOCTYPE html> <html><head>' + reference + '</head><body>' + div.innerHTML +
        '<script> (function() { window.ready = true; })(); </script>' + '</body></html>');
    printWindow.document.close();
    printWindow.focus();
    // tslint:disable-next-line
    var interval = setInterval(function () {
        if (printWindow.ready) {
            printWindow.print();
            printWindow.close();
            clearInterval(interval);
        }
    }, 500);
    return printWindow;
}
/**
 * Function to normalize the units applied to the element.
 * @param  {number|string} value
 * @return {string} result
 * @private
 */
export function formatUnit(value) {
    var result = value + '';
    if (result.match(/auto|%|px|vh|vm|vmax|vmin|em/)) {
        return result;
    }
    return result + 'px';
}
/**
 * Function to check whether the platform is blazor or not.
 * @return {boolean} result
 * @private
 */
export function enableBlazorMode() {
    isBlazorPlatform = true;
}
/**
 * Function to check whether the platform is blazor or not.
 * @return {boolean} result
 * @private
 */
export function isBlazor() {
    return isBlazorPlatform;
}
/**
 * Function to convert xPath to DOM element in blazor platform
 * @return {HTMLElement} result
 * @param {HTMLElement | object} element
 * @private
 */
export function getElement(element) {
    var xPath = 'xPath';
    if (!(element instanceof Node) && isBlazor() && !isNullOrUndefined(element[xPath])) {
        return document.evaluate(element[xPath], document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
    return element;
}
/**
 * Function to fetch the Instances of a HTML element for the given component.
 * @param {string | HTMLElement} element
 * @param {any} component
 * @return {Object} inst
 * @private
 */
// tslint:disable-next-line
export function getInstance(element, component) {
    // tslint:disable-next-line:no-any
    var elem = (typeof (element) === 'string') ? document.querySelector(element) : element;
    if (elem[instances]) {
        for (var _i = 0, _a = elem[instances]; _i < _a.length; _i++) {
            var inst = _a[_i];
            if (inst instanceof component) {
                return inst;
            }
        }
    }
    return null;
}
/**
 * Function to add instances for the given element.
 * @param {string | HTMLElement} element
 * @param {Object} instance
 * @return {void}
 * @private
 */
export function addInstance(element, instance) {
    // tslint:disable-next-line:no-any
    var elem = (typeof (element) === 'string') ? document.querySelector(element) : element;
    if (elem[instances]) {
        elem[instances].push(instance);
    }
    else {
        elem[instances] = [instance];
    }
}
/**
 * Function to generate the unique id.
 * @return {any}
 * @private
 */
// tslint:disable-next-line:no-any
export function uniqueID() {
    // tslint:disable-next-line:no-any
    if ((typeof window) === 'undefined') {
        return;
    }
    // tslint:disable-next-line:no-any
    var num = new Uint16Array(5);
    var intCrypto = window.msCrypto || window.crypto;
    return intCrypto.getRandomValues(num);
}
function combineArray(num) {
    var ret = '';
    for (var i = 0; i < 5; i++) {
        ret += (i ? ',' : '') + num[i];
    }
    return ret;
}
