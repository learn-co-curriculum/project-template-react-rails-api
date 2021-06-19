/* eslint-disable @typescript-eslint/ban-types */
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
import { Collection, Event, NotifyPropertyChanges, detach, Property, EventHandler } from '@syncfusion/ej2-base';
import { addClass, getUniqueID, rippleEffect } from '@syncfusion/ej2-base';
import { attributes, Component, closest, select, SanitizeHtmlHelper } from '@syncfusion/ej2-base';
import { classList, removeClass } from '@syncfusion/ej2-base';
import { Button } from '@syncfusion/ej2-buttons';
import { Popup } from '@syncfusion/ej2-popups';
import { upDownKeyHandler } from './../common/common';
import { getModel, Item, setBlankIconStyle } from './../common/common';
var classNames = {
    DISABLED: 'e-disabled',
    FOCUS: 'e-focused',
    ICON: 'e-menu-icon',
    ITEM: 'e-item',
    POPUP: 'e-dropdown-popup',
    RTL: 'e-rtl',
    SEPARATOR: 'e-separator',
    VERTICAL: 'e-vertical'
};
/**
 * DropDownButton component is used to toggle contextual overlays for displaying list of action items.
 * It can contain both text and images.
 * ```html
 * <button id="element">DropDownButton</button>
 * ```
 * ```typescript
 * <script>
 * var dropDownButtonObj = new DropDownButton({items: [{ text: 'Action1' }, { text: 'Action2' },{ text: 'Action3' }]);
 * dropDownButtonObj.appendTo("#element");
 * </script>
 * ```
 */
