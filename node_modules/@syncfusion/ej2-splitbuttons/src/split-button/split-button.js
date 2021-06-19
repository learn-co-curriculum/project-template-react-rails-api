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
/* eslint-disable @typescript-eslint/ban-types */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path='../drop-down-button/drop-down-button-model.d.ts'/>
import { Event, remove, addClass, removeClass, detach, getValue, setValue } from '@syncfusion/ej2-base';
import { EventHandler, Collection, NotifyPropertyChanges, Property } from '@syncfusion/ej2-base';
import { attributes, getUniqueID, getInstance, KeyboardEvents } from '@syncfusion/ej2-base';
import { Button } from '@syncfusion/ej2-buttons';
import { getModel, Item } from './../common/common';
import { DropDownButton } from '../drop-down-button/drop-down-button';
var RTL = 'e-rtl';
var TAGNAME = 'EJS-SPLITBUTTON';
/**
 * SplitButton component has primary and secondary button. Primary button is used to select
 * default action and secondary button is used to toggle contextual overlays for displaying list of
 * action items. It can contain both text and images.
 * ```html
 * <button id="element"></button>
 * ```
 * ```typescript
 * <script>
 * var splitBtnObj = new SplitButton({content: 'SplitButton'});
 * splitBtnObj.appendTo("#element");
 * </script>
 * ```
 */
