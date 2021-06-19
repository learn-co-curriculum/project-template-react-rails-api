import { isObject, getValue, extend, isNullOrUndefined } from './util';
import { getRandomId } from './template-engine';
var simpleRegex = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
var multipleSplitRegex = /(?:#([\w-]+)|(\w+)|\.([\w-]+))/g;
var idClassSelector = /^(\.|#)/;
var selectMapper = {
    '.': 'className',
    '#': 'id'
};
var classRegexString = '(?=.*?\\b{value}\\b)';
var assigner = { className: 'attributes.className', id: 'attributes.id', tagName: 'tagName' };
var emptyElements = ['area', 'base', 'basefont', 'br', 'col', 'frame', 'hr', 'img', 'input',
    'link', 'meta', 'param', 'embed', 'command', 'keygen', 'source', 'track', 'wbr'];
var blockElements = ['a', 'address', 'article', 'applet', 'aside', 'audio', 'blockquote',
    'button', 'canvas', 'center', 'dd', 'del', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure',
    'footer', 'form', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr', 'iframe', 'ins',
    'isindex', 'li', 'map', 'menu', 'noframes', 'noscript', 'object', 'ol', 'output', 'p', 'pre', 'section',
    'script', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'ul', 'video'];
var inlineElement = ['abbr', 'acronym', 'applet', 'b', 'basefont', 'bdo', 'big', 'br', 'button',
    'cite', 'code', 'del', 'dfn', 'em', 'font', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'map',
    'object', 'q', 's', 'samp', 'script', 'select', 'small', 'span', 'strike', 'strong', 'sub', 'sup', 'textarea',
    'tt', 'u', 'var'];
var selfClosingElements = ['colgroup', 'dd', 'dt', 'li', 'options', 'p', 'td', 'tfoot', 'th',
    'thead', 'tr'];
var fillAttrs = ['checked', 'compact', 'declare', 'defer', 'disabled', 'ismap', 'multiple',
    'nohref', 'noresize', 'noshade', 'nowrap', 'readonly', 'selected'];
var cspElement = ['Script', 'style'];
var nameMapper = { 'tabindex': 'tabIndex' };
var startRegex = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
var endRegex = /^<\/([-A-Za-z0-9_]+)[^>]*>/;
var attributeRegex = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
/**
 * Namespace for VirtualDOM
 * @private
 */
export var VirtualDOM;
(function (VirtualDOM) {
    //tslint:disable:no-any
    function createElement(tagName, properties) {
        var children = [];
        var extended = extend({}, {}, properties, true);
        if (!isNullOrUndefined(properties)) {
            var keys = Object.keys(properties);
            if (keys.length) {
                if (extended.innerHTML) {
                    children = ConvertHTMLToJSon(extended.innerHTML);
                    delete extended.innerHTML;
                }
                if (extended.attrs) {
                    extend(extended, extended.attrs);
                    delete extended.attrs;
                }
                if (extended.styles) {
                    var valArr = extended.styles.split(';');
                    var vObj = {};
                    for (var i = 0, length_1 = valArr.length; i < length_1; i++) {
                        var cVal = valArr[i];
                        var styleSplit = cVal.split(':');
                        vObj[styleSplit[0]] = styleSplit[1];
                    }
                    delete extended.styles;
                    extended.style = vObj;
                }
            }
        }
        return {
            tagName: tagName,
            attributes: extended || {},
            children: children
        };
    }
    VirtualDOM.createElement = createElement;
    function assignParent(childrens, parent) {
        if (parent && childrens) {
            childrens.forEach(function (child) {
                if (isObject(child)) {
                    if (child.parent) {
                        detach(child);
                    }
                    child.parent = parent;
                }
                return child;
            });
        }
    }
    VirtualDOM.assignParent = assignParent;
    function append(fromElements, toElement) {
        assignParent(fromElements, toElement);
        if (toElement.children) {
            toElement.children = toElement.children.concat(fromElements);
        }
        else {
            toElement.children = [].concat(fromElements);
        }
    }
    VirtualDOM.append = append;
    function prepend(child, toElement) {
        assignParent(child, toElement);
        if (!toElement.children || !toElement.children.length) {
            toElement.children = [];
            toElement.children.concat(child);
        }
        else {
            for (var i = child.length - 1; i >= 0; i--) {
                toElement.children.unshift(child[i]);
            }
        }
    }
    VirtualDOM.prepend = prepend;
    function detach(element) {
        var parent = element.parent;
        if (parent) {
            var index = parent.children.indexOf(element);
            if (index !== -1) {
                parent.children.splice(index);
            }
        }
        return parent;
    }
    VirtualDOM.detach = detach;
    //tslint:disable-next-line
    function vDomSelector(_a) {
        var ele = _a.ele, selector = _a.selector, selectAll = _a.selectAll, immediateParent = _a.immediateParent;
        var iSelector = selector.split(' ');
        var curColl = ele;
        for (var i = 0, length_2 = iSelector.length; i < length_2; i++) {
            var isDescendant = false;
            var parent_2 = curColl;
            var curSelector = iSelector[i];
            var simpleSelector = false;
            var mapper = [];
            if (simpleRegex.test(curSelector)) {
                simpleSelector = true;
                processSelector(curSelector, mapper);
            }
            else if (curSelector.indexOf('>') === -1) {
                var splitSelector = curSelector.match(multipleSplitRegex);
                for (var _i = 0, splitSelector_1 = splitSelector; _i < splitSelector_1.length; _i++) {
                    var curMap = splitSelector_1[_i];
                    processSelector(curMap, mapper);
                }
            }
            else if (curSelector.indexOf('>') !== -1) {
                isDescendant = true;
                var dSelector = curSelector.split('>');
                //tslint:disable-next-line
                var dParent = ele;
                var descendent = void 0;
                var flag = 0;
                for (var _b = 0, dSelector_1 = dSelector; _b < dSelector_1.length; _b++) {
                    var sel = dSelector_1[_b];
                    if (!dParent) {
                        break;
                    }
                    if (dParent.length) {
                        var descendentChild = [];
                        for (var _c = 0, dParent_1 = dParent; _c < dParent_1.length; _c++) {
                            var child = dParent_1[_c];
                            descendentChild = descendentChild.concat(vDomSelector({
                                ele: child, selector: sel,
                                selectAll: selectAll, immediateParent: !!flag
                            }));
                        }
                        descendent = descendentChild;
                    }
                    else {
                        descendent = vDomSelector({ ele: dParent, selector: sel, selectAll: selectAll, immediateParent: !!flag });
                    }
                    flag++;
                    dParent = descendent;
                }
                if (descendent) {
                    curColl = descendent;
                }
            }
            if (!isDescendant) {
                if (parent_2.length) {
                    var iCurSelector = [];
                    for (var _d = 0, parent_1 = parent_2; _d < parent_1.length; _d++) {
                        var curParent = parent_1[_d];
                        iCurSelector = iCurSelector.concat(accessElement(curParent, mapper, selectAll, immediateParent));
                    }
                    curColl = iCurSelector;
                }
                else {
                    curColl = accessElement(parent_2, mapper, selectAll, immediateParent);
                }
            }
        }
        if (selectAll) {
            return curColl;
        }
        else {
            return curColl[0] || null;
        }
    }
    VirtualDOM.vDomSelector = vDomSelector;
    function processSelector(selector, mapper) {
        var match = selector.match(idClassSelector);
        var obj = {};
        if (match) {
            var curMapper = selectMapper[match[0]];
            if (curMapper === 'className') {
                var curObj = mapper.filter(function (obj) { return obj.hasOwnProperty('className'); })[0];
                var canPush = false;
                if (!curObj) {
                    canPush = true;
                    curObj = {};
                }
                var existValue = curObj[curMapper] || '';
                curObj[curMapper] = existValue + classRegexString.replace('{value}', selector.replace('.', ''));
                if (canPush) {
                    mapper.push(curObj);
                }
            }
            else {
                obj[curMapper] = selector.replace(match[0], '');
                mapper.push(obj);
            }
        }
        else {
            mapper.push({ tagName: selector });
        }
    }
    //tslint:disable-next-line
    function accessElement(ele, mapper, selectAll, immediateParent) {
        if (ele.children) {
            //tslint:disable-next-line
            var temp_1 = ele.children.filter(function (child) {
                if (typeof (child) !== 'string') {
                    var matched = true;
                    for (var _i = 0, mapper_1 = mapper; _i < mapper_1.length; _i++) {
                        var map = mapper_1[_i];
                        var key = Object.keys(map)[0];
                        var expected = map[key];
                        var actualValue = getValue(assigner[key], child);
                        if (key === 'className') {
                            if (!(new RegExp('^' + expected + '.*$').test(actualValue))) {
                                matched = false;
                                break;
                            }
                        }
                        else if (actualValue !== expected) {
                            matched = false;
                            break;
                        }
                    }
                    return matched;
                }
                else {
                    return false;
                }
            });
            if (!immediateParent && (!temp_1.length || selectAll)) {
                ele.children.forEach(function (child) {
                    if (isObject(child)) {
                        temp_1 = temp_1.concat(accessElement(child, mapper, selectAll));
                    }
                });
            }
            return temp_1;
        }
        else {
            return [];
        }
    }
    VirtualDOM.accessElement = accessElement;
    function ConvertHTMLToJSon(htmlString) {
        var results = [];
        var isText;
        var tagArray = [];
        var backup = htmlString;
        var nodeArray = [];
        while (htmlString) {
            isText = true;
            var lastVal = getLastValue(tagArray);
            if (!lastVal || !contains(cspElement, lastVal)) {
                if (htmlString.indexOf('</') === 0) {
                    var match = htmlString.match(endRegex);
                    if (match) {
                        htmlString = htmlString.substring(match[0].length);
                        //tslint:disable-next-line
                        match[0].replace(endRegex, iterateEndTag);
                    }
                    isText = false;
                }
                else if (htmlString.indexOf('<') === 0) {
                    var match = htmlString.match(startRegex);
                    if (match) {
                        htmlString = htmlString.substring(match[0].length);
                        //tslint:disable-next-line
                        match[0].replace(startRegex, iterateStartTag);
                    }
                    isText = false;
                }
                if (isText) {
                    var tagIndex = htmlString.indexOf('<');
                    var text = tagIndex < 0 ? htmlString : htmlString.substring(0, tagIndex);
                    htmlString = tagIndex < 0 ? '' : htmlString.substring(tagIndex);
                    iterateText(text);
                }
            }
            else {
                //tslint:disable-next-line
                htmlString = htmlString.replace(new RegExp('([\\s\\S]*?)<\/' + getLastValue(nodeArray) + '[^>]*>'), function (all, text) {
                    text = text.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, '$1$2');
                    iterateText(text);
                    return '';
                });
                iterateEndTag('', getLastValue(tagArray));
            }
            backup = htmlString;
        }
        function iterateStartTag(start, tagName, rest) {
            tagName = tagName.toLowerCase();
            if (contains(blockElements, tagName)) {
                while (getLastValue(tagArray) && contains(inlineElement, getLastValue(tagArray))) {
                    iterateEndTag('', getLastValue(tagArray));
                }
            }
            if (contains(selfClosingElements, tagName) && getLastValue(tagArray)) {
                iterateEndTag('', tagName);
            }
            var isSelfTag = contains(emptyElements, tagName);
            if (!isSelfTag) {
                tagArray.push(tagName);
            }
            var attrs = {};
            //tslint:disable-next-line
            rest.replace(attributeRegex, function (match, name) {
                var names = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    names[_i - 2] = arguments[_i];
                }
                //tslint:disable-next-line
                var val = names[2] ? names[2] :
                    names[3] ? names[3] :
                        names[4] ? names[4] :
                            contains(fillAttrs, name) ? name : '';
                if (name === 'style') {
                    var valArr = val.split(';');
                    var vObj = {};
                    for (var i = 0, length_3 = valArr.length; i < length_3; i++) {
                        var cVal = valArr[i];
                        var styleSplit = cVal.split(':');
                        vObj[styleSplit[0]] = styleSplit[1];
                    }
                    val = vObj;
                }
                name = nameMapper[name] || name;
                attrs[name] = val;
                //tslint:disable-next-line
            });
            attrs['data-id'] = getRandomId();
            var tagObject = {
                tagName: tagName,
                attributes: attrs
            };
            if (isSelfTag) {
                var parent_3 = (nodeArray[0] || results);
                if (parent_3.children === undefined) {
                    parent_3.children = [];
                }
                tagObject.parent = parent_3;
                parent_3.children.push(tagObject);
            }
            else {
                nodeArray.unshift(tagObject);
            }
        }
        function iterateEndTag(start, tagName) {
            var pos;
            if (!tagName) {
                pos = 0;
            }
            else {
                for (pos = tagArray.length - 1; pos >= 0; pos--) {
                    if (tagArray[pos] === tagName) {
                        break;
                    }
                }
            }
            if (pos >= 0) {
                for (var j = nodeArray.length - 1; j >= pos; j--) {
                    //tslint:disable-next-line
                    var node = nodeArray.shift();
                    if (nodeArray.length === 0) {
                        results.push(node);
                    }
                    else {
                        var parent_4 = nodeArray[0];
                        if (parent_4.children === undefined) {
                            parent_4.children = [];
                        }
                        node.parent = parent_4;
                        parent_4.children.push(node);
                    }
                }
                tagArray.length = pos;
            }
        }
        function iterateText(text) {
            if (nodeArray.length === 0) {
                results.push(text);
            }
            else {
                var parent_5 = nodeArray[0];
                if (parent_5.children === undefined) {
                    parent_5.children = [];
                }
                parent_5.children.push(text);
            }
        }
        return results;
    }
    VirtualDOM.ConvertHTMLToJSon = ConvertHTMLToJSon;
    //tslint:disable-next-line 
    function getLastValue(arr) {
        return arr[arr.length - 1];
    }
    function contains(arr, key) {
        return arr.indexOf(key) !== -1;
    }
    //tslint:disable-next-line
    function cloneNode(ele, deep) {
        if (isObject(ele)) {
            if (deep) {
                return extend({}, {}, ele, true);
            }
            else {
                return { tagName: ele.tagName, attributes: ele.attributes };
            }
        }
        else {
            return ele.cloneNode(deep);
        }
    }
    VirtualDOM.cloneNode = cloneNode;
    function setStyleAttribute(element, attrs) {
        if (element.attributes.style) {
            (element.attributes).style = extend({}, attrs);
        }
        else {
            element.attributes.style = extend(element.attributes.style, attrs);
        }
    }
    VirtualDOM.setStyleAttribute = setStyleAttribute;
    //tslint:enable:no-any
})(VirtualDOM || (VirtualDOM = {}));
