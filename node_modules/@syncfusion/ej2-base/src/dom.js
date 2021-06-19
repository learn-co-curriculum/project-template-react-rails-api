/**
 * Functions related to dom operations.
 */
import { EventHandler } from './event-handler';
import { isNullOrUndefined, getValue, setValue, isObject, extend } from './util';
import { VirtualDOM } from './virtual-dom';
var SVG_REG = /^svg|^path|^g/;
/**
 * Function to create Html element.
 * @param tagName - Name of the tag, id and class names.
 * @param properties - Object to set properties in the element.
 * @param properties.id - To set the id to the created element.
 * @param properties.className - To add classes to the element.
 * @param properties.innerHTML - To set the innerHTML to element.
 * @param properties.styles - To set the some custom styles to element.
 * @param properties.attrs - To set the attributes to element.
 * @private
 */
export function createElement(tagName, properties) {
    //tslint:disable-next-line
    var element = (SVG_REG.test(tagName) ? document.createElementNS('http://www.w3.org/2000/svg', tagName) : document.createElement(tagName));
    if (typeof (properties) === 'undefined') {
        return element;
    }
    element.innerHTML = (properties.innerHTML ? properties.innerHTML : '');
    if (properties.className !== undefined) {
        element.className = properties.className;
    }
    if (properties.id !== undefined) {
        element.id = properties.id;
    }
    if (properties.styles !== undefined) {
        element.setAttribute('style', properties.styles);
    }
    if (properties.attrs !== undefined) {
        attributes(element, properties.attrs);
    }
    return element;
}
/**
 * The function used to add the classes to array of elements
 * @param  {Element[]|NodeList} elements - An array of elements that need to add a list of classes
 * @param  {string|string[]} classes - String or array of string that need to add an individual element as a class
 * @private
 */
export function addClass(elements, classes) {
    var classList = getClassList(classes);
    for (var _i = 0, _a = elements; _i < _a.length; _i++) {
        var ele = _a[_i];
        for (var _b = 0, classList_1 = classList; _b < classList_1.length; _b++) {
            var className = classList_1[_b];
            if (isObject(ele)) {
                var curClass = getValue('attributes.className', ele);
                if (isNullOrUndefined(curClass)) {
                    setValue('attributes.className', className, ele);
                }
                else if (!new RegExp('\\b' + className + '\\b', 'i').test(curClass)) {
                    setValue('attributes.className', curClass + ' ' + className, ele);
                }
            }
            else {
                if (!ele.classList.contains(className)) {
                    ele.classList.add(className);
                }
            }
        }
    }
    return elements;
}
/**
 * The function used to add the classes to array of elements
 * @param  {Element[]|NodeList} elements - An array of elements that need to remove a list of classes
 * @param  {string|string[]} classes - String or array of string that need to add an individual element as a class
 * @private
 */
export function removeClass(elements, classes) {
    var classList = getClassList(classes);
    for (var _i = 0, _a = elements; _i < _a.length; _i++) {
        var ele = _a[_i];
        var flag = isObject(ele);
        var canRemove = flag ? getValue('attributes.className', ele) : ele.className !== '';
        if (canRemove) {
            for (var _b = 0, classList_2 = classList; _b < classList_2.length; _b++) {
                var className = classList_2[_b];
                /* istanbul ignore next */
                if (flag) {
                    var classes_1 = getValue('attributes.className', ele);
                    var classArr = classes_1.split(' ');
                    var index = classArr.indexOf(className);
                    if (index !== -1) {
                        classArr.splice(index, 1);
                    }
                    setValue('attributes.className', classArr.join(' '), ele);
                }
                else {
                    ele.classList.remove(className);
                }
            }
        }
    }
    return elements;
}
function getClassList(classes) {
    var classList = [];
    if (typeof classes === 'string') {
        classList.push(classes);
    }
    else {
        classList = classes;
    }
    return classList;
}
/**
 * The function used to check element is visible or not.
 * @param  {Element|Node} element - An element the need to check visibility
 * @private
 */
export function isVisible(element) {
    var ele = element;
    return (ele.style.visibility === '' && ele.offsetWidth > 0);
}
/**
 * The function used to insert an array of elements into a first of the element.
 * @param  {Element[]|NodeList} fromElements - An array of elements that need to prepend.
 * @param  {Element} toElement - An element that is going to prepend.
 * @private
 */
