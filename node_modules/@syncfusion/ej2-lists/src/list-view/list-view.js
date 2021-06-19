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
import { merge, formatUnit, isNullOrUndefined, append, detach, isBlazor, extend } from '@syncfusion/ej2-base';
import { attributes, addClass, removeClass, prepend, closest, remove } from '@syncfusion/ej2-base';
import { Component, EventHandler, Property, Complex, Event } from '@syncfusion/ej2-base';
import { NotifyPropertyChanges, ChildProperty } from '@syncfusion/ej2-base';
import { compile, SanitizeHtmlHelper } from '@syncfusion/ej2-base';
import { Animation, rippleEffect, Touch } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { createCheckBox } from '@syncfusion/ej2-buttons';
import { ListBase, getFieldValues } from '../common/list-base';
import { updateBlazorTemplate, resetBlazorTemplate, blazorTemplates } from '@syncfusion/ej2-base';
// Effect Configuration Effect[] =  [fromViewBackward,fromViewForward,toViewBackward,toviewForward];
var effectsConfig = {
    'None': [],
    'SlideLeft': ['SlideRightOut', 'SlideLeftOut', 'SlideLeftIn', 'SlideRightIn'],
    'SlideDown': ['SlideTopOut', 'SlideBottomOut', 'SlideBottomIn', 'SlideTopIn'],
    'Zoom': ['FadeOut', 'FadeZoomOut', 'FadeZoomIn', 'FadeIn'],
    'Fade': ['FadeOut', 'FadeOut', 'FadeIn', 'FadeIn']
};
var effectsRTLConfig = {
    'None': [],
    'SlideLeft': ['SlideLeftOut', 'SlideRightOut', 'SlideRightIn', 'SlideLeftIn'],
    'SlideDown': ['SlideBottomOut', 'SlideTopOut', 'SlideTopIn', 'SlideBottomIn'],
    'Zoom': ['FadeZoomOut', 'FadeOut', 'FadeIn', 'FadeZoomIn'],
    'Fade': ['FadeOut', 'FadeOut', 'FadeIn', 'FadeIn']
};
// don't use space in classnames.
export var classNames = {
    root: 'e-listview',
    hover: 'e-hover',
    selected: 'e-active',
    focused: 'e-focused',
    parentItem: 'e-list-parent',
    listItem: 'e-list-item',
    listIcon: 'e-list-icon',
    textContent: 'e-text-content',
    listItemText: 'e-list-text',
    groupListItem: 'e-list-group-item',
    hasChild: 'e-has-child',
    view: 'e-view',
    header: 'e-list-header',
    headerText: 'e-headertext',
    headerTemplateText: 'e-headertemplate-text',
    text: 'e-text',
    disable: 'e-disabled',
    content: 'e-content',
    icon: 'e-icons',
    backIcon: 'e-icon-back',
    checkboxWrapper: 'e-checkbox-wrapper',
    checkbox: 'e-checkbox',
    checked: 'e-check',
    checklist: 'e-checklist',
    checkboxIcon: 'e-frame',
    checkboxRight: 'e-checkbox-right',
    checkboxLeft: 'e-checkbox-left',
    listviewCheckbox: 'e-listview-checkbox',
    itemCheckList: 'e-checklist',
    virtualElementContainer: 'e-list-virtualcontainer'
};
var LISTVIEW_TEMPLATE_PROPERTY = 'Template';
var LISTVIEW_GROUPTEMPLATE_PROPERTY = 'GroupTemplate';
var LISTVIEW_HEADERTEMPLATE_PROPERTY = 'HeaderTemplate';
var swipeVelocity = 0.5;
/**
 * Represents the field settings of the ListView.
 */
var FieldSettings = /** @class */ (function (_super) {
    __extends(FieldSettings, _super);
    function FieldSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property('id')
    ], FieldSettings.prototype, "id", void 0);
    __decorate([
        Property('text')
    ], FieldSettings.prototype, "text", void 0);
    __decorate([
        Property('isChecked')
    ], FieldSettings.prototype, "isChecked", void 0);
    __decorate([
        Property('isVisible')
    ], FieldSettings.prototype, "isVisible", void 0);
    __decorate([
        Property('enabled')
    ], FieldSettings.prototype, "enabled", void 0);
    __decorate([
        Property('iconCss')
    ], FieldSettings.prototype, "iconCss", void 0);
    __decorate([
        Property('child')
    ], FieldSettings.prototype, "child", void 0);
    __decorate([
        Property('tooltip')
    ], FieldSettings.prototype, "tooltip", void 0);
    __decorate([
        Property('groupBy')
    ], FieldSettings.prototype, "groupBy", void 0);
    __decorate([
        Property('text')
    ], FieldSettings.prototype, "sortBy", void 0);
    __decorate([
        Property('htmlAttributes')
    ], FieldSettings.prototype, "htmlAttributes", void 0);
    __decorate([
        Property('tableName')
    ], FieldSettings.prototype, "tableName", void 0);
    return FieldSettings;
}(ChildProperty));
export { FieldSettings };
/**
 * Represents the EJ2 ListView control.
 * ```html
 * <div id="listview">
 * <ul>
 * <li>Favorite</li>
 * <li>Documents</li>
 * <li>Downloads</li>
 * </ul>
 * </div>
 * ```
 * ```typescript
 *   var listviewObject = new ListView({});
 *   listviewObject.appendTo("#listview");
 * ```
 */
