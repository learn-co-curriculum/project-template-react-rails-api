import { detach, getUniqueID, rippleEffect, setValue, attributes } from '@syncfusion/ej2-base';
import { getValue, addClass, deleteObject } from '@syncfusion/ej2-base';
/**
 * Initialize wrapper element for angular.
 *
 * @private
 *
 * @param {CreateElementArgs} createElement - Specifies created element args
 * @param {string} tag - Specifies tag name
 * @param {string} type - Specifies type name
 * @param {HTMLInputElement} element - Specifies input element
 * @param {string} WRAPPER - Specifies wrapper element
 * @param {string} role - Specifies role
 * @returns {HTMLInputElement} - Input Element
 */
export function wrapperInitialize(createElement, tag, type, element, WRAPPER, role) {
    var input = element;
    if (element.tagName === tag) {
        // eslint-disable-next-line
        var ejInstance = getValue('ej2_instances', element);
        input = createElement('input', { attrs: { 'type': type } });
        var props = ['change', 'cssClass', 'label', 'labelPosition', 'id'];
        for (var index = 0, len = element.attributes.length; index < len; index++) {
            if (props.indexOf(element.attributes[index].nodeName) === -1) {
                input.setAttribute(element.attributes[index].nodeName, element.attributes[index].nodeValue);
            }
        }
        attributes(element, { 'class': WRAPPER, 'role': role, 'aria-checked': 'false' });
        element.appendChild(input);
        setValue('ej2_instances', ejInstance, input);
        deleteObject(element, 'ej2_instances');
    }
    return input;
}
/**
 * Get the text node.
 *
 * @param {HTMLElement} element - Specifies html element
 * @private
 * @returns {Node} - Text node.
 */
export function getTextNode(element) {
    var node;
    var childnode = element.childNodes;
    for (var i = 0; i < childnode.length; i++) {
        node = childnode[i];
        if (node.nodeType === 3) {
            return node;
        }
    }
    return null;
}
/**
 * Destroy the button components.
 *
 * @private
 * @param {Switch | CheckBox} ejInst - Specifies eJ2 Instance
 * @param {Element} wrapper - Specifies wrapper element
 * @param {string} tagName - Specifies tag name
 * @returns {void}
 */
export function destroy(ejInst, wrapper, tagName) {
    if (tagName === 'INPUT') {
        wrapper.parentNode.insertBefore(ejInst.element, wrapper);
        detach(wrapper);
        ejInst.element.checked = false;
        ['name', 'value', 'disabled'].forEach(function (key) {
            ejInst.element.removeAttribute(key);
        });
    }
    else {
        ['role', 'aria-checked', 'class'].forEach(function (key) {
            wrapper.removeAttribute(key);
        });
        wrapper.innerHTML = '';
    }
}
/**
 * Initialize control pre rendering.
 *
 * @private
 * @param {Switch | CheckBox} proxy - Specifies proxy
 * @param {string} control - Specifies control
 * @param {string} wrapper - Specifies wrapper element
 * @param {HTMLInputElement} element - Specifies input element
 * @param {string} moduleName - Specifies module name
 * @returns {void}
 */
export function preRender(proxy, control, wrapper, element, moduleName) {
    element = wrapperInitialize(proxy.createElement, control, 'checkbox', element, wrapper, moduleName);
    proxy.element = element;
    if (proxy.element.getAttribute('type') !== 'checkbox') {
        proxy.element.setAttribute('type', 'checkbox');
    }
    if (!proxy.element.id) {
        proxy.element.id = getUniqueID('e-' + moduleName);
    }
}
/**
 * Creates CheckBox component UI with theming and ripple support.
 *
 * @private
 * @param {CreateElementArgs} createElement - Specifies Created Element args
 * @param {boolean} enableRipple - Specifies ripple effect
 * @param {CheckBoxUtilModel} options - Specifies Checkbox util Model
 * @returns {Element} - Checkbox Element
 */
export function createCheckBox(createElement, enableRipple, options) {
    if (enableRipple === void 0) { enableRipple = false; }
    if (options === void 0) { options = {}; }
    var wrapper = createElement('div', { className: 'e-checkbox-wrapper e-css' });
    if (options.cssClass) {
        addClass([wrapper], options.cssClass.split(' '));
    }
    if (options.enableRtl) {
        wrapper.classList.add('e-rtl');
    }
    if (enableRipple) {
        var rippleSpan = createElement('span', { className: 'e-ripple-container' });
        rippleEffect(rippleSpan, { isCenterRipple: true, duration: 400 });
        wrapper.appendChild(rippleSpan);
    }
    var frameSpan = createElement('span', { className: 'e-frame e-icons' });
    if (options.checked) {
        frameSpan.classList.add('e-check');
    }
    wrapper.appendChild(frameSpan);
    if (options.label) {
        var labelSpan = createElement('span', { className: 'e-label' });
        if (options.disableHtmlEncode) {
            labelSpan.textContent = options.label;
        }
        else {
            labelSpan.innerHTML = options.label;
        }
        wrapper.appendChild(labelSpan);
    }
    return wrapper;
}
/**
 * Handles ripple mouse.
 *
 * @private
 * @param {MouseEvent} e - Specifies mouse event
 * @param {Element} rippleSpan - Specifies Ripple span element
 * @returns {void}
 */
export function rippleMouseHandler(e, rippleSpan) {
    if (rippleSpan) {
        var event_1 = document.createEvent('MouseEvents');
        event_1.initEvent(e.type, false, true);
        rippleSpan.dispatchEvent(event_1);
    }
}
/**
 * Append hidden input to given element
 *
 * @private
 * @param {Switch | CheckBox} proxy - Specifies Proxy
 * @param {Element} wrap - Specifies Wrapper ELement
 * @returns {void}
 */
export function setHiddenInput(proxy, wrap) {
    if (proxy.element.getAttribute('ejs-for')) {
        wrap.appendChild(proxy.createElement('input', {
            attrs: { 'name': proxy.name || proxy.element.name, 'value': 'false', 'type': 'hidden' }
        }));
    }
}