export function prepend(fromElements, toElement, isEval) {
    //tslint:disable:no-any
    if (isObject(toElement)) {
        VirtualDOM.prepend(fromElements, toElement);
    }
    else {
        var docFrag = document.createDocumentFragment();
        for (var _i = 0, _a = fromElements; _i < _a.length; _i++) {
            var ele = _a[_i];
            docFrag.appendChild(ele);
        }
        toElement.insertBefore(docFrag, toElement.firstElementChild);
        if (isEval) {
            executeScript(toElement);
        }
    }
    return fromElements;
}
/**
 * The function used to insert an array of elements into last of the element.
 * @param  {Element[]|NodeList} fromElements - An array of elements that need to append.
 * @param  {Element} toElement - An element that is going to prepend.
 * @private
 */
export function append(fromElements, toElement, isEval) {
    if (isObject(toElement)) {
        VirtualDOM.append(fromElements, toElement);
    }
    else {
        var docFrag = document.createDocumentFragment();
        for (var _i = 0, _a = fromElements; _i < _a.length; _i++) {
            var ele = _a[_i];
            docFrag.appendChild(ele);
        }
        toElement.appendChild(docFrag);
        if (isEval) {
            executeScript(toElement);
        }
    }
    return fromElements;
}
/**
 * The function is used to evaluate script from Ajax request
 * @param ele - An element is going to evaluate the script
 */
function executeScript(ele) {
    var eleArray = ele.querySelectorAll('script');
    eleArray.forEach(function (element) {
        var script = document.createElement('script');
        script.text = element.innerHTML;
        document.head.appendChild(script);
        detach(script);
    });
}
/**
 * The function used to remove the element from the
 * @param  {Element|Node|HTMLElement} element - An element that is going to detach from the Dom
 * @private
 */
export function detach(element) {
    if (isObject(element)) {
        return VirtualDOM.detach(element);
    }
    else {
        var parentNode = element.parentNode;
        if (parentNode) {
            return parentNode.removeChild(element);
        }
    }
}
//tslint: enable:no-any
/**
 * The function used to remove the element from Dom also clear the bounded events
 * @param  {Element|Node|HTMLElement} element - An element remove from the Dom
 * @private
 */
export function remove(element) {
    if (isObject(element)) {
        VirtualDOM.detach(element);
    }
    else {
        var parentNode = element.parentNode;
        EventHandler.clearEvents(element);
        parentNode.removeChild(element);
    }
}
/**
 * The function helps to set multiple attributes to an element
 * @param  {Element|Node} element - An element that need to set attributes.
 * @param  {{[key:string]:string}} attributes - JSON Object that is going to as attributes.
 * @private
 */
export function attributes(element, attributes) {
    var keys = Object.keys(attributes);
    var ele = element;
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        /* istanbul ignore next */
        if (isObject(ele)) {
            var iKey = key;
            if (key === 'tabindex') {
                iKey = 'tabIndex';
            }
            ele.attributes[iKey] = attributes[key];
        }
        else {
            ele.setAttribute(key, attributes[key]);
        }
    }
    return ele;
}
/**
 * The function selects the element from giving context.
 * @param  {string} selector - Selector string need fetch element from the
 * @param  {Document|Element=document} context - It is an optional type, That specifies a Dom context.
 * @private
 */
//tslint:disable-next-line
export function select(selector, context, needsVDOM) {
    if (context === void 0) { context = document; }
    if (isObject(context) && needsVDOM) {
        //tslint:disable-next-line
        return VirtualDOM.vDomSelector({ ele: context, selector: selector, selectAll: false });
    }
    else {
        selector = querySelectId(selector);
        return context.querySelector(selector);
    }
}
/**
 * The function selects an array of element from the given context.
 * @param  {string} selector - Selector string need fetch element from the
 * @param  {Document|Element=document} context - It is an optional type, That specifies a Dom context.
 * @private
 */
