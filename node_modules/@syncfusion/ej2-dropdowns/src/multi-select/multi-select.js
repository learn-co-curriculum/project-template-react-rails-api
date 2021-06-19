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
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path='../drop-down-base/drop-down-base-model.d.ts'/>
import { DropDownBase, dropDownBaseClasses } from '../drop-down-base/drop-down-base';
import { FieldSettings } from '../drop-down-base/drop-down-base';
import { Popup, createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
import { attributes, setValue, SanitizeHtmlHelper, getValue } from '@syncfusion/ej2-base';
import { NotifyPropertyChanges, extend } from '@syncfusion/ej2-base';
import { EventHandler, Property, Event, compile, L10n } from '@syncfusion/ej2-base';
import { Animation, Browser, prepend, isBlazor, Complex } from '@syncfusion/ej2-base';
import { Search } from '../common/incremental-search';
import { append, addClass, removeClass, closest, detach, remove, select, selectAll } from '@syncfusion/ej2-base';
import { getUniqueID, formatUnit, isNullOrUndefined, isUndefined } from '@syncfusion/ej2-base';
import { DataManager, Query, Predicate } from '@syncfusion/ej2-data';
import { createFloatLabel, removeFloating, floatLabelFocus, floatLabelBlur } from './float-label';
var FOCUS = 'e-input-focus';
var DISABLED = 'e-disabled';
var OVER_ALL_WRAPPER = 'e-multiselect e-input-group e-control-wrapper';
var ELEMENT_WRAPPER = 'e-multi-select-wrapper';
var ELEMENT_MOBILE_WRAPPER = 'e-mob-wrapper';
var HIDE_LIST = 'e-hide-listitem';
var DELIMITER_VIEW = 'e-delim-view';
var CHIP_WRAPPER = 'e-chips-collection';
var CHIP = 'e-chips';
var CHIP_CONTENT = 'e-chipcontent';
var CHIP_CLOSE = 'e-chips-close';
var CHIP_SELECTED = 'e-chip-selected';
var SEARCHBOX_WRAPPER = 'e-searcher';
var DELIMITER_VIEW_WRAPPER = 'e-delimiter';
var ZERO_SIZE = 'e-zero-size';
var REMAIN_WRAPPER = 'e-remain';
var CLOSEICON_CLASS = 'e-chips-close e-close-hooker';
var DELIMITER_WRAPPER = 'e-delim-values';
var POPUP_WRAPPER = 'e-ddl e-popup e-multi-select-list-wrapper';
var INPUT_ELEMENT = 'e-dropdownbase';
var RTL_CLASS = 'e-rtl';
var CLOSE_ICON_HIDE = 'e-close-icon-hide';
var MOBILE_CHIP = 'e-mob-chip';
var FOOTER = 'e-ddl-footer';
var HEADER = 'e-ddl-header';
var DISABLE_ICON = 'e-ddl-disable-icon';
var SPINNER_CLASS = 'e-ms-spinner-icon';
var HIDDEN_ELEMENT = 'e-multi-hidden';
var destroy = 'destroy';
var dropdownIcon = 'e-input-group-icon e-ddl-icon';
var iconAnimation = 'e-icon-anim';
var TOTAL_COUNT_WRAPPER = 'e-delim-total';
var BOX_ELEMENT = 'e-multiselect-box';
var FILTERPARENT = 'e-filter-parent';
var CUSTOM_WIDTH = 'e-search-custom-width';
/**
 * The Multiselect allows the user to pick a more than one value from list of predefined values.
 * ```html
 * <select id="list">
 *      <option value='1'>Badminton</option>
 *      <option value='2'>Basketball</option>
 *      <option value='3'>Cricket</option>
 *      <option value='4'>Football</option>
 *      <option value='5'>Tennis</option>
 * </select>
 * ```
 * ```typescript
 * <script>
 *   var multiselectObj = new Multiselect();
 *   multiselectObj.appendTo("#list");
 * </script>
 * ```
 */
var MultiSelect = /** @class */ (function (_super) {
    __extends(MultiSelect, _super);
    /**
     * Constructor for creating the DropDownList widget.
     *
     * @param {MultiSelectModel} option - Specifies the MultiSelect model.
     * @param {string | HTMLElement} element - Specifies the element to render as component.
     * @private
     */
    function MultiSelect(option, element) {
        var _this = _super.call(this, option, element) || this;
        _this.clearIconWidth = 0;
        _this.isValidKey = false;
        _this.selectAllEventData = [];
        _this.selectAllEventEle = [];
        _this.isDynamicDataChange = false;
        _this.scrollFocusStatus = false;
        _this.keyDownStatus = false;
        return _this;
    }
    MultiSelect.prototype.enableRTL = function (state) {
        if (state) {
            this.overAllWrapper.classList.add(RTL_CLASS);
        }
        else {
            this.overAllWrapper.classList.remove(RTL_CLASS);
        }
        if (this.popupObj) {
            this.popupObj.enableRtl = state;
            this.popupObj.dataBind();
        }
    };
    MultiSelect.prototype.requiredModules = function () {
        var modules = [];
        if (this.mode === 'CheckBox') {
            this.isGroupChecking = this.enableGroupCheckBox;
            if (this.enableGroupCheckBox) {
                var prevOnChange = this.isProtectedOnChange;
                this.isProtectedOnChange = true;
                this.enableSelectionOrder = false;
                this.isProtectedOnChange = prevOnChange;
            }
            this.allowCustomValue = false;
            this.hideSelectedItem = false;
            this.closePopupOnSelect = false;
            modules.push({
                member: 'CheckBoxSelection',
                args: [this]
            });
        }
        return modules;
    };
    MultiSelect.prototype.updateHTMLAttribute = function () {
        if (Object.keys(this.htmlAttributes).length) {
            for (var _i = 0, _a = Object.keys(this.htmlAttributes); _i < _a.length; _i++) {
                var htmlAttr = _a[_i];
                switch (htmlAttr) {
                    case 'class': {
                        var updatedClassValue = (this.htmlAttributes[htmlAttr].replace(/\s+/g, ' ')).trim();
                        if (updatedClassValue !== '') {
                            addClass([this.overAllWrapper], updatedClassValue.split(' '));
                            addClass([this.popupWrapper], updatedClassValue.split(' '));
                        }
                        break;
                    }
                    case 'disabled':
                        this.enable(false);
                        break;
                    case 'placeholder':
                        if (!this.placeholder) {
                            this.inputElement.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                            this.setProperties({ placeholder: this.inputElement.placeholder }, true);
                            this.refreshPlaceHolder();
                        }
                        break;
                    default: {
                        var defaultAttr = ['id'];
                        var validateAttr = ['name', 'required', 'aria-required', 'form'];
                        var containerAttr = ['title', 'role', 'style', 'class'];
                        if (defaultAttr.indexOf(htmlAttr) > -1) {
                            this.element.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                        }
                        else if (htmlAttr.indexOf('data') === 0 || validateAttr.indexOf(htmlAttr) > -1) {
                            this.hiddenElement.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                        }
                        else if (containerAttr.indexOf(htmlAttr) > -1) {
                            this.overAllWrapper.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                        }
                        else {
                            this.inputElement.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                        }
                        break;
                    }
                }
            }
        }
    };
    MultiSelect.prototype.updateReadonly = function (state) {
        if (state || this.mode === 'CheckBox') {
            this.inputElement.setAttribute('readonly', 'true');
        }
        else {
            this.inputElement.removeAttribute('readonly');
        }
    };
    MultiSelect.prototype.updateClearButton = function (state) {
        if (state) {
            if (this.overAllClear.parentNode) {
                this.overAllClear.style.display = '';
            }
            else {
                this.componentWrapper.appendChild(this.overAllClear);
            }
            this.componentWrapper.classList.remove(CLOSE_ICON_HIDE);
        }
        else {
            this.overAllClear.style.display = 'none';
            this.componentWrapper.classList.add(CLOSE_ICON_HIDE);
        }
    };
    MultiSelect.prototype.updateCssClass = function () {
        if (!isNullOrUndefined(this.cssClass) && this.cssClass !== '') {
            var updatedCssClassValues = this.cssClass;
            updatedCssClassValues = (this.cssClass.replace(/\s+/g, ' ')).trim();
            if (updatedCssClassValues !== '') {
                addClass([this.overAllWrapper], updatedCssClassValues.split(' '));
                addClass([this.popupWrapper], updatedCssClassValues.split(' '));
            }
        }
    };
    MultiSelect.prototype.updateOldPropCssClass = function (oldClass) {
        if (!isNullOrUndefined(oldClass) && oldClass !== '') {
            oldClass = (oldClass.replace(/\s+/g, ' ')).trim();
            if (oldClass !== '') {
                removeClass([this.overAllWrapper], oldClass.split(' '));
                removeClass([this.popupWrapper], oldClass.split(' '));
            }
        }
    };
    MultiSelect.prototype.onPopupShown = function () {
        var _this = this;
        if (Browser.isDevice && (this.mode === 'CheckBox' && this.allowFiltering)) {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var proxy_1 = this;
            window.onpopstate = function () {
                proxy_1.hidePopup();
                proxy_1.inputElement.focus();
            };
            history.pushState({}, '');
        }
        var animModel = { name: 'FadeIn', duration: 100 };
        var eventArgs = { popup: this.popupObj, cancel: false, animation: animModel };
        this.trigger('open', eventArgs, function (eventArgs) {
            if (!eventArgs.cancel) {
                _this.focusAtFirstListItem();
                document.body.appendChild(_this.popupObj.element);
                if (_this.mode === 'CheckBox' && _this.enableGroupCheckBox && !isNullOrUndefined(_this.fields.groupBy)) {
                    _this.updateListItems(_this.list.querySelectorAll('li.e-list-item'), _this.mainList.querySelectorAll('li.e-list-item'));
                }
                if (_this.mode === 'CheckBox' || _this.showDropDownIcon) {
                    addClass([_this.overAllWrapper], [iconAnimation]);
                }
                _this.refreshPopup();
                _this.renderReactTemplates();
                _this.popupObj.show(eventArgs.animation, (_this.zIndex === 1000) ? _this.element : null);
                attributes(_this.inputElement, { 'aria-expanded': 'true' });
                if (_this.isFirstClick) {
                    _this.loadTemplate();
                }
            }
        });
    };
    MultiSelect.prototype.updateListItems = function (listItems, mainListItems) {
        for (var i = 0; i < listItems.length; i++) {
            this.findGroupStart(listItems[i]);
            this.findGroupStart(mainListItems[i]);
        }
        this.deselectHeader();
    };
    MultiSelect.prototype.loadTemplate = function () {
        var _this = this;
        if (this.mode === 'CheckBox' && this.itemTemplate && (isBlazor() && this.isServerRendered) &&
            this.mainData && this.mainData.length > 0) {
            setTimeout(function () {
                _this.refreshListItems(null);
                if (_this.mode === 'CheckBox') {
                    _this.removeFocus();
                }
                _this.notify('reOrder', { module: 'CheckBoxSelection', enable: _this.mode === 'CheckBox', e: _this });
            }, this.mainData.length < 100 ? 100 : this.mainData.length);
        }
        else {
            this.refreshListItems(null);
            if (this.mode === 'CheckBox') {
                this.removeFocus();
            }
            this.notify('reOrder', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', e: this });
        }
    };
    MultiSelect.prototype.setScrollPosition = function () {
        if (((!this.hideSelectedItem && this.mode !== 'CheckBox') || (this.mode === 'CheckBox' && !this.enableSelectionOrder)) &&
            (!isNullOrUndefined(this.value) && (this.value.length > 0))) {
            var valueEle = this.findListElement((this.hideSelectedItem ? this.ulElement : this.list), 'li', 'data-value', this.value[this.value.length - 1]);
            if (!isNullOrUndefined(valueEle)) {
                this.scrollBottom(valueEle);
            }
        }
    };
    MultiSelect.prototype.focusAtFirstListItem = function () {
        if (this.ulElement && this.ulElement.querySelector('li.'
            + dropDownBaseClasses.li)) {
            var element = void 0;
            if (this.mode === 'CheckBox') {
                this.removeFocus();
                return;
            }
            else {
                element = this.ulElement.querySelector('li.'
                    + dropDownBaseClasses.li + ':not(.'
                    + HIDE_LIST + ')');
            }
            if (element !== null) {
                this.removeFocus();
                this.addListFocus(element);
            }
        }
    };
    MultiSelect.prototype.focusAtLastListItem = function (data) {
        var activeElement;
        if (data) {
            activeElement = Search(data, this.liCollections, 'StartsWith', this.ignoreCase);
        }
        else {
            if (this.value && this.value.length) {
                Search(this.value[this.value.length - 1], this.liCollections, 'StartsWith', this.ignoreCase);
            }
            else {
                activeElement = null;
            }
        }
        if (activeElement && activeElement.item !== null) {
            this.addListFocus(activeElement.item);
            this.scrollBottom(activeElement.item, activeElement.index);
        }
    };
    MultiSelect.prototype.getAriaAttributes = function () {
        var ariaAttributes = {
            'aria-disabled': 'false',
            'aria-owns': this.element.id + '_options',
            'role': 'listbox',
            'aria-multiselectable': 'true',
            'aria-activedescendant': 'null',
            'aria-haspopup': 'true',
            'aria-expanded': 'false'
        };
        return ariaAttributes;
    };
    MultiSelect.prototype.updateListARIA = function () {
        attributes(this.ulElement, { 'id': this.element.id + '_options', 'role': 'listbox', 'aria-hidden': 'false' });
        var disableStatus = (this.inputElement.disabled) ? true : false;
        attributes(this.inputElement, this.getAriaAttributes());
        if (disableStatus) {
            attributes(this.inputElement, { 'aria-disabled': 'true' });
        }
        this.ensureAriaDisabled((disableStatus) ? 'true' : 'false');
    };
    MultiSelect.prototype.ensureAriaDisabled = function (status) {
        if (this.htmlAttributes && this.htmlAttributes['aria-disabled']) {
            var attr = this.htmlAttributes;
            extend(attr, { 'aria-disabled': status }, attr);
            this.setProperties({ htmlAttributes: attr }, true);
        }
    };
    MultiSelect.prototype.removelastSelection = function (e) {
        var elements = this.chipCollectionWrapper.querySelectorAll('span.' + CHIP);
        var value = elements[elements.length - 1].getAttribute('data-value');
        if (!isNullOrUndefined(this.value)) {
            this.tempValues = this.value.slice();
        }
        var customValue = this.getFormattedValue(value);
        if (this.allowCustomValue && (value !== 'false' && customValue === false || (!isNullOrUndefined(customValue) &&
            customValue.toString() === 'NaN'))) {
            customValue = value;
        }
        this.removeValue(customValue, e);
        this.removeChipSelection();
        this.updateDelimeter(this.delimiterChar, e);
        this.makeTextBoxEmpty();
        if (this.mainList && this.listData) {
            this.refreshSelection();
        }
        this.checkPlaceholderSize();
    };
    MultiSelect.prototype.onActionFailure = function (e) {
        _super.prototype.onActionFailure.call(this, e);
        this.renderPopup();
        this.onPopupShown();
    };
    MultiSelect.prototype.targetElement = function () {
        this.targetInputElement = this.inputElement;
        if (this.mode === 'CheckBox' && this.allowFiltering) {
            this.notify('targetElement', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox' });
        }
        return this.targetInputElement.value;
    };
    MultiSelect.prototype.getForQuery = function (valuecheck) {
        var predicate;
        var field = isNullOrUndefined(this.fields.value) ? this.fields.text : this.fields.value;
        for (var i = 0; i < valuecheck.length; i++) {
            if (i === 0) {
                predicate = new Predicate(field, 'equal', valuecheck[i]);
            }
            else {
                predicate = predicate.or(field, 'equal', valuecheck[i]);
            }
        }
        return this.getQuery(this.query).where(predicate);
    };
    /* eslint-disable @typescript-eslint/no-unused-vars */
    MultiSelect.prototype.onActionComplete = function (ulElement, list, e, isUpdated) {
        /* eslint-enable @typescript-eslint/no-unused-vars */
        _super.prototype.onActionComplete.call(this, ulElement, list, e);
        this.updateSelectElementData(this.allowFiltering);
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var proxy = this;
        if (isBlazor() && this.isServerRendered && this.isDynamicDataChange && this.value !== null && this.value.length > 0) {
            var items = [];
            for (var k = 0; k < this.value.length; k++) {
                var itemsData = this.getDataByValue(this.value[k]);
                if (itemsData) {
                    // eslint-disable-next-line
                    items.push(itemsData[this.fields.value]); // remove the condition for hybrid
                }
            }
            if (items.length === 0) {
                this.setProperties({ 'value': null });
            }
        }
        if (!isNullOrUndefined(this.value) && !this.allowCustomValue) {
            for (var i = 0; i < this.value.length; i++) {
                var checkEle = this.findListElement(((this.allowFiltering && !isNullOrUndefined(this.mainList)) ? this.mainList : ulElement), 'li', 'data-value', proxy.value[i]);
                if (!checkEle) {
                    this.value.splice(i, 1);
                    i -= 1;
                }
            }
        }
        this.updateActionList(ulElement, list, e);
        if (isBlazor() && this.isServerRendered && this.allowFiltering && this.mode === 'CheckBox') {
            this.removeFocus();
        }
        if (isBlazor() && this.isServerRendered && this.isDynamicDataChange && this.value && this.value.length > 0) {
            this.updateVal(this.value, null, 'value');
            this.addValidInputClass();
            this.isDynamicDataChange = false;
        }
        if (this.dataSource instanceof DataManager && this.mode === 'CheckBox' && this.allowFiltering &&
            !(isBlazor() && this.isServerRendered)) {
            this.removeFocus();
        }
    };
    /* eslint-disable @typescript-eslint/no-unused-vars */
    MultiSelect.prototype.updateActionList = function (ulElement, list, e, isUpdated) {
        /* eslint-enable @typescript-eslint/no-unused-vars */
        if (this.mode === 'CheckBox' && this.showSelectAll) {
            this.notify('selectAll', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox' });
        }
        if (!this.mainList && !this.mainData) {
            this.mainList = ulElement.cloneNode ? ulElement.cloneNode(true) : ulElement;
            this.mainData = list;
            this.mainListCollection = this.liCollections;
        }
        else if (!isNullOrUndefined(this.mainData) && this.mainData.length === 0) {
            this.mainData = list;
        }
        if ((this.remoteCustomValue || list.length <= 0) && this.allowCustomValue && this.inputFocus && this.allowFiltering &&
            this.inputElement.value && this.inputElement.value !== '') {
            this.checkForCustomValue(this.tempQuery, this.fields);
            return;
        }
        if (this.value && this.value.length && ((this.mode !== 'CheckBox' && this.inputElement.value.trim() !== '') ||
            this.mode === 'CheckBox' || ((this.keyCode === 8 || this.keyCode === 46) && this.allowFiltering &&
            this.allowCustomValue && this.dataSource instanceof DataManager && this.inputElement.value === ''))) {
            this.refreshSelection();
        }
        this.updateListARIA();
        this.unwireListEvents();
        this.wireListEvents();
        if (!isNullOrUndefined(this.setInitialValue)) {
            this.setInitialValue();
        }
        if (!isNullOrUndefined(this.selectAllAction)) {
            this.selectAllAction();
        }
        if (this.setDynValue) {
            if (!isNullOrUndefined(this.text) && (isNullOrUndefined(this.value) || this.value.length === 0)) {
                this.initialTextUpdate();
            }
            this.initialValueUpdate();
            this.initialUpdate();
            this.refreshPlaceHolder();
            if (this.mode !== 'CheckBox' && this.changeOnBlur) {
                this.updateValueState(null, this.value, null);
            }
        }
        this.renderPopup();
        if (this.beforePopupOpen) {
            this.beforePopupOpen = false;
            this.onPopupShown();
        }
    };
    MultiSelect.prototype.refreshSelection = function () {
        var value;
        var element;
        var className = this.hideSelectedItem ?
            HIDE_LIST :
            dropDownBaseClasses.selected;
        if (!isNullOrUndefined(this.value)) {
            for (var index = 0; !isNullOrUndefined(this.value[index]); index++) {
                value = this.value[index];
                element = this.findListElement(this.list, 'li', 'data-value', value);
                if (element) {
                    addClass([element], className);
                    if (this.hideSelectedItem && element.previousSibling
                        && element.previousElementSibling.classList.contains(dropDownBaseClasses.group)
                        && (!element.nextElementSibling ||
                            element.nextElementSibling.classList.contains(dropDownBaseClasses.group))) {
                        addClass([element.previousElementSibling], className);
                    }
                    if (this.hideSelectedItem && this.fields.groupBy && !element.previousElementSibling.classList.contains(HIDE_LIST)) {
                        this.hideGroupItem(value);
                    }
                    if (this.hideSelectedItem && element.classList.contains(dropDownBaseClasses.focus)) {
                        removeClass([element], dropDownBaseClasses.focus);
                        var listEle = element.parentElement.querySelectorAll('.' +
                            dropDownBaseClasses.li + ':not(.' + HIDE_LIST + ')');
                        if (listEle.length > 0) {
                            addClass([listEle[0]], dropDownBaseClasses.focus);
                        }
                        else {
                            this.ulElement = this.ulElement.cloneNode ? this.ulElement.cloneNode(true) : this.ulElement;
                            this.l10nUpdate();
                            addClass([this.list], dropDownBaseClasses.noData);
                        }
                    }
                    element.setAttribute('aria-selected', 'true');
                    if (this.mode === 'CheckBox' && element.classList.contains('e-active')) {
                        var ariaValue = element.firstElementChild.getAttribute('aria-checked');
                        if (isNullOrUndefined(ariaValue) || ariaValue === 'false') {
                            var args = {
                                module: 'CheckBoxSelection',
                                enable: this.mode === 'CheckBox',
                                li: element,
                                e: null
                            };
                            this.notify('updatelist', args);
                        }
                    }
                }
            }
        }
        this.checkSelectAll();
        this.checkMaxSelection();
    };
    MultiSelect.prototype.hideGroupItem = function (value) {
        var element;
        var element1;
        var className = this.hideSelectedItem ?
            HIDE_LIST :
            dropDownBaseClasses.selected;
        element1 = element = this.findListElement(this.ulElement, 'li', 'data-value', value);
        var i = 0;
        var j = 0;
        var temp = true;
        var temp1 = true;
        do {
            if (element && element.previousElementSibling
                && (!element.previousElementSibling.classList.contains(HIDE_LIST) &&
                    element.previousElementSibling.classList.contains(dropDownBaseClasses.li))) {
                temp = false;
            }
            if (!temp || !element || (element.previousElementSibling
                && element.previousElementSibling.classList.contains(dropDownBaseClasses.group))) {
                i = 10;
            }
            else {
                element = element.previousElementSibling;
            }
            if (element1 && element1.nextElementSibling
                && (!element1.nextElementSibling.classList.contains(HIDE_LIST) &&
                    element1.nextElementSibling.classList.contains(dropDownBaseClasses.li))) {
                temp1 = false;
            }
            if (!temp1 || !element1 || (element1.nextElementSibling
                && element1.nextElementSibling.classList.contains(dropDownBaseClasses.group))) {
                j = 10;
            }
            else {
                element1 = element1.nextElementSibling;
            }
        } while (i < 10 || j < 10);
        if (temp && temp1 && !element.previousElementSibling.classList.contains(HIDE_LIST)) {
            addClass([element.previousElementSibling], className);
        }
        else if (temp && temp1 && element.previousElementSibling.classList.contains(HIDE_LIST)) {
            removeClass([element.previousElementSibling], className);
        }
    };
    MultiSelect.prototype.getValidLi = function () {
        var liElement = this.ulElement.querySelector('li.' + dropDownBaseClasses.li + ':not(.' + HIDE_LIST + ')');
        return (!isNullOrUndefined(liElement) ? liElement : this.liCollections[0]);
    };
    MultiSelect.prototype.checkSelectAll = function () {
        var groupItemLength = this.list.querySelectorAll('li.e-list-group-item.e-active').length;
        var listItem = this.list.querySelectorAll('li.e-list-item');
        var searchCount = this.list.querySelectorAll('li.' + dropDownBaseClasses.li).length;
        var searchActiveCount = this.list.querySelectorAll('li.' + dropDownBaseClasses.selected).length;
        if (this.enableGroupCheckBox && !isNullOrUndefined(this.fields.groupBy)) {
            searchActiveCount = searchActiveCount - groupItemLength;
        }
        if ((searchCount === searchActiveCount || searchActiveCount === this.maximumSelectionLength)
            && (this.mode === 'CheckBox' && this.showSelectAll)) {
            this.notify('checkSelectAll', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', value: 'check' });
        }
        else if ((searchCount !== searchActiveCount) && (this.mode === 'CheckBox' && this.showSelectAll)) {
            this.notify('checkSelectAll', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', value: 'uncheck' });
        }
        if (this.enableGroupCheckBox && this.fields.groupBy && !this.enableSelectionOrder) {
            for (var i = 0; i < listItem.length; i++) {
                this.findGroupStart(listItem[i]);
            }
            this.deselectHeader();
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    MultiSelect.prototype.openClick = function (e) {
        if (!this.openOnClick && this.mode !== 'CheckBox') {
            if (this.targetElement() !== '') {
                this.showPopup();
            }
            else {
                this.hidePopup();
            }
        }
        else if (!this.openOnClick && this.mode === 'CheckBox' && !this.isPopupOpen()) {
            this.showPopup();
        }
    };
    MultiSelect.prototype.keyUp = function (e) {
        if (this.mode === 'CheckBox' && !this.openOnClick) {
            var char = String.fromCharCode(e.keyCode);
            var isWordCharacter = char.match(/\w/);
            if (!isNullOrUndefined(isWordCharacter)) {
                this.isValidKey = true;
            }
        }
        this.isValidKey = (this.isPopupOpen() && e.keyCode === 8) || this.isValidKey;
        this.isValidKey = e.ctrlKey && e.keyCode === 86 ? false : this.isValidKey;
        if (this.isValidKey) {
            this.isValidKey = false;
            this.expandTextbox();
            this.showOverAllClear();
            switch (e.keyCode) {
                default:
                    // For filtering works in mobile firefox
                    this.search(e);
            }
        }
    };
    /**
     * To filter the multiselect data from given data source by using query
     *
     * @param  {Object[] | DataManager } dataSource - Set the data source to filter.
     * @param  {Query} query - Specify the query to filter the data.
     * @param  {FieldSettingsModel} fields - Specify the fields to map the column in the data table.
     * @returns {void}
     */
    MultiSelect.prototype.filter = function (dataSource, query, fields) {
        this.isFiltered = true;
        this.remoteFilterAction = true;
        this.dataUpdater(dataSource, query, fields);
    };
    MultiSelect.prototype.getQuery = function (query) {
        var filterQuery = query ? query.clone() : this.query ? this.query.clone() : new Query();
        if (this.filterAction) {
            if (this.targetElement() !== null) {
                var dataType = this.typeOfData(this.dataSource).typeof;
                if (!(this.dataSource instanceof DataManager) && dataType === 'string' || dataType === 'number') {
                    filterQuery.where('', this.filterType, this.targetElement(), this.ignoreCase, this.ignoreAccent);
                }
                else {
                    var fields = this.fields;
                    filterQuery.where(!isNullOrUndefined(fields.text) ? fields.text : '', this.filterType, this.targetElement(), this.ignoreCase, this.ignoreAccent);
                }
            }
            return filterQuery;
        }
        else {
            return query ? query : this.query ? this.query : new Query();
        }
    };
    MultiSelect.prototype.dataUpdater = function (dataSource, query, fields) {
        this.isDataFetched = false;
        if (this.targetElement().trim() === '') {
            var list = this.mainList.cloneNode ? this.mainList.cloneNode(true) : this.mainList;
            if (this.backCommand) {
                this.remoteCustomValue = false;
                this.onActionComplete(list, this.mainData);
                if (this.value && this.value.length) {
                    this.refreshSelection();
                }
                if (this.keyCode !== 8) {
                    this.focusAtFirstListItem();
                }
                this.notify('reOrder', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', e: this });
            }
        }
        else {
            this.resetList(dataSource, fields, query);
            if (this.allowCustomValue) {
                if (!(dataSource instanceof DataManager)) {
                    this.checkForCustomValue(query, fields);
                }
                else {
                    this.remoteCustomValue = true;
                    this.tempQuery = query;
                }
            }
        }
        this.refreshPopup();
        if (this.mode === 'CheckBox') {
            this.removeFocus();
        }
    };
    MultiSelect.prototype.checkForCustomValue = function (query, fields) {
        var dataChecks = !this.getValueByText(this.inputElement.value, this.ignoreCase);
        if (this.allowCustomValue && dataChecks) {
            var value = this.inputElement.value;
            var field = fields ? fields : this.fields;
            var customData = (!isNullOrUndefined(this.mainData) && this.mainData.length > 0) ?
                this.mainData[0] : this.mainData;
            if (typeof (customData) !== 'string' && typeof (customData) !== 'number' && typeof (customData) !== 'boolean') {
                var dataItem = {};
                setValue(field.text, value, dataItem);
                if (typeof getValue((this.fields.value ? this.fields.value : 'value'), customData)
                    === 'number') {
                    setValue(field.value, Math.random(), dataItem);
                }
                else {
                    setValue(field.value, value, dataItem);
                }
                var tempData = JSON.parse(JSON.stringify(this.listData));
                tempData.splice(0, 0, dataItem);
                this.resetList(tempData, field, query);
            }
            else {
                var tempData = [this.inputElement.value];
                tempData[0] = (typeof customData === 'number' && !isNaN(parseFloat(tempData[0]))) ?
                    parseFloat(tempData[0]) : tempData[0];
                tempData[0] = (typeof customData === 'boolean') ?
                    (tempData[0] === 'true' ? true : (tempData[0] === 'false' ? false : tempData[0])) : tempData[0];
                this.resetList(tempData, field);
            }
        }
        if (this.value && this.value.length) {
            this.refreshSelection();
        }
    };
    MultiSelect.prototype.getNgDirective = function () {
        return 'EJS-MULTISELECT';
    };
    MultiSelect.prototype.wrapperClick = function (e) {
        this.setDynValue = false;
        if (!this.enabled) {
            return;
        }
        if (e.target === this.overAllClear) {
            e.preventDefault();
            return;
        }
        if (!this.inputFocus) {
            this.inputElement.focus();
        }
        if (!this.readonly) {
            if (e.target && e.target.classList.toString().indexOf(CHIP_CLOSE) !== -1) {
                if (this.isPopupOpen()) {
                    this.refreshPopup();
                }
                return;
            }
            if (!this.isPopupOpen() &&
                (this.openOnClick || (this.showDropDownIcon && e.target && e.target.className === dropdownIcon))) {
                this.showPopup();
            }
            else {
                this.hidePopup();
                if (this.mode === 'CheckBox') {
                    this.showOverAllClear();
                    this.inputFocus = true;
                    if (!this.overAllWrapper.classList.contains(FOCUS)) {
                        this.overAllWrapper.classList.add(FOCUS);
                    }
                }
            }
        }
        if (!(this.targetElement() && this.targetElement() !== '')) {
            e.preventDefault();
        }
    };
    MultiSelect.prototype.enable = function (state) {
        if (state) {
            this.overAllWrapper.classList.remove(DISABLED);
            this.inputElement.removeAttribute('disabled');
            attributes(this.inputElement, { 'aria-disabled': 'false' });
            this.ensureAriaDisabled('false');
        }
        else {
            this.overAllWrapper.classList.add(DISABLED);
            this.inputElement.setAttribute('disabled', 'true');
            attributes(this.inputElement, { 'aria-disabled': 'true' });
            this.ensureAriaDisabled('true');
        }
        if (this.enabled !== state) {
            this.enabled = state;
        }
        this.hidePopup();
    };
    MultiSelect.prototype.onBlur = function (eve, isDocClickFromCheck) {
        var target;
        if (!isNullOrUndefined(eve)) {
            target = eve.relatedTarget;
        }
        if (this.popupObj && document.body.contains(this.popupObj.element) && this.popupObj.element.contains(target)) {
            if (this.mode !== 'CheckBox') {
                this.inputElement.focus();
            }
            else if ((this.floatLabelType === 'Auto' &&
                ((this.overAllWrapper.classList.contains('e-outline')) || (this.overAllWrapper.classList.contains('e-filled'))))) {
                addClass([this.overAllWrapper], 'e-valid-input');
            }
            return;
        }
        if (this.floatLabelType === 'Auto' && (this.overAllWrapper.classList.contains('e-outline')) && this.mode === 'CheckBox' &&
            ((isNullOrUndefined(this.value)) || this.value.length === 0)) {
            removeClass([this.overAllWrapper], 'e-valid-input');
        }
        if (this.mode === 'CheckBox' && Browser.isIE && !isNullOrUndefined(eve) && !isDocClickFromCheck) {
            this.inputFocus = false;
            this.overAllWrapper.classList.remove(FOCUS);
            return;
        }
        if (this.scrollFocusStatus) {
            if (!isNullOrUndefined(eve)) {
                eve.preventDefault();
            }
            this.inputElement.focus();
            this.scrollFocusStatus = false;
            return;
        }
        this.inputFocus = false;
        this.overAllWrapper.classList.remove(FOCUS);
        this.refreshListItems(null);
        if (this.mode !== 'Box' && this.mode !== 'CheckBox') {
            this.updateDelimView();
        }
        if (this.changeOnBlur) {
            this.updateValueState(eve, this.value, this.tempValues);
            this.dispatchEvent(this.hiddenElement, 'change');
        }
        this.overAllClear.style.display = 'none';
        if (this.isPopupOpen()) {
            this.DropDownBaseresetBlazorTemplates(false, false, true, true, false, true, true);
            this.hidePopup();
        }
        this.makeTextBoxEmpty();
        this.trigger('blur');
        this.focused = true;
        if (Browser.isDevice && this.mode !== 'Delimiter' && this.mode !== 'CheckBox') {
            this.removeChipFocus();
        }
        this.removeChipSelection();
        this.refreshInputHight();
        floatLabelBlur(this.overAllWrapper, this.componentWrapper, this.value, this.floatLabelType, this.placeholder);
        this.refreshPlaceHolder();
        if ((this.allowFiltering || (this.enableSelectionOrder === true && this.mode === 'CheckBox'))
            && !isNullOrUndefined(this.mainList)) {
            this.ulElement = this.mainList;
        }
        this.checkPlaceholderSize();
    };
    MultiSelect.prototype.checkPlaceholderSize = function () {
        if (this.showDropDownIcon) {
            var downIconWidth = this.dropIcon.offsetWidth +
                parseInt(window.getComputedStyle(this.dropIcon).marginRight, 10);
            this.setPlaceholderSize(downIconWidth);
        }
        else {
            if (!isNullOrUndefined(this.dropIcon)) {
                this.setPlaceholderSize(this.showDropDownIcon ? this.dropIcon.offsetWidth : 0);
            }
        }
    };
    MultiSelect.prototype.setPlaceholderSize = function (downIconWidth) {
        if (isNullOrUndefined(this.value) || this.value.length === 0) {
            if (this.dropIcon.offsetWidth !== 0) {
                this.searchWrapper.style.width = ('calc(100% - ' + (downIconWidth + 10)) + 'px';
            }
            else {
                addClass([this.searchWrapper], CUSTOM_WIDTH);
            }
        }
        else if (!isNullOrUndefined(this.value)) {
            this.searchWrapper.removeAttribute('style');
            removeClass([this.searchWrapper], CUSTOM_WIDTH);
        }
    };
    MultiSelect.prototype.refreshInputHight = function () {
        if ((!this.value || !this.value.length) && (isNullOrUndefined(this.text) || this.text === '')) {
            this.searchWrapper.classList.remove(ZERO_SIZE);
        }
        else {
            this.searchWrapper.classList.add(ZERO_SIZE);
        }
    };
    MultiSelect.prototype.validateValues = function (newValue, oldValue) {
        return JSON.stringify(newValue.slice().sort()) !== JSON.stringify(oldValue.slice().sort());
    };
    MultiSelect.prototype.updateValueState = function (event, newVal, oldVal) {
        var newValue = newVal ? newVal : [];
        var oldValue = oldVal ? oldVal : [];
        if (this.initStatus && this.validateValues(newValue, oldValue)) {
            var eventArgs = {
                e: event,
                oldValue: oldVal,
                value: newVal,
                isInteracted: event ? true : false,
                element: this.element
            };
            if (this.isAngular && this.preventChange) {
                this.preventChange = false;
            }
            else {
                this.trigger('change', eventArgs);
            }
            this.updateTempValue();
            if (!this.changeOnBlur) {
                this.dispatchEvent(this.hiddenElement, 'change');
            }
        }
    };
    MultiSelect.prototype.updateTempValue = function () {
        if (!this.value) {
            this.tempValues = this.value;
        }
        else {
            this.tempValues = this.value.slice();
        }
    };
    MultiSelect.prototype.getPagingCount = function () {
        var height = this.list.classList.contains(dropDownBaseClasses.noData) ? null :
            getComputedStyle(this.getItems()[0], null).getPropertyValue('height');
        return Math.round(this.list.offsetHeight / parseInt(height, 10));
    };
    MultiSelect.prototype.pageUpSelection = function (steps) {
        var collection = this.list.querySelectorAll('li.'
            + dropDownBaseClasses.li + ':not(.' + HIDE_LIST + ')' + ':not(.e-reorder-hide)');
        var previousItem = steps >= 0 ? collection[steps + 1] : collection[0];
        this.addListFocus(previousItem);
        this.scrollBottom(previousItem, this.getIndexByValue(previousItem.getAttribute('data-value')));
    };
    MultiSelect.prototype.pageDownSelection = function (steps) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var list = this.getItems();
        var collection = this.list.querySelectorAll('li.'
            + dropDownBaseClasses.li + ':not(.' + HIDE_LIST + ')' + ':not(.e-reorder-hide)');
        var previousItem = steps <= collection.length ? collection[steps - 1] : collection[collection.length - 1];
        this.addListFocus(previousItem);
        this.scrollBottom(previousItem, this.getIndexByValue(previousItem.getAttribute('data-value')));
    };
    MultiSelect.prototype.getItems = function () {
        if (!this.list) {
            _super.prototype.render.call(this);
        }
        return this.ulElement && this.ulElement.querySelectorAll('.' + dropDownBaseClasses.li).length > 0 ?
            this.ulElement.querySelectorAll('.' + dropDownBaseClasses.li
                + ':not(.' + HIDE_LIST + ')') : [];
    };
    MultiSelect.prototype.focusInHandler = function (e) {
        if (this.enabled) {
            this.showOverAllClear();
            this.inputFocus = true;
            if (this.value && this.value.length) {
                if (this.mode !== 'Delimiter' && this.mode !== 'CheckBox') {
                    this.chipCollectionWrapper.style.display = '';
                }
                else {
                    this.showDelimWrapper();
                }
                if (this.mode !== 'CheckBox') {
                    this.viewWrapper.style.display = 'none';
                }
            }
            if (this.mode !== 'CheckBox') {
                this.searchWrapper.classList.remove(ZERO_SIZE);
            }
            this.checkPlaceholderSize();
            if (this.focused) {
                var args = { isInteracted: e ? true : false, event: e };
                this.trigger('focus', args);
                this.focused = false;
            }
            if (!this.overAllWrapper.classList.contains(FOCUS)) {
                this.overAllWrapper.classList.add(FOCUS);
            }
            floatLabelFocus(this.overAllWrapper, this.componentWrapper);
            if (this.isPopupOpen()) {
                this.refreshPopup();
            }
            return true;
        }
        else {
            return false;
        }
    };
    MultiSelect.prototype.showDelimWrapper = function () {
        if (this.mode === 'CheckBox') {
            this.viewWrapper.style.display = '';
        }
        else {
            this.delimiterWrapper.style.display = '';
        }
        this.componentWrapper.classList.add(DELIMITER_VIEW_WRAPPER);
    };
    MultiSelect.prototype.hideDelimWrapper = function () {
        this.delimiterWrapper.style.display = 'none';
        this.componentWrapper.classList.remove(DELIMITER_VIEW_WRAPPER);
    };
    MultiSelect.prototype.expandTextbox = function () {
        var size = 5;
        if (this.placeholder) {
            size = size > this.inputElement.placeholder.length ? size : this.inputElement.placeholder.length;
        }
        if (this.inputElement.value.length > size) {
            this.inputElement.size = this.inputElement.value.length;
        }
        else {
            this.inputElement.size = size;
        }
    };
    MultiSelect.prototype.isPopupOpen = function () {
        return ((this.popupWrapper !== null) && (this.popupWrapper.parentElement !== null));
    };
    MultiSelect.prototype.refreshPopup = function () {
        if (this.popupObj && this.mobFilter) {
            this.popupObj.setProperties({ width: this.calcPopupWidth() });
            this.popupObj.refreshPosition(this.overAllWrapper);
            this.popupObj.resolveCollision();
        }
    };
    MultiSelect.prototype.checkTextLength = function () {
        return this.targetElement().length < 1;
    };
    MultiSelect.prototype.popupKeyActions = function (e) {
        switch (e.keyCode) {
            case 38:
                this.hidePopup();
                if (this.mode === 'CheckBox') {
                    this.inputElement.focus();
                }
                e.preventDefault();
                break;
            case 40:
                if (!this.isPopupOpen()) {
                    this.showPopup();
                    e.preventDefault();
                }
                break;
        }
    };
    MultiSelect.prototype.updateAriaAttribute = function () {
        var focusedItem = this.list.querySelector('.' + dropDownBaseClasses.focus);
        if (!isNullOrUndefined(focusedItem)) {
            this.inputElement.setAttribute('aria-activedescendant', focusedItem.id);
        }
    };
    MultiSelect.prototype.homeNavigation = function (isHome) {
        this.removeFocus();
        var scrollEle = this.ulElement.querySelectorAll('li.' + dropDownBaseClasses.li
            + ':not(.' + HIDE_LIST + ')' + ':not(.e-reorder-hide)');
        if (scrollEle.length > 0) {
            var element = scrollEle[(isHome) ? 0 : (scrollEle.length - 1)];
            element.classList.add(dropDownBaseClasses.focus);
            this.scrollBottom(element);
        }
    };
    MultiSelect.prototype.onKeyDown = function (e) {
        if (this.readonly || !this.enabled && this.mode !== 'CheckBox') {
            return;
        }
        this.keyCode = e.keyCode;
        this.keyDownStatus = true;
        if (e.keyCode > 111 && e.keyCode < 124) {
            return;
        }
        if (e.altKey) {
            this.popupKeyActions(e);
            return;
        }
        else if (this.isPopupOpen()) {
            var focusedItem = this.list.querySelector('.' + dropDownBaseClasses.focus);
            var activeIndex = void 0;
            switch (e.keyCode) {
                case 36:
                case 35:
                    this.homeNavigation((e.keyCode === 36) ? true : false);
                    break;
                case 33:
                    e.preventDefault();
                    if (focusedItem) {
                        this.getIndexByValue(focusedItem.getAttribute('data-value'));
                        this.pageUpSelection(activeIndex - this.getPagingCount());
                        this.updateAriaAttribute();
                    }
                    return;
                case 34:
                    e.preventDefault();
                    if (focusedItem) {
                        this.getIndexByValue(focusedItem.getAttribute('data-value'));
                        this.pageDownSelection(activeIndex + this.getPagingCount());
                        this.updateAriaAttribute();
                    }
                    return;
                case 38:
                    this.arrowUp(e);
                    break;
                case 40:
                    this.arrowDown(e);
                    break;
                case 27:
                    e.preventDefault();
                    this.hidePopup();
                    if (this.mode === 'CheckBox') {
                        this.inputElement.focus();
                    }
                    return;
                case 13:
                    e.preventDefault();
                    if (this.mode !== 'CheckBox') {
                        this.selectByKey(e);
                    }
                    this.checkPlaceholderSize();
                    return;
                case 32:
                    this.spaceKeySelection(e);
                    return;
                case 9:
                    e.preventDefault();
                    this.hidePopup();
                    this.inputElement.focus();
                    this.overAllWrapper.classList.add(FOCUS);
            }
        }
        else {
            switch (e.keyCode) {
                case 13:
                case 9:
                case 16:
                case 17:
                case 20:
                    return;
                case 40:
                    if (this.openOnClick) {
                        this.showPopup();
                    }
                    break;
                case 27:
                    e.preventDefault();
                    this.escapeAction();
                    return;
            }
        }
        if (this.checkTextLength()) {
            this.keyNavigation(e);
        }
        if (this.mode === 'CheckBox' && this.enableSelectionOrder) {
            this.checkBackCommand(e);
        }
        this.expandTextbox();
        this.refreshPopup();
    };
    MultiSelect.prototype.arrowDown = function (e) {
        e.preventDefault();
        this.moveByList(1);
        this.keyAction = true;
        if (document.activeElement.classList.contains('e-input-filter')
            || (this.mode === 'CheckBox' && !this.allowFiltering && document.activeElement !== this.list)) {
            this.list.focus();
            EventHandler.add(this.list, 'keydown', this.onKeyDown, this);
        }
        this.updateAriaAttribute();
    };
    MultiSelect.prototype.arrowUp = function (e) {
        e.preventDefault();
        this.keyAction = true;
        var list = this.list.querySelectorAll('li.'
            + dropDownBaseClasses.li
            + ':not(.' + HIDE_LIST + ')' + ':not(.e-reorder-hide)');
        if (this.enableGroupCheckBox && this.mode === 'CheckBox' && !isNullOrUndefined(this.fields.groupBy)) {
            list = this.list.querySelectorAll('li.'
                + dropDownBaseClasses.li + ',li.' + dropDownBaseClasses.group
                + ':not(.' + HIDE_LIST + ')' + ':not(.e-reorder-hide)');
        }
        var focuseElem = this.list.querySelector('li.' + dropDownBaseClasses.focus);
        var index = Array.prototype.slice.call(list).indexOf(focuseElem);
        if (index <= 0 && (this.mode === 'CheckBox' && this.allowFiltering)) {
            this.keyAction = false;
            this.notify('inputFocus', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', value: 'focus' });
        }
        this.moveByList(-1);
        this.updateAriaAttribute();
    };
    MultiSelect.prototype.spaceKeySelection = function (e) {
        if (this.mode === 'CheckBox') {
            if (!document.activeElement.classList.contains('e-input-filter')) {
                e.preventDefault();
                this.keyAction = true;
                this.list.focus();
            }
            this.selectByKey(e);
        }
        this.checkPlaceholderSize();
    };
    MultiSelect.prototype.checkBackCommand = function (e) {
        if (e.keyCode === 8 && this.targetElement() === '') {
            this.backCommand = false;
        }
        else {
            this.backCommand = true;
        }
    };
    MultiSelect.prototype.keyNavigation = function (e) {
        if ((this.mode !== 'Delimiter' && this.mode !== 'CheckBox') && this.value && this.value.length) {
            switch (e.keyCode) {
                case 37: //left arrow
                    e.preventDefault();
                    this.moveBy(-1, e);
                    break;
                case 39: //right arrow
                    e.preventDefault();
                    this.moveBy(1, e);
                    break;
                case 8:
                    this.removelastSelection(e);
                    break;
                case 46: //del
                    this.removeSelectedChip(e);
                    break;
            }
        }
        else if (e.keyCode === 8 && this.mode === 'Delimiter') {
            if (this.value && this.value.length) {
                e.preventDefault();
                var temp = this.value[this.value.length - 1];
                this.removeValue(temp, e);
                this.updateDelimeter(this.delimiterChar, e);
                this.focusAtLastListItem(temp);
            }
        }
    };
    MultiSelect.prototype.selectByKey = function (e) {
        this.removeChipSelection();
        this.selectListByKey(e);
        if (this.hideSelectedItem) {
            this.focusAtFirstListItem();
        }
    };
    MultiSelect.prototype.escapeAction = function () {
        var temp = this.tempValues ? this.tempValues.slice() : [];
        if (this.value && this.validateValues(this.value, temp)) {
            if (this.mode !== 'CheckBox') {
                this.value = temp;
                this.initialValueUpdate();
            }
            if (this.mode !== 'Delimiter' && this.mode !== 'CheckBox') {
                this.chipCollectionWrapper.style.display = '';
            }
            else {
                this.showDelimWrapper();
            }
            this.refreshPlaceHolder();
            if (this.value.length) {
                this.showOverAllClear();
            }
            else {
                this.hideOverAllClear();
            }
        }
        this.makeTextBoxEmpty();
    };
    MultiSelect.prototype.scrollBottom = function (selectedLI, activeIndex) {
        var currentOffset = this.list.offsetHeight;
        var nextBottom = selectedLI.offsetTop + selectedLI.offsetHeight - this.list.scrollTop;
        var nextOffset = this.list.scrollTop + nextBottom - currentOffset;
        var boxRange = (selectedLI.offsetTop + selectedLI.offsetHeight - this.list.scrollTop);
        boxRange = this.fields.groupBy && !isNullOrUndefined(this.fixedHeaderElement) ?
            boxRange - this.fixedHeaderElement.offsetHeight : boxRange;
        if (activeIndex === 0) {
            this.list.scrollTop = 0;
        }
        else if (nextBottom > currentOffset) {
            this.list.scrollTop = nextOffset;
        }
        else if (!(boxRange > 0 && this.list.offsetHeight > boxRange)) {
            this.list.scrollTop = nextOffset;
        }
    };
    MultiSelect.prototype.scrollTop = function (selectedLI, activeIndex) {
        var nextOffset = selectedLI.offsetTop - this.list.scrollTop;
        nextOffset = this.fields.groupBy && !isUndefined(this.fixedHeaderElement) ?
            nextOffset - this.fixedHeaderElement.offsetHeight : nextOffset;
        var boxRange = (selectedLI.offsetTop + selectedLI.offsetHeight - this.list.scrollTop);
        if (activeIndex === 0) {
            this.list.scrollTop = 0;
        }
        else if (nextOffset < 0) {
            this.list.scrollTop = this.list.scrollTop + nextOffset;
        }
        else if (!(boxRange > 0 && this.list.offsetHeight > boxRange)) {
            this.list.scrollTop = selectedLI.offsetTop - (this.fields.groupBy && !isUndefined(this.fixedHeaderElement) ?
                this.fixedHeaderElement.offsetHeight : 0);
        }
    };
    MultiSelect.prototype.selectListByKey = function (e) {
        var li = this.list.querySelector('li.' + dropDownBaseClasses.focus);
        var limit = this.value && this.value.length ? this.value.length : 0;
        var target;
        if (li !== null) {
            if (li.classList.contains('e-active')) {
                limit = limit - 1;
            }
            if (this.isValidLI(li) && limit < this.maximumSelectionLength) {
                this.updateListSelection(li, e);
                this.addListFocus(li);
                if (this.mode === 'CheckBox') {
                    this.updateDelimView();
                    this.updateDelimeter(this.delimiterChar, e);
                    this.refreshInputHight();
                    this.checkPlaceholderSize();
                    if (this.enableGroupCheckBox && !isNullOrUndefined(this.fields.groupBy)) {
                        target = li.firstElementChild.lastElementChild;
                        this.findGroupStart(target);
                        this.deselectHeader();
                    }
                }
                else {
                    this.updateDelimeter(this.delimiterChar, e);
                }
                this.makeTextBoxEmpty();
                if (this.mode !== 'CheckBox') {
                    this.refreshListItems(li.textContent);
                }
                if (!this.changeOnBlur) {
                    this.updateValueState(e, this.value, this.tempValues);
                }
                this.refreshPopup();
            }
            else {
                if (!this.isValidLI(li) && limit < this.maximumSelectionLength) {
                    target = li.firstElementChild.lastElementChild;
                    if (target.classList.contains('e-check')) {
                        this.selectAllItem(false, e, li);
                    }
                    else {
                        this.selectAllItem(true, e, li);
                    }
                }
            }
            this.refreshSelection();
            if (this.closePopupOnSelect) {
                this.hidePopup();
            }
        }
        this.refreshPlaceHolder();
    };
    MultiSelect.prototype.refreshListItems = function (data) {
        if ((this.allowFiltering || (this.mode === 'CheckBox' && this.enableSelectionOrder === true)
            || this.allowCustomValue) && this.mainList && this.listData) {
            var list = this.mainList.cloneNode ? this.mainList.cloneNode(true) : this.mainList;
            this.onActionComplete(list, this.mainData);
            this.focusAtLastListItem(data);
            if (this.value && this.value.length) {
                this.refreshSelection();
            }
        }
    };
    MultiSelect.prototype.removeSelectedChip = function (e) {
        var selectedElem = this.chipCollectionWrapper.querySelector('span.' + CHIP_SELECTED);
        var temp;
        if (selectedElem !== null) {
            if (!isNullOrUndefined(this.value)) {
                this.tempValues = this.value.slice();
            }
            temp = selectedElem.nextElementSibling;
            if (temp !== null) {
                this.removeChipSelection();
                this.addChipSelection(temp, e);
            }
            this.removeValue(selectedElem.getAttribute('data-value'), e);
            this.makeTextBoxEmpty();
        }
        if (this.closePopupOnSelect) {
            this.hidePopup();
        }
        this.checkPlaceholderSize();
    };
    MultiSelect.prototype.moveByTop = function (state) {
        var elements = this.list.querySelectorAll('li.' + dropDownBaseClasses.li);
        var index;
        if (elements.length > 1) {
            this.removeFocus();
            index = state ? 0 : (elements.length - 1);
            this.addListFocus(elements[index]);
            this.scrollBottom(elements[index], index);
        }
        this.updateAriaAttribute();
    };
    MultiSelect.prototype.moveByList = function (position) {
        if (this.list) {
            var elements = this.list.querySelectorAll('li.'
                + dropDownBaseClasses.li
                + ':not(.' + HIDE_LIST + ')' + ':not(.e-reorder-hide)');
            if (this.mode === 'CheckBox' && this.enableGroupCheckBox && !isNullOrUndefined(this.fields.groupBy)) {
                elements = this.list.querySelectorAll('li.'
                    + dropDownBaseClasses.li + ',li.' + dropDownBaseClasses.group
                    + ':not(.' + HIDE_LIST + ')' + ':not(.e-reorder-hide)');
            }
            var selectedElem = this.list.querySelector('li.' + dropDownBaseClasses.focus);
            var temp = -1;
            if (elements.length) {
                for (var index = 0; index < elements.length; index++) {
                    if (elements[index] === selectedElem) {
                        temp = index;
                        break;
                    }
                }
                if (position > 0) {
                    if (temp < (elements.length - 1)) {
                        this.removeFocus();
                        this.addListFocus(elements[++temp]);
                        this.updateCheck(elements[temp]);
                        this.scrollBottom(elements[temp], temp);
                    }
                }
                else {
                    if (temp > 0) {
                        this.removeFocus();
                        this.addListFocus(elements[--temp]);
                        this.updateCheck(elements[temp]);
                        this.scrollTop(elements[temp], temp);
                    }
                }
            }
        }
    };
    MultiSelect.prototype.updateCheck = function (element) {
        if (this.mode === 'CheckBox' && this.enableGroupCheckBox &&
            !isNullOrUndefined(this.fields.groupBy)) {
            var checkElement = element.firstElementChild.lastElementChild;
            if (checkElement.classList.contains('e-check')) {
                element.classList.add('e-active');
            }
            else {
                element.classList.remove('e-active');
            }
        }
    };
    MultiSelect.prototype.moveBy = function (position, e) {
        var temp;
        var elements = this.chipCollectionWrapper.querySelectorAll('span.' + CHIP);
        var selectedElem = this.chipCollectionWrapper.querySelector('span.' + CHIP_SELECTED);
        if (selectedElem === null) {
            if (position < 0) {
                this.addChipSelection(elements[elements.length - 1], e);
            }
        }
        else {
            if (position < 0) {
                temp = selectedElem.previousElementSibling;
                if (temp !== null) {
                    this.removeChipSelection();
                    this.addChipSelection(temp, e);
                }
            }
            else {
                temp = selectedElem.nextElementSibling;
                this.removeChipSelection();
                if (temp !== null) {
                    this.addChipSelection(temp, e);
                }
            }
        }
    };
    MultiSelect.prototype.chipClick = function (e) {
        if (this.enabled) {
            var elem = closest(e.target, '.' + CHIP);
            this.removeChipSelection();
            this.addChipSelection(elem, e);
        }
    };
    MultiSelect.prototype.removeChipSelection = function () {
        if (this.chipCollectionWrapper) {
            this.removeChipFocus();
        }
    };
    MultiSelect.prototype.addChipSelection = function (element, e) {
        addClass([element], CHIP_SELECTED);
        this.trigger('chipSelection', e);
    };
    MultiSelect.prototype.onChipRemove = function (e) {
        if (e.which === 3 || e.button === 2) {
            return;
        }
        if (this.enabled && !this.readonly) {
            var element = e.target.parentElement;
            var customVal = element.getAttribute('data-value');
            var value = this.getFormattedValue(customVal);
            if (this.allowCustomValue && ((customVal !== 'false' && value === false) ||
                (!isNullOrUndefined(value) && value.toString() === 'NaN'))) {
                value = customVal;
            }
            if (this.isPopupOpen() && this.mode !== 'CheckBox') {
                this.hidePopup();
            }
            if (!this.inputFocus) {
                this.inputElement.focus();
            }
            this.removeValue(value, e);
            if (isNullOrUndefined(this.findListElement(this.list, 'li', 'data-value', value)) && this.mainList && this.listData) {
                var list = this.mainList.cloneNode ? this.mainList.cloneNode(true) : this.mainList;
                this.onActionComplete(list, this.mainData);
            }
            this.updateDelimeter(this.delimiterChar, e);
            if (this.placeholder && this.floatLabelType === 'Never') {
                this.makeTextBoxEmpty();
                this.checkPlaceholderSize();
            }
            else {
                this.inputElement.value = '';
            }
            e.preventDefault();
        }
    };
    MultiSelect.prototype.makeTextBoxEmpty = function () {
        this.inputElement.value = '';
        this.refreshPlaceHolder();
    };
    MultiSelect.prototype.refreshPlaceHolder = function () {
        if (this.placeholder && this.floatLabelType === 'Never') {
            if ((this.value && this.value.length) || (!isNullOrUndefined(this.text) && this.text !== '')) {
                this.inputElement.placeholder = '';
            }
            else {
                this.inputElement.placeholder = this.placeholder;
            }
        }
        else {
            this.setFloatLabelType();
        }
        this.expandTextbox();
    };
    MultiSelect.prototype.removeValue = function (value, eve, length, isClearAll) {
        var _this = this;
        var index = this.value.indexOf(this.getFormattedValue(value));
        if (index === -1 && this.allowCustomValue && !isNullOrUndefined(value)) {
            index = this.value.indexOf(value.toString());
        }
        var targetEle = eve && eve.target;
        isClearAll = (isClearAll || targetEle && targetEle.classList.contains('e-close-hooker')) ? true : null;
        var className = this.hideSelectedItem ?
            HIDE_LIST :
            dropDownBaseClasses.selected;
        if (index !== -1) {
            var element_1 = this.findListElement(this.list, 'li', 'data-value', value);
            var val_1 = this.getDataByValue(value);
            var eventArgs = {
                e: eve,
                item: element_1,
                itemData: val_1,
                isInteracted: eve ? true : false,
                cancel: false
            };
            this.trigger('removing', eventArgs, function (eventArgs) {
                if (eventArgs.cancel) {
                    _this.removeIndex++;
                }
                else {
                    var removeVal = _this.value.slice(0);
                    removeVal.splice(index, 1);
                    if (isBlazor() && _this.isServerRendered) {
                        // eslint-disable-next-line max-len
                        var removedValues = [].concat([], removeVal);
                        _this.setProperties({ value: removedValues.length === 0 ? null : removedValues }, true);
                    }
                    else {
                        _this.setProperties({ value: [].concat([], removeVal) }, true);
                    }
                    if (element_1 !== null) {
                        var hideElement = _this.findListElement(_this.mainList, 'li', 'data-value', value);
                        element_1.setAttribute('aria-selected', 'false');
                        removeClass([element_1], className);
                        if (hideElement) {
                            hideElement.setAttribute('aria-selected', 'false');
                            removeClass([element_1, hideElement], className);
                        }
                        _this.notify('activeList', {
                            module: 'CheckBoxSelection',
                            enable: _this.mode === 'CheckBox', li: element_1,
                            e: _this, index: index
                        });
                        _this.notify('updatelist', { module: 'CheckBoxSelection', enable: _this.mode === 'CheckBox', li: element_1, e: eve });
                        attributes(_this.inputElement, { 'aria-activedescendant': element_1.id });
                        if ((_this.value && _this.value.length !== _this.mainData.length)
                            && (_this.mode === 'CheckBox' && _this.showSelectAll && !(_this.isSelectAll || isClearAll))) {
                            _this.notify('checkSelectAll', { module: 'CheckBoxSelection',
                                enable: _this.mode === 'CheckBox',
                                value: 'uncheck' });
                        }
                    }
                    if (_this.hideSelectedItem && _this.fields.groupBy) {
                        _this.hideGroupItem(value);
                    }
                    if (_this.hideSelectedItem && _this.fixedHeaderElement && _this.fields.groupBy && _this.mode !== 'CheckBox' &&
                        _this.isPopupOpen()) {
                        _super.prototype.scrollStop.call(_this);
                    }
                    _this.updateMainList(true, value);
                    _this.removeChip(value);
                    _this.updateChipStatus();
                    var limit = _this.value && _this.value.length ? _this.value.length : 0;
                    if (limit < _this.maximumSelectionLength) {
                        var collection = _this.list.querySelectorAll('li.'
                            + dropDownBaseClasses.li + ':not(.e-active)');
                        removeClass(collection, 'e-disable');
                    }
                    _this.trigger('removed', eventArgs);
                    var targetEle_1 = eve && eve.currentTarget;
                    var isSelectAll = (targetEle_1 && targetEle_1.classList.contains('e-selectall-parent')) ? true : null;
                    if (!_this.changeOnBlur && !isClearAll && (eve && length && !isSelectAll)) {
                        _this.updateValueState(eve, _this.value, _this.tempValues);
                    }
                    if (length) {
                        _this.selectAllEventData.push(val_1);
                        _this.selectAllEventEle.push(element_1);
                    }
                    if (length === 1) {
                        if (!_this.changeOnBlur) {
                            _this.updateValueState(eve, _this.value, _this.tempValues);
                        }
                        var args = {
                            event: eve,
                            items: _this.selectAllEventEle,
                            itemData: _this.selectAllEventData,
                            isInteracted: eve ? true : false,
                            isChecked: false
                        };
                        _this.trigger('selectedAll', args);
                        _this.selectAllEventData = [];
                        _this.selectAllEventEle = [];
                    }
                    if (isClearAll && (length === 1 || length === null)) {
                        _this.clearAllCallback(eve, isClearAll);
                    }
                    if (isBlazor() && _this.isServerRendered && (isNullOrUndefined(_this.value) || _this.value.length === 0)) {
                        _this.updatedataValueItems(eve);
                    }
                }
            });
        }
    };
    MultiSelect.prototype.updateMainList = function (state, value) {
        if (this.allowFiltering || this.mode === 'CheckBox') {
            var element2 = this.findListElement(this.mainList, 'li', 'data-value', value);
            if (element2) {
                if (state) {
                    element2.setAttribute('aria-selected', 'false');
                    removeClass([element2], this.hideSelectedItem ?
                        HIDE_LIST :
                        dropDownBaseClasses.selected);
                    if (this.mode === 'CheckBox') {
                        element2.firstElementChild.setAttribute('aria-checked', 'false');
                        removeClass([element2.firstElementChild.lastElementChild], 'e-check');
                    }
                }
                else {
                    element2.setAttribute('aria-selected', 'true');
                    addClass([element2], this.hideSelectedItem ?
                        HIDE_LIST :
                        dropDownBaseClasses.selected);
                    if (this.mode === 'CheckBox') {
                        element2.firstElementChild.setAttribute('aria-checked', 'true');
                        addClass([element2.firstElementChild.lastElementChild], 'e-check');
                    }
                }
            }
        }
    };
    MultiSelect.prototype.removeChip = function (value) {
        if (this.chipCollectionWrapper) {
            var element = this.findListElement(this.chipCollectionWrapper, 'span', 'data-value', value);
            if (element) {
                remove(element);
            }
        }
    };
    MultiSelect.prototype.setWidth = function (width) {
        if (!isNullOrUndefined(width)) {
            if (typeof width === 'number') {
                this.overAllWrapper.style.width = formatUnit(width);
            }
            else if (typeof width === 'string') {
                this.overAllWrapper.style.width = (width.match(/px|%|em/)) ? (width) : (formatUnit(width));
            }
        }
    };
    MultiSelect.prototype.updateChipStatus = function () {
        if (this.value && this.value.length) {
            if (!isNullOrUndefined(this.chipCollectionWrapper)) {
                (this.chipCollectionWrapper.style.display = '');
            }
            if (this.mode === 'Delimiter' || this.mode === 'CheckBox') {
                this.showDelimWrapper();
            }
            this.showOverAllClear();
        }
        else {
            if (!isNullOrUndefined(this.chipCollectionWrapper)) {
                this.chipCollectionWrapper.style.display = 'none';
            }
            if (!isNullOrUndefined(this.delimiterWrapper)) {
                (this.delimiterWrapper.style.display = 'none');
            }
            this.hideOverAllClear();
        }
    };
    MultiSelect.prototype.addValue = function (value, text, eve) {
        if (!this.value) {
            this.value = [];
        }
        if (this.value.indexOf(value) < 0) {
            this.setProperties({ value: [].concat([], this.value, [value]) }, true);
        }
        var element = this.findListElement(this.list, 'li', 'data-value', value);
        this.removeFocus();
        if (element) {
            this.addListFocus(element);
            this.addListSelection(element);
        }
        if (this.mode !== 'Delimiter' && this.mode !== 'CheckBox') {
            this.addChip(text, value, eve);
        }
        if (this.hideSelectedItem && this.fields.groupBy) {
            this.hideGroupItem(value);
        }
        this.updateChipStatus();
        this.checkMaxSelection();
    };
    MultiSelect.prototype.checkMaxSelection = function () {
        var limit = this.value && this.value.length ? this.value.length : 0;
        if (limit === this.maximumSelectionLength) {
            var collection = this.list.querySelectorAll('li.'
                + dropDownBaseClasses.li + ':not(.e-active)');
            addClass(collection, 'e-disable');
        }
    };
    MultiSelect.prototype.dispatchSelect = function (value, eve, element, isNotTrigger, length) {
        var _this = this;
        var list = this.listData;
        if (this.initStatus && !isNotTrigger) {
            var val_2 = this.getDataByValue(value);
            var eventArgs = {
                e: eve,
                item: element,
                itemData: val_2,
                isInteracted: eve ? true : false,
                cancel: false
            };
            this.trigger('select', eventArgs, function (eventArgs) {
                if (!eventArgs.cancel) {
                    if (length) {
                        _this.selectAllEventData.push(val_2);
                        _this.selectAllEventEle.push(element);
                    }
                    if (length === 1) {
                        var args = {
                            event: eve,
                            items: _this.selectAllEventEle,
                            itemData: _this.selectAllEventData,
                            isInteracted: eve ? true : false,
                            isChecked: true
                        };
                        _this.trigger('selectedAll', args);
                        _this.selectAllEventData = [];
                    }
                    if (_this.allowCustomValue && _this.isServerRendered && _this.listData !== list) {
                        _this.listData = list;
                    }
                    _this.updateListSelectEventCallback(value, element, eve);
                    if (_this.hideSelectedItem && _this.fixedHeaderElement && _this.fields.groupBy && _this.mode !== 'CheckBox') {
                        _super.prototype.scrollStop.call(_this);
                    }
                }
            });
        }
    };
    MultiSelect.prototype.addChip = function (text, value, e) {
        if (this.chipCollectionWrapper) {
            this.getChip(text, value, e);
        }
    };
    MultiSelect.prototype.removeChipFocus = function () {
        var elements = this.chipCollectionWrapper.querySelectorAll('span.' + CHIP);
        var closeElements = this.chipCollectionWrapper.querySelectorAll('span.' + CHIP_CLOSE.split(' ')[0]);
        removeClass(elements, CHIP_SELECTED);
        if (Browser.isDevice) {
            for (var index = 0; index < closeElements.length; index++) {
                closeElements[index].style.display = 'none';
            }
        }
    };
    MultiSelect.prototype.onMobileChipInteraction = function (e) {
        var chipElem = closest(e.target, '.' + CHIP);
        var chipClose = chipElem.querySelector('span.' + CHIP_CLOSE.split(' ')[0]);
        if (this.enabled && !this.readonly) {
            if (!chipElem.classList.contains(CHIP_SELECTED)) {
                this.removeChipFocus();
                chipClose.style.display = '';
                chipElem.classList.add(CHIP_SELECTED);
            }
            this.refreshPopup();
            e.preventDefault();
        }
    };
    MultiSelect.prototype.multiCompiler = function (multiselectTemplate) {
        var checkTemplate = false;
        if (multiselectTemplate) {
            try {
                checkTemplate = (selectAll(multiselectTemplate, document).length) ? true : false;
            }
            catch (exception) {
                checkTemplate = false;
            }
        }
        return checkTemplate;
    };
    MultiSelect.prototype.getChip = function (data, value, e) {
        var _this = this;
        var itemData = { text: value, value: value };
        var chip = this.createElement('span', {
            className: CHIP,
            attrs: { 'data-value': value, 'title': data }
        });
        var compiledString;
        var chipContent = this.createElement('span', { className: CHIP_CONTENT });
        var chipClose = this.createElement('span', { className: CHIP_CLOSE });
        if (this.mainData) {
            itemData = (isBlazor() && this.isServerRendered) ? JSON.parse(JSON.stringify(this.getDataByValue(value)))
                : this.getDataByValue(value);
        }
        if (this.valueTemplate && !isNullOrUndefined(itemData)) {
            var valuecheck = this.multiCompiler(this.valueTemplate);
            if (valuecheck) {
                compiledString = compile(select(this.valueTemplate, document).innerHTML.trim());
            }
            else {
                compiledString = compile(this.valueTemplate);
            }
            // eslint-disable-next-line
            var valueCompTemp = compiledString(itemData, this, 'valueTemplate', this.valueTemplateId, this.isStringTemplate, null, chipContent);
            if (valueCompTemp && valueCompTemp.length > 0) {
                for (var i = 0; i < valueCompTemp.length; i++) {
                    chipContent.appendChild(valueCompTemp[i]);
                }
            }
            this.renderReactTemplates();
            this.DropDownBaseupdateBlazorTemplates(false, false, false, false, true, false, false, false);
        }
        else if (this.enableHtmlSanitizer) {
            chipContent.innerText = data;
        }
        else {
            chipContent.innerHTML = data;
        }
        chip.appendChild(chipContent);
        var eventArgs = {
            isInteracted: e ? true : false,
            itemData: itemData,
            e: e,
            setClass: function (classes) {
                addClass([chip], classes);
            },
            cancel: false
        };
        this.isPreventChange = this.isAngular && this.preventChange;
        this.trigger('tagging', eventArgs, function (eventArgs) {
            if (!eventArgs.cancel) {
                if (eventArgs.setClass && typeof eventArgs.setClass === 'string' && (isBlazor() && _this.isServerRendered)) {
                    addClass([chip], eventArgs.setClass);
                }
                if (Browser.isDevice) {
                    chip.classList.add(MOBILE_CHIP);
                    append([chipClose], chip);
                    chipClose.style.display = 'none';
                    EventHandler.add(chip, 'click', _this.onMobileChipInteraction, _this);
                }
                else {
                    EventHandler.add(chip, 'mousedown', _this.chipClick, _this);
                    if (_this.showClearButton) {
                        chip.appendChild(chipClose);
                    }
                }
                EventHandler.add(chipClose, 'mousedown', _this.onChipRemove, _this);
                _this.chipCollectionWrapper.appendChild(chip);
                if (!_this.changeOnBlur && e) {
                    _this.updateValueState(e, _this.value, _this.tempValues);
                }
            }
        });
    };
    MultiSelect.prototype.calcPopupWidth = function () {
        var width = formatUnit(this.popupWidth);
        if (width.indexOf('%') > -1) {
            var inputWidth = (this.componentWrapper.offsetWidth) * parseFloat(width) / 100;
            width = inputWidth.toString() + 'px';
        }
        return width;
    };
    MultiSelect.prototype.mouseIn = function () {
        if (this.enabled && !this.readonly) {
            this.showOverAllClear();
        }
    };
    MultiSelect.prototype.mouseOut = function () {
        if (!this.inputFocus) {
            this.overAllClear.style.display = 'none';
        }
    };
    MultiSelect.prototype.listOption = function (dataSource, fields) {
        var iconCss = isNullOrUndefined(fields.iconCss) ? false : true;
        var fieldProperty = isNullOrUndefined(fields.properties) ? fields :
            fields.properties;
        this.listCurrentOptions = (fields.text !== null || fields.value !== null) ? {
            fields: fieldProperty, showIcon: iconCss, ariaAttributes: { groupItemRole: 'presentation' }
        } : { fields: { value: 'text' } };
        extend(this.listCurrentOptions, this.listCurrentOptions, fields, true);
        if (this.mode === 'CheckBox') {
            this.notify('listoption', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', dataSource: dataSource, fieldProperty: fieldProperty });
        }
        return this.listCurrentOptions;
    };
    MultiSelect.prototype.renderPopup = function () {
        var _this = this;
        if (!this.list) {
            _super.prototype.render.call(this);
        }
        if (!this.popupObj) {
            document.body.appendChild(this.popupWrapper);
            var checkboxFilter = this.popupWrapper.querySelector('.' + FILTERPARENT);
            if (this.mode === 'CheckBox' && !this.allowFiltering && checkboxFilter && this.filterParent) {
                checkboxFilter.remove();
                this.filterParent = null;
            }
            var overAllHeight = parseInt(this.popupHeight, 10);
            this.popupWrapper.style.visibility = 'hidden';
            if (this.headerTemplate) {
                this.setHeaderTemplate();
                overAllHeight -= this.header.offsetHeight;
            }
            append([this.list], this.popupWrapper);
            if (this.footerTemplate) {
                this.setFooterTemplate();
                overAllHeight -= this.footer.offsetHeight;
            }
            if (this.mode === 'CheckBox' && this.showSelectAll) {
                this.notify('selectAll', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox' });
                overAllHeight -= this.selectAllHeight;
            }
            else if (this.mode === 'CheckBox' && !this.showSelectAll && (!this.headerTemplate && !this.footerTemplate)) {
                this.notify('selectAll', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox' });
                overAllHeight = parseInt(this.popupHeight, 10);
            }
            else if (this.mode === 'CheckBox' && !this.showSelectAll) {
                this.notify('selectAll', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox' });
                overAllHeight = parseInt(this.popupHeight, 10);
                if (this.headerTemplate && this.header) {
                    overAllHeight -= this.header.offsetHeight;
                }
                if (this.footerTemplate && this.footer) {
                    overAllHeight -= this.footer.offsetHeight;
                }
            }
            if (this.mode === 'CheckBox') {
                var args = {
                    module: 'CheckBoxSelection',
                    enable: this.mode === 'CheckBox',
                    popupElement: this.popupWrapper
                };
                if (this.allowFiltering) {
                    this.notify('searchBox', args);
                    overAllHeight -= this.searchBoxHeight;
                }
                addClass([this.popupWrapper], 'e-checkbox');
            }
            if (this.popupHeight !== 'auto') {
                this.list.style.maxHeight = formatUnit(overAllHeight);
                this.popupWrapper.style.maxHeight = formatUnit(this.popupHeight);
            }
            else {
                this.list.style.maxHeight = formatUnit(this.popupHeight);
            }
            this.popupObj = new Popup(this.popupWrapper, {
                width: this.calcPopupWidth(), targetType: 'relative', position: { X: 'left', Y: 'bottom' },
                relateTo: this.overAllWrapper, collision: { X: 'flip', Y: 'flip' }, offsetY: 1,
                enableRtl: this.enableRtl, zIndex: this.zIndex,
                close: function () {
                    if (_this.popupObj.element.parentElement) {
                        _this.popupObj.unwireScrollEvents();
                        detach(_this.popupObj.element);
                    }
                },
                open: function () {
                    _this.popupObj.resolveCollision();
                    if (!_this.isFirstClick) {
                        var ulElement = _this.list.querySelector('ul');
                        if (ulElement) {
                            if (_this.itemTemplate && (isBlazor() && _this.isServerRendered)) {
                                setTimeout(function () {
                                    _this.mainList = _this.ulElement;
                                }, 0);
                            }
                            else if (!(_this.mode !== 'CheckBox' && (_this.allowFiltering || _this.allowCustomValue) &&
                                _this.targetElement().trim() !== '')) {
                                _this.mainList = ulElement.cloneNode ? ulElement.cloneNode(true) : ulElement;
                            }
                        }
                        _this.isFirstClick = true;
                    }
                    _this.popupObj.wireScrollEvents();
                    if (!(_this.mode !== 'CheckBox' && (_this.allowFiltering || _this.allowCustomValue) &&
                        _this.targetElement().trim() !== '')) {
                        _this.loadTemplate();
                    }
                    _this.setScrollPosition();
                    if (_this.allowFiltering) {
                        _this.notify('inputFocus', {
                            module: 'CheckBoxSelection', enable: _this.mode === 'CheckBox', value: 'focus'
                        });
                    }
                }, targetExitViewport: function () {
                    if (!Browser.isDevice) {
                        _this.hidePopup();
                    }
                }
            });
            if (this.mode === 'CheckBox' && Browser.isDevice && this.allowFiltering) {
                this.notify('deviceSearchBox', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox' });
            }
            this.popupObj.close();
            this.popupWrapper.style.visibility = '';
        }
    };
    MultiSelect.prototype.setHeaderTemplate = function () {
        var compiledString;
        if (this.header) {
            this.header.remove();
        }
        this.header = this.createElement('div');
        addClass([this.header], HEADER);
        var headercheck = this.multiCompiler(this.headerTemplate);
        if (headercheck) {
            compiledString = compile(select(this.headerTemplate, document).innerHTML.trim());
        }
        else {
            compiledString = compile(this.headerTemplate);
        }
        // eslint-disable-next-line
        var elements = compiledString({}, this, 'headerTemplate', this.headerTemplateId, this.isStringTemplate, null, this.header);
        if (elements && elements.length > 0) {
            for (var temp = 0; temp < elements.length; temp++) {
                this.header.appendChild(elements[temp]);
            }
        }
        this.DropDownBaseupdateBlazorTemplates(false, false, false, false, false, true, false);
        if (this.mode === 'CheckBox' && this.showSelectAll) {
            prepend([this.header], this.popupWrapper);
        }
        else {
            append([this.header], this.popupWrapper);
        }
        EventHandler.add(this.header, 'mousedown', this.onListMouseDown, this);
    };
    MultiSelect.prototype.setFooterTemplate = function () {
        var compiledString;
        if (this.footer) {
            this.footer.remove();
        }
        this.footer = this.createElement('div');
        addClass([this.footer], FOOTER);
        var footercheck = this.multiCompiler(this.footerTemplate);
        if (footercheck) {
            compiledString = compile(select(this.footerTemplate, document).innerHTML.trim());
        }
        else {
            compiledString = compile(this.footerTemplate);
        }
        // eslint-disable-next-line
        var elements = compiledString({}, this, 'footerTemplate', this.footerTemplateId, this.isStringTemplate, null, this.footer);
        if (elements && elements.length > 0) {
            for (var temp = 0; temp < elements.length; temp++) {
                this.footer.appendChild(elements[temp]);
            }
        }
        this.DropDownBaseupdateBlazorTemplates(false, false, false, false, false, false, true);
        append([this.footer], this.popupWrapper);
        EventHandler.add(this.footer, 'mousedown', this.onListMouseDown, this);
    };
    MultiSelect.prototype.clearAll = function (e) {
        if (this.enabled && !this.readonly) {
            var temp = void 0;
            if (this.value && this.value.length > 0) {
                var liElement = this.list && this.list.querySelectorAll('li.e-list-item');
                if (liElement && liElement.length > 0) {
                    this.selectAllItems(false, e);
                }
                else {
                    this.removeIndex = 0;
                    for (temp = this.value[this.removeIndex]; this.removeIndex < this.value.length; temp = this.value[this.removeIndex]) {
                        this.removeValue(temp, e, null, true);
                        if (this.value === null && isBlazor() && this.isServerRendered) {
                            break;
                        }
                    }
                }
            }
            else {
                this.clearAllCallback(e);
            }
        }
    };
    MultiSelect.prototype.clearAllCallback = function (e, isClearAll) {
        var tempValues = this.value ? this.value.slice() : [];
        if (this.mainList && this.listData && ((this.allowFiltering && this.mode !== 'CheckBox') || this.allowCustomValue)) {
            var list = this.mainList.cloneNode ? this.mainList.cloneNode(true) : this.mainList;
            this.onActionComplete(list, this.mainData);
        }
        this.focusAtFirstListItem();
        this.updateDelimeter(this.delimiterChar, e);
        if (this.mode !== 'Box' && (!this.inputFocus || this.mode === 'CheckBox')) {
            this.updateDelimView();
        }
        if (this.inputElement.value !== '') {
            this.makeTextBoxEmpty();
            this.search(null);
        }
        this.checkPlaceholderSize();
        if (this.isPopupOpen()) {
            this.refreshPopup();
        }
        if (!this.inputFocus) {
            if (this.changeOnBlur) {
                this.updateValueState(e, this.value, tempValues);
            }
            if (this.mode !== 'CheckBox') {
                this.inputElement.focus();
            }
        }
        if (this.mode === 'CheckBox') {
            this.refreshPlaceHolder();
            this.refreshInputHight();
            if (this.changeOnBlur && isClearAll && (isNullOrUndefined(this.value) || this.value.length === 0)) {
                this.updateValueState(e, this.value, this.tempValues);
            }
        }
        if (!this.changeOnBlur && isClearAll && (isNullOrUndefined(this.value) || this.value.length === 0)) {
            this.updateValueState(e, this.value, this.tempValues);
        }
        if (this.mode === 'CheckBox' && this.enableGroupCheckBox && !isNullOrUndefined(this.fields.groupBy)) {
            this.updateListItems(this.list.querySelectorAll('li.e-list-item'), this.mainList.querySelectorAll('li.e-list-item'));
        }
        e.preventDefault();
    };
    MultiSelect.prototype.windowResize = function () {
        this.refreshPopup();
        if ((!this.inputFocus || this.mode === 'CheckBox') && this.viewWrapper && this.viewWrapper.parentElement) {
            this.updateDelimView();
        }
    };
    MultiSelect.prototype.resetValueHandler = function (e) {
        var formElement = closest(this.inputElement, 'form');
        if (formElement && e.target === formElement) {
            var textVal = (this.element.tagName === this.getNgDirective()) ?
                null : this.element.getAttribute('data-initial-value');
            this.text = textVal;
        }
    };
    MultiSelect.prototype.wireEvent = function () {
        EventHandler.add(this.componentWrapper, 'mousedown', this.wrapperClick, this);
        EventHandler.add(window, 'resize', this.windowResize, this);
        EventHandler.add(this.inputElement, 'focus', this.focusInHandler, this);
        EventHandler.add(this.inputElement, 'keydown', this.onKeyDown, this);
        EventHandler.add(this.inputElement, 'keyup', this.keyUp, this);
        if (this.mode !== 'CheckBox') {
            EventHandler.add(this.inputElement, 'input', this.onInput, this);
        }
        EventHandler.add(this.inputElement, 'blur', this.onBlur, this);
        EventHandler.add(this.componentWrapper, 'mousemove', this.mouseIn, this);
        var formElement = closest(this.inputElement, 'form');
        if (formElement) {
            EventHandler.add(formElement, 'reset', this.resetValueHandler, this);
        }
        EventHandler.add(this.componentWrapper, 'mouseout', this.mouseOut, this);
        EventHandler.add(this.overAllClear, 'mouseup', this.clearAll, this);
        EventHandler.add(this.inputElement, 'paste', this.pasteHandler, this);
    };
    MultiSelect.prototype.onInput = function (e) {
        if (this.keyDownStatus) {
            this.isValidKey = true;
        }
        else {
            this.isValidKey = false;
        }
        this.keyDownStatus = false;
        // For Filtering works in mobile firefox
        if (Browser.isDevice && Browser.info.name === 'mozilla') {
            this.search(e);
        }
    };
    MultiSelect.prototype.pasteHandler = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.expandTextbox();
            _this.search(event);
        });
    };
    MultiSelect.prototype.search = function (e) {
        var _this = this;
        if (!isNullOrUndefined(e)) {
            this.keyCode = e.keyCode;
        }
        if (!this.isPopupOpen() && this.openOnClick) {
            this.showPopup();
        }
        this.openClick(e);
        if (this.checkTextLength() && !this.allowFiltering && !isNullOrUndefined(e) && (e.keyCode !== 8)) {
            this.focusAtFirstListItem();
        }
        else {
            var text = this.targetElement();
            if (this.allowFiltering) {
                var eventArgs_1 = {
                    preventDefaultAction: false,
                    text: this.targetElement(),
                    updateData: function (dataSource, query, fields) {
                        if (eventArgs_1.cancel) {
                            return;
                        }
                        _this.isFiltered = true;
                        _this.remoteFilterAction = true;
                        _this.dataUpdater(dataSource, query, fields);
                    },
                    event: e,
                    cancel: false
                };
                this.trigger('filtering', eventArgs_1, function (eventArgs) {
                    if (!eventArgs.cancel) {
                        if (!_this.isFiltered && !eventArgs.preventDefaultAction) {
                            _this.filterAction = true;
                            _this.dataUpdater(_this.dataSource, null, _this.fields);
                        }
                    }
                });
            }
            else if (this.allowCustomValue) {
                var query = new Query();
                query = (text !== '') ? query.where(this.fields.text, 'startswith', text, this.ignoreCase, this.ignoreAccent) : query;
                this.dataUpdater(this.mainData, query, this.fields);
            }
            else {
                var liCollections = this.list.querySelectorAll('li.' + dropDownBaseClasses.li + ':not(.e-hide-listitem)');
                var activeElement = Search(this.targetElement(), liCollections, 'StartsWith', this.ignoreCase);
                if (activeElement && activeElement.item !== null) {
                    this.addListFocus(activeElement.item);
                    this.list.scrollTop =
                        activeElement.item.offsetHeight * activeElement.index;
                }
                else if (this.targetElement() !== '') {
                    this.removeFocus();
                }
                else {
                    this.focusAtFirstListItem();
                }
            }
        }
    };
    MultiSelect.prototype.preRender = function () {
        if (this.allowFiltering === null) {
            this.allowFiltering = (this.mode === 'CheckBox') ? true : false;
        }
        this.initializeData();
        this.updateDataAttribute(this.htmlAttributes);
        _super.prototype.preRender.call(this);
    };
    MultiSelect.prototype.getLocaleName = function () {
        return 'multi-select';
    };
    MultiSelect.prototype.initializeData = function () {
        this.mainListCollection = [];
        this.beforePopupOpen = false;
        this.filterAction = false;
        this.remoteFilterAction = false;
        this.isFirstClick = false;
        this.mobFilter = true;
        this.isFiltered = false;
        this.focused = true;
        this.initial = true;
        this.backCommand = true;
    };
    MultiSelect.prototype.updateData = function (delimiterChar, e) {
        var data = '';
        var delim = this.mode === 'Delimiter' || this.mode === 'CheckBox';
        var text = [];
        var temp;
        var tempData = this.listData;
        this.listData = this.mainData;
        this.hiddenElement.innerHTML = '';
        if (!isNullOrUndefined(this.value)) {
            for (var index = 0; !isNullOrUndefined(this.value[index]); index++) {
                var listValue = this.findListElement(((!isNullOrUndefined(this.mainList)) ? this.mainList : this.ulElement), 'li', 'data-value', this.value[index]);
                if (!(isBlazor() && this.isServerRendered) && isNullOrUndefined(listValue) && !this.allowCustomValue) {
                    this.value.splice(index, 1);
                    index -= 1;
                }
                else {
                    if (this.listData) {
                        temp = this.getTextByValue(this.value[index]);
                    }
                    else {
                        temp = this.value[index];
                    }
                    data += temp + delimiterChar + ' ';
                    text.push(temp);
                }
                this.hiddenElement.innerHTML += '<option selected value ="' + this.value[index] + '">' + index + '</option>';
            }
        }
        this.setProperties({ text: text.toString() }, true);
        if (delim) {
            this.updateWrapperText(this.delimiterWrapper, data);
            this.delimiterWrapper.setAttribute('id', getUniqueID('delim_val'));
            this.inputElement.setAttribute('aria-describedby', this.delimiterWrapper.id);
            this.inputElement.setAttribute('aria-labelledby', this.delimiterWrapper.id);
        }
        var targetEle = e && e.target;
        var isClearAll = (targetEle && targetEle.classList.contains('e-close-hooker')) ? true : null;
        if (!this.changeOnBlur && ((e && !isClearAll)) || this.isSelectAll) {
            this.isSelectAll = false;
            this.updateValueState(e, this.value, this.tempValues);
        }
        this.listData = tempData;
        this.addValidInputClass();
    };
    MultiSelect.prototype.initialTextUpdate = function () {
        if (!isNullOrUndefined(this.text)) {
            var textArr = this.text.split(this.delimiterChar);
            var textVal = [];
            for (var index = 0; textArr.length > index; index++) {
                var val = this.getValueByText(textArr[index]);
                if (!isNullOrUndefined(val)) {
                    textVal.push(val);
                }
                else if (this.allowCustomValue) {
                    textVal.push(textArr[index]);
                }
            }
            if (textVal && textVal.length) {
                this.setProperties({ value: textVal }, true);
            }
        }
        else {
            this.setProperties({ value: null }, true);
        }
    };
    MultiSelect.prototype.renderList = function (isEmptyData) {
        if (!isEmptyData && this.allowCustomValue && this.list && (this.list.textContent === this.noRecordsTemplate
            || this.list.querySelector('.e-ul') && this.list.querySelector('.e-ul').childElementCount === 0)) {
            isEmptyData = true;
        }
        _super.prototype.render.call(this, isEmptyData);
        this.unwireListEvents();
        this.wireListEvents();
    };
    MultiSelect.prototype.initialValueUpdate = function () {
        if (this.list) {
            var text = void 0;
            var element = void 0;
            var value = void 0;
            if (this.chipCollectionWrapper) {
                this.chipCollectionWrapper.innerHTML = '';
            }
            this.removeListSelection();
            if (!isNullOrUndefined(this.value)) {
                for (var index = 0; !isNullOrUndefined(this.value[index]); index++) {
                    value = this.value[index];
                    element = this.findListElement(this.hideSelectedItem ? this.ulElement : this.list, 'li', 'data-value', value);
                    text = this.getTextByValue(value);
                    if ((element && (element.getAttribute('aria-selected') !== 'true')) ||
                        (element && (element.getAttribute('aria-selected') === 'true' && this.hideSelectedItem) &&
                            (this.mode === 'Box' || this.mode === 'Default'))) {
                        this.addChip(text, value);
                        this.addListSelection(element);
                    }
                    else if (value && this.allowCustomValue) {
                        var indexItem = this.listData.length;
                        var newValue = {};
                        setValue(this.fields.text, value, newValue);
                        setValue(this.fields.value, value, newValue);
                        var noDataEle = this.popupWrapper.querySelector('.' + dropDownBaseClasses.noData);
                        this.addItem(newValue, indexItem);
                        if (this.popupWrapper.contains(noDataEle)) {
                            this.list.setAttribute('style', noDataEle.getAttribute('style'));
                            this.popupWrapper.replaceChild(this.list, noDataEle);
                            this.wireListEvents();
                        }
                        this.addChip(text, value);
                        this.addListSelection(element);
                    }
                }
            }
            if (this.mode === 'CheckBox') {
                this.updateDelimView();
                if (this.changeOnBlur) {
                    this.updateValueState(null, this.value, this.tempValues);
                }
                this.updateDelimeter(this.delimiterChar);
                this.refreshInputHight();
            }
            else {
                this.updateDelimeter(this.delimiterChar);
            }
            if (this.mode === 'CheckBox' && this.showSelectAll && (isNullOrUndefined(this.value) || !this.value.length)) {
                this.notify('checkSelectAll', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', value: 'uncheck' });
            }
            if (this.mode === 'Box' || (this.mode === 'Default' && this.inputFocus)) {
                this.chipCollectionWrapper.style.display = '';
            }
            else if (this.mode === 'Delimiter' || this.mode === 'CheckBox') {
                this.showDelimWrapper();
            }
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    MultiSelect.prototype.updateActionCompleteData = function (li, item) {
        if (this.value && this.value.indexOf(li.getAttribute('data-value')) > -1) {
            this.mainList = this.ulElement;
            addClass([li], HIDE_LIST);
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    MultiSelect.prototype.updateAddItemList = function (list, itemCount) {
        if (this.popupObj && this.popupObj.element && this.popupObj.element.querySelector('.' + dropDownBaseClasses.noData) && list) {
            this.list = list;
            this.mainList = this.ulElement = list.querySelector('ul');
            remove(this.popupWrapper.querySelector('.e-content'));
            this.popupObj = null;
            this.renderPopup();
        }
    };
    MultiSelect.prototype.updateDataList = function () {
        if (this.mainList && this.ulElement && this.mainList.childElementCount < this.ulElement.childElementCount) {
            this.mainList = this.ulElement.cloneNode ? this.ulElement.cloneNode(true) : this.ulElement;
        }
    };
    MultiSelect.prototype.isValidLI = function (li) {
        return (li && !li.classList.contains(dropDownBaseClasses.disabled) && !li.classList.contains(dropDownBaseClasses.group) &&
            li.classList.contains(dropDownBaseClasses.li));
    };
    MultiSelect.prototype.updateListSelection = function (li, e, length) {
        var customVal = li.getAttribute('data-value');
        var value = this.getFormattedValue(customVal);
        if (this.allowCustomValue && ((customVal !== 'false' && value === false) ||
            (!isNullOrUndefined(value) && value.toString() === 'NaN'))) {
            value = customVal;
        }
        this.removeHover();
        if (!this.value || this.value.indexOf(value) === -1) {
            this.dispatchSelect(value, e, li, (li.getAttribute('aria-selected') === 'true'), length);
        }
        else {
            this.removeValue(value, e, length);
        }
    };
    MultiSelect.prototype.updateListSelectEventCallback = function (value, li, e) {
        var _this = this;
        var text = this.getTextByValue(value);
        if ((this.allowCustomValue || this.allowFiltering) && !this.findListElement(this.mainList, 'li', 'data-value', value)) {
            var temp_1 = li.cloneNode(true);
            var fieldValue = this.fields.value ? this.fields.value : 'value';
            if (this.allowCustomValue && this.mainData.length && typeof getValue(fieldValue, this.mainData[0]) === 'number') {
                value = !isNaN(parseFloat(value.toString())) ? parseFloat(value.toString()) : value;
            }
            var data_1 = this.getDataByValue(value);
            var eventArgs = {
                newData: data_1,
                cancel: false
            };
            this.trigger('customValueSelection', eventArgs, function (eventArgs) {
                if (!eventArgs.cancel) {
                    append([temp_1], _this.mainList);
                    _this.mainData.push(data_1);
                    _this.remoteCustomValue = false;
                    _this.addValue(value, text, e);
                    if (isBlazor() && _this.isServerRendered) {
                        _this.checkPlaceholderSize();
                        _this.makeTextBoxEmpty();
                    }
                }
            });
        }
        else {
            this.remoteCustomValue = false;
            this.addValue(value, text, e);
        }
        if (isBlazor() && this.isServerRendered && this.value && this.list &&
            (this.value.length === this.list.querySelectorAll('li.e-list-item').length ||
                this.value.length === this.maximumSelectionLength)) {
            this.updatedataValueItems(e);
            this.checkPlaceholderSize();
        }
        if (isBlazor() && this.isServerRendered) {
            this.checkPlaceholderSize();
            this.makeTextBoxEmpty();
        }
    };
    MultiSelect.prototype.removeListSelection = function () {
        var className = this.hideSelectedItem ?
            HIDE_LIST :
            dropDownBaseClasses.selected;
        var selectedItems = this.list.querySelectorAll('.' + className);
        var temp = selectedItems.length;
        if (selectedItems && selectedItems.length) {
            removeClass(selectedItems, className);
            while (temp > 0) {
                selectedItems[temp - 1].setAttribute('aria-selected', 'false');
                temp--;
            }
        }
        if (!isNullOrUndefined(this.mainList)) {
            var selectItems = this.mainList.querySelectorAll('.' + className);
            var temp1 = selectItems.length;
            if (selectItems && selectItems.length) {
                removeClass(selectItems, className);
                while (temp1 > 0) {
                    selectItems[temp1 - 1].setAttribute('aria-selected', 'false');
                    if (this.mode === 'CheckBox') {
                        if (selectedItems && (selectedItems.length > (temp1 - 1))) {
                            selectedItems[temp1 - 1].firstElementChild.setAttribute('aria-checked', 'false');
                            removeClass([selectedItems[temp1 - 1].firstElementChild.lastElementChild], 'e-check');
                        }
                        selectItems[temp1 - 1].firstElementChild.setAttribute('aria-checked', 'false');
                        removeClass([selectItems[temp1 - 1].firstElementChild.lastElementChild], 'e-check');
                    }
                    temp1--;
                }
            }
        }
    };
    MultiSelect.prototype.removeHover = function () {
        var hoveredItem = this.list.querySelectorAll('.' + dropDownBaseClasses.hover);
        if (hoveredItem && hoveredItem.length) {
            removeClass(hoveredItem, dropDownBaseClasses.hover);
        }
    };
    MultiSelect.prototype.removeFocus = function () {
        if (this.list && this.mainList) {
            var hoveredItem = this.list.querySelectorAll('.' + dropDownBaseClasses.focus);
            var mainlist = this.mainList.querySelectorAll('.' + dropDownBaseClasses.focus);
            if (hoveredItem && hoveredItem.length) {
                removeClass(hoveredItem, dropDownBaseClasses.focus);
                removeClass(mainlist, dropDownBaseClasses.focus);
            }
        }
    };
    MultiSelect.prototype.addListHover = function (li) {
        if (this.enabled && this.isValidLI(li)) {
            this.removeHover();
            addClass([li], dropDownBaseClasses.hover);
        }
        else {
            if ((li !== null && li.classList.contains('e-list-group-item')) && this.enableGroupCheckBox && this.mode === 'CheckBox'
                && !isNullOrUndefined(this.fields.groupBy)) {
                this.removeHover();
                addClass([li], dropDownBaseClasses.hover);
            }
        }
    };
    MultiSelect.prototype.addListFocus = function (element) {
        if (this.enabled && this.isValidLI(element)) {
            this.removeFocus();
            addClass([element], dropDownBaseClasses.focus);
        }
        else {
            if (this.enableGroupCheckBox && this.mode === 'CheckBox' && !isNullOrUndefined(this.fields.groupBy)) {
                addClass([element], dropDownBaseClasses.focus);
            }
        }
    };
    MultiSelect.prototype.addListSelection = function (element) {
        var className = this.hideSelectedItem ?
            HIDE_LIST :
            dropDownBaseClasses.selected;
        if (this.isValidLI(element) && !element.classList.contains(dropDownBaseClasses.hover)) {
            addClass([element], className);
            this.updateMainList(false, element.getAttribute('data-value'));
            element.setAttribute('aria-selected', 'true');
            if (this.mode === 'CheckBox') {
                var ariaCheck = element.firstElementChild.getAttribute('aria-checked');
                if (ariaCheck === 'false' || isNullOrUndefined(ariaCheck)) {
                    this.notify('updatelist', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', li: element, e: this });
                }
            }
            this.notify('activeList', { module: 'CheckBoxSelection', enable: this.mode === 'CheckBox', li: element, e: this });
            if (this.chipCollectionWrapper) {
                this.removeChipSelection();
            }
            attributes(this.inputElement, { 'aria-activedescendant': element.id });
        }
    };
    MultiSelect.prototype.updateDelimeter = function (delimChar, e) {
        this.updateData(delimChar, e);
    };
    MultiSelect.prototype.onMouseClick = function (e) {
        var _this = this;
        this.keyCode = null;
        this.scrollFocusStatus = false;
        var target = e.target;
        var li = closest(target, '.' + dropDownBaseClasses.li);
        var headerLi = closest(target, '.' + dropDownBaseClasses.group);
        if (headerLi && this.enableGroupCheckBox && this.mode === 'CheckBox' && this.fields.groupBy) {
            target = target.classList.contains('e-list-group-item') ? target.firstElementChild.lastElementChild
                : e.target;
            if (target.classList.contains('e-check')) {
                this.selectAllItem(false, e);
                target.classList.remove('e-check');
                target.classList.remove('e-stop');
                closest(target, '.' + 'e-list-group-item').classList.remove('e-active');
                target.setAttribute('aria-selected', 'false');
            }
            else {
                this.selectAllItem(true, e);
                target.classList.remove('e-stop');
                target.classList.add('e-check');
                closest(target, '.' + 'e-list-group-item').classList.add('e-active');
                target.setAttribute('aria-selected', 'true');
            }
            this.refreshSelection();
            this.checkSelectAll();
        }
        else {
            if (this.isValidLI(li)) {
                var limit = this.value && this.value.length ? this.value.length : 0;
                if (li.classList.contains('e-active')) {
                    limit = limit - 1;
                }
                if (limit < this.maximumSelectionLength) {
                    this.updateListSelection(li, e);
                    this.checkPlaceholderSize();
                    this.addListFocus(li);
                    if ((this.allowCustomValue || this.allowFiltering) && this.mainList && this.listData) {
                        if (this.mode !== 'CheckBox') {
                            this.focusAtLastListItem(li.getAttribute('data-value'));
                            this.refreshSelection();
                        }
                    }
                    else {
                        this.makeTextBoxEmpty();
                    }
                }
                if (this.mode === 'CheckBox') {
                    this.updateDelimView();
                    if (this.value && this.value.length > 50) {
                        setTimeout(function () {
                            _this.updateDelimeter(_this.delimiterChar, e);
                        }, 0);
                    }
                    else {
                        this.updateDelimeter(this.delimiterChar, e);
                    }
                    this.refreshInputHight();
                }
                else {
                    this.updateDelimeter(this.delimiterChar, e);
                }
                this.checkSelectAll();
                this.refreshPopup();
                if (this.hideSelectedItem) {
                    this.focusAtFirstListItem();
                }
                if (this.closePopupOnSelect) {
                    this.hidePopup();
                }
                else {
                    e.preventDefault();
                }
                this.makeTextBoxEmpty();
                this.findGroupStart(target);
            }
            else {
                e.preventDefault();
            }
            if (this.mode !== 'CheckBox') {
                this.refreshListItems(isNullOrUndefined(li) ? null : li.textContent);
            }
            this.refreshPlaceHolder();
            this.deselectHeader();
        }
    };
    MultiSelect.prototype.findGroupStart = function (target) {
        if (this.enableGroupCheckBox && this.mode === 'CheckBox' && !isNullOrUndefined(this.fields.groupBy)) {
            var count = 0;
            var liChecked = 0;
            var liUnchecked = 0;
            var groupValues = void 0;
            if (this.itemTemplate && !target.getElementsByClassName('e-frame').length) {
                while (!target.getElementsByClassName('e-frame').length) {
                    target = target.parentElement;
                }
            }
            if (target.classList.contains('e-frame')) {
                target = target.parentElement.parentElement;
            }
            groupValues = this.findGroupAttrtibutes(target, liChecked, liUnchecked, count, 0);
            groupValues = this.findGroupAttrtibutes(target, groupValues[0], groupValues[1], groupValues[2], 1);
            while (!target.classList.contains('e-list-group-item')) {
                if (target.classList.contains('e-list-icon')) {
                    target = target.parentElement;
                }
                target = target.previousElementSibling;
                if (target == null) {
                    break;
                }
            }
            this.updateCheckBox(target, groupValues[0], groupValues[1], groupValues[2]);
        }
    };
    MultiSelect.prototype.findGroupAttrtibutes = function (listElement, checked, unChecked, count, position) {
        while (!listElement.classList.contains('e-list-group-item')) {
            if (listElement.classList.contains('e-list-icon')) {
                listElement = listElement.parentElement;
            }
            if (listElement.getElementsByClassName('e-frame')[0].classList.contains('e-check') &&
                listElement.classList.contains('e-list-item')) {
                checked++;
            }
            else if (listElement.classList.contains('e-list-item')) {
                unChecked++;
            }
            count++;
            listElement = position ? listElement.nextElementSibling : listElement.previousElementSibling;
            if (listElement == null) {
                break;
            }
        }
        return [checked, unChecked, count];
    };
    MultiSelect.prototype.updateCheckBox = function (groupHeader, checked, unChecked, count) {
        if (groupHeader === null) {
            return;
        }
        var checkBoxElement = groupHeader.getElementsByClassName('e-frame')[0];
        if (count === checked) {
            checkBoxElement.classList.remove('e-stop');
            checkBoxElement.classList.add('e-check');
            closest(checkBoxElement, '.' + 'e-list-group-item').classList.add('e-active');
            groupHeader.setAttribute('aria-selected', 'true');
        }
        else if (count === unChecked) {
            checkBoxElement.classList.remove('e-check');
            checkBoxElement.classList.remove('e-stop');
            closest(checkBoxElement, '.' + 'e-list-group-item').classList.remove('e-active');
            groupHeader.setAttribute('aria-selected', 'false');
        }
        else if (this.maximumSelectionLength === checked - 1) {
            checkBoxElement.classList.remove('e-stop');
            groupHeader.setAttribute('aria-selected', 'true');
            closest(checkBoxElement, '.' + 'e-list-group-item').classList.add('e-active');
            checkBoxElement.classList.add('e-check');
        }
        else {
            checkBoxElement.classList.remove('e-check');
            checkBoxElement.classList.add('e-stop');
            closest(checkBoxElement, '.' + 'e-list-group-item').classList.add('e-active');
            groupHeader.setAttribute('aria-selected', 'false');
        }
    };
    MultiSelect.prototype.deselectHeader = function () {
        var limit = this.value && this.value.length ? this.value.length : 0;
        var collection = this.list.querySelectorAll('li.e-list-group-item:not(.e-active)');
        if (limit < this.maximumSelectionLength) {
            removeClass(collection, 'e-disable');
        }
        if (limit === this.maximumSelectionLength) {
            addClass(collection, 'e-disable');
        }
    };
    MultiSelect.prototype.onMouseOver = function (e) {
        var currentLi = closest(e.target, '.' + dropDownBaseClasses.li);
        if (currentLi === null && this.mode === 'CheckBox' && !isNullOrUndefined(this.fields.groupBy)
            && this.enableGroupCheckBox) {
            currentLi = closest(e.target, '.' + dropDownBaseClasses.group);
        }
        this.addListHover(currentLi);
    };
    MultiSelect.prototype.onMouseLeave = function () {
        this.removeHover();
    };
    MultiSelect.prototype.onListMouseDown = function (e) {
        e.preventDefault();
        this.scrollFocusStatus = true;
    };
    MultiSelect.prototype.onDocumentClick = function (e) {
        if (this.mode !== 'CheckBox') {
            var target = e.target;
            if (!(!isNullOrUndefined(this.popupObj) && closest(target, '[id="' + this.popupObj.element.id + '"]')) &&
                !this.overAllWrapper.contains(e.target)) {
                this.scrollFocusStatus = false;
            }
            else {
                this.scrollFocusStatus = (Browser.isIE || Browser.info.name === 'edge') && (document.activeElement === this.inputElement);
            }
        }
    };
    MultiSelect.prototype.wireListEvents = function () {
        EventHandler.add(document, 'mousedown', this.onDocumentClick, this);
        EventHandler.add(this.list, 'mousedown', this.onListMouseDown, this);
        EventHandler.add(this.list, 'mouseup', this.onMouseClick, this);
        EventHandler.add(this.list, 'mouseover', this.onMouseOver, this);
        EventHandler.add(this.list, 'mouseout', this.onMouseLeave, this);
    };
    MultiSelect.prototype.unwireListEvents = function () {
        EventHandler.remove(document, 'mousedown', this.onDocumentClick);
        if (this.list) {
            EventHandler.remove(this.list, 'mousedown', this.onListMouseDown);
            EventHandler.remove(this.list, 'mouseup', this.onMouseClick);
            EventHandler.remove(this.list, 'mouseover', this.onMouseOver);
            EventHandler.remove(this.list, 'mouseout', this.onMouseLeave);
        }
    };
    MultiSelect.prototype.hideOverAllClear = function () {
        if (!this.value || !this.value.length || this.inputElement.value === '') {
            this.overAllClear.style.display = 'none';
        }
    };
    MultiSelect.prototype.showOverAllClear = function () {
        if (((this.value && this.value.length) || this.inputElement.value !== '') && this.showClearButton && this.readonly !== true) {
            this.overAllClear.style.display = '';
        }
        else {
            this.overAllClear.style.display = 'none';
        }
    };
    /**
     * Sets the focus to widget for interaction.
     *
     * @returns {void}
     */
    MultiSelect.prototype.focusIn = function () {
        if (document.activeElement !== this.inputElement && this.enabled) {
            this.inputElement.focus();
        }
    };
    /**
     * Remove the focus from widget, if the widget is in focus state.
     *
     * @returns {void}
     */
    MultiSelect.prototype.focusOut = function () {
        if (document.activeElement === this.inputElement && this.enabled) {
            this.inputElement.blur();
        }
    };
    /**
     * Shows the spinner loader.
     *
     * @returns {void}
     */
    MultiSelect.prototype.showSpinner = function () {
        if (isNullOrUndefined(this.spinnerElement)) {
            if (this.overAllClear.style.display !== 'none') {
                this.spinnerElement = this.overAllClear;
            }
            else {
                this.spinnerElement = this.createElement('span', { className: CLOSEICON_CLASS + ' ' + SPINNER_CLASS });
                this.componentWrapper.appendChild(this.spinnerElement);
            }
            createSpinner({ target: this.spinnerElement, width: Browser.isDevice ? '16px' : '14px' }, this.createElement);
            addClass([this.spinnerElement], DISABLE_ICON);
            showSpinner(this.spinnerElement);
        }
    };
    /**
     * Hides the spinner loader.
     *
     * @returns {void}
     */
    MultiSelect.prototype.hideSpinner = function () {
        if (!isNullOrUndefined(this.spinnerElement)) {
            hideSpinner(this.spinnerElement);
            removeClass([this.spinnerElement], DISABLE_ICON);
            if (this.spinnerElement.classList.contains(SPINNER_CLASS)) {
                detach(this.spinnerElement);
            }
            else {
                this.spinnerElement.innerHTML = '';
            }
            this.spinnerElement = null;
        }
    };
    MultiSelect.prototype.updateWrapperText = function (wrapperType, wrapperData) {
        if (this.valueTemplate || !this.enableHtmlSanitizer) {
            wrapperType.innerHTML = wrapperData;
        }
        else {
            wrapperType.innerText = SanitizeHtmlHelper.sanitize(wrapperData);
        }
    };
    MultiSelect.prototype.updateDelimView = function () {
        if (this.delimiterWrapper) {
            this.hideDelimWrapper();
        }
        if (this.chipCollectionWrapper) {
            this.chipCollectionWrapper.style.display = 'none';
        }
        this.viewWrapper.style.display = '';
        this.viewWrapper.style.width = '';
        this.viewWrapper.classList.remove(TOTAL_COUNT_WRAPPER);
        if (this.value && this.value.length) {
            var data = '';
            var temp = void 0;
            var tempData = void 0;
            var tempIndex = 1;
            var wrapperleng = void 0;
            var remaining = void 0;
            var downIconWidth = 0;
            var overAllContainer = void 0;
            this.updateWrapperText(this.viewWrapper, data);
            var l10nLocale = {
                noRecordsTemplate: 'No records found',
                actionFailureTemplate: 'Request failed',
                overflowCountTemplate: '+${count} more..',
                totalCountTemplate: '${count} selected'
            };
            var l10n = new L10n(this.getLocaleName(), l10nLocale, this.locale);
            if (l10n.getConstant('actionFailureTemplate') === '') {
                l10n = new L10n('dropdowns', l10nLocale, this.locale);
            }
            if (l10n.getConstant('noRecordsTemplate') === '') {
                l10n = new L10n('dropdowns', l10nLocale, this.locale);
            }
            var remainContent = l10n.getConstant('overflowCountTemplate');
            var raminElement = this.createElement('span', {
                className: REMAIN_WRAPPER
            });
            var compiledString = compile(remainContent);
            var totalCompiledString = compile(l10n.getConstant('totalCountTemplate'));
            // eslint-disable-next-line
            var remainCompildTemp = compiledString({ 'count': this.value.length }, this, 'overflowCountTemplate', null, !this.isStringTemplate, null, raminElement);
            if (remainCompildTemp && remainCompildTemp.length > 0) {
                raminElement.appendChild(remainCompildTemp[0]);
            }
            this.viewWrapper.appendChild(raminElement);
            this.renderReactTemplates();
            var remainSize = raminElement.offsetWidth;
            remove(raminElement);
            if (this.showDropDownIcon) {
                downIconWidth = this.dropIcon.offsetWidth + parseInt(window.getComputedStyle(this.dropIcon).marginRight, 10);
            }
            this.checkClearIconWidth();
            if (!isNullOrUndefined(this.value)) {
                for (var index = 0; !isNullOrUndefined(this.value[index]); index++) {
                    data += (index === 0) ? '' : this.delimiterChar + ' ';
                    temp = this.getOverflowVal(index);
                    data += temp;
                    temp = this.viewWrapper.innerHTML;
                    this.updateWrapperText(this.viewWrapper, data);
                    wrapperleng = this.viewWrapper.offsetWidth +
                        parseInt(window.getComputedStyle(this.viewWrapper).paddingRight, 10);
                    overAllContainer = this.componentWrapper.offsetWidth -
                        parseInt(window.getComputedStyle(this.componentWrapper).paddingLeft, 10) -
                        parseInt(window.getComputedStyle(this.componentWrapper).paddingRight, 10);
                    if ((wrapperleng + downIconWidth + this.clearIconWidth) > overAllContainer) {
                        if (tempData !== undefined && tempData !== '') {
                            temp = tempData;
                            index = tempIndex + 1;
                        }
                        this.updateWrapperText(this.viewWrapper, temp);
                        remaining = this.value.length - index;
                        wrapperleng = this.viewWrapper.offsetWidth +
                            parseInt(window.getComputedStyle(this.viewWrapper).paddingRight, 10);
                        while (((wrapperleng + remainSize + downIconWidth + this.clearIconWidth) > overAllContainer) && wrapperleng !== 0
                            && this.viewWrapper.innerHTML !== '') {
                            var textArr = this.viewWrapper.innerHTML.split(this.delimiterChar);
                            textArr.pop();
                            this.viewWrapper.innerHTML = textArr.join(this.delimiterChar);
                            remaining++;
                            wrapperleng = this.viewWrapper.offsetWidth +
                                parseInt(window.getComputedStyle(this.viewWrapper).paddingRight, 10);
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
            if (remaining > 0) {
                var totalWidth = overAllContainer - downIconWidth - this.clearIconWidth;
                this.viewWrapper.appendChild(this.updateRemainTemplate(raminElement, this.viewWrapper, remaining, compiledString, totalCompiledString, totalWidth));
                this.updateRemainWidth(this.viewWrapper, totalWidth);
                this.updateRemainingText(raminElement, downIconWidth, remaining, compiledString, totalCompiledString);
            }
        }
        else {
            this.viewWrapper.innerHTML = '';
            this.viewWrapper.style.display = 'none';
        }
    };
    MultiSelect.prototype.checkClearIconWidth = function () {
        if (this.showClearButton) {
            this.clearIconWidth = this.overAllClear.offsetWidth;
        }
    };
    MultiSelect.prototype.updateRemainWidth = function (viewWrapper, totalWidth) {
        if (viewWrapper.classList.contains(TOTAL_COUNT_WRAPPER) && totalWidth < (viewWrapper.offsetWidth +
            parseInt(window.getComputedStyle(viewWrapper).paddingLeft, 10)
            + parseInt(window.getComputedStyle(viewWrapper).paddingLeft, 10))) {
            viewWrapper.style.width = totalWidth + 'px';
        }
    };
    MultiSelect.prototype.updateRemainTemplate = function (raminElement, viewWrapper, remaining, compiledString, totalCompiledString, totalWidth) {
        if (viewWrapper.firstChild && viewWrapper.firstChild.nodeType === 3 && viewWrapper.firstChild.nodeValue === '') {
            viewWrapper.removeChild(viewWrapper.firstChild);
        }
        raminElement.innerHTML = '';
        // eslint-disable-next-line
        var remainTemp = compiledString({ 'count': remaining }, this, 'overflowCountTemplate', null, !this.isStringTemplate, null, raminElement);
        // eslint-disable-next-line
        var totalTemp = totalCompiledString({ 'count': remaining }, this, 'totalCountTemplate', null, !this.isStringTemplate, null, raminElement);
        raminElement.appendChild((viewWrapper.firstChild && viewWrapper.firstChild.nodeType === 3) ?
            remainTemp && remainTemp[0] : totalTemp && totalTemp[0]);
        if (viewWrapper.firstChild && viewWrapper.firstChild.nodeType === 3) {
            viewWrapper.classList.remove(TOTAL_COUNT_WRAPPER);
        }
        else {
            viewWrapper.classList.add(TOTAL_COUNT_WRAPPER);
            this.updateRemainWidth(viewWrapper, totalWidth);
        }
        return raminElement;
    };
    MultiSelect.prototype.updateRemainingText = function (raminElement, downIconWidth, remaining, compiledString, totalCompiledString) {
        var overAllContainer = this.componentWrapper.offsetWidth -
            parseInt(window.getComputedStyle(this.componentWrapper).paddingLeft, 10) -
            parseInt(window.getComputedStyle(this.componentWrapper).paddingRight, 10);
        var wrapperleng = this.viewWrapper.offsetWidth + parseInt(window.getComputedStyle(this.viewWrapper).paddingRight, 10);
        if (((wrapperleng + downIconWidth) >= overAllContainer) && wrapperleng !== 0 && this.viewWrapper.firstChild &&
            this.viewWrapper.firstChild.nodeType === 3) {
            while (((wrapperleng + downIconWidth) > overAllContainer) && wrapperleng !== 0 && this.viewWrapper.firstChild &&
                this.viewWrapper.firstChild.nodeType === 3) {
                var textArr = this.viewWrapper.firstChild.nodeValue.split(this.delimiterChar);
                textArr.pop();
                this.viewWrapper.firstChild.nodeValue = textArr.join(this.delimiterChar);
                if (this.viewWrapper.firstChild.nodeValue === '') {
                    this.viewWrapper.removeChild(this.viewWrapper.firstChild);
                }
                remaining++;
                wrapperleng = this.viewWrapper.offsetWidth;
            }
            var totalWidth = overAllContainer - downIconWidth;
            this.updateRemainTemplate(raminElement, this.viewWrapper, remaining, compiledString, totalCompiledString, totalWidth);
        }
    };
    MultiSelect.prototype.getOverflowVal = function (index) {
        var temp;
        if (this.mainData && this.mainData.length) {
            if (this.mode === 'CheckBox') {
                var newTemp = this.listData;
                this.listData = this.mainData;
                temp = this.getTextByValue(this.value[index]);
                this.listData = newTemp;
            }
            else {
                temp = this.getTextByValue(this.value[index]);
            }
        }
        else {
            temp = this.value[index];
        }
        return temp;
    };
    MultiSelect.prototype.unWireEvent = function () {
        EventHandler.remove(this.componentWrapper, 'mousedown', this.wrapperClick);
        EventHandler.remove(window, 'resize', this.windowResize);
        EventHandler.remove(this.inputElement, 'focus', this.focusInHandler);
        EventHandler.remove(this.inputElement, 'keydown', this.onKeyDown);
        if (this.mode !== 'CheckBox') {
            EventHandler.remove(this.inputElement, 'input', this.onInput);
        }
        EventHandler.remove(this.inputElement, 'keyup', this.keyUp);
        var formElement = closest(this.inputElement, 'form');
        if (formElement) {
            EventHandler.remove(formElement, 'reset', this.resetValueHandler);
        }
        EventHandler.remove(this.inputElement, 'blur', this.onBlur);
        EventHandler.remove(this.componentWrapper, 'mousemove', this.mouseIn);
        EventHandler.remove(this.componentWrapper, 'mouseout', this.mouseOut);
        EventHandler.remove(this.overAllClear, 'mousedown', this.clearAll);
        EventHandler.remove(this.inputElement, 'paste', this.pasteHandler);
    };
    MultiSelect.prototype.selectAllItem = function (state, event, list) {
        var li;
        li = this.list.querySelectorAll(state ?
            'li.e-list-item:not([aria-selected="true"]):not(.e-reorder-hide)' :
            'li.e-list-item[aria-selected="true"]:not(.e-reorder-hide)');
        if (this.value && this.value.length && this.isPopupOpen() && event && event.target
            && closest(event.target, '.e-close-hooker') && this.allowFiltering) {
            li = this.mainList.querySelectorAll(state ?
                'li.e-list-item:not([aria-selected="true"]):not(.e-reorder-hide)' :
                'li.e-list-item[aria-selected="true"]:not(.e-reorder-hide)');
        }
        if (this.enableGroupCheckBox && this.mode === 'CheckBox' && !isNullOrUndefined(this.fields.groupBy)) {
            var target = (event ? event.target : null);
            target = (event && event.keyCode === 32) ? list : target;
            target = (target && target.classList.contains('e-frame')) ? target.parentElement.parentElement : target;
            if (target && target.classList.contains('e-list-group-item')) {
                var listElement = target.nextElementSibling;
                if (isNullOrUndefined(listElement)) {
                    return;
                }
                while (listElement.classList.contains('e-list-item')) {
                    if (state) {
                        if (!listElement.firstElementChild.lastElementChild.classList.contains('e-check')) {
                            var selectionLimit = this.value && this.value.length ? this.value.length : 0;
                            if (listElement.classList.contains('e-active')) {
                                selectionLimit -= 1;
                            }
                            if (selectionLimit < this.maximumSelectionLength) {
                                this.updateListSelection(listElement, event);
                            }
                        }
                    }
                    else {
                        if (listElement.firstElementChild.lastElementChild.classList.contains('e-check')) {
                            this.updateListSelection(listElement, event);
                        }
                    }
                    listElement = listElement.nextElementSibling;
                    if (listElement == null) {
                        break;
                    }
                }
                if (target.classList.contains('e-list-group-item')) {
                    var focusedElement = this.list.getElementsByClassName('e-item-focus')[0];
                    if (focusedElement) {
                        focusedElement.classList.remove('e-item-focus');
                    }
                    if (state) {
                        target.classList.add('e-active');
                    }
                    else {
                        target.classList.remove('e-active');
                    }
                    target.classList.add('e-item-focus');
                }
                this.textboxValueUpdate();
                this.checkPlaceholderSize();
                if (!this.changeOnBlur && event) {
                    this.updateValueState(event, this.value, this.tempValues);
                }
            }
            else {
                this.updateValue(event, li, state);
            }
        }
        else {
            this.updateValue(event, li, state);
        }
    };
    MultiSelect.prototype.updateValue = function (event, li, state) {
        var _this = this;
        var length = li.length;
        if (li && li.length) {
            var index_1 = 0;
            var count_1 = 0;
            if (this.enableGroupCheckBox) {
                count_1 = state ? this.maximumSelectionLength - (this.value ? this.value.length : 0) : li.length;
            }
            else {
                count_1 = state ? this.maximumSelectionLength - (this.value ? this.value.length : 0) : this.maximumSelectionLength;
            }
            while (index_1 < length && index_1 <= 50 && index_1 < count_1) {
                this.updateListSelection(li[index_1], event, length - index_1);
                if (this.enableGroupCheckBox) {
                    this.findGroupStart(li[index_1]);
                }
                index_1++;
            }
            if (length > 50) {
                setTimeout(function () {
                    while (index_1 < length && index_1 < count_1) {
                        _this.updateListSelection(li[index_1], event, length - index_1);
                        if (_this.enableGroupCheckBox) {
                            _this.findGroupStart(li[index_1]);
                        }
                        index_1++;
                    }
                    if (!(isBlazor() && _this.isServerRendered)) {
                        _this.updatedataValueItems(event);
                        if (!_this.changeOnBlur) {
                            _this.updateValueState(event, _this.value, _this.tempValues);
                            _this.isSelectAll = _this.isSelectAll ? !_this.isSelectAll : _this.isSelectAll;
                        }
                        _this.updateHiddenElement();
                    }
                }, 0);
            }
        }
        if (!(isBlazor() && this.isServerRendered)) {
            this.updatedataValueItems(event);
            this.checkPlaceholderSize();
            if (length <= 50) {
                if (!this.changeOnBlur) {
                    this.updateValueState(event, this.value, this.tempValues);
                    this.isSelectAll = this.isSelectAll ? !this.isSelectAll : this.isSelectAll;
                }
                this.updateHiddenElement();
            }
        }
    };
    MultiSelect.prototype.updateHiddenElement = function () {
        var _this = this;
        var hiddenValue = '';
        var wrapperText = '';
        var data = '';
        var text = [];
        if (this.mode === 'CheckBox') {
            this.value.map(function (value, index) {
                hiddenValue += '<option selected value ="' + value + '">' + index + '</option>';
                if (_this.listData) {
                    data = _this.getTextByValue(value);
                }
                else {
                    data = value;
                }
                wrapperText += data + _this.delimiterChar + ' ';
                text.push(data);
            });
            this.hiddenElement.innerHTML = hiddenValue;
            this.updateWrapperText(this.delimiterWrapper, wrapperText);
            this.delimiterWrapper.setAttribute('id', getUniqueID('delim_val'));
            this.inputElement.setAttribute('aria-describedby', this.delimiterWrapper.id);
            this.inputElement.setAttribute('aria-labelledby', this.delimiterWrapper.id);
            this.setProperties({ text: text.toString() }, true);
            this.refreshInputHight();
            this.refreshPlaceHolder();
        }
    };
    MultiSelect.prototype.updatedataValueItems = function (event) {
        this.deselectHeader();
        this.textboxValueUpdate(event);
    };
    MultiSelect.prototype.textboxValueUpdate = function (event) {
        var isRemoveAll = event && event.target && (closest(event.target, '.e-selectall-parent')
            || closest(event.target, '.e-close-hooker'));
        if (this.mode !== 'Box' && !this.isPopupOpen() && !(this.mode === 'CheckBox' && (this.isSelectAll || isRemoveAll))) {
            this.updateDelimView();
        }
        else {
            this.searchWrapper.classList.remove(ZERO_SIZE);
        }
        if (this.mode === 'CheckBox') {
            this.updateDelimView();
            if (!(isRemoveAll || this.isSelectAll)) {
                this.updateDelimeter(this.delimiterChar, event);
            }
            this.refreshInputHight();
        }
        else {
            this.updateDelimeter(this.delimiterChar, event);
        }
        this.refreshPlaceHolder();
    };
    MultiSelect.prototype.setZIndex = function () {
        if (this.popupObj) {
            this.popupObj.setProperties({ 'zIndex': this.zIndex });
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    MultiSelect.prototype.updateDataSource = function (prop) {
        if (isNullOrUndefined(this.list)) {
            this.renderPopup();
        }
        else {
            this.resetList(this.dataSource);
        }
        if (this.value && this.value.length && !(isBlazor() && this.isServerRendered)) {
            this.setProperties({ 'value': this.value });
            this.refreshSelection();
        }
    };
    MultiSelect.prototype.onLoadSelect = function () {
        this.setDynValue = true;
        this.renderPopup();
    };
    MultiSelect.prototype.selectAllItems = function (state, event) {
        var _this = this;
        if (isNullOrUndefined(this.list)) {
            this.selectAllAction = function () {
                if (_this.mode === 'CheckBox' && _this.showSelectAll) {
                    var args = {
                        module: 'CheckBoxSelection',
                        enable: _this.mode === 'CheckBox',
                        value: state ? 'check' : 'uncheck'
                    };
                    _this.notify('checkSelectAll', args);
                }
                _this.selectAllItem(state, event);
                _this.selectAllAction = null;
            };
            _super.prototype.render.call(this);
        }
        else {
            this.selectAllAction = null;
            if (this.mode === 'CheckBox' && this.showSelectAll) {
                var args = {
                    value: state ? 'check' : 'uncheck',
                    enable: this.mode === 'CheckBox',
                    module: 'CheckBoxSelection'
                };
                this.notify('checkSelectAll', args);
            }
            this.selectAllItem(state, event);
        }
    };
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @returns {string} Returns the persisted data of the component.
     */
    MultiSelect.prototype.getPersistData = function () {
        return this.addOnPersist(['value']);
    };
    /**
     * Dynamically change the value of properties.
     *
     * @param {MultiSelectModel} newProp - Returns the dynamic property value of the component.
     * @param {MultiSelectModel} oldProp - Returns the previous property value of the component.
     * @private
     * @returns {void}
     */
    MultiSelect.prototype.onPropertyChanged = function (newProp, oldProp) {
        if (newProp.dataSource && !isNullOrUndefined(Object.keys(newProp.dataSource))
            || newProp.query && !isNullOrUndefined(Object.keys(newProp.query))) {
            this.mainList = null;
            this.mainData = null;
            this.isFirstClick = false;
            this.isDynamicDataChange = true;
        }
        if (this.getModuleName() === 'multiselect') {
            this.filterAction = false;
            this.setUpdateInitial(['fields', 'query', 'dataSource'], newProp);
        }
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'query':
                case 'dataSource':
                    if (this.mode === 'CheckBox' && this.showSelectAll) {
                        if (!isNullOrUndefined(this.popupObj)) {
                            this.popupObj.destroy();
                            this.popupObj = null;
                        }
                        this.renderPopup();
                    }
                    break;
                case 'htmlAttributes':
                    this.updateHTMLAttribute();
                    break;
                case 'showClearButton':
                    this.updateClearButton(newProp.showClearButton);
                    break;
                case 'text':
                    this.updateVal(this.value, this.value, 'text');
                    break;
                case 'value':
                    this.updateVal(this.value, oldProp.value, 'value');
                    this.addValidInputClass();
                    if (!this.closePopupOnSelect && this.isPopupOpen()) {
                        this.refreshPopup();
                    }
                    this.preventChange = this.isAngular && this.preventChange ? !this.preventChange : this.preventChange;
                    break;
                case 'width':
                    this.setWidth(newProp.width);
                    this.popupObj.setProperties({ width: this.calcPopupWidth() });
                    break;
                case 'placeholder':
                    this.refreshPlaceHolder();
                    break;
                case 'filterBarPlaceholder':
                    if (this.allowFiltering) {
                        this.notify('filterBarPlaceholder', { filterBarPlaceholder: newProp.filterBarPlaceholder });
                    }
                    break;
                case 'delimiterChar':
                    if (this.mode !== 'Box') {
                        this.updateDelimView();
                    }
                    this.updateData(newProp.delimiterChar);
                    break;
                case 'cssClass':
                    this.updateOldPropCssClass(oldProp.cssClass);
                    this.updateCssClass();
                    break;
                case 'enableRtl':
                    this.enableRTL(newProp.enableRtl);
                    _super.prototype.onPropertyChanged.call(this, newProp, oldProp);
                    break;
                case 'readonly':
                    this.updateReadonly(newProp.readonly);
                    this.hidePopup();
                    break;
                case 'enabled':
                    this.hidePopup();
                    this.enable(newProp.enabled);
                    break;
                case 'showSelectAll':
                    if (this.popupObj) {
                        this.popupObj.destroy();
                        this.popupObj = null;
                    }
                    this.renderPopup();
                    break;
                case 'showDropDownIcon':
                    this.dropDownIcon();
                    break;
                case 'floatLabelType':
                    this.setFloatLabelType();
                    this.addValidInputClass();
                    break;
                case 'enableSelectionOrder':
                    break;
                case 'selectAllText':
                    this.notify('selectAllText', false);
                    break;
                case 'popupHeight':
                case 'headerTemplate':
                case 'footerTemplate':
                    this.reInitializePoup();
                    break;
                case 'allowFiltering':
                    if (this.mode === 'CheckBox' && this.popupObj) {
                        this.reInitializePoup();
                    }
                    this.updateSelectElementData(this.allowFiltering);
                    break;
                default:
                    {
                        // eslint-disable-next-line max-len
                        var msProps = this.getPropObject(prop, newProp, oldProp);
                        _super.prototype.onPropertyChanged.call(this, msProps.newProperty, msProps.oldProperty);
                    }
                    break;
            }
        }
    };
    MultiSelect.prototype.reInitializePoup = function () {
        if (this.popupObj) {
            this.popupObj.destroy();
            this.popupObj = null;
        }
        this.renderPopup();
    };
    MultiSelect.prototype.updateVal = function (newProp, oldProp, prop) {
        if (!this.list) {
            this.onLoadSelect();
        }
        else if ((this.dataSource instanceof DataManager) && (!this.listData || !(this.mainList && this.mainData))) {
            this.onLoadSelect();
        }
        else {
            if (prop === 'text') {
                this.initialTextUpdate();
                newProp = this.value;
            }
            if (isNullOrUndefined(this.value) || this.value.length === 0) {
                this.tempValues = oldProp;
            }
            this.initialValueUpdate();
            if (this.mode !== 'Box' && !this.inputFocus) {
                this.updateDelimView();
            }
            if (!this.inputFocus) {
                this.refreshInputHight();
            }
            this.refreshPlaceHolder();
            if (this.mode !== 'CheckBox' && this.changeOnBlur) {
                this.updateValueState(null, newProp, oldProp);
            }
            this.checkPlaceholderSize();
        }
        if (!this.changeOnBlur) {
            this.updateValueState(null, newProp, oldProp);
        }
    };
    /**
     * Adds a new item to the multiselect popup list. By default, new item appends to the list as the last item,
     * but you can insert based on the index parameter.
     *
     * @param  { Object[] } items - Specifies an array of JSON data or a JSON data.
     * @param { number } itemIndex - Specifies the index to place the newly added item in the popup list.
     * @returns {void}
     */
    MultiSelect.prototype.addItem = function (items, itemIndex) {
        _super.prototype.addItem.call(this, items, itemIndex);
    };
    /**
     * Hides the popup, if the popup in a open state.
     *
     * @returns {void}
     */
    MultiSelect.prototype.hidePopup = function () {
        var _this = this;
        var delay = 100;
        if (this.isPopupOpen()) {
            var animModel = {
                name: 'FadeOut',
                duration: 100,
                delay: delay ? delay : 0
            };
            var eventArgs = { popup: this.popupObj, cancel: false, animation: animModel };
            this.trigger('close', eventArgs, function (eventArgs) {
                if (!eventArgs.cancel) {
                    if (_this.fields.groupBy && _this.mode !== 'CheckBox' && _this.fixedHeaderElement) {
                        remove(_this.fixedHeaderElement);
                        _this.fixedHeaderElement = null;
                    }
                    _this.beforePopupOpen = false;
                    _this.overAllWrapper.classList.remove(iconAnimation);
                    _this.popupObj.hide(new Animation(eventArgs.animation));
                    attributes(_this.inputElement, { 'aria-expanded': 'false' });
                    if (_this.allowFiltering) {
                        _this.notify('inputFocus', { module: 'CheckBoxSelection', enable: _this.mode === 'CheckBox', value: 'clear' });
                    }
                    _this.popupObj.hide();
                    removeClass([document.body, _this.popupObj.element], 'e-popup-full-page');
                    EventHandler.remove(_this.list, 'keydown', _this.onKeyDown);
                }
            });
        }
    };
    /**
     * Shows the popup, if the popup in a closed state.
     *
     * @returns {void}
     */
    MultiSelect.prototype.showPopup = function () {
        var _this = this;
        if (!this.enabled) {
            return;
        }
        var args = { cancel: false };
        this.trigger('beforeOpen', args, function (args) {
            if (!args.cancel) {
                if ((isBlazor() && _this.isServerRendered) && _this.itemTemplate) {
                    _this.DropDownBaseupdateBlazorTemplates(true, false, false, false, false, false, false, false);
                    if (_this.mode !== 'CheckBox' && _this.list) {
                        _this.refreshSelection();
                    }
                }
                if (!_this.ulElement) {
                    _this.beforePopupOpen = true;
                    _super.prototype.render.call(_this);
                    if (_this.mode === 'CheckBox' && Browser.isDevice && _this.allowFiltering) {
                        _this.notify('popupFullScreen', { module: 'CheckBoxSelection', enable: _this.mode === 'CheckBox' });
                    }
                    return;
                }
                if (_this.mode === 'CheckBox' && Browser.isDevice && _this.allowFiltering) {
                    _this.notify('popupFullScreen', { module: 'CheckBoxSelection', enable: _this.mode === 'CheckBox' });
                }
                var mainLiLength = _this.ulElement.querySelectorAll('li.' + 'e-list-item').length;
                var liLength = _this.ulElement.querySelectorAll('li.'
                    + dropDownBaseClasses.li + '.' + HIDE_LIST).length;
                if (mainLiLength > 0 && (mainLiLength === liLength) && (liLength === _this.mainData.length)) {
                    _this.beforePopupOpen = false;
                    return;
                }
                _this.onPopupShown();
            }
        });
    };
    /**
     * Based on the state parameter, entire list item will be selected/deselected.
     * parameter
     * `true`   - Selects entire list items.
     * `false`  - Un Selects entire list items.
     *
     * @param {boolean} state - if it’s true then Selects the entire list items. If it’s false the Unselects entire list items.
     * @returns {void}
     */
    MultiSelect.prototype.selectAll = function (state) {
        this.isSelectAll = true;
        this.selectAllItems(state);
    };
    /**
     * Return the module name of this component.
     *
     * @private
     * @returns {string} Return the module name of this component.
     */
    MultiSelect.prototype.getModuleName = function () {
        return 'multiselect';
    };
    /**
     * Allows you to clear the selected values from the Multiselect component.
     *
     * @returns {void}
     */
    MultiSelect.prototype.clear = function () {
        var _this = this;
        this.selectAll(false);
        if (this.value && this.value.length) {
            setTimeout(function () {
                _this.setProperties({ value: null }, true);
            }, 0);
        }
        else {
            this.setProperties({ value: null }, true);
        }
    };
    /**
     * To Initialize the control rendering
     *
     * @private
     * @returns {void}
     */
    MultiSelect.prototype.render = function () {
        this.setDynValue = this.initStatus = false;
        this.isSelectAll = false;
        this.searchWrapper = this.createElement('span', { className: SEARCHBOX_WRAPPER + ' ' + ((this.mode === 'Box') ? BOX_ELEMENT : '') });
        this.viewWrapper = this.createElement('span', { className: DELIMITER_VIEW + ' ' + DELIMITER_WRAPPER, styles: 'display:none;' });
        this.overAllClear = this.createElement('span', {
            className: CLOSEICON_CLASS, styles: 'display:none;'
        });
        this.componentWrapper = this.createElement('div', { className: ELEMENT_WRAPPER });
        this.overAllWrapper = this.createElement('div', { className: OVER_ALL_WRAPPER });
        if (this.mode === 'CheckBox') {
            addClass([this.overAllWrapper], 'e-checkbox');
        }
        if (Browser.isDevice) {
            this.componentWrapper.classList.add(ELEMENT_MOBILE_WRAPPER);
        }
        this.setWidth(this.width);
        this.overAllWrapper.appendChild(this.componentWrapper);
        this.popupWrapper = this.createElement('div', { id: this.element.id + '_popup', className: POPUP_WRAPPER });
        if (this.mode === 'Delimiter' || this.mode === 'CheckBox') {
            this.delimiterWrapper = this.createElement('span', { className: DELIMITER_WRAPPER, styles: 'display:none' });
            this.componentWrapper.appendChild(this.delimiterWrapper);
        }
        else {
            this.chipCollectionWrapper = this.createElement('span', {
                className: CHIP_WRAPPER,
                styles: 'display:none'
            });
            if (this.mode === 'Default') {
                this.chipCollectionWrapper.setAttribute('id', getUniqueID('chip_default'));
            }
            else if (this.mode === 'Box') {
                this.chipCollectionWrapper.setAttribute('id', getUniqueID('chip_box'));
            }
            this.componentWrapper.appendChild(this.chipCollectionWrapper);
        }
        if (this.mode !== 'Box') {
            this.componentWrapper.appendChild(this.viewWrapper);
        }
        this.componentWrapper.appendChild(this.searchWrapper);
        if (this.showClearButton && !Browser.isDevice) {
            this.componentWrapper.appendChild(this.overAllClear);
        }
        else {
            this.componentWrapper.classList.add(CLOSE_ICON_HIDE);
        }
        this.dropDownIcon();
        this.inputElement = this.createElement('input', {
            className: INPUT_ELEMENT,
            attrs: {
                spellcheck: 'false',
                type: 'text',
                autocomplete: 'off',
                tabindex: '0'
            }
        });
        if (this.mode === 'Default' || this.mode === 'Box') {
            this.inputElement.setAttribute('aria-describedby', this.chipCollectionWrapper.id);
            this.inputElement.setAttribute('aria-labelledby', this.chipCollectionWrapper.id);
        }
        if (this.element.tagName !== this.getNgDirective()) {
            this.element.style.display = 'none';
        }
        if (this.element.tagName === this.getNgDirective()) {
            this.element.appendChild(this.overAllWrapper);
            this.searchWrapper.appendChild(this.inputElement);
        }
        else {
            this.element.parentElement.insertBefore(this.overAllWrapper, this.element);
            this.searchWrapper.appendChild(this.inputElement);
            this.searchWrapper.appendChild(this.element);
            this.element.removeAttribute('tabindex');
        }
        if (this.floatLabelType !== 'Never') {
            createFloatLabel(this.overAllWrapper, this.searchWrapper, this.element, this.inputElement, this.value, this.floatLabelType, this.placeholder);
        }
        else if (this.floatLabelType === 'Never') {
            this.refreshPlaceHolder();
        }
        this.addValidInputClass();
        this.element.style.opacity = '';
        var id = this.element.getAttribute('id') ? this.element.getAttribute('id') : getUniqueID('ej2_dropdownlist');
        this.element.id = id;
        this.hiddenElement = this.createElement('select', {
            attrs: { 'aria-hidden': 'true', 'class': HIDDEN_ELEMENT, 'tabindex': '-1', 'multiple': '' }
        });
        this.componentWrapper.appendChild(this.hiddenElement);
        this.validationAttribute(this.element, this.hiddenElement);
        if (this.mode !== 'CheckBox') {
            this.hideOverAllClear();
        }
        this.wireEvent();
        this.enable(this.enabled);
        this.enableRTL(this.enableRtl);
        this.checkInitialValue();
        if (this.element.hasAttribute('data-val')) {
            this.element.setAttribute('data-val', 'false');
        }
        this.renderComplete();
    };
    MultiSelect.prototype.checkInitialValue = function () {
        var _this = this;
        var isData = this.dataSource instanceof Array ? (this.dataSource.length > 0)
            : !isNullOrUndefined(this.dataSource);
        if (!(this.value && this.value.length) &&
            isNullOrUndefined(this.text) &&
            !isData &&
            this.element.tagName === 'SELECT' &&
            this.element.options.length > 0) {
            var optionsElement = this.element.options;
            var valueCol = [];
            var textCol = '';
            for (var index = 0, optionsLen = optionsElement.length; index < optionsLen; index++) {
                var opt = optionsElement[index];
                if (!isNullOrUndefined(opt.getAttribute('selected'))) {
                    if (opt.getAttribute('value')) {
                        valueCol.push(opt.getAttribute('value'));
                    }
                    else {
                        textCol += (opt.text + this.delimiterChar);
                    }
                }
            }
            if (valueCol.length > 0) {
                this.setProperties({ value: valueCol }, true);
            }
            else if (textCol !== '') {
                this.setProperties({ text: textCol }, true);
            }
            if (valueCol.length > 0 || textCol !== '') {
                this.refreshInputHight();
                this.refreshPlaceHolder();
            }
        }
        if ((this.value && this.value.length) || !isNullOrUndefined(this.text)) {
            this.renderPopup();
        }
        if (!isNullOrUndefined(this.text) && (isNullOrUndefined(this.value) || this.value.length === 0)) {
            this.initialTextUpdate();
        }
        if (this.value && this.value.length) {
            if (!(this.dataSource instanceof DataManager)) {
                this.initialValueUpdate();
                this.initialUpdate();
            }
            else {
                this.setInitialValue = function () {
                    _this.initStatus = false;
                    _this.initialValueUpdate();
                    _this.initialUpdate();
                    _this.setInitialValue = null;
                    _this.initStatus = true;
                };
            }
            this.updateTempValue();
        }
        else {
            this.initialUpdate();
        }
        this.initStatus = true;
        this.checkAutoFocus();
        if (!isNullOrUndefined(this.text)) {
            this.element.setAttribute('data-initial-value', this.text);
        }
    };
    MultiSelect.prototype.checkAutoFocus = function () {
        if (this.element.hasAttribute('autofocus')) {
            this.inputElement.focus();
        }
    };
    MultiSelect.prototype.setFloatLabelType = function () {
        removeFloating(this.overAllWrapper, this.componentWrapper, this.searchWrapper, this.inputElement, this.value, this.floatLabelType, this.placeholder);
        if (this.floatLabelType !== 'Never') {
            createFloatLabel(this.overAllWrapper, this.searchWrapper, this.element, this.inputElement, this.value, this.floatLabelType, this.placeholder);
        }
    };
    MultiSelect.prototype.addValidInputClass = function () {
        if ((!isNullOrUndefined(this.value) && this.value.length) || this.floatLabelType === 'Always') {
            addClass([this.overAllWrapper], 'e-valid-input');
        }
        else {
            removeClass([this.overAllWrapper], 'e-valid-input');
        }
    };
    MultiSelect.prototype.dropDownIcon = function () {
        if (this.showDropDownIcon) {
            this.dropIcon = this.createElement('span', { className: dropdownIcon });
            this.componentWrapper.appendChild(this.dropIcon);
            addClass([this.componentWrapper], ['e-down-icon']);
        }
        else {
            if (!isNullOrUndefined(this.dropIcon)) {
                this.dropIcon.parentElement.removeChild(this.dropIcon);
                removeClass([this.componentWrapper], ['e-down-icon']);
            }
        }
    };
    MultiSelect.prototype.initialUpdate = function () {
        if (this.mode !== 'Box' && !(this.setDynValue && this.mode === 'Default' && this.inputFocus)) {
            this.updateDelimView();
        }
        this.updateCssClass();
        this.updateHTMLAttribute();
        this.updateReadonly(this.readonly);
        this.refreshInputHight();
        this.checkPlaceholderSize();
    };
    /**
     * Removes the component from the DOM and detaches all its related event handlers. Also it removes the attributes and classes.
     *
     * @method destroy
     * @returns {void}
     */
    MultiSelect.prototype.destroy = function () {
        // eslint-disable-next-line
        if (this.isReact) {
            this.clearTemplate();
        }
        if (this.popupObj) {
            this.popupObj.hide();
        }
        this.notify(destroy, {});
        this.unwireListEvents();
        this.unWireEvent();
        this.list = null;
        this.popupObj = null;
        this.mainList = null;
        this.mainData = null;
        this.filterParent = null;
        this.ulElement = null;
        _super.prototype.destroy.call(this);
        var temp = ['readonly', 'aria-disabled', 'aria-placeholder', 'placeholder'];
        var length = temp.length;
        while (length > 0) {
            this.inputElement.removeAttribute(temp[length - 1]);
            length--;
        }
        this.element.removeAttribute('data-initial-value');
        this.element.style.display = 'block';
        if (this.overAllWrapper.parentElement) {
            if (this.overAllWrapper.parentElement.tagName === this.getNgDirective()) {
                remove(this.overAllWrapper);
            }
            else {
                this.overAllWrapper.parentElement.insertBefore(this.element, this.overAllWrapper);
                remove(this.overAllWrapper);
            }
        }
    };
    __decorate([
        Complex({ text: null, value: null, iconCss: null, groupBy: null }, FieldSettings)
    ], MultiSelect.prototype, "fields", void 0);
    __decorate([
        Property(false)
    ], MultiSelect.prototype, "enablePersistence", void 0);
    __decorate([
        Property(null)
    ], MultiSelect.prototype, "groupTemplate", void 0);
    __decorate([
        Property('No records found')
    ], MultiSelect.prototype, "noRecordsTemplate", void 0);
    __decorate([
        Property('Request failed')
    ], MultiSelect.prototype, "actionFailureTemplate", void 0);
    __decorate([
        Property('None')
    ], MultiSelect.prototype, "sortOrder", void 0);
    __decorate([
        Property(true)
    ], MultiSelect.prototype, "enabled", void 0);
    __decorate([
        Property(false)
    ], MultiSelect.prototype, "enableHtmlSanitizer", void 0);
    __decorate([
        Property([])
    ], MultiSelect.prototype, "dataSource", void 0);
    __decorate([
        Property(null)
    ], MultiSelect.prototype, "query", void 0);
    __decorate([
        Property('StartsWith')
    ], MultiSelect.prototype, "filterType", void 0);
    __decorate([
        Property(1000)
    ], MultiSelect.prototype, "zIndex", void 0);
    __decorate([
        Property(false)
    ], MultiSelect.prototype, "ignoreAccent", void 0);
    __decorate([
        Property()
    ], MultiSelect.prototype, "locale", void 0);
    __decorate([
        Property(false)
    ], MultiSelect.prototype, "enableGroupCheckBox", void 0);
    __decorate([
        Property(null)
    ], MultiSelect.prototype, "cssClass", void 0);
    __decorate([
        Property('100%')
    ], MultiSelect.prototype, "width", void 0);
    __decorate([
        Property('300px')
    ], MultiSelect.prototype, "popupHeight", void 0);
    __decorate([
        Property('100%')
    ], MultiSelect.prototype, "popupWidth", void 0);
    __decorate([
        Property(null)
    ], MultiSelect.prototype, "placeholder", void 0);
    __decorate([
        Property(null)
    ], MultiSelect.prototype, "filterBarPlaceholder", void 0);
    __decorate([
        Property({})
    ], MultiSelect.prototype, "htmlAttributes", void 0);
    __decorate([
        Property(null)
    ], MultiSelect.prototype, "valueTemplate", void 0);
    __decorate([
        Property(null)
    ], MultiSelect.prototype, "headerTemplate", void 0);
    __decorate([
        Property(null)
    ], MultiSelect.prototype, "footerTemplate", void 0);
    __decorate([
        Property(null)
    ], MultiSelect.prototype, "itemTemplate", void 0);
    __decorate([
        Property(null)
    ], MultiSelect.prototype, "allowFiltering", void 0);
    __decorate([
        Property(true)
    ], MultiSelect.prototype, "changeOnBlur", void 0);
    __decorate([
        Property(false)
    ], MultiSelect.prototype, "allowCustomValue", void 0);
    __decorate([
        Property(true)
    ], MultiSelect.prototype, "showClearButton", void 0);
    __decorate([
        Property(1000)
    ], MultiSelect.prototype, "maximumSelectionLength", void 0);
    __decorate([
        Property(false)
    ], MultiSelect.prototype, "readonly", void 0);
    __decorate([
        Property(null)
    ], MultiSelect.prototype, "text", void 0);
    __decorate([
        Property(null)
    ], MultiSelect.prototype, "value", void 0);
    __decorate([
        Property(true)
    ], MultiSelect.prototype, "hideSelectedItem", void 0);
    __decorate([
        Property(true)
    ], MultiSelect.prototype, "closePopupOnSelect", void 0);
    __decorate([
        Property('Default')
    ], MultiSelect.prototype, "mode", void 0);
    __decorate([
        Property(',')
    ], MultiSelect.prototype, "delimiterChar", void 0);
    __decorate([
        Property(true)
    ], MultiSelect.prototype, "ignoreCase", void 0);
    __decorate([
        Property(false)
    ], MultiSelect.prototype, "showDropDownIcon", void 0);
    __decorate([
        Property('Never')
    ], MultiSelect.prototype, "floatLabelType", void 0);
    __decorate([
        Property(false)
    ], MultiSelect.prototype, "showSelectAll", void 0);
    __decorate([
        Property('Select All')
    ], MultiSelect.prototype, "selectAllText", void 0);
    __decorate([
        Property('Unselect All')
    ], MultiSelect.prototype, "unSelectAllText", void 0);
    __decorate([
        Property(true)
    ], MultiSelect.prototype, "enableSelectionOrder", void 0);
    __decorate([
        Property(true)
    ], MultiSelect.prototype, "openOnClick", void 0);
    __decorate([
        Event()
    ], MultiSelect.prototype, "change", void 0);
    __decorate([
        Event()
    ], MultiSelect.prototype, "removing", void 0);
    __decorate([
        Event()
    ], MultiSelect.prototype, "removed", void 0);
    __decorate([
        Event()
    ], MultiSelect.prototype, "selectedAll", void 0);
    __decorate([
        Event()
    ], MultiSelect.prototype, "beforeOpen", void 0);
    __decorate([
        Event()
    ], MultiSelect.prototype, "open", void 0);
    __decorate([
        Event()
    ], MultiSelect.prototype, "close", void 0);
    __decorate([
        Event()
    ], MultiSelect.prototype, "blur", void 0);
    __decorate([
        Event()
    ], MultiSelect.prototype, "focus", void 0);
    __decorate([
        Event()
    ], MultiSelect.prototype, "chipSelection", void 0);
    __decorate([
        Event()
    ], MultiSelect.prototype, "filtering", void 0);
    __decorate([
        Event()
    ], MultiSelect.prototype, "tagging", void 0);
    __decorate([
        Event()
    ], MultiSelect.prototype, "customValueSelection", void 0);
    MultiSelect = __decorate([
        NotifyPropertyChanges
    ], MultiSelect);
    return MultiSelect;
}(DropDownBase));
export { MultiSelect };
