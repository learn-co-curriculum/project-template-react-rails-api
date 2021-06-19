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
/// <reference path='../drop-down-base/drop-down-base-model.d.ts'/>
import { Input } from '@syncfusion/ej2-inputs';
import { DropDownBase, dropDownBaseClasses } from '../drop-down-base/drop-down-base';
import { EventHandler, closest, removeClass, addClass, Complex, Property, ChildProperty, L10n } from '@syncfusion/ej2-base';
import { NotifyPropertyChanges, getComponent, Event, extend, detach, attributes } from '@syncfusion/ej2-base';
import { getUniqueID, Browser, formatUnit, isNullOrUndefined, getValue } from '@syncfusion/ej2-base';
import { prepend, append, isBlazor, resetBlazorTemplate } from '@syncfusion/ej2-base';
import { cssClass, Sortable, moveTo } from '@syncfusion/ej2-lists';
import { Button } from '@syncfusion/ej2-buttons';
import { createSpinner, showSpinner, hideSpinner, getZindexPartial } from '@syncfusion/ej2-popups';
import { DataManager, Query } from '@syncfusion/ej2-data';
var ITEMTEMPLATE_PROPERTY = 'ItemTemplate';
/**
 * Defines the Selection settings of List Box.
 */
var SelectionSettings = /** @class */ (function (_super) {
    __extends(SelectionSettings, _super);
    function SelectionSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property('Multiple')
    ], SelectionSettings.prototype, "mode", void 0);
    __decorate([
        Property(false)
    ], SelectionSettings.prototype, "showCheckbox", void 0);
    __decorate([
        Property(false)
    ], SelectionSettings.prototype, "showSelectAll", void 0);
    __decorate([
        Property('Left')
    ], SelectionSettings.prototype, "checkboxPosition", void 0);
    return SelectionSettings;
}(ChildProperty));
export { SelectionSettings };
/**
 * Defines the toolbar settings of List Box.
 */
var ToolbarSettings = /** @class */ (function (_super) {
    __extends(ToolbarSettings, _super);
    function ToolbarSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property([])
    ], ToolbarSettings.prototype, "items", void 0);
    __decorate([
        Property('Right')
    ], ToolbarSettings.prototype, "position", void 0);
    return ToolbarSettings;
}(ChildProperty));
export { ToolbarSettings };
/**
 * The ListBox is a graphical user interface component used to display a list of items.
 * Users can select one or more items in the list using a checkbox or by keyboard selection.
 * It supports sorting, grouping, reordering and drag and drop of items.
 * ```html
 * <select id="listbox">
 *      <option value='1'>Badminton</option>
 *      <option value='2'>Basketball</option>
 *      <option value='3'>Cricket</option>
 *      <option value='4'>Football</option>
 *      <option value='5'>Tennis</option>
 * </select>
 * ```
 * ```typescript
 * <script>
 *   var listObj = new ListBox();
 *   listObj.appendTo("#listbox");
 * </script>
 * ```
 */