export function selectAll(selector, context, needsVDOM) {
    if (context === void 0) { context = document; }
    if (isObject(context) && !needsVDOM) {
        //tslint:disable-next-line
        return VirtualDOM.vDomSelector({ ele: context, selector: selector, selectAll: true });
    }
    else {
        selector = querySelectId(selector);
        var nodeList = context.querySelectorAll(selector);
        return nodeList;
    }
}
function querySelectId(selector) {
    var charRegex = /(!|"|\$|%|&|'|\(|\)|\*|\/|:|;|<|=|\?|@|\]|\^|`|{|}|\||\+|~)/g;
    if (selector.match(/#[0-9]/g) || selector.match(charRegex)) {
        var idList = selector.split(',');
        for (var i = 0; i < idList.length; i++) {
            var list = idList[i].split(' ');
            for (var j = 0; j < list.length; j++) {
                if (list[j].indexOf('#') > -1) {
                    if (!list[j].match(/\[.*\]/)) {
                        var splitId = list[j].split('#');
                        if (splitId[1].match(/^\d/) || splitId[1].match(charRegex)) {
                            var setId = list[j].split('.');
                            setId[0] = setId[0].replace(/#/, '[id=\'') + '\']';
                            list[j] = setId.join('.');
                        }
                    }
                }
            }
            idList[i] = list.join(' ');
        }
        return idList.join(',');
    }
    return selector;
}
/**
 * Returns single closest parent element based on class selector.
 * @param  {Element} element - An element that need to find the closest element.
 * @param  {string} selector - A classSelector of closest element.
 * @private
 */
export function closest(element, selector) {
    var el = element;
    if (typeof el.closest === 'function') {
        return el.closest(selector);
    }
    /* istanbul ignore next */
    while (el && el.nodeType === 1) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentNode;
    }
    return null;
}
/**
 * Returns all sibling elements of the given element.
 * @param  {Element|Node} element - An element that need to get siblings.
 * @private
 */
export function siblings(element) {
    var siblings = [];
    var childNodes = Array.prototype.slice.call(element.parentNode.childNodes);
    for (var _i = 0, childNodes_1 = childNodes; _i < childNodes_1.length; _i++) {
        var curNode = childNodes_1[_i];
        if (curNode.nodeType === Node.ELEMENT_NODE && element !== curNode) {
            siblings.push(curNode);
        }
    }
    return siblings;
}
/**
 * set the value if not exist. Otherwise set the existing value
 * @param  {HTMLElement} element - An element to which we need to set value.
 * @param  {string} property - Property need to get or set.
 * @param  {string} value - value need to set.
 * @private
 */
/* istanbul ignore next */
export function getAttributeOrDefault(element, property, value) {
    var attrVal;
    var isObj = isObject(element);
    if (isObj) {
        attrVal = getValue('attributes.' + property, element);
    }
    else {
        attrVal = element.getAttribute(property);
    }
    if (isNullOrUndefined(attrVal) && value) {
        if (!isObj) {
            element.setAttribute(property, value.toString());
        }
        else {
            element.attributes[property] = value;
        }
        attrVal = value;
    }
    return attrVal;
}
/**
 * Set the style attributes to Html element.
 * @param {HTMLElement} element - Element which we want to set attributes
 * @param {any} attrs - Set the given attributes to element
 * @return {void}
 * @private
 */
export function setStyleAttribute(element, attrs) {
    if (attrs !== undefined) {
        if (isObject(element)) {
            // tslint:disable-next-line:no-any
            VirtualDOM.setStyleAttribute(element, attrs);
        }
        else {
            Object.keys(attrs).forEach(function (key) {
                // tslint:disable-next-line:no-any
                element.style[key] = attrs[key];
            });
        }
    }
}
/**
 * Method for add and remove classes to a dom element.
 * @param {Element} element - Element for add and remove classes
 * @param {string[]} addClasses - List of classes need to be add to the element
 * @param {string[]} removeClasses - List of classes need to be remove from the element
 * @return {void}
 * @private
 */
export function classList(element, addClasses, removeClasses) {
    addClass([element], addClasses);
    removeClass([element], removeClasses);
}
/**
 * Method to check whether the element matches the given selector.
 * @param {Element} element - Element to compare with the selector.
 * @param {string} selector - String selector which element will satisfy.
 * @return {void}
 * @private
 */
export function matches(element, selector) {
    //tslint:disable-next-line
    var matches = element.matches || element.msMatchesSelector || element.webkitMatchesSelector;
    if (matches) {
        return matches.call(element, selector);
    }
    else {
        return [].indexOf.call(document.querySelectorAll(selector), element) !== -1;
    }
}
/* istanbul ignore next */
export function includeInnerHTML(ele, innerHTML) {
    if (isObject(ele)) {
        if (innerHTML === '') {
            ele.children = [];
        }
        else {
            var res = VirtualDOM.ConvertHTMLToJSon(innerHTML);
            if (res.length) {
                VirtualDOM.assignParent(res, ele);
                ele.children = res;
            }
        }
    }
    else {
        ele.innerHTML = innerHTML;
    }
}
/* istanbul ignore next */
//tslint:disable-next-line
export function containsClass(ele, className) {
    if (isObject(ele)) {
        // tslint:disable-next-line:no-any
        return new RegExp('\\b' + className + '\\b', 'i').test(ele.attributes.className);
    }
    else {
        return ele.classList.contains(className);
    }
}
/**
 * Method to check whether the element matches the given selector.
 * @param {} element - Element to compare with the selector.
 * @param {string} selector - String selector which element will satisfy.
 * @return {Element | VirtualObject}
 * @private
 */
/* istanbul ignore next */
//tslint:disable:no-any
export function cloneNode(element, deep) {
    if (isObject(element)) {
        if (deep) {
            return extend({}, {}, element, true);
        }
        else {
            return { tagName: element.tagName, attributes: element.attributes };
        }
    }
    else {
        return element.cloneNode(deep);
    }
}
