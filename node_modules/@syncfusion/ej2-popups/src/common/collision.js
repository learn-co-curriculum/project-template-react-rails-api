/**
 * Collision module.
 */
import { calculatePosition } from './position';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
var parentDocument;
var targetContainer;
/**
 *
 * @param {HTMLElement} element - specifies the element
 * @param {HTMLElement} viewPortElement - specifies the element
 * @param {CollisionCoordinates} axis - specifies the collision coordinates
 * @param {OffsetPosition} position - specifies the position
 * @returns {void}
 */
export function fit(element, viewPortElement, axis, position) {
    if (viewPortElement === void 0) { viewPortElement = null; }
    if (axis === void 0) { axis = { X: false, Y: false }; }
    if (!axis.Y && !axis.X) {
        return { left: 0, top: 0 };
    }
    var elemData = element.getBoundingClientRect();
    targetContainer = viewPortElement;
    parentDocument = element.ownerDocument;
    if (!position) {
        position = calculatePosition(element, 'left', 'top');
    }
    if (axis.X) {
        var containerWidth = targetContainer ? getTargetContainerWidth() : getViewPortWidth();
        var containerLeft = ContainerLeft();
        var containerRight = ContainerRight();
        var overLeft = containerLeft - position.left;
        var overRight = position.left + elemData.width - containerRight;
        if (elemData.width > containerWidth) {
            if (overLeft > 0 && overRight <= 0) {
                position.left = containerRight - elemData.width;
            }
            else if (overRight > 0 && overLeft <= 0) {
                position.left = containerLeft;
            }
            else {
                position.left = overLeft > overRight ? (containerRight - elemData.width) : containerLeft;
            }
        }
        else if (overLeft > 0) {
            position.left += overLeft;
        }
        else if (overRight > 0) {
            position.left -= overRight;
        }
    }
    if (axis.Y) {
        var containerHeight = targetContainer ? getTargetContainerHeight() : getViewPortHeight();
        var containerTop = ContainerTop();
        var containerBottom = ContainerBottom();
        var overTop = containerTop - position.top;
        var overBottom = position.top + elemData.height - containerBottom;
        if (elemData.height > containerHeight) {
            if (overTop > 0 && overBottom <= 0) {
                position.top = containerBottom - elemData.height;
            }
            else if (overBottom > 0 && overTop <= 0) {
                position.top = containerTop;
            }
            else {
                position.top = overTop > overBottom ? (containerBottom - elemData.height) : containerTop;
            }
        }
        else if (overTop > 0) {
            position.top += overTop;
        }
        else if (overBottom > 0) {
            position.top -= overBottom;
        }
    }
    return position;
}
/**
 *
 * @param {HTMLElement} element - specifies the html element
 * @param {HTMLElement} viewPortElement - specifies the html element
 * @param {number} x - specifies the number
 * @param {number} y - specifies the number
 * @returns {string[]} - returns the string value
 */
export function isCollide(element, viewPortElement, x, y) {
    if (viewPortElement === void 0) { viewPortElement = null; }
    var elemOffset = calculatePosition(element, 'left', 'top');
    if (x) {
        elemOffset.left = x;
    }
    if (y) {
        elemOffset.top = y;
    }
    var data = [];
    targetContainer = viewPortElement;
    parentDocument = element.ownerDocument;
    var elementRect = element.getBoundingClientRect();
    var top = elemOffset.top;
    var left = elemOffset.left;
    var right = elemOffset.left + elementRect.width;
    var bottom = elemOffset.top + elementRect.height;
    // eslint-disable-next-line
    var topData = '', leftData = '';
    var yAxis = topCollideCheck(top, bottom);
    var xAxis = leftCollideCheck(left, right);
    if (yAxis.topSide) {
        data.push('top');
    }
    if (xAxis.rightSide) {
        data.push('right');
    }
    if (xAxis.leftSide) {
        data.push('left');
    }
    if (yAxis.bottomSide) {
        data.push('bottom');
    }
    return data;
}
/**
 *
 * @param {HTMLElement} element - specifies the element
 * @param {HTMLElement} target - specifies the element
 * @param {number} offsetX - specifies the number
 * @param {number} offsetY - specifies the number
 * @param {string} positionX - specifies the string value
 * @param {string} positionY - specifies the string value
 * @param {HTMLElement} viewPortElement - specifies the element
 * @param {CollisionCoordinates} axis - specifies the collision axis
 * @param {boolean} fixedParent - specifies the boolean
 * @returns {void}
 */