var ListBox = /** @class */ (function (_super) {
    __extends(ListBox, _super);
    /**
     * Constructor for creating the ListBox component.
     *
     * @param {ListBoxModel} options - Specifies ListBox model
     * @param {string | HTMLElement} element - Specifies the element.
     */
    function ListBox(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.isValidKey = false;
        _this.isDataSourceUpdate = false;
        _this.keyDownStatus = false;
        return _this;
    }
    ListBox_1 = ListBox;
    /**
     * Adds a new item to the popup list. By default, new item appends to the list as the last item,
     * but you can insert based on the index parameter.
     *
     * @param  { Object[] } items - Specifies an array of JSON data or a JSON data.
     * @param { number } itemIndex - Specifies the index to place the newly added item in the popup list.
     * @returns {void}.
     * @private
     */
    ListBox.prototype.addItem = function (items, itemIndex) {
        _super.prototype.addItem.call(this, items, itemIndex);
    };
    /**
     * Build and render the component.
     *
     * @private
     * @returns {void}
     */
    ListBox.prototype.render = function () {
        this.inputString = '';
        this.initLoad = true;
        this.isCustomFiltering = false;
        this.initialSelectedOptions = this.value;
        if (isBlazor() && this.isServerRendered) {
            this.list = this.element.parentElement;
            this.liCollections = this.list.querySelectorAll('.' + cssClass.li);
            this.mainList = this.ulElement = this.list.querySelector('ul');
            this.setSelection(this.value);
            if (this.allowFiltering) {
                this.setFiltering();
            }
            this.initToolbarAndStyles();
            this.updateSelectionSettings();
            this.wireEvents();
            this.initDraggable();
            this.initLoad = false;
        }
        else {
            _super.prototype.render.call(this);
        }
        this.renderComplete();
    };
    ListBox.prototype.updateBlazorListData = function (data, isDataSource, select) {
        if (isDataSource) {
            this.liCollections = this.list.querySelectorAll('.' + cssClass.li);
            this.mainList = this.ulElement = this.list.querySelector('ul');
            if (this.allowDragAndDrop && !this.ulElement.classList.contains('e-sortable')) {
                this.initDraggable();
            }
            if (select) {
                this.selectItems(this.listData, false);
            }
        }
        if (!isNullOrUndefined(data)) {
            this.sortedData = this.jsonData = this.listData = data;
        }
    };
    ListBox.prototype.initWrapper = function () {
        var hiddenSelect = this.createElement('select', { className: 'e-hidden-select', attrs: { 'multiple': '' } });
        this.list.classList.add('e-listbox-wrapper');
        if (this.itemTemplate) {
            this.list.classList.add('e-list-template');
        }
        this.list.classList.add('e-wrapper');
        this.list.classList.add('e-lib');
        if (this.element.tagName === 'EJS-LISTBOX') {
            this.element.setAttribute('tabindex', '0');
            if (this.initLoad) {
                this.element.appendChild(this.list);
            }
        }
        else {
            if (this.initLoad) {
                this.element.parentElement.insertBefore(this.list, this.element);
            }
            this.list.insertBefore(this.element, this.list.firstChild);
            this.element.style.display = 'none';
        }
        this.list.insertBefore(hiddenSelect, this.list.firstChild);
        if (this.list.getElementsByClassName('e-list-item')[0]) {
            this.list.getElementsByClassName('e-list-item')[0].classList.remove(dropDownBaseClasses.focus);
        }
        if (this.itemTemplate) {
            this.renderReactTemplates();
        }
        removeClass([this.list], [dropDownBaseClasses.content, dropDownBaseClasses.root]);
        this.validationAttribute(this.element, hiddenSelect);
        this.list.setAttribute('role', 'listbox');
        attributes(this.list, { 'role': 'listbox', 'aria-multiselectable': this.selectionSettings.mode === 'Multiple' ? 'true' : 'false' });
        this.updateSelectionSettings();
    };
    ListBox.prototype.updateSelectionSettings = function () {
        if (this.selectionSettings.showCheckbox && this.selectionSettings.showSelectAll && this.liCollections.length) {
            var l10nSelect = new L10n(this.getModuleName(), { selectAllText: 'Select All', unSelectAllText: 'Unselect All' }, this.locale);
            this.showSelectAll = true;
            this.selectAllText = l10nSelect.getConstant('selectAllText');
            this.unSelectAllText = l10nSelect.getConstant('unSelectAllText');
            this.popupWrapper = this.list;
            this.checkBoxSelectionModule.checkAllParent = null;
            this.notify('selectAll', {});
        }
    };
    ListBox.prototype.initDraggable = function () {
        var _this = this;
        if (this.ulElement) {
            this.ulElement.id = this.element.id + '_parent';
        }
        if (this.allowDragAndDrop) {
            new Sortable(this.ulElement, {
                scope: this.scope,
                itemClass: 'e-list-item',
                dragStart: this.triggerDragStart.bind(this),
                drag: this.triggerDrag.bind(this),
                beforeDrop: this.beforeDragEnd.bind(this),
                drop: this.dragEnd.bind(this),
                placeHolder: function () { return _this.createElement('span', { className: 'e-placeholder' }); },
                helper: function (e) {
                    var wrapper = _this.list.cloneNode();
                    var ele = e.sender.cloneNode(true);
                    wrapper.appendChild(ele);
                    var refEle = _this.getItems()[0];
                    wrapper.style.width = refEle.offsetWidth + 'px';
                    wrapper.style.height = refEle.offsetHeight + 'px';
                    if ((_this.value && _this.value.length) > 1 && _this.isSelected(ele)) {
                        ele.appendChild(_this.createElement('span', {
                            className: 'e-list-badge', innerHTML: _this.value.length + ''
                        }));
                    }
                    wrapper.style.zIndex = getZindexPartial(_this.element) + '';
                    return wrapper;
                }
            });
        }
    };
    ListBox.prototype.updateActionCompleteData = function (li, item) {
        this.jsonData.push(item);
    };
    ListBox.prototype.initToolbar = function () {
        var pos = this.toolbarSettings.position;
        var prevScope = this.element.getAttribute('data-value');
        if (this.toolbarSettings.items.length) {
            var toolElem = this.createElement('div', { className: 'e-listbox-tool', attrs: { 'role': 'toolbar' } });
            var wrapper = this.createElement('div', {
                className: 'e-listboxtool-wrapper e-lib e-' + pos.toLowerCase()
            });
            this.list.parentElement.insertBefore(wrapper, this.list);
            wrapper.appendChild(pos === 'Right' ? this.list : toolElem);
            wrapper.appendChild(pos === 'Right' ? toolElem : this.list);
            this.createButtons(toolElem);
            if (!this.element.id) {
                this.element.id = getUniqueID('e-' + this.getModuleName());
            }
            if (this.scope) {
                document.querySelector(this.scope).setAttribute('data-value', this.element.id);
            }
            else {
                this.updateToolBarState();
            }
        }
        var scope = this.element.getAttribute('data-value');
        if (prevScope && scope && (prevScope !== scope)) {
            this.tBListBox = getComponent(document.getElementById(prevScope), this.getModuleName());
            this.tBListBox.updateToolBarState();
        }
        else if (scope) {
            this.tBListBox = getComponent(document.getElementById(scope), this.getModuleName());
            this.tBListBox.updateToolBarState();
        }
    };
    ListBox.prototype.createButtons = function (toolElem) {
        var _this = this;
        var btn;
        var ele;
        var title;
        var l10n = new L10n(this.getModuleName(), {
            moveUp: 'Move Up', moveDown: 'Move Down', moveTo: 'Move To',
            moveFrom: 'Move From', moveAllTo: 'Move All To', moveAllFrom: 'Move All From'
        }, this.locale);
        this.toolbarSettings.items.forEach(function (value) {
            title = l10n.getConstant(value);
            ele = _this.createElement('button', {
                attrs: {
                    'type': 'button',
                    'data-value': value,
                    'title': title,
                    'aria-label': title
                }
            });
            toolElem.appendChild(ele);
            btn = new Button({ iconCss: 'e-icons e-' + value.toLowerCase() }, ele);
            btn.createElement = _this.createElement;
        });
    };
    ListBox.prototype.validationAttribute = function (input, hiddenSelect) {
        _super.prototype.validationAttribute.call(this, input, hiddenSelect);
        hiddenSelect.required = input.required;
        input.required = false;
    };
    ListBox.prototype.setHeight = function () {
        var ele = this.toolbarSettings.items.length ? this.list.parentElement : this.list;
        ele.style.height = formatUnit(this.height);
        if (this.allowFiltering && this.height.toString().indexOf('%') < 0) {
            addClass([this.list], 'e-filter-list');
        }
        else {
            removeClass([this.list], 'e-filter-list');
        }
    };
    ListBox.prototype.setCssClass = function () {
        var wrap = this.toolbarSettings.items.length ? this.list.parentElement : this.list;
        if (this.cssClass) {
            addClass([wrap], this.cssClass.split(' '));
        }
        if (this.enableRtl) {
            addClass([wrap], 'e-rtl');
        }
    };
    ListBox.prototype.setEnable = function () {
        var ele = this.toolbarSettings.items.length ? this.list.parentElement : this.list;
        if (this.enabled) {
            removeClass([ele], cssClass.disabled);
        }
        else {
            addClass([ele], cssClass.disabled);
            if (isBlazor() && this.isServerRendered && this.toolbarSettings.items.length) {
                removeClass([this.list], cssClass.disabled);
            }
        }
    };
    ListBox.prototype.showSpinner = function () {
        if (!this.spinner) {
            this.spinner = this.createElement('div', { className: 'e-listbox-wrapper' });
        }
        this.spinner.style.height = formatUnit(this.height);
        this.element.parentElement.insertBefore(this.spinner, this.element.nextSibling);
        createSpinner({ target: this.spinner }, this.createElement);
        showSpinner(this.spinner);
    };
    ListBox.prototype.hideSpinner = function () {
        if (this.spinner.querySelector('.e-spinner-pane')) {
            hideSpinner(this.spinner);
        }
        if (this.spinner.parentElement) {
            detach(this.spinner);
        }
    };
    ListBox.prototype.onInput = function () {
        this.isDataSourceUpdate = false;
        if (this.keyDownStatus) {
            this.isValidKey = true;
        }
        else {
            this.isValidKey = false;
        }
        this.keyDownStatus = false;
        this.refreshClearIcon();
    };
    ListBox.prototype.clearText = function () {
        this.filterInput.value = '';
        this.refreshClearIcon();
        var event = document.createEvent('KeyboardEvent');
        this.isValidKey = true;
        this.KeyUp(event);
    };
    ListBox.prototype.refreshClearIcon = function () {
        if (this.filterInput.parentElement.querySelector('.' + listBoxClasses.clearIcon)) {
            var clearElement = this.filterInput.parentElement.querySelector('.' + listBoxClasses.clearIcon);
            clearElement.style.visibility = this.filterInput.value === '' ? 'hidden' : 'visible';
        }
    };
    ListBox.prototype.onActionComplete = function (ulElement, list, e) {
        var searchEle;
        if (this.allowFiltering && this.list.getElementsByClassName('e-filter-parent')[0]) {
            if (isBlazor() && this.isServerRendered) {
                searchEle = this.list.getElementsByClassName('e-filter-parent')[0];
            }
            else {
                searchEle = this.list.getElementsByClassName('e-filter-parent')[0].cloneNode(true);
            }
        }
        if (list.length === 0) {
            var noRecElem = ulElement.getElementsByClassName('e-list-nrt')[0];
            if (noRecElem) {
                ulElement.removeChild(noRecElem);
            }
        }
        _super.prototype.onActionComplete.call(this, ulElement, list, e);
        if (this.allowFiltering && !isNullOrUndefined(searchEle)) {
            this.list.insertBefore(searchEle, this.list.firstElementChild);
            if (!isBlazor() && !this.isServerRendered) {
                this.filterParent = this.list.getElementsByClassName('e-filter-parent')[0];
                this.filterWireEvents(searchEle);
            }
        }
        this.initWrapper();
        this.setSelection();
        this.initDraggable();
        this.mainList = this.ulElement;
        if (this.initLoad) {
            this.jsonData = [];
            extend(this.jsonData, list, []);
            this.initToolbarAndStyles();
            this.wireEvents();
            if (this.showCheckbox) {
                this.setCheckboxPosition();
            }
            if (this.allowFiltering) {
                this.setFiltering();
            }
        }
        else {
            if (this.isDataSourceUpdate) {
                this.jsonData = [];
                extend(this.jsonData, list, []);
                this.isDataSourceUpdate = false;
            }
            if (this.allowFiltering) {
                var filterElem = this.list.getElementsByClassName('e-input-filter')[0];
                var txtLength = this.filterInput.value.length;
                filterElem.selectionStart = txtLength;
                filterElem.selectionEnd = txtLength;
                filterElem.focus();
            }
        }
        if (this.toolbarSettings.items.length && this.scope && this.scope.indexOf('#') > -1 && !isNullOrUndefined(e)) {
            var scope = this.scope.replace('#', '');
            var scopedLB = getComponent(document.getElementById(scope), this.getModuleName());
            scopedLB.initToolbar();
        }
        this.initLoad = false;
    };
    ListBox.prototype.initToolbarAndStyles = function () {
        this.initToolbar();
        this.setCssClass();
        this.setEnable();
        this.setHeight();
    };
    ListBox.prototype.triggerDragStart = function (args) {
        var _this = this;
        var badge;
        args = extend(this.getDragArgs(args), { dragSelected: true });
        if (Browser.isIos) {
            this.list.style.overflow = 'hidden';
        }
        this.trigger('dragStart', args, function (dragEventArgs) {
            _this.allowDragAll = dragEventArgs.dragSelected;
            if (!_this.allowDragAll) {
                badge = _this.ulElement.getElementsByClassName('e-list-badge')[0];
                if (badge) {
                    detach(badge);
                }
            }
            if (isBlazor()) {
                args.bindEvents(args.dragElement);
            }
        });
    };
    ListBox.prototype.triggerDrag = function (args) {
        this.trigger('drag', this.getDragArgs(args));
        var listObj = this.getComponent(args.target);
        if (listObj && listObj.listData.length === 0) {
            var noRecElem = listObj.ulElement.getElementsByClassName('e-list-nrt')[0];
            if (noRecElem) {
                listObj.ulElement.removeChild(noRecElem);
            }
        }
    };
    ListBox.prototype.beforeDragEnd = function (args) {
        var dragValue = this.getFormattedValue(args.droppedElement.getAttribute('data-value'));
        if (this.value.indexOf(dragValue) > -1) {
            args.items = this.getDataByValues(this.value);
        }
        else {
            args.items = this.getDataByValues([dragValue]);
        }
        this.trigger('beforeDrop', args);
    };
    ListBox.prototype.dragEnd = function (args) {
        var _this = this;
        var listData;
        var liColl;
        var jsonData;
        var droppedData;
        var selectedOptions;
        var sortedData;
        var dropValue = this.getFormattedValue(args.droppedElement.getAttribute('data-value'));
        var listObj = this.getComponent(args.droppedElement);
        var getArgs = this.getDragArgs({ target: args.droppedElement }, true);
        var sourceArgs = { previousData: this.dataSource };
        var destArgs = { previousData: listObj.dataSource };
        var dragArgs = extend({}, getArgs, { target: args.target, source: { previousData: this.dataSource }, previousIndex: args.previousIndex, currentIndex: args.currentIndex });
        if (listObj !== this) {
            var sourceArgs1 = extend(sourceArgs, { currentData: this.listData });
            dragArgs = extend(dragArgs, { source: sourceArgs1, destination: destArgs });
        }
        if (Browser.isIos) {
            this.list.style.overflow = '';
        }
        if (listObj === this) {
            var ul_1 = this.ulElement;
            listData = [].slice.call(this.listData);
            liColl = [].slice.call(this.liCollections);
            jsonData = [].slice.call(this.jsonData);
            sortedData = [].slice.call(this.sortedData);
            var toSortIdx_1 = args.currentIndex;
            var toIdx_1 = args.currentIndex = this.getCurIdx(this, args.currentIndex);
            var rIdx = listData.indexOf(this.getDataByValue(dropValue));
            var jsonIdx = jsonData.indexOf(this.getDataByValue(dropValue));
            var sIdx = sortedData.indexOf(this.getDataByValue(dropValue));
            listData.splice(toIdx_1, 0, listData.splice(rIdx, 1)[0]);
            sortedData.splice(toSortIdx_1, 0, sortedData.splice(sIdx, 1)[0]);
            jsonData.splice(toIdx_1, 0, jsonData.splice(jsonIdx, 1)[0]);
            if (!isBlazor()) {
                liColl.splice(toIdx_1, 0, liColl.splice(rIdx, 1)[0]);
            }
            if (this.allowDragAll) {
                selectedOptions = this.value && Array.prototype.indexOf.call(this.value, dropValue) > -1 ? this.value : [dropValue];
                selectedOptions.forEach(function (value) {
                    if (value !== dropValue) {
                        var idx = listData.indexOf(_this.getDataByValue(value));
                        var jsonIdx_1 = jsonData.indexOf(_this.getDataByValue(value));
                        var sIdx_1 = sortedData.indexOf(_this.getDataByValue(value));
                        if (idx > toIdx_1) {
                            toIdx_1++;
                        }
                        jsonData.splice(toIdx_1, 0, jsonData.splice(jsonIdx_1, 1)[0]);
                        listData.splice(toIdx_1, 0, listData.splice(idx, 1)[0]);
                        sortedData.splice(toSortIdx_1, 0, sortedData.splice(sIdx_1, 1)[0]);
                        if (!isBlazor()) {
                            liColl.splice(toIdx_1, 0, liColl.splice(idx, 1)[0]);
                            ul_1.insertBefore(_this.getItems()[_this.getIndexByValue(value)], ul_1.getElementsByClassName('e-placeholder')[0]);
                        }
                    }
                    else if (isBlazor()) {
                        var lists = [].slice.call(_this.ulElement.getElementsByClassName(cssClass.li));
                        var refChild = _this.ulElement.removeChild(lists[args.currentIndex]);
                        lists.splice(args.currentIndex, 1);
                        _this.ulElement.insertBefore(refChild, lists[args.previousIndex]);
                    }
                });
            }
            this.listData = listData;
            this.jsonData = jsonData;
            this.sortedData = sortedData;
            this.liCollections = liColl;
            if (isBlazor()) {
                var value_1 = this.value;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this.interopAdaptor.invokeMethodAsync('UpdateListData', this.listData).then(function () {
                    _this.updateBlazorListData(null, true);
                    _this.selectItems(_this.listData, false);
                    _this.selectItems(value_1);
                });
            }
        }
        else {
            var li_1;
            var fLiColl_1 = [].slice.call(this.liCollections);
            var currIdx_1 = args.currentIndex = this.getCurIdx(listObj, args.currentIndex);
            var ul_2 = listObj.ulElement;
            listData = [].slice.call(listObj.listData);
            liColl = [].slice.call(listObj.liCollections);
            jsonData = [].slice.call(listObj.jsonData);
            sortedData = [].slice.call(listObj.sortedData);
            selectedOptions = (this.value && Array.prototype.indexOf.call(this.value, dropValue) > -1 && this.allowDragAll)
                ? this.value : [dropValue];
            var fListData_1 = [].slice.call(this.listData);
            var fSortData_1 = [].slice.call(this.sortedData);
            selectedOptions.forEach(function (value, index) {
                droppedData = _this.getDataByValue(value);
                var srcIdx = _this.listData.indexOf(droppedData);
                var jsonSrcIdx = _this.jsonData.indexOf(droppedData);
                var sortIdx = _this.sortedData.indexOf(droppedData);
                fListData_1.splice(srcIdx, 1);
                _this.jsonData.splice(jsonSrcIdx, 1);
                fSortData_1.splice(sortIdx, 1);
                _this.listData = fListData_1;
                _this.sortedData = fSortData_1;
                var destIdx = value === dropValue ? args.currentIndex : currIdx_1;
                listData.splice(destIdx, 0, droppedData);
                jsonData.splice(destIdx, 0, droppedData);
                sortedData.splice(destIdx, 0, droppedData);
                if (!isBlazor()) {
                    liColl.splice(destIdx, 0, fLiColl_1.splice(srcIdx, 1)[0]);
                }
                if (!value) {
                    var liCollElem = _this.getItems();
                    for (var i = 0; i < liCollElem.length; i++) {
                        if (liCollElem[i].getAttribute('data-value') === null && liCollElem[i].classList.contains('e-list-item')) {
                            li_1 = liCollElem[i];
                            break;
                        }
                    }
                }
                else {
                    li_1 = _this.getItems()[_this.getIndexByValue(value)];
                }
                if (!li_1) {
                    li_1 = args.helper;
                }
                _this.removeSelected(_this, value === dropValue ? [args.droppedElement] : [li_1]);
                if (isBlazor()) {
                    if (index === 0) {
                        _this.ulElement.insertBefore(ul_2.getElementsByClassName(cssClass.li)[args.currentIndex], _this.ulElement.getElementsByClassName(cssClass.li)[args.previousIndex]);
                    }
                }
                else {
                    ul_2.insertBefore(li_1, ul_2.getElementsByClassName('e-placeholder')[0]);
                }
                currIdx_1++;
            });
            if (isBlazor()) {
                /* eslint-disable */
                this.interopAdaptor.invokeMethodAsync('UpdateListData', this.listData).then(function () {
                    _this.updateSelectedOptions();
                    if (_this.fields.groupBy) {
                        _this.setSelection();
                    }
                    _this.updateBlazorListData(null, true, _this.value == null || !_this.value.length);
                });
                listObj.interopAdaptor.invokeMethodAsync('UpdateListData', listData).then(function () {
                    if (listObj.sortOrder !== 'None' || _this.selectionSettings.showCheckbox
                        !== listObj.selectionSettings.showCheckbox || listObj.fields.groupBy) {
                        listObj.setSelection();
                    }
                    listObj.updateBlazorListData(null, true, listObj.value == null || !listObj.value.length);
                });
                /* eslint-enable */
            }
            else {
                if (this.fields.groupBy) {
                    this.ulElement.innerHTML = this.renderItems(this.listData, this.fields).innerHTML;
                    this.setSelection();
                }
                if (listObj.sortOrder !== 'None' || this.selectionSettings.showCheckbox
                    !== listObj.selectionSettings.showCheckbox || listObj.fields.groupBy || listObj.itemTemplate || this.itemTemplate) {
                    var sortable = getComponent(ul_2, 'sortable');
                    ul_2.innerHTML = listObj.renderItems(listData, listObj.fields).innerHTML;
                    if (sortable.placeHolderElement) {
                        ul_2.appendChild(sortable.placeHolderElement);
                    }
                    ul_2.appendChild(args.helper);
                    listObj.setSelection();
                }
                this.liCollections = fLiColl_1;
                listObj.liCollections = liColl;
            }
            listObj.jsonData = extend([], [], jsonData, false);
            listObj.listData = extend([], [], listData, false);
            listObj.sortedData = extend([], [], sortedData, false);
            if (this.listData.length === 0) {
                this.l10nUpdate();
            }
        }
        if (this === listObj) {
            var sourceArgs1 = extend(sourceArgs, { currentData: listData });
            dragArgs = extend(dragArgs, { source: sourceArgs1 });
        }
        else {
            var dragArgs1 = extend(destArgs, { currentData: listData });
            dragArgs = extend(dragArgs, { destination: dragArgs1 });
        }
        this.trigger('drop', dragArgs);
    };
    ListBox.prototype.removeSelected = function (listObj, elems) {
        if (listObj.selectionSettings.showCheckbox) {
            elems.forEach(function (ele) { ele.getElementsByClassName('e-frame')[0].classList.remove('e-check'); });
        }
        else {
            removeClass(elems, cssClass.selected);
        }
    };
    ListBox.prototype.getCurIdx = function (listObj, idx) {
        if (listObj.fields.groupBy) {
            idx -= [].slice.call(listObj.ulElement.children).slice(0, idx)
                .filter(function (ele) { return ele.classList.contains(cssClass.group); }).length;
        }
        return idx;
    };
    ListBox.prototype.getComponent = function (li) {
        var listObj;
        var ele = (this.element.tagName === 'EJS-LISTBOX' ? closest(li, '.e-listbox')
            : closest(li, '.e-listbox-wrapper') && closest(li, '.e-listbox-wrapper').querySelector('.e-listbox'));
        if (ele) {
            listObj = getComponent(ele, this.getModuleName());
        }
        return listObj;
    };
    ListBox.prototype.listOption = function (dataSource, fields) {
        this.listCurrentOptions = _super.prototype.listOption.call(this, dataSource, fields);
        this.listCurrentOptions = extend({}, this.listCurrentOptions, { itemCreated: this.triggerBeforeItemRender.bind(this) }, true);
        this.notify('listoption', { module: 'CheckBoxSelection' });
        return this.listCurrentOptions;
    };
    ListBox.prototype.triggerBeforeItemRender = function (e) {
        e.item.setAttribute('tabindex', '-1');
        this.trigger('beforeItemRender', { element: e.item, item: e.curData });
    };
    ListBox.prototype.requiredModules = function () {
        var modules = [];
        if (this.selectionSettings.showCheckbox) {
            modules.push({
                member: 'CheckBoxSelection',
                args: [this]
            });
        }
        return modules;
    };
    /**
     * This method is used to enable or disable the items in the ListBox based on the items and enable argument.
     *
     * @param {string[]} items - Text items that needs to be enabled/disabled.
     * @param {boolean} enable - Set `true`/`false` to enable/disable the list items.
     * @param {boolean} isValue - Set `true` if `items` parameter is a array of unique values.
     * @returns {void}
     */
    ListBox.prototype.enableItems = function (items, enable, isValue) {
        var _this = this;
        if (enable === void 0) { enable = true; }
        var li;
        items.forEach(function (item) {
            var text;
            if (isBlazor() && typeof (item) === 'object') {
                text = getValue(isValue ? _this.fields.value : _this.fields.text, item);
                if (isNullOrUndefined(text)) {
                    return;
                }
            }
            else {
                text = item;
            }
            li = _this.findListElement(_this.list, 'li', 'data-value', isValue ? text : _this.getValueByText(text));
            if (!li) {
                return;
            }
            if (enable) {
                removeClass([li], cssClass.disabled);
                li.removeAttribute('aria-disabled');
            }
            else {
                addClass([li], cssClass.disabled);
                li.setAttribute('aria-disabled', 'true');
            }
        });
    };
    /**
     * Based on the state parameter, specified list item will be selected/deselected.
     *
     * @param {string[]} items - Array of text value of the item.
     * @param {boolean} state - Set `true`/`false` to select/un select the list items.
     * @param {boolean} isValue - Set `true` if `items` parameter is a array of unique values.
     * @returns {void}
     */
    ListBox.prototype.selectItems = function (items, state, isValue) {
        if (state === void 0) { state = true; }
        this.setSelection(items, state, !isValue);
        this.updateSelectedOptions();
    };
    /**
     * Based on the state parameter, entire list item will be selected/deselected.
     *
     * @param {boolean} state - Set `true`/`false` to select/un select the entire list items.
     * @returns {void}
     */
    ListBox.prototype.selectAll = function (state) {
        if (state === void 0) { state = true; }
        this.selectAllItems(state);
    };
    /**
     * Adds a new item to the list. By default, new item appends to the list as the last item,
     * but you can insert based on the index parameter.
     *
     * @param  { Object[] } items - Specifies an array of JSON data or a JSON data.
     * @param { number } itemIndex - Specifies the index to place the newly added item in the list.
     * @returns {void}.
     */
    ListBox.prototype.addItems = function (items, itemIndex) {
        _super.prototype.addItem.call(this, items, itemIndex);
    };
    /**
     * Removes a item from the list. By default, removed the last item in the list,
     * but you can remove based on the index parameter.
     *
     * @param  { Object[] } items - Specifies an array of JSON data or a JSON data.
     * @param { number } itemIndex - Specifies the index to remove the item from the list.
     * @returns {void}.
     */
    ListBox.prototype.removeItems = function (items, itemIndex) {
        this.removeItem(items, itemIndex);
    };
    /**
     * Removes a item from the list. By default, removed the last item in the list,
     * but you can remove based on the index parameter.
     *
     * @param  { Object[] } items - Specifies an array of JSON data or a JSON data.
     * @param { number } itemIndex - Specifies the index to remove the item from the list.
     * @returns {void}.
     */
    ListBox.prototype.removeItem = function (items, itemIndex) {
        var liCollections = [];
        var liElement = this.list.querySelectorAll('.' + dropDownBaseClasses.li);
        if (items) {
            items = (items instanceof Array ? items : [items]);
            var fields = this.fields;
            var dataValue = void 0;
            var objValue = void 0;
            var dupData = [];
            var itemIdx = void 0;
            extend(dupData, [], this.listData);
            var removeIdxes = [];
            var removeLiIdxes = [];
            for (var j = 0; j < items.length; j++) {
                if (items[j] instanceof Object) {
                    dataValue = getValue(fields.value, items[j]);
                }
                else {
                    dataValue = items[j].toString();
                }
                for (var i = 0, len = dupData.length; i < len; i++) {
                    if (dupData[i] instanceof Object) {
                        objValue = getValue(fields.value, dupData[i]);
                    }
                    else {
                        objValue = dupData[i].toString();
                    }
                    if (objValue === dataValue) {
                        itemIdx = this.getIndexByValue(dataValue);
                        liCollections.push(liElement[itemIdx]);
                        removeIdxes.push(i);
                        removeLiIdxes.push(itemIdx);
                    }
                }
            }
            for (var k = removeIdxes.length - 1; k >= 0; k--) {
                this.listData.splice(removeIdxes[k], 1);
            }
            for (var k = removeLiIdxes.length - 1; k >= 0; k--) {
                this.updateLiCollection(removeLiIdxes[k]);
            }
        }
        else {
            itemIndex = itemIndex ? itemIndex : 0;
            liCollections.push(liElement[itemIndex]);
            this.listData.splice(itemIndex, 1);
            this.updateLiCollection(itemIndex);
        }
        for (var i = 0; i < liCollections.length; i++) {
            this.ulElement.removeChild(liCollections[i]);
        }
        if (this.listData.length === 0) {
            this.l10nUpdate();
        }
    };
    /**
     * Gets the array of data Object that matches the given array of values.
     *
     * @param  { string[] | number[] | boolean[] } value - Specifies the array value of the list item.
     * @returns {object[]}.
     */
    ListBox.prototype.getDataByValues = function (value) {
        var data = [];
        for (var i = 0; i < value.length; i++) {
            data.push(this.getDataByValue(value[i]));
        }
        return data;
    };
    /**
     * Moves the given value(s) / selected value(s) upwards.
     *
     * @param  { string[] | number[] | boolean[] } value - Specifies the value(s).
     * @returns {void}
     */
    ListBox.prototype.moveUp = function (value) {
        var elem = (value) ? this.getElemByValue(value) : this.getSelectedItems();
        this.moveUpDown(true, false, elem);
    };
    /**
     * Moves the given value(s) / selected value(s) downwards.
     *
     * @param  { string[] | number[] | boolean[] } value - Specifies the value(s).
     * @returns {void}
     */
    ListBox.prototype.moveDown = function (value) {
        var elem = (value) ? this.getElemByValue(value) : this.getSelectedItems();
        this.moveUpDown(false, false, elem);
    };
    /**
     * Moves the given value(s) / selected value(s) to the given / default scoped ListBox.
     *
     * @param  { string[] | number[] | boolean[] } value - Specifies the value or array value of the list item.
     * @param {number} index - Specifies the index.
     * @param {string} targetId - Specifies the target id.
     * @returns {void}
     */
    ListBox.prototype.moveTo = function (value, index, targetId) {
        var elem = (value) ? this.getElemByValue(value) : this.getSelectedItems();
        var tlistbox = (targetId) ? getComponent(targetId, ListBox_1) : this.getScopedListBox();
        this.moveData(this, tlistbox, false, elem, index);
    };
    /**
     * Moves all the values from one ListBox to the scoped ListBox.
     *
     * @param  { string } targetId - Specifies the scoped ListBox ID.
     * @param  { string } index - Specifies the index to where the items moved.
     * @returns {void}
     */
    ListBox.prototype.moveAllTo = function (targetId, index) {
        if (this.listData.length > 0) {
            var tlistbox = (targetId) ? getComponent(targetId, ListBox_1) : this.getScopedListBox();
            this.moveAllData(this, tlistbox, false, index);
        }
    };
    // eslint-disable-next-line valid-jsdoc
    /**
     * Gets the updated dataSource in ListBox.
     *
     * @returns {{ [key: string]: Object }[] | string[] | boolean[] | number[]} - Updated DataSource.
     */
    ListBox.prototype.getDataList = function () {
        return this.jsonData;
    };
    // eslint-disable-next-line valid-jsdoc
    /**
     * Returns the sorted Data in ListBox.
     *
     * @returns {{ [key: string]: Object }[] | string[] | boolean[] | number[]} - Sorted data
     */
    ListBox.prototype.getSortedList = function () {
        var sortData;
        var tempData;
        sortData = tempData = this.sortedData;
        if (this.fields.groupBy) {
            sortData = [];
            for (var i = 0; i < tempData.length; i++) {
                if (tempData[i].isHeader) {
                    continue;
                }
                sortData.push(tempData[i]);
            }
        }
        return sortData;
    };
    ListBox.prototype.getElemByValue = function (value) {
        var elem = [];
        for (var i = 0; i < value.length; i++) {
            elem.push(this.ulElement.querySelector('[data-value ="' + value[i] + '"]'));
        }
        return elem;
    };
    ListBox.prototype.updateLiCollection = function (index) {
        var tempLi = [].slice.call(this.liCollections);
        tempLi.splice(index, 1);
        this.liCollections = tempLi;
    };
    ListBox.prototype.selectAllItems = function (state, event) {
        var _this = this;
        [].slice.call(this.getItems()).forEach(function (li) {
            if (!li.classList.contains(cssClass.disabled)) {
                if (_this.selectionSettings.showCheckbox) {
                    var ele = li.getElementsByClassName('e-check')[0];
                    if ((!ele && state) || (ele && !state)) {
                        _this.notify('updatelist', { li: li, module: 'listbox' });
                        if (_this.maximumSelectionLength >= _this.list.querySelectorAll('.e-list-item span.e-check').length) {
                            _this.checkMaxSelection();
                        }
                    }
                }
                else {
                    if (state) {
                        li.classList.add(cssClass.selected);
                    }
                    else {
                        li.classList.remove(cssClass.selected);
                    }
                }
            }
        });
        this.updateSelectedOptions();
        if (this.allowFiltering && this.selectionSettings.showCheckbox) {
            var liEle = this.list.getElementsByTagName('li');
            var index = 0;
            if (state) {
                var _loop_1 = function () {
                    var dataValue1 = this_1.getFormattedValue(liEle[index].getAttribute('data-value'));
                    if (!this_1.value.some(function (e) { return e === dataValue1; })) {
                        this_1.value.push(this_1.getFormattedValue(liEle[index].getAttribute('data-value')));
                    }
                };
                var this_1 = this;
                for (index = 0; index < liEle.length; index++) {
                    _loop_1();
                }
            }
            else {
                var _loop_2 = function () {
                    var dataValue2 = this_2.getFormattedValue(liEle[index].getAttribute('data-value'));
                    this_2.value = this_2.value.filter(function (e) { return e !== dataValue2; });
                };
                var this_2 = this;
                for (index = 0; index < liEle.length; index++) {
                    _loop_2();
                }
            }
            if (document.querySelectorAll('ul').length < 2) {
                this.updateMainList();
            }
        }
        this.triggerChange(this.getSelectedItems(), event);
    };
    ListBox.prototype.updateMainList = function () {
        var mainList = this.mainList.querySelectorAll('.e-list-item');
        var ulList = this.ulElement.querySelectorAll('.e-list-item');
        var mainCount = mainList.length;
        var ulEleCount = ulList.length;
        if (this.selectionSettings.showCheckbox || (document.querySelectorAll('ul').length > 1 || mainCount !== ulEleCount)) {
            var listindex = 0;
            var valueindex = 0;
            var count = 0;
            for (listindex; listindex < mainCount;) {
                if (this.value) {
                    for (valueindex; valueindex < this.value.length; valueindex++) {
                        if (mainList[listindex].getAttribute('data-value') === this.value[valueindex]) {
                            count++;
                        }
                    }
                }
                if (!count && this.selectionSettings.showCheckbox) {
                    mainList[listindex].getElementsByClassName('e-frame')[0].classList.remove('e-check');
                }
                if (document.querySelectorAll('ul').length > 1 && count && mainCount !== ulEleCount) {
                    this.mainList.removeChild(this.mainList.getElementsByTagName('li')[listindex]);
                    listindex = 0;
                }
                else {
                    listindex++;
                }
                count = 0;
                valueindex = 0;
            }
        }
    };
    ListBox.prototype.wireEvents = function () {
        var form = closest(this.element, 'form');
        var wrapper = this.element.tagName === 'EJS-LISTBOX' ? this.element : this.list;
        EventHandler.add(this.list, 'click', this.clickHandler, this);
        EventHandler.add(wrapper, 'keydown', this.keyDownHandler, this);
        EventHandler.add(wrapper, 'focusout', this.focusOutHandler, this);
        this.wireToolbarEvent();
        if (this.selectionSettings.showCheckbox) {
            EventHandler.remove(document, 'mousedown', this.checkBoxSelectionModule.onDocumentClick);
        }
        if (this.fields.groupBy || this.element.querySelector('select>optgroup')) {
            EventHandler.remove(this.list, 'scroll', this.setFloatingHeader);
        }
        if (form) {
            EventHandler.add(form, 'reset', this.formResetHandler, this);
        }
    };
    ListBox.prototype.wireToolbarEvent = function () {
        if (this.toolbarSettings.items.length) {
            EventHandler.add(this.getToolElem(), 'click', this.toolbarClickHandler, this);
        }
    };
    ListBox.prototype.unwireEvents = function () {
        var form = closest(this.element, 'form');
        var wrapper = this.element.tagName === 'EJS-LISTBOX' ? this.element : this.list;
        EventHandler.remove(this.list, 'click', this.clickHandler);
        EventHandler.remove(wrapper, 'keydown', this.keyDownHandler);
        EventHandler.remove(wrapper, 'focusout', this.focusOutHandler);
        if (this.allowFiltering && this.clearFilterIconElem) {
            EventHandler.remove(this.clearFilterIconElem, 'click', this.clearText);
        }
        if (this.toolbarSettings.items.length) {
            EventHandler.remove(this.getToolElem(), 'click', this.toolbarClickHandler);
        }
        if (form) {
            EventHandler.remove(form, 'reset', this.formResetHandler);
        }
    };
    ListBox.prototype.clickHandler = function (e) {
        this.selectHandler(e);
    };
    ListBox.prototype.checkSelectAll = function () {
        var searchCount = 0;
        var liItems = this.list.querySelectorAll('li.' + dropDownBaseClasses.li);
        for (var i = 0; i < liItems.length; i++) {
            if (!liItems[i].classList.contains('e-disabled')) {
                searchCount++;
            }
        }
        var len = this.getSelectedItems().length;
        if (this.showSelectAll && searchCount) {
            this.notify('checkSelectAll', { module: 'CheckBoxSelection',
                value: (searchCount === len) ? 'check' : (len === 0) ? 'uncheck' : 'indeterminate' });
        }
    };
    ListBox.prototype.getQuery = function (query) {
        var filterQuery = query ? query.clone() : this.query ? this.query.clone() : new Query();
        if (this.allowFiltering) {
            var filterType = this.inputString === '' ? 'contains' : this.filterType;
            var dataType = this.typeOfData(this.dataSource).typeof;
            if (!(this.dataSource instanceof DataManager) && dataType === 'string' || dataType === 'number') {
                filterQuery.where('', filterType, this.inputString, this.ignoreCase, this.ignoreAccent);
            }
            else {
                var fields = (this.fields.text) ? this.fields.text : '';
                filterQuery.where(fields, filterType, this.inputString, this.ignoreCase, this.ignoreAccent);
            }
        }
        else {
            filterQuery = query ? query : this.query ? this.query : new Query();
        }
        return filterQuery;
    };
    ListBox.prototype.setFiltering = function () {
        var filterInputObj;
        if (this.initLoad || isNullOrUndefined(this.filterParent)) {
            if (isBlazor() && this.isServerRendered) {
                this.filterParent = this.list.querySelector('.e-filter-parent');
                this.filterInput = this.list.querySelector('.e-input-filter');
            }
            else {
                this.filterParent = this.createElement('span', {
                    className: listBoxClasses.filterParent
                });
                this.filterInput = this.createElement('input', {
                    attrs: { type: 'text' },
                    className: listBoxClasses.filterInput
                });
                this.element.parentNode.insertBefore(this.filterInput, this.element);
                var backIcon = false;
                if (Browser.isDevice) {
                    backIcon = true;
                }
                filterInputObj = Input.createInput({
                    element: this.filterInput,
                    buttons: [listBoxClasses.filterBarClearIcon],
                    properties: { placeholder: this.filterBarPlaceholder }
                }, this.createElement);
                append([filterInputObj.container], this.filterParent);
                prepend([this.filterParent], this.list);
                attributes(this.filterInput, {
                    'aria-disabled': 'false',
                    'aria-owns': this.element.id + '_options',
                    'role': 'listbox',
                    'aria-activedescendant': null,
                    'autocomplete': 'off',
                    'autocorrect': 'off',
                    'autocapitalize': 'off',
                    'spellcheck': 'false'
                });
            }
            if (this.height.toString().indexOf('%') < 0) {
                addClass([this.list], 'e-filter-list');
            }
            this.inputString = this.filterInput.value;
            this.filterWireEvents();
            return filterInputObj;
        }
    };
    ListBox.prototype.filterWireEvents = function (filterElem) {
        if (filterElem) {
            this.filterInput = filterElem.querySelector('.e-input-filter');
        }
        this.clearFilterIconElem = this.filterInput.parentElement.querySelector('.' + listBoxClasses.clearIcon);
        if (this.clearFilterIconElem) {
            EventHandler.add(this.clearFilterIconElem, 'click', this.clearText, this);
            if (!filterElem) {
                this.clearFilterIconElem.style.visibility = 'hidden';
            }
        }
        EventHandler.add(this.filterInput, 'input', this.onInput, this);
        EventHandler.add(this.filterInput, 'keyup', this.KeyUp, this);
        EventHandler.add(this.filterInput, 'keydown', this.onKeyDown, this);
    };
    ListBox.prototype.selectHandler = function (e, isKey) {
        var isSelect = true;
        var currSelIdx;
        var li = closest(e.target, '.' + 'e-list-item');
        var selectedLi = [li];
        if (li && li.parentElement) {
            currSelIdx = [].slice.call(li.parentElement.children).indexOf(li);
            if (!this.selectionSettings.showCheckbox) {
                if ((e.ctrlKey || Browser.isDevice) && this.isSelected(li)) {
                    li.classList.remove(cssClass.selected);
                    li.removeAttribute('aria-selected');
                    isSelect = false;
                }
                else if (!(this.selectionSettings.mode === 'Multiple' && (e.ctrlKey || Browser.isDevice))) {
                    this.getSelectedItems().forEach(function (ele) {
                        ele.removeAttribute('aria-selected');
                    });
                    removeClass(this.getSelectedItems(), cssClass.selected);
                }
            }
            else {
                isSelect = !li.getElementsByClassName('e-frame')[0].classList.contains('e-check');
            }
            if (e.shiftKey && !this.selectionSettings.showCheckbox && this.selectionSettings.mode !== 'Single') {
                selectedLi = [].slice.call(li.parentElement.children)
                    .slice(Math.min(currSelIdx, this.prevSelIdx), Math.max(currSelIdx, this.prevSelIdx) + 1)
                    .filter(function (ele) { return ele.classList.contains('e-list-item'); });
            }
            else {
                this.prevSelIdx = [].slice.call(li.parentElement.children).indexOf(li);
            }
            if (isSelect) {
                if (!this.selectionSettings.showCheckbox) {
                    addClass(selectedLi, cssClass.selected);
                }
                selectedLi.forEach(function (ele) {
                    ele.setAttribute('aria-selected', 'true');
                });
                this.list.setAttribute('aria-activedescendant', li.id);
            }
            if (!isKey && (this.maximumSelectionLength > (this.value && this.value.length) || !isSelect) &&
                (this.maximumSelectionLength >= (this.value && this.value.length) || !isSelect) &&
                !(this.maximumSelectionLength < (this.value && this.value.length))) {
                this.notify('updatelist', { li: li, e: e, module: 'listbox' });
            }
            if (this.allowFiltering && !isKey) {
                var liDataValue_1 = this.getFormattedValue(li.getAttribute('data-value'));
                if (!isSelect) {
                    this.value = this.value.filter(function (value1) {
                        return value1 !== liDataValue_1;
                    });
                }
                else {
                    var values = [];
                    extend(values, this.value);
                    values.push(liDataValue_1);
                    this.value = values;
                }
                if (document.querySelectorAll('ul').length < 2) {
                    this.updateMainList();
                }
            }
            this.updateSelectedOptions();
            this.triggerChange(this.getSelectedItems(), e);
            this.checkMaxSelection();
        }
    };
    ListBox.prototype.triggerChange = function (selectedLis, event) {
        this.trigger('change', { elements: selectedLis, items: this.getDataByElements(selectedLis), value: this.value, event: event });
    };
    ListBox.prototype.getDataByElems = function (elems) {
        var data = [];
        for (var i = 0, len = elems.length; i < len; i++) {
            data.push(this.getDataByValue(this.getFormattedValue(elems[i].getAttribute('data-value'))));
        }
        return data;
    };
    ListBox.prototype.getDataByElements = function (elems) {
        var data = [];
        var value;
        var sIdx = 0;
        if (!isNullOrUndefined(this.listData)) {
            var type = this.typeOfData(this.listData).typeof;
            if (type === 'string' || type === 'number' || type === 'boolean') {
                for (var _i = 0, _a = this.listData; _i < _a.length; _i++) {
                    var item = _a[_i];
                    for (var i = sIdx, len = elems.length; i < len; i++) {
                        value = this.getFormattedValue(elems[i].getAttribute('data-value'));
                        if (!isNullOrUndefined(item) && item === value) {
                            sIdx = i;
                            data.push(item);
                            break;
                        }
                    }
                    if (elems.length === data.length) {
                        break;
                    }
                }
            }
            else {
                for (var _b = 0, _c = this.listData; _b < _c.length; _b++) {
                    var item = _c[_b];
                    for (var i = sIdx, len = elems.length; i < len; i++) {
                        value = this.getFormattedValue(elems[i].getAttribute('data-value'));
                        if (!isNullOrUndefined(item) && getValue((this.fields.value ? this.fields.value : 'value'), item) === value) {
                            sIdx = i;
                            data.push(item);
                            break;
                        }
                    }
                    if (elems.length === data.length) {
                        break;
                    }
                }
            }
            return data;
        }
        return null;
    };
    ListBox.prototype.checkMaxSelection = function () {
        var limit = this.list.querySelectorAll('.e-list-item span.e-check').length;
        if (this.selectionSettings.showCheckbox) {
            var index = 0;
            var liCollElem = this.list.getElementsByClassName('e-list-item');
            for (index; index < liCollElem.length; index++) {
                if (!liCollElem[index].querySelector('.e-frame.e-check')) {
                    if (limit === this.maximumSelectionLength) {
                        liCollElem[index].classList.add('e-disable');
                    }
                    else if (liCollElem[index].classList.contains('e-disable')) {
                        liCollElem[index].classList.remove('e-disable');
                    }
                }
            }
        }
    };
    ListBox.prototype.toolbarClickHandler = function (e) {
        var btn = closest(e.target, 'button');
        if (btn) {
            this.toolbarAction = btn.getAttribute('data-value');
            if (btn.disabled) {
                return;
            }
            switch (this.toolbarAction) {
                case 'moveUp':
                    this.moveUpDown(true);
                    break;
                case 'moveDown':
                    this.moveUpDown();
                    break;
                case 'moveTo':
                    this.moveItemTo();
                    break;
                case 'moveFrom':
                    this.moveItemFrom();
                    break;
                case 'moveAllTo':
                    this.moveAllItemTo();
                    break;
                case 'moveAllFrom':
                    this.moveAllItemFrom();
                    break;
                default:
                    this.trigger('actionBegin', { cancel: false, items: this.getDataByElems(this.getSelectedItems()),
                        eventName: this.toolbarAction });
                    break;
            }
        }
    };
    ListBox.prototype.moveUpDown = function (isUp, isKey, value) {
        var _this = this;
        var elems = this.getSelectedItems();
        if (value) {
            elems = value;
        }
        if (((isUp && this.isSelected(this.ulElement.firstElementChild))
            || (!isUp && this.isSelected(this.ulElement.lastElementChild))) && !value) {
            return;
        }
        var tempItems = this.getDataByElems(elems);
        var localDataArgs = { cancel: false, items: tempItems, eventName: this.toolbarAction };
        this.trigger('actionBegin', localDataArgs);
        if (localDataArgs.cancel) {
            return;
        }
        (isUp ? elems : elems.reverse()).forEach(function (ele) {
            var jsonToIdx = Array.prototype.indexOf.call(_this.ulElement.querySelectorAll('.e-list-item'), ele);
            var idx = Array.prototype.indexOf.call(_this.ulElement.children, ele);
            moveTo(_this.ulElement, _this.ulElement, [idx], isUp ? idx - 1 : idx + 2);
            _this.changeData(idx, isUp ? idx - 1 : idx + 1, isUp ? jsonToIdx - 1 : jsonToIdx + 1, ele);
        });
        this.trigger('actionComplete', { items: tempItems, eventName: this.toolbarAction });
        elems[0].focus();
        if (!isKey && this.toolbarSettings.items.length) {
            this.getToolElem().querySelector('[data-value=' + (isUp ? 'moveUp' : 'moveDown') + ']').focus();
        }
        this.updateToolBarState();
    };
    ListBox.prototype.moveItemTo = function () {
        this.moveData(this, this.getScopedListBox());
    };
    ListBox.prototype.moveItemFrom = function () {
        this.moveData(this.getScopedListBox(), this);
    };
    /**
     * Called internally if any of the property value changed.
     *
     * @param {ListBox} fListBox - Specifies the from listbox.
     * @param {ListBox} tListBox - Specifies the to listbox.
     * @param {boolean} isKey - Specifies the key.
     * @param {Element[]} value - Specifies the value.
     * @param {number} index - Specifies the index.
     * @returns {void}
     * @private
     */
    ListBox.prototype.moveData = function (fListBox, tListBox, isKey, value, index) {
        var _this = this;
        var idx = [];
        var dataIdx = [];
        var jsonIdx = [];
        var sortIdx = [];
        var listData = [].slice.call(fListBox.listData);
        var tListData = [].slice.call(tListBox.listData);
        var sortData = [].slice.call(fListBox.sortedData);
        var tSortData = [].slice.call(tListBox.sortedData);
        var fliCollections = [].slice.call(fListBox.liCollections);
        var dataLiIdx = [];
        var tliCollections = [].slice.call(tListBox.liCollections);
        var tempItems = [];
        var data = [];
        var elems = fListBox.getSelectedItems();
        if (value) {
            elems = value;
        }
        var isRefresh = tListBox.sortOrder !== 'None' || (tListBox.selectionSettings.showCheckbox !==
            fListBox.selectionSettings.showCheckbox) || tListBox.fields.groupBy || tListBox.itemTemplate || fListBox.itemTemplate;
        fListBox.value = [];
        if (elems.length) {
            this.removeSelected(fListBox, elems);
            elems.forEach(function (ele, i) {
                idx.push(Array.prototype.indexOf.call(fListBox.ulElement.children, ele)); // update sortable elem
                // To update lb view data
                dataLiIdx.push(Array.prototype.indexOf.call(fListBox.ulElement.querySelectorAll('.e-list-item'), ele));
                // To update lb listdata data
                dataIdx.push(Array.prototype.indexOf.call(fListBox.listData, fListBox.getDataByElems([ele])[0]));
                // To update lb sorted data
                sortIdx.push(Array.prototype.indexOf.call(fListBox.sortedData, fListBox.getDataByElems([ele])[0]));
                // To update lb original data
                jsonIdx.push(Array.prototype.indexOf.call(fListBox.jsonData, fListBox.getDataByElems([ele])[0]));
            });
            if (this.sortOrder !== 'None') {
                sortIdx.forEach(function (i) {
                    tempItems.push(fListBox.sortedData[i]);
                });
            }
            else {
                jsonIdx.forEach(function (i) {
                    tempItems.push(fListBox.jsonData[i]);
                });
            }
            var localDataArgs = { cancel: false, items: tempItems, eventName: this.toolbarAction };
            fListBox.trigger('actionBegin', localDataArgs);
            if (localDataArgs.cancel) {
                return;
            }
            if (!isBlazor()) {
                var rLiCollection_1 = [];
                dataLiIdx.sort(function (n1, n2) { return n1 - n2; }).reverse().forEach(function (i) {
                    rLiCollection_1.push(fliCollections.splice(i, 1)[0]);
                });
                fListBox.liCollections = fliCollections;
                if (index) {
                    var toColl = tliCollections.splice(0, index);
                    tListBox.liCollections = toColl.concat(rLiCollection_1.reverse()).concat(tliCollections);
                }
                else {
                    tListBox.liCollections = tliCollections.concat(rLiCollection_1.reverse());
                }
                if (tListBox.listData.length === 0) {
                    var noRecElem = tListBox.ulElement.getElementsByClassName('e-list-nrt')[0];
                    if (noRecElem) {
                        tListBox.ulElement.removeChild(noRecElem);
                    }
                }
            }
            dataIdx.sort(function (n1, n2) { return n2 - n1; }).forEach(function (i) {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                listData.splice(i, 1)[0];
            });
            sortIdx.sort(function (n1, n2) { return n2 - n1; }).forEach(function (i) {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                sortData.splice(i, 1)[0];
            });
            jsonIdx.slice().reverse().forEach(function (i) {
                data.push(fListBox.jsonData.splice(i, 1)[0]);
            });
            if (!isBlazor()) {
                if (isRefresh) {
                    if (fListBox.fields.groupBy) {
                        fListBox.ulElement.innerHTML = fListBox.renderItems(listData, fListBox.fields).innerHTML;
                    }
                    else {
                        elems.forEach(function (ele) { detach(ele); });
                    }
                }
                else {
                    moveTo(fListBox.ulElement, tListBox.ulElement, idx, index);
                    fListBox.trigger('actionComplete', { items: tempItems, eventName: this.toolbarAction });
                }
                if (tListBox.mainList.childElementCount !== tListBox.jsonData.length) {
                    tListBox.mainList = tListBox.ulElement;
                }
                fListBox.updateMainList();
            }
            var tJsonData = [].slice.call(tListBox.jsonData);
            tSortData = [].slice.call(tListBox.sortedData);
            if (!isBlazor()) {
                this.selectNextList(elems, dataLiIdx, dataIdx, fListBox);
            }
            if (isKey) {
                this.list.focus();
            }
            fListBox.listData = listData;
            fListBox.sortedData = sortData;
            index = (index) ? index : tListData.length;
            for (var i = tempItems.length - 1; i >= 0; i--) {
                tListData.splice(index, 0, tempItems[i]);
                tJsonData.splice(index, 0, tempItems[i]);
                tSortData.splice(index, 0, tempItems[i]);
            }
            tListBox.listData = tListData;
            tListBox.jsonData = tJsonData;
            tListBox.sortedData = tSortData;
            if (isBlazor()) {
                /* eslint-disable */
                fListBox.interopAdaptor.invokeMethodAsync('UpdateListData', fListBox.listData).then(function () {
                    fListBox.updateBlazorListData(null, true);
                    _this.selectNextList(elems, dataLiIdx, dataIdx, fListBox);
                    fListBox.updateSelectedOptions();
                });
                tListBox.interopAdaptor.invokeMethodAsync('UpdateListData', tListBox.listData).then(function () {
                    if (isRefresh) {
                        tListBox.setSelection();
                    }
                    tListBox.updateBlazorListData(null, true);
                    fListBox.trigger('actionComplete', { items: tempItems, eventName: _this.toolbarAction });
                });
                /* eslint-enable */
            }
            else {
                if (isRefresh) {
                    tListBox.ulElement.innerHTML = tListBox.renderItems(tListData, tListBox.fields).innerHTML;
                    tListBox.setSelection();
                    fListBox.trigger('actionComplete', { items: tempItems, eventName: this.toolbarAction });
                }
                fListBox.updateSelectedOptions();
            }
            if (fListBox.listData.length === 0) {
                fListBox.l10nUpdate();
            }
        }
        if (fListBox.value.length === 1 && fListBox.getSelectedItems().length) {
            fListBox.value[0] = fListBox.getFormattedValue(fListBox.getSelectedItems()[0].getAttribute('data-value'));
        }
    };
    ListBox.prototype.selectNextList = function (elems, dataLiIdx, dataIdx, inst) {
        var childCnt = inst.ulElement.querySelectorAll('.e-list-item').length;
        var ele;
        var liIdx;
        var validIdx = -1;
        if (elems.length === 1 && childCnt && !inst.selectionSettings.showCheckbox) {
            liIdx = childCnt <= dataLiIdx[0] ? childCnt - 1 : dataLiIdx[0];
            ele = inst.ulElement.querySelectorAll('.e-list-item')[liIdx];
            validIdx = inst.getValidIndex(ele, liIdx, childCnt === dataIdx[0] ? 38 : 40);
            if (validIdx > -1) {
                (inst.ulElement.querySelectorAll('.e-list-item')[validIdx].classList.add(cssClass.selected));
            }
        }
    };
    ListBox.prototype.moveAllItemTo = function () {
        this.moveAllData(this, this.getScopedListBox());
    };
    ListBox.prototype.moveAllItemFrom = function () {
        this.moveAllData(this.getScopedListBox(), this);
    };
    ListBox.prototype.moveAllData = function (fListBox, tListBox, isKey, index) {
        var _this = this;
        var listData = [].slice.call(tListBox.listData);
        var jsonData = [].slice.call(tListBox.jsonData);
        var isRefresh = tListBox.sortOrder !== 'None' || (tListBox.selectionSettings.showCheckbox !==
            fListBox.selectionSettings.showCheckbox) || tListBox.fields.groupBy || tListBox.itemTemplate || fListBox.itemTemplate;
        this.removeSelected(fListBox, fListBox.getSelectedItems());
        var tempItems = [].slice.call(fListBox.jsonData);
        var localDataArgs = { cancel: false, items: tempItems, eventName: this.toolbarAction };
        fListBox.trigger('actionBegin', localDataArgs);
        if (localDataArgs.cancel) {
            return;
        }
        if (!isBlazor()) {
            if (tListBox.listData.length === 0) {
                var noRecElem = tListBox.ulElement.getElementsByClassName('e-list-nrt')[0];
                if (noRecElem) {
                    tListBox.ulElement.removeChild(noRecElem);
                }
            }
            if (isRefresh) {
                var noRecElem = fListBox.ulElement.getElementsByClassName('e-list-nrt')[0];
                if (noRecElem) {
                    fListBox.ulElement.removeChild(noRecElem);
                }
            }
            moveTo(fListBox.ulElement, tListBox.ulElement, 
            // eslint-disable-next-line prefer-spread
            Array.apply(null, { length: fListBox.ulElement.childElementCount }).map(Number.call, Number), index);
            this.trigger('actionComplete', { items: tempItems, eventName: this.toolbarAction });
        }
        if (isKey) {
            this.list.focus();
        }
        index = (index) ? index : listData.length;
        for (var i = 0; i < fListBox.listData.length; i++) {
            listData.splice(index + i, 0, fListBox.listData[i]);
        }
        for (var i = 0; i < fListBox.jsonData.length; i++) {
            jsonData.splice(index + i, 0, fListBox.jsonData[i]);
        }
        if (!isBlazor()) {
            var fliCollections = [].slice.call(fListBox.liCollections);
            var tliCollections = [].slice.call(tListBox.liCollections);
            fListBox.liCollections = [];
            if (index) {
                var toColl = tliCollections.splice(0, index);
                tListBox.liCollections = toColl.concat(fliCollections).concat(tliCollections);
            }
            else {
                tListBox.liCollections = tliCollections.concat(fliCollections);
            }
        }
        fListBox.value = [];
        listData = listData
            .filter(function (data) { return data.isHeader !== true; });
        tListBox.listData = listData;
        tListBox.jsonData = jsonData;
        fListBox.listData = fListBox.sortedData = fListBox.jsonData = [];
        if (isBlazor()) {
            if (!isRefresh) {
                tListBox.sortedData = listData;
            }
            /* eslint-disable */
            fListBox.interopAdaptor.invokeMethodAsync('UpdateListData', fListBox.listData).then(function () {
                fListBox.updateBlazorListData(null, true);
                fListBox.updateSelectedOptions();
            });
            tListBox.interopAdaptor.invokeMethodAsync('UpdateListData', tListBox.listData).then(function () {
                tListBox.updateBlazorListData(null, true);
                fListBox.updateSelectedOptions();
                fListBox.trigger('actionComplete', { items: tempItems, eventName: _this.toolbarAction });
            });
            /* eslint-enable */
        }
        else {
            if (isRefresh) {
                tListBox.ulElement.innerHTML = tListBox.renderItems(listData, tListBox.fields).innerHTML;
                this.trigger('actionComplete', { items: tempItems, eventName: this.toolbarAction });
            }
            else {
                tListBox.sortedData = listData;
            }
            fListBox.updateSelectedOptions();
        }
        if (fListBox.listData.length === 0) {
            fListBox.l10nUpdate();
        }
    };
    ListBox.prototype.changeData = function (fromIdx, toIdx, jsonToIdx, ele) {
        var listData = [].slice.call(this.listData);
        var jsonData = [].slice.call(this.jsonData);
        var sortData = [].slice.call(this.sortedData);
        var jsonIdx = Array.prototype.indexOf.call(this.jsonData, this.getDataByElems([ele])[0]);
        var sortIdx = Array.prototype.indexOf.call(this.sortedData, this.getDataByElems([ele])[0]);
        var liColl = [].slice.call(this.liCollections);
        listData.splice(toIdx, 0, listData.splice(fromIdx, 1)[0]);
        jsonData.splice(jsonToIdx, 0, jsonData.splice(jsonIdx, 1)[0]);
        sortData.splice(toIdx, 0, sortData.splice(sortIdx, 1)[0]);
        liColl.splice(toIdx, 0, liColl.splice(fromIdx, 1)[0]);
        this.listData = listData;
        this.jsonData = jsonData;
        this.liCollections = liColl;
        this.sortedData = sortData;
    };
    ListBox.prototype.getSelectedItems = function () {
        var ele = [];
        if (this.selectionSettings.showCheckbox) {
            [].slice.call(this.ulElement.getElementsByClassName('e-check')).forEach(function (cbox) {
                ele.push(closest(cbox, '.' + 'e-list-item'));
            });
        }
        else {
            ele = [].slice.call(this.ulElement.getElementsByClassName(cssClass.selected));
        }
        return ele;
    };
    ListBox.prototype.getScopedListBox = function () {
        var _this = this;
        var listObj;
        if (this.scope) {
            [].slice.call(document.querySelectorAll(this.scope)).forEach(function (ele) {
                if (getComponent(ele, _this.getModuleName())) {
                    listObj = getComponent(ele, _this.getModuleName());
                }
            });
        }
        return listObj;
    };
    ListBox.prototype.getGrabbedItems = function () {
        var elems = Array.prototype.slice.call(this.element.querySelectorAll('.e-grabbed'));
        return elems;
    };
    ListBox.prototype.getDragArgs = function (args, isDragEnd) {
        var elems = this.getGrabbedItems();
        if (elems.length) {
            if (isDragEnd) {
                elems.push(args.target);
            }
        }
        else {
            elems = [args.target];
        }
        if (isBlazor()) {
            return { elements: elems, items: this.getDataByElems(elems), bindEvents: args.bindEvents,
                dragElement: args.dragElement };
        }
        else {
            return { elements: elems, items: this.getDataByElems(elems) };
        }
    };
    ListBox.prototype.onKeyDown = function (e) {
        this.keyDownHandler(e);
        e.stopPropagation();
    };
    ListBox.prototype.keyDownHandler = function (e) {
        if ([32, 35, 36, 37, 38, 39, 40, 65].indexOf(e.keyCode) > -1 && !this.allowFiltering) {
            if (e.target && e.target.className.indexOf('e-edit-template') > -1) {
                return;
            }
            e.preventDefault();
            if (e.keyCode === 32 && this.ulElement.children.length) {
                this.selectHandler({
                    target: this.ulElement.getElementsByClassName('e-focused')[0],
                    ctrlKey: e.ctrlKey, shiftKey: e.shiftKey
                });
            }
            else if (e.keyCode === 65 && e.ctrlKey) {
                this.selectAll();
            }
            else if ((e.keyCode === 38 || e.keyCode === 40) && e.ctrlKey && e.shiftKey) {
                this.moveUpDown(e.keyCode === 38 ? true : false, true);
            }
            else if ((this.toolbarSettings.items.length || this.tBListBox) && (e.keyCode === 39 || e.keyCode === 37) && e.ctrlKey) {
                var listObj = this.tBListBox || this.getScopedListBox();
                if (e.keyCode === 39) {
                    if (e.shiftKey) {
                        this.moveAllData(this, listObj, true);
                    }
                    else {
                        this.moveData(this, listObj, true);
                    }
                }
                else {
                    if (e.shiftKey) {
                        this.moveAllData(listObj, this, true);
                    }
                    else {
                        this.moveData(listObj, this, true);
                    }
                }
            }
            else if (e.keyCode !== 37 && e.keyCode !== 39) {
                this.upDownKeyHandler(e);
            }
        }
        else if (this.allowFiltering) {
            if (e.keyCode === 40 || e.keyCode === 38) {
                this.upDownKeyHandler(e);
            }
        }
    };
    ListBox.prototype.upDownKeyHandler = function (e) {
        var ul = this.ulElement;
        var defaultIdx = (e.keyCode === 40 || e.keyCode === 36) ? 0 : ul.childElementCount - 1;
        var fliIdx = defaultIdx;
        var fli = ul.getElementsByClassName('e-focused')[0] || ul.getElementsByClassName(cssClass.selected)[0];
        if (fli) {
            if (e.keyCode !== 35 && e.keyCode !== 36) {
                fliIdx = Array.prototype.indexOf.call(ul.children, fli);
                if (e.keyCode === 40) {
                    fliIdx++;
                }
                else {
                    fliIdx--;
                }
                if (fliIdx < 0 || fliIdx > ul.childElementCount - 1) {
                    return;
                }
            }
            removeClass([fli], 'e-focused');
        }
        var cli = ul.children[fliIdx];
        if (cli) {
            fliIdx = this.getValidIndex(cli, fliIdx, e.keyCode);
            if (fliIdx === -1) {
                addClass([fli], 'e-focused');
                return;
            }
            ul.children[fliIdx].focus();
            ul.children[fliIdx].classList.add('e-focused');
            if (!e.ctrlKey) {
                this.selectHandler({ target: ul.children[fliIdx], ctrlKey: e.ctrlKey, shiftKey: e.shiftKey }, true);
            }
        }
    };
    ListBox.prototype.KeyUp = function (e) {
        var _this = this;
        var text = this.targetElement();
        var keyCode = e.keyCode;
        var char = String.fromCharCode(e.keyCode);
        var isWordCharacter = char.match(/\w/);
        if (!isNullOrUndefined(isWordCharacter)) {
            this.isValidKey = true;
        }
        this.isValidKey = (e.keyCode === 8) || (e.keyCode === 46) || this.isValidKey;
        if (this.isValidKey) {
            this.isValidKey = false;
            switch (e.keyCode) {
                default:
                    if (this.allowFiltering) {
                        var eventArgsData_1 = {
                            preventDefaultAction: false,
                            text: this.targetElement(),
                            updateData: function (dataSource, query, fields) {
                                if (eventArgsData_1.cancel) {
                                    return;
                                }
                                _this.isFiltered = true;
                                _this.remoteFilterAction = true;
                                _this.dataUpdater(dataSource, query, fields);
                            },
                            event: e,
                            cancel: false
                        };
                        this.trigger('filtering', eventArgsData_1, function (args) {
                            _this.isDataFetched = false;
                            if (eventArgsData_1.cancel || (_this.filterInput.value !== '' && _this.isFiltered)) {
                                return;
                            }
                            if (!eventArgsData_1.cancel && !_this.isCustomFiltering && !eventArgsData_1.preventDefaultAction) {
                                _this.inputString = _this.filterInput.value;
                                _this.filteringAction(_this.jsonData, new Query(), _this.fields);
                            }
                            if (!_this.isFiltered && !_this.isCustomFiltering && !eventArgsData_1.preventDefaultAction) {
                                _this.dataUpdater(_this.jsonData, new Query(), _this.fields);
                            }
                        });
                    }
            }
        }
    };
    /**
     * To filter the data from given data source by using query.
     *
     * @param  {Object[] | DataManager } dataSource - Set the data source to filter.
     * @param  {Query} query - Specify the query to filter the data.
     * @param  {FieldSettingsModel} fields - Specify the fields to map the column in the data table.
     * @returns {void}.
     */
    ListBox.prototype.filter = function (dataSource, query, fields) {
        this.isCustomFiltering = true;
        this.filteringAction(dataSource, query, fields);
    };
    ListBox.prototype.filteringAction = function (dataSource, query, fields) {
        this.resetList(dataSource, fields, query);
    };
    ListBox.prototype.targetElement = function () {
        this.targetInputElement = this.list.getElementsByClassName('e-input-filter')[0];
        return this.targetInputElement.value;
    };
    ListBox.prototype.dataUpdater = function (dataSource, query, fields) {
        this.isDataFetched = false;
        var backCommand = true;
        if (this.targetElement().trim() === '') {
            var list = this.mainList.cloneNode ? this.mainList.cloneNode(true) : this.mainList;
            if (backCommand) {
                this.remoteCustomValue = false;
                this.onActionComplete(list, this.jsonData);
                this.notify('reOrder', { module: 'CheckBoxSelection', enable: this.selectionSettings.showCheckbox, e: this });
            }
        }
        else {
            this.resetList(dataSource, fields, query);
        }
    };
    ListBox.prototype.focusOutHandler = function () {
        var ele = this.list.getElementsByClassName('e-focused')[0];
        if (ele) {
            ele.classList.remove('e-focused');
        }
        if (this.allowFiltering) {
            this.refreshClearIcon();
        }
    };
    ListBox.prototype.getValidIndex = function (cli, index, keyCode) {
        var cul = this.ulElement;
        if (cli.classList.contains('e-disabled') || cli.classList.contains(cssClass.group)) {
            if (keyCode === 40 || keyCode === 36) {
                index++;
            }
            else {
                index--;
            }
        }
        if (index < 0 || index === cul.childElementCount) {
            return -1;
        }
        cli = cul.querySelectorAll('.e-list-item')[index];
        if (cli.classList.contains('e-disabled') || cli.classList.contains(cssClass.group)) {
            index = this.getValidIndex(cli, index, keyCode);
        }
        return index;
    };
    ListBox.prototype.updateSelectedOptions = function () {
        var _this = this;
        var selectedOptions = [];
        var values = [];
        extend(values, this.value);
        this.getSelectedItems().forEach(function (ele) {
            if (!ele.classList.contains('e-grabbed')) {
                selectedOptions.push(_this.getFormattedValue(ele.getAttribute('data-value')));
            }
        });
        if (this.mainList.childElementCount === this.ulElement.childElementCount) {
            if (this.allowFiltering && this.selectionSettings.showCheckbox) {
                for (var i = 0; i < selectedOptions.length; i++) {
                    if (values.indexOf(selectedOptions[i]) > -1) {
                        continue;
                    }
                    else {
                        values.push(selectedOptions[i]);
                    }
                }
                this.setProperties({ value: values }, true);
            }
            else {
                this.setProperties({ value: selectedOptions }, true);
            }
        }
        this.updateSelectTag();
        this.updateToolBarState();
        if (this.tBListBox) {
            this.tBListBox.updateToolBarState();
        }
    };
    ListBox.prototype.clearSelection = function (values) {
        var _this = this;
        if (values === void 0) { values = this.value; }
        if (this.selectionSettings.showCheckbox) {
            var dvalue_1;
            this.getSelectedItems().forEach(function (li) {
                dvalue_1 = _this.getFormattedValue(li.getAttribute('data-value'));
                if (values.indexOf(dvalue_1) < 0) {
                    li.getElementsByClassName('e-check')[0].classList.remove('e-check');
                    li.getElementsByClassName('e-checkbox-wrapper')[0].removeAttribute('aria-checked');
                    li.removeAttribute('aria-selected');
                }
            });
        }
    };
    ListBox.prototype.setSelection = function (values, isSelect, isText) {
        var _this = this;
        if (values === void 0) { values = this.value; }
        if (isSelect === void 0) { isSelect = true; }
        if (isText === void 0) { isText = false; }
        var li;
        var liselect;
        if (values) {
            values.forEach(function (value) {
                var text;
                if (isText) {
                    if (isBlazor() && typeof (value) === 'object') {
                        text = value[_this.fields.text || 'text'];
                        if (isNullOrUndefined(text)) {
                            return;
                        }
                        text = _this.getValueByText(text);
                    }
                    else {
                        text = _this.getValueByText(value);
                    }
                }
                else {
                    text = value;
                }
                li = _this.list.querySelector('[data-value="' + text + '"]');
                if (li) {
                    if (_this.selectionSettings.showCheckbox) {
                        liselect = li.getElementsByClassName('e-frame')[0].classList.contains('e-check');
                    }
                    else {
                        liselect = li.classList.contains('e-selected');
                    }
                    if (!isSelect && liselect || isSelect && !liselect && li) {
                        if (_this.selectionSettings.showCheckbox) {
                            _this.notify('updatelist', { li: li, module: 'listbox' });
                        }
                        else {
                            if (isSelect) {
                                li.classList.add(cssClass.selected);
                                li.setAttribute('aria-selected', 'true');
                            }
                            else {
                                li.classList.remove(cssClass.selected);
                                li.removeAttribute('aria-selected');
                            }
                        }
                    }
                }
            });
        }
        this.updateSelectTag();
    };
    ListBox.prototype.updateSelectTag = function () {
        var ele = this.getSelectTag();
        var innerHTML = '';
        ele.innerHTML = '';
        if (this.value) {
            for (var i = 0, len = this.value.length; i < len; i++) {
                innerHTML += '<option selected value="' + this.value[i] + '"></option>';
            }
            ele.innerHTML += innerHTML;
        }
        this.checkSelectAll();
    };
    ListBox.prototype.checkDisabledState = function (inst) {
        return inst.ulElement.querySelectorAll('.' + cssClass.li).length === 0;
    };
    ListBox.prototype.updateToolBarState = function () {
        var _this = this;
        if (this.toolbarSettings.items.length) {
            var listObj_1 = this.getScopedListBox();
            var wrap_1 = this.list.parentElement.getElementsByClassName('e-listbox-tool')[0];
            this.toolbarSettings.items.forEach(function (value) {
                var btn = wrap_1.querySelector('[data-value="' + value + '"]');
                switch (value) {
                    case 'moveAllTo':
                        btn.disabled = _this.checkDisabledState(_this);
                        break;
                    case 'moveAllFrom':
                        btn.disabled = _this.checkDisabledState(listObj_1);
                        break;
                    case 'moveFrom':
                        btn.disabled = listObj_1.value && listObj_1.value.length ? false : true;
                        break;
                    case 'moveUp':
                        btn.disabled = _this.value && _this.value.length
                            && !_this.isSelected(_this.ulElement.children[0]) ? false : true;
                        break;
                    case 'moveDown':
                        btn.disabled = _this.value && _this.value.length
                            && !_this.isSelected(_this.ulElement.children[_this.ulElement.childElementCount - 1]) ? false : true;
                        break;
                    default:
                        btn.disabled = _this.value && _this.value.length ? false : true;
                        break;
                }
            });
        }
    };
    ListBox.prototype.setCheckboxPosition = function () {
        var listWrap = this.list;
        if (!this.initLoad && this.selectionSettings.checkboxPosition === 'Left') {
            listWrap.classList.remove('e-right');
        }
        if (this.selectionSettings.checkboxPosition === 'Right') {
            listWrap.classList.add('e-right');
        }
    };
    ListBox.prototype.showCheckbox = function (showCheckbox) {
        var index = 0;
        var liColl = this.list.lastElementChild.querySelectorAll('li');
        var liCollLen = this.list.lastElementChild.getElementsByClassName('e-list-item').length;
        if (showCheckbox) {
            if (!isBlazor()) {
                this.ulElement = this.renderItems(this.listData, this.fields);
                this.mainList = this.ulElement;
                this.list.removeChild(this.list.getElementsByTagName('ul')[0]);
                this.list.appendChild(this.ulElement);
            }
            if (this.selectionSettings.showSelectAll && !this.list.getElementsByClassName('e-selectall-parent')[0]) {
                var l10nShow = new L10n(this.getModuleName(), { selectAllText: 'Select All', unSelectAllText: 'Unselect All' }, this.locale);
                this.showSelectAll = true;
                this.selectAllText = l10nShow.getConstant('selectAllText');
                this.unSelectAllText = l10nShow.getConstant('unSelectAllText');
                this.popupWrapper = this.list;
                this.checkBoxSelectionModule.checkAllParent = null;
                this.notify('selectAll', {});
                this.checkSelectAll();
            }
        }
        else {
            if (this.list.getElementsByClassName('e-selectall-parent')[0]) {
                this.list.removeChild(this.list.getElementsByClassName('e-selectall-parent')[0]);
            }
            if (!isBlazor()) {
                for (index; index < liCollLen; index++) {
                    if (liColl[index].classList.contains('e-list-item')) {
                        liColl[index].removeChild(liColl[index].getElementsByClassName('e-checkbox-wrapper')[0]);
                    }
                    if (liColl[index].hasAttribute('aria-selected')) {
                        liColl[index].removeAttribute('aria-selected');
                    }
                }
                this.mainList = this.ulElement;
            }
        }
        this.value = [];
    };
    ListBox.prototype.isSelected = function (ele) {
        if (!isNullOrUndefined(ele)) {
            return ele.classList.contains(cssClass.selected) || ele.querySelector('.e-check') !== null;
        }
        else {
            return false;
        }
    };
    ListBox.prototype.getSelectTag = function () {
        return this.list.getElementsByClassName('e-hidden-select')[0];
    };
    ListBox.prototype.getToolElem = function () {
        return this.list.parentElement.getElementsByClassName('e-listbox-tool')[0];
    };
    ListBox.prototype.formResetHandler = function () {
        this.value = this.initialSelectedOptions;
    };
    /**
     * Return the module name.
     *
     * @private
     * @returns {string} - Module name
     */
    ListBox.prototype.getModuleName = function () {
        return 'listbox';
    };
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @returns {string} - Persist data
     */
    ListBox.prototype.getPersistData = function () {
        return this.addOnPersist(['value']);
    };
    ListBox.prototype.getLocaleName = function () {
        return 'listbox';
    };
    ListBox.prototype.destroy = function () {
        if (this.itemTemplate) {
            resetBlazorTemplate("" + this.element.id + ITEMTEMPLATE_PROPERTY, ITEMTEMPLATE_PROPERTY);
        }
        this.unwireEvents();
        if (this.element.tagName === 'EJS-LISTBOX') {
            this.element.innerHTML = '';
        }
        else {
            if (!isBlazor() || (isBlazor() && !this.isServerRendered)) {
                this.element.style.display = 'inline-block';
                if (this.toolbarSettings.items.length) {
                    this.list.parentElement.parentElement.insertBefore(this.list, this.list.parentElement);
                    detach(this.list.nextElementSibling);
                }
                this.list.parentElement.insertBefore(this.element, this.list);
            }
        }
        if (!isBlazor() || (isBlazor() && !this.isServerRendered)) {
            _super.prototype.destroy.call(this);
        }
        if (this.itemTemplate) {
            this.clearTemplate();
        }
    };
    /**
     * Called internally if any of the property value changed.
     *
     * @param {ListBoxModel} newProp - Specifies the new properties.
     * @param {ListBoxModel} oldProp - Specifies the old properties.
     * @returns {void}
     * @private
     */
    ListBox.prototype.onPropertyChanged = function (newProp, oldProp) {
        var wrap = this.toolbarSettings.items.length ? this.list.parentElement : this.list;
        _super.prototype.onPropertyChanged.call(this, newProp, oldProp);
        this.setUpdateInitial(['fields', 'query', 'dataSource'], newProp);
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'cssClass':
                    if (oldProp.cssClass) {
                        removeClass([wrap], oldProp.cssClass.split(' '));
                    }
                    if (newProp.cssClass) {
                        addClass([wrap], newProp.cssClass.split(' '));
                    }
                    break;
                case 'enableRtl':
                    if (newProp.enableRtl) {
                        wrap.classList.add('e-rtl');
                    }
                    else {
                        wrap.classList.remove('e-rtl');
                    }
                    break;
                case 'value':
                    removeClass(this.list.querySelectorAll('.' + cssClass.selected), cssClass.selected);
                    this.clearSelection(this.value);
                    this.setSelection();
                    break;
                case 'height':
                    this.setHeight();
                    break;
                case 'enabled':
                    this.setEnable();
                    break;
                case 'allowDragAndDrop':
                    if (newProp.allowDragAndDrop) {
                        this.initDraggable();
                    }
                    else {
                        getComponent(this.ulElement, 'sortable').destroy();
                    }
                    break;
                case 'allowFiltering':
                    if (this.allowFiltering) {
                        this.setFiltering();
                    }
                    else {
                        this.list.removeChild(this.list.getElementsByClassName('e-filter-parent')[0]);
                        this.filterParent = null;
                        removeClass([this.list], 'e-filter-list');
                    }
                    break;
                case 'filterBarPlaceholder':
                    if (this.allowFiltering) {
                        if (this.filterInput) {
                            Input.setPlaceholder(newProp.filterBarPlaceholder, this.filterInput);
                        }
                    }
                    break;
                case 'scope':
                    if (this.allowDragAndDrop) {
                        getComponent(this.ulElement, 'sortable').scope = newProp.scope;
                    }
                    if (this.toolbarSettings.items.length) {
                        if (oldProp.scope) {
                            getComponent(document.querySelector(oldProp.scope), this.getModuleName())
                                .tBListBox = null;
                        }
                        if (newProp.scope) {
                            getComponent(document.querySelector(newProp.scope), this.getModuleName())
                                .tBListBox = this;
                        }
                    }
                    break;
                case 'toolbarSettings': {
                    var ele = void 0;
                    var pos = newProp.toolbarSettings.position;
                    var toolElem = this.getToolElem();
                    if (pos) {
                        removeClass([wrap], ['e-right', 'e-left']);
                        wrap.classList.add('e-' + pos.toLowerCase());
                        if (pos === 'Left') {
                            wrap.insertBefore(toolElem, this.list);
                        }
                        else {
                            wrap.appendChild(toolElem);
                        }
                    }
                    if (newProp.toolbarSettings.items) {
                        if (oldProp.toolbarSettings.items.length) {
                            ele = this.list.parentElement;
                            ele.parentElement.insertBefore(this.list, ele);
                            detach(ele);
                        }
                        this.initToolbarAndStyles();
                        this.wireToolbarEvent();
                    }
                    break;
                }
                case 'selectionSettings': {
                    var showSelectAll = newProp.selectionSettings.showSelectAll;
                    var showCheckbox = newProp.selectionSettings.showCheckbox;
                    if (!isNullOrUndefined(showSelectAll)) {
                        this.showSelectAll = showSelectAll;
                        if (this.showSelectAll) {
                            var l10nSel = new L10n(this.getModuleName(), { selectAllText: 'Select All', unSelectAllText: 'Unselect All' }, this.locale);
                            this.checkBoxSelectionModule.checkAllParent = null;
                            this.showSelectAll = true;
                            this.selectAllText = l10nSel.getConstant('selectAllText');
                            this.unSelectAllText = l10nSel.getConstant('selectAllText');
                            this.popupWrapper = this.list;
                        }
                        this.notify('selectAll', {});
                        this.checkSelectAll();
                    }
                    if (!isNullOrUndefined(showCheckbox)) {
                        this.showCheckbox(showCheckbox);
                    }
                    if (this.selectionSettings.showCheckbox) {
                        this.setCheckboxPosition();
                    }
                    break;
                }
                case 'dataSource':
                    this.isDataSourceUpdate = true;
                    this.jsonData = [].slice.call(this.dataSource);
                    break;
            }
        }
    };
    var ListBox_1;
    __decorate([
        Property('')
    ], ListBox.prototype, "cssClass", void 0);
    __decorate([
        Property([])
    ], ListBox.prototype, "value", void 0);
    __decorate([
        Property('')
    ], ListBox.prototype, "height", void 0);
    __decorate([
        Property(false)
    ], ListBox.prototype, "allowDragAndDrop", void 0);
    __decorate([
        Property(1000)
    ], ListBox.prototype, "maximumSelectionLength", void 0);
    __decorate([
        Property(false)
    ], ListBox.prototype, "allowFiltering", void 0);
    __decorate([
        Property('')
    ], ListBox.prototype, "scope", void 0);
    __decorate([
        Property(true)
    ], ListBox.prototype, "ignoreCase", void 0);
    __decorate([
        Property(null)
    ], ListBox.prototype, "filterBarPlaceholder", void 0);
    __decorate([
        Event()
    ], ListBox.prototype, "beforeItemRender", void 0);
    __decorate([
        Event()
    ], ListBox.prototype, "filtering", void 0);
    __decorate([
        Event()
    ], ListBox.prototype, "select", void 0);
    __decorate([
        Event()
    ], ListBox.prototype, "change", void 0);
    __decorate([
        Event()
    ], ListBox.prototype, "beforeDrop", void 0);
    __decorate([
        Event()
    ], ListBox.prototype, "dragStart", void 0);
    __decorate([
        Event()
    ], ListBox.prototype, "drag", void 0);
    __decorate([
        Event()
    ], ListBox.prototype, "drop", void 0);
    __decorate([
        Event()
    ], ListBox.prototype, "dataBound", void 0);
    __decorate([
        Property(null)
    ], ListBox.prototype, "groupTemplate", void 0);
    __decorate([
        Property('No records found')
    ], ListBox.prototype, "noRecordsTemplate", void 0);
    __decorate([
        Property('Request failed')
    ], ListBox.prototype, "actionFailureTemplate", void 0);
    __decorate([
        Property(1000)
    ], ListBox.prototype, "zIndex", void 0);
    __decorate([
        Property(false)
    ], ListBox.prototype, "ignoreAccent", void 0);
    __decorate([
        Complex({}, ToolbarSettings)
    ], ListBox.prototype, "toolbarSettings", void 0);
    __decorate([
        Complex({}, SelectionSettings)
    ], ListBox.prototype, "selectionSettings", void 0);
    ListBox = ListBox_1 = __decorate([
        NotifyPropertyChanges
    ], ListBox);
    return ListBox;
}(DropDownBase));
export { ListBox };
var listBoxClasses = {
    backIcon: 'e-input-group-icon e-back-icon e-icons',
    filterBarClearIcon: 'e-input-group-icon e-clear-icon e-icons',
    filterInput: 'e-input-filter',
    filterParent: 'e-filter-parent',
    clearIcon: 'e-clear-icon'
};
