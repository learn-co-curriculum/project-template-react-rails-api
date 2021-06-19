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
import { Input, TextBox } from '@syncfusion/ej2-inputs';
import { createCheckBox } from '@syncfusion/ej2-buttons';
import { NotifyPropertyChanges, Property, Event } from '@syncfusion/ej2-base';
import { Component, EventHandler, attributes, formatUnit, ChildProperty, remove, L10n, extend } from '@syncfusion/ej2-base';
import { addClass, removeClass, detach, prepend, Complex, closest, setValue, getValue, compile, append } from '@syncfusion/ej2-base';
import { select, selectAll, isNullOrUndefined as isNOU, matches, Browser, KeyboardEvents } from '@syncfusion/ej2-base';
import { DataManager, DataUtil } from '@syncfusion/ej2-data';
import { Popup } from '@syncfusion/ej2-popups';
import { updateBlazorTemplate, resetBlazorTemplate, isBlazor } from '@syncfusion/ej2-base';
import { TreeView } from '@syncfusion/ej2-navigations';
var RTL = 'e-rtl';
var DROPDOWNTREE = 'e-ddt';
var HIDDENELEMENT = 'e-ddt-hidden';
var DROPDOWNICON = 'e-input-group-icon e-ddt-icon e-icons';
var SHOW_CHIP = 'e-show-chip';
var SHOW_CLEAR = 'e-show-clear';
var SHOW_DD_ICON = 'e-show-dd-icon';
var CHIP_INPUT = 'e-chip-input';
var INPUTFOCUS = 'e-input-focus';
var INPUTGROUP = 'e-input-group';
var ICONANIMATION = 'e-icon-anim';
var CLOSEICON_CLASS = 'e-clear-icon e-icons';
var CHIP_WRAPPER = 'e-chips-wrapper';
var CHIP_COLLECTION = 'e-chips-collection';
var CHIP = 'e-chips';
var CHIP_CONTENT = 'e-chipcontent';
var CHIP_CLOSE = 'e-chips-close';
var HIDEICON = 'e-icon-hide';
var POPUP_CLASS = 'e-ddt e-popup';
var PARENTITEM = 'e-list-parent';
var CONTENT = 'e-popup-content';
var DROPDOWN = 'e-dropdown';
var DISABLED = 'e-disabled';
var ICONS = 'e-icons';
var CHECKALLPARENT = 'e-selectall-parent';
var CHECKALLHIDE = 'e-hide-selectall';
var BIGGER = 'e-bigger';
var SMALL = 'e-small';
var ALLTEXT = 'e-all-text';
var CHECKBOXFRAME = 'e-frame';
var CHECK = 'e-check';
var CHECKBOXWRAP = 'e-checkbox-wrapper';
var FILTERWRAP = 'e-filter-wrap';
var DDTICON = 'e-ddt-icon';
var FOOTER = 'e-ddt-footer';
var HEADER = 'e-ddt-header';
var NODATACONTAINER = 'e-ddt-nodata';
var NODATA = 'e-no-data';
var HEADERTEMPLATE = 'HeaderTemplate';
var FOOTERTEMPLATE = 'FooterTemplate';
var NORECORDSTEMPLATE = 'NoRecordsTemplate';
var ACTIONFAILURETEMPLATE = 'ActionFailureTemplate';
var REMAIN_WRAPPER = 'e-remain';
var OVERFLOW_VIEW = 'e-overflow';
var SHOW_TEXT = 'e-show-text';
var TOTAL_COUNT_WRAPPER = 'e-total-count';
var REMAIN_COUNT = 'e-wrap-count';
var Fields = /** @class */ (function (_super) {
    __extends(Fields, _super);
    function Fields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property('child')
    ], Fields.prototype, "child", void 0);
    __decorate([
        Property([])
    ], Fields.prototype, "dataSource", void 0);
    __decorate([
        Property('expanded')
    ], Fields.prototype, "expanded", void 0);
    __decorate([
        Property('hasChildren')
    ], Fields.prototype, "hasChildren", void 0);
    __decorate([
        Property('htmlAttributes')
    ], Fields.prototype, "htmlAttributes", void 0);
    __decorate([
        Property('iconCss')
    ], Fields.prototype, "iconCss", void 0);
    __decorate([
        Property('imageUrl')
    ], Fields.prototype, "imageUrl", void 0);
    __decorate([
        Property('parentValue')
    ], Fields.prototype, "parentValue", void 0);
    __decorate([
        Property(null)
    ], Fields.prototype, "query", void 0);
    __decorate([
        Property('selected')
    ], Fields.prototype, "selected", void 0);
    __decorate([
        Property(null)
    ], Fields.prototype, "tableName", void 0);
    __decorate([
        Property('text')
    ], Fields.prototype, "text", void 0);
    __decorate([
        Property('tooltip')
    ], Fields.prototype, "tooltip", void 0);
    __decorate([
        Property('value')
    ], Fields.prototype, "value", void 0);
    return Fields;
}(ChildProperty));
export { Fields };
var TreeSettings = /** @class */ (function (_super) {
    __extends(TreeSettings, _super);
    function TreeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(false)
    ], TreeSettings.prototype, "autoCheck", void 0);
    __decorate([
        Property('Auto')
    ], TreeSettings.prototype, "expandOn", void 0);
    __decorate([
        Property(false)
    ], TreeSettings.prototype, "loadOnDemand", void 0);
    return TreeSettings;
}(ChildProperty));
export { TreeSettings };
/**
 * The Dropdown Tree control allows you to select single or multiple values from hierarchical data in a tree-like structure.
 * It has several out-of-the-box features, such as data binding, check boxes, templates, filter,
 * UI customization, accessibility, and preselected values.
 * ```html
 *  <input type="text" id="tree"></input>
 * ```
 * ```typescript
 *  let ddtObj: DropDownTree = new DropDownTree();
 *  ddtObj.appendTo("#tree");
 * ```
 */
