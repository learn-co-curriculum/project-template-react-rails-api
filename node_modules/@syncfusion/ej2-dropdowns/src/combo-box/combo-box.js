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
/// <reference path='../drop-down-list/drop-down-list-model.d.ts'/>
import { EventHandler, Property, Event, addClass, Browser, removeClass, detach } from '@syncfusion/ej2-base';
import { isNullOrUndefined, NotifyPropertyChanges, getValue, setValue } from '@syncfusion/ej2-base';
import { DropDownList, dropDownListClasses } from '../drop-down-list/drop-down-list';
import { Search } from '../common/incremental-search';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
import { Input } from '@syncfusion/ej2-inputs';
var SPINNER_CLASS = 'e-atc-spinner-icon';
dropDownListClasses.root = 'e-combobox';
var inputObject = {
    container: null,
    buttons: []
};
/**
 * The ComboBox component allows the user to type a value or choose an option from the list of predefined options.
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
 *   let games:ComboBox = new ComboBox();
 *   games.appendTo("#list");
 * ```
 */
var ComboBox = /** @class */ (function (_super) {
    __extends(ComboBox, _super);
    /**
     * *Constructor for creating the component
     *
     * @param {ComboBoxModel} options - Specifies the ComboBox model.
     * @param {string | HTMLElement} element - Specifies the element to render as component.
     * @private
     */
    function ComboBox(options, element) {
        return _super.call(this, options, element) || this;
    }
    /**
     * Initialize the event handler
     *
     * @private
     * @returns {void}
     */
    ComboBox.prototype.preRender = function () {
        _super.prototype.preRender.call(this);
    };
    ComboBox.prototype.getLocaleName = function () {
        return 'combo-box';
    };
    ComboBox.prototype.wireEvent = function () {
        if (this.getModuleName() === 'combobox') {
            EventHandler.add(this.inputWrapper.buttons[0], 'mousedown', this.preventBlur, this);
            EventHandler.add(this.inputWrapper.container, 'blur', this.onBlur, this);
        }
        if (!isNullOrUndefined(this.inputWrapper.buttons[0])) {
            EventHandler.add(this.inputWrapper.buttons[0], 'mousedown', this.dropDownClick, this);
        }
        EventHandler.add(this.inputElement, 'focus', this.targetFocus, this);
        if (!this.readonly) {
            EventHandler.add(this.inputElement, 'input', this.onInput, this);
            EventHandler.add(this.inputElement, 'keyup', this.onFilterUp, this);
            EventHandler.add(this.inputElement, 'keydown', this.onFilterDown, this);
            EventHandler.add(this.inputElement, 'paste', this.pasteHandler, this);
        }
        this.bindCommonEvent();
    };
    ComboBox.prototype.preventBlur = function (e) {
        if ((!this.allowFiltering && document.activeElement !== this.inputElement &&
            !document.activeElement.classList.contains(dropDownListClasses.input) && Browser.isDevice || !Browser.isDevice)) {
            e.preventDefault();
        }
    };
    ComboBox.prototype.onBlur = function (e) {
        var inputValue = this.inputElement && this.inputElement.value === '' ?
            null : this.inputElement && this.inputElement.value;
        if (!isNullOrUndefined(this.listData) && !isNullOrUndefined(inputValue) && inputValue !== this.text) {
            this.customValue(e);
        }
        _super.prototype.onBlur.call(this, e);
    };
    ComboBox.prototype.targetElement = function () {
        return this.inputElement;
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ComboBox.prototype.setOldText = function (text) {
        Input.setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
        this.customValue();
        this.removeSelection();
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ComboBox.prototype.setOldValue = function (value) {
        if (this.allowCustom) {
            this.valueMuteChange(this.value);
        }
        else {
            this.valueMuteChange(null);
        }
        this.removeSelection();
        this.setHiddenValue();
    };
    ComboBox.prototype.valueMuteChange = function (value) {
        var inputValue = isNullOrUndefined(value) ? null : value.toString();
        Input.setValue(inputValue, this.inputElement, this.floatLabelType, this.showClearButton);
        this.setProperties({ value: value, text: value, index: null }, true);
        this.activeIndex = this.index;
        var fields = this.fields;
        var dataItem = {};
        dataItem[fields.text] = isNullOrUndefined(value) ? null : value.toString();
        dataItem[fields.value] = isNullOrUndefined(value) ? null : value.toString();
        this.itemData = dataItem;
        this.item = null;
        if (this.previousValue !== this.value) {
            this.detachChangeEvent(null);
        }
    };
    ComboBox.prototype.updateValues = function () {
        if (!isNullOrUndefined(this.value)) {
            var li = this.getElementByValue(this.value);
            if (li) {
                this.setSelection(li, null);
            }
            else if (this.allowCustom) {
                this.valueMuteChange(this.value);
            }
            else {
                this.valueMuteChange(null);
            }
        }
        else if (this.text && isNullOrUndefined(this.value)) {
            var li = this.getElementByText(this.text);
            if (li) {
                this.setSelection(li, null);
            }
            else {
                Input.setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
                this.customValue();
            }
        }
        else {
            this.setSelection(this.liCollections[this.activeIndex], null);
        }
        this.setHiddenValue();
        Input.setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
    };
    ComboBox.prototype.updateIconState = function () {
        if (this.showClearButton) {
            if (this.inputElement && this.inputElement.value !== '' && !this.readonly) {
                removeClass([this.inputWrapper.clearButton], dropDownListClasses.clearIconHide);
            }
            else {
                addClass([this.inputWrapper.clearButton], dropDownListClasses.clearIconHide);
            }
        }
    };
    ComboBox.prototype.getAriaAttributes = function () {
        var ariaAttributes = {
            'aria-owns': this.element.id + '_options',
            'role': 'combobox',
            'aria-autocomplete': 'both',
            'aria-labelledby': this.hiddenElement.id,
            'aria-hasPopup': 'true',
            'aria-expanded': 'false',
            'aria-readonly': this.readonly.toString(),
            'autocomplete': 'off',
            'autocorrect': 'off',
            'autocapitalize': 'off',
            'spellcheck': 'false'
        };
        return ariaAttributes;
    };
    ComboBox.prototype.searchLists = function (e) {
        this.isTyped = true;
        if (this.isFiltering()) {
            _super.prototype.searchLists.call(this, e);
            if (this.ulElement && this.filterInput.value.trim() === '') {
                this.setHoverList(this.ulElement.querySelector('.' + dropDownListClasses.li));
            }
        }
        else {
            if (this.ulElement && this.inputElement.value === '' && this.preventAutoFill) {
                this.setHoverList(this.ulElement.querySelector('.' + dropDownListClasses.li));
            }
            this.incrementalSearch(e);
        }
    };
    ComboBox.prototype.getNgDirective = function () {
        return 'EJS-COMBOBOX';
    };
    ComboBox.prototype.setSearchBox = function () {
        this.filterInput = this.inputElement;
        return (this.isFiltering() ? this.inputWrapper : inputObject);
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ComboBox.prototype.onActionComplete = function (ulElement, list, e, isUpdated) {
        if (!this.isServerBlazor) {
            _super.prototype.onActionComplete.call(this, ulElement, list, e);
        }
        if (this.isSelectCustom) {
            this.removeSelection();
        }
        if (!this.preventAutoFill && this.getModuleName() === 'combobox' && this.isTyped) {
            this.inlineSearch();
        }
    };
    ComboBox.prototype.getFocusElement = function () {
        var dataItem = this.isSelectCustom ? { text: '' } : this.getItemData();
        var selected = this.list.querySelector('.' + dropDownListClasses.selected);
        var isSelected = dataItem.text === this.inputElement.value && !isNullOrUndefined(selected);
        if (isSelected) {
            return selected;
        }
        if ((Browser.isDevice && !this.isDropDownClick || !Browser.isDevice) &&
            !isNullOrUndefined(this.liCollections) && this.liCollections.length > 0) {
            var inputValue = this.inputElement.value;
            var activeItem = Search(inputValue, this.liCollections, 'StartsWith', true);
            var activeElement = activeItem.item;
            if (!isNullOrUndefined(activeElement)) {
                var count = this.getIndexByValue(activeElement.getAttribute('data-value')) - 1;
                var height = parseInt(getComputedStyle(this.liCollections[0], null).getPropertyValue('height'), 10);
                if (!isNaN(height) && this.getModuleName() !== 'autocomplete') {
                    this.removeFocus();
                    var fixedHead = this.fields.groupBy ? this.liCollections[0].offsetHeight : 0;
                    this.list.scrollTop = count * height + fixedHead;
                    addClass([activeElement], dropDownListClasses.focus);
                }
            }
            else {
                if (this.isSelectCustom && this.inputElement.value.trim() !== '') {
                    this.removeFocus();
                    this.list.scrollTop = 0;
                }
            }
            return activeElement;
        }
        else {
            return null;
        }
    };
    ComboBox.prototype.setValue = function (e) {
        if (e && e.type === 'keydown' && e.action === 'enter') {
            this.removeFillSelection();
        }
        if (this.autofill && this.getModuleName() === 'combobox' && e && e.type === 'keydown' && e.action !== 'enter') {
            this.preventAutoFill = false;
            this.inlineSearch(e);
            return false;
        }
        else {
            return _super.prototype.setValue.call(this, e);
        }
    };
    ComboBox.prototype.checkCustomValue = function () {
        this.itemData = this.getDataByValue(this.value);
        var dataItem = this.getItemData();
        if (!(this.allowCustom && isNullOrUndefined(dataItem.value) && isNullOrUndefined(dataItem.text))) {
            this.setProperties({ 'value': dataItem.value, 'text': dataItem.text }, !this.allowCustom);
        }
    };
    /**
     * Shows the spinner loader.
     *
     * @returns {void}

     */
    ComboBox.prototype.showSpinner = function () {
        if (isNullOrUndefined(this.spinnerElement)) {
            this.spinnerElement = (this.getModuleName() === 'autocomplete') ? (this.inputWrapper.buttons[0] ||
                this.inputWrapper.clearButton ||
                Input.appendSpan('e-input-group-icon ' + SPINNER_CLASS, this.inputWrapper.container, this.createElement)) :
                (this.inputWrapper.buttons[0] || this.inputWrapper.clearButton);
            addClass([this.spinnerElement], dropDownListClasses.disableIcon);
            createSpinner({
                target: this.spinnerElement,
                width: Browser.isDevice ? '16px' : '14px'
            }, this.createElement);
            showSpinner(this.spinnerElement);
        }
    };
    /**
     * Hides the spinner loader.
     *
     * @returns {void}

     */
    ComboBox.prototype.hideSpinner = function () {
        if (!isNullOrUndefined(this.spinnerElement)) {
            hideSpinner(this.spinnerElement);
            removeClass([this.spinnerElement], dropDownListClasses.disableIcon);
            if (this.spinnerElement.classList.contains(SPINNER_CLASS)) {
                detach(this.spinnerElement);
            }
            else {
                this.spinnerElement.innerHTML = '';
            }
            this.spinnerElement = null;
        }
    };
    ComboBox.prototype.setAutoFill = function (activeElement, isHover) {
        if (!isHover) {
            this.setHoverList(activeElement);
        }
        if (this.autofill && !this.preventAutoFill) {
            var currentValue = this.getTextByValue(activeElement.getAttribute('data-value')).toString();
            var currentFillValue = this.getFormattedValue(activeElement.getAttribute('data-value'));
            if (this.getModuleName() === 'combobox') {
                if (!this.isSelected && this.previousValue !== currentFillValue) {
                    this.updateSelectedItem(activeElement, null);
                    this.isSelected = true;
                    this.previousValue = this.getFormattedValue(activeElement.getAttribute('data-value'));
                }
                else {
                    this.updateSelectedItem(activeElement, null, true);
                }
            }
            if (!this.isAndroidAutoFill(currentValue)) {
                this.setAutoFillSelection(currentValue);
            }
        }
    };
    ComboBox.prototype.isAndroidAutoFill = function (value) {
        if (Browser.isAndroid) {
            var currentPoints = this.getSelectionPoints();
            var prevEnd = this.prevSelectPoints.end;
            var curEnd = currentPoints.end;
            var prevStart = this.prevSelectPoints.start;
            var curStart = currentPoints.start;
            if (prevEnd !== 0 && ((prevEnd === value.length && prevStart === value.length) ||
                (prevStart > curStart && prevEnd > curEnd) || (prevEnd === curEnd && prevStart === curStart))) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    ComboBox.prototype.clearAll = function (e, property) {
        if (isNullOrUndefined(property) || (!isNullOrUndefined(property) && isNullOrUndefined(property.dataSource))) {
            _super.prototype.clearAll.call(this, e);
            if (this.isServerBlazor && this.isFiltering() && this.isPopupOpen && e) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this.interopAdaptor.invokeMethodAsync('OnServerRenderList', this.beforePopupOpen, true);
            }
        }
        if (this.isFiltering() && !isNullOrUndefined(e) && e.target === this.inputWrapper.clearButton) {
            this.searchLists(e);
        }
    };
    ComboBox.prototype.isSelectFocusItem = function (element) {
        return !isNullOrUndefined(element);
    };
    ComboBox.prototype.inlineSearch = function (e) {
        var isKeyNavigate = (e && (e.action === 'down' || e.action === 'up' ||
            e.action === 'home' || e.action === 'end' || e.action === 'pageUp' || e.action === 'pageDown'));
        var activeElement = isKeyNavigate ? this.liCollections[this.activeIndex] : this.getFocusElement();
        if (!isNullOrUndefined(activeElement)) {
            if (!isKeyNavigate) {
                var value = this.getFormattedValue(activeElement.getAttribute('data-value'));
                this.activeIndex = this.getIndexByValue(value);
                this.activeIndex = !isNullOrUndefined(this.activeIndex) ? this.activeIndex : null;
            }
            this.preventAutoFill = this.inputElement.value === '' ? false : this.preventAutoFill;
            this.setAutoFill(activeElement, isKeyNavigate);
        }
        else if (this.inputElement.value === '') {
            this.activeIndex = null;
            this.list.scrollTop = 0;
            var focusItem = this.list.querySelector('.' + dropDownListClasses.li);
            this.setHoverList(focusItem);
        }
        else {
            this.activeIndex = null;
            this.removeSelection();
            if (this.liCollections && this.liCollections.length < 0) {
                this.removeFocus();
            }
        }
    };
    ComboBox.prototype.incrementalSearch = function (e) {
        this.showPopup();
        if (!isNullOrUndefined(this.listData)) {
            this.inlineSearch(e);
            e.preventDefault();
        }
    };
    ComboBox.prototype.setAutoFillSelection = function (currentValue) {
        var selection = this.getSelectionPoints();
        var value = this.inputElement.value.substr(0, selection.start);
        if (value && (value.toLowerCase() === currentValue.substr(0, selection.start).toLowerCase())) {
            var inputValue = value + currentValue.substr(value.length, currentValue.length);
            Input.setValue(inputValue, this.inputElement, this.floatLabelType, this.showClearButton);
            this.inputElement.setSelectionRange(selection.start, this.inputElement.value.length);
        }
        else {
            Input.setValue(currentValue, this.inputElement, this.floatLabelType, this.showClearButton);
            this.inputElement.setSelectionRange(0, this.inputElement.value.length);
        }
    };
    ComboBox.prototype.getValueByText = function (text) {
        return _super.prototype.getValueByText.call(this, text, true, this.ignoreAccent);
    };
    ComboBox.prototype.unWireEvent = function () {
        if (this.getModuleName() === 'combobox') {
            EventHandler.remove(this.inputWrapper.buttons[0], 'mousedown', this.preventBlur);
            EventHandler.remove(this.inputWrapper.container, 'blur', this.onBlur);
        }
        if (!isNullOrUndefined(this.inputWrapper.buttons[0])) {
            EventHandler.remove(this.inputWrapper.buttons[0], 'mousedown', this.dropDownClick);
        }
        if (this.inputElement) {
            EventHandler.remove(this.inputElement, 'focus', this.targetFocus);
            if (!this.readonly) {
                EventHandler.remove(this.inputElement, 'input', this.onInput);
                EventHandler.remove(this.inputElement, 'keyup', this.onFilterUp);
                EventHandler.remove(this.inputElement, 'keydown', this.onFilterDown);
                EventHandler.remove(this.inputElement, 'paste', this.pasteHandler);
            }
        }
        this.unBindCommonEvent();
    };
    ComboBox.prototype.setSelection = function (li, e) {
        _super.prototype.setSelection.call(this, li, e);
        if (!isNullOrUndefined(li) && !this.autofill && !this.isDropDownClick) {
            this.removeFocus();
        }
    };
    ComboBox.prototype.selectCurrentItem = function (e) {
        var li;
        if (this.isPopupOpen) {
            if (this.isSelected) {
                li = this.list.querySelector('.' + dropDownListClasses.selected);
            }
            else {
                li = this.list.querySelector('.' + dropDownListClasses.focus);
            }
            if (li) {
                this.setSelection(li, e);
                this.isTyped = false;
            }
            if (this.isSelected) {
                this.isSelectCustom = false;
                this.onChangeEvent(e);
            }
        }
        if (e.action === 'enter' && this.inputElement.value.trim() === '') {
            this.clearAll(e);
        }
        else if (this.isTyped && !this.isSelected && isNullOrUndefined(li)) {
            this.customValue(e);
        }
        this.hidePopup();
    };
    ComboBox.prototype.setHoverList = function (li) {
        this.removeSelection();
        if (this.isValidLI(li) && !li.classList.contains(dropDownListClasses.selected)) {
            this.removeFocus();
            li.classList.add(dropDownListClasses.focus);
        }
    };
    ComboBox.prototype.targetFocus = function (e) {
        if (Browser.isDevice && !this.allowFiltering) {
            this.preventFocus = false;
        }
        this.onFocus(e);
    };
    ComboBox.prototype.dropDownClick = function (e) {
        e.preventDefault();
        if (Browser.isDevice && !this.allowFiltering) {
            this.preventFocus = true;
        }
        _super.prototype.dropDownClick.call(this, e);
    };
    ComboBox.prototype.customValue = function (e) {
        var _this = this;
        var value = this.getValueByText(this.inputElement.value);
        if (!this.allowCustom && this.inputElement.value !== '') {
            var previousValue = this.previousValue;
            var currentValue = this.value;
            this.setProperties({ value: value });
            if (isNullOrUndefined(this.value)) {
                Input.setValue('', this.inputElement, this.floatLabelType, this.showClearButton);
            }
            if (this.autofill && previousValue === this.value && currentValue !== this.value) {
                this.onChangeEvent(null);
            }
        }
        else if (this.inputElement.value.trim() !== '') {
            var previousValue_1 = this.value;
            if (isNullOrUndefined(value)) {
                var value_1 = this.inputElement.value === '' ? null : this.inputElement.value;
                // eslint-disable-next-line max-len
                var eventArgs = { text: value_1, item: {} };
                if (!this.initial) {
                    this.trigger('customValueSpecifier', eventArgs, function (eventArgs) {
                        _this.updateCustomValueCallback(value_1, eventArgs, previousValue_1, e);
                    });
                }
                else {
                    this.updateCustomValueCallback(value_1, eventArgs, previousValue_1);
                }
            }
            else {
                this.isSelectCustom = false;
                this.setProperties({ value: value });
                if (previousValue_1 !== this.value) {
                    this.onChangeEvent(e);
                }
            }
        }
        else if (this.allowCustom) {
            this.isSelectCustom = true;
        }
    };
    ComboBox.prototype.updateCustomValueCallback = function (value, eventArgs, previousValue, e) {
        var fields = this.fields;
        var item = eventArgs.item;
        var dataItem = {};
        if (item && getValue(fields.text, item) && getValue(fields.value, item)) {
            dataItem = item;
        }
        else {
            setValue(fields.text, value, dataItem);
            setValue(fields.value, value, dataItem);
        }
        this.itemData = dataItem;
        var changeData = {
            text: getValue(fields.text, this.itemData),
            value: getValue(fields.value, this.itemData),
            index: null
        };
        this.setProperties(changeData, true);
        this.setSelection(null, null);
        this.isSelectCustom = true;
        if (previousValue !== this.value) {
            this.onChangeEvent(e);
        }
    };
    /**
     * Dynamically change the value of properties.
     *
     * @param {ComboBoxModel} newProp - Returns the dynamic property value of the component.
     * @param {ComboBoxModel} oldProp - Returns the previous property value of the component.
     * @private
     * @returns {void}
     */
    ComboBox.prototype.onPropertyChanged = function (newProp, oldProp) {
        if (this.getModuleName() === 'combobox') {
            this.checkData(newProp);
            this.setUpdateInitial(['fields', 'query', 'dataSource'], newProp);
        }
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'readonly':
                    Input.setReadonly(this.readonly, this.inputElement);
                    if (this.readonly) {
                        EventHandler.remove(this.inputElement, 'input', this.onInput);
                        EventHandler.remove(this.inputElement, 'keyup', this.onFilterUp);
                        EventHandler.remove(this.inputElement, 'keydown', this.onFilterDown);
                    }
                    else {
                        EventHandler.add(this.inputElement, 'input', this.onInput, this);
                        EventHandler.add(this.inputElement, 'keyup', this.onFilterUp, this);
                        EventHandler.add(this.inputElement, 'keydown', this.onFilterDown, this);
                    }
                    break;
                case 'allowFiltering':
                    this.setSearchBox();
                    if (this.isFiltering() && this.getModuleName() === 'combobox' && isNullOrUndefined(this.list)) {
                        _super.prototype.renderList.call(this);
                    }
                    break;
                case 'allowCustom':
                    break;
                default: {
                    // eslint-disable-next-line max-len
                    var comboProps = this.getPropObject(prop, newProp, oldProp);
                    _super.prototype.onPropertyChanged.call(this, comboProps.newProperty, comboProps.oldProperty);
                    if (this.isFiltering() && prop === 'dataSource' && isNullOrUndefined(this.list) && this.itemTemplate &&
                        this.getModuleName() === 'combobox') {
                        _super.prototype.renderList.call(this);
                    }
                    break;
                }
            }
        }
    };
    /**
     * To initialize the control rendering.
     *
     * @private
     * @returns {void}
     */
    ComboBox.prototype.render = function () {
        _super.prototype.render.call(this);
        this.setSearchBox();
        if (this.isFiltering() && this.getModuleName() === 'combobox' && isNullOrUndefined(this.list)) {
            _super.prototype.renderList.call(this);
        }
        this.renderComplete();
    };
    /**
     * Return the module name of this component.
     *
     * @private
     * @returns {string} Return the module name of this component.
     */
    ComboBox.prototype.getModuleName = function () {
        return 'combobox';
    };
    /**
     * Adds a new item to the combobox popup list. By default, new item appends to the list as the last item,
     * but you can insert based on the index parameter.
     *
     * @param  { Object[] } items - Specifies an array of JSON data or a JSON data.
     * @param { number } itemIndex - Specifies the index to place the newly added item in the popup list.
     * @returns {void}

     */
    ComboBox.prototype.addItem = function (items, itemIndex) {
        _super.prototype.addItem.call(this, items, itemIndex);
    };
    /**
     * To filter the data from given data source by using query
     *
     * @param  {Object[] | DataManager } dataSource - Set the data source to filter.
     * @param  {Query} query - Specify the query to filter the data.
     * @param  {FieldSettingsModel} fields - Specify the fields to map the column in the data table.
     * @returns {void}

     */
    ComboBox.prototype.filter = function (dataSource, query, fields) {
        _super.prototype.filter.call(this, dataSource, query, fields);
    };
    /**
     * Opens the popup that displays the list of items.
     *
     * @returns {void}

     */
    ComboBox.prototype.showPopup = function () {
        _super.prototype.showPopup.call(this);
    };
    /* eslint-disable valid-jsdoc, jsdoc/require-param */
    /**
     * Hides the popup if it is in open state.
     *
     * @returns {void}

     */
    ComboBox.prototype.hidePopup = function (e) {
        /* eslint-enable valid-jsdoc, jsdoc/require-param */
        var inputValue = this.inputElement && this.inputElement.value === '' ? null
            : this.inputElement && this.inputElement.value;
        if (!isNullOrUndefined(this.listData)) {
            var isEscape = this.isEscapeKey;
            if (this.isEscapeKey) {
                Input.setValue(this.typedString, this.inputElement, this.floatLabelType, this.showClearButton);
                this.isEscapeKey = false;
            }
            if (this.autofill) {
                this.removeFillSelection();
            }
            var dataItem = this.isSelectCustom ? { text: '' } : this.getItemData();
            var selected = this.list.querySelector('.' + dropDownListClasses.selected);
            if (this.inputElement && dataItem.text === this.inputElement.value && !isNullOrUndefined(selected)) {
                if (this.isSelected) {
                    this.onChangeEvent(e);
                    this.isSelectCustom = false;
                }
                _super.prototype.hidePopup.call(this, e);
                return;
            }
            if (this.getModuleName() === 'combobox' && this.inputElement.value.trim() !== '') {
                var searchItem = Search(this.inputElement.value, this.liCollections, 'Equal', true);
                this.selectedLI = searchItem.item;
                if (isNullOrUndefined(searchItem.index)) {
                    searchItem.index = Search(this.inputElement.value, this.liCollections, 'StartsWith', true).index;
                }
                this.activeIndex = searchItem.index;
                if (!isNullOrUndefined(this.selectedLI)) {
                    this.updateSelectedItem(this.selectedLI, null, true);
                }
                else if (isEscape) {
                    this.isSelectCustom = true;
                    this.removeSelection();
                }
            }
            if (!this.isEscapeKey && this.isTyped && !this.isInteracted) {
                this.customValue(e);
            }
        }
        if (isNullOrUndefined(this.listData) && this.allowCustom && !isNullOrUndefined(inputValue) && inputValue !== this.value) {
            this.customValue();
        }
        _super.prototype.hidePopup.call(this, e);
    };
    /**
     * Sets the focus to the component for interaction.
     *
     * @returns {void}
     */
    ComboBox.prototype.focusIn = function () {
        if (!this.enabled) {
            return;
        }
        if (Browser.isDevice && !this.allowFiltering) {
            this.preventFocus = true;
        }
        _super.prototype.focusIn.call(this);
    };
    /**
     * Allows you to clear the selected values from the component.
     *
     * @returns {void}

     */
    ComboBox.prototype.clear = function () {
        this.value = null;
    };
    /* eslint-disable valid-jsdoc, jsdoc/require-param */
    /**
     * Moves the focus from the component if the component is already focused.
     *
     * @returns {void}

     */
    ComboBox.prototype.focusOut = function (e) {
        /* eslint-enable valid-jsdoc, jsdoc/require-param */
        _super.prototype.focusOut.call(this, e);
    };
    /* eslint-disable valid-jsdoc, jsdoc/require-returns-description */
    /**
     * Gets all the list items bound on this component.
     *
     * @returns {Element[]}

     */
    ComboBox.prototype.getItems = function () {
        return _super.prototype.getItems.call(this);
    };
    /**
     * Gets the data Object that matches the given value.
     *
     * @param { string | number } value - Specifies the value of the list item.
     * @returns {Object}
     * @blazorType object

     */
    ComboBox.prototype.getDataByValue = function (value) {
        return _super.prototype.getDataByValue.call(this, value);
    };
    /* eslint-enable valid-jsdoc, jsdoc/require-returns-description */
    ComboBox.prototype.renderHightSearch = function () {
        // update high light search
    };
    __decorate([
        Property(false)
    ], ComboBox.prototype, "autofill", void 0);
    __decorate([
        Property(true)
    ], ComboBox.prototype, "allowCustom", void 0);
    __decorate([
        Property({})
    ], ComboBox.prototype, "htmlAttributes", void 0);
    __decorate([
        Property(false)
    ], ComboBox.prototype, "allowFiltering", void 0);
    __decorate([
        Property(null)
    ], ComboBox.prototype, "query", void 0);
    __decorate([
        Property(null)
    ], ComboBox.prototype, "index", void 0);
    __decorate([
        Property(true)
    ], ComboBox.prototype, "showClearButton", void 0);
    __decorate([
        Property(false)
    ], ComboBox.prototype, "enableRtl", void 0);
    __decorate([
        Event()
    ], ComboBox.prototype, "customValueSpecifier", void 0);
    __decorate([
        Event()
    ], ComboBox.prototype, "filtering", void 0);
    __decorate([
        Property(null)
    ], ComboBox.prototype, "valueTemplate", void 0);
    __decorate([
        Property('Never')
    ], ComboBox.prototype, "floatLabelType", void 0);
    __decorate([
        Property(null)
    ], ComboBox.prototype, "filterBarPlaceholder", void 0);
    __decorate([
        Property(null)
    ], ComboBox.prototype, "cssClass", void 0);
    __decorate([
        Property(null)
    ], ComboBox.prototype, "headerTemplate", void 0);
    __decorate([
        Property(null)
    ], ComboBox.prototype, "footerTemplate", void 0);
    __decorate([
        Property(null)
    ], ComboBox.prototype, "placeholder", void 0);
    __decorate([
        Property('100%')
    ], ComboBox.prototype, "width", void 0);
    __decorate([
        Property('300px')
    ], ComboBox.prototype, "popupHeight", void 0);
    __decorate([
        Property('100%')
    ], ComboBox.prototype, "popupWidth", void 0);
    __decorate([
        Property(false)
    ], ComboBox.prototype, "readonly", void 0);
    __decorate([
        Property(null)
    ], ComboBox.prototype, "text", void 0);
    __decorate([
        Property(null)
    ], ComboBox.prototype, "value", void 0);
    ComboBox = __decorate([
        NotifyPropertyChanges
    ], ComboBox);
    return ComboBox;
}(DropDownList));
export { ComboBox };
