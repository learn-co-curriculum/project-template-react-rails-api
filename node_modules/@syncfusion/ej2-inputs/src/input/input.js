/* eslint-disable valid-jsdoc, jsdoc/require-jsdoc, jsdoc/require-returns, jsdoc/require-param */
import { createElement, attributes, addClass, removeClass, detach, classList } from '@syncfusion/ej2-base';
import { closest, formatUnit, isNullOrUndefined, remove } from '@syncfusion/ej2-base';
var CLASSNAMES = {
    RTL: 'e-rtl',
    DISABLE: 'e-disabled',
    INPUT: 'e-input',
    TEXTAREA: 'e-multi-line-input',
    INPUTGROUP: 'e-input-group',
    FLOATINPUT: 'e-float-input',
    FLOATLINE: 'e-float-line',
    FLOATTEXT: 'e-float-text',
    CLEARICON: 'e-clear-icon',
    CLEARICONHIDE: 'e-clear-icon-hide',
    LABELTOP: 'e-label-top',
    LABELBOTTOM: 'e-label-bottom',
    NOFLOATLABEL: 'e-no-float-label',
    INPUTCUSTOMTAG: 'e-input-custom-tag',
    FLOATCUSTOMTAG: 'e-float-custom-tag'
};
/**
 * Base for Input creation through util methods.
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
export var Input;
(function (Input) {
    var privateInputObj = {
        container: null,
        buttons: [],
        clearButton: null
    };
    var floatType;
    /**
     * Create a wrapper to input element with multiple span elements and set the basic properties to input based components.
     * ```
     * E.g : Input.createInput({ element: element, floatLabelType : "Auto", properties: { placeholder: 'Search' } });
     * ```
     *
     */
    function createInput(args, internalCreateElement) {
        var makeElement = !isNullOrUndefined(internalCreateElement) ? internalCreateElement : createElement;
        var inputObject = { container: null, buttons: [], clearButton: null };
        floatType = args.floatLabelType;
        if (isNullOrUndefined(args.floatLabelType) || args.floatLabelType === 'Never') {
            inputObject.container = createInputContainer(args, CLASSNAMES.INPUTGROUP, CLASSNAMES.INPUTCUSTOMTAG, 'span', makeElement);
            args.element.parentNode.insertBefore(inputObject.container, args.element);
            addClass([args.element], CLASSNAMES.INPUT);
            inputObject.container.appendChild(args.element);
        }
        else {
            createFloatingInput(args, inputObject, makeElement);
        }
        bindInitialEvent(args);
        if (!isNullOrUndefined(args.properties) && !isNullOrUndefined(args.properties.showClearButton) &&
            args.properties.showClearButton && args.element.tagName !== 'TEXTAREA') {
            setClearButton(args.properties.showClearButton, args.element, inputObject, true, makeElement);
            inputObject.clearButton.setAttribute('role', 'button');
            if (inputObject.container.classList.contains(CLASSNAMES.FLOATINPUT)) {
                addClass([inputObject.container], CLASSNAMES.INPUTGROUP);
            }
        }
        if (!isNullOrUndefined(args.buttons) && args.element.tagName !== 'TEXTAREA') {
            for (var i = 0; i < args.buttons.length; i++) {
                inputObject.buttons.push(appendSpan(args.buttons[i], inputObject.container, makeElement));
            }
        }
        if (!isNullOrUndefined(args.element) && args.element.tagName === 'TEXTAREA') {
            addClass([inputObject.container], CLASSNAMES.TEXTAREA);
        }
        validateInputType(inputObject.container, args.element);
        inputObject = setPropertyValue(args, inputObject);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        privateInputObj = inputObject;
        return inputObject;
    }
    Input.createInput = createInput;
    function bindInitialEvent(args) {
        checkInputValue(args.floatLabelType, args.element);
        args.element.addEventListener('focus', function () {
            var parent = getParentNode(this);
            if (parent.classList.contains('e-input-group') || parent.classList.contains('e-outline')
                || parent.classList.contains('e-filled')) {
                parent.classList.add('e-input-focus');
            }
        });
        args.element.addEventListener('blur', function () {
            var parent = getParentNode(this);
            if (parent.classList.contains('e-input-group') || parent.classList.contains('e-outline')
                || parent.classList.contains('e-filled')) {
                parent.classList.remove('e-input-focus');
            }
        });
        args.element.addEventListener('input', function () {
            checkInputValue(floatType, args.element);
        });
    }
    Input.bindInitialEvent = bindInitialEvent;
    function checkInputValue(floatLabelType, inputElement) {
        var inputValue = inputElement.value;
        if (inputValue !== '' && !isNullOrUndefined(inputValue) && inputElement.parentElement) {
            inputElement.parentElement.classList.add('e-valid-input');
        }
        else if (floatLabelType !== 'Always' && inputElement.parentElement) {
            inputElement.parentElement.classList.remove('e-valid-input');
        }
    }
    function _focusFn() {
        var label = getParentNode(this).getElementsByClassName('e-float-text')[0];
        if (!isNullOrUndefined(label)) {
            addClass([label], CLASSNAMES.LABELTOP);
            if (label.classList.contains(CLASSNAMES.LABELBOTTOM)) {
                removeClass([label], CLASSNAMES.LABELBOTTOM);
            }
        }
    }
    function _blurFn() {
        var parent = getParentNode(this);
        if ((parent.getElementsByTagName('textarea')[0]) ? parent.getElementsByTagName('textarea')[0].value === '' :
            parent.getElementsByTagName('input')[0].value === '') {
            var label = parent.getElementsByClassName('e-float-text')[0];
            if (!isNullOrUndefined(label)) {
                if (label.classList.contains(CLASSNAMES.LABELTOP)) {
                    removeClass([label], CLASSNAMES.LABELTOP);
                }
                addClass([label], CLASSNAMES.LABELBOTTOM);
            }
        }
    }
    function wireFloatingEvents(element) {
        element.addEventListener('focus', _focusFn);
        element.addEventListener('blur', _blurFn);
    }
    Input.wireFloatingEvents = wireFloatingEvents;
    function unwireFloatingEvents(element) {
        element.removeEventListener('focus', _focusFn);
        element.removeEventListener('blur', _blurFn);
    }
    function createFloatingInput(args, inputObject, internalCreateElement) {
        var makeElement = !isNullOrUndefined(internalCreateElement) ? internalCreateElement : createElement;
        if (args.floatLabelType === 'Auto') {
            wireFloatingEvents(args.element);
        }
        if (isNullOrUndefined(inputObject.container)) {
            inputObject.container = createInputContainer(args, CLASSNAMES.FLOATINPUT, CLASSNAMES.FLOATCUSTOMTAG, 'div', makeElement);
            args.element.parentNode.insertBefore(inputObject.container, args.element);
        }
        else {
            if (!isNullOrUndefined(args.customTag)) {
                inputObject.container.classList.add(CLASSNAMES.FLOATCUSTOMTAG);
            }
            inputObject.container.classList.add(CLASSNAMES.FLOATINPUT);
        }
        var floatLinelement = makeElement('span', { className: CLASSNAMES.FLOATLINE });
        var floatLabelElement = makeElement('label', { className: CLASSNAMES.FLOATTEXT });
        if (!isNullOrUndefined(args.element.id) && args.element.id !== '') {
            floatLabelElement.id = 'label_' + args.element.id.replace(/ /g, '_');
            attributes(args.element, { 'aria-labelledby': floatLabelElement.id });
        }
        if (!isNullOrUndefined(args.element.placeholder) && args.element.placeholder !== '') {
            floatLabelElement.innerText = encodePlaceHolder(args.element.placeholder);
            args.element.removeAttribute('placeholder');
        }
        if (!isNullOrUndefined(args.properties) && !isNullOrUndefined(args.properties.placeholder) &&
            args.properties.placeholder !== '') {
            floatLabelElement.innerText = encodePlaceHolder(args.properties.placeholder);
        }
        if (!floatLabelElement.innerText) {
            inputObject.container.classList.add(CLASSNAMES.NOFLOATLABEL);
        }
        if (inputObject.container.classList.contains('e-float-icon-left')) {
            var inputWrap = inputObject.container.querySelector('.e-input-in-wrap');
            inputWrap.appendChild(args.element);
            inputWrap.appendChild(floatLinelement);
            inputWrap.appendChild(floatLabelElement);
        }
        else {
            inputObject.container.appendChild(args.element);
            inputObject.container.appendChild(floatLinelement);
            inputObject.container.appendChild(floatLabelElement);
        }
        updateLabelState(args.element.value, floatLabelElement);
        if (args.floatLabelType === 'Always') {
            if (floatLabelElement.classList.contains(CLASSNAMES.LABELBOTTOM)) {
                removeClass([floatLabelElement], CLASSNAMES.LABELBOTTOM);
            }
            addClass([floatLabelElement], CLASSNAMES.LABELTOP);
        }
        if (args.floatLabelType === 'Auto') {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            args.element.addEventListener('input', function (event) {
                updateLabelState(args.element.value, floatLabelElement);
            });
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            args.element.addEventListener('blur', function (event) {
                updateLabelState(args.element.value, floatLabelElement);
            });
        }
        if (!isNullOrUndefined(args.element.getAttribute('id'))) {
            floatLabelElement.setAttribute('for', args.element.getAttribute('id'));
        }
    }
    function checkFloatLabelType(type, container) {
        if (type === 'Always' && container.classList.contains('e-outline')) {
            container.classList.add('e-valid-input');
        }
    }
    function setPropertyValue(args, inputObject) {
        if (!isNullOrUndefined(args.properties)) {
            for (var _i = 0, _a = Object.keys(args.properties); _i < _a.length; _i++) {
                var prop = _a[_i];
                switch (prop) {
                    case 'cssClass':
                        setCssClass(args.properties.cssClass, [inputObject.container]);
                        checkFloatLabelType(args.floatLabelType, inputObject.container);
                        break;
                    case 'enabled':
                        setEnabled(args.properties.enabled, args.element, args.floatLabelType, inputObject.container);
                        break;
                    case 'enableRtl':
                        setEnableRtl(args.properties.enableRtl, [inputObject.container]);
                        break;
                    case 'placeholder':
                        setPlaceholder(args.properties.placeholder, args.element);
                        break;
                    case 'readonly':
                        setReadonly(args.properties.readonly, args.element);
                        break;
                }
            }
        }
        return inputObject;
    }
    function updateIconState(value, button) {
        if (value) {
            removeClass([button], CLASSNAMES.CLEARICONHIDE);
        }
        else {
            addClass([button], CLASSNAMES.CLEARICONHIDE);
        }
    }
    function updateLabelState(value, label) {
        if (value) {
            addClass([label], CLASSNAMES.LABELTOP);
            if (label.classList.contains(CLASSNAMES.LABELBOTTOM)) {
                removeClass([label], CLASSNAMES.LABELBOTTOM);
            }
        }
        else {
            if (label.classList.contains(CLASSNAMES.LABELTOP)) {
                removeClass([label], CLASSNAMES.LABELTOP);
            }
            addClass([label], CLASSNAMES.LABELBOTTOM);
        }
    }
    function getParentNode(element) {
        var parentNode = isNullOrUndefined(element.parentNode) ? element
            : element.parentNode;
        if (parentNode && parentNode.classList.contains('e-input-in-wrap')) {
            parentNode = parentNode.parentNode;
        }
        return parentNode;
    }
    /**
     * To create clear button.
     */
    function createClearButton(element, inputObject, initial, internalCreateElement) {
        var makeElement = !isNullOrUndefined(internalCreateElement) ? internalCreateElement : createElement;
        var button = makeElement('span', { className: CLASSNAMES.CLEARICON });
        var container = inputObject.container;
        if (!isNullOrUndefined(initial)) {
            container.appendChild(button);
        }
        else {
            var baseElement = inputObject.container.classList.contains(CLASSNAMES.FLOATINPUT) ?
                inputObject.container.querySelector('.' + CLASSNAMES.FLOATTEXT) : element;
            baseElement.insertAdjacentElement('afterend', button);
        }
        if (!isNullOrUndefined(container) &&
            container.classList.contains(CLASSNAMES.FLOATINPUT)) {
            addClass([container], CLASSNAMES.INPUTGROUP);
        }
        addClass([button], CLASSNAMES.CLEARICONHIDE);
        wireClearBtnEvents(element, button, container);
        button.setAttribute('aria-label', 'close');
        return button;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function wireClearBtnEvents(element, button, container) {
        button.addEventListener('click', function (event) {
            if (!(element.classList.contains(CLASSNAMES.DISABLE) || element.readOnly)) {
                event.preventDefault();
                if (element !== document.activeElement) {
                    element.focus();
                }
                element.value = '';
                addClass([button], CLASSNAMES.CLEARICONHIDE);
            }
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        element.addEventListener('input', function (event) {
            updateIconState(element.value, button);
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        element.addEventListener('focus', function (event) {
            updateIconState(element.value, button);
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        element.addEventListener('blur', function (event) {
            setTimeout(function () {
                addClass([button], CLASSNAMES.CLEARICONHIDE);
            }, 200);
        });
    }
    Input.wireClearBtnEvents = wireClearBtnEvents;
    function validateLabel(element, floatLabelType) {
        var parent = getParentNode(element);
        if (parent.classList.contains(CLASSNAMES.FLOATINPUT) && floatLabelType === 'Auto') {
            var label = getParentNode(element).getElementsByClassName('e-float-text')[0];
            updateLabelState(element.value, label);
        }
    }
    /**
     * To create input box contianer.
     */
    function createInputContainer(args, className, tagClass, tag, internalCreateElement) {
        var makeElement = !isNullOrUndefined(internalCreateElement) ? internalCreateElement : createElement;
        var container;
        if (!isNullOrUndefined(args.customTag)) {
            container = makeElement(args.customTag, { className: className });
            container.classList.add(tagClass);
        }
        else {
            container = makeElement(tag, { className: className });
        }
        container.classList.add('e-control-wrapper');
        return container;
    }
    function encodePlaceHolder(placeholder) {
        var result = '';
        if (!isNullOrUndefined(placeholder) && placeholder !== '') {
            var spanEle = document.createElement('span');
            spanEle.innerHTML = '<input  placeholder="' + placeholder + '"/>';
            var hiddenInput = (spanEle.children[0]);
            result = hiddenInput.placeholder;
        }
        return result;
    }
    /**
     * Sets the value to the input element.
     * ```
     * E.g : Input.setValue('content', element, "Auto", true );
     * ```
     *
     * @param {string} value - Specify the value of the input element.
     * @param {HTMLInputElement | HTMLTextAreaElement} element - The element on which the specified value is updated.
     * @param {string} floatLabelType - Specify the float label type of the input element.
     * @param {boolean} clearButton - Boolean value to specify whether the clear icon is enabled / disabled on the input.
     */
    function setValue(value, element, floatLabelType, clearButton) {
        element.value = value;
        if ((!isNullOrUndefined(floatLabelType)) && floatLabelType === 'Auto') {
            validateLabel(element, floatLabelType);
        }
        if (!isNullOrUndefined(clearButton) && clearButton) {
            var parentElement = getParentNode(element);
            if (!isNullOrUndefined(parentElement)) {
                var button = parentElement.getElementsByClassName(CLASSNAMES.CLEARICON)[0];
                if (!isNullOrUndefined(button)) {
                    if (element.value && parentElement.classList.contains('e-input-focus')) {
                        removeClass([button], CLASSNAMES.CLEARICONHIDE);
                    }
                    else {
                        addClass([button], CLASSNAMES.CLEARICONHIDE);
                    }
                }
            }
        }
        checkInputValue(floatLabelType, element);
    }
    Input.setValue = setValue;
    /**
     * Sets the single or multiple cssClass to wrapper of input element.
     * ```
     * E.g : Input.setCssClass('e-custom-class', [element]);
     * ```
     *
     * @param {string} cssClass - Css class names which are needed to add.
     * @param {Element[] | NodeList} elements - The elements which are needed to add / remove classes.
     * @param {string} oldClass
     * - Css class names which are needed to remove. If old classes are need to remove, can give this optional parameter.
     */
    function setCssClass(cssClass, elements, oldClass) {
        if (!isNullOrUndefined(oldClass) && oldClass !== '') {
            removeClass(elements, oldClass.split(' '));
        }
        if (!isNullOrUndefined(cssClass) && cssClass !== '') {
            addClass(elements, cssClass.split(' '));
        }
    }
    Input.setCssClass = setCssClass;
    /**
     * Set the width to the wrapper of input element.
     * ```
     * E.g : Input.setWidth('200px', container);
     * ```
     *
     * @param {number | string} width - Width value which is need to add.
     * @param {HTMLElement} container - The element on which the width is need to add.
     */
    function setWidth(width, container) {
        if (typeof width === 'number') {
            container.style.width = formatUnit(width);
        }
        else if (typeof width === 'string') {
            container.style.width = (width.match(/px|%|em/)) ? (width) : (formatUnit(width));
        }
    }
    Input.setWidth = setWidth;
    /**
     * Set the placeholder attribute to the input element.
     * ```
     * E.g : Input.setPlaceholder('Search here', element);
     * ```
     *
     * @param {string} placeholder - Placeholder value which is need to add.
     * @param {HTMLInputElement | HTMLTextAreaElement} element - The element on which the placeholder is need to add.
     */
    function setPlaceholder(placeholder, element) {
        placeholder = encodePlaceHolder(placeholder);
        var parentElement = getParentNode(element);
        if (parentElement.classList.contains(CLASSNAMES.FLOATINPUT)) {
            if (!isNullOrUndefined(placeholder) && placeholder !== '') {
                parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = placeholder;
                parentElement.classList.remove(CLASSNAMES.NOFLOATLABEL);
                element.removeAttribute('placeholder');
            }
            else {
                parentElement.classList.add(CLASSNAMES.NOFLOATLABEL);
                parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = '';
            }
        }
        else {
            if (!isNullOrUndefined(placeholder) && placeholder !== '') {
                attributes(element, { 'placeholder': placeholder, 'aria-placeholder': placeholder });
            }
            else {
                element.removeAttribute('placeholder');
                element.removeAttribute('aria-placeholder');
            }
        }
    }
    Input.setPlaceholder = setPlaceholder;
    /**
     * Set the read only attribute to the input element
     * ```
     * E.g : Input.setReadonly(true, element);
     * ```
     *
     * @param {boolean} isReadonly
     * - Boolean value to specify whether to set read only. Setting "True" value enables read only.
     * @param {HTMLInputElement | HTMLTextAreaElement} element
     * - The element which is need to enable read only.
     */
    function setReadonly(isReadonly, element, floatLabelType) {
        if (isReadonly) {
            attributes(element, { readonly: '' });
        }
        else {
            element.removeAttribute('readonly');
        }
        if (!isNullOrUndefined(floatLabelType)) {
            validateLabel(element, floatLabelType);
        }
    }
    Input.setReadonly = setReadonly;
    /**
     * Displays the element direction from right to left when its enabled.
     * ```
     * E.g : Input.setEnableRtl(true, [inputObj.container]);
     * ```
     *
     * @param {boolean} isRtl
     * - Boolean value to specify whether to set RTL. Setting "True" value enables the RTL mode.
     * @param {Element[] | NodeList} elements
     * - The elements that are needed to enable/disable RTL.
     */
    function setEnableRtl(isRtl, elements) {
        if (isRtl) {
            addClass(elements, CLASSNAMES.RTL);
        }
        else {
            removeClass(elements, CLASSNAMES.RTL);
        }
    }
    Input.setEnableRtl = setEnableRtl;
    /**
     * Enables or disables the given input element.
     * ```
     * E.g : Input.setEnabled(false, element);
     * ```
     *
     * @param {boolean} isEnable
     * - Boolean value to specify whether to enable or disable.
     * @param {HTMLInputElement | HTMLTextAreaElement} element
     * - Element to be enabled or disabled.
     */
    function setEnabled(isEnable, element, floatLabelType, inputContainer) {
        var disabledAttrs = { 'disabled': 'disabled', 'aria-disabled': 'true' };
        var considerWrapper = isNullOrUndefined(inputContainer) ? false : true;
        if (isEnable) {
            element.classList.remove(CLASSNAMES.DISABLE);
            removeAttributes(disabledAttrs, element);
            if (considerWrapper) {
                removeClass([inputContainer], CLASSNAMES.DISABLE);
            }
        }
        else {
            element.classList.add(CLASSNAMES.DISABLE);
            addAttributes(disabledAttrs, element);
            if (considerWrapper) {
                addClass([inputContainer], CLASSNAMES.DISABLE);
            }
        }
        if (!isNullOrUndefined(floatLabelType)) {
            validateLabel(element, floatLabelType);
        }
    }
    Input.setEnabled = setEnabled;
    function setClearButton(isClear, element, inputObject, initial, internalCreateElement) {
        var makeElement = !isNullOrUndefined(internalCreateElement) ? internalCreateElement : createElement;
        if (isClear) {
            inputObject.clearButton = createClearButton(element, inputObject, initial, makeElement);
        }
        else {
            remove(inputObject.clearButton);
            inputObject.clearButton = null;
        }
    }
    Input.setClearButton = setClearButton;
    /**
     * Removing the multiple attributes from the given element such as "disabled","id" , etc.
     * ```
     * E.g : Input.removeAttributes({ 'disabled': 'disabled', 'aria-disabled': 'true' }, element);
     * ```
     *
     * @param {string} attrs
     * - Array of attributes which are need to removed from the element.
     * @param {HTMLInputElement | HTMLElement} element
     * - Element on which the attributes are needed to be removed.
     */
    function removeAttributes(attrs, element) {
        for (var _i = 0, _a = Object.keys(attrs); _i < _a.length; _i++) {
            var key = _a[_i];
            var parentElement = getParentNode(element);
            if (key === 'disabled') {
                element.classList.remove(CLASSNAMES.DISABLE);
            }
            if (key === 'disabled' && parentElement.classList.contains(CLASSNAMES.INPUTGROUP)) {
                parentElement.classList.remove(CLASSNAMES.DISABLE);
            }
            if (key === 'placeholder' && parentElement.classList.contains(CLASSNAMES.FLOATINPUT)) {
                parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = '';
            }
            else {
                element.removeAttribute(key);
            }
        }
    }
    Input.removeAttributes = removeAttributes;
    /**
     * Adding the multiple attributes to the given element such as "disabled","id" , etc.
     * ```
     * E.g : Input.addAttributes({ 'id': 'inputpopup' }, element);
     * ```
     *
     * @param {string} attrs
     * - Array of attributes which is added to element.
     * @param {HTMLInputElement | HTMLElement} element
     * - Element on which the attributes are needed to be added.
     */
    function addAttributes(attrs, element) {
        for (var _i = 0, _a = Object.keys(attrs); _i < _a.length; _i++) {
            var key = _a[_i];
            var parentElement = getParentNode(element);
            if (key === 'disabled') {
                element.classList.add(CLASSNAMES.DISABLE);
            }
            if (key === 'disabled' && parentElement.classList.contains(CLASSNAMES.INPUTGROUP)) {
                parentElement.classList.add(CLASSNAMES.DISABLE);
            }
            if (key === 'placeholder' && parentElement.classList.contains(CLASSNAMES.FLOATINPUT)) {
                parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = attrs[key];
            }
            else {
                element.setAttribute(key, attrs[key]);
            }
        }
    }
    Input.addAttributes = addAttributes;
    function removeFloating(input) {
        var container = input.container;
        if (!isNullOrUndefined(container) && container.classList.contains(CLASSNAMES.FLOATINPUT)) {
            var inputEle = container.querySelector('textarea') ? container.querySelector('textarea') :
                container.querySelector('input');
            var placeholder = container.querySelector('.' + CLASSNAMES.FLOATTEXT).textContent;
            var clearButton = container.querySelector('.e-clear-icon') !== null;
            detach(container.querySelector('.' + CLASSNAMES.FLOATLINE));
            detach(container.querySelector('.' + CLASSNAMES.FLOATTEXT));
            classList(container, [CLASSNAMES.INPUTGROUP], [CLASSNAMES.FLOATINPUT]);
            unwireFloatingEvents(inputEle);
            attributes(inputEle, { 'placeholder': placeholder });
            inputEle.classList.add(CLASSNAMES.INPUT);
            if (!clearButton && inputEle.tagName === 'INPUT') {
                inputEle.removeAttribute('required');
            }
        }
    }
    Input.removeFloating = removeFloating;
    function addFloating(input, type, placeholder, internalCreateElement) {
        var makeElement = !isNullOrUndefined(internalCreateElement) ? internalCreateElement : createElement;
        var container = closest(input, '.' + CLASSNAMES.INPUTGROUP);
        floatType = type;
        if (type !== 'Never') {
            var customTag = container.tagName;
            customTag = customTag !== 'DIV' && customTag !== 'SPAN' ? customTag : null;
            var args = { element: input, floatLabelType: type,
                customTag: customTag, properties: { placeholder: placeholder } };
            var iconEle = container.querySelector('.e-clear-icon');
            var inputObj = { container: container };
            input.classList.remove(CLASSNAMES.INPUT);
            createFloatingInput(args, inputObj, makeElement);
            var isPrependIcon = container.classList.contains('e-float-icon-left');
            if (isNullOrUndefined(iconEle)) {
                if (isPrependIcon) {
                    var inputWrap = container.querySelector('.e-input-in-wrap');
                    iconEle = inputWrap.querySelector('.e-input-group-icon');
                }
                else {
                    iconEle = container.querySelector('.e-input-group-icon');
                }
            }
            if (isNullOrUndefined(iconEle)) {
                if (isPrependIcon) {
                    iconEle = container.querySelector('.e-input-group-icon');
                }
                if (isNullOrUndefined(iconEle)) {
                    container.classList.remove(CLASSNAMES.INPUTGROUP);
                }
            }
            else {
                var floatLine = container.querySelector('.' + CLASSNAMES.FLOATLINE);
                var floatText = container.querySelector('.' + CLASSNAMES.FLOATTEXT);
                var wrapper = isPrependIcon ? container.querySelector('.e-input-in-wrap') : container;
                wrapper.insertBefore(input, iconEle);
                wrapper.insertBefore(floatLine, iconEle);
                wrapper.insertBefore(floatText, iconEle);
            }
        }
        checkFloatLabelType(type, input.parentElement);
    }
    Input.addFloating = addFloating;
    /**
     * Enable or Disable the ripple effect on the icons inside the Input. Ripple effect is only applicable for material theme.
     * ```
     * E.g : Input.setRipple(true, [inputObjects]);
     * ```
     *
     * @param {boolean} isRipple
     * - Boolean value to specify whether to enable the ripple effect.
     * @param {InputObject[]} inputObj
     * - Specify the collection of input objects.
     */
    function setRipple(isRipple, inputObj) {
        for (var i = 0; i < inputObj.length; i++) {
            _internalRipple(isRipple, inputObj[i].container);
        }
    }
    Input.setRipple = setRipple;
    function _internalRipple(isRipple, container, button) {
        var argsButton = [];
        argsButton.push(button);
        var buttons = isNullOrUndefined(button) ?
            container.querySelectorAll('.e-input-group-icon') : argsButton;
        if (isRipple && buttons.length > 0) {
            for (var index = 0; index < buttons.length; index++) {
                buttons[index].addEventListener('mousedown', _onMouseDownRipple, false);
                buttons[index].addEventListener('mouseup', _onMouseUpRipple, false);
            }
        }
        else if (buttons.length > 0) {
            for (var index = 0; index < buttons.length; index++) {
                buttons[index].removeEventListener('mousedown', _onMouseDownRipple, this);
                buttons[index].removeEventListener('mouseup', _onMouseUpRipple, this);
            }
        }
    }
    function _onMouseRipple(container, button) {
        if (!container.classList.contains('e-disabled') && !container.querySelector('input').readOnly) {
            button.classList.add('e-input-btn-ripple');
        }
    }
    function _onMouseDownRipple() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var ele = this;
        var parentEle = this.parentElement;
        while (!parentEle.classList.contains('e-input-group')) {
            parentEle = parentEle.parentElement;
        }
        _onMouseRipple(parentEle, ele);
    }
    function _onMouseUpRipple() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var ele = this;
        setTimeout(function () {
            ele.classList.remove('e-input-btn-ripple');
        }, 500);
    }
    function createIconEle(iconClass, makeElement) {
        var button = makeElement('span', { className: iconClass });
        button.classList.add('e-input-group-icon');
        return button;
    }
    /**
     * Creates a new span element with the given icons added and append it in container element.
     * ```
     * E.g : Input.addIcon('append', 'e-icon-spin', inputObj.container, inputElement);
     * ```
     *
     * @param {string} position - Specify the icon placement on the input.Possible values are append and prepend.
     * @param {string | string[]} icons - Icon classes which are need to add to the span element which is going to created.
     * Span element acts as icon or button element for input.
     * @param {HTMLElement} container - The container on which created span element is going to append.
     * @param {HTMLElement} input - The inputElement on which created span element is going to prepend.
     */
    /* eslint-disable @typescript-eslint/indent */
    function addIcon(position, icons, container, input, internalCreate) {
        /* eslint-enable @typescript-eslint/indent */
        var result = typeof (icons) === 'string' ? icons.split(',')
            : icons;
        if (position.toLowerCase() === 'append') {
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var icon = result_1[_i];
                appendSpan(icon, container, internalCreate);
            }
        }
        else {
            for (var _a = 0, result_2 = result; _a < result_2.length; _a++) {
                var icon = result_2[_a];
                prependSpan(icon, container, input, internalCreate);
            }
        }
    }
    Input.addIcon = addIcon;
    /**
     * Creates a new span element with the given icons added and prepend it in input element.
     * ```
     * E.g : Input.prependSpan('e-icon-spin', inputObj.container, inputElement);
     * ```
     *
     * @param {string} iconClass - Icon classes which are need to add to the span element which is going to created.
     * Span element acts as icon or button element for input.
     * @param {HTMLElement} container - The container on which created span element is going to append.
     * @param {HTMLElement} inputElement - The inputElement on which created span element is going to prepend.
     */
    /* eslint-disable @typescript-eslint/indent */
    function prependSpan(iconClass, container, inputElement, internalCreateElement) {
        /* eslint-enable @typescript-eslint/indent */
        var makeElement = !isNullOrUndefined(internalCreateElement) ? internalCreateElement : createElement;
        var button = createIconEle(iconClass, makeElement);
        container.classList.add('e-float-icon-left');
        var innerWrapper = container.querySelector('.e-input-in-wrap');
        if (isNullOrUndefined(innerWrapper)) {
            innerWrapper = makeElement('span', { className: 'e-input-in-wrap' });
            inputElement.parentNode.insertBefore(innerWrapper, inputElement);
            var result = container.querySelectorAll(inputElement.tagName + ' ~ *');
            innerWrapper.appendChild(inputElement);
            for (var i = 0; i < result.length; i++) {
                innerWrapper.appendChild(result[i]);
            }
        }
        innerWrapper.parentNode.insertBefore(button, innerWrapper);
        if (!container.classList.contains(CLASSNAMES.INPUTGROUP)) {
            container.classList.add(CLASSNAMES.INPUTGROUP);
        }
        _internalRipple(true, container, button);
        return button;
    }
    Input.prependSpan = prependSpan;
    /**
     * Creates a new span element with the given icons added and append it in container element.
     * ```
     * E.g : Input.appendSpan('e-icon-spin', inputObj.container);
     * ```
     *
     * @param {string} iconClass - Icon classes which are need to add to the span element which is going to created.
     * Span element acts as icon or button element for input.
     * @param {HTMLElement} container - The container on which created span element is going to append.
     */
    function appendSpan(iconClass, container, internalCreateElement) {
        var makeElement = !isNullOrUndefined(internalCreateElement) ? internalCreateElement : createElement;
        var button = createIconEle(iconClass, makeElement);
        if (!container.classList.contains(CLASSNAMES.INPUTGROUP)) {
            container.classList.add(CLASSNAMES.INPUTGROUP);
        }
        var wrap = (container.classList.contains('e-float-icon-left')) ? container.querySelector('.e-input-in-wrap') :
            container;
        wrap.appendChild(button);
        _internalRipple(true, container, button);
        return button;
    }
    Input.appendSpan = appendSpan;
    function validateInputType(containerElement, input) {
        if (input.type === 'hidden') {
            containerElement.classList.add('e-hidden');
        }
        else if (containerElement.classList.contains('e-hidden')) {
            containerElement.classList.remove('e-hidden');
        }
    }
    Input.validateInputType = validateInputType;
})(Input || (Input = {}));
/* eslint-enable valid-jsdoc, jsdoc/require-jsdoc, jsdoc/require-returns, jsdoc/require-param */