var SplitButton = /** @class */ (function (_super) {
    __extends(SplitButton, _super);
    /**
     * Constructor for creating the widget
     *
     * @param  {SplitButtonModel} options - Specifies the splitbutton model
     * @param  {string|HTMLButtonElement} element - Specifies the element
     * @hidden
     */
    function SplitButton(options, element) {
        return _super.call(this, options, element) || this;
    }
    /**
     * Initialize Angular support.
     *
     * @private
     * @returns {void}
     */
    SplitButton.prototype.preRender = function () {
        var ele = this.element;
        if (ele.tagName === TAGNAME) {
            var ejInstance = getValue('ej2_instances', ele);
            var btn = this.createElement('button', { attrs: { 'type': 'button' } });
            var wrapper = this.createElement(TAGNAME, { className: 'e-' + this.getModuleName() + '-wrapper' });
            for (var idx = 0, len = ele.attributes.length; idx < len; idx++) {
                btn.setAttribute(ele.attributes[idx].nodeName, ele.attributes[idx].nodeValue);
            }
            ele.parentNode.insertBefore(wrapper, ele);
            detach(ele);
            ele = btn;
            wrapper.appendChild(ele);
            setValue('ej2_instances', ejInstance, ele);
            this.wrapper = wrapper;
            this.element = ele;
        }
        if (!this.element.id) {
            this.element.id = getUniqueID('e-' + this.getModuleName());
        }
    };
    /**
     * Initialize the Component rendering
     *
     * @returns {void}
     * @private
     */
    SplitButton.prototype.render = function () {
        this.initWrapper();
        this.createPrimaryButton();
        this.renderControl();
    };
    SplitButton.prototype.renderControl = function () {
        this.createSecondaryButton();
        this.setActiveElem([this.element, this.secondaryBtnObj.element]);
        this.setAria();
        this.wireEvents();
        this.renderComplete();
    };
    /**
     * Adds a new item to the menu. By default, new item appends to the list as the last item,
     * but you can insert based on the text parameter.
     *
     * @param  { ItemModel[] } items - Specifies an array of JSON data.
     * @param { string } text - Specifies the text to insert the newly added item in the menu.
     * @returns {void}.
     */
    SplitButton.prototype.addItems = function (items, text) {
        _super.prototype.addItems.call(this, items, text);
        this.secondaryBtnObj.items = this.items;
    };
    /**
     * Removes the items from the menu.
     *
     * @param  { string[] } items - Specifies an array of string to remove the items.
     * @param { string } isUniqueId - Set `true` if specified items is a collection of unique id.
     * @returns {void}.
     */
    SplitButton.prototype.removeItems = function (items, isUniqueId) {
        _super.prototype.removeItems.call(this, items, isUniqueId);
        this.secondaryBtnObj.items = this.items;
    };
    SplitButton.prototype.initWrapper = function () {
        if (!this.wrapper) {
            this.wrapper = this.createElement('div', { className: 'e-' + this.getModuleName() + '-wrapper' });
            this.element.parentNode.insertBefore(this.wrapper, this.element);
        }
        this.element.classList.remove('e-' + this.getModuleName());
        if (this.enableRtl) {
            this.wrapper.classList.add(RTL);
        }
        if (this.cssClass) {
            addClass([this.wrapper], this.cssClass.split(' '));
        }
    };
    SplitButton.prototype.createPrimaryButton = function () {
        var btnModel = {
            cssClass: this.cssClass,
            enableRtl: this.enableRtl,
            iconCss: this.iconCss,
            iconPosition: this.iconPosition,
            content: this.content,
            disabled: this.disabled
        };
        this.primaryBtnObj = new Button(btnModel);
        this.primaryBtnObj.createElement = this.createElement;
        this.primaryBtnObj.appendTo(this.element);
        this.element.classList.add('e-' + this.getModuleName());
        this.element.type = 'button';
        this.wrapper.appendChild(this.element);
    };
    SplitButton.prototype.createSecondaryButton = function () {
        var _this = this;
        var btnElem = this.createElement('button', {
            className: 'e-icon-btn',
            attrs: { 'tabindex': '-1' },
            id: this.element.id + '_dropdownbtn'
        });
        this.wrapper.appendChild(btnElem);
        var dropDownBtnModel = {
            cssClass: this.cssClass,
            disabled: this.disabled,
            enableRtl: this.enableRtl,
            items: this.items,
            target: this.target,
            createPopupOnClick: this.createPopupOnClick
        };
        dropDownBtnModel.beforeItemRender = function (args) {
            if (_this.createPopupOnClick) {
                _this.secondaryBtnObj.dropDown.relateTo = _this.wrapper;
                _this.dropDown = _this.secondaryBtnObj.dropDown;
            }
            _this.trigger('beforeItemRender', args);
        };
        dropDownBtnModel.open = function (args) {
            _this.trigger('open', args);
        };
        dropDownBtnModel.close = function (args) {
            _this.trigger('close', args);
        };
        dropDownBtnModel.select = function (args) {
            _this.trigger('select', args);
        };
        dropDownBtnModel.beforeOpen = function (args) {
            var callBackPromise = new Deferred();
            _this.trigger('beforeOpen', args, function (observedArgs) {
                callBackPromise.resolve(observedArgs);
            });
            return callBackPromise;
        };
        dropDownBtnModel.beforeClose = function (args) {
            var callBackPromise = new Deferred();
            _this.trigger('beforeClose', args, function (observedArgs) {
                callBackPromise.resolve(observedArgs);
            });
            return callBackPromise;
        };
        this.secondaryBtnObj = new DropDownButton(dropDownBtnModel);
        this.secondaryBtnObj.createElement = this.createElement;
        this.secondaryBtnObj.appendTo(btnElem);
        if (!this.createPopupOnClick) {
            this.secondaryBtnObj.dropDown.relateTo = this.wrapper;
            this.dropDown = this.secondaryBtnObj.dropDown;
        }
        this.secondaryBtnObj.activeElem = [this.element, this.secondaryBtnObj.element];
        this.secondaryBtnObj.element.querySelector('.e-btn-icon').classList.remove('e-icon-right');
    };
    SplitButton.prototype.setAria = function () {
        attributes(this.element, {
            'aria-expanded': 'false', 'aria-haspopup': 'true',
            'aria-label': this.element.textContent + ' splitbutton', 'aria-owns': this.element.id + '_dropdownbtn-popup'
        });
    };
    /**
     * Get component name.
     *
     * @returns {string} - Module Name
     * @private
     */
    SplitButton.prototype.getModuleName = function () {
        return 'split-btn';
    };
    /**
     * To open/close SplitButton popup based on current state of the SplitButton.
     *
     * @returns {void}
     */
    SplitButton.prototype.toggle = function () {
        this.secondaryBtnObj.toggle();
    };
    SplitButton.prototype.destroy = function () {
        var _this = this;
        var classList = [RTL];
        if (this.cssClass) {
            classList = classList.concat(this.cssClass.split(' '));
        }
        if (this.element) {
            var element = document.getElementById(this.element.id);
            if (element && element.parentElement === this.wrapper) {
                if (this.wrapper.tagName === TAGNAME) {
                    this.wrapper.innerHTML = '';
                    removeClass([this.wrapper], ['e-rtl', 'e-' + this.getModuleName() + '-wrapper']);
                    removeClass([this.wrapper], this.cssClass.split(' '));
                }
                else {
                    removeClass([this.element], classList);
                    ['aria-label', 'aria-haspopup', 'aria-expanded', 'aria-owns', 'type'].forEach(function (key) {
                        _this.element.removeAttribute(key);
                    });
                    this.wrapper.parentNode.insertBefore(this.element, this.wrapper);
                    remove(this.wrapper);
                }
                this.unWireEvents();
            }
        }
        this.primaryBtnObj.destroy();
        this.secondaryBtnObj.destroy();
        _super.prototype.destroy.call(this);
        if (!this.element.getAttribute('class')) {
            this.element.removeAttribute('class');
        }
    };
    SplitButton.prototype.wireEvents = function () {
        EventHandler.add(this.element, 'click', this.primaryBtnClickHandler, this);
        new KeyboardEvents(this.element, {
            keyAction: this.btnKeyBoardHandler.bind(this),
            keyConfigs: {
                altdownarrow: 'alt+downarrow'
            }
        });
    };
    SplitButton.prototype.unWireEvents = function () {
        EventHandler.remove(this.element, 'click', this.primaryBtnClickHandler);
        getInstance(this.element, KeyboardEvents).destroy();
    };
    SplitButton.prototype.primaryBtnClickHandler = function () {
        this.trigger('click', { element: this.element });
    };
    SplitButton.prototype.btnKeyBoardHandler = function (e) {
        switch (e.action) {
            case 'altdownarrow':
                this.clickHandler(e);
                break;
        }
    };
    /**
     * Called internally if any of the property value changed.
     *
     * @param  {SplitButtonModel} newProp - Specifies new properties
     * @param  {SplitButtonModel} oldProp - Specifies old properties
     * @returns {void}
     */
    SplitButton.prototype.onPropertyChanged = function (newProp, oldProp) {
        var model = ['content', 'iconCss', 'iconPosition', 'cssClass', 'disabled', 'enableRtl'];
        this.primaryBtnObj.setProperties(getModel(newProp, model));
        model = ['beforeOpen', 'beforeItemRender', 'select', 'open',
            'close', 'cssClass', 'disabled', 'enableRtl', 'createPopupOnClick'];
        if (Object.keys(newProp).indexOf('items') > -1) {
            this.secondaryBtnObj.items = newProp.items;
            this.secondaryBtnObj.dataBind();
        }
        this.secondaryBtnObj.setProperties(getModel(newProp, model));
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'cssClass':
                    if (oldProp.cssClass) {
                        removeClass([this.wrapper], oldProp.cssClass.split(' '));
                    }
                    addClass([this.wrapper], newProp.cssClass.split(' '));
                    break;
                case 'enableRtl':
                    if (newProp.enableRtl) {
                        addClass([this.wrapper], RTL);
                    }
                    else {
                        removeClass([this.wrapper], RTL);
                    }
                    break;
            }
        }
    };
    /**
     * Sets the focus to SplitButton
     * its native method
     *
     * @public
     * @returns {void}
     */
    SplitButton.prototype.focusIn = function () {
        this.element.focus();
    };
    __decorate([
        Property('')
    ], SplitButton.prototype, "content", void 0);
    __decorate([
        Property('')
    ], SplitButton.prototype, "cssClass", void 0);
    __decorate([
        Property(false)
    ], SplitButton.prototype, "disabled", void 0);
    __decorate([
        Property('')
    ], SplitButton.prototype, "iconCss", void 0);
    __decorate([
        Property('Left')
    ], SplitButton.prototype, "iconPosition", void 0);
    __decorate([
        Property(false)
    ], SplitButton.prototype, "createPopupOnClick", void 0);
    __decorate([
        Collection([], Item)
    ], SplitButton.prototype, "items", void 0);
    __decorate([
        Property('')
    ], SplitButton.prototype, "target", void 0);
    __decorate([
        Event()
    ], SplitButton.prototype, "beforeItemRender", void 0);
    __decorate([
        Event()
    ], SplitButton.prototype, "beforeOpen", void 0);
    __decorate([
        Event()
    ], SplitButton.prototype, "beforeClose", void 0);
    __decorate([
        Event()
    ], SplitButton.prototype, "click", void 0);
    __decorate([
        Event()
    ], SplitButton.prototype, "close", void 0);
    __decorate([
        Event()
    ], SplitButton.prototype, "open", void 0);
    __decorate([
        Event()
    ], SplitButton.prototype, "select", void 0);
    __decorate([
        Event()
    ], SplitButton.prototype, "created", void 0);
    SplitButton = __decorate([
        NotifyPropertyChanges
    ], SplitButton);
    return SplitButton;
}(DropDownButton));
export { SplitButton };
/**
 * Deferred is used to handle asynchronous operation.
 */
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        /**
         * Promise is an object that represents a value that may not be available yet, but will be resolved at some point in the future.
         */
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
        /**
         * Defines the callback function triggers when the Deferred object is rejected.
         */
        this.catch = this.promise.catch.bind(this.promise);
        /**
         * Defines the callback function triggers when the Deferred object is resolved.
         */
        this.then = this.promise.then.bind(this.promise);
    }
    return Deferred;
}());
export { Deferred };
