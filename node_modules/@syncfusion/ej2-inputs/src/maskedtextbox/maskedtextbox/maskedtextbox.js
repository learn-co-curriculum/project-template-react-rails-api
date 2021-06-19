var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Event, Property, NotifyPropertyChanges } from '@syncfusion/ej2-base';
import { isNullOrUndefined, formatUnit, getValue, setValue, addClass, detach } from '@syncfusion/ej2-base';
import { removeClass, Browser, closest, isBlazor } from '@syncfusion/ej2-base';
import { Input } from '../../input/input';
import { regularExpressions, createMask, applyMask, wireEvents, unwireEvents, unstrippedValue, strippedValue } from '../base/index';
import { setMaskValue, setElementValue, bindClearEvent } from '../base/index';
var ROOT = 'e-control-wrapper e-mask';
var INPUT = 'e-input';
var COMPONENT = 'e-maskedtextbox';
var CONTROL = 'e-control';
var MASKINPUT_FOCUS = 'e-input-focus';
var wrapperAttr = ['title', 'style', 'class'];
/**
 * The MaskedTextBox allows the user to enter the valid input only based on the provided mask.
 * ```html
 * <input id="mask" type="text" />
 * ```
 * ```typescript
 * <script>
 * var maskObj = new MaskedTextBox({ mask: "(999) 9999-999" });
 * maskObj.appendTo('#mask');
 * </script>
 * ```
 */
