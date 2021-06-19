/**
 * Resize library
 */
import { isNullOrUndefined as isNOU, createElement, EventHandler, detach, Browser } from '@syncfusion/ej2-base';
/* eslint-disable */
var elementClass = ['north-west', 'north', 'north-east', 'west', 'east', 'south-west', 'south', 'south-east'];
var RESIZE_HANDLER = 'e-resize-handle';
var FOCUSED_HANDLER = 'e-focused-handle';
var RESTRICT_LEFT = ['e-restrict-left'];
var RESIZE_WITHIN_VIEWPORT = 'e-resize-viewport';
var dialogBorderResize = ['north', 'west', 'east', 'south'];
var targetElement;
var selectedHandler;
var originalWidth = 0;
var originalHeight = 0;
var originalX = 0;
var originalY = 0;
var originalMouseX = 0;
var originalMouseY = 0;
var minHeight;
var maxHeight;
var minWidth;
var maxWidth;
var containerElement;
/* eslint-disable */
var resizeStart = null;
var resize = null;
var resizeEnd = null;
/* eslint-enable */
var resizeWestWidth;
var setLeft = true;
var previousWidth = 0;
var setWidth = true;
// eslint-disable-next-line
var proxy;
/**
 *
 * @param {ResizeArgs} args - specifies the resize args
 * @returns {void}
 */
export function createResize(args) {
    resizeStart = args.resizeBegin;
    resize = args.resizing;
    resizeEnd = args.resizeComplete;
    targetElement = getDOMElement(args.element);
    containerElement = getDOMElement(args.boundary);
    var directions = args.direction.split(' ');
    for (var i = 0; i < directions.length; i++) {
        if (dialogBorderResize.indexOf(directions[i]) >= 0 && directions[i]) {
            setBorderResizeElm(directions[i]);
        }
        else if (directions[i].trim() !== '') {
            var resizeHandler = createElement('div', { className: 'e-icons ' + RESIZE_HANDLER + ' ' + 'e-' + directions[i] });
            targetElement.appendChild(resizeHandler);
        }
    }
    minHeight = args.minHeight;
    minWidth = args.minWidth;
    maxWidth = args.maxWidth;
    maxHeight = args.maxHeight;
    if (args.proxy && args.proxy.element && args.proxy.element.classList.contains('e-dialog')) {
        wireEvents(args.proxy);
    }
    else {
        wireEvents();
    }
}
/**
 *
 * @param {string} direction - specifies the string
 * @returns {void}
 */
function setBorderResizeElm(direction) {
    calculateValues();
    var borderBottom = createElement('span', {
        attrs: {
            'unselectable': 'on', 'contenteditable': 'false'
        }
    });
    borderBottom.setAttribute('class', 'e-dialog-border-resize e-' + direction);
    if (direction === 'south') {
        borderBottom.style.height = '2px';
        borderBottom.style.width = '100%';
        borderBottom.style.bottom = '0px';
        borderBottom.style.left = '0px';
    }
    if (direction === 'north') {
        borderBottom.style.height = '2px';
        borderBottom.style.width = '100%';
        borderBottom.style.top = '0px';
        borderBottom.style.left = '0px';
    }
    if (direction === 'east') {
        borderBottom.style.height = '100%';
        borderBottom.style.width = '2px';
        borderBottom.style.right = '0px';
        borderBottom.style.top = '0px';
    }
    if (direction === 'west') {
        borderBottom.style.height = '100%';
        borderBottom.style.width = '2px';
        borderBottom.style.left = '0px';
        borderBottom.style.top = '0px';
    }
    targetElement.appendChild(borderBottom);
}
/**
 *
 * @param {string} element - specifies the element
 * @returns {HTMLElement} - returns the element
 */