export function flip(element, target, offsetX, offsetY, positionX, positionY, viewPortElement, 
/* eslint-disable */
axis, fixedParent) {
    if (viewPortElement === void 0) { viewPortElement = null; }
    if (axis === void 0) { axis = { X: true, Y: true }; }
    if (!target || !element || !positionX || !positionY || (!axis.X && !axis.Y)) {
        return;
    }
    // eslint-disable-next-line
    var tEdge = { TL: null,
        TR: null,
        BL: null,
        BR: null
    }, eEdge = {
        TL: null,
        TR: null,
        BL: null,
        BR: null
        /* eslint-enable */
    };
    var elementRect;
    if (window.getComputedStyle(element).display === 'none') {
        var oldVisibility = element.style.visibility;
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        elementRect = element.getBoundingClientRect();
        element.style.removeProperty('display');
        element.style.visibility = oldVisibility;
    }
    else {
        elementRect = element.getBoundingClientRect();
    }
    var pos = {
        posX: positionX, posY: positionY, offsetX: offsetX, offsetY: offsetY, position: { left: 0, top: 0 }
    };
    targetContainer = viewPortElement;
    parentDocument = target.ownerDocument;
    updateElementData(target, tEdge, pos, fixedParent, elementRect);
    setPosition(eEdge, pos, elementRect);
    if (axis.X) {
        leftFlip(target, eEdge, tEdge, pos, elementRect, true);
    }
    if (axis.Y && tEdge.TL.top > -1) {
        topFlip(target, eEdge, tEdge, pos, elementRect, true);
    }
    setPopup(element, pos, elementRect);
}
/**
 *
 * @param {HTMLElement} element - specifies the element
 * @param {PositionLocation} pos - specifies the location
 * @param {ClientRect} elementRect - specifies the client rect
 * @returns {void}
 */
function setPopup(element, pos, elementRect) {
    //eslint-disable-next-line
    var left = 0, top = 0;
    if (element.offsetParent != null
        && (getComputedStyle(element.offsetParent).position === 'absolute' ||
            getComputedStyle(element.offsetParent).position === 'relative')) {
        var data = calculatePosition(element.offsetParent, 'left', 'top', false, elementRect);
        left = data.left;
        top = data.top;
    }
    element.style.top = (pos.position.top + pos.offsetY - (top)) + 'px';
    element.style.left = (pos.position.left + pos.offsetX - (left)) + 'px';
}
/**
 *
 * @param {HTMLElement} target - specifies the element
 * @param {EdgeOffset} edge - specifies the offset
 * @param {PositionLocation} pos - specifies theloaction
 * @param {boolean} fixedParent - specifies the boolean
 * @param {ClientRect} elementRect - specifies the client rect
 * @returns {void}
 */
function updateElementData(target, edge, pos, fixedParent, elementRect) {
    pos.position = calculatePosition(target, pos.posX, pos.posY, fixedParent, elementRect);
    edge.TL = calculatePosition(target, 'left', 'top', fixedParent, elementRect);
    edge.TR = calculatePosition(target, 'right', 'top', fixedParent, elementRect);
    edge.BR = calculatePosition(target, 'left', 'bottom', fixedParent, elementRect);
    edge.BL = calculatePosition(target, 'right', 'bottom', fixedParent, elementRect);
}
/**
 *
 * @param {EdgeOffset} eStatus - specifies the status
 * @param {PositionLocation} pos - specifies the location
 * @param {ClientRect} elementRect - specifies the client
 * @returns {void}
 */
function setPosition(eStatus, pos, elementRect) {
    eStatus.TL = { top: pos.position.top + pos.offsetY, left: pos.position.left + pos.offsetX };
    eStatus.TR = { top: eStatus.TL.top, left: eStatus.TL.left + elementRect.width };
    eStatus.BL = { top: eStatus.TL.top + elementRect.height,
        left: eStatus.TL.left };
    eStatus.BR = { top: eStatus.TL.top + elementRect.height,
        left: eStatus.TL.left + elementRect.width };
}
/**
 *
 * @param {number} left - specifies the  number
 * @param {number} right - specifies the number
 * @returns {LeftCorners} - returns the value
 */
function leftCollideCheck(left, right) {
    //eslint-disable-next-line
    var leftSide = false, rightSide = false;
    if (((left - getBodyScrollLeft()) < ContainerLeft())) {
        leftSide = true;
    }
    if (right > ContainerRight()) {
        rightSide = true;
    }
    return { leftSide: leftSide, rightSide: rightSide };
}
/**
 *
 * @param {HTMLElement} target - specifies the element
 * @param {EdgeOffset} edge - specifes the element
 * @param {EdgeOffset} tEdge - specifies the edge offset
 * @param {PositionLocation} pos - specifes the location
 * @param {ClientRect} elementRect - specifies the client
 * @param {boolean} deepCheck - specifies the boolean value
 * @returns {void}
 */