var MaskedTextBox = /** @class */ (function (_super) {
    __extends(MaskedTextBox, _super);
    /**
     *
     * @param {MaskedTextBoxModel} options - Specifies the MaskedTextBox model.
     * @param {string | HTMLElement | HTMLInputElement} element - Specifies the element to render as component.
     * @private
     */
    function MaskedTextBox(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.initInputValue = '';
        _this.isAngular = false;
        _this.preventChange = false;
        _this.isClicked = false;
        _this.maskOptions = options;
        return _this;
    }
    /**
     * Gets the component name.
     *
     * @returns {string} Returns the component name.
     * @private
     */
    MaskedTextBox.prototype.getModuleName = function () {
        return 'maskedtextbox';
    };
    /**
     * Initializes the event handler
     *
     * @returns {void}
     * @private
     */
    MaskedTextBox.prototype.preRender = function () {
        this.promptMask = '';
        this.hiddenMask = '';
        this.escapeMaskValue = '';
        this.regExpCollec = regularExpressions;
        this.customRegExpCollec = [];
        this.undoCollec = [];
        this.redoCollec = [];
        this.changeEventArgs = {};
        this.focusEventArgs = {};
        this.blurEventArgs = {};
        this.maskKeyPress = false;
        this.isFocus = false;
        this.isInitial = false;
        this.isIosInvalid = false;
        var ejInstance = getValue('ej2_instances', this.element);
        this.cloneElement = this.element.cloneNode(true);
        removeClass([this.cloneElement], [CONTROL, COMPONENT, 'e-lib']);
        this.angularTagName = null;
        this.formElement = closest(this.element, 'form');
        if (this.element.tagName === 'EJS-MASKEDTEXTBOX') {
            this.angularTagName = this.element.tagName;
            var input = this.createElement('input');
            for (var i = 0; i < this.element.attributes.length; i++) {
                input.setAttribute(this.element.attributes[i].nodeName, this.element.attributes[i].nodeValue);
                input.innerHTML = this.element.innerHTML;
            }
            if (this.element.hasAttribute('id')) {
                this.element.removeAttribute('id');
            }
            this.element.classList.remove('e-control', 'e-maskedtextbox');
            this.element.classList.add('e-mask-container');
            this.element.appendChild(input);
            this.element = input;
            setValue('ej2_instances', ejInstance, this.element);
        }
        this.updateHTMLAttrToElement();
        this.checkHtmlAttributes(false);
        if (this.formElement) {
            this.initInputValue = this.value;
        }
    };
    /* eslint-disable valid-jsdoc, jsdoc/require-returns-description */
    /**
     * Gets the properties to be maintained in the persisted state.
     *
     * @returns {string}
     */
    MaskedTextBox.prototype.getPersistData = function () {
        var keyEntity = ['value'];
        return this.addOnPersist(keyEntity);
    };
    /* eslint-enable valid-jsdoc, jsdoc/require-returns-description */
    /**
     * Initializes the component rendering.
     *
     * @returns {void}
     * @private
     */
    MaskedTextBox.prototype.render = function () {
        var _this = this;
        if (this.element.tagName.toLowerCase() === 'input') {
            var checkBlazor = isBlazor() && this.isServerRendered;
            if (this.floatLabelType === 'Never') {
                addClass([this.element], INPUT);
            }
            this.createWrapper();
            this.updateHTMLAttrToWrapper();
            if (this.element.name === '') {
                this.element.setAttribute('name', this.element.id);
            }
            this.isInitial = true;
            if (checkBlazor && Browser.isIE === true) {
                setTimeout(function () {
                    _this.resetMaskedTextBox();
                });
            }
            else {
                this.resetMaskedTextBox();
            }
            this.isInitial = false;
            this.setMaskPlaceholder(true, false);
            this.setWidth(this.width);
            this.preEleVal = this.element.value;
            if (!Browser.isDevice && (Browser.info.version === '11.0' || Browser.info.name === 'edge')) {
                this.element.blur();
            }
            if (Browser.isDevice && Browser.isIos) {
                this.element.blur();
            }
            if (this.element.getAttribute('value') || this.value) {
                this.element.setAttribute('value', this.element.value);
            }
            this.renderComplete();
        }
    };
    MaskedTextBox.prototype.updateHTMLAttrToElement = function () {
        if (!isNullOrUndefined(this.htmlAttributes)) {
            for (var _i = 0, _a = Object.keys(this.htmlAttributes); _i < _a.length; _i++) {
                var key = _a[_i];
                if (wrapperAttr.indexOf(key) < 0) {
                    this.element.setAttribute(key, this.htmlAttributes[key]);
                }
            }
        }
    };
    MaskedTextBox.prototype.updateCssClass = function (newClass, oldClass) {
        Input.setCssClass(this.getValidClassList(newClass), [this.inputObj.container], this.getValidClassList(oldClass));
    };
    MaskedTextBox.prototype.getValidClassList = function (maskClassName) {
        var result = maskClassName;
        if (!isNullOrUndefined(maskClassName) && maskClassName !== '') {
            result = (maskClassName.replace(/\s+/g, ' ')).trim();
        }
        return result;
    };
    MaskedTextBox.prototype.updateHTMLAttrToWrapper = function () {
        if (!isNullOrUndefined(this.htmlAttributes)) {
            for (var _i = 0, _a = Object.keys(this.htmlAttributes); _i < _a.length; _i++) {
                var key = _a[_i];
                if (wrapperAttr.indexOf(key) > -1) {
                    if (key === 'class') {
                        var updatedClassValues = (this.htmlAttributes[key].replace(/\s+/g, ' ')).trim();
                        if (updatedClassValues !== '') {
                            addClass([this.inputObj.container], updatedClassValues.split(' '));
                        }
                    }
                    else if (key === 'style') {
                        var maskStyle = this.inputObj.container.getAttribute(key);
                        maskStyle = !isNullOrUndefined(maskStyle) ? (maskStyle + this.htmlAttributes[key]) :
                            this.htmlAttributes[key];
                        this.inputObj.container.setAttribute(key, maskStyle);
                    }
                    else {
                        this.inputObj.container.setAttribute(key, this.htmlAttributes[key]);
                    }
                }
            }
        }
    };
    MaskedTextBox.prototype.resetMaskedTextBox = function () {
        this.promptMask = '';
        this.hiddenMask = '';
        this.escapeMaskValue = '';
        this.customRegExpCollec = [];
        this.undoCollec = [];
        this.redoCollec = [];
        if (this.promptChar.length > 1) {
            this.promptChar = this.promptChar[0];
        }
        createMask.call(this);
        applyMask.call(this);
        if (this.mask === null || this.mask === '' && this.value !== undefined) {
            setElementValue.call(this, this.value);
        }
        var val = strippedValue.call(this, this.element);
        this.prevValue = val;
        this.value = val;
        if (!this.isInitial) {
            unwireEvents.call(this);
        }
        wireEvents.call(this);
    };
    MaskedTextBox.prototype.setMaskPlaceholder = function (setVal, dynamicPlaceholder) {
        if (dynamicPlaceholder || this.placeholder) {
            Input.setPlaceholder(this.placeholder, this.element);
            if ((this.element.value === this.promptMask && setVal && this.floatLabelType !== 'Always') ||
                this.element.value === this.promptMask && this.floatLabelType === 'Never') {
                setElementValue.call(this, '');
            }
        }
    };
    MaskedTextBox.prototype.setWidth = function (width) {
        if (!isNullOrUndefined(width)) {
            if (typeof width === 'number') {
                this.inputObj.container.style.width = formatUnit(width);
                this.element.style.width = formatUnit(width);
            }
            else if (typeof width === 'string') {
                var elementWidth = (width.match(/px|%|em/)) ? (width) : (formatUnit(width));
                this.inputObj.container.style.width = elementWidth;
                this.element.style.width = elementWidth;
            }
        }
    };
    MaskedTextBox.prototype.checkHtmlAttributes = function (isDynamic) {
        var attributes = isDynamic ? isNullOrUndefined(this.htmlAttributes) ? [] : Object.keys(this.htmlAttributes)
            : ['placeholder', 'disabled', 'value', 'readonly'];
        for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {
            var key = attributes_1[_i];
            if (!isNullOrUndefined(this.element.getAttribute(key))) {
                switch (key) {
                    case 'placeholder':
                        if ((isNullOrUndefined(this.maskOptions) || (this.maskOptions['placeholder'] === undefined)) || isDynamic) {
                            this.setProperties({ placeholder: this.element.placeholder }, !isDynamic);
                        }
                        break;
                    case 'disabled':
                        if ((isNullOrUndefined(this.maskOptions) || (this.maskOptions['enabled'] === undefined)) || isDynamic) {
                            var isEnabled = this.element.getAttribute(key) === 'disabled' || this.element.getAttribute(key) === '' ||
                                this.element.getAttribute(key) === 'true' ? false : true;
                            this.setProperties({ enabled: isEnabled }, !isDynamic);
                        }
                        break;
                    case 'value':
                        if ((isNullOrUndefined(this.maskOptions) || (this.maskOptions['value'] === undefined)) || isDynamic) {
                            this.setProperties({ value: this.element.value }, !isDynamic);
                        }
                        break;
                    case 'readonly':
                        if ((isNullOrUndefined(this.maskOptions) || (this.maskOptions['readonly'] === undefined)) || isDynamic) {
                            var isReadonly = this.element.getAttribute(key) === 'readonly' || this.element.getAttribute(key) === ''
                                || this.element.getAttribute(key) === 'true' ? true : false;
                            this.setProperties({ readonly: isReadonly }, !isDynamic);
                        }
                        break;
                }
            }
        }
    };
    MaskedTextBox.prototype.createWrapper = function () {
        var updatedCssClassValues = this.cssClass;
        if (!isNullOrUndefined(this.cssClass) && this.cssClass !== '') {
            updatedCssClassValues = this.getValidClassList(this.cssClass);
        }
        this.inputObj = Input.createInput({
            element: this.element,
            floatLabelType: this.floatLabelType,
            properties: {
                enableRtl: this.enableRtl,
                cssClass: updatedCssClassValues,
                enabled: this.enabled,
                readonly: this.readonly,
                placeholder: this.placeholder,
                showClearButton: this.showClearButton
            }
        }, this.createElement);
        this.inputObj.container.setAttribute('class', ROOT + ' ' + this.inputObj.container.getAttribute('class'));
    };
    /**
     * Calls internally if any of the property value is changed.
     *
     * @param {MaskedTextBoxModel} newProp - Returns the dynamic property value of the component.
     * @param {MaskedTextBoxModel} oldProp - Returns the previous property value of the component.
     * @returns {void}
     * @hidden
     */
    MaskedTextBox.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'value':
                    setMaskValue.call(this, this.value);
                    if (this.placeholder) {
                        this.setMaskPlaceholder(false, false);
                    }
                    break;
                case 'placeholder':
                    this.setMaskPlaceholder(true, true);
                    break;
                case 'width':
                    this.setWidth(newProp.width);
                    break;
                case 'cssClass':
                    this.updateCssClass(newProp.cssClass, oldProp.cssClass);
                    break;
                case 'enabled':
                    Input.setEnabled(newProp.enabled, this.element, this.floatLabelType, this.inputObj.container);
                    break;
                case 'readonly':
                    Input.setReadonly(newProp.readonly, this.element);
                    break;
                case 'enableRtl':
                    Input.setEnableRtl(newProp.enableRtl, [this.inputObj.container]);
                    break;
                case 'customCharacters':
                    this.customCharacters = newProp.customCharacters;
                    this.resetMaskedTextBox();
                    break;
                case 'showClearButton':
                    Input.setClearButton(newProp.showClearButton, this.element, this.inputObj, undefined, this.createElement);
                    bindClearEvent.call(this);
                    break;
                case 'floatLabelType':
                    this.floatLabelType = newProp.floatLabelType;
                    Input.removeFloating(this.inputObj);
                    Input.addFloating(this.element, this.floatLabelType, this.placeholder, this.createElement);
                    break;
                case 'htmlAttributes':
                    this.updateHTMLAttrToElement();
                    this.updateHTMLAttrToWrapper();
                    this.checkHtmlAttributes(true);
                    break;
                case 'mask':
                    {
                        var strippedValue_1 = this.value;
                        this.mask = newProp.mask;
                        this.updateValue(strippedValue_1);
                    }
                    break;
                case 'promptChar': {
                    if (newProp.promptChar.length > 1) {
                        newProp.promptChar = newProp.promptChar[0];
                    }
                    if (newProp.promptChar) {
                        this.promptChar = newProp.promptChar;
                    }
                    else {
                        this.promptChar = '_';
                    }
                    var value = this.element.value.replace(new RegExp('[' + oldProp.promptChar + ']', 'g'), this.promptChar);
                    if (this.promptMask === this.element.value) {
                        value = this.promptMask.replace(new RegExp('[' + oldProp.promptChar + ']', 'g'), this.promptChar);
                    }
                    this.promptMask = this.promptMask.replace(new RegExp('[' + oldProp.promptChar + ']', 'g'), this.promptChar);
                    this.undoCollec = this.redoCollec = [];
                    setElementValue.call(this, value);
                    break;
                }
            }
        }
        this.preventChange = this.isAngular && this.preventChange ? !this.preventChange : this.preventChange;
    };
    MaskedTextBox.prototype.updateValue = function (strippedVal) {
        this.resetMaskedTextBox();
        setMaskValue.call(this, strippedVal);
    };
    /* eslint-disable valid-jsdoc, jsdoc/require-returns-description */
    /**
     * Gets the value of the MaskedTextBox with the masked format.
     * By using `value` property, you can get the raw value of maskedtextbox without literals and prompt characters.
     *
     * @returns {string}
     */
    MaskedTextBox.prototype.getMaskedValue = function () {
        return unstrippedValue.call(this, this.element);
    };
    /* eslint-enable valid-jsdoc, jsdoc/require-returns-description */
    /**
     * Sets the focus to widget for interaction.
     *
     * @returns {void}
     */
    MaskedTextBox.prototype.focusIn = function () {
        if (document.activeElement !== this.element && this.enabled) {
            this.element.focus();
            addClass([this.inputObj.container], [MASKINPUT_FOCUS]);
        }
    };
    /**
     * Remove the focus from widget, if the widget is in focus state.
     *
     * @returns {void}
     */
    MaskedTextBox.prototype.focusOut = function () {
        if (document.activeElement === this.element && this.enabled) {
            this.element.blur();
            removeClass([this.inputObj.container], [MASKINPUT_FOCUS]);
        }
    };
    /**
     * Removes the component from the DOM and detaches all its related event handlers.
     * Also it maintains the initial input element from the DOM.
     *
     * @method destroy
     * @returns {void}
     */
    MaskedTextBox.prototype.destroy = function () {
        unwireEvents.call(this);
        var attrArray = ['aria-labelledby', 'role', 'autocomplete', 'aria-readonly',
            'autocorrect', 'aria-disabled', 'aria-placeholder', 'autocapitalize',
            'spellcheck', 'aria-autocomplete',
            'aria-live', 'aria-valuenow', 'aria-invalid'];
        for (var i = 0; i < attrArray.length; i++) {
            this.element.removeAttribute(attrArray[i]);
        }
        this.element.classList.remove('e-input');
        this.inputObj.container.insertAdjacentElement('afterend', this.element);
        detach(this.inputObj.container);
        _super.prototype.destroy.call(this);
    };
    __decorate([
        Property(null)
    ], MaskedTextBox.prototype, "cssClass", void 0);
    __decorate([
        Property(null)
    ], MaskedTextBox.prototype, "width", void 0);
    __decorate([
        Property(null)
    ], MaskedTextBox.prototype, "placeholder", void 0);
    __decorate([
        Property('Never')
    ], MaskedTextBox.prototype, "floatLabelType", void 0);
    __decorate([
        Property({})
    ], MaskedTextBox.prototype, "htmlAttributes", void 0);
    __decorate([
        Property(true)
    ], MaskedTextBox.prototype, "enabled", void 0);
    __decorate([
        Property(false)
    ], MaskedTextBox.prototype, "readonly", void 0);
    __decorate([
        Property(false)
    ], MaskedTextBox.prototype, "showClearButton", void 0);
    __decorate([
        Property(false)
    ], MaskedTextBox.prototype, "enablePersistence", void 0);
    __decorate([
        Property(null)
    ], MaskedTextBox.prototype, "mask", void 0);
    __decorate([
        Property('_')
    ], MaskedTextBox.prototype, "promptChar", void 0);
    __decorate([
        Property(null)
    ], MaskedTextBox.prototype, "value", void 0);
    __decorate([
        Property(null)
    ], MaskedTextBox.prototype, "customCharacters", void 0);
    __decorate([
        Event()
    ], MaskedTextBox.prototype, "created", void 0);
    __decorate([
        Event()
    ], MaskedTextBox.prototype, "destroyed", void 0);
    __decorate([
        Event()
    ], MaskedTextBox.prototype, "change", void 0);
    __decorate([
        Event()
    ], MaskedTextBox.prototype, "focus", void 0);
    __decorate([
        Event()
    ], MaskedTextBox.prototype, "blur", void 0);
    MaskedTextBox = __decorate([
        NotifyPropertyChanges
    ], MaskedTextBox);
    return MaskedTextBox;
}(Component));
export { MaskedTextBox };