function getDOMElement(element) {
    var domElement;
    if (!isNOU(element)) {
        if (typeof (element) === 'string') {
            domElement = document.querySelector(element);
        }
        else {
            domElement = element;
        }
    }
    return domElement;
}
// eslint-disable-next-line
function wireEvents(args) {
    if (isNOU(args)) {
        args = this;
    }
    var resizers = targetElement.querySelectorAll('.' + RESIZE_HANDLER);
    for (var i = 0; i < resizers.length; i++) {
        selectedHandler = resizers[i];
        EventHandler.add(selectedHandler, 'mousedown', onMouseDown, args);
        var eventName = (Browser.info.name === 'msie') ? 'pointerdown' : 'touchstart';
        EventHandler.add(selectedHandler, eventName, onTouchStart, args);
    }
    var borderResizers = targetElement.querySelectorAll('.e-dialog-border-resize');
    if (!isNOU(borderResizers)) {
        for (var i = 0; i < borderResizers.length; i++) {
            selectedHandler = borderResizers[i];
            EventHandler.add(selectedHandler, 'mousedown', onMouseDown, args);
            var eventName = (Browser.info.name === 'msie') ? 'pointerdown' : 'touchstart';
            EventHandler.add(selectedHandler, eventName, onTouchStart, args);
        }
    }
}
/* istanbul ignore next */
/**
 *
 * @param {string} e - specifies the string
 * @returns {string} - returns the string
 */
function getEventType(e) {
    return (e.indexOf('mouse') > -1) ? 'mouse' : 'touch';
}
/* istanbul ignore next */
/**
 *
 * @param {MouseEvent} e - specifies the mouse event
 * @returns {void}
 */
function onMouseDown(e) {
    e.preventDefault();
    targetElement = e.target.parentElement;
    calculateValues();
    originalMouseX = e.pageX;
    originalMouseY = e.pageY;
    e.target.classList.add(FOCUSED_HANDLER);
    if (!isNOU(resizeStart)) {
        proxy = this;
        if (resizeStart(e, proxy) === true) {
            return;
        }
    }
    var target = (isNOU(containerElement)) ? document : containerElement;
    EventHandler.add(target, 'mousemove', onMouseMove, this);
    EventHandler.add(document, 'mouseup', onMouseUp, this);
    for (var i = 0; i < RESTRICT_LEFT.length; i++) {
        if (targetElement.classList.contains(RESTRICT_LEFT[i])) {
            setLeft = false;
        }
        else {
            setLeft = true;
        }
    }
}
/* istanbul ignore next */
/**
 *
 * @param {MouseEvent} e - specifies the event
 * @returns {void}
 */
function onMouseUp(e) {
    var touchMoveEvent = (Browser.info.name === 'msie') ? 'pointermove' : 'touchmove';
    var touchEndEvent = (Browser.info.name === 'msie') ? 'pointerup' : 'touchend';
    var target = (isNOU(containerElement)) ? document : containerElement;
    var eventName = (Browser.info.name === 'msie') ? 'pointerdown' : 'touchstart';
    EventHandler.remove(target, 'mousemove', onMouseMove);
    EventHandler.remove(target, touchMoveEvent, onMouseMove);
    EventHandler.remove(target, eventName, onMouseMove);
    if (!isNOU(document.body.querySelector('.' + FOCUSED_HANDLER))) {
        document.body.querySelector('.' + FOCUSED_HANDLER).classList.remove(FOCUSED_HANDLER);
    }
    if (!isNOU(resizeEnd)) {
        proxy = this;
        resizeEnd(e, proxy);
    }
    EventHandler.remove(document, 'mouseup', onMouseUp);
    EventHandler.remove(document, touchEndEvent, onMouseUp);
}
/* istanbul ignore next */
/**
 * @returns {void}
 */
function calculateValues() {
    originalWidth = parseFloat(getComputedStyle(targetElement, null).getPropertyValue('width').replace('px', ''));
    originalHeight = parseFloat(getComputedStyle(targetElement, null).getPropertyValue('height').replace('px', ''));
    originalX = targetElement.getBoundingClientRect().left;
    originalY = targetElement.getBoundingClientRect().top;
}
/* istanbul ignore next */
/**
 *
 * @param {MouseEvent} e - specifies the event
 * @returns {void}
 */
