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
import { Component, EventHandler, Property, Event, KeyboardEvents, rippleEffect } from '@syncfusion/ej2-base';
import { getUniqueID, compile as templateCompiler } from '@syncfusion/ej2-base';
import { isVisible, closest, attributes, detach, select, addClass, append } from '@syncfusion/ej2-base';
import { NotifyPropertyChanges, ChildProperty, Collection, Animation } from '@syncfusion/ej2-base';
import { setStyleAttribute as setStyle, Complex } from '@syncfusion/ej2-base';
import { isNullOrUndefined as isNOU, formatUnit, selectAll, SanitizeHtmlHelper, isRippleEnabled } from '@syncfusion/ej2-base';
var CLS_ACRDN_ROOT = 'e-acrdn-root';
var CLS_ROOT = 'e-accordion';
var CLS_ITEM = 'e-acrdn-item';
var CLS_ITEMFOCUS = 'e-item-focus';
var CLS_ITEMHIDE = 'e-hide';
var CLS_HEADER = 'e-acrdn-header';
var CLS_HEADERICN = 'e-acrdn-header-icon';
var CLS_HEADERCTN = 'e-acrdn-header-content';
var CLS_CONTENT = 'e-acrdn-panel';
var CLS_CTENT = 'e-acrdn-content';
var CLS_TOOGLEICN = 'e-toggle-icon';
var CLS_COLLAPSEICN = 'e-tgl-collapse-icon e-icons';
var CLS_EXPANDICN = 'e-expand-icon';
var CLS_RTL = 'e-rtl';
var CLS_CTNHIDE = 'e-content-hide';
var CLS_SLCT = 'e-select';
var CLS_SLCTED = 'e-selected';
var CLS_ACTIVE = 'e-active';
var CLS_ANIMATE = 'e-animate';
var CLS_DISABLE = 'e-overlay';
var CLS_TOGANIMATE = 'e-toggle-animation';
var CLS_NEST = 'e-nested';
var CLS_EXPANDSTATE = 'e-expand-state';
var CLS_CONTAINER = 'e-accordion-container';
/**
 * Objects used for configuring the Accordion expanding item action properties.
 */
var AccordionActionSettings = /** @class */ (function (_super) {
    __extends(AccordionActionSettings, _super);
    function AccordionActionSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property('SlideDown')
    ], AccordionActionSettings.prototype, "effect", void 0);
    __decorate([
        Property(400)
    ], AccordionActionSettings.prototype, "duration", void 0);
    __decorate([
        Property('linear')
    ], AccordionActionSettings.prototype, "easing", void 0);
    return AccordionActionSettings;
}(ChildProperty));
export { AccordionActionSettings };
/**
 * Objects used for configuring the Accordion animation properties.
 */
var AccordionAnimationSettings = /** @class */ (function (_super) {
    __extends(AccordionAnimationSettings, _super);
    function AccordionAnimationSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Complex({ effect: 'SlideUp', duration: 400, easing: 'linear' }, AccordionActionSettings)
    ], AccordionAnimationSettings.prototype, "collapse", void 0);
    __decorate([
        Complex({ effect: 'SlideDown', duration: 400, easing: 'linear' }, AccordionActionSettings)
    ], AccordionAnimationSettings.prototype, "expand", void 0);
    return AccordionAnimationSettings;
}(ChildProperty));
export { AccordionAnimationSettings };
/**
 * An item object that is used to configure Accordion items.
 */
var AccordionItem = /** @class */ (function (_super) {
    __extends(AccordionItem, _super);
    function AccordionItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(null)
    ], AccordionItem.prototype, "content", void 0);
    __decorate([
        Property(null)
    ], AccordionItem.prototype, "header", void 0);
    __decorate([
        Property(null)
    ], AccordionItem.prototype, "cssClass", void 0);
    __decorate([
        Property(null)
    ], AccordionItem.prototype, "iconCss", void 0);
    __decorate([
        Property(false)
    ], AccordionItem.prototype, "expanded", void 0);
    __decorate([
        Property(true)
    ], AccordionItem.prototype, "visible", void 0);
    __decorate([
        Property(false)
    ], AccordionItem.prototype, "disabled", void 0);
    __decorate([
        Property()
    ], AccordionItem.prototype, "id", void 0);
    return AccordionItem;
}(ChildProperty));
export { AccordionItem };
/**
 * The Accordion is a vertically collapsible content panel that displays one or more panels at a time within the available space.
 * ```html
 * <div id='accordion'/>
 * <script>
 *   var accordionObj = new Accordion();
 *   accordionObj.appendTo('#accordion');
 * </script>
 * ```
 */
