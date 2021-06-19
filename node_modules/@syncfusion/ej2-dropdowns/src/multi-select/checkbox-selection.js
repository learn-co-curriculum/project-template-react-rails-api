import { createCheckBox } from '@syncfusion/ej2-buttons';
import { Input } from '@syncfusion/ej2-inputs';
import { EventHandler, select, removeClass, addClass, detach, compile, L10n, isBlazor } from '@syncfusion/ej2-base';
import { Browser, attributes, isNullOrUndefined, append, closest, prepend } from '@syncfusion/ej2-base';
import { dropDownBaseClasses } from '../drop-down-base/drop-down-base';
var ICON = 'e-icons';
var CHECKBOXFRAME = 'e-frame';
var CHECK = 'e-check';
var CHECKBOXWRAP = 'e-checkbox-wrapper';
var INDETERMINATE = 'e-stop';
var checkAllParent = 'e-selectall-parent';
var searchBackIcon = 'e-input-group-icon e-back-icon e-icons';
var filterBarClearIcon = 'e-input-group-icon e-clear-icon e-icons';
var filterInput = 'e-input-filter';
var filterParent = 'e-filter-parent';
var mobileFilter = 'e-ddl-device-filter';
var clearIcon = 'e-clear-icon';
var popupFullScreen = 'e-popup-full-page';
var device = 'e-ddl-device';
var FOCUS = 'e-input-focus';
/**
 * The Multiselect enable CheckBoxSelection call this inject module.
 */