function onTouchStart(e) {
    targetElement = e.target.parentElement;
    calculateValues();
    var coordinates = e.touches ? e.changedTouches[0] : e;
    originalMouseX = coordinates.pageX;
    originalMouseY = coordinates.pageY;
    if (!isNOU(resizeStart)) {
        proxy = this;
        if (resizeStart(e, proxy) === true) {
            return;
        }
    }
    var touchMoveEvent = (Browser.info.name === 'msie') ? 'pointermove' : 'touchmove';
    var touchEndEvent = (Browser.info.name === 'msie') ? 'pointerup' : 'touchend';
    var target = (isNOU(containerElement)) ? document : containerElement;
    EventHandler.add(target, touchMoveEvent, onMouseMove, this);
    EventHandler.add(document, touchEndEvent, onMouseUp);
}
/* istanbul ignore next */
/**
 *
 * @param {MouseEvent} e - specifies the event
 * @returns {void}
 */
function onMouseMove(e) {
    if (e.target.classList.contains(RESIZE_HANDLER) && e.target.classList.contains(FOCUSED_HANDLER)) {
        selectedHandler = e.target;
    }
    else if (!isNOU(document.body.querySelector('.' + FOCUSED_HANDLER))) {
        selectedHandler = document.body.querySelector('.' + FOCUSED_HANDLER);
    }
    if (!isNOU(selectedHandler)) {
        var resizeTowards = '';
        for (var i = 0; i < elementClass.length; i++) {
            if (selectedHandler.classList.contains('e-' + elementClass[i])) {
                resizeTowards = elementClass[i];
            }
        }
        if (!isNOU(resize)) {
            proxy = this;
            resize(e, proxy);
        }
        switch (resizeTowards) {
            case 'south':
                resizeSouth(e);
                break;
            case 'north':
                resizeNorth(e);
                break;
            case 'west':
                resizeWest(e);
                break;
            case 'east':
                resizeEast(e);
                break;
            case 'south-east':
                resizeSouth(e);
                resizeEast(e);
                break;
            case 'south-west':
                resizeSouth(e);
                resizeWest(e);
                break;
            case 'north-east':
                resizeNorth(e);
                resizeEast(e);
                break;
            case 'north-west':
                resizeNorth(e);
                resizeWest(e);
                break;
            default: break;
        }
    }
}
/* istanbul ignore next */
/**
 *
 * @param {HTMLElement} element - specifies the eleemnt
 * @returns {ClientRect} - returns the client
 */