function leftFlip(target, edge, tEdge, pos, elementRect, deepCheck) {
    var collideSide = leftCollideCheck(edge.TL.left, edge.TR.left);
    if ((tEdge.TL.left - getBodyScrollLeft()) <= ContainerLeft()) {
        collideSide.leftSide = false;
    }
    if (tEdge.TR.left > ContainerRight()) {
        collideSide.rightSide = false;
    }
    if ((collideSide.leftSide && !collideSide.rightSide) || (!collideSide.leftSide && collideSide.rightSide)) {
        if (pos.posX === 'right') {
            pos.posX = 'left';
        }
        else {
            pos.posX = 'right';
        }
        pos.offsetX = pos.offsetX + elementRect.width;
        pos.offsetX = -1 * pos.offsetX;
        pos.position = calculatePosition(target, pos.posX, pos.posY, false);
        setPosition(edge, pos, elementRect);
        if (deepCheck) {
            leftFlip(target, edge, tEdge, pos, elementRect, false);
        }
    }
}
/**
 *
 * @param {HTMLElement} target - specifies the element
 * @param {EdgeOffset} edge - specifies the offset
 * @param {EdgeOffset} tEdge - specifies the offset
 * @param {PositionLocation} pos - specifies the location
 * @param {ClientRect} elementRect - specifies the client rect
 * @param {boolean} deepCheck - specifies the boolean
 * @returns {void}
 */
function topFlip(target, edge, tEdge, pos, elementRect, deepCheck) {
    var collideSide = topCollideCheck(edge.TL.top, edge.BL.top);
    if ((tEdge.TL.top - getBodyScrollTop()) <= ContainerTop()) {
        collideSide.topSide = false;
    }
    if (tEdge.BL.top >= ContainerBottom() && target.getBoundingClientRect().bottom < window.innerHeight) {
        collideSide.bottomSide = false;
    }
    if ((collideSide.topSide && !collideSide.bottomSide) || (!collideSide.topSide && collideSide.bottomSide)) {
        if (pos.posY === 'top') {
            pos.posY = 'bottom';
        }
        else {
            pos.posY = 'top';
        }
        pos.offsetY = pos.offsetY + elementRect.height;
        pos.offsetY = -1 * pos.offsetY;
        pos.position = calculatePosition(target, pos.posX, pos.posY, false, elementRect);
        setPosition(edge, pos, elementRect);
        if (deepCheck) {
            topFlip(target, edge, tEdge, pos, elementRect, false);
        }
    }
}
/**
 *
 * @param {number} top - specifies the number
 * @param {number} bottom - specifies the number
 * @returns {TopCorners} - retyrns the value
 */
function topCollideCheck(top, bottom) {
    //eslint-disable-next-line
    var topSide = false, bottomSide = false;
    if ((top - getBodyScrollTop()) < ContainerTop()) {
        topSide = true;
    }
    if (bottom > ContainerBottom()) {
        bottomSide = true;
    }
    return { topSide: topSide, bottomSide: bottomSide };
}
/**
 * @returns {void}
 */
function getTargetContainerWidth() {
    return targetContainer.getBoundingClientRect().width;
}
/**
 * @returns {void}
 */
function getTargetContainerHeight() {
    return targetContainer.getBoundingClientRect().height;
}
/**
 * @returns {void}
 */
function getTargetContainerLeft() {
    return targetContainer.getBoundingClientRect().left;
}
/**
 * @returns {void}
 */
function getTargetContainerTop() {
    return targetContainer.getBoundingClientRect().top;
}
//eslint-disable-next-line
function ContainerTop() {
    if (targetContainer) {
        return getTargetContainerTop();
    }
    return 0;
}
//eslint-disable-next-line
function ContainerLeft() {
    if (targetContainer) {
        return getTargetContainerLeft();
    }
    return 0;
}
//eslint-disable-next-line
function ContainerRight() {
    if (targetContainer) {
        return (getBodyScrollLeft() + getTargetContainerLeft() + getTargetContainerWidth());
    }
    return (getBodyScrollLeft() + getViewPortWidth());
}
//eslint-disable-next-line
function ContainerBottom() {
    if (targetContainer) {
        return (getBodyScrollTop() + getTargetContainerTop() + getTargetContainerHeight());
    }
    return (getBodyScrollTop() + getViewPortHeight());
}
/**
 * @returns {void}
 */
function getBodyScrollTop() {
    // if(targetContainer)
    //     return targetContainer.scrollTop;
    return parentDocument.documentElement.scrollTop || parentDocument.body.scrollTop;
}
/**
 * @returns {void}
 */
function getBodyScrollLeft() {
    // if(targetContainer)
    //     return targetContainer.scrollLeft;
    return parentDocument.documentElement.scrollLeft || parentDocument.body.scrollLeft;
}
/**
 * @returns {void}
 */
function getViewPortHeight() {
    return window.innerHeight;
}
/**
 * @returns {void}
 */
function getViewPortWidth() {
    var windowWidth = window.innerWidth;
    var documentReact = document.documentElement.getBoundingClientRect();
    var offsetWidth = (isNullOrUndefined(document.documentElement)) ? 0 : documentReact.width;
    return windowWidth - (windowWidth - offsetWidth);
}