var Accordion = /** @class */ (function (_super) {
    __extends(Accordion, _super);
    /**
     * Initializes a new instance of the Accordion class.
     *
     * @param {AccordionModel} options  - Specifies Accordion model properties as options.
     * @param {string | HTMLElement} element  - Specifies the element that is rendered as an Accordion.
     */
    function Accordion(options, element) {
        var _this = _super.call(this, options, element) || this;
        /**
         * Contains the keyboard configuration of the Accordion.
         */
        _this.keyConfigs = {
            moveUp: 'uparrow',
            moveDown: 'downarrow',
            enter: 'enter',
            space: 'space',
            home: 'home',
            end: 'end'
        };
        return _this;
    }
    /**
     * Removes the control from the DOM and also removes all its related events.
     *
     * @returns {void}
     */
    Accordion.prototype.destroy = function () {
        var _this = this;
        if (this.isReact) {
            this.clearTemplate();
        }
        var ele = this.element;
        _super.prototype.destroy.call(this);
        this.unwireEvents();
        this.isDestroy = true;
        this.restoreContent(null);
        [].slice.call(ele.children).forEach(function (el) {
            ele.removeChild(el);
        });
        if (this.trgtEle) {
            while (this.ctrlTem.firstElementChild) {
                ele.appendChild(this.ctrlTem.firstElementChild);
            }
        }
        ele.classList.remove(CLS_ACRDN_ROOT);
        ele.removeAttribute('style');
        ['aria-disabled', 'aria-multiselectable', 'role', 'data-ripple'].forEach(function (attrb) {
            _this.element.removeAttribute(attrb);
        });
        if (!this.isNested && isRippleEnabled) {
            this.removeRippleEffect();
        }
    };
    Accordion.prototype.preRender = function () {
        var nested = closest(this.element, '.' + CLS_CONTENT);
        this.isNested = false;
        this.templateEle = [];
        if (!this.isDestroy) {
            this.isDestroy = false;
        }
        if (!isNOU(nested)) {
            nested.classList.add(CLS_NEST);
            this.isNested = true;
        }
        else {
            this.element.classList.add(CLS_ACRDN_ROOT);
        }
        if (this.enableRtl) {
            this.add(this.element, CLS_RTL);
        }
    };
    Accordion.prototype.add = function (ele, val) {
        ele.classList.add(val);
    };
    Accordion.prototype.remove = function (ele, val) {
        ele.classList.remove(val);
    };
    /**
     * To initialize the control rendering
     *
     * @private
     * @returns {void}
     */
    Accordion.prototype.render = function () {
        if (!this.isServerRendered) {
            this.initializeheaderTemplate();
            this.initializeItemTemplate();
            this.initialize();
            this.renderControl();
        }
        else {
            this.wireFocusEvents();
        }
        this.wireEvents();
        this.renderComplete();
    };
    Accordion.prototype.initialize = function () {
        var width = formatUnit(this.width);
        var height = formatUnit(this.height);
        setStyle(this.element, { 'width': width, 'height': height });
        var ariaAttr = {
            'aria-disabled': 'false', 'role': 'presentation', 'aria-multiselectable': 'true'
        };
        if (isNOU(this.initExpand)) {
            this.initExpand = [];
        }
        if (this.expandedIndices.length > 0) {
            this.initExpand = this.expandedIndices;
        }
        attributes(this.element, ariaAttr);
        if (this.expandMode === 'Single') {
            this.element.setAttribute('aria-multiselectable', 'false');
        }
    };
    Accordion.prototype.renderControl = function () {
        this.trgtEle = (this.element.children.length > 0) ? select('div', this.element) : null;
        this.renderItems();
        this.initItemExpand();
    };
    Accordion.prototype.wireFocusEvents = function () {
        var acrdItem = [].slice.call(this.element.querySelectorAll('.' + CLS_ITEM));
        for (var _i = 0, acrdItem_1 = acrdItem; _i < acrdItem_1.length; _i++) {
            var item = acrdItem_1[_i];
            var headerEle = item.querySelector('.' + CLS_HEADER);
            if (item.childElementCount > 0 && headerEle) {
                EventHandler.clearEvents(headerEle);
                EventHandler.add(headerEle, 'focus', this.focusIn, this);
                EventHandler.add(headerEle, 'blur', this.focusOut, this);
            }
        }
    };
    Accordion.prototype.unwireEvents = function () {
        EventHandler.remove(this.element, 'click', this.clickHandler);
        if (!isNOU(this.keyModule)) {
            this.keyModule.destroy();
        }
    };
    Accordion.prototype.wireEvents = function () {
        EventHandler.add(this.element, 'click', this.clickHandler, this);
        if (!this.isNested && !this.isDestroy) {
            this.removeRippleEffect = rippleEffect(this.element, { selector: '.' + CLS_HEADER });
        }
        if (!this.isNested) {
            this.keyModule = new KeyboardEvents(this.element, {
                keyAction: this.keyActionHandler.bind(this),
                keyConfigs: this.keyConfigs,
                eventName: 'keydown'
            });
        }
    };
    Accordion.prototype.templateParser = function (template) {
        if (template) {
            try {
                if (document.querySelectorAll(template).length) {
                    return templateCompiler(document.querySelector(template).innerHTML.trim());
                }
            }
            catch (error) {
                return templateCompiler(template);
            }
        }
        return undefined;
    };
    Accordion.prototype.initializeheaderTemplate = function () {
        if (this.headerTemplate) {
            this.headerTemplateFn = this.templateParser(this.headerTemplate);
        }
    };
    Accordion.prototype.initializeItemTemplate = function () {
        if (this.itemTemplate) {
            this.itemTemplateFn = this.templateParser(this.itemTemplate);
        }
    };
    /* eslint-disable */
    Accordion.prototype.getheaderTemplate = function () {
        return this.headerTemplateFn;
    };
    /* eslint-disable */
    Accordion.prototype.getItemTemplate = function () {
        return this.itemTemplateFn;
    };
    Accordion.prototype.focusIn = function (e) {
        e.target.parentElement.classList.add(CLS_ITEMFOCUS);
    };
    Accordion.prototype.focusOut = function (e) {
        e.target.parentElement.classList.remove(CLS_ITEMFOCUS);
    };
    Accordion.prototype.ctrlTemplate = function () {
        this.ctrlTem = this.element.cloneNode(true);
        var innerEles;
        var rootEle = select('.' + CLS_CONTAINER, this.element);
        if (rootEle) {
            innerEles = rootEle.children;
        }
        else {
            innerEles = this.element.children;
        }
        var items = [];
        /* eslint-disable */
        [].slice.call(innerEles).forEach(function (el) {
            items.push({
                header: (el.childElementCount > 0 && el.children[0]) ? (el.children[0]) : '',
                content: (el.childElementCount > 1 && el.children[1]) ? (el.children[1]) : ''
            });
            el.parentNode.removeChild(el);
        });
        /* eslint-enable */
        if (rootEle) {
            this.element.removeChild(rootEle);
        }
        this.setProperties({ items: items }, true);
    };
    Accordion.prototype.toggleIconGenerate = function () {
        var tglIcon = this.createElement('div', { className: CLS_TOOGLEICN });
        var hdrColIcon = this.createElement('span', { className: CLS_COLLAPSEICN });
        tglIcon.appendChild(hdrColIcon);
        return tglIcon;
    };
    Accordion.prototype.initItemExpand = function () {
        var len = this.initExpand.length;
        if (len === 0) {
            return;
        }
        if (this.expandMode === 'Single') {
            this.expandItem(true, this.initExpand[len - 1]);
        }
        else {
            for (var i = 0; i < len; i++) {
                this.expandItem(true, this.initExpand[i]);
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (this.isReact) {
            this.renderReactTemplates();
        }
    };
    Accordion.prototype.renderItems = function () {
        var _this = this;
        var ele = this.element;
        var innerItem;
        var innerDataSourceItem;
        if (!isNOU(this.trgtEle)) {
            this.ctrlTemplate();
        }
        if (this.dataSource.length > 0) {
            this.dataSource.forEach(function (item, index) {
                innerDataSourceItem = _this.renderInnerItem(item, index);
                ele.appendChild(innerDataSourceItem);
                if (innerDataSourceItem.childElementCount > 0) {
                    EventHandler.add(innerDataSourceItem.querySelector('.' + CLS_HEADER), 'focus', _this.focusIn, _this);
                    EventHandler.add(innerDataSourceItem.querySelector('.' + CLS_HEADER), 'blur', _this.focusOut, _this);
                }
            });
        }
        else {
            var items = this.items;
            if (ele && items.length > 0) {
                items.forEach(function (item, index) {
                    innerItem = _this.renderInnerItem(item, index);
                    ele.appendChild(innerItem);
                    if (innerItem.childElementCount > 0) {
                        EventHandler.add(innerItem.querySelector('.' + CLS_HEADER), 'focus', _this.focusIn, _this);
                        EventHandler.add(innerItem.querySelector('.' + CLS_HEADER), 'blur', _this.focusOut, _this);
                    }
                });
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (this.isReact) {
            this.renderReactTemplates();
        }
    };
    Accordion.prototype.clickHandler = function (e) {
        var _this = this;
        var trgt = e.target;
        var items = this.getItems();
        var eventArgs = {};
        var tglIcon;
        var acrdEle = closest(trgt, '.' + CLS_ROOT);
        if (acrdEle !== this.element) {
            return;
        }
        trgt.classList.add('e-target');
        var acrdnItem = closest(trgt, '.' + CLS_ITEM);
        var acrdnHdr = closest(trgt, '.' + CLS_HEADER);
        var acrdnCtn = closest(trgt, '.' + CLS_CONTENT);
        if (acrdnItem && (isNOU(acrdnHdr) || isNOU(acrdnCtn))) {
            acrdnHdr = acrdnItem.children[0];
            acrdnCtn = acrdnItem.children[1];
        }
        if (acrdnHdr) {
            tglIcon = select('.' + CLS_TOOGLEICN, acrdnHdr);
        }
        var acrdnCtnItem;
        if (acrdnHdr) {
            acrdnCtnItem = closest(acrdnHdr, '.' + CLS_ITEM);
        }
        else if (acrdnCtn) {
            acrdnCtnItem = closest(acrdnCtn, '.' + CLS_ITEM);
        }
        var index = this.getIndexByItem(acrdnItem);
        if (acrdnCtnItem) {
            eventArgs.item = items[this.getIndexByItem(acrdnCtnItem)];
        }
        eventArgs.originalEvent = e;
        var ctnCheck = !isNOU(tglIcon) && acrdnItem.childElementCount <= 1;
        if (ctnCheck && (isNOU(acrdnCtn) || !isNOU(select('.' + CLS_HEADER + ' .' + CLS_TOOGLEICN, acrdnCtnItem)))) {
            if (!this.isServerRendered) {
                acrdnItem.appendChild(this.contentRendering(index));
                this.ariaAttrUpdate(acrdnItem);
                this.afterContentRender(trgt, eventArgs, acrdnItem, acrdnHdr, acrdnCtn, acrdnCtnItem);
            }
            else {
                var id = acrdnItem.id;
                if (this.items.length > 0) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    this.interopAdaptor.invokeMethodAsync('OnItemClick', index).then(function () {
                        if (_this.isDestroyed) {
                            return;
                        }
                        _this.afterContentRender(trgt, eventArgs, acrdnItem, acrdnHdr, acrdnCtn, acrdnCtnItem);
                    });
                }
                else {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    this.interopAdaptor.invokeMethodAsync('OnDataClick', id).then(function () {
                        if (_this.isDestroyed) {
                            return;
                        }
                        _this.afterContentRender(trgt, eventArgs, acrdnItem, acrdnHdr, acrdnCtn, acrdnCtnItem);
                    });
                }
            }
        }
        else {
            this.afterContentRender(trgt, eventArgs, acrdnItem, acrdnHdr, acrdnCtn, acrdnCtnItem);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (this.isReact) {
            this.renderReactTemplates();
        }
    };
    Accordion.prototype.afterContentRender = function (trgt, eventArgs, acrdnItem, acrdnHdr, acrdnCtn, acrdnCtnItem) {
        var _this = this;
        var acrdActive = [];
        this.trigger('clicked', eventArgs);
        var cntclkCheck = (acrdnCtn && !isNOU(select('.e-target', acrdnCtn)));
        var inlineAcrdnSel = '.' + CLS_CONTENT + ' .' + CLS_ROOT;
        var inlineEleAcrdn = acrdnCtn && !isNOU(select('.' + CLS_ROOT, acrdnCtn)) && isNOU(closest(trgt, inlineAcrdnSel));
        var nestContCheck = acrdnCtn && isNOU(select('.' + CLS_ROOT, acrdnCtn)) || !(closest(trgt, '.' + CLS_ROOT) === this.element);
        cntclkCheck = cntclkCheck && (inlineEleAcrdn || nestContCheck);
        trgt.classList.remove('e-target');
        if (trgt.classList.contains(CLS_CONTENT) || trgt.classList.contains(CLS_CTENT) || cntclkCheck) {
            return;
        }
        var acrdcontainer = this.element.querySelector('.' + CLS_CONTAINER);
        var acrdnchild = (acrdcontainer) ? acrdcontainer.children : this.element.children;
        [].slice.call(acrdnchild).forEach(function (el) {
            if (el.classList.contains(CLS_ACTIVE)) {
                acrdActive.push(el);
            }
        });
        var acrdAniEle = [].slice.call(this.element.querySelectorAll('.' + CLS_ITEM + ' [' + CLS_ANIMATE + ']'));
        if (acrdAniEle.length > 0) {
            for (var _i = 0, acrdAniEle_1 = acrdAniEle; _i < acrdAniEle_1.length; _i++) {
                var el = acrdAniEle_1[_i];
                acrdActive.push(el.parentElement);
            }
        }
        var sameContentCheck = acrdActive.indexOf(acrdnCtnItem) !== -1 && acrdnCtn.getAttribute('e-animate') === 'true';
        var sameHeader = false;
        if (!isNOU(acrdnItem) && !isNOU(acrdnHdr)) {
            var acrdnCtn_1 = select('.' + CLS_CONTENT, acrdnItem);
            var acrdnRoot = closest(acrdnItem, '.' + CLS_ACRDN_ROOT);
            var expandState = acrdnRoot.querySelector('.' + CLS_EXPANDSTATE);
            if (isNOU(acrdnCtn_1)) {
                return;
            }
            sameHeader = (expandState === acrdnItem);
            if (isVisible(acrdnCtn_1) && (!sameContentCheck || acrdnCtnItem.classList.contains(CLS_SLCTED))) {
                this.collapse(acrdnCtn_1);
            }
            else {
                if ((acrdActive.length > 0) && this.expandMode === 'Single' && !sameContentCheck) {
                    acrdActive.forEach(function (el) {
                        _this.collapse(select('.' + CLS_CONTENT, el));
                        el.classList.remove(CLS_EXPANDSTATE);
                    });
                }
                this.expand(acrdnCtn_1);
            }
            if (!isNOU(expandState) && !sameHeader) {
                expandState.classList.remove(CLS_EXPANDSTATE);
            }
        }
    };
    Accordion.prototype.eleMoveFocus = function (action, root, trgt) {
        var clst;
        var clstItem = closest(trgt, '.' + CLS_ITEM);
        if (trgt === root) {
            clst = ((action === 'moveUp' ? trgt.lastElementChild : trgt).querySelector('.' + CLS_HEADER));
        }
        else if (trgt.classList.contains(CLS_HEADER)) {
            clstItem = (action === 'moveUp' ? clstItem.previousElementSibling : clstItem.nextElementSibling);
            if (clstItem) {
                clst = select('.' + CLS_HEADER, clstItem);
            }
        }
        if (clst) {
            clst.focus();
        }
    };
    Accordion.prototype.keyActionHandler = function (e) {
        var trgt = e.target;
        var header = closest(e.target, CLS_HEADER);
        if (isNOU(header) && !trgt.classList.contains(CLS_ROOT) && !trgt.classList.contains(CLS_HEADER)) {
            return;
        }
        var clst;
        var root = this.element;
        var content;
        switch (e.action) {
            case 'moveUp':
                this.eleMoveFocus(e.action, root, trgt);
                break;
            case 'moveDown':
                this.eleMoveFocus(e.action, root, trgt);
                break;
            case 'space':
            case 'enter':
                content = trgt.nextElementSibling;
                if (!isNOU(content) && content.classList.contains(CLS_CONTENT)) {
                    if (content.getAttribute('e-animate') !== 'true') {
                        trgt.click();
                    }
                }
                else {
                    trgt.click();
                }
                break;
            case 'home':
            case 'end':
                clst = e.action === 'home' ? root.firstElementChild.children[0] : root.lastElementChild.children[0];
                clst.focus();
                break;
        }
    };
    Accordion.prototype.headerEleGenerate = function () {
        var header = this.createElement('div', { className: CLS_HEADER, id: getUniqueID('acrdn_header') });
        var items = this.getItems();
        var ariaAttr = {
            'tabindex': '0', 'role': 'heading', 'aria-selected': 'false', 'aria-label': 'collapsed',
            'aria-disabled': 'false', 'aria-level': items.length.toString()
        };
        attributes(header, ariaAttr);
        return header;
    };
    Accordion.prototype.renderInnerItem = function (item, index) {
        var innerEle = this.createElement('div', { className: CLS_ITEM });
        innerEle.id = getUniqueID('acrdn_item');
        if (isNOU(item.id)) {
            item.id = innerEle.id;
        }
        attributes(innerEle, { 'aria-expanded': 'false' });
        if (this.headerTemplate) {
            var ctnEle = this.headerEleGenerate();
            var hdrEle = this.createElement('div', { className: CLS_HEADERCTN });
            ctnEle.appendChild(hdrEle);
            append(this.getheaderTemplate()(item, this, 'headerTemplate', this.element.id + '_headerTemplate', false), hdrEle);
            innerEle.appendChild(ctnEle);
            ctnEle.appendChild(this.toggleIconGenerate());
            this.add(innerEle, CLS_SLCT);
            return innerEle;
        }
        if (item.header && this.angularnativeCondiCheck(item, 'header')) {
            if (this.enableHtmlSanitizer && typeof (item.header) === 'string') {
                item.header = SanitizeHtmlHelper.sanitize(item.header);
            }
            var ctnEle = this.headerEleGenerate();
            var hdrEle = this.createElement('div', { className: CLS_HEADERCTN });
            ctnEle.appendChild(hdrEle);
            ctnEle.appendChild(this.fetchElement(hdrEle, item.header, index, true));
            innerEle.appendChild(ctnEle);
        }
        var hdr = select('.' + CLS_HEADER, innerEle);
        if (item.expanded && !isNOU(index) && (!this.enablePersistence)) {
            if (this.initExpand.indexOf(index) === -1) {
                this.initExpand.push(index);
            }
        }
        if (item.cssClass) {
            addClass([innerEle], item.cssClass.split(' '));
        }
        if (item.disabled) {
            addClass([innerEle], CLS_DISABLE);
        }
        if (item.visible === false) {
            addClass([innerEle], CLS_ITEMHIDE);
        }
        if (item.iconCss) {
            var hdrIcnEle = this.createElement('div', { className: CLS_HEADERICN });
            var icon = this.createElement('span', { className: item.iconCss + ' e-icons' });
            hdrIcnEle.appendChild(icon);
            if (isNOU(hdr)) {
                hdr = this.headerEleGenerate();
                hdr.appendChild(hdrIcnEle);
                innerEle.appendChild(hdr);
            }
            else {
                hdr.insertBefore(hdrIcnEle, hdr.childNodes[0]);
            }
        }
        if (item.content && this.angularnativeCondiCheck(item, 'content')) {
            var hdrIcon = this.toggleIconGenerate();
            if (isNOU(hdr)) {
                hdr = this.headerEleGenerate();
                innerEle.appendChild(hdr);
            }
            hdr.appendChild(hdrIcon);
            this.add(innerEle, CLS_SLCT);
        }
        return innerEle;
    };
    Accordion.prototype.angularnativeCondiCheck = function (item, prop) {
        var property = prop === 'content' ? item.content : item.header;
        var content = property;
        if (this.isAngular && !isNOU(content.elementRef)) {
            var data = content.elementRef.nativeElement.data;
            if (isNOU(data) || data === '' || (data.indexOf('bindings=') === -1)) {
                return true;
            }
            var parseddata = JSON.parse(content.elementRef.nativeElement.data.replace('bindings=', ''));
            if (!isNOU(parseddata) && parseddata['ng-reflect-ng-if'] === 'false') {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Accordion.prototype.fetchElement = function (ele, value, index, isHeader) {
        /* eslint-disable */
        var templateFn;
        var temString;
        try {
            if (document.querySelectorAll(value).length && value !== 'Button') {
                var eleVal = document.querySelector(value);
                temString = eleVal.outerHTML.trim();
                ele.appendChild(eleVal);
                eleVal.style.display = '';
            }
        }
        catch (e) {
            if (typeof (value) === 'string') {
                ele.innerHTML = SanitizeHtmlHelper.sanitize(value);
                /* eslint-disable */
            }
            else if (!isNOU(this.trgtEle) && (value instanceof (HTMLElement))) {
                ele.appendChild(value);
                ele.firstElementChild.style.display = '';
                /* eslint-enable */
            }
            else {
                templateFn = templateCompiler(value);
            }
        }
        var tempArray;
        if (!isNOU(templateFn)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (this.isReact) {
                this.renderReactTemplates();
            }
            var templateProps = void 0;
            var templateName = void 0;
            if (ele.classList.contains(CLS_HEADERCTN)) {
                templateProps = this.element.id + index + '_header';
                templateName = 'header';
            }
            else if (ele.classList.contains(CLS_CTENT)) {
                templateProps = this.element.id + index + '_content';
                templateName = 'content';
            }
            tempArray = templateFn({}, this, templateName, templateProps, this.isStringTemplate);
        }
        if (!isNOU(tempArray) && tempArray.length > 0 && !(isNOU(tempArray[0].tagName) && tempArray.length === 1)) {
            [].slice.call(tempArray).forEach(function (el) {
                if (!isNOU(el.tagName)) {
                    el.style.display = '';
                }
                ele.appendChild(el);
            });
        }
        else if (ele.childElementCount === 0) {
            ele.innerHTML = SanitizeHtmlHelper.sanitize(value);
        }
        if (!isNOU(temString)) {
            if (this.templateEle.indexOf(value) === -1) {
                this.templateEle.push(value);
            }
        }
        return ele;
    };
    Accordion.prototype.ariaAttrUpdate = function (itemEle) {
        var header = select('.' + CLS_HEADER, itemEle);
        var content = select('.' + CLS_CONTENT, itemEle);
        header.setAttribute('aria-controls', content.id);
        content.setAttribute('aria-labelledby', header.id);
        content.setAttribute('role', 'definition');
    };
    Accordion.prototype.contentRendering = function (index) {
        var itemcnt = this.createElement('div', { className: CLS_CONTENT + ' ' + CLS_CTNHIDE, id: getUniqueID('acrdn_panel') });
        attributes(itemcnt, { 'aria-hidden': 'true' });
        var ctn = this.createElement('div', { className: CLS_CTENT });
        if (this.dataSource.length > 0) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (this.isReact) {
                this.renderReactTemplates();
            }
            append(this.getItemTemplate()(this.dataSource[index], this, 'itemTemplate', this.element.id + '_itemTemplate', false), ctn);
            itemcnt.appendChild(ctn);
        }
        else {
            if (this.enableHtmlSanitizer && typeof (this.items[index].content)) {
                this.items[index].content = SanitizeHtmlHelper.sanitize(this.items[index].content);
            }
            itemcnt.appendChild(this.fetchElement(ctn, this.items[index].content, index, false));
        }
        return itemcnt;
    };
    Accordion.prototype.expand = function (trgt) {
        var _this = this;
        var items = this.getItems();
        var trgtItemEle = closest(trgt, '.' + CLS_ITEM);
        if (isNOU(trgt) || (isVisible(trgt) && trgt.getAttribute('e-animate') !== 'true') || trgtItemEle.classList.contains(CLS_DISABLE)) {
            return;
        }
        var acrdnRoot = closest(trgtItemEle, '.' + CLS_ACRDN_ROOT);
        var expandState = acrdnRoot.querySelector('.' + CLS_EXPANDSTATE);
        var animation = {
            name: this.animation.expand.effect,
            duration: this.animation.expand.duration,
            timingFunction: this.animation.expand.easing
        };
        var icon = select('.' + CLS_TOOGLEICN, trgtItemEle).firstElementChild;
        var eventArgs = {
            element: trgtItemEle,
            item: items[this.getIndexByItem(trgtItemEle)],
            index: this.getIndexByItem(trgtItemEle),
            content: trgtItemEle.querySelector('.' + CLS_CONTENT),
            isExpanded: true
        };
        this.trigger('expanding', eventArgs, function (expandArgs) {
            if (!expandArgs.cancel) {
                icon.classList.add(CLS_TOGANIMATE);
                _this.expandedItemsPush(trgtItemEle);
                if (!isNOU(expandState)) {
                    expandState.classList.remove(CLS_EXPANDSTATE);
                }
                trgtItemEle.classList.add(CLS_EXPANDSTATE);
                if ((animation.name === 'None')) {
                    _this.expandProgress('begin', icon, trgt, trgtItemEle, expandArgs);
                    _this.expandProgress('end', icon, trgt, trgtItemEle, expandArgs);
                }
                else {
                    _this.expandAnimation(animation.name, icon, trgt, trgtItemEle, animation, expandArgs);
                }
            }
        });
    };
    Accordion.prototype.expandAnimation = function (ef, icn, trgt, trgtItemEle, animate, args) {
        var _this = this;
        var height;
        this.lastActiveItemId = trgtItemEle.id;
        if (ef === 'SlideDown') {
            animate.begin = function () {
                _this.expandProgress('begin', icn, trgt, trgtItemEle, args);
                trgt.style.position = 'absolute';
                height = trgtItemEle.offsetHeight;
                trgt.style.maxHeight = (trgt.offsetHeight) + 'px';
                trgtItemEle.style.maxHeight = '';
            };
            animate.progress = function () {
                trgtItemEle.style.minHeight = (height + trgt.offsetHeight) + 'px';
            };
            animate.end = function () {
                setStyle(trgt, { 'position': '', 'maxHeight': '' });
                trgtItemEle.style.minHeight = '';
                _this.expandProgress('end', icn, trgt, trgtItemEle, args);
            };
        }
        else {
            animate.begin = function () {
                _this.expandProgress('begin', icn, trgt, trgtItemEle, args);
            };
            animate.end = function () {
                _this.expandProgress('end', icn, trgt, trgtItemEle, args);
            };
        }
        new Animation(animate).animate(trgt);
    };
    Accordion.prototype.expandProgress = function (progress, icon, trgt, trgtItemEle, eventArgs) {
        this.remove(trgt, CLS_CTNHIDE);
        this.add(trgtItemEle, CLS_SLCTED);
        this.add(icon, CLS_EXPANDICN);
        if (progress === 'end') {
            this.add(trgtItemEle, CLS_ACTIVE);
            trgt.setAttribute('aria-hidden', 'false');
            attributes(trgtItemEle, { 'aria-expanded': 'true' });
            attributes(trgt.previousElementSibling, { 'aria-selected': 'true', 'aria-label': 'expanded' });
            icon.classList.remove(CLS_TOGANIMATE);
            this.trigger('expanded', eventArgs);
        }
    };
    Accordion.prototype.expandedItemsPush = function (item) {
        var index = this.getIndexByItem(item);
        if (this.expandedIndices.indexOf(index) === -1) {
            var temp = [].slice.call(this.expandedIndices);
            temp.push(index);
            this.setProperties({ expandedIndices: temp }, true);
        }
    };
    Accordion.prototype.getIndexByItem = function (item) {
        var itemEle = this.getItemElements();
        return [].slice.call(itemEle).indexOf(item);
    };
    Accordion.prototype.getItemElements = function () {
        var itemEle = [];
        var itemCollection = this.element.children;
        [].slice.call(itemCollection).forEach(function (el) {
            if (el.classList.contains(CLS_ITEM)) {
                itemEle.push(el);
            }
        });
        return itemEle;
    };
    Accordion.prototype.expandedItemsPop = function (item) {
        var index = this.getIndexByItem(item);
        var temp = [].slice.call(this.expandedIndices);
        temp.splice(temp.indexOf(index), 1);
        this.setProperties({ expandedIndices: temp }, true);
    };
    Accordion.prototype.collapse = function (trgt) {
        var _this = this;
        var items = this.getItems();
        var trgtItemEle = closest(trgt, '.' + CLS_ITEM);
        if (isNOU(trgt) || !isVisible(trgt) || trgtItemEle.classList.contains(CLS_DISABLE)) {
            return;
        }
        var animation = {
            name: this.animation.collapse.effect,
            duration: this.animation.collapse.duration,
            timingFunction: this.animation.collapse.easing
        };
        var icon = select('.' + CLS_TOOGLEICN, trgtItemEle).firstElementChild;
        var eventArgs = {
            element: trgtItemEle,
            item: items[this.getIndexByItem(trgtItemEle)],
            index: this.getIndexByItem(trgtItemEle),
            content: trgtItemEle.querySelector('.' + CLS_CONTENT),
            isExpanded: false
        };
        this.trigger('expanding', eventArgs, function (expandArgs) {
            if (!expandArgs.cancel) {
                _this.expandedItemsPop(trgtItemEle);
                trgtItemEle.classList.add(CLS_EXPANDSTATE);
                icon.classList.add(CLS_TOGANIMATE);
                if ((animation.name === 'None')) {
                    _this.collapseProgress('begin', icon, trgt, trgtItemEle, expandArgs);
                    _this.collapseProgress('end', icon, trgt, trgtItemEle, expandArgs);
                }
                else {
                    _this.collapseAnimation(animation.name, trgt, trgtItemEle, icon, animation, expandArgs);
                }
            }
        });
    };
    Accordion.prototype.collapseAnimation = function (ef, trgt, trgtItEl, icn, animate, args) {
        var _this = this;
        var height;
        var trgtHeight;
        var itemHeight;
        var remain;
        this.lastActiveItemId = trgtItEl.id;
        if (ef === 'SlideUp') {
            animate.begin = function () {
                itemHeight = trgtItEl.offsetHeight;
                trgtItEl.style.minHeight = itemHeight + 'px';
                trgt.style.position = 'absolute';
                height = trgtItEl.offsetHeight;
                trgtHeight = trgt.offsetHeight;
                trgt.style.maxHeight = trgtHeight + 'px';
                _this.collapseProgress('begin', icn, trgt, trgtItEl, args);
            };
            animate.progress = function () {
                remain = ((height - (trgtHeight - trgt.offsetHeight)));
                if (remain < itemHeight) {
                    trgtItEl.style.minHeight = remain + 'px';
                }
            };
            animate.end = function () {
                trgt.style.display = 'none';
                _this.collapseProgress('end', icn, trgt, trgtItEl, args);
                trgtItEl.style.minHeight = '';
                setStyle(trgt, { 'position': '', 'maxHeight': '', 'display': '' });
            };
        }
        else {
            animate.begin = function () {
                _this.collapseProgress('begin', icn, trgt, trgtItEl, args);
            };
            animate.end = function () {
                _this.collapseProgress('end', icn, trgt, trgtItEl, args);
            };
        }
        new Animation(animate).animate(trgt);
    };
    Accordion.prototype.collapseProgress = function (progress, icon, trgt, trgtItemEle, eventArgs) {
        this.remove(icon, CLS_EXPANDICN);
        this.remove(trgtItemEle, CLS_SLCTED);
        if (progress === 'end') {
            this.add(trgt, CLS_CTNHIDE);
            icon.classList.remove(CLS_TOGANIMATE);
            this.remove(trgtItemEle, CLS_ACTIVE);
            trgt.setAttribute('aria-hidden', 'true');
            attributes(trgtItemEle, { 'aria-expanded': 'false' });
            attributes(trgt.previousElementSibling, { 'aria-selected': 'false', 'aria-label': 'collapsed' });
            this.trigger('expanded', eventArgs);
        }
    };
    /**
     * Returns the current module name.
     *
     * @returns {string} - It returns the current module name.
     * @private
     */
    Accordion.prototype.getModuleName = function () {
        return 'accordion';
    };
    Accordion.prototype.itemAttribUpdate = function () {
        var items = this.getItems();
        var itemEle = this.getItemElements();
        var itemLen = items.length;
        itemEle.forEach(function (ele) {
            select('.' + CLS_HEADER, ele).setAttribute('aria-level', '' + itemLen);
        });
    };
    Accordion.prototype.getItems = function () {
        var items;
        if (this.itemTemplate && this.headerTemplate) {
            items = this.dataSource;
        }
        else {
            items = this.items;
        }
        return items;
    };
    /**
     * Adds new item to the Accordion with the specified index of the Accordion.
     *
     * @param  {AccordionItemModel | AccordionItemModel[] | Object | Object[]} item - Item array that is to be added to the Accordion.
     * @param  {number} index - Number value that determines where the item should be added.
     * By default, item is added at the last index if the index is not specified.
     * @returns {void}
     */
    Accordion.prototype.addItem = function (item, index) {
        var _this = this;
        var ele = this.element;
        var itemEle = this.getItemElements();
        var items = this.getItems();
        if (isNOU(index)) {
            index = items.length;
        }
        if (ele.childElementCount >= index) {
            var addItems = (item instanceof Array) ? item : [item];
            addItems.forEach(function (addItem, i) {
                var itemIndex = index + i;
                items.splice(itemIndex, 0, addItem);
                var innerItemEle = _this.renderInnerItem(addItem, itemIndex);
                if (ele.childElementCount === itemIndex) {
                    ele.appendChild(innerItemEle);
                }
                else {
                    ele.insertBefore(innerItemEle, itemEle[itemIndex]);
                }
                EventHandler.add(innerItemEle.querySelector('.' + CLS_HEADER), 'focus', _this.focusIn, _this);
                EventHandler.add(innerItemEle.querySelector('.' + CLS_HEADER), 'blur', _this.focusOut, _this);
                _this.itemAttribUpdate();
                _this.expandedIndices = [];
                _this.expandedItemRefresh(ele);
                if (addItem && addItem.expanded) {
                    _this.expandItem(true, itemIndex);
                }
            });
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (this.isReact) {
            this.renderReactTemplates();
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Accordion.prototype.expandedItemRefresh = function (ele) {
        var _this = this;
        var itemEle = this.getItemElements();
        [].slice.call(itemEle).forEach(function (el) {
            if (el.classList.contains(CLS_SLCTED)) {
                _this.expandedItemsPush(el);
            }
        });
    };
    /**
     * Dynamically removes item from Accordion.
     *
     * @param  {number} index - Number value that determines which item should be removed.
     * @returns {void}.
     */
    Accordion.prototype.removeItem = function (index) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (this.isReact) {
            this.clearTemplate(['headerTemplate', 'itemTemplate'], index);
        }
        var itemEle = this.getItemElements();
        var ele = itemEle[index];
        var items = this.getItems();
        if (isNOU(ele)) {
            return;
        }
        this.restoreContent(index);
        detach(ele);
        items.splice(index, 1);
        this.itemAttribUpdate();
        this.expandedIndices = [];
        this.expandedItemRefresh(this.element);
    };
    /**
     * Sets focus to the specified index item header in Accordion.
     *
     * @param  {number} index - Number value that determines which item should be focused.
     * @returns {void}.
     */
    Accordion.prototype.select = function (index) {
        var itemEle = this.getItemElements();
        var ele = itemEle[index];
        if (isNOU(ele) || isNOU(select('.' + CLS_HEADER, ele))) {
            return;
        }
        ele.children[0].focus();
    };
    /**
     * Shows or hides the specified item from Accordion.
     *
     * @param  {number} index - Number value that determines which item should be hidden/shown.
     * @param  {boolean} isHidden - Boolean value that determines the action either hide (true) or show (false). Default value is false.
     * If the `isHidden` value is false, the item is shown or else item it is hidden.
     * @returns {void}.
     */
    Accordion.prototype.hideItem = function (index, isHidden) {
        var itemEle = this.getItemElements();
        var ele = itemEle[index];
        if (isNOU(ele)) {
            return;
        }
        if (isNOU(isHidden)) {
            isHidden = true;
        }
        if (isHidden) {
            this.add(ele, CLS_ITEMHIDE);
        }
        else {
            this.remove(ele, CLS_ITEMHIDE);
        }
    };
    /**
     * Enables/Disables the specified Accordion item.
     *
     * @param  {number} index - Number value that determines which item should be enabled/disabled.
     * @param  {boolean} isEnable - Boolean value that determines the action as enable (true) or disable (false).
     * If the `isEnable` value is true, the item is enabled or else it is disabled.
     * @returns {void}.
     */
    Accordion.prototype.enableItem = function (index, isEnable) {
        var itemEle = this.getItemElements();
        var ele = itemEle[index];
        if (isNOU(ele)) {
            return;
        }
        var eleHeader = ele.firstElementChild;
        if (isEnable) {
            this.remove(ele, CLS_DISABLE);
            attributes(eleHeader, { 'tabindex': '0', 'aria-disabled': 'false' });
            eleHeader.focus();
        }
        else {
            if (ele.classList.contains(CLS_ACTIVE)) {
                this.expandItem(false, index);
                this.eleMoveFocus('movedown', this.element, eleHeader);
            }
            this.add(ele, CLS_DISABLE);
            eleHeader.setAttribute('aria-disabled', 'true');
            eleHeader.removeAttribute('tabindex');
        }
    };
    /**
     * Refresh the Accordion component.
     *
     * @returns {void}.
     */
    Accordion.prototype.refresh = function () {
        if (!this.isServerRendered) {
            _super.prototype.refresh.call(this);
        }
    };
    /**
     * Expands/Collapses the specified Accordion item.
     *
     * @param  {boolean} isExpand - Boolean value that determines the action as expand or collapse.
     * @param  {number} index - Number value that determines which item should be expanded/collapsed.`index` is optional parameter.
     * Without Specifying index, based on the `isExpand` value all Accordion item can be expanded or collapsed.
     * @returns {void}.
     */
    Accordion.prototype.expandItem = function (isExpand, index) {
        var _this = this;
        var itemEle = this.getItemElements();
        if (isNOU(index)) {
            if (this.expandMode === 'Single' && isExpand) {
                var ele = itemEle[itemEle.length - 1];
                this.itemExpand(isExpand, ele, this.getIndexByItem(ele));
            }
            else {
                var item = select('#' + this.lastActiveItemId, this.element);
                [].slice.call(itemEle).forEach(function (el) {
                    _this.itemExpand(isExpand, el, _this.getIndexByItem(el));
                    el.classList.remove(CLS_EXPANDSTATE);
                });
                var expandedItem = select('.' + CLS_EXPANDSTATE, this.element);
                if (expandedItem) {
                    expandedItem.classList.remove(CLS_EXPANDSTATE);
                }
                if (item) {
                    item.classList.add(CLS_EXPANDSTATE);
                }
            }
        }
        else {
            var ele = itemEle[index];
            if (isNOU(ele) || !ele.classList.contains(CLS_SLCT) || (ele.classList.contains(CLS_ACTIVE) && isExpand)) {
                return;
            }
            else {
                if (this.expandMode === 'Single') {
                    this.expandItem(false);
                }
                this.itemExpand(isExpand, ele, index);
            }
        }
    };
    Accordion.prototype.itemExpand = function (isExpand, ele, index) {
        var _this = this;
        var ctn = ele.children[1];
        if (ele.classList.contains(CLS_DISABLE)) {
            return;
        }
        if (isNOU(ctn) && isExpand) {
            if (!this.isServerRendered) {
                ctn = this.contentRendering(index);
                ele.appendChild(ctn);
                this.ariaAttrUpdate(ele);
                this.expand(ctn);
            }
            else {
                var id = ele.id;
                if (this.items.length > 0) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    this.interopAdaptor.invokeMethodAsync('OnItemClick', index).then(function () {
                        if (_this.isDestroyed) {
                            return;
                        }
                        ctn = ele.children[1];
                        _this.expand(ctn);
                    });
                }
                else {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    this.interopAdaptor.invokeMethodAsync('OnDataClick', id).then(function () {
                        if (_this.isDestroyed) {
                            return;
                        }
                        ctn = ele.children[1];
                        _this.expand(ctn);
                    });
                }
            }
        }
        else if (!isNOU(ctn)) {
            if (isExpand) {
                this.expand(ctn);
            }
            else {
                this.collapse(ctn);
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (this.isReact) {
            this.renderReactTemplates();
        }
    };
    Accordion.prototype.destroyItems = function () {
        this.restoreContent(null);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (this.isReact) {
            this.clearTemplate();
        }
        [].slice.call(this.element.querySelectorAll('.' + CLS_ITEM)).forEach(function (el) {
            detach(el);
        });
    };
    Accordion.prototype.restoreContent = function (index) {
        var ctnElePos;
        if (isNOU(index)) {
            ctnElePos = this.element;
        }
        else {
            ctnElePos = this.element.querySelectorAll('.' + CLS_ITEM)[index];
        }
        this.templateEle.forEach(function (eleStr) {
            if (!isNOU(ctnElePos.querySelector(eleStr))) {
                document.body.appendChild(ctnElePos.querySelector(eleStr)).style.display = 'none';
            }
        });
    };
    Accordion.prototype.updateItem = function (item, index) {
        if (!isNOU(item)) {
            var items = this.getItems();
            var itemObj = items[index];
            items.splice(index, 1);
            this.restoreContent(index);
            detach(item);
            this.addItem(itemObj, index);
        }
    };
    Accordion.prototype.setTemplate = function (template, toElement, index) {
        toElement.innerHTML = '';
        this.templateCompile(toElement, template, index);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (this.isReact) {
            this.renderReactTemplates();
        }
    };
    // eslint-disable-next-line
    Accordion.prototype.templateCompile = function (ele, cnt, index) {
        var tempEle = this.createElement('div');
        this.fetchElement(tempEle, cnt, index, false);
        if (tempEle.childNodes.length !== 0) {
            [].slice.call(tempEle.childNodes).forEach(function (childEle) {
                ele.appendChild(childEle);
            });
        }
    };
    Accordion.prototype.getPersistData = function () {
        var keyEntity = ['expandedIndices'];
        return this.addOnPersist(keyEntity);
    };
    /**
     * Gets called when the model property changes.The data that describes the old and new values of the property that changed.
     *
     * @param  {AccordionModel} newProp - It contains the new value of data.
     * @param  {AccordionModel} oldProp - It contains the old value of data.
     * @returns {void}
     * @private
     */
    Accordion.prototype.onPropertyChanged = function (newProp, oldProp) {
        var acrdn = this.element;
        var isRefresh = false;
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'items':
                    if (this.isServerRendered) {
                        this.wireFocusEvents();
                        break;
                    }
                    if (!(newProp.items instanceof Array && oldProp.items instanceof Array)) {
                        var changedProp = Object.keys(newProp.items);
                        for (var j = 0; j < changedProp.length; j++) {
                            var index = parseInt(Object.keys(newProp.items)[j], 10);
                            var property = Object.keys(newProp.items[index])[0];
                            var item = selectAll('.' + CLS_ITEM, this.element)[index];
                            var oldVal = Object(oldProp.items[index])[property];
                            var newVal = Object(newProp.items[index])[property];
                            var temp = property;
                            if (temp === 'header' || temp === 'iconCss' || temp === 'expanded' || ((temp === 'content') && (oldVal === ''))) {
                                this.updateItem(item, index);
                            }
                            if (property === 'cssClass' && !isNOU(item)) {
                                item.classList.remove(oldVal);
                                item.classList.add(newVal);
                            }
                            if (property === 'visible' && !isNOU(item)) {
                                if (Object(newProp.items[index])[property] === false) {
                                    item.classList.add(CLS_ITEMHIDE);
                                }
                                else {
                                    item.classList.remove(CLS_ITEMHIDE);
                                }
                            }
                            if (property === 'disabled' && !isNOU(item)) {
                                this.enableItem(index, !newVal);
                            }
                            if (property === 'content' && !isNOU(item) && item.children.length === 2) {
                                if (typeof newVal === 'function') {
                                    var activeContent = item.querySelector('.' + CLS_CTENT);
                                    activeContent.innerHTML = '';
                                    this.setTemplate(newVal, activeContent, index);
                                }
                                else {
                                    if (item.classList.contains(CLS_SLCTED)) {
                                        this.expandItem(false, index);
                                    }
                                    detach(item.querySelector('.' + CLS_CONTENT));
                                }
                            }
                        }
                    }
                    else {
                        isRefresh = true;
                    }
                    break;
                case 'dataSource':
                case 'expandedIndices':
                    if (this.expandedIndices === null) {
                        this.expandedIndices = [];
                    }
                    isRefresh = true;
                    break;
                case 'headerTemplate':
                    this.initializeheaderTemplate();
                    isRefresh = true;
                    break;
                case 'itemTemplate':
                    this.initializeItemTemplate();
                    isRefresh = true;
                    break;
                case 'enableRtl':
                    if (newProp.enableRtl) {
                        this.add(acrdn, CLS_RTL);
                    }
                    else {
                        this.remove(acrdn, CLS_RTL);
                    }
                    break;
                case 'height':
                    setStyle(this.element, { 'height': formatUnit(newProp.height) });
                    break;
                case 'width':
                    setStyle(this.element, { 'width': formatUnit(newProp.width) });
                    break;
                case 'expandMode':
                    if (newProp.expandMode === 'Single') {
                        this.element.setAttribute('aria-multiselectable', 'false');
                        if (this.expandedIndices.length > 1) {
                            this.expandItem(false);
                        }
                    }
                    else {
                        this.element.setAttribute('aria-multiselectable', 'true');
                    }
                    break;
            }
        }
        if (isRefresh && !this.isServerRendered) {
            this.initExpand = [];
            if (this.expandedIndices.length > 0) {
                this.initExpand = this.expandedIndices;
            }
            this.destroyItems();
            this.renderItems();
            this.initItemExpand();
        }
    };
    __decorate([
        Collection([], AccordionItem)
    ], Accordion.prototype, "items", void 0);
    __decorate([
        Property([])
    ], Accordion.prototype, "dataSource", void 0);
    __decorate([
        Property()
    ], Accordion.prototype, "itemTemplate", void 0);
    __decorate([
        Property()
    ], Accordion.prototype, "headerTemplate", void 0);
    __decorate([
        Property('100%')
    ], Accordion.prototype, "width", void 0);
    __decorate([
        Property('auto')
    ], Accordion.prototype, "height", void 0);
    __decorate([
        Property([])
    ], Accordion.prototype, "expandedIndices", void 0);
    __decorate([
        Property('Multiple')
    ], Accordion.prototype, "expandMode", void 0);
    __decorate([
        Property(false)
    ], Accordion.prototype, "enableHtmlSanitizer", void 0);
    __decorate([
        Complex({}, AccordionAnimationSettings)
    ], Accordion.prototype, "animation", void 0);
    __decorate([
        Event()
    ], Accordion.prototype, "clicked", void 0);
    __decorate([
        Event()
    ], Accordion.prototype, "expanding", void 0);
    __decorate([
        Event()
    ], Accordion.prototype, "expanded", void 0);
    __decorate([
        Event()
    ], Accordion.prototype, "created", void 0);
    __decorate([
        Event()
    ], Accordion.prototype, "destroyed", void 0);
    Accordion = __decorate([
        NotifyPropertyChanges
    ], Accordion);
    return Accordion;
}(Component));
export { Accordion };