var DropDownTree = /** @class */ (function (_super) {
    __extends(DropDownTree, _super);
    function DropDownTree(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.filterTimer = null;
        _this.isFilteredData = false;
        _this.isFilterRestore = false;
        // eslint-disable-next-line
        _this.selectedData = [];
        _this.filterDelayTime = 300;
        return _this;
    }
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @returns {string}
     * @hidden
     */
    DropDownTree.prototype.getPersistData = function () {
        var keyEntity = ['value'];
        return this.addOnPersist(keyEntity);
    };
    DropDownTree.prototype.getLocaleName = function () {
        return 'drop-down-tree';
    };
    /**
     * Initialize the event handler.
     *
     * @returns {void}
     * @private
     */
    DropDownTree.prototype.preRender = function () {
        this.inputFocus = false;
        this.isPopupOpen = false;
        this.isFirstRender = true;
        this.isInitialized = false;
        this.currentText = null;
        this.currentValue = null;
        this.oldValue = null;
        this.removeValue = false;
        this.selectedText = [];
        this.treeItems = [];
        this.dataValue = null;
        this.isNodeSelected = false;
        this.isDynamicChange = false;
        this.clearIconWidth = 0;
        this.isBlazorPlatForm = isBlazor();
        this.headerTemplateId = "" + this.element.id + HEADERTEMPLATE;
        this.footerTemplateId = "" + this.element.id + FOOTERTEMPLATE;
        this.actionFailureTemplateId = "" + this.element.id + ACTIONFAILURETEMPLATE;
        this.noRecordsTemplateId = "" + this.element.id + NORECORDSTEMPLATE;
        this.keyConfigs = {
            escape: 'escape',
            altUp: 'alt+uparrow',
            altDown: 'alt+downarrow',
            tab: 'tab',
            shiftTab: 'shift+tab',
            end: 'end',
            enter: 'enter',
            home: 'home',
            moveDown: 'downarrow',
            moveLeft: 'leftarrow',
            moveRight: 'rightarrow',
            moveUp: 'uparrow',
            ctrlDown: 'ctrl+downarrow',
            ctrlUp: 'ctrl+uparrow',
            ctrlEnter: 'ctrl+enter',
            ctrlHome: 'ctrl+home',
            ctrlEnd: 'ctrl+end',
            shiftDown: 'shift+downarrow',
            shiftUp: 'shift+uparrow',
            shiftEnter: 'shift+enter',
            shiftHome: 'shift+home',
            shiftEnd: 'shift+end',
            csDown: 'ctrl+shift+downarrow',
            csUp: 'ctrl+shift+uparrow',
            csEnter: 'ctrl+shift+enter',
            csHome: 'ctrl+shift+home',
            csEnd: 'ctrl+shift+end',
            space: 'space',
            ctrlA: 'ctrl+A'
        };
    };
    /**
     * To Initialize the control rendering
     *
     * @private
     * @returns {void}
     */
    DropDownTree.prototype.render = function () {
        this.ensureAutoCheck();
        if (this.element.tagName === 'INPUT') {
            this.inputEle = this.element;
            if (isNOU(this.inputEle.getAttribute('role'))) {
                this.inputEle.setAttribute('role', 'textbox');
            }
            if (isNOU(this.inputEle.getAttribute('type'))) {
                this.inputEle.setAttribute('type', 'text');
            }
        }
        else {
            this.inputEle = this.createElement('input', { attrs: { role: 'textbox', type: 'text' } });
            this.element.parentElement.insertBefore(this.inputEle, this.element);
        }
        this.inputObj = Input.createInput({
            element: this.inputEle,
            floatLabelType: this.floatLabelType,
            buttons: this.showDropDownIcon ? [DROPDOWNICON] : null,
            properties: {
                readonly: true,
                placeholder: this.placeholder,
                enabled: this.enabled,
                cssClass: this.cssClass,
                enableRtl: this.enableRtl
            }
        }, this.createElement);
        this.inputWrapper = this.inputObj.container;
        if (!this.inputWrapper.classList.contains(INPUTGROUP)) {
            this.inputWrapper.classList.add(INPUTGROUP);
        }
        if (this.showDropDownIcon) {
            this.inputWrapper.classList.add(SHOW_DD_ICON);
        }
        if (this.element.tagName === this.getDirective()) {
            this.element.appendChild(this.inputWrapper);
        }
        this.createHiddenElement();
        this.createClearIcon();
        this.inputWrapper.classList.add(DROPDOWNTREE);
        this.setElementWidth(this.width);
        this.setAttributes();
        this.updateDataAttribute();
        this.setHTMLAttributes();
        this.popupDiv = this.createElement('div', { className: CONTENT, attrs: { 'tabindex': '0' } });
        this.popupDiv.classList.add(DROPDOWN);
        this.tree = this.createElement('div', { id: this.element.id + '_tree' });
        this.popupDiv.appendChild(this.tree);
        document.body.appendChild(this.popupDiv);
        this.wireTreeEvents();
        this.popupDiv.style.display = 'none';
        this.renderTree();
        this.isRemoteData = this.fields.dataSource instanceof DataManager;
        if (this.allowMultiSelection || this.showCheckBox) {
            if (this.mode !== 'Delimiter') {
                this.createChip();
            }
            if (!this.wrapText) {
                this.overFlowWrapper = this.createElement('span', { className: OVERFLOW_VIEW + ' ' + HIDEICON });
                this.inputWrapper.insertBefore(this.overFlowWrapper, this.hiddenElement);
                if (this.mode !== 'Box') {
                    addClass([this.overFlowWrapper], SHOW_TEXT);
                }
            }
        }
        if (!this.isRemoteData) {
            this.setTreeValue();
            this.setTreeText();
            this.updateHiddenValue();
            this.setSelectedValue();
            if (!this.wrapText) {
                this.updateView();
            }
        }
        this.wireEvents();
        var firstUl = select('.' + PARENTITEM, this.treeObj.element);
        if (firstUl && firstUl.getAttribute('aria-multiselectable')) {
            firstUl.removeAttribute('aria-multiselectable');
        }
        this.oldValue = this.value;
        this.isInitialized = true;
        this.hasTemplate = this.itemTemplate || this.headerTemplate || this.footerTemplate || this.actionFailureTemplate
            || this.noRecordsTemplate;
        this.renderComplete();
    };
    DropDownTree.prototype.ensureAutoCheck = function () {
        if (this.allowFiltering && this.treeSettings.autoCheck) {
            this.setProperties({ treeSettings: { autoCheck: false } }, true);
        }
    };
    DropDownTree.prototype.hideCheckAll = function (flag) {
        var checkAllEle = !isNOU(this.popupEle) ? this.popupEle.querySelector('.' + CHECKALLPARENT) : null;
        if (!isNOU(checkAllEle)) {
            if (flag && !checkAllEle.classList.contains(CHECKALLHIDE)) {
                addClass([checkAllEle], CHECKALLHIDE);
            }
            else if (!flag && checkAllEle.classList.contains(CHECKALLHIDE)) {
                removeClass([checkAllEle], CHECKALLHIDE);
            }
        }
    };
    DropDownTree.prototype.renderFilter = function () {
        this.filterContainer = this.createElement('div', {
            id: this.element.id + '_filter_wrap',
            className: FILTERWRAP
        });
        var filterInput = this.createElement('input', {
            id: this.element.id + '_filter',
            attrs: { autocomplete: 'off', 'aria-label': this.filterBarPlaceholder }
        });
        this.filterContainer.appendChild(filterInput);
        prepend([this.filterContainer], this.popupEle);
        this.filterObj = new TextBox({
            value: '',
            showClearButton: true,
            placeholder: this.filterBarPlaceholder,
            input: this.filterChangeHandler.bind(this)
        });
        this.filterObj.appendTo('#' + this.element.id + '_filter');
    };
    DropDownTree.prototype.filterChangeHandler = function (args) {
        var _this = this;
        if (!isNOU(args.value)) {
            window.clearTimeout(this.filterTimer);
            this.filterTimer = window.setTimeout(function () { _this.filterHandler(args.value, args.event); }, this.filterDelayTime);
        }
    };
    DropDownTree.prototype.filterHandler = function (value, event) {
        var _this = this;
        if (!this.isFilteredData) {
            this.treeData = this.treeObj.getTreeData();
        }
        var filterFields = this.cloneFields(this.fields);
        var args = {
            cancel: false,
            preventDefaultAction: false,
            event: event,
            text: value,
            fields: filterFields
        };
        this.trigger('filtering', args, function (args) {
            if (!args.cancel) {
                var flag = false;
                var fields = void 0;
                _this.isFilteredData = true;
                if (value === '') {
                    _this.isFilteredData = false;
                    _this.isFilterRestore = true;
                    fields = _this.cloneFields(_this.fields);
                }
                else if (args.preventDefaultAction) {
                    fields = args.fields;
                }
                else {
                    if (_this.treeDataType === 1) {
                        fields = _this.selfReferencefilter(value, args.fields);
                    }
                    else {
                        if (_this.fields.dataSource instanceof DataManager) {
                            flag = true;
                        }
                        else {
                            fields = _this.nestedFilter(value, args.fields);
                        }
                    }
                }
                _this.hideCheckAll(_this.isFilteredData);
                if (flag) {
                    return;
                }
                _this.treeObj.fields = _this.getTreeFields(fields);
                _this.treeObj.dataBind();
            }
        });
    };
    DropDownTree.prototype.nestedFilter = function (value, filteredFields) {
        // eslint-disable-next-line
        var matchedDataSource = [];
        for (var i = 0; i < this.treeData.length; i++) {
            // eslint-disable-next-line
            var filteredChild = this.nestedChildFilter(value, this.treeData[i]);
            if (!isNOU(filteredChild)) {
                matchedDataSource.push(filteredChild);
            }
        }
        filteredFields.dataSource = matchedDataSource;
        return filteredFields;
    };
    // eslint-disable-next-line
    DropDownTree.prototype.nestedChildFilter = function (value, node) {
        // eslint-disable-next-line
        var children = node[this.fields.child];
        if (isNOU(children)) {
            return (this.isMatchedNode(value, node)) ? node : null;
        }
        else {
            // eslint-disable-next-line
            var matchedChildren = [];
            for (var i = 0; i < children.length; i++) {
                // eslint-disable-next-line
                var filteredChild = this.nestedChildFilter(value, children[i]);
                if (!isNOU(filteredChild)) {
                    matchedChildren.push(filteredChild);
                }
            }
            if (matchedChildren.length !== 0) {
                node[this.fields.child] = matchedChildren;
                return node;
            }
            else {
                node[this.fields.child] = null;
                return (this.isMatchedNode(value, node)) ? node : null;
            }
        }
    };
    DropDownTree.prototype.selfReferencefilter = function (value, filteredFields) {
        // eslint-disable-next-line
        var matchedData = [];
        // eslint-disable-next-line
        var matchedDataSource = [];
        for (var i = 0; i < this.treeData.length; i++) {
            if (this.isMatchedNode(value, this.treeData[i])) {
                matchedData.push(this.treeData[i]);
            }
        }
        for (var i = 0; i < matchedData.length; i++) {
            if (matchedDataSource.indexOf(matchedData[i]) === -1) {
                matchedDataSource.push(matchedData[i]);
                // eslint-disable-next-line
                var parentId = matchedData[i][this.fields.parentValue];
                while (!isNOU(parentId)) {
                    // eslint-disable-next-line
                    var parent_1 = null;
                    for (var j = 0; j < this.treeData.length; j++) {
                        // eslint-disable-next-line
                        var value_1 = this.treeData[j][this.fields.value];
                        if (!isNOU(value_1) && (value_1 === parentId)) {
                            parent_1 = this.treeData[j];
                            break;
                        }
                    }
                    if (!isNOU(parent_1) && (matchedDataSource.indexOf(parent_1) === -1)) {
                        matchedDataSource.push(parent_1);
                        parentId = parent_1[this.fields.parentValue];
                    }
                    else {
                        break;
                    }
                }
            }
        }
        filteredFields.dataSource = matchedDataSource;
        return filteredFields;
    };
    // eslint-disable-next-line
    DropDownTree.prototype.isMatchedNode = function (value, node) {
        var checkValue = node[this.fields.text];
        if (this.ignoreCase) {
            checkValue = checkValue.toLowerCase();
            value = value.toLowerCase();
        }
        if (this.ignoreAccent) {
            checkValue = DataUtil.ignoreDiacritics(checkValue);
            value = DataUtil.ignoreDiacritics(value);
        }
        if (this.filterType === 'StartsWith') {
            return checkValue.slice(0, value.length) === value;
        }
        else if (this.filterType === 'EndsWith') {
            return checkValue.slice(-value.length) === value;
        }
        else {
            return checkValue.indexOf(value) !== -1;
        }
    };
    /* To wire events for the dropdown tree */
    DropDownTree.prototype.wireEvents = function () {
        EventHandler.add(this.inputWrapper, 'mouseup', this.dropDownClick, this);
        EventHandler.add(this.inputWrapper, 'focus', this.focusIn, this);
        EventHandler.add(this.inputWrapper, 'blur', this.focusOut, this);
        EventHandler.add(this.inputWrapper, 'mousemove', this.mouseIn, this);
        EventHandler.add(this.inputWrapper, 'mouseout', this.onMouseLeave, this);
        EventHandler.add(this.overAllClear, 'mousedown', this.clearAll, this);
        EventHandler.add(window, 'resize', this.windowResize, this);
        var formElement = closest(this.inputWrapper, 'form');
        if (formElement) {
            EventHandler.add(formElement, 'reset', this.resetValueHandler, this);
        }
        this.keyboardModule = new KeyboardEvents(this.inputWrapper, {
            keyAction: this.keyActionHandler.bind(this),
            keyConfigs: this.keyConfigs,
            eventName: 'keydown'
        });
    };
    DropDownTree.prototype.wireTreeEvents = function () {
        this.keyboardModule = new KeyboardEvents(this.tree, {
            keyAction: this.treeAction.bind(this),
            keyConfigs: this.keyConfigs,
            eventName: 'keydown'
        });
    };
    DropDownTree.prototype.wireCheckAllWrapperEvents = function () {
        this.keyboardModule = new KeyboardEvents(this.checkAllParent, {
            keyAction: this.checkAllAction.bind(this),
            keyConfigs: this.keyConfigs,
            eventName: 'keydown'
        });
    };
    /* To unwire events for the dropdown tree */
    DropDownTree.prototype.unWireEvents = function () {
        EventHandler.remove(this.inputWrapper, 'mouseup', this.dropDownClick);
        EventHandler.remove(this.inputWrapper, 'focus', this.focusIn);
        EventHandler.remove(this.inputWrapper, 'blur', this.focusOut);
        EventHandler.remove(this.inputWrapper, 'mousemove', this.mouseIn);
        EventHandler.remove(this.inputWrapper, 'mouseout', this.onMouseLeave);
        EventHandler.remove(this.overAllClear, 'mousedown', this.clearAll);
        EventHandler.remove(window, 'resize', this.windowResize);
        var formElement = closest(this.inputWrapper, 'form');
        if (formElement) {
            EventHandler.remove(formElement, 'reset', this.resetValueHandler);
        }
    };
    /* Trigger when the dropdown is clicked */
    DropDownTree.prototype.dropDownClick = function (e) {
        if (!this.enabled || this.readonly) {
            return;
        }
        if (this.isClearButtonClick) {
            this.isClearButtonClick = false;
            return;
        }
        if (!this.wrapText && e.target.classList.contains(CHIP_CLOSE)) {
            this.removeChip(e);
        }
        if (this.isPopupOpen) {
            this.hidePopup();
        }
        else {
            this.focusIn(e);
            this.renderPopup();
        }
        this.showOverAllClear();
    };
    DropDownTree.prototype.mouseIn = function () {
        if (this.enabled || !this.readonly) {
            this.showOverAllClear();
        }
    };
    DropDownTree.prototype.onMouseLeave = function () {
        if (!this.inputFocus) {
            addClass([this.overAllClear], HIDEICON);
            removeClass([this.inputWrapper], SHOW_CLEAR);
        }
    };
    DropDownTree.prototype.getDirective = function () {
        return 'EJS-DROPDOWNTREE';
    };
    DropDownTree.prototype.focusOut = function (e) {
        if (!this.enabled || this.readonly || !this.inputFocus) {
            return;
        }
        if ((Browser.isIE || Browser.info.name === 'edge') && (e.target === this.inputWrapper)) {
            return;
        }
        var target = e.relatedTarget;
        if ((target !== this.inputEle) && (isNOU(target)) && (e.target !== this.inputWrapper || !this.isPopupOpen)) {
            this.onFocusOut(e);
        }
    };
    DropDownTree.prototype.onFocusOut = function (event) {
        this.inputFocus = false;
        if (this.isPopupOpen) {
            this.hidePopup();
        }
        if (this.isClearButtonClick) {
            this.isClearButtonClick = false;
        }
        if (this.showClearButton) {
            this.clearIconWidth = select('.e-clear-icon', this.inputWrapper).offsetWidth;
            addClass([this.overAllClear], HIDEICON);
            removeClass([this.inputWrapper], SHOW_CLEAR);
        }
        removeClass([this.inputWrapper], [INPUTFOCUS]);
        if ((this.allowMultiSelection || this.showCheckBox)) {
            var isValue = this.value ? (this.value.length ? true : false) : false;
            if (this.mode !== 'Delimiter') {
                if (this.chipWrapper && (this.mode === 'Default')) {
                    addClass([this.chipWrapper], HIDEICON);
                    removeClass([this.inputWrapper], SHOW_CHIP);
                    removeClass([this.inputEle], CHIP_INPUT);
                }
            }
            if (!this.wrapText && isValue) {
                this.updateView();
            }
        }
        if (this.changeOnBlur) {
            this.triggerChangeEvent(event);
        }
        this.removeValue = false;
        this.oldValue = this.value;
        this.trigger('blur');
    };
    DropDownTree.prototype.updateView = function () {
        if (!this.showCheckBox && !this.allowMultiSelection) {
            return;
        }
        if (this.mode !== 'Box') {
            addClass([this.inputWrapper, this.overFlowWrapper], SHOW_TEXT);
        }
        else {
            addClass([this.inputWrapper], SHOW_CHIP);
        }
        if (this.value && this.value.length !== 0) {
            if (this.inputWrapper.contains(this.chipWrapper)) {
                addClass([this.chipWrapper], HIDEICON);
            }
            addClass([this.inputEle], CHIP_INPUT);
            this.updateOverFlowView();
            this.ensurePlaceHolder();
        }
    };
    DropDownTree.prototype.triggerChangeEvent = function (event) {
        var isEqual = this.ddtCompareValues(this.oldValue, this.value);
        if ((!isEqual || this.isChipDelete) && !this.removeValue) {
            var eventArgs = {
                e: event,
                oldValue: this.oldValue,
                value: this.value,
                isInteracted: event ? true : false,
                element: this.element
            };
            this.trigger('change', eventArgs);
            this.oldValue = this.value;
        }
    };
    DropDownTree.prototype.ddtCompareValues = function (oldValue, newValue) {
        if (oldValue === null || newValue === null) {
            var isValid = oldValue === null ? ((newValue === oldValue) ? true : false) :
                (oldValue.length === 0 ? (newValue === oldValue) : false);
            return isValid;
        }
        else if (oldValue.length !== newValue.length) {
            return false;
        }
        for (var i = 0; i < oldValue.length; i++) {
            if (oldValue[i] !== newValue[i]) {
                return false;
            }
        }
        return true;
    };
    DropDownTree.prototype.focusIn = function (e) {
        if (!this.enabled || this.readonly || this.inputFocus) {
            return;
        }
        this.showOverAllClear();
        this.inputFocus = true;
        addClass([this.inputWrapper], [INPUTFOCUS]);
        if (this.allowMultiSelection || this.showCheckBox) {
            if (this.mode !== 'Delimiter' && this.inputFocus) {
                if (this.chipWrapper && (this.value && this.value.length !== 0)) {
                    removeClass([this.chipWrapper], HIDEICON);
                    addClass([this.inputEle], CHIP_INPUT);
                }
                addClass([this.inputWrapper], SHOW_CHIP);
                if (this.popupObj) {
                    this.popupObj.refreshPosition();
                }
            }
            if (!this.wrapText) {
                if (this.inputWrapper.contains(this.overFlowWrapper)) {
                    addClass([this.overFlowWrapper], HIDEICON);
                }
                if (this.mode === 'Delimiter') {
                    removeClass([this.inputWrapper], SHOW_CHIP);
                    removeClass([this.inputEle], CHIP_INPUT);
                }
                else {
                    addClass([this.inputWrapper], SHOW_CHIP);
                }
                removeClass([this.inputWrapper], SHOW_TEXT);
                this.ensurePlaceHolder();
            }
        }
        var args = { isInteracted: e ? true : false, event: e };
        this.trigger('focus', args);
    };
    DropDownTree.prototype.treeAction = function (e) {
        var _this = this;
        var eventArgs = {
            cancel: false,
            event: e
        };
        this.trigger('keyPress', eventArgs, function (observedArgs) {
            if (!observedArgs.cancel) {
                switch (e.action) {
                    case 'escape':
                    case 'altUp':
                        _this.inputWrapper.focus();
                        e.preventDefault();
                        if (_this.isPopupOpen) {
                            _this.hidePopup();
                        }
                        break;
                    case 'tab':
                    case 'shiftTab':
                        if (_this.isPopupOpen) {
                            _this.hidePopup();
                        }
                        break;
                    case 'enter':
                    case 'ctrlEnter':
                    case 'shiftEnter':
                    case 'csEnter':
                        if (!_this.showCheckBox) {
                            _this.isValueChange = true;
                            _this.keyEventArgs = e;
                        }
                        break;
                    case 'space':
                        _this.isValueChange = true;
                        _this.keyEventArgs = e;
                        break;
                    case 'ctrlA':
                        if (_this.allowMultiSelection) {
                            _this.selectAll(true);
                        }
                        break;
                    case 'moveRight':
                    case 'moveLeft':
                    case 'shiftDown':
                    case 'moveDown':
                    case 'ctrlDown':
                    case 'csDown':
                    case 'shiftUp':
                    case 'moveUp':
                    case 'ctrlUp':
                    case 'csUp':
                    case 'home':
                    case 'shiftHome':
                    case 'ctrlHome':
                    case 'csHome':
                    case 'end':
                    case 'shiftEnd':
                    case 'ctrlEnd':
                    case 'csEnd':
                }
            }
            else {
                e.stopImmediatePropagation();
            }
        });
    };
    DropDownTree.prototype.keyActionHandler = function (e) {
        var _this = this;
        var eventArgs = {
            cancel: false,
            event: e
        };
        this.trigger('keyPress', eventArgs, function (observedArgs) {
            if (!observedArgs.cancel) {
                switch (e.action) {
                    case 'escape':
                    case 'altUp':
                    case 'shiftTab':
                    case 'tab':
                        if (_this.isPopupOpen) {
                            _this.hidePopup();
                        }
                        break;
                    case 'altDown':
                        if (!_this.isPopupOpen) {
                            _this.showPopup();
                            e.preventDefault();
                        }
                        break;
                    case 'moveDown':
                        if (_this.showSelectAll && _this.showCheckBox) {
                            _this.checkAllParent.focus();
                        }
                        break;
                }
            }
        });
    };
    DropDownTree.prototype.checkAllAction = function (e) {
        var _this = this;
        var eventArgs = {
            cancel: false,
            event: e
        };
        this.trigger('keyPress', eventArgs, function (observedArgs) {
            if (!observedArgs.cancel) {
                switch (e.action) {
                    case 'space':
                        _this.clickHandler(e);
                        break;
                    case 'moveDown':
                        _this.treeObj.element.focus();
                }
            }
        });
    };
    DropDownTree.prototype.windowResize = function () {
        if (this.popupObj) {
            this.popupObj.setProperties({ width: this.setWidth() });
            this.popupObj.refreshPosition();
        }
    };
    DropDownTree.prototype.resetValueHandler = function (e) {
        var formElement = closest(this.inputWrapper, 'form');
        if (formElement && e.target === formElement) {
            this.isDynamicChange = true;
            this.setProperties({ value: null }, true);
            this.resetValue(true);
            this.isDynamicChange = false;
        }
    };
    DropDownTree.prototype.getAriaAttributes = function () {
        var disable = this.enabled ? 'false' : 'true';
        return {
            'aria-disabled': disable,
            'aria-owns': this.element.id + '_options',
            'role': 'listbox',
            'aria-haspopup': 'true',
            'aria-expanded': 'false',
            'aria-activedescendant': 'null',
            'aria-labelledby': this.hiddenElement.id
        };
    };
    DropDownTree.prototype.updateOverFlowView = function () {
        this.overFlowWrapper.classList.remove(TOTAL_COUNT_WRAPPER);
        removeClass([this.overFlowWrapper], HIDEICON);
        if (this.value && this.value.length) {
            var data = '';
            var overAllContainer = void 0;
            var temp = void 0;
            var tempData = void 0;
            var tempIndex = 1;
            var wrapperleng = void 0;
            var remaining = void 0;
            var downIconWidth = 0;
            this.overFlowWrapper.innerHTML = '';
            // eslint-disable-next-line
            var l10nLocale = { overflowCountTemplate: '+${count} more..', totalCountTemplate: '${count} selected' };
            this.l10n = new L10n(this.getLocaleName(), l10nLocale, this.locale);
            var remainContent = this.l10n.getConstant('overflowCountTemplate');
            var remainElement = this.createElement('span', { className: REMAIN_WRAPPER });
            // eslint-disable-next-line
            var compiledString = compile(remainContent);
            // eslint-disable-next-line
            var totalCompiledString = compile(this.l10n.getConstant('totalCountTemplate'));
            remainElement.appendChild(compiledString({ 'count': this.value.length }, this, 'overflowCountTemplate', null, !this.isStringTemplate)[0]);
            this.overFlowWrapper.appendChild(remainElement);
            var remainSize = remainElement.offsetWidth;
            remove(remainElement);
            if (this.showDropDownIcon) {
                downIconWidth = select('.' + DDTICON, this.inputWrapper).offsetWidth;
            }
            if (!isNOU(this.value)) {
                if (this.mode !== 'Box') {
                    for (var index = 0; !isNOU(this.value[index]); index++) {
                        data += (index === 0) ? '' : this.delimiterChar + ' ';
                        temp = this.getOverflowVal(index);
                        data += temp;
                        temp = this.overFlowWrapper.innerHTML;
                        this.overFlowWrapper.innerHTML = data;
                        wrapperleng = this.overFlowWrapper.offsetWidth;
                        overAllContainer = this.inputWrapper.offsetWidth;
                        if ((wrapperleng + downIconWidth + this.clearIconWidth) > overAllContainer) {
                            if (tempData !== undefined && tempData !== '') {
                                temp = tempData;
                                index = tempIndex + 1;
                            }
                            this.overFlowWrapper.innerHTML = temp;
                            remaining = this.value.length - index;
                            wrapperleng = this.overFlowWrapper.offsetWidth;
                            while (((wrapperleng + remainSize + downIconWidth + this.clearIconWidth) >= overAllContainer)
                                && wrapperleng !== 0 && this.overFlowWrapper.innerHTML !== '') {
                                var textArr = this.overFlowWrapper.innerHTML.split(this.delimiterChar);
                                textArr.pop();
                                this.overFlowWrapper.innerHTML = textArr.join(this.delimiterChar);
                                remaining++;
                                wrapperleng = this.overFlowWrapper.offsetWidth;
                            }
                            break;
                        }
                        else if ((wrapperleng + remainSize + downIconWidth + this.clearIconWidth) <= overAllContainer) {
                            tempData = data;
                            tempIndex = index;
                        }
                        else if (index === 0) {
                            tempData = '';
                            tempIndex = -1;
                        }
                    }
                }
                else {
                    addClass([this.chipWrapper], HIDEICON);
                    var ele = this.chipWrapper.cloneNode(true);
                    var chips = selectAll('.' + CHIP, ele);
                    for (var i = 0; i < chips.length; i++) {
                        temp = this.overFlowWrapper.innerHTML;
                        this.overFlowWrapper.appendChild(chips[i]);
                        data = this.overFlowWrapper.innerHTML;
                        wrapperleng = this.overFlowWrapper.offsetWidth;
                        overAllContainer = this.inputWrapper.offsetWidth;
                        if ((wrapperleng + downIconWidth + this.clearIconWidth) > overAllContainer) {
                            if (tempData !== undefined && tempData !== '') {
                                temp = tempData;
                                i = tempIndex + 1;
                            }
                            this.overFlowWrapper.innerHTML = temp;
                            remaining = this.value.length - i;
                            wrapperleng = this.overFlowWrapper.offsetWidth;
                            while (((wrapperleng + remainSize + downIconWidth + this.clearIconWidth) >= overAllContainer)
                                && wrapperleng !== 0 && this.overFlowWrapper.innerHTML !== '') {
                                this.overFlowWrapper.removeChild(this.overFlowWrapper.lastChild);
                                remaining++;
                                wrapperleng = this.overFlowWrapper.offsetWidth;
                            }
                            break;
                        }
                        else if ((wrapperleng + remainSize + downIconWidth + this.clearIconWidth) <= overAllContainer) {
                            tempData = data;
                            tempIndex = i;
                        }
                        else if (i === 0) {
                            tempData = '';
                            tempIndex = -1;
                        }
                    }
                }
            }
            if (remaining > 0) {
                this.overFlowWrapper.appendChild(this.updateRemainTemplate(remainElement, remaining, compiledString, totalCompiledString));
            }
            if (this.mode === 'Box' && !this.overFlowWrapper.classList.contains(TOTAL_COUNT_WRAPPER)) {
                addClass([remainElement], REMAIN_COUNT);
            }
        }
        else {
            this.overFlowWrapper.innerHTML = '';
            addClass([this.overFlowWrapper], HIDEICON);
        }
        this.updateDelimMode();
    };
    DropDownTree.prototype.updateRemainTemplate = function (remainElement, remaining, 
    // eslint-disable-next-line
    compiledString, 
    // eslint-disable-next-line
    totalCompiledString) {
        if (this.overFlowWrapper.firstChild && this.overFlowWrapper.firstChild.nodeType === 3 &&
            this.overFlowWrapper.firstChild.nodeValue === '') {
            this.overFlowWrapper.removeChild(this.overFlowWrapper.firstChild);
        }
        remainElement.innerHTML = '';
        remainElement.appendChild((this.overFlowWrapper.firstChild && (this.overFlowWrapper.firstChild.nodeType === 3 || this.mode === 'Box')) ?
            compiledString({ 'count': remaining }, this, 'overflowCountTemplate', null, !this.isStringTemplate)[0] :
            totalCompiledString({ 'count': remaining }, this, 'totalCountTemplate', null, !this.isStringTemplate)[0]);
        if (this.overFlowWrapper.firstChild && (this.overFlowWrapper.firstChild.nodeType === 3 || this.mode === 'Box')) {
            removeClass([this.overFlowWrapper], TOTAL_COUNT_WRAPPER);
        }
        else {
            addClass([this.overFlowWrapper], TOTAL_COUNT_WRAPPER);
            removeClass([this.overFlowWrapper], REMAIN_COUNT);
        }
        return remainElement;
    };
    DropDownTree.prototype.getOverflowVal = function (index) {
        // eslint-disable-next-line
        var selectedData = this.getSelectedData(this.value[index]);
        return getValue(this.treeSettings.loadOnDemand ? this.fields.text : 'text', selectedData);
    };
    DropDownTree.prototype.updateDelimMode = function () {
        if (this.mode !== 'Box') {
            if (select('.' + REMAIN_WRAPPER, this.overFlowWrapper) && !this.overFlowWrapper.classList.contains(TOTAL_COUNT_WRAPPER)) {
                addClass([this.overFlowWrapper], REMAIN_COUNT);
                addClass([this.overFlowWrapper], SHOW_TEXT);
            }
            else {
                this.overFlowWrapper.classList.remove(REMAIN_COUNT);
                removeClass([this.overFlowWrapper], REMAIN_COUNT);
            }
        }
        else if (select('.' + REMAIN_WRAPPER, this.overFlowWrapper)) {
            this.overFlowWrapper.classList.remove(REMAIN_COUNT);
        }
    };
    DropDownTree.prototype.createHiddenElement = function () {
        if (this.allowMultiSelection || this.showCheckBox) {
            this.hiddenElement = this.createElement('select', {
                attrs: { 'aria-hidden': 'true', 'class': HIDDENELEMENT, 'tabindex': '-1', 'multiple': '' }
            });
        }
        else {
            this.hiddenElement = this.createElement('select', {
                attrs: { 'aria-hidden': 'true', 'tabindex': '-1', 'class': HIDDENELEMENT }
            });
        }
        prepend([this.hiddenElement], this.inputWrapper);
        this.validationAttribute();
    };
    DropDownTree.prototype.createClearIcon = function () {
        this.overAllClear = this.createElement('span', {
            className: CLOSEICON_CLASS
        });
        addClass([this.overAllClear], HIDEICON);
        removeClass([this.inputWrapper], SHOW_CLEAR);
        if (this.showClearButton) {
            this.inputWrapper.insertBefore(this.overAllClear, this.inputObj.buttons[0]);
        }
    };
    DropDownTree.prototype.validationAttribute = function () {
        var name = this.inputEle.getAttribute('name') ? this.inputEle.getAttribute('name') : this.inputEle.getAttribute('id');
        this.hiddenElement.setAttribute('name', name);
        this.inputEle.removeAttribute('name');
        var attributes = ['required', 'aria-required', 'form'];
        for (var i = 0; i < attributes.length; i++) {
            var attr = this.inputEle.getAttribute(attributes[i]);
            if (attr) {
                this.hiddenElement.setAttribute(attributes[i], attr);
                this.inputEle.removeAttribute(attributes[i]);
            }
        }
    };
    DropDownTree.prototype.createChip = function () {
        if (!this.inputWrapper.contains(this.chipWrapper)) {
            this.chipWrapper = this.createElement('span', {
                className: CHIP_WRAPPER
            });
            this.chipCollection = this.createElement('span', {
                className: CHIP_COLLECTION
            });
            this.chipWrapper.appendChild(this.chipCollection);
            this.inputWrapper.insertBefore(this.chipWrapper, this.hiddenElement);
            addClass([this.inputWrapper], SHOW_CHIP);
            var isValid = this.getValidMode();
            if (isValid && this.value !== null) {
                addClass([this.inputEle], CHIP_INPUT);
            }
            else if (this.value === null) {
                addClass([this.chipWrapper], HIDEICON);
            }
        }
    };
    DropDownTree.prototype.getValidMode = function () {
        if (this.allowMultiSelection || this.showCheckBox) {
            return this.mode === 'Box' ? true : (this.mode === 'Default' && this.inputFocus) ? true : false;
        }
        else {
            return false;
        }
    };
    DropDownTree.prototype.createSelectAllWrapper = function () {
        this.checkAllParent = this.createElement('div', {
            className: CHECKALLPARENT, attrs: { 'tabindex': '0' }
        });
        this.selectAllSpan = this.createElement('span', {
            className: ALLTEXT
        });
        this.selectAllSpan.textContent = '';
        var ele = closest(this.element, '.' + BIGGER);
        var touchClass = isNOU(ele) ? '' : SMALL;
        this.checkBoxElement = createCheckBox(this.createElement, true, { cssClass: touchClass });
        this.checkBoxElement.setAttribute('role', 'checkbox');
        this.checkAllParent.appendChild(this.checkBoxElement);
        this.checkAllParent.appendChild(this.selectAllSpan);
        this.setLocale();
        EventHandler.add(this.checkAllParent, 'mouseup', this.clickHandler, this);
        this.wireCheckAllWrapperEvents();
    };
    DropDownTree.prototype.clickHandler = function (e) {
        var target;
        if ((e.currentTarget && e.currentTarget.classList.contains(CHECKALLPARENT))) {
            target = e.currentTarget.firstElementChild.lastElementChild;
        }
        else {
            target = e.target;
        }
        this.checkWrapper = closest(target, '.' + CHECKBOXWRAP);
        if (!isNOU(this.checkWrapper)) {
            var checkElement = select('.' + CHECKBOXFRAME, this.checkWrapper);
            this.changeState(this.checkWrapper, checkElement.classList.contains(CHECK) ? 'uncheck' : 'check', e);
        }
        e.preventDefault();
    };
    DropDownTree.prototype.changeState = function (wrapper, state, e) {
        var ariaState;
        var frameSpan = wrapper.getElementsByClassName(CHECKBOXFRAME)[0];
        if (state === 'check' && !frameSpan.classList.contains(CHECK)) {
            frameSpan.classList.add(CHECK);
            ariaState = 'true';
            if (!this.isReverseUpdate) {
                this.treeObj.checkAll();
                if (!this.changeOnBlur) {
                    this.triggerChangeEvent(e);
                }
            }
            this.setLocale(true);
        }
        else if (state === 'uncheck' && (frameSpan.classList.contains(CHECK))) {
            frameSpan.classList.remove(CHECK);
            ariaState = 'false';
            if (!this.isReverseUpdate) {
                this.treeObj.uncheckAll();
                if (!this.changeOnBlur) {
                    this.triggerChangeEvent(e);
                }
            }
            this.setLocale(false);
        }
        this.setMultiSelect();
        this.ensurePlaceHolder();
        ariaState = state === 'check' ? 'true' : 'false';
        if (!isNOU(ariaState)) {
            wrapper.setAttribute('aria-checked', ariaState);
        }
    };
    DropDownTree.prototype.setLocale = function (unSelect) {
        if (!this.selectAllSpan) {
            return;
        }
        if (this.selectAllText !== 'Select All' || this.unSelectAllText !== 'Unselect All') {
            var template = unSelect ? this.unSelectAllText : this.selectAllText;
            this.selectAllSpan.textContent = '';
            // eslint-disable-next-line
            var compiledString = compile(template);
            var templateName = unSelect ? 'unSelectAllText' : 'selectAllText';
            for (var _i = 0, _a = compiledString({}, this, templateName, null, !this.isStringTemplate); _i < _a.length; _i++) {
                var item = _a[_i];
                this.selectAllSpan.textContent = item.textContent;
            }
        }
        else {
            this.selectAllSpan.textContent = unSelect ? this.unSelectAllText : this.selectAllText;
        }
    };
    DropDownTree.prototype.setAttributes = function () {
        this.element.removeAttribute('tabindex');
        var id = this.element.getAttribute('id');
        this.hiddenElement.id = id + '_hidden';
        this.inputWrapper.setAttribute('tabindex', '0');
        attributes(this.inputWrapper, this.getAriaAttributes());
    };
    DropDownTree.prototype.setHTMLAttributes = function () {
        if (Object.keys(this.htmlAttributes).length) {
            for (var _i = 0, _a = Object.keys(this.htmlAttributes); _i < _a.length; _i++) {
                var htmlAttr = _a[_i];
                if (htmlAttr === 'class') {
                    this.inputWrapper.classList.add(this.htmlAttributes[htmlAttr]);
                }
                else if (htmlAttr === 'disabled' && this.htmlAttributes[htmlAttr] === 'disabled') {
                    this.setProperties({ enabled: false }, true);
                    this.setEnable();
                }
                else if (htmlAttr === 'readonly' && !isNOU(this.htmlAttributes[htmlAttr])) {
                    this.setProperties({ readonly: true }, true);
                    this.dataBind();
                }
                else if (htmlAttr === 'style') {
                    this.inputWrapper.setAttribute('style', this.htmlAttributes[htmlAttr]);
                }
                else {
                    var defaultAttr = ['title', 'id', 'placeholder', 'aria-placeholder',
                        'role', 'autocorrect', 'autocomplete', 'autocapitalize', 'spellcheck', 'minlength', 'maxlength'];
                    var validateAttr = ['name', 'required'];
                    if (htmlAttr.indexOf('data') === 0 || validateAttr.indexOf(htmlAttr) > -1) {
                        this.hiddenElement.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                    }
                    else if (defaultAttr.indexOf(htmlAttr) > -1) {
                        if (htmlAttr === 'placeholder') {
                            Input.setPlaceholder(this.htmlAttributes[htmlAttr], this.inputEle);
                        }
                        else {
                            this.inputEle.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                        }
                    }
                    else {
                        this.inputWrapper.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                    }
                }
            }
        }
    };
    DropDownTree.prototype.updateDataAttribute = function () {
        var value = this.htmlAttributes;
        var invalidAttr = ['class', 'style', 'id', 'type'];
        var attr = {};
        for (var a = 0; a < this.element.attributes.length; a++) {
            if (invalidAttr.indexOf(this.element.attributes[a].name) === -1 &&
                !(this.element.attributes[a].name === 'readonly')) {
                attr[this.element.attributes[a].name] = this.element.getAttribute(this.element.attributes[a].name);
            }
        }
        extend(attr, value, attr);
        this.setProperties({ htmlAttributes: attr }, true);
    };
    DropDownTree.prototype.showOverAllClear = function () {
        if (!this.enabled || this.readonly) {
            return;
        }
        if (this.overAllClear) {
            var isValue = this.value ? (this.value.length ? true : false) : false;
            if (isValue && this.showClearButton) {
                removeClass([this.overAllClear], HIDEICON);
                addClass([this.inputWrapper], SHOW_CLEAR);
            }
            else {
                addClass([this.overAllClear], HIDEICON);
                removeClass([this.inputWrapper], SHOW_CLEAR);
            }
        }
    };
    DropDownTree.prototype.setTreeValue = function () {
        if (this.value !== null && this.value.length !== 0) {
            // eslint-disable-next-line
            var data = void 0;
            if (this.showCheckBox || this.allowMultiSelection) {
                for (var i = 0; i < this.value.length; i++) {
                    data = this.treeObj.getTreeData(this.value[i])[0];
                    if (isNOU(data)) {
                        this.value.splice(this.value.indexOf(this.value[i]), 1);
                    }
                }
                if (this.value.length !== 0) {
                    this.setValidValue();
                }
            }
            else {
                data = this.treeObj.getTreeData(this.value[0])[0];
                if (!isNOU(data)) {
                    this.setProperties({ text: data[this.fields.text] }, true);
                    this.setValidValue();
                }
                else {
                    this.setProperties({ value: this.currentValue }, true);
                }
            }
        }
    };
    DropDownTree.prototype.setTreeText = function () {
        if (this.value !== null && !this.isInitialized) {
            return;
        }
        if (this.text !== null) {
            // eslint-disable-next-line
            var data = void 0;
            var valArr = [];
            if (this.showCheckBox || this.allowMultiSelection) {
                var textArr = this.text.split(this.delimiterChar);
                for (var i = 0; i < textArr.length; i++) {
                    data = this.getItems(textArr[i]);
                    if (!isNOU(data)) {
                        valArr.push(data[this.fields.value].toString());
                    }
                }
                if (valArr.length !== 0) {
                    this.oldValue = this.value;
                    this.setProperties({ value: valArr }, true);
                    this.setValidValue();
                }
                else {
                    this.setProperties({ text: this.currentText }, true);
                }
            }
            else {
                data = this.getItems(this.text);
                if (!isNOU(data)) {
                    this.oldValue = this.value;
                    this.setProperties({ value: [data[this.fields.value].toString()] }, true);
                    this.setValidValue();
                }
                else {
                    this.setProperties({ text: this.currentText }, true);
                }
            }
        }
    };
    DropDownTree.prototype.setSelectedValue = function () {
        if (this.value != null) {
            return;
        }
        if (!this.isInitialized) {
            this.oldValue = this.value;
            if (this.treeObj.selectedNodes.length > 0 && !this.showCheckBox) {
                this.setProperties({ value: this.treeObj.selectedNodes }, true);
                if (this.allowMultiSelection) {
                    this.updateMode();
                }
            }
            else if (this.showCheckBox && this.treeObj.checkedNodes) {
                if (this.treeObj.checkedNodes.length > 0) {
                    this.setProperties({ value: this.treeObj.checkedNodes }, true);
                    setValue('selectedNodes', [], this.treeObj);
                    this.treeObj.dataBind();
                    this.updateMode();
                }
            }
            this.updateSelectedValues();
            this.currentText = this.text;
            this.currentValue = this.value;
        }
    };
    DropDownTree.prototype.setValidValue = function () {
        if (!this.showCheckBox && !this.allowMultiSelection) {
            Input.setValue(this.text, this.inputEle, this.floatLabelType);
            var id = this.value[0].toString();
            if (this.treeObj.selectedNodes[0] !== id) {
                setValue('selectedNodes', [id], this.treeObj);
            }
        }
        else {
            if (this.showCheckBox) {
                this.treeObj.checkedNodes = this.value.slice();
                setValue('selectedNodes', [], this.treeObj);
                this.treeObj.dataBind();
                this.setMultiSelect();
            }
            else {
                this.treeObj.selectedNodes = this.value.slice();
                this.selectedText = [];
                this.updateSelectedValues();
            }
            this.treeObj.dataBind();
        }
        this.currentText = this.text;
        this.currentValue = this.value;
        if (this.isInitialized) {
            this.triggerChangeEvent();
        }
    };
    // eslint-disable-next-line
    DropDownTree.prototype.getItems = function (givenText) {
        // eslint-disable-next-line
        var data;
        if (this.treeDataType === 1) {
            for (var i = 0; i < this.treeItems.length; i++) {
                // eslint-disable-next-line
                var text = getValue(this.fields.text, this.treeItems[i]);
                if (!isNOU(this.treeItems[i]) && !isNOU(text) && text === givenText) {
                    data = this.treeItems[i];
                    break;
                }
            }
        }
        else {
            data = this.getNestedItems(this.treeItems, this.fields, givenText);
        }
        return data;
    };
    // eslint-disable-next-line
    DropDownTree.prototype.getNestedItems = function (data, field, givenText) {
        // eslint-disable-next-line
        var newData;
        for (var i = 0, objlen = data.length; i < objlen; i++) {
            // eslint-disable-next-line
            var dataId = getValue(this.fields.text, data[i]);
            if (data[i] && dataId && dataId.toString() === givenText) {
                return data[i];
            }
            else if (typeof field.child === 'string' && !isNOU(getValue(field.child, data[i]))) {
                // eslint-disable-next-line
                var childData = getValue(field.child, data[i]);
                // eslint-disable-next-line
                newData = this.getNestedItems(childData, this.getChildType(field), givenText);
                if (newData !== undefined) {
                    break;
                }
            }
            else if (this.fields.dataSource instanceof DataManager && !isNOU(getValue('child', data[i]))) {
                var child = 'child';
                // eslint-disable-next-line
                newData = this.getNestedItems(getValue(child, data[i]), this.getChildType(field), givenText);
                if (newData !== undefined) {
                    break;
                }
            }
        }
        return newData;
    };
    DropDownTree.prototype.getChildType = function (mapper) {
        return (typeof mapper.child === 'string' || isNOU(mapper.child)) ? mapper : mapper.child;
    };
    /* To render the treeview */
    DropDownTree.prototype.renderTree = function () {
        this.treeObj = new TreeView({
            fields: this.getTreeFields(this.fields),
            enableRtl: this.enableRtl,
            nodeSelected: this.onNodeSelected.bind(this),
            nodeChecked: this.onNodeChecked.bind(this),
            nodeChecking: this.beforeCheck.bind(this),
            actionFailure: this.onActionFailure.bind(this),
            nodeClicked: this.onNodeClicked.bind(this),
            dataBound: this.OnDataBound.bind(this),
            allowMultiSelection: this.allowMultiSelection,
            showCheckBox: this.showCheckBox,
            autoCheck: this.treeSettings.autoCheck,
            sortOrder: this.sortOrder,
            expandOn: this.treeSettings.expandOn,
            loadOnDemand: this.treeSettings.loadOnDemand,
            nodeSelecting: this.onBeforeSelect.bind(this),
            nodeTemplate: this.itemTemplate
        });
        this.treeObj.appendTo('#' + this.tree.id);
    };
    /* To render the popup element */
    DropDownTree.prototype.renderPopup = function () {
        var _this = this;
        if (this.isFilteredData) {
            this.filterObj.value = '';
            this.treeObj.fields = this.getTreeFields(this.fields);
            this.isFilterRestore = true;
            this.isFilteredData = false;
            this.hideCheckAll(false);
        }
        var isCancelled = false;
        var args = { cancel: false };
        this.trigger('beforeOpen', args, function (args) {
            if (!args.cancel) {
                addClass([_this.inputWrapper], [ICONANIMATION]);
                if (_this.isFirstRender) {
                    _this.popupEle = _this.createElement('div', {
                        id: _this.element.id + '_popup', className: POPUP_CLASS + ' ' + (_this.cssClass != null ? _this.cssClass : '')
                    });
                    document.body.appendChild(_this.popupEle);
                    _this.createPopup(_this.popupEle);
                }
                else {
                    _this.popupEle = _this.popupObj.element;
                }
            }
            else {
                isCancelled = true;
            }
            if (_this.isFirstRender && !isCancelled) {
                prepend([_this.popupDiv], _this.popupEle);
                _this.popupDiv.style.display = 'block';
                if (_this.allowFiltering) {
                    _this.renderFilter();
                }
                if (_this.showCheckBox && _this.showSelectAll && (!_this.popupDiv.classList.contains(NODATA))) {
                    _this.createSelectAllWrapper();
                    _this.popupEle.insertBefore(_this.checkAllParent, _this.popupDiv);
                }
                if (_this.headerTemplate) {
                    _this.setHeaderTemplate();
                }
                if (_this.footerTemplate) {
                    _this.setFooterTemplate();
                }
                _this.isFirstRender = false;
                /* eslint-disable */
                if (_this.hasTemplate && _this.portals) {
                    _this.portals = _this.portals.concat(_this.treeObj.portals);
                    /* eslint-enable */
                    _this.renderReactTemplates();
                }
            }
            if (!isCancelled) {
                attributes(_this.inputWrapper, { 'aria-expanded': 'true' });
                _this.popupObj.show(null, (_this.zIndex === 1000) ? _this.inputEle : null);
                _this.popupEle.style.display = 'block';
                _this.updatePopupHeight();
                _this.popupObj.refreshPosition();
                if (!(_this.showCheckBox && _this.showSelectAll) && (!_this.popupDiv.classList.contains(NODATA)
                    && _this.treeItems.length > 0)) {
                    _this.treeObj.element.focus();
                }
                if (_this.checkSelectAll && _this.checkBoxElement) {
                    var wrap = closest(_this.checkBoxElement, '.' + CHECKBOXWRAP);
                    _this.changeState(wrap, 'check');
                    _this.checkSelectAll = false;
                }
                if (_this.allowFiltering) {
                    removeClass([_this.inputWrapper], [INPUTFOCUS]);
                    _this.filterObj.element.focus();
                }
                var eventArgs = { popup: _this.popupObj };
                _this.trigger('open', eventArgs);
            }
        });
    };
    DropDownTree.prototype.updatePopupHeight = function () {
        if (this.isFirstRender) {
            return;
        }
        var popupHeight = this.getHeight();
        this.popupEle.style.maxHeight = popupHeight;
        if (this.allowFiltering) {
            var height = Math.round(this.filterContainer.getBoundingClientRect().height);
            popupHeight = formatUnit(parseInt(popupHeight, 10) - height + 'px');
        }
        if (this.headerTemplate) {
            var height = Math.round(this.header.getBoundingClientRect().height);
            popupHeight = formatUnit(parseInt(popupHeight, 10) - height + 'px');
        }
        if (this.showCheckBox && this.showSelectAll) {
            var height = Math.round(this.checkAllParent.getBoundingClientRect().height);
            popupHeight = formatUnit(parseInt(popupHeight, 10) - height + 'px');
        }
        if (this.footerTemplate) {
            var height = Math.round(this.footer.getBoundingClientRect().height);
            popupHeight = formatUnit(parseInt(popupHeight, 10) - height + 'px');
        }
        var border = parseInt(window.getComputedStyle(this.popupEle).borderTopWidth, 10);
        border = border + parseInt(window.getComputedStyle(this.popupEle).borderBottomWidth, 10);
        popupHeight = formatUnit(parseInt(popupHeight, 10) - border + 'px');
        this.popupDiv.style.maxHeight = popupHeight;
    };
    DropDownTree.prototype.createPopup = function (element) {
        var _this = this;
        if (this.isFirstRender) {
            this.popupObj = new Popup(element, {
                width: this.setWidth(),
                targetType: 'relative',
                collision: { X: 'flip', Y: 'flip' },
                relateTo: this.inputWrapper,
                zIndex: this.zIndex,
                enableRtl: this.enableRtl,
                position: { X: 'left', Y: 'bottom' },
                close: function () {
                    _this.isPopupOpen = false;
                },
                open: function () {
                    EventHandler.add(document, 'mousedown', _this.onDocumentClick, _this);
                    _this.isPopupOpen = true;
                },
                targetExitViewport: function () {
                    if (!Browser.isDevice) {
                        _this.hidePopup();
                    }
                }
            });
        }
    };
    /* To calculate the width when change via set model */
    DropDownTree.prototype.setElementWidth = function (inputWidth) {
        var ddElement = this.inputWrapper;
        if (!isNOU(inputWidth)) {
            if (typeof inputWidth === 'number') {
                ddElement.style.width = formatUnit(inputWidth);
            }
            else if (typeof inputWidth === 'string') {
                ddElement.style.width = (inputWidth.match(/px|%|em/)) ? (inputWidth) :
                    (formatUnit(inputWidth));
            }
        }
    };
    /* To calculate the width of the popup */
    DropDownTree.prototype.setWidth = function () {
        var width = formatUnit(this.popupWidth);
        if (width.indexOf('%') > -1) {
            width = (this.inputWrapper.offsetWidth * parseFloat(width) / 100).toString() + 'px';
        }
        else if (typeof this.popupWidth === 'string') {
            width = (this.popupWidth.match(/px|em/)) ? (this.popupWidth) : width;
        }
        return width;
    };
    /* To calculate the height of the popup */
    DropDownTree.prototype.getHeight = function () {
        var height = formatUnit(this.popupHeight);
        if (height.indexOf('%') > -1) {
            // Will set the height of the popup according to the view port height
            height = (document.documentElement.clientHeight * parseFloat(height) / 100).toString() + 'px';
        }
        else if (typeof this.popupHeight === 'string') {
            height = (this.popupHeight.match(/px|em/)) ? (this.popupHeight) : height;
        }
        return height;
    };
    DropDownTree.prototype.onDocumentClick = function (e) {
        var target = e.target;
        var isTree = closest(target, '.' + PARENTITEM);
        var isFilter = closest(target, '.' + FILTERWRAP);
        var isScroller = target.classList.contains(DROPDOWN) ? true :
            (matches(target, '.e-ddt .e-popup') || matches(target, '.e-ddt .e-treeview'));
        if ((this.isPopupOpen && (this.inputWrapper.contains(target) || isTree || isFilter || isScroller)) ||
            ((this.allowMultiSelection || this.showCheckBox) && (this.isPopupOpen && target.classList.contains(CHIP_CLOSE) ||
                (this.isPopupOpen && (target.classList.contains(CHECKALLPARENT) || target.classList.contains(ALLTEXT)
                    || target.classList.contains(CHECKBOXFRAME)))))) {
            this.isDocumentClick = false;
            e.preventDefault();
        }
        else if (!this.inputWrapper.contains(target) && this.inputFocus) {
            this.focusOut(e);
        }
    };
    DropDownTree.prototype.onActionFailure = function (e) {
        this.trigger('actionFailure', e);
        this.l10nUpdate(true);
        addClass([this.popupDiv], NODATA);
    };
    DropDownTree.prototype.OnDataBound = function (args) {
        this.treeItems = args.data;
        if (this.treeItems.length <= 0) {
            this.l10nUpdate();
            addClass([this.popupDiv], NODATA);
            this.hideCheckAll(true);
        }
        else if (this.popupDiv.classList.contains(NODATA) && this.treeItems.length >= 1) {
            removeClass([this.popupDiv], NODATA);
            this.hideCheckAll(false);
        }
        this.treeDataType = this.getTreeDataType(this.treeItems, this.fields);
        if (this.isFirstRender && this.isRemoteData) {
            this.setTreeValue();
            this.setTreeText();
            this.updateHiddenValue();
            this.setSelectedValue();
            if (!this.wrapText) {
                this.updateView();
            }
            this.treeObj.element.focus();
        }
        var eventArgs = { data: args.data };
        this.trigger('dataBound', eventArgs);
        if (this.isFilteredData) {
            this.treeObj.expandAll();
        }
        if (this.isFilterRestore) {
            this.restoreFilterSelection();
            this.isFilterRestore = false;
        }
    };
    DropDownTree.prototype.restoreFilterSelection = function () {
        if (this.showCheckBox) {
            this.treeObj.checkedNodes = this.value ? this.value : [];
        }
        else {
            this.treeObj.selectedNodes = this.value ? this.value : [];
        }
    };
    /* To set cssclass for the dropdowntree */
    DropDownTree.prototype.setCssClass = function (newClass, oldClass) {
        var elements = this.popupObj ? [this.inputWrapper, this.popupObj.element] : [this.inputWrapper];
        if (!isNOU(oldClass) && oldClass !== '') {
            removeClass(elements, oldClass.split(' '));
        }
        if (!isNOU(newClass) && newClass !== '') {
            addClass(elements, newClass.split(' '));
        }
    };
    DropDownTree.prototype.setEnableRTL = function (state) {
        if (state) {
            this.inputWrapper.classList.add(RTL);
        }
        else {
            this.inputWrapper.classList.remove(RTL);
        }
        if (this.popupObj) {
            this.popupObj.enableRtl = state;
            this.popupObj.dataBind();
        }
        if (this.treeObj) {
            this.treeObj.enableRtl = state;
            this.treeObj.dataBind();
        }
    };
    /* To set enable property */
    DropDownTree.prototype.setEnable = function () {
        Input.setEnabled(this.enabled, this.inputEle);
        if (this.enabled) {
            removeClass([this.inputWrapper], DISABLED);
            this.inputEle.setAttribute('aria-disabled', 'false');
            this.inputWrapper.setAttribute('aria-disabled', 'false');
        }
        else {
            if (this.isPopupOpen) {
                this.hidePopup();
            }
            addClass([this.inputWrapper], DISABLED);
            if (this.inputWrapper && this.inputWrapper.classList.contains(INPUTFOCUS)) {
                removeClass([this.inputWrapper], [INPUTFOCUS]);
            }
            this.inputEle.setAttribute('aria-disabled', 'true');
            this.inputWrapper.setAttribute('aria-disabled', 'true');
        }
    };
    DropDownTree.prototype.cloneFields = function (fields) {
        var clonedField = {
            dataSource: fields.dataSource, value: fields.value, text: fields.text, parentValue: fields.parentValue,
            child: this.cloneChildField(fields.child), hasChildren: fields.hasChildren, expanded: fields.expanded,
            iconCss: fields.iconCss, imageUrl: fields.imageUrl, htmlAttributes: fields.htmlAttributes, query: fields.query,
            selected: fields.selected, tableName: fields.tableName, tooltip: fields.tooltip
        };
        return clonedField;
    };
    DropDownTree.prototype.cloneChildField = function (fields) {
        if (typeof fields === 'string') {
            return fields;
        }
        else {
            var clonedField = {
                dataSource: fields.dataSource, value: fields.value, text: fields.text, parentValue: fields.parentValue,
                child: (fields.child ? this.cloneChildField(fields.child) : null), hasChildren: fields.hasChildren,
                expanded: fields.expanded, iconCss: fields.iconCss, imageUrl: fields.imageUrl, htmlAttributes: fields.htmlAttributes,
                query: fields.query, selected: fields.selected, tableName: fields.tableName, tooltip: fields.tooltip
            };
            return clonedField;
        }
    };
    DropDownTree.prototype.getTreeFields = function (fields) {
        var treeFields = {
            dataSource: fields.dataSource, id: fields.value, text: fields.text, parentID: fields.parentValue,
            child: this.getTreeChildren(fields.child), hasChildren: fields.hasChildren, expanded: fields.expanded,
            iconCss: fields.iconCss, imageUrl: fields.imageUrl, isChecked: fields.selected,
            htmlAttributes: fields.htmlAttributes, query: fields.query, selected: fields.selected,
            tableName: fields.tableName, tooltip: fields.tooltip
        };
        return treeFields;
    };
    DropDownTree.prototype.getTreeChildren = function (mapper) {
        if (typeof mapper === 'string') {
            return mapper;
        }
        else if (!isNOU(mapper)) {
            mapper = this.getActualProperties(mapper);
            var childFields = mapper;
            if (mapper.value) {
                childFields.id = mapper.value;
            }
            if (mapper.parentValue) {
                childFields.parentID = mapper.parentValue;
            }
            if (mapper.child) {
                childFields.child = this.getTreeChildren(mapper.child);
            }
            if (mapper.selected && this.showCheckBox) {
                childFields.isChecked = mapper.selected;
            }
            return childFields;
        }
        return null;
    };
    // eslint-disable-next-line
    DropDownTree.prototype.getTreeDataType = function (ds, field) {
        if (this.fields.dataSource instanceof DataManager) {
            for (var i = 0; i < ds.length; i++) {
                if ((typeof field.child === 'string') && isNOU(getValue(field.child, ds[i]))) {
                    return 1;
                }
            }
            return 2;
        }
        for (var i = 0, len = ds.length; i < len; i++) {
            if ((typeof field.child === 'string') && !isNOU(getValue(field.child, ds[i]))) {
                return 2;
            }
            if (!isNOU(getValue(field.parentValue, ds[i])) || !isNOU(getValue(field.hasChildren, ds[i]))) {
                return 1;
            }
        }
        return 1;
    };
    /* Triggers when the tree fields is changed dynamically */
    DropDownTree.prototype.setFields = function () {
        this.resetValue();
        if (this.hasTemplate) {
            this.updateTemplate();
        }
        this.treeObj.fields = this.getTreeFields(this.fields);
        this.treeObj.dataBind();
    };
    DropDownTree.prototype.getEventArgs = function (args) {
        // eslint-disable-next-line
        var checkData = args.data;
        // eslint-disable-next-line
        var selectData = args.nodeData;
        var state;
        if (this.showCheckBox) {
            if (args.action === 'check') {
                state = 'select';
            }
            else if (args.action === 'uncheck') {
                state = 'un-select';
            }
        }
        var eventArgs = {
            action: this.showCheckBox ? state : args.action,
            isInteracted: args.isInteracted,
            item: args.node,
            itemData: this.showCheckBox ? checkData[0] : selectData
        };
        return eventArgs;
    };
    DropDownTree.prototype.onBeforeSelect = function (args) {
        if (args.isInteracted) {
            this.oldValue = this.value ? this.value.slice() : this.value;
            if (this.value === null) {
                this.setProperties({ value: [] }, true);
            }
        }
    };
    DropDownTree.prototype.updateHiddenValue = function () {
        if (this.allowMultiSelection || this.showCheckBox) {
            return;
        }
        if (this.value && this.value.length) {
            this.hiddenElement.innerHTML = '<option selected value ="' + this.value[0] + '">' + this.text + '</option>';
        }
        else {
            this.hiddenElement.innerHTML = '';
        }
    };
    /* Triggers when the tree node is selected */
    DropDownTree.prototype.onNodeSelected = function (args) {
        if (this.showCheckBox) {
            return;
        }
        var selectedText;
        if (args.isInteracted) {
            var id = getValue('id', args.nodeData).toString();
            if (!this.allowMultiSelection) {
                this.hiddenElement.innerHTML = '';
                this.setProperties({ value: [id] }, true);
                if (this.itemTemplate) {
                    selectedText = getValue('text', this.treeObj.getNode(id));
                }
                else {
                    selectedText = getValue('text', args.nodeData).toString();
                }
                Input.setValue(selectedText, this.inputEle, this.floatLabelType);
                this.setProperties({ text: selectedText }, true);
                this.currentText = this.text;
                this.currentValue = this.value;
                attributes(this.inputWrapper, { 'aria-describedby': this.element.id });
                attributes(this.inputWrapper, { 'aria-activedescendant': id.toString() });
                this.updateHiddenValue();
                this.showOverAllClear();
                this.hidePopup();
                this.isNodeSelected = true;
            }
            else if (this.allowMultiSelection) {
                this.setMultiSelect();
            }
        }
        var eventArgs = this.getEventArgs(args);
        this.trigger('select', eventArgs);
        if (this.isValueChange && !this.changeOnBlur) {
            this.triggerChangeEvent(this.keyEventArgs);
            this.isValueChange = false;
        }
    };
    DropDownTree.prototype.onNodeClicked = function (args) {
        if (!this.changeOnBlur && this.isNodeSelected) {
            this.triggerChangeEvent(args.event);
            this.isNodeSelected = false;
        }
        var target = args.event.target;
        if ((target.classList.contains('e-fullrow') || target.classList.contains('e-list-text')) && this.showCheckBox) {
            // eslint-disable-next-line
            var getNodeDetails = this.treeObj.getNode(args.node);
            if (getNodeDetails.isChecked === 'true') {
                this.treeObj.uncheckAll([args.node]);
            }
            else {
                this.treeObj.checkAll([args.node]);
            }
            this.setMultiSelect();
            this.ensurePlaceHolder();
        }
        if (!this.changeOnBlur && (this.allowMultiSelection || this.showCheckBox)) {
            this.triggerChangeEvent(args.event);
        }
    };
    DropDownTree.prototype.onNodeChecked = function (args) {
        var eventArgs = this.getEventArgs(args);
        this.trigger('select', eventArgs);
        if (this.isFilteredData && args.action === 'uncheck') {
            var id = getValue('id', args.data[0]).toString();
            this.removeSelectedData(id, true);
        }
        if (!this.isChipDelete && args.isInteracted) {
            this.setMultiSelect();
            this.ensurePlaceHolder();
        }
        if (this.showSelectAll && this.checkBoxElement) {
            var nodes = this.treeObj.element.querySelectorAll('li');
            var checkedNodes = this.treeObj.element.querySelectorAll('li .e-checkbox-wrapper[aria-checked=true]');
            var wrap = closest(this.checkBoxElement, '.' + CHECKBOXWRAP);
            if (wrap && args.action === 'uncheck') {
                this.isReverseUpdate = true;
                this.changeState(wrap, 'uncheck');
                this.isReverseUpdate = false;
            }
            else if (wrap && args.action === 'check' && checkedNodes.length === nodes.length) {
                this.isReverseUpdate = true;
                this.changeState(wrap, 'check');
                this.isReverseUpdate = false;
            }
        }
    };
    DropDownTree.prototype.beforeCheck = function (args) {
        if (args.isInteracted) {
            this.oldValue = this.value ? this.value.slice() : this.value;
        }
    };
    DropDownTree.prototype.updateClearButton = function (state) {
        if (state) {
            if (!this.inputWrapper.contains(this.overAllClear)) {
                this.inputEle.parentElement.insertBefore(this.overAllClear, this.inputEle.nextSibling);
            }
            else {
                removeClass([this.overAllClear], HIDEICON);
                addClass([this.inputWrapper], SHOW_CLEAR);
            }
        }
        else {
            addClass([this.overAllClear], HIDEICON);
            removeClass([this.inputWrapper], SHOW_CLEAR);
        }
        if ((this.allowMultiSelection || this.showCheckBox) && this.chipWrapper) {
            var chipClose = selectAll('.' + CHIP_CLOSE, this.chipWrapper);
            for (var i = 0; i < chipClose.length; i++) {
                if (!state) {
                    addClass([chipClose[i]], HIDEICON);
                }
                else {
                    removeClass([chipClose[i]], HIDEICON);
                }
            }
        }
    };
    DropDownTree.prototype.updateDropDownIconState = function (state) {
        var spinIcon = select('.' + DDTICON, this.inputWrapper);
        if (state) {
            if (!spinIcon) {
                Input.appendSpan(DROPDOWNICON, this.inputWrapper, this.createElement);
            }
            else {
                removeClass([spinIcon], HIDEICON);
            }
            addClass([this.inputWrapper], SHOW_DD_ICON);
        }
        else {
            addClass([spinIcon], HIDEICON);
            removeClass([this.inputWrapper], SHOW_DD_ICON);
        }
    };
    DropDownTree.prototype.updateMode = function () {
        if (this.mode !== 'Delimiter') {
            if (!this.inputWrapper.contains(this.chipWrapper)) {
                this.createChip();
            }
            var isValid = this.getValidMode();
            if (this.chipWrapper.classList.contains(HIDEICON) && isValid) {
                removeClass([this.chipWrapper], HIDEICON);
                addClass([this.inputWrapper], SHOW_CHIP);
            }
            else if (!isValid) {
                addClass([this.chipWrapper], HIDEICON);
                removeClass([this.inputWrapper], SHOW_CHIP);
            }
            var isValue = this.value !== null ? (this.value.length !== 0 ? true : false) : false;
            if (isValid && isValue) {
                addClass([this.inputEle], CHIP_INPUT);
            }
            else {
                removeClass([this.inputEle], CHIP_INPUT);
            }
        }
        else if (this.inputEle.classList.contains(CHIP_INPUT)) {
            removeClass([this.inputEle], CHIP_INPUT);
            if (this.chipWrapper) {
                addClass([this.chipWrapper], HIDEICON);
                removeClass([this.inputWrapper], SHOW_CHIP);
            }
        }
    };
    DropDownTree.prototype.ensurePlaceHolder = function () {
        if (this.value && this.value.length === 0) {
            removeClass([this.inputEle], CHIP_INPUT);
            if (this.chipWrapper) {
                addClass([this.chipWrapper], HIDEICON);
            }
        }
    };
    DropDownTree.prototype.ensureClearIconPosition = function (floatLabelType) {
        if (floatLabelType !== 'Never') {
            this.inputWrapper.insertBefore(this.overAllClear, this.inputObj.buttons[0]);
        }
    };
    DropDownTree.prototype.setMultiSelectValue = function (newValues) {
        if (!this.isFilteredData) {
            this.setProperties({ value: newValues }, true);
            if (newValues && newValues.length !== 0 && !this.showCheckBox) {
                this.treeObj.selectedNodes = this.value.slice();
                this.treeObj.dataBind();
            }
        }
        else {
            var selectedValues = isNOU(this.value) ? [] : this.value;
            for (var i = 0; i < newValues.length; i++) {
                if (isNOU(this.value) || this.value.indexOf(newValues[i]) === -1) {
                    selectedValues.push(newValues[i]);
                }
            }
            this.setProperties({ value: selectedValues }, true);
        }
    };
    DropDownTree.prototype.setMultiSelect = function () {
        if (this.showCheckBox && !this.isDynamicChange) {
            this.setMultiSelectValue(this.treeObj.checkedNodes.slice());
        }
        else {
            var ddtValue = this.allowMultiSelection ? (this.showCheckBox ? this.treeObj.checkedNodes
                : this.treeObj.selectedNodes) : (this.value ? (this.showCheckBox ? this.value : [this.value[0]]) : null);
            this.setMultiSelectValue(ddtValue);
            if (this.showCheckBox && this.value !== null) {
                this.treeObj.checkedNodes = this.value;
                this.treeObj.dataBind();
            }
        }
        this.selectedText = [];
        var checkSelection = this.allowMultiSelection ? true : (this.showCheckBox ? true : false);
        if (this.inputWrapper.contains(this.chipWrapper) && !checkSelection) {
            removeClass([this.inputEle], CHIP_INPUT);
            detach(this.chipWrapper);
        }
        var isValid = this.getValidMode();
        if (isValid && this.value !== null) {
            addClass([this.inputEle], CHIP_INPUT);
            if (this.chipWrapper) {
                removeClass([this.chipWrapper], HIDEICON);
            }
        }
        var isValue = this.value ? (this.value.length ? true : false) : false;
        if (this.chipWrapper && (this.mode === 'Box' && !isValue)) {
            addClass([this.chipWrapper], HIDEICON);
            removeClass([this.inputEle], CHIP_INPUT);
        }
        this.updateSelectedValues();
    };
    // eslint-disable-next-line
    DropDownTree.prototype.getSelectedData = function (value) {
        // eslint-disable-next-line
        var data = null;
        if (this.isFilteredData) {
            for (var i = 0; i < this.selectedData.length; i++) {
                if (getValue(this.treeSettings.loadOnDemand ? this.fields.value : 'id', this.selectedData[i]).toString() === value) {
                    data = this.selectedData[i];
                    break;
                }
            }
        }
        if (isNOU(data)) {
            if (this.treeSettings.loadOnDemand) {
                data = this.treeObj.getTreeData(value)[0];
            }
            else {
                data = this.treeObj.getNode(value);
            }
            if (!isNOU(data)) {
                this.selectedData.push(data);
            }
        }
        return data;
    };
    DropDownTree.prototype.removeSelectedData = function (value, muteOnChange) {
        var selectedValues = isNOU(this.value) ? [] : this.value.slice();
        selectedValues.splice(selectedValues.indexOf(value), 1);
        this.setProperties({ value: selectedValues }, muteOnChange);
        for (var i = 0; i < this.selectedData.length; i++) {
            if (getValue(this.treeSettings.loadOnDemand ? this.fields.value : 'id', this.selectedData[i]).toString() === value) {
                this.selectedData.splice(i, 1);
                break;
            }
        }
    };
    DropDownTree.prototype.updateSelectedValues = function () {
        this.dataValue = '';
        var temp;
        var text;
        var textValue = '';
        // eslint-disable-next-line
        var selectedData;
        this.hiddenElement.innerHTML = '';
        if ((!this.isChipDelete || this.treeSettings.autoCheck) && (this.inputWrapper.contains(this.chipWrapper))) {
            this.chipCollection.innerHTML = '';
        }
        if (!this.isFilteredData) {
            this.selectedData = [];
        }
        if (!isNOU(this.value)) {
            for (var i = 0, len = this.value.length; i < len; i++) {
                selectedData = this.getSelectedData(this.value[i]);
                text = getValue(this.treeSettings.loadOnDemand ? this.fields.text : 'text', selectedData);
                this.selectedText.push(text);
                temp = this.selectedText[this.selectedText.length - 1];
                if (this.selectedText.length > 1) {
                    this.dataValue += (this.delimiterChar + ' ' + temp);
                    textValue += (',' + temp);
                    this.setProperties({ text: textValue }, true);
                }
                else {
                    this.dataValue += temp;
                    textValue += temp;
                }
                if (this.mode !== 'Delimiter' && (!this.isChipDelete || this.treeSettings.autoCheck) &&
                    (this.allowMultiSelection || this.showCheckBox)) {
                    this.setChipValues(temp, this.value[i]);
                }
                this.hiddenElement.innerHTML += '<option selected value ="' + this.value[i] + '">' +
                    this.selectedText[this.selectedText.length - 1] + '</option>';
            }
        }
        var isValid = this.getValidMode();
        if (this.mode !== 'Box' && (this.allowMultiSelection || this.showCheckBox) && !isValid) {
            if (this.chipWrapper) {
                addClass([this.chipWrapper], HIDEICON);
                removeClass([this.inputWrapper], SHOW_CHIP);
            }
        }
        Input.setValue(this.dataValue, this.inputEle, this.floatLabelType);
        if (textValue === '') {
            this.setProperties({ text: null }, true);
        }
        else {
            this.setProperties({ text: textValue }, true);
        }
        if (this.showClearButton && this.inputFocus) {
            this.showOverAllClear();
        }
        if ((this.allowMultiSelection || this.showCheckBox) && this.popupObj) {
            this.popupObj.refreshPosition();
        }
        this.currentText = this.text;
        this.currentValue = this.value;
    };
    DropDownTree.prototype.setChipValues = function (text, value) {
        if (!this.inputWrapper.contains(this.chipWrapper)) {
            this.createChip();
        }
        var chip = this.createElement('span', {
            className: CHIP,
            attrs: { 'data-value': value }
        });
        var chipContent = this.createElement('span', { className: CHIP_CONTENT });
        var chipClose = this.createElement('span', { className: CHIP_CLOSE + ' ' + ICONS });
        chipContent.innerHTML = text;
        chip.appendChild(chipContent);
        this.chipCollection.appendChild(chip);
        if (this.showClearButton) {
            chip.appendChild(chipClose);
            EventHandler.add(chipClose, 'mousedown', this.removeChip, this);
        }
    };
    DropDownTree.prototype.setSelectAllWrapper = function (state) {
        if (this.isFirstRender) {
            return;
        }
        if (state && !this.popupEle.contains(this.checkAllParent) && this.showCheckBox) {
            this.createSelectAllWrapper();
            this.popupEle.insertBefore(this.checkAllParent, this.popupDiv);
        }
        else if (this.popupEle.contains(this.checkAllParent)) {
            detach(this.checkAllParent);
            this.checkAllParent = null;
        }
    };
    DropDownTree.prototype.setHeaderTemplate = function () {
        if (this.header) {
            this.header.innerHTML = '';
        }
        else {
            this.header = this.createElement('div');
            addClass([this.header], HEADER);
        }
        // eslint-disable-next-line
        var compiledString = this.templateComplier(this.headerTemplate);
        var tempArr = compiledString({}, this, 'headerTemplate', this.headerTemplateId, this.isStringTemplate, undefined, this.header);
        if (tempArr) {
            tempArr = Array.prototype.slice.call(tempArr);
            append(tempArr, this.header);
        }
        this.ddtupdateBlazorTemplates(false, false, true, false);
        this.popupEle.insertBefore(this.header, this.checkAllParent ? this.checkAllParent : this.popupDiv);
    };
    // eslint-disable-next-line
    DropDownTree.prototype.templateComplier = function (template) {
        if (template) {
            // eslint-disable-next-line
            var e = void 0;
            try {
                if (document.querySelectorAll(template).length) {
                    return compile(document.querySelector(template).innerHTML.trim());
                }
            }
            catch (e) {
                return compile(template);
            }
        }
        return compile(template);
    };
    DropDownTree.prototype.setFooterTemplate = function () {
        if (this.footer) {
            this.footer.innerHTML = '';
        }
        else {
            this.footer = this.createElement('div');
            addClass([this.footer], FOOTER);
        }
        // eslint-disable-next-line
        var compiledString = this.templateComplier(this.footerTemplate);
        var tempArr = compiledString({}, this, 'footerTemplate', this.footerTemplateId, this.isStringTemplate, undefined, this.footer);
        if (tempArr) {
            tempArr = Array.prototype.slice.call(tempArr);
            append(tempArr, this.footer);
        }
        this.ddtupdateBlazorTemplates(false, false, false, true);
        append([this.footer], this.popupEle);
    };
    DropDownTree.prototype.clearAll = function (e) {
        if (!this.enabled || this.readonly) {
            return;
        }
        this.resetValue();
        this.showOverAllClear();
        if ((this.allowMultiSelection || this.showCheckBox)) {
            if (this.popupObj) {
                this.popupObj.refreshPosition();
            }
            if (!this.wrapText) {
                this.updateOverflowWrapper(true);
            }
        }
        if (e) {
            this.isClearButtonClick = true;
        }
        if (!this.changeOnBlur) {
            this.triggerChangeEvent(e);
        }
    };
    DropDownTree.prototype.removeChip = function (e) {
        if (!this.enabled || this.readonly) {
            return;
        }
        var element = e.target.parentElement;
        var value = element.getAttribute('data-value');
        if (this.chipCollection) {
            if (element) {
                remove(element);
            }
        }
        this.isChipDelete = true;
        this.isClearButtonClick = true;
        this.removeSelectedData(value, true);
        this.selectedText = [];
        if (this.allowMultiSelection) {
            this.treeObj.selectedNodes = this.value.slice();
            this.updateSelectedValues();
        }
        if (this.showCheckBox) {
            this.treeObj.uncheckAll([value]);
            this.clearCheckAll();
            this.setMultiSelect();
        }
        this.triggerChangeEvent(e);
        this.isChipDelete = false;
        this.ensurePlaceHolder();
    };
    DropDownTree.prototype.resetValue = function (isDynamicChange) {
        Input.setValue(null, this.inputEle, this.floatLabelType);
        if (!isDynamicChange) {
            this.oldValue = this.value;
            this.setProperties({ value: [] }, true);
        }
        this.dataValue = null;
        this.setProperties({ text: null }, true);
        this.selectedData = [];
        setValue('selectedNodes', [], this.treeObj);
        this.hiddenElement.innerHTML = '';
        if (this.showCheckBox) {
            this.treeObj.uncheckAll();
            this.setMultiSelect();
            this.clearCheckAll();
        }
        if (this.oldValue === null && !isDynamicChange) {
            this.removeValue = true;
        }
        else if (isDynamicChange) {
            this.triggerChangeEvent();
        }
        if ((this.allowMultiSelection || this.showCheckBox) && this.chipWrapper) {
            this.chipCollection.innerHTML = '';
            if (!this.wrapText) {
                this.updateOverflowWrapper(true);
            }
            this.ensurePlaceHolder();
        }
    };
    DropDownTree.prototype.clearCheckAll = function () {
        if (this.showSelectAll && this.value && this.value.length === 0) {
            this.setLocale(false);
        }
    };
    DropDownTree.prototype.selectAllItems = function (state) {
        if (this.showCheckBox) {
            if (state) {
                this.treeObj.checkAll();
            }
            else {
                this.treeObj.uncheckAll();
            }
            this.checkSelectAll = true;
        }
        else if (this.allowMultiSelection) {
            if (!state) {
                this.treeObj.selectedNodes = [];
            }
            else {
                var li = selectAll('li', this.treeObj.element);
                var id = void 0;
                var arr = [];
                for (var i = 0; i < li.length; i++) {
                    id = li[i].getAttribute('data-uid').toString();
                    arr.push(id);
                }
                this.treeObj.selectedNodes = arr;
            }
        }
        this.updateMode();
        this.setMultiSelect();
        if (!this.wrapText) {
            if (state) {
                this.updateView();
            }
            else {
                this.updateOverflowWrapper(true);
            }
        }
    };
    DropDownTree.prototype.updateTreeSettings = function (prop) {
        var value = Object.keys(prop.treeSettings)[0];
        if (value === 'autoCheck') {
            this.ensureAutoCheck();
            this.treeObj.autoCheck = this.treeSettings.autoCheck;
        }
        else if (value === 'loadOnDemand') {
            this.treeObj.loadOnDemand = this.treeSettings.loadOnDemand;
        }
        else if (value === 'expandOn') {
            this.treeObj.expandOn = this.treeSettings.expandOn;
            this.treeObj.dataBind();
            return;
        }
        this.treeObj.dataBind();
        this.setMultiSelect();
        this.updateValue(this.value);
    };
    DropDownTree.prototype.updateCheckBoxState = function (checkBox) {
        if (this.hasTemplate) {
            this.updateTemplate();
        }
        if (!this.wrapText) {
            this.updateOverflowWrapper(false);
        }
        this.treeObj.showCheckBox = checkBox;
        this.treeObj.dataBind();
        this.isDynamicChange = true;
        this.setSelectAllWrapper(this.showSelectAll);
        if (this.showSelectAll) {
            this.setLocale();
        }
        if (this.showCheckBox) {
            this.updateMode();
        }
        this.setMultiSelect();
        this.isDynamicChange = false;
    };
    DropDownTree.prototype.updateTemplate = function () {
        if (this.popupObj) {
            this.clearTemplate();
            /* eslint-disable */
            this.portals = [];
            /* eslint-enable */
            this.popupObj.destroy();
            if (this.isPopupOpen) {
                this.hidePopup();
                this.isFirstRender = true;
                this.renderPopup();
            }
            else {
                this.isFirstRender = true;
            }
        }
    };
    DropDownTree.prototype.l10nUpdate = function (actionFailure) {
        if (this.noRecord) {
            this.noRecord.innerHTML = '';
        }
        else {
            this.noRecord = this.createElement('div');
            addClass([this.noRecord], NODATACONTAINER);
            prepend([this.noRecord], this.popupDiv);
        }
        if (this.noRecordsTemplate !== 'No Records Found' || this.actionFailureTemplate !== 'The Request Failed') {
            var template = actionFailure ? this.actionFailureTemplate : this.noRecordsTemplate;
            var templateId = actionFailure ? this.actionFailureTemplateId : this.noRecordsTemplateId;
            var templatestring = actionFailure ? 'actionFailureTemplate' : 'noRecordsTemplate';
            // eslint-disable-next-line
            var compiledString = this.templateComplier(template);
            var tempArr = compiledString({}, this, templatestring, templateId, this.isStringTemplate, undefined, this.noRecord);
            if (tempArr) {
                tempArr = Array.prototype.slice.call(tempArr);
                append(tempArr, this.noRecord);
            }
            this.ddtupdateBlazorTemplates(!actionFailure, actionFailure);
        }
        else {
            // eslint-disable-next-line
            var l10nLocale = { noRecordsTemplate: 'No Records Found', actionFailureTemplate: 'The Request Failed' };
            this.l10n = new L10n(this.getLocaleName(), l10nLocale, this.locale);
            this.noRecord.innerHTML = actionFailure ?
                this.l10n.getConstant('actionFailureTemplate') : this.l10n.getConstant('noRecordsTemplate');
        }
    };
    DropDownTree.prototype.ddtupdateBlazorTemplates = function (noRecord, action, header, footer, isEmpty) {
        if (!this.isStringTemplate) {
            if (this.noRecordsTemplate && noRecord) {
                updateBlazorTemplate(this.noRecordsTemplateId, NORECORDSTEMPLATE, this, isEmpty);
            }
            if (this.actionFailureTemplate && action) {
                updateBlazorTemplate(this.actionFailureTemplateId, ACTIONFAILURETEMPLATE, this, isEmpty);
            }
            if (header) {
                updateBlazorTemplate(this.headerTemplateId, HEADERTEMPLATE, this);
            }
            if (footer) {
                updateBlazorTemplate(this.footerTemplateId, FOOTERTEMPLATE, this);
            }
        }
    };
    DropDownTree.prototype.ddtresetBlazorTemplates = function (noRecord, action, header, footer) {
        if (!this.isStringTemplate) {
            if (this.noRecordsTemplate && noRecord) {
                resetBlazorTemplate(this.noRecordsTemplateId, NORECORDSTEMPLATE);
            }
            if (this.actionFailureTemplate && action) {
                resetBlazorTemplate(this.actionFailureTemplateId, ACTIONFAILURETEMPLATE);
            }
            if (header) {
                resetBlazorTemplate(this.headerTemplateId, HEADERTEMPLATE);
            }
            if (footer) {
                resetBlazorTemplate(this.footerTemplateId, FOOTERTEMPLATE);
            }
        }
    };
    DropDownTree.prototype.updateRecordTemplate = function (action) {
        if (this.treeItems && this.treeItems.length <= 0) {
            this.l10nUpdate(action);
            if (this.hasTemplate) {
                this.updateTemplate();
            }
        }
    };
    DropDownTree.prototype.updateOverflowWrapper = function (state) {
        if (!state) {
            if (!this.inputWrapper.contains(this.overFlowWrapper)) {
                this.overFlowWrapper = this.createElement('span', { className: OVERFLOW_VIEW + ' ' + HIDEICON });
                this.inputWrapper.insertBefore(this.overFlowWrapper, this.hiddenElement);
            }
        }
        else if (this.inputWrapper.contains(this.overFlowWrapper) && state) {
            this.overFlowWrapper.innerHTML = '';
        }
    };
    DropDownTree.prototype.updateMultiSelection = function (state) {
        if (!this.wrapText) {
            this.updateOverflowWrapper(false);
        }
        this.treeObj.allowMultiSelection = state;
        this.treeObj.dataBind();
        this.updateOption();
        if (this.allowMultiSelection) {
            this.updateMode();
        }
        this.setMultiSelect();
    };
    DropDownTree.prototype.updateAllowFiltering = function (state) {
        if (!this.isFirstRender) {
            if (state) {
                this.renderFilter();
            }
            else {
                this.destroyFilter();
            }
        }
        this.ensureAutoCheck();
    };
    DropDownTree.prototype.updateFilterPlaceHolder = function () {
        if (this.filterObj) {
            this.filterObj.placeholder = this.filterBarPlaceholder;
            this.filterObj.element.setAttribute('aria-label', this.filterBarPlaceholder);
        }
    };
    DropDownTree.prototype.updateValue = function (value) {
        this.isDynamicChange = true;
        if (isNOU(value) || value.length === 0) {
            this.resetValue(true);
        }
        else {
            this.setTreeValue();
            if ((this.allowMultiSelection || this.showCheckBox) && !this.wrapText) {
                this.updateOverflowWrapper(false);
                this.updateView();
            }
        }
        this.updateHiddenValue();
        this.isDynamicChange = false;
    };
    DropDownTree.prototype.updateText = function (text) {
        if (isNOU(text)) {
            this.resetValue();
        }
        else {
            this.setTreeText();
            if ((this.allowMultiSelection || this.showCheckBox) && !this.wrapText) {
                this.updateOverflowWrapper(false);
                this.updateView();
            }
        }
        this.updateHiddenValue();
    };
    DropDownTree.prototype.updateModelMode = function () {
        var validMode = this.allowMultiSelection ? true : (this.showCheckBox ? true : false);
        if (!validMode) {
            return;
        }
        if (!this.wrapText) {
            var overFlow = select('.' + OVERFLOW_VIEW, this.inputWrapper);
            if (overFlow) {
                overFlow.innerHTML = '';
            }
        }
        this.updateMode();
        this.setMultiSelect();
        if (!this.wrapText && (this.value && this.value.length !== 0)) {
            this.updateOverFlowView();
            addClass([this.inputEle], CHIP_INPUT);
            if (this.mode === 'Box') {
                removeClass([this.overFlowWrapper, this.inputWrapper], SHOW_TEXT);
            }
            else {
                addClass([this.overFlowWrapper, this.inputWrapper], SHOW_TEXT);
            }
        }
    };
    DropDownTree.prototype.updateOption = function () {
        if (!this.hiddenElement.hasAttribute('multiple') && (this.allowMultiSelection || this.showCheckBox)) {
            this.hiddenElement.setAttribute('multiple', '');
        }
        else if (this.hiddenElement.hasAttribute('multiple') && (!this.allowMultiSelection && !this.showCheckBox)) {
            this.hiddenElement.removeAttribute('multiple');
        }
    };
    /**
     * Dynamically change the value of properties.
     *
     * @param {DropDownTreeModel} newProp - specifies the newProp value.
     * @param {DropDownTreeModel} oldProp - specifies the newProp value.
     * @returns {void}
     * @private
     */
    DropDownTree.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'width':
                    this.setElementWidth(newProp.width);
                    if (this.popupObj) {
                        this.popupObj.element.style.width = this.setWidth();
                    }
                    break;
                case 'placeholder':
                    Input.setPlaceholder(newProp.placeholder, this.inputEle);
                    break;
                case 'cssClass':
                    this.setCssClass(newProp.cssClass, oldProp.cssClass);
                    break;
                case 'enableRtl':
                    this.setEnableRTL(this.enableRtl);
                    break;
                case 'fields':
                    this.setFields();
                    break;
                case 'readonly':
                    Input.setReadonly(newProp.readonly, this.inputEle);
                    break;
                case 'enabled':
                    this.setEnable();
                    break;
                case 'floatLabelType':
                    Input.removeFloating(this.inputObj);
                    Input.addFloating(this.inputEle, newProp.floatLabelType, this.placeholder, this.createElement);
                    this.ensureClearIconPosition(newProp.floatLabelType);
                    break;
                case 'showClearButton':
                    this.updateClearButton(newProp.showClearButton);
                    break;
                case 'allowFiltering':
                    this.updateAllowFiltering(newProp.allowFiltering);
                    break;
                case 'filterBarPlaceholder':
                    this.updateFilterPlaceHolder();
                    break;
                case 'value':
                    this.oldValue = oldProp.value;
                    this.updateValue(newProp.value);
                    break;
                case 'text':
                    this.updateText(newProp.text);
                    break;
                case 'allowMultiSelection':
                    this.updateMultiSelection(newProp.allowMultiSelection);
                    break;
                case 'mode':
                    this.updateModelMode();
                    break;
                case 'delimiterChar':
                    if (this.mode === 'Box') {
                        return;
                    }
                    if (this.showCheckBox || this.allowMultiSelection) {
                        this.setMultiSelect();
                    }
                    break;
                case 'selectAllText':
                    if (this.showCheckBox && this.showSelectAll) {
                        this.setLocale();
                    }
                    break;
                case 'unSelectAllText':
                    if (this.showCheckBox && this.showSelectAll) {
                        this.setLocale(false);
                    }
                    break;
                case 'showSelectAll':
                    if (this.showCheckBox) {
                        this.setSelectAllWrapper(newProp.showSelectAll);
                        this.updatePopupHeight();
                    }
                    break;
                case 'showCheckBox':
                    this.updateCheckBoxState(newProp.showCheckBox);
                    if (!this.wrapText) {
                        this.updateOverflowWrapper(true);
                    }
                    this.updatePopupHeight();
                    this.updateOption();
                    break;
                case 'treeSettings':
                    this.updateTreeSettings(newProp);
                    break;
                case 'sortOrder':
                    if (this.hasTemplate) {
                        this.updateTemplate();
                    }
                    this.treeObj.sortOrder = newProp.sortOrder;
                    this.updateValue(this.value);
                    this.treeObj.dataBind();
                    break;
                case 'showDropDownIcon':
                    this.updateDropDownIconState(newProp.showDropDownIcon);
                    break;
                case 'popupWidth':
                    if (this.popupObj) {
                        this.popupObj.element.style.width = this.setWidth();
                    }
                    break;
                case 'popupHeight':
                    if (this.popupObj) {
                        this.updatePopupHeight();
                    }
                    break;
                case 'zIndex':
                    if (this.popupObj) {
                        this.popupObj.zIndex = newProp.zIndex;
                        this.popupObj.dataBind();
                    }
                    break;
                case 'headerTemplate':
                    this.updateTemplate();
                    break;
                case 'footerTemplate':
                    this.updateTemplate();
                    break;
                case 'itemTemplate':
                    this.updateTemplate();
                    this.treeObj.nodeTemplate = newProp.itemTemplate;
                    this.treeObj.dataBind();
                    break;
                case 'noRecordsTemplate':
                    this.updateRecordTemplate();
                    break;
                case 'actionFailureTemplate':
                    this.updateRecordTemplate(true);
                    break;
                case 'htmlAttributes':
                    this.setHTMLAttributes();
                    break;
                case 'wrapText':
                    this.updateOverflowWrapper(this.wrapText);
                    if ((this.allowMultiSelection || this.showCheckBox) && !this.wrapText) {
                        this.updateView();
                    }
                    else {
                        addClass([this.overFlowWrapper], HIDEICON);
                        if (this.chipWrapper && this.mode === 'Box') {
                            removeClass([this.chipWrapper], HIDEICON);
                        }
                        else {
                            removeClass([this.inputWrapper], SHOW_CHIP);
                            removeClass([this.inputEle], CHIP_INPUT);
                        }
                        this.ensurePlaceHolder();
                    }
                    break;
            }
        }
    };
    /**
     * Allows you to clear the selected values from the Dropdown Tree component.
     *
     * @method clear
     * @returns {void}
     */
    DropDownTree.prototype.clear = function () {
        this.clearAll();
        if (this.inputFocus) {
            this.onFocusOut();
        }
        else {
            if (this.changeOnBlur) {
                this.triggerChangeEvent();
            }
            this.removeValue = false;
        }
    };
    /**
     * Removes the component from the DOM and detaches all its related event handlers. Also, it removes the attributes and classes.
     *
     * @method destroy
     * @returns {void}
     */
    DropDownTree.prototype.destroy = function () {
        this.ddtresetBlazorTemplates(true, true, true, true);
        this.clearTemplate();
        this.unWireEvents();
        this.setCssClass(null, this.cssClass);
        this.resetValue();
        this.treeObj.destroy();
        this.destroyFilter();
        if (this.popupObj) {
            this.popupObj.destroy();
            detach(this.popupObj.element);
        }
        if (this.element.tagName !== this.getDirective()) {
            this.inputWrapper.parentElement.insertBefore(this.element, this.inputWrapper);
        }
        detach(this.inputWrapper);
        detach(this.popupDiv);
        this.element.classList.remove('e-input');
        _super.prototype.destroy.call(this);
    };
    DropDownTree.prototype.destroyFilter = function () {
        if (this.filterObj) {
            this.filterObj.destroy();
            detach(this.filterObj.element);
            detach(this.filterContainer);
            this.filterObj = null;
        }
    };
    /**
     * Ensures visibility of the Dropdown Tree item by using item value or item element.
     * If many Dropdown Tree items are present, and we are in need to find a particular item, then the `ensureVisible` property
     * helps you to bring the item to visibility by expanding the Dropdown Tree and scrolling to the specific item.
     *
     * @param  {string | Element} item - Specifies the value of Dropdown Tree item/ Dropdown Tree item element.
     * @returns {void}
     */
    DropDownTree.prototype.ensureVisible = function (item) {
        this.treeObj.ensureVisible(item);
    };
    /**
     * To get the updated data source of the Dropdown Tree.
     *
     * @param  {string | Element} item - Specifies the value of Dropdown Tree item/ Dropdown Tree item element
     * @returns {'{[key: string]: Object }[]'} - returns the updated data source of the Dropdown Tree.
     */
    // eslint-disable-next-line
    DropDownTree.prototype.getData = function (item) {
        return this.treeObj.getTreeData(item);
    };
    /**
     * Close the Dropdown tree pop-up.
     *
     * @returns {void}
     */
    DropDownTree.prototype.hidePopup = function () {
        var eventArgs = { popup: this.popupObj };
        this.inputWrapper.classList.remove(ICONANIMATION);
        if (this.popupEle) {
            this.popupEle.style.display = 'none';
        }
        attributes(this.inputWrapper, { 'aria-expanded': 'false' });
        if (this.popupObj && this.isPopupOpen) {
            this.popupObj.hide();
            if (this.inputFocus) {
                this.inputWrapper.focus();
                if (this.allowFiltering) {
                    addClass([this.inputWrapper], [INPUTFOCUS]);
                }
            }
            this.trigger('close', eventArgs);
        }
    };
    /**
     * Based on the state parameter, entire list item will be selected or deselected.
     *
     * @param {boolean} state - Unselects/Selects entire Dropdown Tree items.
     * @returns {void}
     *
     */
    DropDownTree.prototype.selectAll = function (state) {
        this.selectAllItems(state);
    };
    /**
     * Opens the popup that displays the Dropdown Tree items.
     *
     * @returns {void}
     */
    DropDownTree.prototype.showPopup = function () {
        if (!this.enabled || this.readonly || this.isPopupOpen) {
            return;
        }
        this.renderPopup();
        this.focusIn();
    };
    /**
     * Return the module name.
     *
     * @private
     * @returns {string} - returns the module name.
     */
    DropDownTree.prototype.getModuleName = function () {
        return 'dropdowntree';
    };
    __decorate([
        Property('The Request Failed')
    ], DropDownTree.prototype, "actionFailureTemplate", void 0);
    __decorate([
        Property(false)
    ], DropDownTree.prototype, "allowFiltering", void 0);
    __decorate([
        Property(false)
    ], DropDownTree.prototype, "allowMultiSelection", void 0);
    __decorate([
        Property(true)
    ], DropDownTree.prototype, "changeOnBlur", void 0);
    __decorate([
        Property('')
    ], DropDownTree.prototype, "cssClass", void 0);
    __decorate([
        Property(',')
    ], DropDownTree.prototype, "delimiterChar", void 0);
    __decorate([
        Property(true)
    ], DropDownTree.prototype, "enabled", void 0);
    __decorate([
        Complex({}, Fields)
    ], DropDownTree.prototype, "fields", void 0);
    __decorate([
        Property(null)
    ], DropDownTree.prototype, "filterBarPlaceholder", void 0);
    __decorate([
        Property('StartsWith')
    ], DropDownTree.prototype, "filterType", void 0);
    __decorate([
        Property('Never')
    ], DropDownTree.prototype, "floatLabelType", void 0);
    __decorate([
        Property(null)
    ], DropDownTree.prototype, "footerTemplate", void 0);
    __decorate([
        Property(false)
    ], DropDownTree.prototype, "ignoreAccent", void 0);
    __decorate([
        Property(true)
    ], DropDownTree.prototype, "ignoreCase", void 0);
    __decorate([
        Property(null)
    ], DropDownTree.prototype, "headerTemplate", void 0);
    __decorate([
        Property({})
    ], DropDownTree.prototype, "htmlAttributes", void 0);
    __decorate([
        Property(null)
    ], DropDownTree.prototype, "itemTemplate", void 0);
    __decorate([
        Property('Default')
    ], DropDownTree.prototype, "mode", void 0);
    __decorate([
        Property('No Records Found')
    ], DropDownTree.prototype, "noRecordsTemplate", void 0);
    __decorate([
        Property(null)
    ], DropDownTree.prototype, "placeholder", void 0);
    __decorate([
        Property('300px')
    ], DropDownTree.prototype, "popupHeight", void 0);
    __decorate([
        Property('100%')
    ], DropDownTree.prototype, "popupWidth", void 0);
    __decorate([
        Property(false)
    ], DropDownTree.prototype, "readonly", void 0);
    __decorate([
        Property(false)
    ], DropDownTree.prototype, "showSelectAll", void 0);
    __decorate([
        Property('Select All')
    ], DropDownTree.prototype, "selectAllText", void 0);
    __decorate([
        Property(false)
    ], DropDownTree.prototype, "showCheckBox", void 0);
    __decorate([
        Property(true)
    ], DropDownTree.prototype, "showClearButton", void 0);
    __decorate([
        Property(true)
    ], DropDownTree.prototype, "showDropDownIcon", void 0);
    __decorate([
        Property('None')
    ], DropDownTree.prototype, "sortOrder", void 0);
    __decorate([
        Property(null)
    ], DropDownTree.prototype, "text", void 0);
    __decorate([
        Complex({}, TreeSettings)
    ], DropDownTree.prototype, "treeSettings", void 0);
    __decorate([
        Property('Unselect All')
    ], DropDownTree.prototype, "unSelectAllText", void 0);
    __decorate([
        Property(null)
    ], DropDownTree.prototype, "value", void 0);
    __decorate([
        Property('100%')
    ], DropDownTree.prototype, "width", void 0);
    __decorate([
        Property(1000)
    ], DropDownTree.prototype, "zIndex", void 0);
    __decorate([
        Property(false)
    ], DropDownTree.prototype, "wrapText", void 0);
    __decorate([
        Event()
    ], DropDownTree.prototype, "actionFailure", void 0);
    __decorate([
        Event()
    ], DropDownTree.prototype, "beforeOpen", void 0);
    __decorate([
        Event()
    ], DropDownTree.prototype, "change", void 0);
    __decorate([
        Event()
    ], DropDownTree.prototype, "close", void 0);
    __decorate([
        Event()
    ], DropDownTree.prototype, "blur", void 0);
    __decorate([
        Event()
    ], DropDownTree.prototype, "created", void 0);
    __decorate([
        Event()
    ], DropDownTree.prototype, "dataBound", void 0);
    __decorate([
        Event()
    ], DropDownTree.prototype, "destroyed", void 0);
    __decorate([
        Event()
    ], DropDownTree.prototype, "filtering", void 0);
    __decorate([
        Event()
    ], DropDownTree.prototype, "focus", void 0);
    __decorate([
        Event()
    ], DropDownTree.prototype, "keyPress", void 0);
    __decorate([
        Event()
    ], DropDownTree.prototype, "open", void 0);
    __decorate([
        Event()
    ], DropDownTree.prototype, "select", void 0);
    DropDownTree = __decorate([
        NotifyPropertyChanges
    ], DropDownTree);
    return DropDownTree;
}(Component));
export { DropDownTree };
