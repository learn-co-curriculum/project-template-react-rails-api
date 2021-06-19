import { classNames } from './list-view';
import { EventHandler, append, isNullOrUndefined, detach, removeClass, addClass, compile, formatUnit } from '@syncfusion/ej2-base';
import { isBlazor, debounce } from '@syncfusion/ej2-base';
import { ListBase } from '../common/list-base';
import { DataManager } from '@syncfusion/ej2-data';
var listElementCount = 1.5;
var windowElementCount = 3;
var Virtualization = /** @class */ (function () {
    function Virtualization(instance) {
        this.elementDifference = 0;
        this.listViewInstance = instance;
    }
    /**
     * For internal use only.
     *
     * @private
     */
    Virtualization.prototype.isNgTemplate = function () {
        return !isNullOrUndefined(this.listViewInstance.templateRef) && typeof this.listViewInstance.templateRef !== 'string';
    };
    /**
     * For internal use only.
     *
     * @private
     */
    Virtualization.prototype.uiVirtualization = function () {
        this.wireScrollEvent(false);
        var curViewDS = this.listViewInstance.curViewDS;
        var firstDs = curViewDS.slice(0, 1);
        if (!(isBlazor() || this.listViewInstance.isServerRendered)) {
            this.listViewInstance.ulElement = this.listViewInstance.curUL = ListBase.createList(
            // eslint-disable-next-line
            this.listViewInstance.createElement, firstDs, this.listViewInstance.listBaseOption, null, this);
            this.listViewInstance.contentContainer = this.listViewInstance.createElement('div', { className: classNames.content });
            this.listViewInstance.element.appendChild(this.listViewInstance.contentContainer);
            this.listViewInstance.contentContainer.appendChild(this.listViewInstance.ulElement);
        }
        this.listItemHeight = this.listViewInstance.ulElement.firstElementChild.getBoundingClientRect().height;
        this.expectedDomItemCount = this.ValidateItemCount(10000);
        this.domItemCount = this.ValidateItemCount(Object.keys(this.listViewInstance.curViewDS).length);
        this.uiFirstIndex = 0;
        this.uiLastIndex = this.domItemCount - 1;
        var otherDs = curViewDS.slice(1, this.domItemCount);
        if (!(isBlazor() || this.listViewInstance.isServerRendered)) {
            var listItems = ListBase.createListItemFromJson(
            // eslint-disable-next-line
            this.listViewInstance.createElement, otherDs, this.listViewInstance.listBaseOption, null, null, this);
            append(listItems, this.listViewInstance.ulElement);
            this.listViewInstance.liCollection = this.listViewInstance.curUL.querySelectorAll('li');
            this.topElement = this.listViewInstance.createElement('div');
            this.listViewInstance.ulElement.insertBefore(this.topElement, this.listViewInstance.ulElement.firstElementChild);
            this.bottomElement = this.listViewInstance.createElement('div');
            this.listViewInstance.ulElement.insertBefore(this.bottomElement, null);
            this.totalHeight = (Object.keys(curViewDS).length * this.listItemHeight) - (this.domItemCount * this.listItemHeight);
            this.topElement.style.height = 0 + 'px';
            this.bottomElement.style.height = this.totalHeight + 'px';
            this.topElementHeight = 0;
            this.bottomElementHeight = this.totalHeight;
        }
        else {
            this.listViewInstance.contentContainer = this.listViewInstance.element.querySelector('.e-content');
            this.listViewInstance.liCollection = this.listViewInstance.curUL.querySelectorAll('li');
        }
        this.listDiff = 0;
        this.uiIndicesInitialization();
    };
    Virtualization.prototype.wireScrollEvent = function (destroy) {
        if (!destroy) {
            if (!(isBlazor() && this.listViewInstance.isServerRendered)) {
                if (this.listViewInstance.isWindow) {
                    this.onVirtualScroll = this.onVirtualUiScroll.bind(this);
                    window.addEventListener('scroll', this.onVirtualScroll);
                }
                else {
                    EventHandler.add(this.listViewInstance.element, 'scroll', this.onVirtualUiScroll, this);
                }
            }
            else {
                if (this.listViewInstance.isWindow) {
                    // eslint-disable-next-line
                    this.onVirtualScroll = debounce(this.onVirtualUiScroll.bind(this), 350);
                    this.updateUl = this.updateUlContainer.bind(this);
                    window.addEventListener('scroll', this.onVirtualScroll);
                    window.addEventListener('scroll', this.updateUl);
                }
                else {
                    EventHandler.add(this.listViewInstance.element, 'scroll', debounce(this.onVirtualUiScroll, 350), this);
                    EventHandler.add(this.listViewInstance.element, 'scroll', this.updateUlContainer, this);
                }
            }
        }
        else {
            if (this.listViewInstance.isWindow === true) {
                window.removeEventListener('scroll', this.onVirtualScroll);
                window.removeEventListener('scroll', this.updateUl);
            }
            else {
                EventHandler.remove(this.listViewInstance.element, 'scroll', this.onVirtualUiScroll);
                EventHandler.remove(this.listViewInstance.element, 'scroll', this.updateUlContainer);
            }
        }
    };
    Virtualization.prototype.updateUlContainer = function (e) {
        var listDiff;
        var virtualElementContainer = this.listViewInstance.ulElement.querySelector('.' + classNames.virtualElementContainer);
        if (isNullOrUndefined(this.listViewInstance.liElementHeight)) {
            this.listViewInstance.updateLiElementHeight();
        }
        if (this.listViewInstance.isWindow) {
            // eslint-disable-next-line
            listDiff = Math.round(e.target.documentElement.scrollTop / this.listViewInstance.liElementHeight) - 2;
        }
        else {
            // eslint-disable-next-line
            listDiff = Math.round(e.target.scrollTop / this.listViewInstance.liElementHeight) - 2;
        }
        if (((listDiff - 1) * this.listViewInstance.liElementHeight) < 0) {
            virtualElementContainer.style.top = '0px';
        }
        else {
            virtualElementContainer.style.top = (listDiff) * this.listViewInstance.liElementHeight + 'px';
        }
    };
    Virtualization.prototype.ValidateItemCount = function (dataSourceLength) {
        var height = parseFloat(formatUnit(this.listViewInstance.height));
        var itemCount;
        if (this.listViewInstance.isWindow) {
            itemCount = Math.round((window.innerHeight / this.listItemHeight) * windowElementCount);
        }
        else {
            if (typeof this.listViewInstance.height === 'string' && this.listViewInstance.height.indexOf('%') !== -1) {
                // eslint-disable-next-line max-len
                itemCount = Math.round((this.listViewInstance.element.getBoundingClientRect().height / this.listItemHeight) * listElementCount);
            }
            else {
                itemCount = Math.round((height / this.listItemHeight) * listElementCount);
            }
        }
        if (itemCount > dataSourceLength) {
            itemCount = dataSourceLength;
        }
        return itemCount;
    };
    Virtualization.prototype.uiIndicesInitialization = function () {
        this.uiIndices = { 'activeIndices': [], 'disabledItemIndices': [], 'hiddenItemIndices': [] };
        var data = this.listViewInstance.curViewDS;
        for (var i = 0; i < data.length; i++) {
            if (this.listViewInstance.showCheckBox && data[i][this.listViewInstance.fields.isChecked]) {
                this.uiIndices.activeIndices.push(i);
            }
            // eslint-disable-next-line
            if (!isNullOrUndefined(data[i][this.listViewInstance.fields.enabled]) &&
                !data[i][this.listViewInstance.fields.enabled]) {
                // eslint-disable-next-line
                (this.uiIndices.disabledItemIndices.push(i));
            }
        }
        if (this.isNgTemplate()) {
            var items = this.listViewInstance.element.querySelectorAll('.' + classNames.listItem);
            for (var index = 0; index < items.length; index++) {
                items[index].context = this.listViewInstance.viewContainerRef.get(index).context;
            }
        }
    };
    Virtualization.prototype.refreshItemHeight = function () {
        if (this.listViewInstance.curViewDS.length) {
            var curViewDS = this.listViewInstance.curViewDS;
            if (isBlazor() && this.listViewInstance.isServerRendered) {
                this.listViewInstance.ulElement.children[0].style.height =
                    (this.listViewInstance.liElementHeight * (Object.keys(curViewDS).length)) + 'px';
            }
            else {
                this.listItemHeight = this.topElement.nextSibling.getBoundingClientRect().height;
                this.totalHeight = (Object.keys(curViewDS).length * this.listItemHeight) - (this.domItemCount * this.listItemHeight);
                this.bottomElementHeight = this.totalHeight;
                this.bottomElement.style.height = this.totalHeight + 'px';
            }
        }
    };
    Virtualization.prototype.getscrollerHeight = function (startingHeight) {
        return this.listViewInstance.isWindow ? (((pageYOffset - startingHeight) <= 0) ? 0 :
            (pageYOffset - startingHeight)) : ((this.listViewInstance.element.scrollTop - startingHeight) <= 0) ? 0 :
            (this.listViewInstance.element.scrollTop - startingHeight);
    };
    Virtualization.prototype.onVirtualUiScroll = function (e) {
        var _a;
        var startingHeight;
        if (this.listViewInstance.isWindow) {
            startingHeight = this.listViewInstance.ulElement.getBoundingClientRect().top -
                document.documentElement.getBoundingClientRect().top;
        }
        else {
            startingHeight = this.listViewInstance.headerEle ? this.listViewInstance.headerEle.getBoundingClientRect().height : 0;
        }
        this.scrollPosition = isNullOrUndefined(this.scrollPosition) ? 0 : this.scrollPosition;
        var scroll = this.getscrollerHeight(startingHeight);
        this.topElementHeight = this.listItemHeight * Math.floor(scroll / this.listItemHeight);
        this.bottomElementHeight = this.totalHeight - this.topElementHeight;
        _a = scroll <= this.totalHeight ?
            [this.topElementHeight, this.bottomElementHeight] : [this.totalHeight, 0], this.topElementHeight = _a[0], this.bottomElementHeight = _a[1];
        if (isBlazor() && this.listViewInstance.isServerRendered) {
            var listDiff = void 0;
            if (isNullOrUndefined(this.listViewInstance.liElementHeight)) {
                this.listViewInstance.updateLiElementHeight();
            }
            if (this.listViewInstance.isWindow) {
                listDiff = Math.round(document.documentElement.scrollTop / this.listViewInstance.liElementHeight);
            }
            else {
                // eslint-disable-next-line
                listDiff = Math.round(e.target.scrollTop / this.listViewInstance.liElementHeight);
            }
            if ((listDiff - 2) - this.elementDifference >= 3 || (listDiff - 2) - this.elementDifference <= -1) {
                var args = { listDiff: listDiff - 2, selectedItems: this.listViewInstance.previousSelectedItems };
                this.listViewInstance.interopAdaptor.invokeMethodAsync('VirtalScrolling', args);
                if (this.listViewInstance.ulElement.querySelector('.e-focused')) {
                    this.listViewInstance.ulElement.querySelector('.e-focused').classList.remove('e-focused');
                }
                this.elementDifference = listDiff - 2;
            }
        }
        else {
            if (this.topElementHeight !== parseFloat(this.topElement.style.height)) {
                this.topElement.style.height = this.topElementHeight + 'px';
                this.bottomElement.style.height = this.bottomElementHeight + 'px';
                if (scroll > this.scrollPosition) {
                    var listDiff = Math.round(((this.topElementHeight / this.listItemHeight) - this.listDiff));
                    if (listDiff > (this.expectedDomItemCount + 5)) {
                        this.onLongScroll(listDiff, true);
                    }
                    else {
                        this.onNormalScroll(listDiff, true);
                    }
                }
                else {
                    var listDiff = Math.round((this.listDiff - (this.topElementHeight / this.listItemHeight)));
                    if (listDiff > (this.expectedDomItemCount + 5)) {
                        this.onLongScroll(listDiff, false);
                    }
                    else {
                        this.onNormalScroll(listDiff, false);
                    }
                }
            }
            this.listDiff = Math.round(this.topElementHeight / this.listItemHeight);
            if (typeof this.listViewInstance.onUIScrolled === 'function') {
                this.listViewInstance.onUIScrolled();
            }
        }
        this.scrollPosition = scroll;
    };
    Virtualization.prototype.onLongScroll = function (listDiff, isScrollingDown) {
        var index = isScrollingDown ? (this.uiFirstIndex + listDiff) : (this.uiFirstIndex - listDiff);
        var elements = this.listViewInstance.ulElement.querySelectorAll('li');
        for (var i = 0; i < elements.length; i++) {
            this.updateUI(elements[i], index);
            index++;
        }
        this.uiLastIndex = isScrollingDown ? (this.uiLastIndex + listDiff) : (this.uiLastIndex - listDiff);
        this.uiFirstIndex = isScrollingDown ? (this.uiFirstIndex + listDiff) : (this.uiFirstIndex - listDiff);
    };
    Virtualization.prototype.onNormalScroll = function (listDiff, isScrollingDown) {
        if (isScrollingDown) {
            for (var i = 0; i < listDiff; i++) {
                var index = ++this.uiLastIndex;
                this.updateUI(this.topElement.nextElementSibling, index, this.bottomElement);
                this.uiFirstIndex++;
            }
        }
        else {
            for (var i = 0; i < listDiff; i++) {
                var index = --this.uiFirstIndex;
                var target = this.topElement.nextSibling;
                this.updateUI(this.bottomElement.previousElementSibling, index, target);
                this.uiLastIndex--;
            }
        }
    };
    Virtualization.prototype.updateUiContent = function (element, index) {
        var curViewDs = this.listViewInstance.curViewDS;
        if (typeof this.listViewInstance.dataSource[0] === 'string' ||
            typeof this.listViewInstance.dataSource[0] === 'number') {
            element.dataset.uid = ListBase.generateId();
            element.getElementsByClassName(classNames.listItemText)[0].innerHTML =
                this.listViewInstance.curViewDS[index].toString();
        }
        else {
            // eslint-disable-next-line
            element.dataset.uid = (curViewDs[index][this.listViewInstance.fields.id]) ?
                // eslint-disable-next-line
                (curViewDs[index][this.listViewInstance.fields.id]) : ListBase.generateId();
            element.getElementsByClassName(classNames.listItemText)[0].innerHTML =
                // eslint-disable-next-line
                (curViewDs[index][this.listViewInstance.fields.text]);
        }
        if (this.listViewInstance.showIcon) {
            if (element.querySelector('.' + classNames.listIcon)) {
                detach(element.querySelector('.' + classNames.listIcon));
            }
            if (this.listViewInstance.curViewDS[index][this.listViewInstance.fields.iconCss]) {
                var textContent = element.querySelector('.' + classNames.textContent);
                var target = this.listViewInstance.createElement('div', {
                    className: classNames.listIcon + ' ' +
                        this.listViewInstance.curViewDS[index][this.listViewInstance.fields.iconCss]
                });
                textContent.insertBefore(target, element.querySelector('.' + classNames.listItemText));
            }
        }
        if (this.listViewInstance.showCheckBox && this.listViewInstance.fields.groupBy) {
            if (!this.checkListWrapper) {
                this.checkListWrapper = this.listViewInstance.curUL.querySelector('.' + classNames.checkboxWrapper).cloneNode(true);
            }
            var textContent = element.querySelector('.' + classNames.textContent);
            if (this.listViewInstance.curViewDS[index].isHeader) {
                if (element.querySelector('.' + classNames.checkboxWrapper)) {
                    element.classList.remove(classNames.checklist);
                    textContent.classList.remove(classNames.checkbox);
                    detach(element.querySelector('.' + classNames.checkboxWrapper));
                }
            }
            else {
                if (!element.querySelector('.' + classNames.checkboxWrapper)) {
                    element.classList.add(classNames.checklist);
                    textContent.classList.add(classNames.checkbox);
                    textContent.insertBefore(this.checkListWrapper.cloneNode(true), element.querySelector('.' + classNames.listItemText));
                }
            }
        }
    };
    Virtualization.prototype.changeElementAttributes = function (element, index) {
        element.classList.remove(classNames.disable);
        if (this.uiIndices.disabledItemIndices.length && this.uiIndices.disabledItemIndices.indexOf(index) !== -1) {
            element.classList.add(classNames.disable);
        }
        element.style.display = '';
        if (this.uiIndices.hiddenItemIndices.length && this.uiIndices.hiddenItemIndices.indexOf(index) !== -1) {
            element.style.display = 'none';
        }
        if (this.listViewInstance.showCheckBox) {
            var checklistElement = element.querySelector('.' + classNames.checkboxWrapper);
            element.classList.remove(classNames.selected);
            element.classList.remove(classNames.focused);
            if (checklistElement) {
                checklistElement.removeAttribute('aria-checked');
                checklistElement.firstElementChild.classList.remove(classNames.checked);
            }
            if (this.uiIndices.activeIndices.length && this.uiIndices.activeIndices.indexOf(index) !== -1 &&
                !this.listViewInstance.curUL.querySelector(classNames.selected)) {
                element.classList.add(classNames.selected);
                checklistElement.firstElementChild.classList.add(classNames.checked);
                checklistElement.setAttribute('aria-checked', 'true');
                if (this.activeIndex === index) {
                    element.classList.add(classNames.focused);
                }
            }
        }
        else {
            element.classList.remove(classNames.selected);
            element.removeAttribute('aria-selected');
            if (!isNullOrUndefined(this.activeIndex) && this.activeIndex === index &&
                !this.listViewInstance.curUL.querySelector(classNames.selected)) {
                element.classList.add(classNames.selected);
                element.setAttribute('aria-selected', 'true');
            }
        }
        if (this.listViewInstance.fields.groupBy) {
            if (this.listViewInstance.curViewDS[index].isHeader) {
                if (element.classList.contains(classNames.listItem)) {
                    element.classList.remove(classNames.listItem);
                    element.setAttribute('role', 'group');
                    element.classList.add(classNames.groupListItem);
                }
            }
            else {
                if (element.classList.contains(classNames.groupListItem)) {
                    element.classList.remove(classNames.groupListItem);
                    element.setAttribute('role', 'listitem');
                    element.classList.add(classNames.listItem);
                }
            }
        }
    };
    Virtualization.prototype.findDSAndIndexFromId = function (ds, fields) {
        var _this = this;
        var resultJSON = {};
        fields = this.listViewInstance.getElementUID(fields);
        if (!isNullOrUndefined(fields)) {
            ds.some(function (data, index) {
                if ((fields[_this.listViewInstance.fields.id] &&
                    // eslint-disable-next-line
                    fields[_this.listViewInstance.fields.id]
                        // eslint-disable-next-line
                        === (data[_this.listViewInstance.fields.id] && data[_this.listViewInstance.fields.id]) || fields === data)) {
                    resultJSON.index = index;
                    resultJSON.data = data;
                    return true;
                }
                else {
                    return false;
                }
            });
        }
        return resultJSON;
    };
    Virtualization.prototype.getSelectedItems = function () {
        var _this = this;
        if (!isNullOrUndefined(this.activeIndex) || (this.listViewInstance.showCheckBox && this.uiIndices.activeIndices.length)) {
            var dataCollection = [];
            var textCollection = [];
            if (typeof this.listViewInstance.dataSource[0] === 'string' ||
                typeof this.listViewInstance.dataSource[0] === 'number') {
                var curViewDS_1 = this.listViewInstance.curViewDS;
                if (this.listViewInstance.showCheckBox) {
                    var indices = this.uiIndices.activeIndices;
                    for (var i = 0; i < indices.length; i++) {
                        dataCollection.push(curViewDS_1[indices[i]]);
                    }
                    return {
                        text: dataCollection,
                        // eslint-disable-next-line
                        data: dataCollection,
                        index: this.uiIndices.activeIndices.map(function (index) {
                            return _this.listViewInstance.dataSource.indexOf(curViewDS_1[index]);
                        })
                    };
                }
                else {
                    return {
                        text: curViewDS_1[this.activeIndex],
                        data: curViewDS_1[this.activeIndex],
                        index: this.listViewInstance.dataSource.indexOf(curViewDS_1[this.activeIndex])
                    };
                }
            }
            else {
                if (isBlazor() && this.listViewInstance.isServerRendered) {
                    var scrollDiff = Math.round(this.listViewInstance.element.scrollTop /
                        this.listViewInstance.liElementHeight) - 2;
                    if (scrollDiff < 0) {
                        scrollDiff = 0;
                    }
                    this.activeIndex += scrollDiff;
                }
                var curViewDS_2 = this.listViewInstance.curViewDS;
                var text = this.listViewInstance.fields.text;
                if (this.listViewInstance.showCheckBox) {
                    var indexArray = this.uiIndices.activeIndices;
                    for (var i = 0; i < indexArray.length; i++) {
                        textCollection.push(curViewDS_2[indexArray[i]][text]);
                        dataCollection.push(curViewDS_2[indexArray[i]]);
                    }
                    var dataSource_1 = this.listViewInstance.dataSource instanceof DataManager
                        ? curViewDS_2 : this.listViewInstance.dataSource;
                    return {
                        text: textCollection,
                        // eslint-disable-next-line
                        data: dataCollection,
                        index: this.uiIndices.activeIndices.map(function (index) {
                            return dataSource_1.indexOf(curViewDS_2[index]);
                        })
                    };
                }
                else {
                    var dataSource = this.listViewInstance.dataSource instanceof DataManager
                        ? curViewDS_2 : this.listViewInstance.dataSource;
                    return {
                        text: curViewDS_2[this.activeIndex][this.listViewInstance.fields.text],
                        // eslint-disable-next-line
                        data: curViewDS_2[this.activeIndex],
                        index: dataSource.indexOf(curViewDS_2[this.activeIndex])
                    };
                }
            }
        }
        else {
            return undefined;
        }
    };
    Virtualization.prototype.selectItem = function (obj) {
        var resutJSON = this.findDSAndIndexFromId(this.listViewInstance.curViewDS, obj);
        if (Object.keys(resutJSON).length) {
            var isSelected = this.activeIndex === resutJSON.index;
            var isChecked = void 0;
            this.activeIndex = resutJSON.index;
            if (this.listViewInstance.showCheckBox) {
                if (this.uiIndices.activeIndices.indexOf(resutJSON.index) === -1) {
                    isChecked = true;
                    this.uiIndices.activeIndices.push(resutJSON.index);
                }
                else {
                    isChecked = false;
                    this.uiIndices.activeIndices.splice(this.uiIndices.activeIndices.indexOf(resutJSON.index), 1);
                }
                if (this.listViewInstance.curUL.querySelector('.' + classNames.focused)) {
                    this.listViewInstance.curUL.querySelector('.' + classNames.focused).classList.remove(classNames.focused);
                }
            }
            if (this.listViewInstance.getLiFromObjOrElement(obj)) {
                if (this.listViewInstance.showCheckBox) {
                    this.listViewInstance.setCheckboxLI(this.listViewInstance.getLiFromObjOrElement(obj));
                }
                else {
                    this.listViewInstance.setSelectLI(this.listViewInstance.getLiFromObjOrElement(obj));
                }
            }
            else {
                var eventArgs = void 0;
                if (typeof this.listViewInstance.dataSource[0] === 'string' ||
                    typeof this.listViewInstance.dataSource[0] === 'number') {
                    eventArgs = {
                        text: this.listViewInstance.curViewDS[this.activeIndex],
                        data: this.listViewInstance.curViewDS[this.activeIndex],
                        index: this.activeIndex
                    };
                }
                else {
                    var curViewDS = this.listViewInstance.curViewDS;
                    eventArgs = {
                        text: curViewDS[this.activeIndex][this.listViewInstance.fields.text],
                        data: curViewDS[this.activeIndex],
                        index: this.activeIndex
                    };
                }
                if (this.listViewInstance.showCheckBox) {
                    eventArgs.isChecked = isChecked;
                    this.listViewInstance.trigger('select', eventArgs);
                }
                else if (!isSelected) {
                    this.listViewInstance.removeSelect();
                    this.listViewInstance.trigger('select', eventArgs);
                }
            }
        }
        else if (isNullOrUndefined(obj) && !this.listViewInstance.showCheckBox) {
            this.listViewInstance.removeSelect();
            this.activeIndex = undefined;
        }
        if (isBlazor() && this.listViewInstance.isServerRendered) {
            // eslint-disable-next-line
            var elementId = resutJSON.data[this.listViewInstance.fields.id];
            if (this.listViewInstance.showCheckBox) {
                if (!this.listViewInstance.previousSelectedItems.includes(elementId)) {
                    this.listViewInstance.previousSelectedItems.push(elementId);
                }
                else {
                    var indexPosition = this.listViewInstance.previousSelectedItems.indexOf(elementId);
                    if (indexPosition > -1) {
                        this.listViewInstance.previousSelectedItems.splice(indexPosition, 1);
                    }
                }
            }
            else {
                this.listViewInstance.previousSelectedItems[0] = elementId;
            }
            this.listViewInstance.removeActiveClass();
        }
    };
    Virtualization.prototype.enableItem = function (obj) {
        var resutJSON = this.findDSAndIndexFromId(this.listViewInstance.curViewDS, obj);
        if (isBlazor() && this.listViewInstance.isServerRendered) {
            // eslint-disable-next-line
            var itemId = resutJSON.data[this.listViewInstance.fields.id];
            if (!this.listViewInstance.enabledItems.includes(itemId)) {
                this.listViewInstance.enabledItems.push(itemId);
                this.listViewInstance.removeActiveClass();
            }
            if (this.listViewInstance.disabledItems.includes(itemId)) {
                var indexPosition = this.listViewInstance.disabledItems.indexOf(itemId);
                if (indexPosition > -1) {
                    this.listViewInstance.disabledItems.splice(indexPosition, 1);
                }
            }
        }
        else {
            if (Object.keys(resutJSON).length) {
                this.uiIndices.disabledItemIndices.splice(this.uiIndices.disabledItemIndices.indexOf(resutJSON.index), 1);
            }
        }
    };
    Virtualization.prototype.disableItem = function (obj) {
        var resutJSON = this.findDSAndIndexFromId(this.listViewInstance.curViewDS, obj);
        if (isBlazor() && this.listViewInstance.isServerRendered) {
            // eslint-disable-next-line
            var liElementId = resutJSON.data[this.listViewInstance.fields.id];
            if (!this.listViewInstance.disabledItems.includes(liElementId)) {
                this.listViewInstance.disabledItems.push(liElementId);
                this.listViewInstance.removeActiveClass();
            }
            if (this.listViewInstance.enabledItems.includes(liElementId)) {
                var indexPosition = this.listViewInstance.enabledItems.indexOf(liElementId);
                if (indexPosition > -1) {
                    this.listViewInstance.enabledItems.splice(indexPosition, 1);
                }
            }
        }
        else {
            if (Object.keys(resutJSON).length && this.uiIndices.disabledItemIndices.indexOf(resutJSON.index) === -1) {
                this.uiIndices.disabledItemIndices.push(resutJSON.index);
            }
        }
    };
    Virtualization.prototype.showItem = function (obj) {
        var resutJSON = this.findDSAndIndexFromId(this.listViewInstance.curViewDS, obj);
        if (isBlazor() && this.listViewInstance.isServerRendered) {
            // eslint-disable-next-line
            var hiddenElementId = resutJSON.data[this.listViewInstance.fields.id];
            if (this.listViewInstance.hiddenItems.includes(hiddenElementId)) {
                var indexPosition = this.listViewInstance.hiddenItems.indexOf(hiddenElementId);
                if (indexPosition > -1) {
                    this.listViewInstance.previousSelectedItems.splice(indexPosition, 1);
                    this.listViewInstance.removeActiveClass();
                }
            }
        }
        else {
            if (Object.keys(resutJSON).length) {
                this.uiIndices.hiddenItemIndices.splice(this.uiIndices.hiddenItemIndices.indexOf(resutJSON.index), 1);
            }
        }
    };
    Virtualization.prototype.hideItem = function (obj) {
        var resutJSON = this.findDSAndIndexFromId(this.listViewInstance.curViewDS, obj);
        if (isBlazor() && this.listViewInstance.isServerRendered) {
            // eslint-disable-next-line
            var elementId = resutJSON.data[this.listViewInstance.fields.id];
            if (!this.listViewInstance.hiddenItems.includes(elementId)) {
                this.listViewInstance.hiddenItems.push(elementId);
                this.listViewInstance.removeActiveClass();
            }
        }
        else {
            if (Object.keys(resutJSON).length && this.uiIndices.hiddenItemIndices.indexOf(resutJSON.index) === -1) {
                this.uiIndices.hiddenItemIndices.push(resutJSON.index);
            }
        }
    };
    Virtualization.prototype.removeItem = function (obj) {
        var dataSource;
        var curViewDS = this.listViewInstance.curViewDS;
        var resutJSON = this.findDSAndIndexFromId(curViewDS, obj);
        if (isBlazor() && this.listViewInstance.isServerRendered) {
            if (resutJSON.index !== undefined) {
                this.listViewInstance.interopAdaptor.invokeMethodAsync('RemoveItemPosition', resutJSON.index);
            }
        }
        if (Object.keys(resutJSON).length) {
            dataSource = resutJSON.data;
            if (curViewDS[resutJSON.index - 1] &&
                curViewDS[resutJSON.index - 1].isHeader &&
                (curViewDS[resutJSON.index - 1])
                    .items.length === 1) {
                this.removeUiItem(resutJSON.index - 1);
                this.removeUiItem(resutJSON.index - 1);
            }
            else {
                if (!(isBlazor() && this.listViewInstance.isServerRendered)) {
                    this.removeUiItem(resutJSON.index);
                }
            }
        }
        var listDataSource = this.listViewInstance.dataSource instanceof DataManager
            ? this.listViewInstance.localData : this.listViewInstance.dataSource;
        var index = listDataSource.indexOf(dataSource);
        if (index !== -1) {
            listDataSource.splice(index, 1);
            this.listViewInstance.setViewDataSource(listDataSource);
        }
        // recollect all the list item into collection
        this.listViewInstance.liCollection =
            this.listViewInstance.curUL.querySelectorAll('li');
    };
    // eslint-disable-next-line
    Virtualization.prototype.setCheckboxLI = function (li, e) {
        if (isBlazor() && this.listViewInstance.isServerRendered) {
            this.uiFirstIndex = Math.round(this.listViewInstance.element.scrollTop / 36) - 4;
            if (this.uiFirstIndex < 0) {
                this.uiFirstIndex = 0;
            }
        }
        var index = Array.prototype.indexOf.call(this.listViewInstance.curUL.querySelectorAll('li'), li) + this.uiFirstIndex;
        this.activeIndex = Array.prototype.indexOf.call(this.listViewInstance.curUL.querySelectorAll('li'), li) + this.uiFirstIndex;
        if (li.classList.contains(classNames.selected)) {
            if (this.uiIndices.activeIndices.indexOf(index) === -1) {
                this.uiIndices.activeIndices.push(index);
            }
        }
        else {
            this.uiIndices.activeIndices.splice(this.uiIndices.activeIndices.indexOf(index), 1);
        }
    };
    // eslint-disable-next-line
    Virtualization.prototype.setSelectLI = function (li, e) {
        this.activeIndex = Array.prototype.indexOf.call(this.listViewInstance.curUL.querySelectorAll('li'), li) + this.uiFirstIndex;
    };
    Virtualization.prototype.checkedItem = function (checked) {
        if (checked) {
            this.uiIndices.activeIndices = [];
            this.activeIndex = undefined;
            var data = this.listViewInstance.curViewDS;
            for (var index = 0; index < data.length; index++) {
                if (!data[index].isHeader) {
                    this.uiIndices.activeIndices.push(index);
                }
            }
        }
        else {
            this.activeIndex = undefined;
            this.uiIndices.activeIndices = [];
        }
    };
    Virtualization.prototype.addUiItem = function (index) {
        // virtually new add list item based on the scollbar position
        // if the scroll bar is at the top, just pretend the new item has been added since no UI
        // change is required for the item that has been added at last but when scroll bar is at the bottom
        // just detach top and inject into bottom to mimic new item is added
        var curViewDs = this.listViewInstance.curViewDS;
        this.changeUiIndices(index, true);
        if (this.activeIndex && this.activeIndex >= index) {
            this.activeIndex++;
        }
        if (this.listViewInstance.showCheckBox &&
            curViewDs[index][this.listViewInstance.fields.isChecked]) {
            this.uiIndices.activeIndices.push(index);
        }
        if (!parseFloat(this.bottomElement.style.height) && !parseFloat(this.topElement.style.height)) {
            this.bottomElement.style.height = parseFloat(this.bottomElement.style.height) + this.listItemHeight + 'px';
        }
        if (parseFloat(this.bottomElement.style.height)) {
            var liItem = this.listViewInstance.curUL.lastElementChild.previousSibling;
            var target = this.listViewInstance.getLiFromObjOrElement(curViewDs[index + 1]) ||
                this.listViewInstance.getLiFromObjOrElement(curViewDs[index + 2]);
            if (target) {
                this.bottomElement.style.height = parseFloat(this.bottomElement.style.height) + this.listItemHeight + 'px';
                this.updateUI(liItem, index, target);
            }
        }
        else {
            var liItem = this.listViewInstance.curUL.firstElementChild.nextSibling;
            var target = void 0;
            if ((Object.keys(this.listViewInstance.curViewDS).length - 1) === index) {
                target = this.listViewInstance.curUL.lastElementChild;
            }
            else {
                target = this.listViewInstance.getLiFromObjOrElement(curViewDs[index + 1]) ||
                    this.listViewInstance.getLiFromObjOrElement(curViewDs[index + 2]);
            }
            this.topElement.style.height = parseFloat(this.topElement.style.height) + this.listItemHeight + 'px';
            this.uiFirstIndex++;
            this.uiLastIndex++;
            if (target) {
                this.updateUI(liItem, index, target);
                if (this.listViewInstance.isWindow === true) {
                    window.scrollTo(0, (pageYOffset + this.listItemHeight));
                }
                else {
                    this.listViewInstance.element.scrollTop += this.listItemHeight;
                }
            }
        }
        this.totalHeight += this.listItemHeight;
        this.listDiff = Math.round(parseFloat(this.topElement.style.height) / this.listItemHeight);
    };
    Virtualization.prototype.removeUiItem = function (index) {
        this.totalHeight -= this.listItemHeight;
        var curViewDS = this.listViewInstance.curViewDS[index];
        var liItem = this.listViewInstance.getLiFromObjOrElement(curViewDS);
        this.listViewInstance.curViewDS.splice(index, 1);
        if (this.activeIndex && this.activeIndex >= index) {
            this.activeIndex--;
        }
        if (liItem) {
            if (this.domItemCount > Object.keys(this.listViewInstance.curViewDS).length) {
                detach(liItem);
                this.domItemCount--;
                this.uiLastIndex--;
                this.totalHeight = 0;
            }
            else {
                if (liItem.classList.contains(classNames.disable)) {
                    liItem.classList.remove(classNames.disable);
                    this.uiIndices.disabledItemIndices.splice(this.uiIndices.disabledItemIndices.indexOf(index), 1);
                }
                if (liItem.style.display === 'none') {
                    liItem.style.display = '';
                    this.uiIndices.hiddenItemIndices.splice(this.uiIndices.hiddenItemIndices.indexOf(index), 1);
                }
                if (this.listViewInstance.showCheckBox && liItem.classList.contains(classNames.selected)) {
                    this.listViewInstance.removeSelect();
                    this.uiIndices.activeIndices.splice(this.uiIndices.activeIndices.indexOf(index), 1);
                    var checklistElement = liItem.querySelector('.' + classNames.checkboxWrapper);
                    checklistElement.removeAttribute('aria-checked');
                    checklistElement.firstElementChild.classList.remove(classNames.checked);
                    if (liItem.classList.contains(classNames.focused)) {
                        liItem.classList.remove(classNames.focused);
                        this.activeIndex = undefined;
                    }
                }
                else if (liItem.classList.contains(classNames.selected)) {
                    this.listViewInstance.removeSelect();
                    this.activeIndex = undefined;
                }
                if (!parseFloat(this.bottomElement.style.height) && !parseFloat(this.topElement.style.height)) {
                    this.updateUI(liItem, this.uiLastIndex, this.bottomElement);
                }
                else if (parseFloat(this.bottomElement.style.height)) {
                    this.bottomElement.style.height = parseFloat(this.bottomElement.style.height) - this.listItemHeight + 'px';
                    this.updateUI(liItem, this.uiLastIndex, this.bottomElement);
                }
                else {
                    this.topElement.style.height = parseFloat(this.topElement.style.height) - this.listItemHeight + 'px';
                    this.updateUI(liItem, (this.uiFirstIndex - 1), this.topElement.nextSibling);
                    this.uiLastIndex--;
                    this.uiFirstIndex--;
                }
            }
        }
        this.changeUiIndices(index, false);
        this.listDiff = Math.round(parseFloat(this.topElement.style.height) / this.listItemHeight);
    };
    Virtualization.prototype.changeUiIndices = function (index, increment) {
        var keys = Object.keys(this.uiIndices);
        for (var ind = 0; ind < keys.length; ind++) {
            this.uiIndices[keys[ind]] = this.uiIndices[keys[ind]].map(function (i) {
                if (i >= index) {
                    return increment ? ++i : --i;
                }
                else {
                    return i;
                }
            });
        }
    };
    Virtualization.prototype.addItem = function (data, fields, dataSource) {
        for (var i = 0; i < data.length; i++) {
            var currentItem = data[i];
            // push the given data to main data array
            dataSource.push(currentItem);
            // recalculate all the group data or other datasource related things
            this.listViewInstance.setViewDataSource(dataSource);
            // render list items for first time due to no datasource present earlier
            if (!this.domItemCount) {
                // fresh rendering for first time
                if ((this.listViewInstance.template || this.listViewInstance.groupTemplate) && !this.isNgTemplate()) {
                    this.listViewInstance.listBaseOption.template = null;
                    this.listViewInstance.listBaseOption.groupTemplate = null;
                    this.listViewInstance.listBaseOption.itemCreated = this.createUIItem.bind(this);
                }
                this.uiVirtualization();
                // when expected expected DOM count doesn't meet the condition we need to create and inject new item into DOM
            }
            else if (this.domItemCount < this.expectedDomItemCount) {
                var ds = this.listViewInstance.findItemFromDS(dataSource, fields);
                if (ds instanceof Array) {
                    if (this.listViewInstance.ulElement) {
                        var index = this.listViewInstance.curViewDS.indexOf(currentItem);
                        // inject new list item into DOM
                        this.createAndInjectNewItem(currentItem, index);
                        // check for group header item
                        var curViewDS = this.listViewInstance.curViewDS[index - 1];
                        if (curViewDS && curViewDS.isHeader && curViewDS.items.length === 1) {
                            // target group item index in datasource
                            --index;
                            // inject new group header into DOM for previously created list item
                            this.createAndInjectNewItem(curViewDS, index);
                        }
                    }
                    // recollect all the list item into collection
                    this.listViewInstance.liCollection =
                        this.listViewInstance.curUL.querySelectorAll('li');
                }
            }
            else {
                var index = this.listViewInstance.curViewDS.indexOf(currentItem);
                // virtually new add list item based on the scollbar position
                this.addUiItem(index);
                // check for group header item needs to be added
                var curViewDS = this.listViewInstance.curViewDS[index - 1];
                if (curViewDS && curViewDS.isHeader && curViewDS.items.length === 1) {
                    this.addUiItem(index - 1);
                }
            }
        }
    };
    Virtualization.prototype.createAndInjectNewItem = function (itemData, index) {
        // generate li item for given datasource
        var target;
        var li = ListBase.createListItemFromJson(this.listViewInstance.createElement, 
        // eslint-disable-next-line
        [itemData], this.listViewInstance.listBaseOption, null, null, this);
        // check for target element whether to insert before last item or group item
        if ((Object.keys(this.listViewInstance.curViewDS).length - 1) === index) {
            target = this.listViewInstance.curUL.lastElementChild;
        }
        else {
            // target group header's first child item to append its header
            target = this.listViewInstance.getLiFromObjOrElement(this.listViewInstance.curViewDS[index + 1]) ||
                this.listViewInstance.getLiFromObjOrElement(this.listViewInstance.curViewDS[index + 2]);
        }
        // insert before the target element
        this.listViewInstance.ulElement.insertBefore(li[0], target);
        // increment internal DOM count, last index count for new element
        this.domItemCount++;
        if (this.bottomElementHeight <= 0) {
            this.uiLastIndex++;
        }
        // recalculate the current item height, to avoid jumpy scroller
        this.refreshItemHeight();
    };
    Virtualization.prototype.createUIItem = function (args) {
        var virtualTemplate = this.listViewInstance.template;
        var template = this.listViewInstance.createElement('div');
        var commonTemplate = '<div class="e-text-content" role="presentation"> ' +
            '<span class="e-list-text"> ${' + this.listViewInstance.fields.text + '} </span></div>';
        if (this.listViewInstance.showCheckBox) {
            // eslint-disable-next-line
            this.listViewInstance.renderCheckbox(args);
            if ((!isNullOrUndefined(this.listViewInstance.virtualCheckBox)) &&
                (!isNullOrUndefined(this.listViewInstance.virtualCheckBox.outerHTML))) {
                var div = document.createElement('div');
                div.innerHTML = this.listViewInstance.template || commonTemplate;
                div.children[0].classList.add('e-checkbox');
                if (this.listViewInstance.checkBoxPosition === 'Left') {
                    div.children[0].classList.add('e-checkbox-left');
                }
                else {
                    div.children[0].classList.add('e-checkbox-right');
                }
                if (this.listViewInstance.checkBoxPosition === 'Left') {
                    div.children[0].insertBefore(this.listViewInstance.virtualCheckBox, div.childNodes[0].children[0]);
                }
                else {
                    div.children[0].appendChild(this.listViewInstance.virtualCheckBox);
                }
                this.listViewInstance.template = div.innerHTML;
            }
            template.innerHTML = this.listViewInstance.template;
            this.listViewInstance.template = virtualTemplate;
        }
        else {
            template.innerHTML = this.listViewInstance.template || commonTemplate;
        }
        // eslint-disable-next-line
        var templateElements = template.getElementsByTagName('*');
        var groupTemplate = this.listViewInstance.createElement('div');
        if (this.listViewInstance.fields.groupBy) {
            groupTemplate.innerHTML = this.listViewInstance.groupTemplate || commonTemplate;
        }
        // eslint-disable-next-line
        var groupTemplateElements = groupTemplate.getElementsByTagName('*');
        if (args.curData.isHeader) {
            this.headerData = args.curData;
        }
        this.templateData = args.curData.isHeader ? args.curData.items[0] :
            args.curData;
        args.item.innerHTML = '';
        args.item.context = { data: args.curData, nodes: { flatTemplateNodes: [], groupTemplateNodes: [] } };
        for (var i = 0; i < templateElements.length; i++) {
            this.compileTemplate(templateElements[i], args.item, false);
        }
        for (var i = 0; i < groupTemplateElements.length; i++) {
            this.compileTemplate(groupTemplateElements[i], args.item, true);
        }
        args.item.context.template = args.curData.isHeader ? template.firstElementChild :
            groupTemplate.firstElementChild;
        args.item.context.type = args.curData.isHeader ? 'flatList' : 'groupList';
        var element = args.curData.isHeader ? groupTemplate : template;
        args.item.insertBefore(element.firstElementChild, null);
    };
    Virtualization.prototype.compileTemplate = function (element, item, isHeader) {
        this.textProperty(element, item, isHeader);
        this.classProperty(element, item, isHeader);
        this.attributeProperty(element, item, isHeader);
    };
    Virtualization.prototype.onChange = function (newData, listElement) {
        listElement.context.data = newData;
        // eslint-disable-next-line max-len
        var groupTemplateNodes = listElement.context.nodes.groupTemplateNodes;
        // eslint-disable-next-line max-len
        var flatTemplateNodes = listElement.context.nodes.flatTemplateNodes;
        // eslint-disable-next-line
        if (!isNullOrUndefined(newData.isHeader) && newData.isHeader && listElement.context.type === 'groupList') {
            // eslint-disable-next-line
            var element = listElement.firstElementChild;
            detach(listElement.firstElementChild);
            listElement.insertBefore(listElement.context.template, null);
            listElement.context.template = element;
            listElement.context.type = 'flatList';
            for (var i = 0; i < groupTemplateNodes.length; i++) {
                // eslint-disable-next-line
                groupTemplateNodes[i].onChange(newData);
            }
        }
        else if (!newData.isHeader && listElement.context.type === 'flatList') {
            var element = listElement.firstElementChild;
            detach(listElement.firstElementChild);
            listElement.insertBefore(listElement.context.template, null);
            listElement.context.template = element;
            listElement.context.type = 'groupList';
            for (var i = 0; i < flatTemplateNodes.length; i++) {
                // eslint-disable-next-line
                flatTemplateNodes[i].onChange(newData);
            }
        }
        else if (!newData.isHeader) {
            for (var i = 0; i < flatTemplateNodes.length; i++) {
                // eslint-disable-next-line
                flatTemplateNodes[i].onChange(newData);
            }
        }
        else {
            for (var i = 0; i < groupTemplateNodes.length; i++) {
                // eslint-disable-next-line
                groupTemplateNodes[i].onChange(newData);
            }
        }
    };
    // eslint-disable-next-line
    Virtualization.prototype.updateContextData = function (listElement, node, isHeader) {
        if (isHeader) {
            listElement.context.nodes.groupTemplateNodes.push(node);
        }
        else {
            listElement.context.nodes.flatTemplateNodes.push(node);
        }
    };
    Virtualization.prototype.classProperty = function (element, listElement, isHeader) {
        var regex = new RegExp('\\${([^}]*)}', 'g');
        var resultantOutput = [];
        var regexMatch;
        while (regexMatch !== null) {
            var match = regex.exec(element.className);
            resultantOutput.push(match);
            regexMatch = match;
            if (regexMatch === null) {
                resultantOutput.pop();
            }
        }
        if (resultantOutput && resultantOutput.length) {
            var _loop_1 = function (i) {
                var classNameMatch = resultantOutput[i];
                // eslint-disable-next-line
                var classFunction;
                if (classNameMatch[1].indexOf('?') !== -1 && classNameMatch[1].indexOf(':') !== -1) {
                    // tslint:disable-next-line:no-function-constructor-with-string-args
                    classFunction = new Function('data', 'return ' + classNameMatch[1].replace(/\$/g, 'data.'));
                }
                else {
                    // tslint:disable-next-line:no-function-constructor-with-string-args
                    classFunction = new Function('data', 'return ' + 'data.' + classNameMatch[1]);
                }
                // eslint-disable-next-line
                var subNode = {};
                if (isHeader) {
                    subNode.bindedvalue = classFunction(this_1.headerData);
                }
                else {
                    subNode.bindedvalue = classFunction(this_1.templateData);
                }
                subNode.onChange = function (value) {
                    if (subNode.bindedvalue) {
                        removeClass([element], subNode.bindedvalue.split(' ').filter(function (css) { return css; }));
                    }
                    var newCss = classFunction(value);
                    if (newCss) {
                        addClass([element], (newCss).split(' ').filter(function (css) { return css; }));
                    }
                    subNode.bindedvalue = newCss;
                };
                var className = classNameMatch[0].split(' ');
                for (var i_1 = 0; i_1 < className.length; i_1++) {
                    element.classList.remove(className[i_1]);
                }
                if (subNode.bindedvalue) {
                    addClass([element], subNode.bindedvalue.split(' ').filter(function (css) { return css; }));
                }
                this_1.updateContextData(listElement, subNode, isHeader);
            };
            var this_1 = this;
            for (var i = 0; i < resultantOutput.length; i++) {
                _loop_1(i);
            }
        }
    };
    Virtualization.prototype.attributeProperty = function (element, listElement, isHeader) {
        var attributeNames = [];
        for (var i = 0; i < element.attributes.length; i++) {
            attributeNames.push(element.attributes[i].nodeName);
        }
        if (attributeNames.indexOf('class') !== -1) {
            attributeNames.splice(attributeNames.indexOf('class'), 1);
        }
        var _loop_2 = function (i) {
            var attributeName = attributeNames[i];
            var attrNameMatch = new RegExp('\\${([^}]*)}', 'g').exec(attributeName) || [];
            var attrValueMatch = new RegExp('\\${([^}]*)}', 'g').exec(element.getAttribute(attributeName))
                || [];
            // eslint-disable-next-line
            var attributeNameFunction;
            // eslint-disable-next-line
            var attributeValueFunction;
            if (attrNameMatch.length || attrValueMatch.length) {
                if (attrNameMatch[1]) {
                    // tslint:disable-next-line:no-function-constructor-with-string-args
                    attributeNameFunction = new Function('data', 'return ' + 'data.' + attrNameMatch[1]);
                }
                if (attrValueMatch[1]) {
                    if (attrValueMatch[1].indexOf('?') !== -1 && attrValueMatch[1].indexOf(':') !== -1) {
                        // tslint:disable-next-line:no-function-constructor-with-string-args
                        attributeValueFunction = new Function('data', 'return ' + attrValueMatch[1].replace(/\$/g, 'data.'));
                    }
                    else {
                        // tslint:disable-next-line:no-function-constructor-with-string-args
                        attributeValueFunction = new Function('data', 'return ' + 'data.' + attrValueMatch[1]);
                    }
                }
                // eslint-disable-next-line @typescript-eslint/ban-types
                var subNode_1 = {};
                if (isHeader) {
                    subNode_1.bindedvalue = [attrNameMatch[1] === undefined ? undefined : attributeNameFunction(this_2.headerData),
                        attrValueMatch[1] === undefined ? undefined : attributeValueFunction(this_2.headerData)];
                }
                else {
                    subNode_1.bindedvalue = [attrNameMatch[1] === undefined ? undefined : attributeNameFunction(this_2.templateData),
                        attrValueMatch[1] === undefined ? undefined : attributeValueFunction(this_2.templateData)];
                }
                subNode_1.attrName = subNode_1.bindedvalue[0] === undefined ?
                    attributeName : subNode_1.bindedvalue[0];
                subNode_1.onChange = function (value) {
                    var bindedvalue = subNode_1.bindedvalue[1] === undefined ?
                        element.getAttribute(subNode_1.attrName) : attributeValueFunction(value);
                    element.removeAttribute(subNode_1.attrName);
                    subNode_1.attrName = subNode_1.bindedvalue[0] === undefined ? subNode_1.attrName : attributeNameFunction(value);
                    element.setAttribute(subNode_1.attrName, bindedvalue);
                    subNode_1.bindedvalue = [subNode_1.bindedvalue[0] === undefined ? undefined : attributeNameFunction(value),
                        subNode_1.bindedvalue[1] === undefined ? undefined : attributeValueFunction(value)];
                };
                var attributeValue = subNode_1.bindedvalue[1] === undefined ? element.getAttribute(attributeName) :
                    subNode_1.bindedvalue[1];
                element.removeAttribute(attributeName);
                element.setAttribute(subNode_1.attrName, attributeValue);
                this_2.updateContextData(listElement, subNode_1, isHeader);
            }
        };
        var this_2 = this;
        for (var i = 0; i < attributeNames.length; i++) {
            _loop_2(i);
        }
    };
    Virtualization.prototype.textProperty = function (element, listElement, isHeader) {
        var regex = new RegExp('\\${([^}]*)}', 'g');
        var resultantOutput = [];
        var regexMatch;
        while (regexMatch !== null) {
            var match = regex.exec(element.innerText);
            resultantOutput.push(match);
            regexMatch = match;
            if (regexMatch === null) {
                resultantOutput.pop();
            }
        }
        var isChildHasTextContent = Array.prototype.some.call(element.children, function (element) {
            if (new RegExp('\\${([^}]*)}', 'g').exec(element.innerText)) {
                return true;
            }
            else {
                return false;
            }
        });
        if (resultantOutput && resultantOutput.length && !isChildHasTextContent) {
            var _loop_3 = function (i) {
                var textPropertyMatch = resultantOutput[i];
                // eslint-disable-next-line
                var subNode = {};
                // eslint-disable-next-line
                var textFunction;
                if (textPropertyMatch[1].indexOf('?') !== -1 && textPropertyMatch[1].indexOf(':') !== -1) {
                    // tslint:disable-next-line:no-function-constructor-with-string-args
                    textFunction = new Function('data', 'return ' + textPropertyMatch[1].replace(/\$/g, 'data.'));
                }
                else {
                    // tslint:disable-next-line:no-function-constructor-with-string-args
                    textFunction = new Function('data', 'return ' + 'data.' + textPropertyMatch[1]);
                }
                if (isHeader) {
                    subNode.bindedvalue = textFunction(this_3.headerData);
                }
                else {
                    subNode.bindedvalue = textFunction(this_3.templateData);
                }
                subNode.onChange = function (value) {
                    element.innerText = element.innerText.replace(subNode.bindedvalue, textFunction(value));
                    subNode.bindedvalue = textFunction(value);
                };
                element.innerText = element.innerText.replace(textPropertyMatch[0], subNode.bindedvalue);
                this_3.updateContextData(listElement, subNode, isHeader);
            };
            var this_3 = this;
            for (var i = 0; i < resultantOutput.length; i++) {
                _loop_3(i);
            }
        }
    };
    Virtualization.prototype.reRenderUiVirtualization = function () {
        this.wireScrollEvent(true);
        if (this.listViewInstance.contentContainer) {
            detach(this.listViewInstance.contentContainer);
        }
        this.listViewInstance.preRender();
        // resetting the dom count to 0, to avoid edge case of dataSource suddenly becoming zero
        // and then manually adding item using addItem API
        this.domItemCount = 0;
        this.listViewInstance.header();
        this.listViewInstance.setLocalData();
    };
    Virtualization.prototype.updateUI = function (element, index, targetElement) {
        // eslint-disable-next-line @typescript-eslint/ban-types
        var onChange = this.isNgTemplate() ? this.onNgChange : this.onChange;
        if (this.listViewInstance.template || this.listViewInstance.groupTemplate) {
            var curViewDS = this.listViewInstance.curViewDS[index];
            // eslint-disable-next-line
            element.dataset.uid = (curViewDS[this.listViewInstance.fields.id]) ?
                // eslint-disable-next-line
                (curViewDS[this.listViewInstance.fields.id]) : ListBase.generateId();
            onChange(curViewDS, element, this);
        }
        else {
            this.updateUiContent(element, index);
        }
        this.changeElementAttributes(element, index);
        if (targetElement) {
            this.listViewInstance.ulElement.insertBefore(element, targetElement);
        }
    };
    Virtualization.prototype.onNgChange = function (newData, listElement, virtualThis) {
        // compile given target element with template for new data
        // eslint-disable-next-line
        var templateCompiler = compile(virtualThis.listViewInstance.template);
        var resultElement = templateCompiler(newData);
        while (listElement.lastChild) {
            listElement.removeChild(listElement.lastChild);
        }
        listElement.appendChild(resultElement[0]);
    };
    Virtualization.prototype.getModuleName = function () {
        return 'virtualization';
    };
    Virtualization.prototype.destroy = function () {
        this.wireScrollEvent(true);
    };
    return Virtualization;
}());
export { Virtualization };