var ListView = /** @class */ (function (_super) {
    __extends(ListView, _super);
    /**
     * Constructor for creating the widget
     *
     * @param options
     *
     * @param element
     */
    function ListView(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.itemReRender = false;
        _this.previousSelectedItems = [];
        _this.hiddenItems = [];
        _this.enabledItems = [];
        _this.disabledItems = [];
        return _this;
    }
    /**
     * @param newProp
     *
     * @param oldProp
     *
     * @private
     */
    ListView.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'htmlAttributes':
                    this.setHTMLAttribute();
                    break;
                case 'cssClass':
                    this.setCSSClass(oldProp.cssClass);
                    break;
                case 'enable':
                    this.setEnable();
                    break;
                case 'width':
                case 'height':
                    this.setSize();
                    break;
                case 'enableRtl':
                    this.setEnableRTL();
                    break;
                case 'fields':
                    // eslint-disable-next-line
                    this.listBaseOption.fields = this.fields.properties;
                    if (this.enableVirtualization) {
                        if (!(this.isServerRendered && isBlazor())) {
                            this.virtualizationModule.reRenderUiVirtualization();
                        }
                    }
                    else {
                        if (isBlazor() && this.isServerRendered && !this.enableVirtualization) {
                            this.itemReRender = true;
                        }
                        this.reRender();
                    }
                    break;
                case 'headerTitle':
                    if (!this.curDSLevel.length) {
                        this.header(this.headerTitle, false, 'header');
                    }
                    break;
                case 'query':
                    if (this.enableVirtualization) {
                        if (!(isBlazor() && this.isServerRendered)) {
                            this.virtualizationModule.reRenderUiVirtualization();
                        }
                    }
                    else {
                        if (isBlazor() && this.isServerRendered && !this.enableVirtualization) {
                            this.itemReRender = true;
                        }
                        this.reRender();
                    }
                    break;
                case 'showHeader':
                    this.header(this.headerTitle, false, 'header');
                    break;
                case 'enableVirtualization':
                    if (!isNullOrUndefined(this.contentContainer)) {
                        detach(this.contentContainer);
                    }
                    this.refresh();
                    break;
                case 'showCheckBox':
                case 'checkBoxPosition':
                    if (!isBlazor() || !this.isServerRendered) {
                        if (this.enableVirtualization) {
                            this.virtualizationModule.reRenderUiVirtualization();
                        }
                        else {
                            this.setCheckbox();
                        }
                    }
                    break;
                case 'dataSource':
                    if (this.enableVirtualization) {
                        if (!(this.isServerRendered && isBlazor())) {
                            this.virtualizationModule.reRenderUiVirtualization();
                        }
                    }
                    else {
                        if (isBlazor() && this.isServerRendered && !this.enableVirtualization) {
                            this.itemReRender = true;
                        }
                        this.reRender();
                    }
                    break;
                case 'sortOrder':
                case 'template':
                    if (!this.enableVirtualization) {
                        if (!(this.isServerRendered && isBlazor())) {
                            this.refresh();
                        }
                    }
                    break;
                case 'showIcon':
                    if (isBlazor() && this.isServerRendered) {
                        // eslint-disable-next-line
                        this.interopAdaptor.invokeMethodAsync('ItemSorting');
                    }
                    else {
                        if (this.enableVirtualization) {
                            this.virtualizationModule.reRenderUiVirtualization();
                        }
                        else {
                            this.listBaseOption.showIcon = this.showIcon;
                            this.curViewDS = this.getSubDS();
                            this.resetCurrentList();
                        }
                    }
                    break;
                default:
                    break;
            }
        }
    };
    // Model Changes
    ListView.prototype.setHTMLAttribute = function () {
        if (Object.keys(this.htmlAttributes).length) {
            attributes(this.element, this.htmlAttributes);
        }
    };
    ListView.prototype.setCSSClass = function (oldCSSClass) {
        if (this.cssClass) {
            addClass([this.element], this.cssClass.split(' ').filter(function (css) { return css; }));
        }
        if (oldCSSClass) {
            removeClass([this.element], oldCSSClass.split(' ').filter(function (css) { return css; }));
        }
    };
    ListView.prototype.setSize = function () {
        this.element.style.height = formatUnit(this.height);
        this.element.style.width = formatUnit(this.width);
        this.isWindow = this.element.clientHeight ? false : true;
    };
    ListView.prototype.setEnable = function () {
        this.enableElement(this.element, this.enable);
    };
    ListView.prototype.setEnableRTL = function () {
        if (this.enableRtl) {
            this.element.classList.add('e-rtl');
        }
        else {
            this.element.classList.remove('e-rtl');
        }
    };
    ListView.prototype.enableElement = function (element, isEnabled) {
        if (isEnabled) {
            element.classList.remove(classNames.disable);
        }
        else {
            element.classList.add(classNames.disable);
        }
    };
    // Support Component Functions
    ListView.prototype.header = function (text, showBack, prop) {
        if (isBlazor() && this.isServerRendered) {
            var args = { HeaderText: text, BackButton: showBack };
            // eslint-disable-next-line
            this.interopAdaptor.invokeMethodAsync('HeaderTitle', args);
        }
        else {
            if (this.headerEle === undefined && this.showHeader) {
                if (this.enableHtmlSanitizer) {
                    this.setProperties({ headerTitle: SanitizeHtmlHelper.sanitize(this.headerTitle) }, true);
                }
                this.headerEle = this.createElement('div', { className: classNames.header });
                var innerHeaderEle = this.createElement('span', { className: classNames.headerText, innerHTML: this.headerTitle });
                var textEle = this.createElement('div', { className: classNames.text, innerHTML: innerHeaderEle.outerHTML });
                var hedBackButton = this.createElement('div', {
                    className: classNames.icon + ' ' + classNames.backIcon + ' e-but-back',
                    attrs: { style: 'display:none;' }
                });
                this.headerEle.appendChild(hedBackButton);
                this.headerEle.appendChild(textEle);
                if (this.headerTemplate) {
                    // eslint-disable-next-line
                    var compiledString = compile(this.headerTemplate);
                    var headerTemplateEle = this.createElement('div', { className: classNames.headerTemplateText });
                    // eslint-disable-next-line
                    var compiledElement = compiledString({}, this, prop, this.LISTVIEW_HEADERTEMPLATE_ID, null, null, this.headerEle);
                    if (compiledElement) {
                        append(compiledElement, headerTemplateEle);
                    }
                    append([headerTemplateEle], this.headerEle);
                    this.updateBlazorTemplates(false, true, true);
                    // eslint-disable-next-line
                    if (this.isReact) {
                        this.renderReactTemplates();
                    }
                }
                if (this.headerTemplate && this.headerTitle) {
                    textEle.classList.add('header');
                }
                this.element.classList.add('e-has-header');
                prepend([this.headerEle], this.element);
            }
            else if (this.headerEle) {
                if (this.showHeader) {
                    this.headerEle.style.display = '';
                    var textEle = this.headerEle.querySelector('.' + classNames.headerText);
                    var hedBackButton = this.headerEle.querySelector('.' + classNames.backIcon);
                    if (this.enableHtmlSanitizer) {
                        text = SanitizeHtmlHelper.sanitize(text);
                    }
                    textEle.innerHTML = text;
                    if (this.headerTemplate && showBack) {
                        textEle.parentElement.classList.remove('header');
                        this.headerEle.querySelector('.' + classNames.headerTemplateText).classList.add('nested-header');
                    }
                    if (this.headerTemplate && !showBack) {
                        textEle.parentElement.classList.add('header');
                        this.headerEle.querySelector('.' + classNames.headerTemplateText).classList.remove('nested-header');
                        this.headerEle.querySelector('.' + classNames.headerTemplateText).classList.add('header');
                    }
                    if (showBack === true) {
                        hedBackButton.style.display = '';
                    }
                    else {
                        hedBackButton.style.display = 'none';
                    }
                }
                else {
                    this.headerEle.style.display = 'none';
                }
            }
        }
    };
    // Animation Related Functions
    ListView.prototype.switchView = function (fromView, toView, reverse) {
        var _this = this;
        if (fromView && toView) {
            var fPos_1 = fromView.style.position;
            var overflow_1 = (this.element.style.overflow !== 'hidden') ? this.element.style.overflow : '';
            fromView.style.position = 'absolute';
            fromView.classList.add('e-view');
            var anim = void 0;
            var duration = this.animation.duration;
            if (this.animation.effect) {
                anim = (this.enableRtl ? effectsRTLConfig[this.animation.effect] : effectsConfig[this.animation.effect]);
            }
            else {
                var slideLeft = 'SlideLeft';
                anim = effectsConfig[slideLeft];
                reverse = this.enableRtl;
                duration = 0;
            }
            this.element.style.overflow = 'hidden';
            this.aniObj.animate(fromView, {
                name: (reverse === true ? anim[0] : anim[1]),
                duration: duration,
                timingFunction: this.animation.easing,
                // eslint-disable-next-line
                end: function (model) {
                    fromView.style.display = 'none';
                    _this.element.style.overflow = overflow_1;
                    fromView.style.position = fPos_1;
                    fromView.classList.remove('e-view');
                }
            });
            toView.style.display = '';
            this.aniObj.animate(toView, {
                name: (reverse === true ? anim[2] : anim[3]),
                duration: duration,
                timingFunction: this.animation.easing,
                end: function () {
                    _this.trigger('actionComplete');
                }
            });
            this.curUL = toView;
        }
    };
    ListView.prototype.preRender = function () {
        if (this.template) {
            try {
                if (document.querySelectorAll(this.template).length) {
                    this.template = document.querySelector(this.template).innerHTML.trim();
                }
            }
            catch (e) {
                compile(this.template);
                // eslint-disable-next-line
                if (this.isReact) {
                    this.renderReactTemplates();
                }
            }
        }
        this.listBaseOption = {
            template: this.template,
            headerTemplate: this.headerTemplate,
            groupTemplate: this.groupTemplate, expandCollapse: true, listClass: '',
            ariaAttributes: {
                itemRole: 'option', listRole: 'presentation', itemText: '',
                groupItemRole: 'group', wrapperRole: 'presentation'
            },
            // eslint-disable-next-line
            fields: (this.fields.properties),
            sortOrder: this.sortOrder,
            showIcon: this.showIcon,
            itemCreated: this.renderCheckbox.bind(this),
            templateID: "" + this.element.id + LISTVIEW_TEMPLATE_PROPERTY,
            groupTemplateID: "" + this.element.id + LISTVIEW_GROUPTEMPLATE_PROPERTY,
            enableHtmlSanitizer: this.enableHtmlSanitizer,
            removeBlazorID: true
        };
        this.initialization();
    };
    ListView.prototype.updateLiElementHeight = function () {
        var liContainer = this.element.querySelector('.' + classNames.virtualElementContainer);
        if (liContainer.children[0]) {
            this.liElementHeight = liContainer.children[0].getBoundingClientRect().height;
            // eslint-disable-next-line
            this.interopAdaptor.invokeMethodAsync('LiElementHeight', this.liElementHeight);
        }
    };
    ListView.prototype.initialization = function () {
        if (isBlazor() && this.isServerRendered && this.enableVirtualization) {
            var ulContainer = this.element.querySelector('.' + classNames.virtualElementContainer);
            if (ulContainer !== null) {
                if (this.height === '') {
                    // eslint-disable-next-line
                    this.interopAdaptor.invokeMethodAsync('SetComponentHeight', window.innerHeight);
                    this.isWindow = true;
                    ulContainer.scrollIntoView();
                }
                if (this.height.toString().indexOf('%') !== -1) {
                    // eslint-disable-next-line
                    this.interopAdaptor.invokeMethodAsync('SetContainerHeight', this.element.getBoundingClientRect().height.toString());
                }
                if (ulContainer.children[0]) {
                    this.liElementHeight = ulContainer.children[0].getBoundingClientRect().height;
                    // eslint-disable-next-line
                    this.interopAdaptor.invokeMethodAsync('LiElementHeight', this.liElementHeight);
                }
            }
        }
        this.curDSLevel = [];
        this.animateOptions = {};
        this.curViewDS = [];
        this.currentLiElements = [];
        this.isNestedList = false;
        this.selectedData = [];
        this.selectedId = [];
        this.LISTVIEW_TEMPLATE_ID = "" + this.element.id + LISTVIEW_TEMPLATE_PROPERTY;
        this.LISTVIEW_GROUPTEMPLATE_ID = "" + this.element.id + LISTVIEW_GROUPTEMPLATE_PROPERTY;
        this.LISTVIEW_HEADERTEMPLATE_ID = "" + this.element.id + LISTVIEW_HEADERTEMPLATE_PROPERTY;
        this.aniObj = new Animation(this.animateOptions);
        this.removeElement(this.curUL);
        this.removeElement(this.ulElement);
        this.removeElement(this.headerEle);
        this.removeElement(this.contentContainer);
        // eslint-disable-next-line
        if (this.isReact) {
            this.clearTemplate();
        }
        this.curUL = this.ulElement = this.liCollection = this.headerEle = this.contentContainer = undefined;
    };
    ListView.prototype.renderCheckbox = function (args) {
        if (args.item.classList.contains(classNames.hasChild)) {
            this.isNestedList = true;
        }
        if (this.showCheckBox && this.isValidLI(args.item)) {
            var checkboxElement = void 0;
            var fieldData = void 0;
            // eslint-disable-next-line prefer-const
            checkboxElement = createCheckBox(this.createElement, false, {
                checked: false, enableRtl: this.enableRtl,
                cssClass: classNames.listviewCheckbox
            });
            checkboxElement.setAttribute('role', 'checkbox');
            var frameElement_1 = checkboxElement.querySelector('.' + classNames.checkboxIcon);
            args.item.classList.add(classNames.itemCheckList);
            args.item.firstElementChild.classList.add(classNames.checkbox);
            if (typeof this.dataSource[0] !== 'string' && typeof this.dataSource[0] !== 'number') {
                fieldData = getFieldValues(args.curData, this.listBaseOption.fields);
                if (fieldData[this.listBaseOption.fields.isChecked]) {
                    this.checkInternally(args, checkboxElement);
                }
            }
            else if (((typeof this.dataSource[0] === 'string' ||
                typeof this.dataSource[0] === 'number') && this.selectedData.indexOf(args.text) !== -1)) {
                this.checkInternally(args, checkboxElement);
            }
            checkboxElement.setAttribute('aria-checked', frameElement_1.classList.contains(classNames.checked) ? 'true' : 'false');
            if (this.checkBoxPosition === 'Left') {
                checkboxElement.classList.add(classNames.checkboxLeft);
                args.item.firstElementChild.classList.add(classNames.checkboxLeft);
                args.item.firstElementChild.insertBefore(checkboxElement, args.item.firstElementChild.childNodes[0]);
            }
            else {
                checkboxElement.classList.add(classNames.checkboxRight);
                args.item.firstElementChild.classList.add(classNames.checkboxRight);
                args.item.firstElementChild.appendChild(checkboxElement);
            }
            this.currentLiElements.push(args.item);
            if (this.checkBoxPosition === 'Left') {
                this.virtualCheckBox = args.item.firstElementChild.children[0];
            }
            else {
                this.virtualCheckBox = args.item.firstElementChild.lastElementChild;
            }
        }
    };
    ListView.prototype.checkInternally = function (args, checkboxElement) {
        args.item.classList.add(classNames.selected);
        args.item.setAttribute('aria-selected', 'true');
        checkboxElement.querySelector('.' + classNames.checkboxIcon).classList.add(classNames.checked);
        checkboxElement.setAttribute('aria-checked', 'true');
    };
    /**
     * Checks the specific list item by passing the unchecked fields as an argument to this method.
     *
     * @param  {Fields | HTMLElement | Element} item - It accepts Fields or HTML list element as an argument.
     */
    ListView.prototype.checkItem = function (item) {
        this.toggleCheckBase(item, true);
    };
    ListView.prototype.toggleCheckBase = function (item, checked) {
        if (this.showCheckBox) {
            var liElement = item;
            if (item instanceof Object && item.constructor !== HTMLLIElement) {
                liElement = this.getLiFromObjOrElement(item);
            }
            if (!isNullOrUndefined(liElement)) {
                var checkboxIcon = liElement.querySelector('.' + classNames.checkboxIcon);
                if (checked === true) {
                    liElement.classList.add(classNames.selected);
                }
                else {
                    liElement.classList.remove(classNames.selected);
                }
                liElement.setAttribute('aria-selected', checked ? 'true' : 'false');
                if (checked === true) {
                    checkboxIcon.classList.add(classNames.checked);
                }
                else {
                    checkboxIcon.classList.remove(classNames.checked);
                }
                checkboxIcon.parentElement.setAttribute('aria-checked', checked ? 'true' : 'false');
            }
            this.setSelectedItemData(liElement);
        }
    };
    /**
     * Uncheck the specific list item by passing the checked fields as an argument to this method.
     *
     * @param  {Fields | HTMLElement | Element} item - It accepts Fields or HTML list element as an argument.
     */
    ListView.prototype.uncheckItem = function (item) {
        this.toggleCheckBase(item, false);
    };
    /**
     * Checks all the unchecked items in the ListView.
     */
    ListView.prototype.checkAllItems = function () {
        this.toggleAllCheckBase(true);
    };
    /**
     * Uncheck all the checked items in ListView.
     */
    ListView.prototype.uncheckAllItems = function () {
        this.toggleAllCheckBase(false);
    };
    ListView.prototype.toggleAllCheckBase = function (checked) {
        if (this.showCheckBox) {
            for (var i = 0; i < this.liCollection.length; i++) {
                var checkIcon = this.liCollection[i].querySelector('.' + classNames.checkboxIcon);
                if (checkIcon) {
                    if (checked) {
                        if (!checkIcon.classList.contains(classNames.checked)) {
                            this.checkItem(this.liCollection[i]);
                        }
                    }
                    else {
                        if (checkIcon.classList.contains(classNames.checked)) {
                            this.uncheckItem(this.liCollection[i]);
                        }
                    }
                }
            }
            if (this.enableVirtualization) {
                this.virtualizationModule.checkedItem(checked);
            }
        }
    };
    ListView.prototype.setCheckbox = function () {
        if (this.showCheckBox) {
            var liCollection = Array.prototype.slice.call(this.element.querySelectorAll('.' + classNames.listItem));
            var args = {
                item: undefined, curData: undefined, dataSource: undefined, fields: undefined,
                options: undefined, text: ''
            };
            for (var i = 0; i < liCollection.length; i++) {
                var element = liCollection[i];
                args.item = element;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                args.curData = this.getItemData(element);
                if (element.querySelector('.' + classNames.checkboxWrapper)) {
                    this.removeElement(element.querySelector('.' + classNames.checkboxWrapper));
                }
                this.renderCheckbox(args);
                if (args.item.classList.contains(classNames.selected)) {
                    this.checkInternally(args, args.item.querySelector('.' + classNames.checkboxWrapper));
                }
            }
        }
        else {
            var liCollection = Array.prototype.slice.call(this.element.querySelectorAll('.' + classNames.itemCheckList));
            for (var i = 0; i < liCollection.length; i++) {
                var element = liCollection[i];
                element.classList.remove(classNames.selected);
                element.firstElementChild.classList.remove(classNames.checkbox);
                this.removeElement(element.querySelector('.' + classNames.checkboxWrapper));
            }
            if (this.selectedItems) {
                this.selectedItems.item.classList.add(classNames.selected);
            }
        }
    };
    /**
     * Refresh the height of the list item only on enabling the virtualization property.
     */
    ListView.prototype.refreshItemHeight = function () {
        if (this.virtualizationModule) {
            this.virtualizationModule.refreshItemHeight();
        }
    };
    ListView.prototype.clickHandler = function (e) {
        var target = e.target;
        var classList = target.classList;
        var closestElement;
        if (classList.contains(classNames.backIcon) || classList.contains(classNames.headerText)) {
            if (this.showCheckBox && this.curDSLevel[this.curDSLevel.length - 1]) {
                this.uncheckAllItems();
            }
            this.back();
        }
        else {
            var li = closest(target.parentNode, '.' + classNames.listItem);
            if (li === null) {
                li = target;
            }
            this.removeFocus();
            if (this.enable && this.showCheckBox && this.isValidLI(li)) {
                if (e.target.classList.contains(classNames.checkboxIcon)) {
                    li.classList.add(classNames.focused);
                    if (isNullOrUndefined(li.querySelector('.' + classNames.checked))) {
                        var args = {
                            curData: undefined, dataSource: undefined, fields: undefined, options: undefined,
                            text: undefined, item: li
                        };
                        this.checkInternally(args, args.item.querySelector('.' + classNames.checkboxWrapper));
                    }
                    else {
                        this.uncheckItem(li);
                        li.classList.add(classNames.focused);
                    }
                    if (this.enableVirtualization) {
                        this.virtualizationModule.setCheckboxLI(li, e);
                    }
                    if (e) {
                        var eventArgs = this.selectEventData(li, e);
                        var checkIcon = li.querySelector('.' + classNames.checkboxIcon);
                        merge(eventArgs, { isChecked: checkIcon.classList.contains(classNames.checked) });
                        this.trigger('select', eventArgs);
                    }
                }
                else if (li.classList.contains(classNames.hasChild)) {
                    this.removeHover();
                    this.removeSelect();
                    this.removeSelect(li);
                    this.setSelectLI(li, e);
                    li.classList.remove(classNames.selected);
                }
                else {
                    this.setCheckboxLI(li, e);
                }
            }
            else {
                this.setSelectLI(li, e);
            }
            closestElement = closest(e.target, 'li');
            if (!isNullOrUndefined(closestElement)) {
                if (closestElement.classList.contains('e-has-child') &&
                    !e.target.parentElement.classList.contains('e-listview-checkbox')) {
                    closestElement.classList.add(classNames.disable);
                }
            }
        }
        if (isBlazor() && this.isServerRendered && this.enableVirtualization) {
            var ulElementContainer = this.element.querySelector('.' + classNames.virtualElementContainer);
            if (ulElementContainer.querySelector('.e-active')) {
                // eslint-disable-next-line
                var selectedElements = ulElementContainer.querySelectorAll('.e-active');
                if (this.showCheckBox) {
                    for (var i = 0; i < selectedElements.length; i++) {
                        // eslint-disable-next-line
                        if (!this.previousSelectedItems.includes(selectedElements[i].getAttribute('data-uid'))) {
                            this.previousSelectedItems.push(selectedElements[i].getAttribute('data-uid'));
                        }
                    }
                }
                else {
                    this.previousSelectedItems[0] = (ulElementContainer.querySelector('.e-active').getAttribute('data-uid'));
                }
            }
            if (ulElementContainer.querySelector('.e-focused')) {
                // eslint-disable-next-line
                var focusElement = ulElementContainer.querySelector('.e-focused');
                if (!focusElement.classList.contains('e-active')) {
                    var focusElementId = focusElement.getAttribute('data-uid');
                    // eslint-disable-next-line
                    if (this.previousSelectedItems.includes(focusElementId)) {
                        var selectedElement1 = this.previousSelectedItems.slice(0, this.previousSelectedItems.indexOf(focusElementId));
                        var selectedElement2 = this.previousSelectedItems.
                            slice(this.previousSelectedItems.indexOf(focusElementId) + 1, this.previousSelectedItems.length);
                        this.previousSelectedItems = selectedElement1.concat(selectedElement2);
                    }
                }
            }
        }
    };
    ListView.prototype.removeElement = function (element) {
        return element && element.parentNode && element.parentNode.removeChild(element);
    };
    ListView.prototype.hoverHandler = function (e) {
        var curLi = closest(e.target.parentNode, '.' + classNames.listItem);
        this.setHoverLI(curLi);
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ListView.prototype.leaveHandler = function (e) {
        this.removeHover();
    };
    ListView.prototype.homeKeyHandler = function (e, end) {
        if (Object.keys(this.dataSource).length && this.curUL) {
            if (this.selectedItems) {
                (this.selectedItems.item).setAttribute('aria-selected', 'false');
            }
            var li = this.curUL.querySelectorAll('.' + classNames.listItem);
            var focusedElement = this.curUL.querySelector('.' + classNames.focused) ||
                this.curUL.querySelector('.' + classNames.selected);
            if (focusedElement) {
                focusedElement.classList.remove(classNames.focused);
                if (!this.showCheckBox) {
                    focusedElement.classList.remove(classNames.selected);
                }
            }
            var index = !end ? 0 : li.length - 1;
            if (li[index].classList.contains(classNames.hasChild) || this.showCheckBox) {
                li[index].classList.add(classNames.focused);
            }
            else {
                this.setSelectLI(li[index], e);
            }
            if (li[index]) {
                this.element.setAttribute('aria-activedescendant', li[index].id.toString());
            }
            else {
                this.element.removeAttribute('aria-activedescendant');
            }
        }
    };
    ListView.prototype.onArrowKeyDown = function (e, prev) {
        var siblingLI;
        var li;
        var hasChild = !isNullOrUndefined(this.curUL.querySelector('.' + classNames.hasChild)) ? true : false;
        if (hasChild || this.showCheckBox) {
            li = this.curUL.querySelector('.' + classNames.focused) || this.curUL.querySelector('.' + classNames.selected);
            siblingLI = ListBase.getSiblingLI(this.curUL.querySelectorAll('.' + classNames.listItem), li, prev);
            if (!isNullOrUndefined(siblingLI)) {
                if (li) {
                    li.classList.remove(classNames.focused);
                    if (!this.showCheckBox) {
                        li.classList.remove(classNames.selected);
                    }
                }
                if (siblingLI.classList.contains(classNames.hasChild) || this.showCheckBox) {
                    siblingLI.classList.add(classNames.focused);
                }
                else {
                    this.setSelectLI(siblingLI, e);
                }
            }
        }
        else {
            li = this.curUL.querySelector('.' + classNames.selected);
            siblingLI = ListBase.getSiblingLI(this.curUL.querySelectorAll('.' + classNames.listItem), li, prev);
            this.setSelectLI(siblingLI, e);
        }
        if (siblingLI) {
            this.element.setAttribute('aria-activedescendant', siblingLI.id.toString());
        }
        else {
            this.element.removeAttribute('aria-activedescendant');
        }
        return siblingLI;
    };
    ListView.prototype.arrowKeyHandler = function (e, prev) {
        var _this = this;
        e.preventDefault();
        if (Object.keys(this.dataSource).length && this.curUL) {
            var siblingLI = this.onArrowKeyDown(e, prev);
            var elementTop = this.element.getBoundingClientRect().top;
            var elementHeight = this.element.getBoundingClientRect().height;
            var firstItemBounds = this.curUL.querySelector('.' + classNames.listItem).getBoundingClientRect();
            var heightDiff = void 0;
            var groupItemBounds = void 0;
            if (this.fields.groupBy) {
                groupItemBounds = this.curUL.querySelector('.' + classNames.groupListItem).getBoundingClientRect();
            }
            if (siblingLI) {
                var siblingTop = siblingLI.getBoundingClientRect().top;
                var siblingHeight = siblingLI.getBoundingClientRect().height;
                if (!prev) {
                    var height = this.isWindow ? window.innerHeight : elementHeight;
                    heightDiff = this.isWindow ? (siblingTop + siblingHeight) :
                        ((siblingTop - elementTop) + siblingHeight);
                    if (heightDiff > height) {
                        if (this.isWindow === true) {
                            window.scroll(0, pageYOffset + (heightDiff - height));
                        }
                        else {
                            this.element.scrollTop = this.element.scrollTop + (heightDiff - height);
                        }
                    }
                }
                else {
                    heightDiff = this.isWindow ? siblingTop : (siblingTop - elementTop);
                    if (heightDiff < 0) {
                        if (this.isWindow === true) {
                            window.scroll(0, pageYOffset + heightDiff);
                        }
                        else {
                            this.element.scrollTop = this.element.scrollTop + heightDiff;
                        }
                    }
                }
            }
            else if (this.enableVirtualization && prev && this.virtualizationModule.uiFirstIndex) {
                this.onUIScrolled = function () {
                    _this.onArrowKeyDown(e, prev);
                    _this.onUIScrolled = undefined;
                };
                heightDiff = this.virtualizationModule.listItemHeight;
                if (this.isWindow === true) {
                    window.scroll(0, pageYOffset - heightDiff);
                }
                else {
                    this.element.scrollTop = this.element.scrollTop - heightDiff;
                }
            }
            else if (prev) {
                if (this.showHeader && this.headerEle) {
                    var topHeight = groupItemBounds ? groupItemBounds.top : firstItemBounds.top;
                    var headerBounds = this.headerEle.getBoundingClientRect();
                    heightDiff = headerBounds.top < 0 ? (headerBounds.height - topHeight) : 0;
                    if (this.isWindow === true) {
                        window.scroll(0, pageYOffset - heightDiff);
                    }
                    else {
                        this.element.scrollTop = 0;
                    }
                }
                else if (this.fields.groupBy) {
                    heightDiff = this.isWindow ? (groupItemBounds.top < 0 ? groupItemBounds.top : 0) :
                        (elementTop - firstItemBounds.top) + groupItemBounds.height;
                    if (this.isWindow === true) {
                        window.scroll(0, pageYOffset + heightDiff);
                    }
                    else {
                        this.element.scrollTop = this.element.scrollTop - heightDiff;
                    }
                }
            }
        }
    };
    ListView.prototype.enterKeyHandler = function (e) {
        if (Object.keys(this.dataSource).length && this.curUL) {
            var hasChild = !isNullOrUndefined(this.curUL.querySelector('.' + classNames.hasChild)) ? true : false;
            var li = this.curUL.querySelector('.' + classNames.focused);
            if (hasChild && li) {
                li.classList.remove(classNames.focused);
                if (this.showCheckBox) {
                    this.removeSelect();
                    this.removeSelect(li);
                    this.removeHover();
                }
                this.setSelectLI(li, e);
            }
        }
    };
    ListView.prototype.spaceKeyHandler = function () {
        if (this.enable && this.showCheckBox && Object.keys(this.dataSource).length && this.curUL) {
            var li = this.curUL.querySelector('.' + classNames.focused);
            if (!isNullOrUndefined(li) && isNullOrUndefined(li.querySelector('.' + classNames.checked))) {
                var args = {
                    curData: undefined, dataSource: undefined, fields: undefined, options: undefined,
                    text: undefined, item: li
                };
                this.checkInternally(args, args.item.querySelector('.' + classNames.checkboxWrapper));
            }
            else {
                this.uncheckItem(li);
            }
        }
    };
    ListView.prototype.keyActionHandler = function (e) {
        switch (e.keyCode) {
            case 36:
                this.homeKeyHandler(e);
                break;
            case 35:
                this.homeKeyHandler(e, true);
                break;
            case 40:
                this.arrowKeyHandler(e);
                break;
            case 38:
                this.arrowKeyHandler(e, true);
                break;
            case 13:
                this.enterKeyHandler(e);
                break;
            case 8:
                if (this.showCheckBox && this.curDSLevel[this.curDSLevel.length - 1]) {
                    this.uncheckAllItems();
                }
                this.back();
                break;
            case 32:
                this.spaceKeyHandler();
                break;
        }
    };
    ListView.prototype.swipeActionHandler = function (e) {
        if (e.swipeDirection === 'Right' && e.velocity > swipeVelocity && e.originalEvent.type === 'touchend') {
            if (this.showCheckBox && this.curDSLevel[this.curDSLevel.length - 1]) {
                this.uncheckAllItems();
            }
            this.back();
        }
    };
    ListView.prototype.focusout = function () {
        if (Object.keys(this.dataSource).length && this.curUL) {
            var focusedElement = this.curUL.querySelector('.' + classNames.focused);
            var activeElement = this.curUL.querySelector('[aria-selected = true]');
            if (focusedElement) {
                focusedElement.classList.remove(classNames.focused);
                if (activeElement && !this.showCheckBox) {
                    activeElement.classList.add(classNames.selected);
                }
            }
        }
    };
    ListView.prototype.wireEvents = function () {
        EventHandler.add(this.element, 'keydown', this.keyActionHandler, this);
        EventHandler.add(this.element, 'click', this.clickHandler, this);
        EventHandler.add(this.element, 'mouseover', this.hoverHandler, this);
        EventHandler.add(this.element, 'mouseout', this.leaveHandler, this);
        EventHandler.add(this.element, 'focusout', this.focusout, this);
        this.touchModule = new Touch(this.element, { swipe: this.swipeActionHandler.bind(this) });
    };
    ListView.prototype.unWireEvents = function () {
        EventHandler.remove(this.element, 'click', this.clickHandler);
        EventHandler.remove(this.element, 'mouseover', this.hoverHandler);
        EventHandler.remove(this.element, 'mouseout', this.leaveHandler);
        EventHandler.remove(this.element, 'mouseover', this.hoverHandler);
        EventHandler.remove(this.element, 'mouseout', this.leaveHandler);
        this.touchModule.destroy();
    };
    ListView.prototype.removeFocus = function () {
        var focusedLI = this.element.querySelectorAll('.' + classNames.focused);
        for (var _i = 0, focusedLI_1 = focusedLI; _i < focusedLI_1.length; _i++) {
            var ele = focusedLI_1[_i];
            ele.classList.remove(classNames.focused);
        }
    };
    ListView.prototype.removeHover = function () {
        var hoverLI = this.element.querySelector('.' + classNames.hover);
        if (hoverLI) {
            hoverLI.classList.remove(classNames.hover);
        }
    };
    ListView.prototype.removeSelect = function (li) {
        if (isNullOrUndefined(li)) {
            var selectedLI = this.element.querySelectorAll('.' + classNames.selected);
            for (var _i = 0, selectedLI_1 = selectedLI; _i < selectedLI_1.length; _i++) {
                var ele = selectedLI_1[_i];
                if (this.showCheckBox && ele.querySelector('.' + classNames.checked)) {
                    continue;
                }
                else {
                    ele.setAttribute('aria-selected', 'false');
                    ele.classList.remove(classNames.selected);
                }
            }
        }
        else {
            li.classList.remove(classNames.selected);
            li.setAttribute('aria-selected', 'false');
        }
    };
    ListView.prototype.isValidLI = function (li) {
        return (li && li.classList.contains(classNames.listItem)
            && !li.classList.contains(classNames.groupListItem)
            && !li.classList.contains(classNames.disable));
    };
    ListView.prototype.setCheckboxLI = function (li, e) {
        if (this.isValidLI(li) && this.enable && this.showCheckBox) {
            if (this.curUL.querySelector('.' + classNames.focused)) {
                this.curUL.querySelector('.' + classNames.focused).classList.remove(classNames.focused);
            }
            li.classList.add(classNames.focused);
            var checkboxElement = li.querySelector('.' + classNames.checkboxWrapper);
            var checkIcon = checkboxElement.querySelector('.' + classNames.checkboxIcon + '.' + classNames.icon);
            this.removeHover();
            if (!checkIcon.classList.contains(classNames.checked)) {
                checkIcon.classList.add(classNames.checked);
                li.classList.add(classNames.selected);
                li.setAttribute('aria-selected', 'true');
            }
            else {
                checkIcon.classList.remove(classNames.checked);
                li.classList.remove(classNames.selected);
                li.setAttribute('aria-selected', 'false');
            }
            checkboxElement.setAttribute('aria-checked', checkIcon.classList.contains(classNames.checked) ?
                'true' : 'false');
            var eventArgs = this.selectEventData(li, e);
            merge(eventArgs, { isChecked: checkIcon.classList.contains(classNames.checked) });
            if (this.enableVirtualization) {
                this.virtualizationModule.setCheckboxLI(li, e);
            }
            this.trigger('select', eventArgs);
            this.setSelectedItemData(li);
            this.renderSubList(li);
        }
    };
    ListView.prototype.selectEventData = function (li, e) {
        var data = this.getItemData(li);
        var fieldData = getFieldValues(data, this.listBaseOption.fields);
        var selectedItem;
        if (!isNullOrUndefined(data)
            && typeof this.dataSource[0] === 'string' || typeof this.dataSource[0] === 'number') {
            selectedItem = { item: li, text: li && li.innerText.trim(), data: this.dataSource };
        }
        else {
            selectedItem =
                // eslint-disable-next-line
                { item: li, text: fieldData && fieldData[this.listBaseOption.fields.text],
                    // eslint-disable-next-line
                    data: data };
        }
        var eventArgs = {};
        merge(eventArgs, selectedItem);
        if (e) {
            merge(eventArgs, { isInteracted: true, event: e, index: this.curUL && Array.prototype.indexOf.call(this.curUL.children, li) });
        }
        return eventArgs;
    };
    ListView.prototype.setSelectedItemData = function (li) {
        var data = this.getItemData(li);
        // eslint-disable-next-line
        var fieldData = getFieldValues(data, this.listBaseOption.fields);
        if (!isNullOrUndefined(data) && ((typeof this.dataSource[0] === 'string') ||
            (typeof this.dataSource[0] === 'number'))) {
            this.selectedItems = {
                item: li,
                text: li && li.innerText.trim(),
                data: this.dataSource
            };
        }
        else {
            this.selectedItems = {
                item: li,
                // eslint-disable-next-line
                text: fieldData && fieldData[this.listBaseOption.fields.text],
                // eslint-disable-next-line
                data: data
            };
        }
    };
    ListView.prototype.setSelectLI = function (li, e) {
        if (this.isValidLI(li) && !li.classList.contains(classNames.selected) && this.enable) {
            if (!this.showCheckBox) {
                this.removeSelect();
            }
            li.classList.add(classNames.selected);
            li.setAttribute('aria-selected', 'true');
            this.removeHover();
            this.setSelectedItemData(li);
            if (this.enableVirtualization) {
                this.virtualizationModule.setSelectLI(li, e);
            }
            var eventArgs = this.selectEventData(li, e);
            this.trigger('select', eventArgs);
            this.selectedLI = li;
            this.renderSubList(li);
        }
    };
    ListView.prototype.setHoverLI = function (li) {
        if (this.isValidLI(li) && !li.classList.contains(classNames.hover) && this.enable) {
            var lastLi = this.element.querySelectorAll('.' + classNames.hover);
            if (lastLi && lastLi.length) {
                removeClass(lastLi, classNames.hover);
            }
            if (!li.classList.contains(classNames.selected) || this.showCheckBox) {
                li.classList.add(classNames.hover);
            }
        }
    };
    //Data Source Related Functions
    ListView.prototype.getSubDS = function () {
        var levelKeys = this.curDSLevel;
        if (levelKeys.length) {
            var ds = this.localData;
            for (var _i = 0, levelKeys_1 = levelKeys; _i < levelKeys_1.length; _i++) {
                var key = levelKeys_1[_i];
                var field = {};
                // eslint-disable-next-line
                field[this.fields.id] = key;
                this.curDSJSON = this.findItemFromDS(ds, field);
                var fieldData = getFieldValues(this.curDSJSON, this.listBaseOption.fields);
                ds = this.curDSJSON ? fieldData[this.fields.child] : ds;
            }
            return ds;
        }
        return this.localData;
    };
    ListView.prototype.getItemData = function (li) {
        var dataSource = this.dataSource instanceof DataManager ?
            this.localData : this.dataSource;
        var fields = this.getElementUID(li);
        var curDS;
        if (isNullOrUndefined(this.element.querySelector('.' + classNames.hasChild)) && this.fields.groupBy) {
            curDS = this.curViewDS;
        }
        else {
            curDS = dataSource;
        }
        return this.findItemFromDS(curDS, fields);
    };
    ListView.prototype.findItemFromDS = function (dataSource, fields, parent) {
        var _this = this;
        var resultJSON;
        if (dataSource && dataSource.length && fields) {
            dataSource.some(function (data) {
                var fieldData = 
                // eslint-disable-next-line
                getFieldValues(data, _this.listBaseOption.fields);
                //(!(fid) || id === fid) && (!(ftext) || text === ftext) && (!!fid || !!ftext)
                if ((fields[_this.fields.id] || fields[_this.fields.text]) &&
                    (!fields[_this.fields.id] || (!isNullOrUndefined(fieldData[_this.fields.id]) &&
                        fieldData[_this.fields.id].toString()) === fields[_this.fields.id].toString()) &&
                    (!fields[_this.fields.text] || fieldData[_this.fields.text] === fields[_this.fields.text])) {
                    resultJSON = (parent ? dataSource : data);
                }
                else if (typeof data !== 'object' && dataSource.indexOf(data) !== -1) {
                    resultJSON = (parent ? dataSource : data);
                }
                else if (!isNullOrUndefined(fields[_this.fields.id]) && isNullOrUndefined(fieldData[_this.fields.id])) {
                    var li = _this.element.querySelector('[data-uid="'
                        + fields[_this.fields.id] + '"]');
                    // eslint-disable-next-line
                    if (li && li.innerText.trim() === fieldData[_this.fields.text]) {
                        resultJSON = data;
                    }
                    // eslint-disable-next-line
                }
                else if (fieldData.hasOwnProperty(_this.fields.child) && fieldData[_this.fields.child].length) {
                    resultJSON = _this.findItemFromDS(fieldData[_this.fields.child], fields, parent);
                }
                return !!resultJSON;
            });
        }
        else {
            resultJSON = dataSource;
        }
        return resultJSON;
    };
    ListView.prototype.getQuery = function () {
        var columns = [];
        var query = (this.query ? this.query : new Query());
        if (!this.query) {
            // eslint-disable-next-line
            for (var _i = 0, _a = Object.keys(this.fields.properties); _i < _a.length; _i++) {
                var column = _a[_i];
                if (column !== 'tableName' && !!(this.fields[column]) &&
                    this.fields[column] !==
                        ListBase.defaultMappedFields[column]
                    && columns.indexOf(this.fields[column]) === -1) {
                    columns.push(this.fields[column]);
                }
            }
            query.select(columns);
            // eslint-disable-next-line
            if (this.fields.properties.hasOwnProperty('tableName')) {
                query.from(this.fields.tableName);
            }
        }
        return query;
    };
    ListView.prototype.setViewDataSource = function (dataSource) {
        if (dataSource === void 0) { dataSource = this.localData; }
        if (dataSource && this.fields.groupBy) {
            if (this.sortOrder !== 'None') {
                this.curViewDS = ListBase.groupDataSource(ListBase.getDataSource(dataSource, ListBase.addSorting(this.sortOrder, this.fields.sortBy)), this.listBaseOption.fields, this.sortOrder);
            }
            else {
                this.curViewDS = ListBase.groupDataSource(dataSource, this.listBaseOption.fields, this.sortOrder);
            }
        }
        else if (dataSource && this.sortOrder !== 'None') {
            this.curViewDS = ListBase.getDataSource(dataSource, ListBase.addSorting(this.sortOrder, this.fields.sortBy));
        }
        else {
            this.curViewDS = dataSource;
        }
    };
    ListView.prototype.isInAnimation = function () {
        return this.curUL.classList.contains('.e-animate');
    };
    ListView.prototype.setLocalData = function () {
        var _this = this;
        this.trigger('actionBegin');
        // eslint-disable-next-line
        var listViewComponent = this;
        if (this.dataSource instanceof DataManager) {
            this.dataSource.executeQuery(this.getQuery()).then(function (e) {
                if (_this.isDestroyed) {
                    return;
                }
                _this.localData = e.result;
                if (!_this.isServerRendered || (!isBlazor())) {
                    listViewComponent.removeElement(listViewComponent.contentContainer);
                    // eslint-disable-next-line
                    if (_this.isReact) {
                        _this.clearTemplate();
                    }
                }
                _this.renderList();
                _this.trigger('actionComplete', e);
            }).catch(function (e) {
                if (_this.isDestroyed) {
                    return;
                }
                _this.trigger('actionFailure', e);
            });
        }
        else if (!this.dataSource || !this.dataSource.length) {
            var ul = this.element.querySelector('ul');
            if (ul) {
                remove(ul);
                this.setProperties({ dataSource: ListBase.createJsonFromElement(ul) }, true);
                this.localData = this.dataSource;
                this.renderList();
                this.trigger('actionComplete', { data: this.localData });
            }
        }
        else {
            this.localData = this.dataSource;
            this.renderList();
            this.trigger('actionComplete', { data: this.localData });
        }
    };
    ListView.prototype.reRender = function () {
        if (!isBlazor() || !this.isServerRendered || this.enableVirtualization) {
            this.resetBlazorTemplates();
            this.removeElement(this.headerEle);
            this.removeElement(this.ulElement);
            this.removeElement(this.contentContainer);
            // eslint-disable-next-line
            if (this.isReact) {
                this.clearTemplate();
            }
            if (Object.keys(window).indexOf('ejsInterop') === -1) {
                this.element.innerHTML = '';
            }
            this.headerEle = this.ulElement = this.liCollection = undefined;
            this.header();
        }
        this.setLocalData();
    };
    ListView.prototype.resetCurrentList = function () {
        this.resetBlazorTemplates();
        this.setViewDataSource(this.curViewDS);
        this.contentContainer.innerHTML = '';
        this.createList();
        this.renderIntoDom(this.curUL);
    };
    ListView.prototype.setAttributes = function (liElements) {
        for (var i = 0; i < liElements.length; i++) {
            var element = liElements[i];
            if (element.classList.contains('e-list-item')) {
                element.setAttribute('id', this.element.id + '_' + element.getAttribute('data-uid'));
                element.setAttribute('aria-selected', 'false');
                element.setAttribute('tabindex', '-1');
            }
        }
    };
    ListView.prototype.createList = function () {
        this.currentLiElements = [];
        this.isNestedList = false;
        this.ulElement = this.curUL = ListBase.createList(this.createElement, this.curViewDS, this.listBaseOption, null, this);
        this.liCollection = this.curUL.querySelectorAll('.' + classNames.listItem);
        this.setAttributes(this.liCollection);
        this.updateBlazorTemplates(true);
    };
    ListView.prototype.resetBlazorTemplates = function () {
        // eslint-disable-next-line
        var templateCollection = blazorTemplates;
        if (this.template) {
            templateCollection[this.LISTVIEW_TEMPLATE_ID] = [];
            resetBlazorTemplate(this.LISTVIEW_TEMPLATE_ID, LISTVIEW_TEMPLATE_PROPERTY);
        }
        if (this.groupTemplate) {
            templateCollection[this.LISTVIEW_GROUPTEMPLATE_ID] = [];
            resetBlazorTemplate(this.LISTVIEW_GROUPTEMPLATE_ID, LISTVIEW_GROUPTEMPLATE_PROPERTY);
        }
        if (this.headerTemplate) {
            resetBlazorTemplate(this.LISTVIEW_HEADERTEMPLATE_ID, LISTVIEW_HEADERTEMPLATE_PROPERTY);
        }
    };
    ListView.prototype.updateBlazorTemplates = function (template, headerTemplate, resetExistingElements) {
        if (template === void 0) { template = false; }
        if (headerTemplate === void 0) { headerTemplate = false; }
        if (resetExistingElements === void 0) { resetExistingElements = false; }
        if (this.template && template && !this.enableVirtualization) {
            updateBlazorTemplate(this.LISTVIEW_TEMPLATE_ID, LISTVIEW_TEMPLATE_PROPERTY, this, resetExistingElements);
        }
        if (this.groupTemplate && template && !this.enableVirtualization) {
            updateBlazorTemplate(this.LISTVIEW_GROUPTEMPLATE_ID, LISTVIEW_GROUPTEMPLATE_PROPERTY, this, resetExistingElements);
        }
        if (this.headerTemplate && headerTemplate) {
            updateBlazorTemplate(this.LISTVIEW_HEADERTEMPLATE_ID, LISTVIEW_HEADERTEMPLATE_PROPERTY, this, resetExistingElements);
        }
    };
    ListView.prototype.exceptionEvent = function (e) {
        this.trigger('actionFailure', e);
    };
    ListView.prototype.UpdateCurrentUL = function () {
        this.ulElement = this.curUL = this.element.querySelector('.' + classNames.parentItem);
        if (this.curUL) {
            // eslint-disable-next-line
            this.liCollection = this.curUL.querySelectorAll('.' + classNames.listItem);
        }
    };
    ListView.prototype.removeActiveClass = function () {
        // eslint-disable-next-line
        var listViewComponent = this;
        setTimeout(function () {
            var ulContainer = listViewComponent.element.querySelector('.' + classNames.virtualElementContainer);
            for (var i = 0; i < ulContainer.childElementCount; i++) {
                var selectedElement = ulContainer.children[i];
                var elementIndex = void 0;
                var hiddenElementIndex = void 0;
                if (listViewComponent.showCheckBox) {
                    if (listViewComponent.previousSelectedItems.length > 0) {
                        for (var j = 0; j < listViewComponent.previousSelectedItems.length; j++) {
                            if (selectedElement.getAttribute('data-uid') === listViewComponent.previousSelectedItems[j]) {
                                selectedElement.classList.add('e-active');
                                selectedElement.setAttribute('aria-selected', 'true');
                                if (selectedElement.querySelector('.e-frame.e-icons')) {
                                    selectedElement.querySelector('.e-frame.e-icons').classList.add('e-check');
                                }
                                elementIndex = i;
                            }
                            else {
                                if (elementIndex !== i) {
                                    selectedElement.classList.remove('e-active');
                                    selectedElement.removeAttribute('aria-selected');
                                    if (selectedElement.querySelector('.e-check')) {
                                        selectedElement.querySelector('.e-check').classList.remove('e-check');
                                    }
                                }
                            }
                        }
                    }
                    else {
                        selectedElement.classList.remove('e-active');
                        selectedElement.removeAttribute('aria-selected');
                        if (selectedElement.querySelector('.e-check')) {
                            selectedElement.querySelector('.e-check').classList.remove('e-check');
                        }
                    }
                }
                else {
                    if (selectedElement.getAttribute('data-uid') === listViewComponent.previousSelectedItems[0]) {
                        selectedElement.classList.add('e-active');
                        selectedElement.setAttribute('aria-selected', 'true');
                    }
                    else {
                        selectedElement.classList.remove('e-active');
                        selectedElement.removeAttribute('aria-selected');
                    }
                }
                if (listViewComponent.hiddenItems.length > 0) {
                    for (var k = 0; k < listViewComponent.hiddenItems.length; k++) {
                        if (selectedElement.getAttribute('data-uid') === listViewComponent.previousSelectedItems[k]) {
                            selectedElement.style.display = 'none';
                            hiddenElementIndex = i;
                        }
                        else {
                            if (hiddenElementIndex !== i) {
                                selectedElement.style.display = null;
                            }
                        }
                    }
                }
                if (listViewComponent.enabledItems.length > 0) {
                    for (var x = 0; x < listViewComponent.enabledItems.length; x++) {
                        if (selectedElement.getAttribute('data-uid') === listViewComponent.enabledItems[x]) {
                            if (selectedElement.classList.contains('e-disabled')) {
                                selectedElement.classList.remove('e-disabled');
                            }
                        }
                    }
                }
                if (listViewComponent.disabledItems.length > 0) {
                    for (var y = 0; y < listViewComponent.disabledItems.length; y++) {
                        if (selectedElement.getAttribute('data-uid') === listViewComponent.disabledItems[y]) {
                            if (!selectedElement.classList.contains('e-disabled')) {
                                selectedElement.classList.add('e-disabled');
                            }
                        }
                    }
                }
            }
        }, 200);
    };
    ListView.prototype.renderingNestedList = function () {
        var ul = closest(this.liElement.parentNode, '.' + classNames.parentItem);
        var ctrlId = this.element.id;
        var ulElement = document.getElementById(ctrlId);
        var currentListItem = ulElement.getElementsByTagName('UL')[ulElement.getElementsByTagName('UL').length - 1];
        this.switchView(ul, currentListItem);
        this.liElement = null;
    };
    ListView.prototype.renderSubList = function (li) {
        this.liElement = li;
        var uID = li.getAttribute('data-uid');
        if (li.classList.contains(classNames.hasChild) && uID) {
            var ul = closest(li.parentNode, '.' + classNames.parentItem);
            var ele = this.element.querySelector('[pid=\'' + uID + '\']');
            this.curDSLevel.push(uID);
            this.setViewDataSource(this.getSubDS());
            if (!ele) {
                var data = this.curViewDS;
                if (isBlazor() && this.isServerRendered) {
                    // eslint-disable-next-line
                    this.interopAdaptor.invokeMethodAsync('ListChildDataSource', data);
                }
                else {
                    ele = ListBase.createListFromJson(this.createElement, data, this.listBaseOption, this.curDSLevel.length, null, this);
                    // eslint-disable-next-line
                    if (this.isReact) {
                        this.renderReactTemplates();
                    }
                    var lists = ele.querySelectorAll('.' + classNames.listItem);
                    this.setAttributes(lists);
                    ele.setAttribute('pID', uID);
                    ele.style.display = 'none';
                    this.renderIntoDom(ele);
                    this.updateBlazorTemplates(true);
                }
            }
            if (!isBlazor() || !this.isServerRendered || this.enableVirtualization) {
                this.switchView(ul, ele);
            }
            this.liCollection = this.curUL.querySelectorAll('.' + classNames.listItem);
            if (this.selectedItems) {
                var fieldData = getFieldValues(this.selectedItems.data, this.listBaseOption.fields);
                // eslint-disable-next-line
                this.header((fieldData[this.listBaseOption.fields.text]), true, 'header');
            }
            this.selectedLI = undefined;
        }
    };
    ListView.prototype.renderIntoDom = function (ele) {
        this.contentContainer.appendChild(ele);
    };
    ListView.prototype.renderList = function (data) {
        this.setViewDataSource(data);
        if (!isBlazor() || !this.isServerRendered || this.enableVirtualization) {
            if (this.enableVirtualization) {
                if (Object.keys(this.dataSource).length) {
                    if (!(isBlazor() && this.isServerRendered)) {
                        if ((this.template || this.groupTemplate) && !this.virtualizationModule.isNgTemplate()) {
                            this.listBaseOption.template = null;
                            this.listBaseOption.groupTemplate = null;
                            this.listBaseOption.itemCreated = this.virtualizationModule.createUIItem.bind(this.virtualizationModule);
                        }
                    }
                }
                this.virtualizationModule.uiVirtualization();
            }
            else {
                this.createList();
                this.contentContainer = this.createElement('div', { className: classNames.content });
                this.element.appendChild(this.contentContainer);
                this.renderIntoDom(this.ulElement);
                // eslint-disable-next-line
                if (this.isReact) {
                    this.renderReactTemplates();
                }
            }
        }
    };
    ListView.prototype.getElementUID = function (obj) {
        var fields = {};
        if (obj instanceof Element) {
            // eslint-disable-next-line
            fields[this.fields.id] = obj.getAttribute('data-uid');
        }
        else {
            fields = obj;
        }
        return fields;
    };
    /**
     * Initializes the ListView component rendering.
     */
    ListView.prototype.render = function () {
        if (!isBlazor() || !this.isServerRendered) {
            this.element.classList.add(classNames.root);
            attributes(this.element, { role: 'list', tabindex: '0' });
            this.setCSSClass();
            this.setEnableRTL();
            this.setEnable();
            this.setSize();
            this.wireEvents();
            this.header();
            this.setLocalData();
            this.setHTMLAttribute();
            // eslint-disable-next-line
            if (this.isReact) {
                this.renderReactTemplates();
            }
        }
        else {
            this.initBlazor(true);
        }
        this.rippleFn = rippleEffect(this.element, {
            selector: '.' + classNames.listItem
        });
        this.renderComplete();
    };
    ListView.prototype.initBlazor = function (firstRender) {
        if (firstRender === null) {
            firstRender = false;
        }
        this.setLocalData();
        this.setViewDataSource(this.localData);
        this.contentContainer = this.element.querySelector('.' + classNames.content);
        if (firstRender) {
            this.wireEvents();
        }
    };
    /**
     * It is used to destroy the ListView component.
     */
    ListView.prototype.destroy = function () {
        this.resetBlazorTemplates();
        // eslint-disable-next-line
        if (this.isReact) {
            this.clearTemplate();
        }
        this.unWireEvents();
        var classAr = [classNames.root, classNames.disable, 'e-rtl',
            'e-has-header', 'e-lib'].concat(this.cssClass.split(' ').filter(function (css) { return css; }));
        removeClass([this.element], classAr);
        this.element.removeAttribute('role');
        this.element.removeAttribute('tabindex');
        this.curUL = this.ulElement = this.liCollection = this.headerEle = undefined;
        if (!(isBlazor() && this.isServerRendered)) {
            this.element.innerHTML = '';
            _super.prototype.destroy.call(this);
        }
        else {
            this.element.style.display = 'none';
        }
    };
    /**
     * Switches back from the navigated sub list item.
     */
    ListView.prototype.back = function () {
        var pID = this.curDSLevel[this.curDSLevel.length - 1];
        if (pID === undefined || this.isInAnimation()) {
            return;
        }
        this.curDSLevel.pop();
        this.setViewDataSource(this.getSubDS());
        var toUL = this.element.querySelector('[data-uid=\'' + pID + '\']');
        var fromUL = this.curUL;
        if (!toUL) {
            this.createList();
            this.renderIntoDom(this.ulElement);
            toUL = this.curUL;
        }
        else {
            if (isBlazor() && this.isServerRendered && this.enableVirtualization) {
                toUL = toUL.parentElement.parentElement.parentElement;
            }
            else {
                toUL = toUL.parentElement;
            }
        }
        var fieldData = getFieldValues(this.curDSJSON, this.listBaseOption.fields);
        // eslint-disable-next-line
        var text = fieldData[this.fields.text];
        this.switchView(fromUL, toUL, true);
        this.removeFocus();
        var li = this.element.querySelector('[data-uid=\'' + pID + '\']');
        li.classList.remove(classNames.disable);
        li.classList.add(classNames.focused);
        if (this.showCheckBox && li.querySelector('.' + classNames.checkboxIcon).classList.contains(classNames.checked)) {
            li.setAttribute('aria-selected', 'true');
        }
        else {
            li.classList.remove(classNames.selected);
            li.setAttribute('aria-selected', 'false');
        }
        this.liCollection = this.curUL.querySelectorAll('.' + classNames.listItem);
        if (this.enableHtmlSanitizer) {
            this.setProperties({ headerTitle: SanitizeHtmlHelper.sanitize(this.headerTitle) }, true);
        }
        this.header((this.curDSLevel.length ? text : this.headerTitle), (this.curDSLevel.length ? true : false), 'header');
    };
    /**
     * Selects the list item from the ListView by passing the elements or field object.
     *
     * @param  {Fields | HTMLElement | Element} item - We can pass element Object or Fields as Object with ID and Text fields.
     */
    ListView.prototype.selectItem = function (item) {
        if (this.enableVirtualization) {
            this.virtualizationModule.selectItem(item);
        }
        else if (this.showCheckBox) {
            this.setCheckboxLI(this.getLiFromObjOrElement(item));
        }
        else {
            if (isNullOrUndefined(item) === true) {
                this.removeSelect();
            }
            else {
                this.setSelectLI(this.getLiFromObjOrElement(item));
            }
        }
    };
    ListView.prototype.getLiFromObjOrElement = function (obj) {
        var li;
        var dataSource = this.dataSource instanceof DataManager ?
            this.localData : this.dataSource;
        if (!isNullOrUndefined(obj)) {
            if (typeof dataSource[0] === 'string' || typeof dataSource[0] === 'number') {
                if (obj instanceof Element) {
                    var uid = obj.getAttribute('data-uid').toString();
                    for (var i = 0; i < this.liCollection.length; i++) {
                        if (this.liCollection[i].getAttribute('data-uid').toString() === uid) {
                            li = this.liCollection[i];
                            break;
                        }
                    }
                }
                else {
                    Array.prototype.some.call(this.curUL.querySelectorAll('.' + classNames.listItem), function (item) {
                        if (item.innerText.trim() === obj.toString()) {
                            li = item;
                            return true;
                        }
                        else {
                            return false;
                        }
                    });
                }
            }
            else {
                var resultJSON = this.getItemData(obj);
                var fieldData = getFieldValues(resultJSON, this.listBaseOption.fields);
                if (resultJSON) {
                    li = this.element.querySelector('[data-uid="'
                        + fieldData[this.fields.id] + '"]');
                    if (!this.enableVirtualization && isNullOrUndefined(li)) {
                        var curLi = this.element.querySelectorAll('.' + classNames.listItem);
                        for (var i = 0; i < curLi.length; i++) {
                            // eslint-disable-next-line
                            if (curLi[i].innerText.trim() === fieldData[this.fields.text]) {
                                li = curLi[i];
                            }
                        }
                    }
                }
            }
        }
        return li;
    };
    /**
     * Selects multiple list items from the ListView.
     *
     * @param  {Fields[] | HTMLElement[] | Element[]} item - We can pass array of
     *  elements or array of fields Object with ID and Text fields.
     */
    ListView.prototype.selectMultipleItems = function (item) {
        if (!isNullOrUndefined(item)) {
            for (var i = 0; i < item.length; i++) {
                if (!isNullOrUndefined(item[i])) {
                    this.selectItem(item[i]);
                }
            }
        }
    };
    ListView.prototype.getParentId = function () {
        var parentId = [];
        if (this.isNestedList) {
            for (var i = this.curDSLevel.length - 1; i >= 0; i--) {
                parentId.push(this.curDSLevel[i]);
            }
        }
        return parentId;
    };
    /**
     * Gets the details of the currently selected item from the list items.
     *
     * @blazorType ListSelectedItem<TValue>
     */
    ListView.prototype.getSelectedItems = function () {
        // eslint-disable-next-line
        var finalValue;
        var isCompleted = false;
        this.selectedId = [];
        var dataSource = this.dataSource instanceof DataManager ?
            this.localData : this.dataSource;
        if (this.enableVirtualization && !isCompleted) {
            finalValue = this.virtualizationModule.getSelectedItems();
            isCompleted = true;
        }
        else if (this.showCheckBox && !isCompleted) {
            // eslint-disable-next-line
            var liCollection = this.curUL.getElementsByClassName(classNames.selected);
            var liTextCollection = [];
            var liDataCollection = [];
            this.selectedId = [];
            var dataParent = [];
            for (var i = 0; i < liCollection.length; i++) {
                if (typeof dataSource[0] === 'string' || typeof dataSource[0] === 'number') {
                    liTextCollection.push(liCollection[i].innerText.trim());
                }
                else {
                    var tempData = this.getItemData(liCollection[i]);
                    var fieldData = getFieldValues(tempData, this.listBaseOption.fields);
                    if (this.isNestedList) {
                        dataParent.push({ data: tempData, parentId: this.getParentId() });
                    }
                    else {
                        liDataCollection.push(tempData);
                    }
                    if (fieldData) {
                        // eslint-disable-next-line
                        liTextCollection.push(fieldData[this.listBaseOption.fields.text]);
                        // eslint-disable-next-line
                        this.selectedId.push(fieldData[this.listBaseOption.fields.id]);
                    }
                    else {
                        liTextCollection.push(undefined);
                        this.selectedId.push(undefined);
                    }
                }
            }
            if ((typeof dataSource[0] === 'string'
                || typeof dataSource[0] === 'number')
                && !isCompleted) {
                finalValue = { item: liCollection, data: dataSource, text: liTextCollection };
                isCompleted = true;
            }
            if (this.isNestedList && !isCompleted) {
                finalValue = { item: liCollection, data: dataParent, text: liTextCollection };
                isCompleted = true;
            }
            else if (!isCompleted) {
                finalValue = { item: liCollection, data: liDataCollection, text: liTextCollection };
                isCompleted = true;
            }
        }
        else if (!isCompleted) {
            var liElement = this.element.getElementsByClassName(classNames.selected)[0];
            var fieldData = getFieldValues(this.getItemData(liElement), this.listBaseOption.fields);
            if ((typeof dataSource[0] === 'string'
                || typeof dataSource[0] === 'number')
                && !isCompleted) {
                finalValue = (!isNullOrUndefined(liElement)) ? {
                    item: liElement, data: dataSource,
                    text: liElement.innerText.trim()
                } : undefined;
                isCompleted = true;
            }
            else if (!isCompleted) {
                if (isNullOrUndefined(fieldData) || isNullOrUndefined(liElement)) {
                    finalValue = undefined;
                    isCompleted = true;
                }
                else {
                    // eslint-disable-next-line
                    this.selectedId.push(fieldData[this.listBaseOption.fields.id]);
                    finalValue = {
                        text: fieldData[this.listBaseOption.fields.text], item: liElement,
                        data: this.getItemData(liElement)
                    };
                    isCompleted = true;
                }
            }
        }
        if (isBlazor()) {
            // eslint-disable-next-line
            return this.blazorGetSelectedItems(finalValue);
        }
        else {
            return finalValue;
        }
    };
    // eslint-disable-next-line
    ListView.prototype.blazorGetSelectedItems = function (finalGetSelectedItem) {
        var blazorSelectedItem = {
            data: [],
            index: [],
            parentId: [],
            text: []
        };
        if (!isNullOrUndefined(finalGetSelectedItem)) {
            if (!isNullOrUndefined(finalGetSelectedItem.data)) {
                if (this.showCheckBox && this.isNestedList) {
                    for (var i = 0; i < finalGetSelectedItem.data.length; i++) {
                        blazorSelectedItem.data.push(finalGetSelectedItem.data[i].data);
                    }
                    if (!isNullOrUndefined(finalGetSelectedItem.data[0])
                        && !isNullOrUndefined(finalGetSelectedItem.data[0].parentId)) {
                        blazorSelectedItem.parentId = finalGetSelectedItem.data[0].parentId;
                    }
                }
                else {
                    blazorSelectedItem.data = this.convertItemsToArray(finalGetSelectedItem.data);
                }
            }
            if (!isNullOrUndefined(finalGetSelectedItem.text)) {
                blazorSelectedItem.text = this.convertItemsToArray(finalGetSelectedItem.text);
            }
            if (!isNullOrUndefined(finalGetSelectedItem.index)) {
                blazorSelectedItem.index = this.convertItemsToArray(finalGetSelectedItem.index);
            }
        }
        return blazorSelectedItem;
    };
    // eslint-disable-next-line
    ListView.prototype.convertItemsToArray = function (items) {
        return Array.isArray(items) ? items.slice() : [items];
    };
    /**
     * Finds out an item details from the current list.
     *
     * @param  {Fields | HTMLElement | Element} item - We can pass element Object or Fields as Object with ID and Text fields.
     * @blazorType TValue
     */
    ListView.prototype.findItem = function (item) {
        return this.getItemData(item);
    };
    /**
     * Enables the disabled list items by passing the Id and text fields.
     *
     * @param  {Fields | HTMLElement | Element} item - We can pass element Object or Fields as Object with ID and Text fields.
     */
    ListView.prototype.enableItem = function (item) {
        this.setItemState(item, true);
        if (this.enableVirtualization) {
            this.virtualizationModule.enableItem(item);
        }
    };
    /**
     * Disables the list items by passing the Id and text fields.
     *
     * @param  {Fields | HTMLElement | Element} item - We can pass element Object or Fields as Object with ID and Text fields.
     */
    ListView.prototype.disableItem = function (item) {
        this.setItemState(item, false);
        if (this.enableVirtualization) {
            this.virtualizationModule.disableItem(item);
        }
    };
    //A function that used to set state of the list item like enable, disable.
    ListView.prototype.setItemState = function (item, isEnable) {
        var resultJSON = this.getItemData(item);
        var fieldData = getFieldValues(resultJSON, this.listBaseOption.fields);
        if (resultJSON) {
            var li = this.element.querySelector('[data-uid="' + fieldData[this.fields.id] + '"]');
            if (isEnable) {
                if (li) {
                    li.classList.remove(classNames.disable);
                }
                delete resultJSON[this.fields.enabled];
            }
            else if (!isEnable) {
                if (li) {
                    li.classList.add(classNames.disable);
                }
                // eslint-disable-next-line
                resultJSON[this.fields.enabled] = false;
            }
        }
    };
    /**
     * Shows the hide list item from the ListView.
     *
     * @param  {Fields | HTMLElement | Element} item - We can pass element Object or Fields as Object with ID and Text fields.
     */
    ListView.prototype.showItem = function (item) {
        this.showHideItem(item, false, '');
        if (this.enableVirtualization) {
            this.virtualizationModule.showItem(item);
        }
    };
    /**
     * Hides an list item from the ListView.
     *
     * @param  {Fields | HTMLElement | Element} item - We can pass element Object or Fields as Object with ID and Text fields.
     */
    ListView.prototype.hideItem = function (item) {
        this.showHideItem(item, true, 'none');
        if (this.enableVirtualization) {
            this.virtualizationModule.hideItem(item);
        }
    };
    ListView.prototype.showHideItem = function (obj, isHide, display) {
        var resultJSON = this.getItemData(obj);
        var fieldData = getFieldValues(resultJSON, this.listBaseOption.fields);
        if (resultJSON) {
            var li = this.element.querySelector('[data-uid="' + fieldData[this.fields.id] + '"]');
            if (li) {
                li.style.display = display;
            }
            if (isHide) {
                // eslint-disable-next-line
                resultJSON[this.fields.isVisible] = false;
            }
            else {
                delete resultJSON[this.fields.isVisible];
            }
        }
    };
    /**
     * Adds the new list item(s) to the current ListView.
     * To add a new list item(s) in the ListView, we need to pass the `data` as an array of items that need
     * to be added and `fields` as the target item to which we need to add the given item(s) as its children.
     * For example fields: { text: 'Name', tooltip: 'Name', id:'id'}
     *
     * @param  {{Object}[]} data - JSON Array Data that need to add.
     *
     * @param  {Fields} fields - Target item to add the given data as its children (can be null).
     *
     * @blazorType data|object,fields|object
     */
    ListView.prototype.addItem = function (data, fields) {
        if (fields === void 0) { fields = undefined; }
        var dataSource = this.dataSource instanceof DataManager
            ? this.localData : this.dataSource;
        this.addItemInternally(data, fields, dataSource);
    };
    ListView.prototype.addItemInternally = function (data, fields, dataSource) {
        if (data instanceof Array) {
            if (this.enableVirtualization) {
                this.virtualizationModule.addItem(data, fields, dataSource);
            }
            else {
                var ds = this.findItemFromDS(dataSource, fields);
                var child = void 0;
                if (ds) {
                    var fieldData = getFieldValues(ds, this.listBaseOption.fields);
                    child = fieldData[this.fields.child];
                    if (!child) {
                        child = [];
                    }
                    child = child.concat(data);
                }
                // check for whether target is nested level or top level in list
                if (ds instanceof Array) {
                    for (var i = 0; i < data.length; i++) {
                        dataSource.push(data[i]);
                        this.setViewDataSource(dataSource);
                        // since it is top level target, get the content container's first child
                        // as it is always the top level UL
                        var targetUL = this.contentContainer
                            ? this.contentContainer.children[0]
                            : null;
                        // check for whether the list was previously empty or not, if it is
                        // proceed to call initial render
                        if (this.contentContainer && targetUL) {
                            this.addItemIntoDom(data[i], targetUL, this.curViewDS);
                        }
                        else {
                            this.reRender();
                        }
                    }
                    if (this.curUL) {
                        this.updateBlazorTemplates(true);
                    }
                    this.liCollection = this.curUL.querySelectorAll('.' + classNames.listItem);
                }
                else {
                    // proceed as target item is in nested level, only if it is a valid target ds
                    if (ds) {
                        ds[this.fields.child] = child;
                        this.addItemInNestedList(ds, data);
                    }
                }
            }
        }
    };
    ListView.prototype.addItemInNestedList = function (targetItemData, itemQueue) {
        // eslint-disable-next-line
        var targetItemId = targetItemData[this.fields.id];
        var targetChildDS = targetItemData[this.fields.child];
        var isAlreadyRenderedUL = this.element.querySelector('[pid=\'' + targetItemId + '\']');
        var targetLi = this.element.querySelector('[data-uid=\'' + targetItemId + '\']');
        var targetUL = isAlreadyRenderedUL
            ? isAlreadyRenderedUL
            : targetLi
                ? closest(targetLi, 'ul')
                : null;
        var targetDS = isAlreadyRenderedUL ? targetChildDS : [targetItemData];
        var isTargetEmptyChild = targetLi ? !targetLi.classList.contains(classNames.hasChild) : false;
        var isRefreshTemplateNeeded = false;
        // if li element is already rendered, that element needs to be refreshed so that
        // it becomes child viewable due to new child items are added now
        if (isTargetEmptyChild) {
            var targetRefreshedElement = ListBase.createListItemFromJson(this.createElement, targetDS, this.listBaseOption, null, null, this);
            this.setAttributes(targetRefreshedElement);
            targetUL.insertBefore(targetRefreshedElement[0], targetLi);
            detach(targetLi);
            isRefreshTemplateNeeded = true;
        }
        // if it is already rendered element, we need to create and append new elements
        if (isAlreadyRenderedUL && itemQueue) {
            for (var i = 0; i < itemQueue.length; i++) {
                targetDS.push(itemQueue[i]);
                this.addItemIntoDom(itemQueue[i], targetUL, targetDS);
            }
            isRefreshTemplateNeeded = true;
        }
        if (isRefreshTemplateNeeded) {
            this.updateBlazorTemplates(true);
        }
    };
    ListView.prototype.addItemIntoDom = function (currentItem, targetUL, curViewDS) {
        var index = curViewDS.indexOf(currentItem);
        this.addListItem(currentItem, index, targetUL, curViewDS);
        var curItemDS = curViewDS[index - 1];
        if (curItemDS && curItemDS.isHeader && curItemDS.items.length === 1) {
            this.addListItem(curItemDS, (index - 1), targetUL, curViewDS);
        }
    };
    ListView.prototype.addListItem = function (dataSource, index, ulElement, curViewDS) {
        var target = this.getLiFromObjOrElement(curViewDS[index + 1]) ||
            this.getLiFromObjOrElement(curViewDS[index + 2]) || null;
        var li = ListBase.createListItemFromJson(this.createElement, [dataSource], this.listBaseOption, null, null, this);
        this.setAttributes(li);
        // eslint-disable-next-line
        if (this.template && this.isReact) {
            this.renderReactTemplates();
        }
        ulElement.insertBefore(li[0], target);
    };
    /**
     * Removes the list item from the data source based on a passed
     *  element like fields: { text: 'Name', tooltip: 'Name', id:'id'}
     *
     * @param  {Fields | HTMLElement | Element} item - We can pass element Object or Fields as Object with ID and Text fields.
     */
    ListView.prototype.removeItem = function (item) {
        var listDataSource = this.dataSource instanceof DataManager
            ? this.localData : this.dataSource;
        if (this.enableVirtualization) {
            this.virtualizationModule.removeItem(item);
        }
        else {
            this.removeItemFromList(item, listDataSource);
            this.updateBlazorTemplates(true);
        }
    };
    ListView.prototype.removeItemFromList = function (obj, listDataSource) {
        var _this = this;
        var curViewDS = this.curViewDS;
        var fields = obj instanceof Element ? this.getElementUID(obj) : obj;
        var dataSource;
        // eslint-disable-next-line prefer-const
        dataSource = this.findItemFromDS(listDataSource, fields, true);
        if (dataSource) {
            var data_1;
            // eslint-disable-next-line prefer-const
            data_1 = this.findItemFromDS(dataSource, fields);
            var index = curViewDS.indexOf(data_1);
            var li = this.getLiFromObjOrElement(obj);
            var groupLi = void 0;
            this.validateNestedView(li);
            if (this.fields.groupBy && this.curViewDS[index - 1] &&
                curViewDS[index - 1].isHeader &&
                curViewDS[index - 1].items.length === 1) {
                if (li && li.previousElementSibling.classList.contains(classNames.groupListItem) &&
                    (isNullOrUndefined(li.nextElementSibling) || (li.nextElementSibling &&
                        li.nextElementSibling.classList.contains(classNames.groupListItem)))) {
                    groupLi = li.previousElementSibling;
                }
            }
            if (li) {
                detach(li);
            }
            if (groupLi) {
                detach(groupLi);
            }
            // eslint-disable-next-line
            var foundData = (dataSource.length - 1) <= 0
                ? this.findParent(this.localData, this.fields.id, 
                // eslint-disable-next-line
                function (value) { return value === data_1[_this.fields.id]; }, null) : null;
            var dsIndex = dataSource.indexOf(data_1);
            dataSource.splice(dsIndex, 1);
            this.setViewDataSource(listDataSource);
            if (foundData
                && foundData.parent
                && Array.isArray(foundData.parent[this.fields.child])
                && foundData.parent[this.fields.child].length <= 0) {
                var parentLi = this.getLiFromObjOrElement(foundData.parent);
                if (parentLi) {
                    var li_1 = ListBase.createListItemFromJson(this.createElement, [foundData.parent], this.listBaseOption, null, null, this);
                    this.setAttributes(li_1);
                    parentLi.parentElement.insertBefore(li_1[0], parentLi);
                    parentLi.parentElement.removeChild(parentLi);
                }
            }
            if (dataSource.length <= 0) {
                this.back();
            }
            this.liCollection = Array.prototype.slice.call(this.element.querySelectorAll('.' + classNames.listItem));
        }
    };
    // validate before removing an element whether the current view is inside target element's child view
    ListView.prototype.validateNestedView = function (li) {
        var liID = li ? li.getAttribute('data-uid').toString().toLowerCase() : null;
        if (liID && this.curDSLevel && this.curDSLevel.length > 0) {
            while (this.curDSLevel.some(function (id) { return id.toString().toLowerCase() === liID; })) {
                this.back();
            }
        }
    };
    /**
     * Removes multiple items from the ListView by passing the array of elements or array of field objects.
     *
     * @param  {Fields[] | HTMLElement[] | Element[]} item - We can pass array of elements or array of field Object with ID and Text fields.
     */
    ListView.prototype.removeMultipleItems = function (item) {
        if (item.length) {
            for (var i = 0; i < item.length; i++) {
                this.removeItem(item[i]);
            }
            this.updateBlazorTemplates(true);
        }
    };
    // eslint-disable-next-line
    ListView.prototype.findParent = function (dataSource, id, callback, parent) {
        // eslint-disable-next-line no-prototype-builtins
        if (dataSource.hasOwnProperty(id) && callback(dataSource[id]) === true) {
            return extend({}, dataSource);
        }
        for (var i = 0; i < Object.keys(dataSource).length; i++) {
            if (dataSource[Object.keys(dataSource)[i]]
                && typeof dataSource[Object.keys(dataSource)[i]] === 'object') {
                // eslint-disable-next-line
                var result = this.findParent(dataSource[Object.keys(dataSource)[i]], id, callback, dataSource);
                if (result != null) {
                    if (!result.parent) {
                        result.parent = parent;
                    }
                    return result;
                }
            }
        }
        return null;
    };
    // Module Required function
    ListView.prototype.getModuleName = function () {
        return 'listview';
    };
    ListView.prototype.requiredModules = function () {
        var modules = [];
        if (this.enableVirtualization) {
            modules.push({ args: [this], member: 'virtualization' });
        }
        return modules;
    };
    /**
     * Get the properties to be maintained in the persisted state.
     */
    ListView.prototype.getPersistData = function () {
        return this.addOnPersist(['cssClass', 'enableRtl', 'htmlAttributes',
            'enable', 'fields', 'animation', 'headerTitle',
            'sortOrder', 'showIcon', 'height', 'width', 'showCheckBox', 'checkBoxPosition']);
    };
    __decorate([
        Property('')
    ], ListView.prototype, "cssClass", void 0);
    __decorate([
        Property(false)
    ], ListView.prototype, "enableVirtualization", void 0);
    __decorate([
        Property({})
    ], ListView.prototype, "htmlAttributes", void 0);
    __decorate([
        Property(true)
    ], ListView.prototype, "enable", void 0);
    __decorate([
        Property([])
    ], ListView.prototype, "dataSource", void 0);
    __decorate([
        Property()
    ], ListView.prototype, "query", void 0);
    __decorate([
        Complex(ListBase.defaultMappedFields, FieldSettings)
    ], ListView.prototype, "fields", void 0);
    __decorate([
        Property({ effect: 'SlideLeft', duration: 400, easing: 'ease' })
    ], ListView.prototype, "animation", void 0);
    __decorate([
        Property('None')
    ], ListView.prototype, "sortOrder", void 0);
    __decorate([
        Property(false)
    ], ListView.prototype, "showIcon", void 0);
    __decorate([
        Property(false)
    ], ListView.prototype, "showCheckBox", void 0);
    __decorate([
        Property('Left')
    ], ListView.prototype, "checkBoxPosition", void 0);
    __decorate([
        Property('')
    ], ListView.prototype, "headerTitle", void 0);
    __decorate([
        Property(false)
    ], ListView.prototype, "showHeader", void 0);
    __decorate([
        Property(false)
    ], ListView.prototype, "enableHtmlSanitizer", void 0);
    __decorate([
        Property('')
    ], ListView.prototype, "height", void 0);
    __decorate([
        Property('')
    ], ListView.prototype, "width", void 0);
    __decorate([
        Property(null)
    ], ListView.prototype, "template", void 0);
    __decorate([
        Property(null)
    ], ListView.prototype, "headerTemplate", void 0);
    __decorate([
        Property(null)
    ], ListView.prototype, "groupTemplate", void 0);
    __decorate([
        Event()
    ], ListView.prototype, "select", void 0);
    __decorate([
        Event()
    ], ListView.prototype, "actionBegin", void 0);
    __decorate([
        Event()
    ], ListView.prototype, "actionComplete", void 0);
    __decorate([
        Event()
    ], ListView.prototype, "actionFailure", void 0);
    ListView = __decorate([
        NotifyPropertyChanges
    ], ListView);
    return ListView;
}(Component));
export { ListView };