function getClientRectValues(element) {
    return element.getBoundingClientRect();
}
/* istanbul ignore next */
// eslint-disable-next-line
function resizeSouth(e) {
    var documentHeight = document.documentElement.clientHeight;
    var calculateValue = false;
    var coordinates = e.touches ? e.changedTouches[0] : e;
    var currentpageY = coordinates.pageY;
    var targetRectValues = getClientRectValues(targetElement);
    var containerRectValues;
    if (!isNOU(containerElement)) {
        containerRectValues = getClientRectValues(containerElement);
    }
    if (!isNOU(containerElement)) {
        calculateValue = true;
    }
    else if (isNOU(containerElement) && ((documentHeight - currentpageY) >= 0 || (targetRectValues.top < 0))) {
        calculateValue = true;
    }
    var calculatedHeight = originalHeight + (currentpageY - originalMouseY);
    calculatedHeight = (calculatedHeight > minHeight) ? calculatedHeight : minHeight;
    var containerTop = 0;
    if (!isNOU(containerElement)) {
        containerTop = containerRectValues.top;
    }
    var borderValue = isNOU(containerElement) ? 0 : containerElement.offsetHeight - containerElement.clientHeight;
    var topWithoutborder = (targetRectValues.top - containerTop) - (borderValue / 2);
    topWithoutborder = (topWithoutborder < 0) ? 0 : topWithoutborder;
    if (targetRectValues.top > 0 && (topWithoutborder + calculatedHeight) > maxHeight) {
        calculateValue = false;
        if (targetElement.classList.contains(RESIZE_WITHIN_VIEWPORT)) {
            return;
        }
        targetElement.style.height = (maxHeight - parseInt(topWithoutborder.toString(), 10)) + 'px';
        return;
    }
    var targetTop = 0;
    if (calculateValue) {
        if (targetRectValues.top < 0 && (documentHeight + (targetRectValues.height + targetRectValues.top) > 0)) {
            targetTop = targetRectValues.top;
            if ((calculatedHeight + targetTop) <= 30) {
                calculatedHeight = (targetRectValues.height - (targetRectValues.height + targetRectValues.top)) + 30;
            }
        }
        if (((calculatedHeight + targetRectValues.top) >= maxHeight)) {
            targetElement.style.height = targetRectValues.height +
                (documentHeight - (targetRectValues.height + targetRectValues.top)) + 'px';
        }
        var calculatedTop = (isNOU(containerElement)) ? targetTop : topWithoutborder;
        if (calculatedHeight >= minHeight && ((calculatedHeight + calculatedTop) <= maxHeight)) {
            targetElement.style.height = calculatedHeight + 'px';
        }
    }
}
/* istanbul ignore next */
// eslint-disable-next-line
function resizeNorth(e) {
    var calculateValue = false;
    var boundaryRectValues;
    var pageY = (getEventType(e.type) === 'mouse') ? e.pageY : e.touches[0].pageY;
    var targetRectValues = getClientRectValues(targetElement);
    if (!isNOU(containerElement)) {
        boundaryRectValues = getClientRectValues(containerElement);
    }
    if (!isNOU(containerElement) && (targetRectValues.top - boundaryRectValues.top) > 0) {
        calculateValue = true;
    }
    else if (isNOU(containerElement) && pageY > 0) {
        calculateValue = true;
    }
    var currentHeight = originalHeight - (pageY - originalMouseY);
    if (calculateValue) {
        if (currentHeight >= minHeight && currentHeight <= maxHeight) {
            var containerTop = 0;
            if (!isNOU(containerElement)) {
                containerTop = boundaryRectValues.top;
            }
            var top_1 = (originalY - containerTop) + (pageY - originalMouseY);
            top_1 = top_1 > 0 ? top_1 : 1;
            targetElement.style.height = currentHeight + 'px';
            targetElement.style.top = top_1 + 'px';
        }
    }
}
/* istanbul ignore next */
// eslint-disable-next-line
function resizeWest(e) {
    var documentWidth = document.documentElement.clientWidth;
    var calculateValue = false;
    var rectValues;
    if (!isNOU(containerElement)) {
        rectValues = getClientRectValues(containerElement);
    }
    var pageX = (getEventType(e.type) === 'mouse') ? e.pageX : e.touches[0].pageX;
    var targetRectValues = getClientRectValues(targetElement);
    var borderValue = isNOU(containerElement) ? 0 : containerElement.offsetWidth - containerElement.clientWidth;
    /* eslint-disable */
    var left = isNOU(containerElement) ? 0 : rectValues.left;
    var containerWidth = isNOU(containerElement) ? 0 : rectValues.width;
    /* eslint-enable */
    if (isNOU(resizeWestWidth)) {
        if (!isNOU(containerElement)) {
            resizeWestWidth = (((targetRectValues.left - left) - borderValue / 2)) + targetRectValues.width;
            resizeWestWidth = resizeWestWidth + (containerWidth - borderValue - resizeWestWidth);
        }
        else {
            resizeWestWidth = documentWidth;
        }
    }
    if (!isNOU(containerElement) &&
        (Math.floor((targetRectValues.left - rectValues.left) + targetRectValues.width +
            (rectValues.right - targetRectValues.right)) - borderValue) <= maxWidth) {
        calculateValue = true;
    }
    else if (isNOU(containerElement) && pageX >= 0) {
        calculateValue = true;
    }
    var calculatedWidth = originalWidth - (pageX - originalMouseX);
    if (setLeft) {
        calculatedWidth = (calculatedWidth > resizeWestWidth) ? resizeWestWidth : calculatedWidth;
    }
    if (calculateValue) {
        if (calculatedWidth >= minWidth && calculatedWidth <= maxWidth) {
            var containerLeft = 0;
            if (!isNOU(containerElement)) {
                containerLeft = rectValues.left;
            }
            var left_1 = (originalX - containerLeft) + (pageX - originalMouseX);
            left_1 = (left_1 > 0) ? left_1 : 1;
            if (calculatedWidth !== previousWidth && setWidth) {
                targetElement.style.width = calculatedWidth + 'px';
            }
            if (setLeft) {
                targetElement.style.left = left_1 + 'px';
                if (left_1 === 1) {
                    setWidth = false;
                }
                else {
                    setWidth = true;
                }
            }
        }
    }
    previousWidth = calculatedWidth;
}
/* istanbul ignore next */
// eslint-disable-next-line
function resizeEast(e) {
    var documentWidth = document.documentElement.clientWidth;
    var calculateValue = false;
    var containerRectValues;
    if (!isNOU(containerElement)) {
        containerRectValues = getClientRectValues(containerElement);
    }
    var coordinates = e.touches ? e.changedTouches[0] : e;
    var pageX = coordinates.pageX;
    var targetRectValues = getClientRectValues(targetElement);
    if (!isNOU(containerElement) && (((targetRectValues.left - containerRectValues.left) + targetRectValues.width) < maxWidth
        || (targetRectValues.right - containerRectValues.left) > targetRectValues.width)) {
        calculateValue = true;
    }
    else if (isNOU(containerElement) && (documentWidth - pageX) > 0) {
        calculateValue = true;
    }
    var calculatedWidth = originalWidth + (pageX - originalMouseX);
    var containerLeft = 0;
    if (!isNOU(containerElement)) {
        containerLeft = containerRectValues.left;
    }
    if (((targetRectValues.left - containerLeft) + calculatedWidth) > maxWidth) {
        calculateValue = false;
        if (targetElement.classList.contains(RESIZE_WITHIN_VIEWPORT)) {
            return;
        }
        targetElement.style.width = maxWidth - (targetRectValues.left - containerLeft) + 'px';
    }
    if (calculateValue) {
        if (calculatedWidth >= minWidth && calculatedWidth <= maxWidth) {
            targetElement.style.width = calculatedWidth + 'px';
        }
    }
}
/* istanbul ignore next */
/**
 *
 * @param {number} minimumHeight - specifies the number
 * @returns {void}
 */
export function setMinHeight(minimumHeight) {
    minHeight = minimumHeight;
}
/**
 *
 * @param {number} value - specifies the number value
 * @returns {void}
 */
export function setMaxWidth(value) {
    maxWidth = value;
}
/**
 *
 * @param {number} value - specifies the number value
 * @returns {void}
 */
export function setMaxHeight(value) {
    maxHeight = value;
}
/**
 * @returns {void}
 */
export function removeResize() {
    var handlers = targetElement.querySelectorAll('.' + RESIZE_HANDLER);
    for (var i = 0; i < handlers.length; i++) {
        detach(handlers[i]);
    }
    var borderResizers = targetElement.querySelectorAll('.e-dialog-border-resize');
    if (!isNOU(borderResizers)) {
        for (var i = 0; i < borderResizers.length; i++) {
            detach(borderResizers[i]);
        }
    }
}