var CheckBoxSelection = /** @class */ (function () {
    function CheckBoxSelection(parent) {
        this.activeLi = [];
        this.activeEle = [];
        this.parent = parent;
        this.removeEventListener();
        this.addEventListener();
    }
    CheckBoxSelection.prototype.getModuleName = function () {
        return 'CheckBoxSelection';
    };
    CheckBoxSelection.prototype.addEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.on('updatelist', this.listSelection, this);
        this.parent.on('listoption', this.listOption, this);
        this.parent.on('selectAll', this.setSelectAll, this);
        this.parent.on('checkSelectAll', this.checkSelectAll, this);
        this.parent.on('searchBox', this.setSearchBox, this);
        this.parent.on('blur', this.onBlur, this);
        this.parent.on('targetElement', this.targetElement, this);
        this.parent.on('deviceSearchBox', this.setDeviceSearchBox, this);
        this.parent.on('inputFocus', this.getFocus, this);
        this.parent.on('reOrder', this.setReorder, this);
        this.parent.on('activeList', this.getActiveList, this);
        this.parent.on('selectAllText', this.setLocale, this);
        this.parent.on('filterBarPlaceholder', this.setPlaceholder, this);
        EventHandler.add(document, 'mousedown', this.onDocumentClick, this);
        this.parent.on('addItem', this.checboxCreate, this);
        this.parent.on('popupFullScreen', this.setPopupFullScreen, this);
    };
    CheckBoxSelection.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off('updatelist', this.listSelection);
        this.parent.off('listoption', this.listOption);
        this.parent.off('selectAll', this.setSelectAll);
        this.parent.off('checkSelectAll', this.checkSelectAll);
        this.parent.off('searchBox', this.setSearchBox);
        this.parent.off('blur', this.onBlur);
        this.parent.off('targetElement', this.targetElement);
        this.parent.off('deviceSearchBox', this.setDeviceSearchBox);
        this.parent.off('inputFocus', this.getFocus);
        this.parent.off('reOrder', this.setReorder);
        this.parent.off('activeList', this.getActiveList);
        this.parent.off('selectAllText', this.setLocale);
        this.parent.off('filterBarPlaceholder', this.setPlaceholder);
        this.parent.off('addItem', this.checboxCreate);
        this.parent.off('popupFullScreen', this.setPopupFullScreen);
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    CheckBoxSelection.prototype.listOption = function (args) {
        var _this = this;
        if (isNullOrUndefined(this.parent.listCurrentOptions.itemCreated)) {
            this.parent.listCurrentOptions.itemCreated = function (e) {
                _this.checboxCreate(e);
            };
        }
        else {
            var itemCreated_1 = this.parent.listCurrentOptions.itemCreated;
            this.parent.listCurrentOptions.itemCreated = function (e) {
                _this.checboxCreate(e);
                itemCreated_1.apply(_this, [e]);
            };
        }
    };
    CheckBoxSelection.prototype.setPlaceholder = function (props) {
        Input.setPlaceholder(props.filterBarPlaceholder, this.filterInput);
    };
    CheckBoxSelection.prototype.checboxCreate = function (e) {
        var item;
        if (!isNullOrUndefined(e.item)) {
            item = e.item;
        }
        else {
            item = e;
        }
        if (this.parent.enableGroupCheckBox || (item.className !== 'e-list-group-item '
            && item.className !== 'e-list-group-item')) {
            var checkboxEle = createCheckBox(this.parent.createElement, true);
            var icon = select('div.' + ICON, item);
            item.insertBefore(checkboxEle, item.childNodes[isNullOrUndefined(icon) ? 0 : 1]);
            select('.' + CHECKBOXFRAME, checkboxEle);
            if (this.parent.enableGroupCheckBox) {
                this.parent.popupWrapper.classList.add('e-multiselect-group');
            }
            return item;
        }
        else {
            return item;
        }
    };
    CheckBoxSelection.prototype.setSelectAll = function () {
        if (this.parent.showSelectAll) {
            if (isNullOrUndefined(this.checkAllParent)) {
                this.checkAllParent = this.parent.createElement('div', {
                    className: checkAllParent
                });
                this.selectAllSpan = this.parent.createElement('span', {
                    className: 'e-all-text'
                });
                this.selectAllSpan.textContent = '';
                this.checkAllParent.appendChild(this.selectAllSpan);
                this.setLocale();
                this.checboxCreate(this.checkAllParent);
                if (this.parent.headerTemplate) {
                    if (!isNullOrUndefined(this.parent.filterParent)) {
                        append([this.checkAllParent], this.parent.filterParent);
                    }
                    else {
                        append([this.checkAllParent], this.parent.popupWrapper);
                    }
                }
                if (!this.parent.headerTemplate) {
                    if (!isNullOrUndefined(this.parent.filterParent)) {
                        this.parent.filterParent.parentNode.insertBefore(this.checkAllParent, this.parent.filterParent.nextSibling);
                    }
                    else {
                        prepend([this.checkAllParent], this.parent.popupWrapper);
                    }
                }
                EventHandler.add(this.checkAllParent, 'mousedown', this.clickHandler, this);
            }
            if (this.parent.list.classList.contains('e-nodata') || (this.parent.listData && this.parent.listData.length <= 1 &&
                !(this.parent.isDynamicDataChange && isBlazor())) || (this.parent.isDynamicDataChange &&
                !isNullOrUndefined(this.parent.value) && this.parent.value.length <= 1 && isBlazor())) {
                this.checkAllParent.style.display = 'none';
            }
            else {
                this.checkAllParent.style.display = 'block';
            }
            this.parent.selectAllHeight = this.checkAllParent.getBoundingClientRect().height;
        }
        else if (!isNullOrUndefined(this.checkAllParent)) {
            this.checkAllParent.parentElement.removeChild(this.checkAllParent);
            this.checkAllParent = null;
        }
    };
    CheckBoxSelection.prototype.destroy = function () {
        this.removeEventListener();
        EventHandler.remove(document, 'mousedown', this.onDocumentClick);
    };
    CheckBoxSelection.prototype.listSelection = function (args) {
        var target;
        var isBlazorListbox = isBlazor() && (args.module && args.module === 'listbox');
        if (!isNullOrUndefined(args.e)) {
            var frameElm = args.li.querySelector('.e-checkbox-wrapper .e-frame');
            target = !isNullOrUndefined(args.e.target) ?
                (args.e.target.classList.contains('e-frame')
                    && (!this.parent.showSelectAll
                        || (this.checkAllParent && !this.checkAllParent.contains(args.e.target)))) ?
                    args.e.target : (isBlazorListbox ? frameElm : args.li.querySelector('.e-checkbox-wrapper').childNodes[1])
                : (isBlazorListbox ? frameElm : args.li.querySelector('.e-checkbox-wrapper').childNodes[1]);
        }
        else {
            var checkboxWrapper = args.li.querySelector('.e-checkbox-wrapper');
            target = checkboxWrapper ? (isBlazorListbox ?
                checkboxWrapper.querySelector('.e-frame') : checkboxWrapper.childNodes[1]) : args.li.lastElementChild.childNodes[1];
        }
        if (this.parent.itemTemplate || this.parent.enableGroupCheckBox) {
            target = args.li.firstElementChild.childNodes[1];
        }
        if (!isNullOrUndefined(target)) {
            this.checkWrapper = closest(target, '.' + CHECKBOXWRAP);
        }
        if (!isNullOrUndefined(this.checkWrapper)) {
            var checkElement = select('.' + CHECKBOXFRAME, this.checkWrapper);
            var selectAll = false;
            this.validateCheckNode(this.checkWrapper, checkElement.classList.contains(CHECK), args.li, args.e, selectAll);
        }
    };
    CheckBoxSelection.prototype.validateCheckNode = function (checkWrap, isCheck, li, e, selectAll) {
        this.changeState(checkWrap, isCheck ? 'uncheck' : 'check', e, true, selectAll);
    };
    CheckBoxSelection.prototype.clickHandler = function (e) {
        var target;
        if (e.currentTarget.classList.contains(this.checkAllParent.className)) {
            target = e.currentTarget.firstElementChild.lastElementChild;
        }
        else {
            target = e.currentTarget;
        }
        this.checkWrapper = closest(target, '.' + CHECKBOXWRAP);
        var selectAll = true;
        if (!isNullOrUndefined(this.checkWrapper)) {
            var checkElement = select('.' + CHECKBOXFRAME, this.checkWrapper);
            this.validateCheckNode(this.checkWrapper, checkElement.classList.contains(CHECK), null, e, selectAll);
        }
        e.preventDefault();
    };
    CheckBoxSelection.prototype.changeState = function (wrapper, state, e, isPrevent, selectAll) {
        var ariaState;
        var frameSpan = wrapper.getElementsByClassName(CHECKBOXFRAME)[0];
        if (state === 'check' && !frameSpan.classList.contains(CHECK)) {
            frameSpan.classList.remove(INDETERMINATE);
            frameSpan.classList.add(CHECK);
            ariaState = 'true';
            if (selectAll) {
                this.parent.selectAllItems(true, e);
                this.setLocale(true);
            }
        }
        else if (state === 'uncheck' && (frameSpan.classList.contains(CHECK) || frameSpan.classList.contains(INDETERMINATE))) {
            removeClass([frameSpan], [CHECK, INDETERMINATE]);
            ariaState = 'false';
            if (selectAll) {
                this.parent.selectAllItems(false, e);
                this.setLocale();
            }
        }
        else if (state === 'indeterminate' && !(frameSpan.classList.contains(INDETERMINATE))) {
            removeClass([frameSpan], [CHECK]);
            frameSpan.classList.add(INDETERMINATE);
            ariaState = 'false';
            if (selectAll) {
                this.parent.selectAllItems(false, e);
                this.setLocale();
            }
        }
        ariaState = state === 'check' ? 'true' : state === 'uncheck' ? 'false' : ariaState;
        if (!isNullOrUndefined(ariaState)) {
            wrapper.setAttribute('aria-checked', ariaState);
        }
    };
    CheckBoxSelection.prototype.setSearchBox = function (args) {
        if (isNullOrUndefined(this.parent.filterParent)) {
            this.parent.filterParent = this.parent.createElement('span', {
                className: filterParent
            });
            this.filterInput = this.parent.createElement('input', {
                attrs: { type: 'text' },
                className: filterInput
            });
            this.parent.element.parentNode.insertBefore(this.filterInput, this.parent.element);
            var backIcon = false;
            if (Browser.isDevice) {
                backIcon = true;
                this.parent.mobFilter = false;
            }
            this.filterInputObj = Input.createInput({
                element: this.filterInput,
                buttons: backIcon ? [searchBackIcon, filterBarClearIcon] : [filterBarClearIcon],
                properties: { placeholder: this.parent.filterBarPlaceholder }
            }, this.parent.createElement);
            if (!isNullOrUndefined(this.parent.cssClass)) {
                if (this.parent.cssClass.split(' ').indexOf('e-outline') !== -1) {
                    addClass([this.filterInputObj.container], 'e-outline');
                }
                else if (this.parent.cssClass.split(' ').indexOf('e-filled') !== -1) {
                    addClass([this.filterInputObj.container], 'e-filled');
                }
            }
            append([this.filterInputObj.container], this.parent.filterParent);
            prepend([this.parent.filterParent], args.popupElement);
            attributes(this.filterInput, {
                'aria-disabled': 'false',
                'aria-owns': this.parent.element.id + '_options',
                'role': 'listbox',
                'aria-activedescendant': null,
                'autocomplete': 'off',
                'autocorrect': 'off',
                'autocapitalize': 'off',
                'spellcheck': 'false'
            });
            this.clearIconElement = this.filterInput.parentElement.querySelector('.' + clearIcon);
            if (!Browser.isDevice && this.clearIconElement) {
                EventHandler.add(this.clearIconElement, 'mousedown', this.clearText, this);
                this.clearIconElement.style.visibility = 'hidden';
            }
            EventHandler.add(this.filterInput, 'input', this.parent.onInput, this.parent);
            EventHandler.add(this.filterInput, 'keyup', this.parent.keyUp, this.parent);
            EventHandler.add(this.filterInput, 'keydown', this.parent.onKeyDown, this.parent);
            EventHandler.add(this.filterInput, 'blur', this.onBlur, this);
            EventHandler.add(this.filterInput, 'paste', this.parent.pasteHandler, this.parent);
            this.parent.searchBoxHeight = (this.filterInputObj.container.parentElement).getBoundingClientRect().height;
            return this.filterInputObj;
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    CheckBoxSelection.prototype.clickOnBackIcon = function (e) {
        this.parent.hidePopup();
        removeClass([document.body, this.parent.popupObj.element], popupFullScreen);
        this.parent.inputElement.focus();
    };
    CheckBoxSelection.prototype.clearText = function (e) {
        this.parent.targetInputElement.value = '';
        if (this.parent.allowFiltering && this.parent.targetInputElement.value === '') {
            this.parent.search(null);
        }
        this.parent.refreshPopup();
        this.parent.refreshListItems(null);
        this.clearIconElement.style.visibility = 'hidden';
        this.filterInput.focus();
        this.setReorder(e);
        e.preventDefault();
    };
    CheckBoxSelection.prototype.setDeviceSearchBox = function () {
        this.parent.popupObj.element.classList.add(device);
        this.parent.popupObj.element.classList.add(mobileFilter);
        this.parent.popupObj.position = { X: 0, Y: 0 };
        this.parent.popupObj.dataBind();
        this.setSearchBoxPosition();
        this.backIconElement = this.filterInputObj.container.querySelector('.e-back-icon');
        this.clearIconElement = this.filterInputObj.container.querySelector('.' + clearIcon);
        this.clearIconElement.style.visibility = 'hidden';
        EventHandler.add(this.backIconElement, 'click', this.clickOnBackIcon, this);
        EventHandler.add(this.clearIconElement, 'click', this.clearText, this);
    };
    CheckBoxSelection.prototype.setSearchBoxPosition = function () {
        var searchBoxHeight = this.filterInput.parentElement.getBoundingClientRect().height;
        var selectAllHeight = 0;
        if (this.checkAllParent) {
            selectAllHeight = this.checkAllParent.getBoundingClientRect().height;
        }
        this.parent.popupObj.element.style.maxHeight = '100%';
        this.parent.popupObj.element.style.width = '100%';
        this.parent.list.style.maxHeight = (window.innerHeight - searchBoxHeight - selectAllHeight) + 'px';
        this.parent.list.style.height = (window.innerHeight - searchBoxHeight - selectAllHeight) + 'px';
        var clearElement = this.filterInput.parentElement.querySelector('.' + clearIcon);
        detach(this.filterInput);
        clearElement.parentElement.insertBefore(this.filterInput, clearElement);
    };
    CheckBoxSelection.prototype.setPopupFullScreen = function () {
        attributes(this.parent.popupObj.element, { style: 'left:0px;right:0px;top:0px;bottom:0px;' });
        addClass([document.body, this.parent.popupObj.element], popupFullScreen);
        this.parent.popupObj.element.style.maxHeight = '100%';
        this.parent.popupObj.element.style.width = '100%';
    };
    CheckBoxSelection.prototype.targetElement = function () {
        if (!isNullOrUndefined(this.clearIconElement)) {
            this.parent.targetInputElement = this.filterInput;
            this.clearIconElement.style.visibility = this.parent.targetInputElement.value === '' ? 'hidden' : 'visible';
        }
        return this.parent.targetInputElement.value;
    };
    CheckBoxSelection.prototype.onBlur = function (e) {
        if (!this.parent.element.classList.contains('e-listbox')) {
            var target = void 0;
            if (this.parent.keyAction) {
                return;
            }
            if (Browser.isIE) {
                target = !isNullOrUndefined(e) && e.target;
            }
            if (!Browser.isIE) {
                target = !isNullOrUndefined(e) && e.relatedTarget;
            }
            // eslint-disable-next-line max-len
            if (this.parent.popupObj && document.body.contains(this.parent.popupObj.element) && this.parent.popupObj.element.contains(target)
                && !Browser.isIE && this.filterInput) {
                this.filterInput.focus();
                return;
            }
            if (this.parent.scrollFocusStatus && this.filterInput) {
                e.preventDefault();
                this.filterInput.focus();
                this.parent.scrollFocusStatus = false;
                return;
            }
            if (this.parent.popupObj && document.body.contains(this.parent.popupObj.element)
                && !this.parent.popupObj.element.classList.contains('e-popup-close')) {
                this.parent.inputFocus = false;
                this.parent.updateValueState(e, this.parent.value, this.parent.tempValues);
                this.parent.dispatchEvent(this.parent.hiddenElement, 'change');
            }
            if (this.parent.popupObj && document.body.contains(this.parent.popupObj.element) &&
                !this.parent.popupObj.element.classList.contains('e-popup-close')) {
                this.parent.inputFocus = false;
                this.parent.overAllWrapper.classList.remove(FOCUS);
                this.parent.trigger('blur');
                this.parent.focused = true;
            }
            if (this.parent.popupObj && document.body.contains(this.parent.popupObj.element) &&
                !this.parent.popupObj.element.classList.contains('e-popup-close') && !Browser.isDevice) {
                this.parent.hidePopup();
            }
        }
    };
    CheckBoxSelection.prototype.onDocumentClick = function (e) {
        if (this.parent.getLocaleName() !== 'listbox') {
            var target = e.target;
            if (!isNullOrUndefined(this.parent.popupObj) && closest(target, '[id="' + this.parent.popupObj.element.id + '"]')) {
                if (!(this.filterInput && this.filterInput.value !== '')) {
                    e.preventDefault();
                }
            }
            if (!(!isNullOrUndefined(this.parent.popupObj) && closest(target, '[id="' + this.parent.popupObj.element.id + '"]')) &&
                !this.parent.overAllWrapper.contains(e.target)) {
                if (this.parent.overAllWrapper.classList.contains(dropDownBaseClasses.focus) || this.parent.isPopupOpen()) {
                    this.parent.inputFocus = false;
                    this.parent.scrollFocusStatus = false;
                    this.parent.hidePopup();
                    this.parent.onBlur(e, true);
                    this.parent.focused = true;
                }
            }
            else {
                this.parent.scrollFocusStatus = (Browser.isIE || Browser.info.name === 'edge') &&
                    (document.activeElement === this.filterInput);
            }
            if (!this.parent.overAllWrapper.contains(e.target) && this.parent.overAllWrapper.classList.contains('e-input-focus') &&
                !this.parent.isPopupOpen()) {
                if (Browser.isIE) {
                    this.parent.onBlur();
                }
                else {
                    this.parent.onBlur(e);
                }
            }
            if (this.filterInput === target) {
                this.filterInput.focus();
            }
        }
    };
    CheckBoxSelection.prototype.getFocus = function (e) {
        this.parent.overAllWrapper.classList.remove(FOCUS);
        if (this.parent.keyAction && e.value !== 'clear' && e.value !== 'focus') {
            this.parent.keyAction = false;
            return;
        }
        if (e.value === 'focus') {
            this.filterInput.focus();
            this.parent.removeFocus();
            EventHandler.remove(this.parent.list, 'keydown', this.parent.onKeyDown);
        }
        if (e.value === 'clear') {
            this.filterInput.value = '';
            this.clearIconElement.style.visibility = 'hidden';
        }
    };
    CheckBoxSelection.prototype.checkSelectAll = function (e) {
        if (e.value === 'check' && this.checkAllParent.getAttribute('aria-checked') !== 'true') {
            this.changeState(this.checkAllParent, e.value, null, null, false);
            this.setLocale(true);
        }
        if (e.value === 'uncheck') {
            this.changeState(this.checkAllParent, e.value, null, null, false);
            this.setLocale();
        }
        if (e.value === 'indeterminate') {
            this.changeState(this.checkAllParent, e.value, null, null, false);
            this.setLocale();
        }
    };
    CheckBoxSelection.prototype.setLocale = function (unSelect) {
        if (this.parent.selectAllText !== 'Select All' || this.parent.unSelectAllText !== 'Unselect All') {
            var template = unSelect ? this.parent.unSelectAllText : this.parent.selectAllText;
            this.selectAllSpan.textContent = '';
            var compiledString = compile(template);
            var templateName = unSelect ? 'unSelectAllText' : 'selectAllText';
            for (var _i = 0, _a = compiledString({}, this.parent, templateName, null, !this.parent.isStringTemplate); _i < _a.length; _i++) {
                var item = _a[_i];
                this.selectAllSpan.textContent = item.textContent;
            }
        }
        else {
            var l10nLocale = { selectAllText: 'Select All', unSelectAllText: 'Unselect All' };
            var l10n = new L10n(this.parent.getLocaleName(), {}, this.parent.locale);
            if (l10n.getConstant('selectAllText') === '') {
                l10n = new L10n('dropdowns', l10nLocale, this.parent.locale);
            }
            this.selectAllSpan.textContent = unSelect ? l10n.getConstant('unSelectAllText') : l10n.getConstant('selectAllText');
        }
    };
    CheckBoxSelection.prototype.getActiveList = function (args) {
        if (args.li.classList.contains('e-active')) {
            this.activeLi.push(args.li.cloneNode(true));
        }
        else {
            this.activeLi.splice(args.index, 1);
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    CheckBoxSelection.prototype.setReorder = function (args) {
        if (this.parent.enableSelectionOrder && !isNullOrUndefined(this.parent.value)) {
            var activeLiCount = this.parent.ulElement.querySelectorAll('li.e-active').length;
            var remLi = void 0;
            var ulEle = this.parent.createElement('ul', {
                className: 'e-list-parent e-ul e-reorder'
            });
            if (activeLiCount > 0) {
                append(this.parent.ulElement.querySelectorAll('li.e-active'), ulEle);
                remLi = this.parent.ulElement.querySelectorAll('li.e-active');
                addClass(remLi, 'e-reorder-hide');
                prepend([ulEle], this.parent.list);
            }
            this.parent.focusAtFirstListItem();
        }
    };
    return CheckBoxSelection;
}());
export { CheckBoxSelection };