var DropDownButton = /** @class */ (function (_super) {
    __extends(DropDownButton, _super);
    /**
     * Constructor for creating the widget
     *
     * @param  {DropDownButtonModel} options - Specifies dropdown button model
     * @param  {string|HTMLButtonElement} element - Specifies element
     * @hidden
     */
    function DropDownButton(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.isPopupCreated = true;
        return _this;
    }
    DropDownButton.prototype.preRender = function () {
        /** */
    };
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @returns {string} - Persist data
     */
    DropDownButton.prototype.getPersistData = function () {
        return this.addOnPersist([]);
    };
    /**
     * To open/close DropDownButton popup based on current state of the DropDownButton.
     *
     * @returns {void}
     */
    DropDownButton.prototype.toggle = function () {
        if (this.canOpen()) {
            this.openPopUp();
        }
        else {
            this.closePopup();
        }
    };
    /**
     * Initialize the Component rendering
     *
     * @returns {void}
     * @private
     */
    DropDownButton.prototype.render = function () {
        this.initialize();
        if (!this.disabled) {
            this.wireEvents();
        }
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
    DropDownButton.prototype.addItems = function (items, text) {
        var newItem;
        var idx = this.items.length;
        for (var j = 0, len = this.items.length; j < len; j++) {
            if (text === this.items[j].text) {
                idx = j;
                break;
            }
        }
        for (var i = items.length - 1; i >= 0; i--) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            newItem = new Item(this, 'items', items[i], true);
            this.items.splice(idx, 0, newItem);
        }
        if (!this.canOpen()) {
            this.createItems();
        }
    };
    /**
     * Removes the items from the menu.
     *
     * @param  { string[] } items - Specifies an array of string to remove the items.
     * @param { string } isUniqueId - Set `true` if specified items is a collection of unique id.
     * @returns {void}.
     */
    DropDownButton.prototype.removeItems = function (items, isUniqueId) {
        var refresh = false;
        for (var i = 0, len = items.length; i < len; i++) {
            for (var j = 0, len_1 = this.items.length; j < len_1; j++) {
                if (items[i] === (isUniqueId ? this.items[j].id : this.items[j].text)) {
                    this.items.splice(j, 1);
                    refresh = true;
                    break;
                }
            }
        }
        if (refresh && this.getULElement()) {
            this.createItems();
        }
    };
    DropDownButton.prototype.createPopup = function () {
        var _a;
        var div = this.createElement('div', {
            className: classNames.POPUP,
            id: this.element.id + '-popup'
        });
        document.body.appendChild(div);
        this.dropDown = new Popup(div, {
            relateTo: this.element,
            collision: { X: 'fit', Y: 'flip' },
            position: { X: 'left', Y: 'bottom' },
            targetType: 'relative',
            content: this.target ? this.getTargetElement() : '',
            enableRtl: this.enableRtl
        });
        if (this.dropDown.element.style.position === 'fixed') {
            this.dropDown.refreshPosition(this.element);
        }
        this.dropDown.hide();
        attributes(this.element, (_a = {},
            _a['aria-haspopup'] = this.items.length || this.target ? 'true' : 'false',
            _a['aria-expanded'] = 'false',
            _a['aria-owns'] = this.getPopUpElement().id,
            _a['type'] = 'button',
            _a['aria-label'] = this.element.textContent + ' dropdownbutton',
            _a));
        if (this.cssClass) {
            addClass([div], this.cssClass.split(' '));
        }
        this.isPopupCreated = true;
    };
    DropDownButton.prototype.getTargetElement = function () {
        return typeof (this.target) === 'string' ? select(this.target) : this.target;
    };
    DropDownButton.prototype.createItems = function (appendItems) {
        var items = this.items;
        var showIcon = this.hasIcon(this.items, 'iconCss');
        var span;
        var item;
        var li;
        var eventArgs;
        var ul = this.getULElement();
        if (ul) {
            ul.innerHTML = '';
        }
        else {
            ul = this.createElement('ul', {
                attrs: { 'role': 'menu', 'tabindex': '0' }
            });
        }
        for (var i = 0; i < items.length; i++) {
            item = items[i];
            var tempItem = (this.enableHtmlSanitizer) ? SanitizeHtmlHelper.sanitize(item.text) : item.text;
            li = this.createElement('li', {
                innerHTML: item.url ? '' : tempItem,
                className: item.separator ? classNames.ITEM + ' ' + classNames.SEPARATOR : classNames.ITEM,
                attrs: { 'role': 'menuItem', 'tabindex': '-1' },
                id: item.id ? item.id : getUniqueID('e-' + this.getModuleName() + '-item')
            });
            if (item.url) {
                li.appendChild(this.createAnchor(item));
                li.classList.add('e-url');
            }
            if (item.iconCss) {
                span = this.createElement('span', { className: classNames.ICON + ' ' + item.iconCss });
                if (item.url) {
                    li.childNodes[0].appendChild(span);
                }
                else {
                    li.insertBefore(span, li.childNodes[0]);
                }
            }
            else {
                if (showIcon && !item.separator) {
                    li.classList.add('e-blank-icon');
                }
            }
            if (item.disabled) {
                li.classList.add('e-disabled');
            }
            eventArgs = { item: item, element: li };
            this.trigger('beforeItemRender', eventArgs);
            ul.appendChild(li);
        }
        if (appendItems) {
            this.getPopUpElement().appendChild(ul);
        }
        if (showIcon) {
            setBlankIconStyle(this.getPopUpElement());
        }
    };
    DropDownButton.prototype.hasIcon = function (items, field) {
        for (var i = 0, len = items.length; i < len; i++) {
            if (items[i][field]) {
                return true;
            }
        }
        return false;
    };
    DropDownButton.prototype.createAnchor = function (item) {
        var tempItem = (this.enableHtmlSanitizer) ? SanitizeHtmlHelper.sanitize(item.text) : item.text;
        return this.createElement('a', { className: 'e-menu-text e-menu-url', innerHTML: tempItem, attrs: { 'href': item.url } });
    };
    DropDownButton.prototype.initialize = function () {
        this.button = new Button({
            iconCss: this.iconCss, iconPosition: this.iconPosition, cssClass: this.cssClass, content: this.content,
            disabled: this.disabled, enableRtl: this.enableRtl, enablePersistence: this.enablePersistence
        });
        this.button.createElement = this.createElement;
        this.button.appendTo(this.element);
        if (!this.element.id) {
            this.element.id = getUniqueID('e-' + this.getModuleName());
        }
        this.appendArrowSpan();
        this.setActiveElem([this.element]);
        if (this.target || !this.createPopupOnClick) {
            this.createPopup();
        }
        else {
            this.isPopupCreated = false;
        }
    };
    DropDownButton.prototype.appendArrowSpan = function () {
        this.element.appendChild(this.createElement('span', {
            className: 'e-btn-icon e-icons ' + 'e-icon-' + (this.cssClass.indexOf(classNames.VERTICAL) > -1
                ? 'bottom' : 'right') + ' e-caret'
        }));
    };
    DropDownButton.prototype.setActiveElem = function (elem) {
        this.activeElem = elem;
    };
    /**
     * Get component name.
     *
     * @returns {string} - Module Name
     * @private
     */
    DropDownButton.prototype.getModuleName = function () {
        return 'dropdown-btn';
    };
    DropDownButton.prototype.canOpen = function () {
        var val = false;
        if (this.isPopupCreated) {
            val = this.getPopUpElement().classList.contains('e-popup-close');
        }
        return val;
    };
    /**
     * Destroys the widget.
     *
     * @returns {void}
     */
    DropDownButton.prototype.destroy = function () {
        var _this = this;
        _super.prototype.destroy.call(this);
        if (this.getModuleName() === 'dropdown-btn') {
            var classList_1;
            if (this.element.querySelector('span.e-caret')) {
                detach(this.element.querySelector('span.e-caret'));
            }
            if (this.cssClass) {
                classList_1 = this.cssClass.split(' ');
            }
            this.button.destroy();
            if (classList_1) {
                removeClass([this.element], classList_1);
            }
            removeClass(this.activeElem, ['e-active']);
            var attrList = this.element.getAttribute('class') ? ['aria-haspopup', 'aria-expanded', 'aria-owns', 'type']
                : ['aria-haspopup', 'aria-expanded', 'aria-owns', 'type', 'class'];
            attrList.forEach(function (key) {
                _this.element.removeAttribute(key);
            });
            this.destroyPopup();
            this.isPopupCreated = false;
            if (!this.disabled) {
                this.unWireEvents();
            }
        }
    };
    DropDownButton.prototype.destroyPopup = function () {
        if (this.isPopupCreated) {
            this.dropDown.destroy();
            if (this.getPopUpElement()) {
                var popupEle = document.getElementById(this.getPopUpElement().id);
                if (popupEle) {
                    removeClass([popupEle], ['e-popup-open', 'e-popup-close']);
                    detach(popupEle);
                }
            }
            EventHandler.remove(this.getPopUpElement(), 'click', this.clickHandler);
            EventHandler.remove(this.getPopUpElement(), 'keydown', this.keyBoardHandler);
            if (this.isPopupCreated) {
                this.dropDown = undefined;
            }
        }
        this.isPopupCreated = false;
    };
    DropDownButton.prototype.getPopUpElement = function () {
        var val = null;
        if (this.dropDown) {
            val = this.dropDown.element;
        }
        return val;
    };
    DropDownButton.prototype.getULElement = function () {
        var val = null;
        if (this.getPopUpElement()) {
            val = this.getPopUpElement().children[0];
        }
        return val;
    };
    DropDownButton.prototype.wireEvents = function () {
        this.delegateMousedownHandler = this.mousedownHandler.bind(this);
        EventHandler.add(document, 'mousedown touchstart', this.delegateMousedownHandler, this);
        EventHandler.add(this.element, 'click', this.clickHandler, this);
        EventHandler.add(this.element, 'keydown', this.keyBoardHandler, this);
    };
    DropDownButton.prototype.popupWireEvents = function () {
        var popupElement = this.getPopUpElement();
        EventHandler.add(popupElement, 'click', this.clickHandler, this);
        EventHandler.add(popupElement, 'keydown', this.keyBoardHandler, this);
        this.rippleFn = rippleEffect(popupElement, { selector: '.' + classNames.ITEM });
    };
    /**
     * Handles the keyboard interactions.
     *
     * @param {KeyboardEventArgs} e - Specifies keyboard event args.
     * @returns {void}
     * @hidden
     */
    DropDownButton.prototype.keyBoardHandler = function (e) {
        if (e.target === this.element && (e.keyCode === 9 || (!e.altKey && e.keyCode === 40) || e.keyCode === 38)) {
            return;
        }
        switch (e.keyCode) {
            case 38:
            case 40:
                if (e.altKey && (e.keyCode === 38 || e.keyCode === 40)) {
                    this.keyEventHandler(e);
                }
                else {
                    this.upDownKeyHandler(e);
                }
                break;
            case 9:
            case 13:
            case 27:
            case 32:
                this.keyEventHandler(e);
                break;
        }
    };
    DropDownButton.prototype.upDownKeyHandler = function (e) {
        if (this.target && (e.keyCode === 38 || e.keyCode === 40)) {
            return;
        }
        e.preventDefault();
        upDownKeyHandler(this.getULElement(), e.keyCode);
    };
    DropDownButton.prototype.keyEventHandler = function (e) {
        if (this.target && (e.keyCode === 13 || e.keyCode === 9)) {
            return;
        }
        if (e.keyCode !== 9) {
            e.preventDefault();
        }
        if (e.keyCode === 27 || e.keyCode === 38 || e.keyCode === 9) {
            if (!this.canOpen()) {
                this.closePopup(e, this.element);
            }
        }
        else {
            this.clickHandler(e);
        }
    };
    DropDownButton.prototype.getLI = function (elem) {
        return elem.tagName === 'LI' ? elem : closest(elem, 'li');
    };
    DropDownButton.prototype.mousedownHandler = function (e) {
        var trgt = e.target;
        if (this.dropDown && !this.canOpen() && !(closest(trgt, '[id="' + this.getPopUpElement().id + '"]')
            || closest(trgt, '[id="' + this.element.id + '"]'))) {
            this.closePopup(e);
        }
    };
    DropDownButton.prototype.clickHandler = function (e) {
        var trgt = e.target;
        if (closest(trgt, '[id="' + this.element.id + '"]')) {
            if (!this.createPopupOnClick || this.target) {
                if (this.getPopUpElement().classList.contains('e-popup-close')) {
                    this.openPopUp(e);
                }
                else {
                    this.closePopup(e);
                }
            }
            else if (this.isPopupCreated) {
                this.closePopup(e, this.activeElem[0]);
            }
            else {
                this.createPopup();
                this.openPopUp(e);
            }
        }
        else {
            if (closest(trgt, '[id="' + this.getPopUpElement().id + '"]')) {
                var eventArgs = void 0;
                var liIdx = void 0;
                var item = void 0;
                var li = this.getLI(trgt);
                if (li) {
                    liIdx = Array.prototype.indexOf.call(this.getULElement().children, li);
                    item = this.items[liIdx];
                    if (item) {
                        eventArgs = { element: li, item: item };
                        this.trigger('select', eventArgs);
                    }
                    this.closePopup(e, this.activeElem[0]);
                }
            }
        }
    };
    DropDownButton.prototype.openPopUp = function (e) {
        var _this = this;
        if (e === void 0) { e = null; }
        if (!this.target) {
            this.createItems(true);
        }
        var ul = this.getULElement();
        this.popupWireEvents();
        var beforeOpenArgs = { element: ul, items: this.items, event: e, cancel: false };
        this.trigger('beforeOpen', beforeOpenArgs, function (observedArgs) {
            if (!observedArgs.cancel) {
                var ul_1 = _this.getULElement();
                _this.dropDown.show(null, _this.element);
                addClass([_this.element], 'e-active');
                _this.element.setAttribute('aria-expanded', 'true');
                ul_1.focus();
                var openArgs = { element: ul_1, items: _this.items };
                _this.trigger('open', openArgs);
            }
        });
    };
    DropDownButton.prototype.closePopup = function (e, focusEle) {
        var _this = this;
        if (e === void 0) { e = null; }
        var ul = this.getULElement();
        var beforeCloseArgs = { element: ul, items: this.items, event: e, cancel: false };
        this.trigger('beforeClose', beforeCloseArgs, function (observedArgs) {
            if (!observedArgs.cancel) {
                var ul_2 = _this.getULElement();
                var selectedLi = ul_2.querySelector('.e-selected');
                if (selectedLi) {
                    selectedLi.classList.remove('e-selected');
                }
                _this.dropDown.hide();
                removeClass(_this.activeElem, 'e-active');
                _this.element.setAttribute('aria-expanded', 'false');
                if (focusEle) {
                    focusEle.focus();
                }
                var closeArgs = { element: ul_2, items: _this.items };
                _this.trigger('close', closeArgs);
                if (!_this.target && ul_2) {
                    detach(ul_2);
                }
                if (!_this.target) {
                    if (_this.createPopupOnClick) {
                        _this.destroyPopup();
                    }
                }
                if (_this.target) {
                    _this.isPopupCreated = _this.createPopupOnClick ? false : true;
                }
            }
        });
    };
    DropDownButton.prototype.unWireEvents = function () {
        EventHandler.remove(document, 'mousedown touchstart', this.delegateMousedownHandler);
        EventHandler.remove(this.element, 'click', this.clickHandler);
        EventHandler.remove(this.element, 'keydown', this.keyBoardHandler);
        if (this.isPopupCreated) {
            EventHandler.remove(this.getPopUpElement(), 'click', this.clickHandler);
            EventHandler.remove(this.getPopUpElement(), 'keydown', this.keyBoardHandler);
        }
    };
    /**
     * Called internally if any of the property value changed.
     *
     * @param  {DropDownButtonModel} newProp - Specifies new properties
     * @param  {DropDownButtonModel} oldProp - Specifies old properties
     * @returns {void}
     * @private
     */
    DropDownButton.prototype.onPropertyChanged = function (newProp, oldProp) {
        var btnModel = ['content', 'cssClass', 'iconCss', 'iconPosition', 'disabled', 'enableRtl'];
        this.button.setProperties(getModel(newProp, btnModel));
        var popupElement;
        if (this.isPopupCreated) {
            popupElement = this.getPopUpElement();
            this.dropDown.setProperties(getModel(newProp, ['enableRtl']));
        }
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'content':
                    if (!this.element.querySelector('span.e-caret')) {
                        this.appendArrowSpan();
                    }
                    break;
                case 'disabled':
                    if (newProp.disabled) {
                        this.unWireEvents();
                        if (this.isPopupCreated && !this.canOpen()) {
                            this.closePopup();
                        }
                    }
                    else {
                        this.wireEvents();
                    }
                    break;
                case 'cssClass':
                    if (newProp.cssClass.indexOf(classNames.VERTICAL) > -1) {
                        var arrowSpan = this.element.querySelector('span.e-caret');
                        classList(arrowSpan, ['e-icon-bottom'], ['e-icon-right']);
                    }
                    if (this.isPopupCreated) {
                        if (oldProp.cssClass) {
                            removeClass([popupElement], oldProp.cssClass.split(' '));
                        }
                        if (newProp.cssClass) {
                            addClass([popupElement], newProp.cssClass.split(' '));
                        }
                    }
                    break;
                case 'target':
                    this.dropDown.content = this.getTargetElement();
                    this.dropDown.dataBind();
                    break;
                case 'items':
                    if (this.isPopupCreated && this.getULElement()) {
                        this.createItems();
                    }
                    break;
                case 'createPopupOnClick':
                    if (newProp.createPopupOnClick) {
                        this.destroyPopup();
                    }
                    else {
                        this.createPopup();
                    }
                    break;
            }
        }
    };
    /**
     * Sets the focus to DropDownButton
     * its native method
     *
     * @public
     * @returns {void}
     */
    DropDownButton.prototype.focusIn = function () {
        this.element.focus();
    };
    __decorate([
        Property('')
    ], DropDownButton.prototype, "content", void 0);
    __decorate([
        Property('')
    ], DropDownButton.prototype, "cssClass", void 0);
    __decorate([
        Property(false)
    ], DropDownButton.prototype, "disabled", void 0);
    __decorate([
        Property('')
    ], DropDownButton.prototype, "iconCss", void 0);
    __decorate([
        Property('Left')
    ], DropDownButton.prototype, "iconPosition", void 0);
    __decorate([
        Property(false)
    ], DropDownButton.prototype, "enableHtmlSanitizer", void 0);
    __decorate([
        Collection([], Item)
    ], DropDownButton.prototype, "items", void 0);
    __decorate([
        Property(false)
    ], DropDownButton.prototype, "createPopupOnClick", void 0);
    __decorate([
        Property('')
    ], DropDownButton.prototype, "target", void 0);
    __decorate([
        Event()
    ], DropDownButton.prototype, "beforeItemRender", void 0);
    __decorate([
        Event()
    ], DropDownButton.prototype, "beforeOpen", void 0);
    __decorate([
        Event()
    ], DropDownButton.prototype, "beforeClose", void 0);
    __decorate([
        Event()
    ], DropDownButton.prototype, "close", void 0);
    __decorate([
        Event()
    ], DropDownButton.prototype, "open", void 0);
    __decorate([
        Event()
    ], DropDownButton.prototype, "select", void 0);
    __decorate([
        Event()
    ], DropDownButton.prototype, "created", void 0);
    DropDownButton = __decorate([
        NotifyPropertyChanges
    ], DropDownButton);
    return DropDownButton;
}(Component));
export { DropDownButton };
