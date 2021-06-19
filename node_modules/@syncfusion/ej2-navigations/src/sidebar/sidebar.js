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
import { Component, formatUnit, EventHandler, Event, isNullOrUndefined, closest, isBlazor, Browser } from '@syncfusion/ej2-base';
import { Property, NotifyPropertyChanges, isNullOrUndefined as isNOU } from '@syncfusion/ej2-base';
import { setStyleAttribute as setStyle, addClass, removeClass, Touch } from '@syncfusion/ej2-base';
var CONTROL = 'e-control';
var ROOT = 'e-sidebar';
var DOCKER = 'e-dock';
var CLOSE = 'e-close';
var OPEN = 'e-open';
var TRASITION = 'e-transition';
var DEFAULTBACKDROP = 'e-sidebar-overlay';
var CONTEXTBACKDROP = 'e-backdrop';
var RTL = 'e-rtl';
var RIGHT = 'e-right';
var LEFT = 'e-left';
var OVER = 'e-over';
var PUSH = 'e-push';
var SLIDE = 'e-slide';
var VISIBILITY = 'e-visibility';
var MAINCONTENTANIMATION = 'e-content-animation';
var DISABLEANIMATION = 'e-disable-animation';
var CONTEXT = 'e-sidebar-context';
var SIDEBARABSOLUTE = 'e-sidebar-absolute';
/**
 * Sidebar is an expandable or collapsible
 * component that typically act as a side container to place the primary or secondary content alongside of the main content.
 * ```html
 * <aside id="sidebar">
 * </aside>
 * ```
 * ```typescript
 * <script>
 *   let sidebarObject: Sidebar = new Sidebar();
 *   sidebarObject.appendTo("#sidebar");
 * </script>
 * ```
 */
var Sidebar = /** @class */ (function (_super) {
    __extends(Sidebar, _super);
    /* eslint-enable */
    function Sidebar(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.isBlazor = false;
        return _this;
    }
    Sidebar.prototype.preRender = function () {
        this.isBlazor = (isBlazor() && this.isServerRendered);
        if (!this.isBlazor) {
            this.setWidth();
        }
    };
    Sidebar.prototype.render = function () {
        this.initialize();
        this.wireEvents();
        this.renderComplete();
    };
    Sidebar.prototype.initialize = function () {
        this.setTarget();
        this.addClass();
        if (!this.isBlazor) {
            this.setZindex();
        }
        if (this.enableDock) {
            this.setDock();
        }
        if (this.isOpen) {
            this.show();
        }
        else {
            this.setMediaQuery();
        }
        this.checkType(true);
        this.setType(this.type);
        this.setCloseOnDocumentClick();
        if (!this.isBlazor) {
            this.setEnableRTL();
        }
        if (Browser.isDevice) {
            this.windowWidth = window.innerWidth;
        }
    };
    Sidebar.prototype.setEnableRTL = function () {
        (this.enableRtl ? addClass : removeClass)([this.element], RTL);
    };
    Sidebar.prototype.setTarget = function () {
        this.targetEle = this.element.nextElementSibling;
        this.sidebarEleCopy = this.element.cloneNode(true);
        if (typeof (this.target) === 'string') {
            this.setProperties({ target: document.querySelector(this.target) }, true);
        }
        if (this.target) {
            this.target.insertBefore(this.element, this.target.children[0]);
            addClass([this.element], SIDEBARABSOLUTE);
            addClass([this.target], CONTEXT);
            this.targetEle = this.getTargetElement();
        }
    };
    Sidebar.prototype.getTargetElement = function () {
        var siblingElement = this.element.nextElementSibling;
        while (!isNOU(siblingElement)) {
            if (!siblingElement.classList.contains(ROOT)) {
                break;
            }
            siblingElement = siblingElement.nextElementSibling;
        }
        return siblingElement;
    };
    Sidebar.prototype.setCloseOnDocumentClick = function () {
        if (this.closeOnDocumentClick) {
            EventHandler.add(document, 'mousedown touchstart', this.documentclickHandler, this);
        }
        else {
            EventHandler.remove(document, 'mousedown touchstart', this.documentclickHandler);
        }
    };
    Sidebar.prototype.setWidth = function () {
        if (this.enableDock && this.position === 'Left') {
            setStyle(this.element, { 'width': this.setDimension(this.dockSize) });
        }
        else if (this.enableDock && this.position === 'Right') {
            setStyle(this.element, { 'width': this.setDimension(this.dockSize) });
        }
        else if (!this.enableDock) {
            setStyle(this.element, { 'width': this.setDimension(this.width) });
        }
    };
    Sidebar.prototype.setDimension = function (width) {
        if (typeof width === 'number') {
            width = formatUnit(width);
        }
        else if (typeof width === 'string') {
            width = (width.match(/px|%|em/)) ? width : formatUnit(width);
        }
        else {
            width = '100%';
        }
        return width;
    };
    Sidebar.prototype.setZindex = function () {
        setStyle(this.element, { 'z-index': '' + this.zIndex });
    };
    Sidebar.prototype.addClass = function () {
        var classELement = document.querySelector('.e-main-content');
        if (!isNullOrUndefined(classELement || this.targetEle)) {
            addClass([classELement || this.targetEle], [MAINCONTENTANIMATION]);
        }
        this.tabIndex = this.element.hasAttribute('tabindex') ? this.element.getAttribute('tabindex') : '0';
        if (!this.isBlazor) {
            if (!this.enableDock && this.type !== 'Auto') {
                addClass([this.element], [VISIBILITY]);
            }
            removeClass([this.element], [OPEN, CLOSE, RIGHT, LEFT, SLIDE, PUSH, OVER]);
            this.element.classList.add(ROOT);
            addClass([this.element], (this.position === 'Right') ? RIGHT : LEFT);
            if (this.enableDock) {
                addClass([this.element], DOCKER);
            }
            this.element.setAttribute('tabindex', this.tabIndex);
        }
        if (this.type === 'Auto' && !Browser.isDevice) {
            this.show();
        }
        else if (!this.isOpen) {
            addClass([this.element], CLOSE);
        }
    };
    Sidebar.prototype.checkType = function (val) {
        if (!(this.type === 'Push' || this.type === 'Over' || this.type === 'Slide')) {
            this.type = 'Auto';
        }
        else {
            if (!this.element.classList.contains(CLOSE) && !val) {
                this.hide();
            }
        }
    };
    Sidebar.prototype.transitionEnd = function (e) {
        this.setDock();
        if (!isNullOrUndefined(e)) {
            this.triggerChange();
        }
        EventHandler.remove(this.element, 'transitionend', this.transitionEnd);
    };
    Sidebar.prototype.destroyBackDrop = function () {
        var sibling = document.querySelector('.e-main-content') || this.targetEle;
        if (this.target && this.showBackdrop && sibling) {
            removeClass([sibling], CONTEXTBACKDROP);
        }
        else if (this.showBackdrop && this.modal) {
            this.modal.style.display = 'none';
            this.modal.outerHTML = '';
            this.modal = null;
        }
    };
    /* eslint-disable */
    /**
     * Hide the Sidebar component, if it is in an open state.
     *
     * @returns {void}
     *
     */
    Sidebar.prototype.hide = function (e) {
        var _this = this;
        var closeArguments = {
            model: this,
            element: this.element,
            cancel: false,
            isInteracted: !isNullOrUndefined(e),
            event: (e || null)
        };
        if (isBlazor()) {
            delete closeArguments.model;
        }
        this.trigger('close', closeArguments, function (observedcloseArgs) {
            if (!observedcloseArgs.cancel) {
                if (_this.element.classList.contains(CLOSE)) {
                    return;
                }
                if (_this.element.classList.contains(OPEN) && !_this.animate) {
                    _this.triggerChange();
                }
                addClass([_this.element], CLOSE);
                removeClass([_this.element], OPEN);
                setStyle(_this.element, { 'width': formatUnit(_this.enableDock ? _this.dockSize : _this.width) });
                _this.setType(_this.type);
                var sibling = document.querySelector('.e-main-content') || _this.targetEle;
                if (!_this.enableDock && sibling) {
                    sibling.style.transform = 'translateX(' + 0 + 'px)';
                    sibling.style[_this.position === 'Left' ? 'marginLeft' : 'marginRight'] = '0px';
                }
                _this.destroyBackDrop();
                _this.setAnimation();
                if (_this.type === 'Slide') {
                    document.body.classList.remove('e-sidebar-overflow');
                }
                _this.setProperties({ isOpen: false }, true);
                if (_this.enableDock) {
                    setTimeout(function () { return _this.setTimeOut(); }, 50);
                }
                EventHandler.add(_this.element, 'transitionend', _this.transitionEnd, _this);
            }
        });
    };
    Sidebar.prototype.setTimeOut = function () {
        var sibling = document.querySelector('.e-main-content') || this.targetEle;
        var elementWidth = this.element.getBoundingClientRect().width;
        if (this.element.classList.contains(OPEN) && sibling) {
            if (this.position === 'Left') {
                sibling.style.marginLeft = this.setDimension(this.width === 'auto' ? elementWidth : this.width);
            }
            else {
                sibling.style.marginRight = this.setDimension(this.width === 'auto' ? elementWidth : this.width);
            }
        }
        else if (this.element.classList.contains(CLOSE) && sibling) {
            if (this.position === 'Left') {
                sibling.style.marginLeft = this.setDimension(this.dockSize === 'auto' ? elementWidth : this.dockSize);
            }
            else {
                sibling.style.marginRight = this.setDimension(this.dockSize === 'auto' ? elementWidth : this.dockSize);
            }
        }
    };
    /* eslint-disable */
    /**
     * Shows the Sidebar component, if it is in closed state.
     *
     * @returns {void}
     */
    Sidebar.prototype.show = function (e) {
        var _this = this;
        var openArguments = {
            model: this,
            element: this.element,
            cancel: false,
            isInteracted: !isNullOrUndefined(e),
            event: (e || null)
        };
        if (isBlazor()) {
            delete openArguments.model;
        }
        this.trigger('open', openArguments, function (observedopenArgs) {
            if (!observedopenArgs.cancel) {
                removeClass([_this.element], VISIBILITY);
                if (_this.element.classList.contains(OPEN)) {
                    return;
                }
                if (_this.element.classList.contains(CLOSE) && !_this.animate) {
                    _this.triggerChange();
                }
                addClass([_this.element], [OPEN, TRASITION]);
                setStyle(_this.element, { 'transform': '' });
                removeClass([_this.element], CLOSE);
                setStyle(_this.element, { 'width': formatUnit(_this.width) });
                _this.setType(_this.type);
                _this.createBackDrop();
                _this.setAnimation();
                if (_this.type === 'Slide') {
                    document.body.classList.add('e-sidebar-overflow');
                }
                _this.setProperties({ isOpen: true }, true);
                EventHandler.add(_this.element, 'transitionend', _this.transitionEnd, _this);
            }
        });
    };
    Sidebar.prototype.setAnimation = function () {
        if (this.animate) {
            removeClass([this.element], DISABLEANIMATION);
        }
        else {
            addClass([this.element], DISABLEANIMATION);
        }
    };
    Sidebar.prototype.triggerChange = function () {
        var changeArguments = { name: 'change', element: this.element };
        this.trigger('change', changeArguments);
    };
    Sidebar.prototype.setDock = function () {
        if (this.enableDock && this.position === 'Left' && !this.getState()) {
            setStyle(this.element, { 'transform': 'translateX(' + -100 + '%) translateX(' + this.setDimension(this.dockSize) + ')' });
        }
        else if (this.enableDock && this.position === 'Right' && !this.getState()) {
            setStyle(this.element, { 'transform': 'translateX(' + 100 + '%) translateX(' + '-' + this.setDimension(this.dockSize) + ')' });
        }
        if (this.element.classList.contains(CLOSE) && this.enableDock) {
            setStyle(this.element, { 'width': this.setDimension(this.dockSize) });
        }
    };
    Sidebar.prototype.createBackDrop = function () {
        if (this.target && this.showBackdrop && this.getState()) {
            var sibling = document.querySelector('.e-main-content') || this.targetEle;
            addClass([sibling], CONTEXTBACKDROP);
        }
        else if (this.showBackdrop && !this.modal && this.getState()) {
            this.modal = this.createElement('div');
            this.modal.className = DEFAULTBACKDROP;
            this.modal.style.display = 'block';
            document.body.appendChild(this.modal);
        }
    };
    Sidebar.prototype.getPersistData = function () {
        return this.addOnPersist(['type', 'position', 'isOpen']);
    };
    /**
     * Returns the current module name.
     *
     * @returns {string} - returns module name.
     * @private
     *
     */
    Sidebar.prototype.getModuleName = function () {
        return 'sidebar';
    };
    /**
     * Shows or hides the Sidebar based on the current state.
     *
     * @returns {void}
     */
    Sidebar.prototype.toggle = function (e) {
        if (this.element.classList.contains(OPEN)) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    Sidebar.prototype.getState = function () {
        return this.element.classList.contains(OPEN) ? true : false;
    };
    Sidebar.prototype.setMediaQuery = function () {
        if (this.mediaQuery) {
            var media = false;
            if (typeof (this.mediaQuery) === 'string') {
                media = window.matchMedia(this.mediaQuery).matches;
            }
            else {
                media = (this.mediaQuery).matches;
            }
            if (media && this.windowWidth !== window.innerWidth) {
                this.show();
            }
            else if (this.getState() && this.windowWidth !== window.innerWidth) {
                this.hide();
            }
        }
    };
    Sidebar.prototype.resize = function (e) {
        if (this.type === 'Auto') {
            if (Browser.isDevice) {
                addClass([this.element], OVER);
            }
            else {
                addClass([this.element], PUSH);
            }
        }
        this.setMediaQuery();
        if (Browser.isDevice) {
            this.windowWidth = window.innerWidth;
        }
    };
    Sidebar.prototype.documentclickHandler = function (e) {
        if (closest(e.target, '.' + CONTROL + '' + '.' + ROOT)) {
            return;
        }
        this.hide(e);
    };
    Sidebar.prototype.enableGestureHandler = function (args) {
        if (!this.isOpen && this.position === 'Left' && args.swipeDirection === 'Right' &&
            (args.startX <= 20 && args.distanceX >= 50 && args.velocity >= 0.5)) {
            this.show();
        }
        else if (this.isOpen && this.position === 'Left' && args.swipeDirection === 'Left') {
            this.hide();
        }
        else if (this.isOpen && this.position === 'Right' && args.swipeDirection === 'Right') {
            this.hide();
        }
        else if (!this.isOpen && this.position === 'Right' && args.swipeDirection === 'Left'
            && (window.innerWidth - args.startX <= 20 && args.distanceX >= 50 && args.velocity >= 0.5)) {
            this.show();
        }
    };
    Sidebar.prototype.setEnableGestures = function () {
        if (this.enableGestures) {
            this.mainContentEle = new Touch(document.body, { swipe: this.enableGestureHandler.bind(this) });
            this.sidebarEle = new Touch(this.element, { swipe: this.enableGestureHandler.bind(this) });
        }
        else {
            if (this.mainContentEle && this.sidebarEle) {
                this.mainContentEle.destroy();
                this.sidebarEle.destroy();
            }
        }
    };
    Sidebar.prototype.wireEvents = function () {
        this.setEnableGestures();
        window.addEventListener('resize', this.resize.bind(this));
    };
    Sidebar.prototype.unWireEvents = function () {
        window.removeEventListener('resize', this.resize.bind(this));
        EventHandler.remove(document, 'mousedown touchstart', this.documentclickHandler);
        if (this.mainContentEle) {
            this.mainContentEle.destroy();
        }
        if (this.sidebarEle) {
            this.sidebarEle.destroy();
        }
    };
    /**
     * Called internally if any of the property value changed.
     *
     * @param {SidebarModel} newProp - specifies newProp value.
     * @param {SidebarModel} oldProp - specifies oldProp value.
     * @returns {void}
     * @private
     *
     */
    Sidebar.prototype.onPropertyChanged = function (newProp, oldProp) {
        var sibling = document.querySelector('.e-main-content') || this.targetEle;
        var isRendered = this.isServerRendered;
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'isOpen':
                    if (this.isOpen) {
                        this.show();
                    }
                    else {
                        this.hide();
                    }
                    break;
                case 'width':
                    this.setWidth();
                    if (!this.getState()) {
                        this.setDock();
                    }
                    break;
                case 'animate':
                    this.setAnimation();
                    break;
                case 'type':
                    this.checkType(false);
                    removeClass([this.element], [VISIBILITY]);
                    this.addClass();
                    addClass([this.element], this.type === 'Auto' ? (Browser.isDevice ? ['e-over'] :
                        ['e-push']) : ['e-' + this.type.toLowerCase()]);
                    break;
                case 'position':
                    this.element.style.transform = '';
                    this.setDock();
                    if (sibling) {
                        sibling.style[this.position === 'Left' ? 'marginRight' : 'marginLeft'] = '0px';
                    }
                    if (this.position === 'Right') {
                        removeClass([this.element], LEFT);
                        addClass([this.element], RIGHT);
                    }
                    else {
                        removeClass([this.element], RIGHT);
                        addClass([this.element], LEFT);
                    }
                    this.setType(this.type);
                    break;
                case 'showBackdrop':
                    if (this.showBackdrop) {
                        this.createBackDrop();
                    }
                    else {
                        if (this.modal) {
                            this.modal.style.display = 'none';
                            this.modal.outerHTML = '';
                            this.modal = null;
                        }
                    }
                    break;
                case 'target':
                    if (typeof (this.target) === 'string') {
                        this.setProperties({ target: document.querySelector(this.target) }, true);
                    }
                    if (isNullOrUndefined(this.target)) {
                        removeClass([this.element], SIDEBARABSOLUTE);
                        removeClass([oldProp.target], CONTEXT);
                        setStyle(sibling, { 'margin-left': 0, 'margin-right': 0 });
                        document.body.insertAdjacentElement('afterbegin', this.element);
                    }
                    this.isServerRendered = false;
                    _super.prototype.refresh.call(this);
                    this.isServerRendered = isRendered;
                    break;
                case 'closeOnDocumentClick':
                    this.setCloseOnDocumentClick();
                    break;
                case 'enableDock':
                    if (!this.getState()) {
                        this.setDock();
                    }
                    break;
                case 'zIndex':
                    this.setZindex();
                    break;
                case 'mediaQuery':
                    this.setMediaQuery();
                    break;
                case 'enableGestures':
                    this.setEnableGestures();
                    break;
                case 'enableRtl':
                    this.setEnableRTL();
                    break;
            }
        }
    };
    Sidebar.prototype.setType = function (type) {
        var elementWidth = this.element.getBoundingClientRect().width;
        this.setZindex();
        var sibling = document.querySelector('.e-main-content') || this.targetEle;
        if (sibling) {
            sibling.style.transform = 'translateX(' + 0 + 'px)';
            if (!Browser.isDevice && this.type !== 'Auto') {
                sibling.style[this.position === 'Left' ? 'marginLeft' : 'marginRight'] = '0px';
            }
        }
        var margin = this.position === 'Left' ? elementWidth + 'px' : elementWidth + 'px';
        var eleWidth = this.position === 'Left' ? elementWidth : -(elementWidth);
        removeClass([this.element], [PUSH, OVER, SLIDE]);
        switch (type) {
            case 'Push':
                addClass([this.element], [PUSH]);
                if (sibling && (this.enableDock || this.element.classList.contains(OPEN))) {
                    sibling.style[this.position === 'Left' ? 'marginLeft' : 'marginRight'] = margin;
                }
                break;
            case 'Slide':
                addClass([this.element], [SLIDE]);
                if (sibling && (this.enableDock || this.element.classList.contains(OPEN))) {
                    sibling.style.transform = 'translateX(' + eleWidth + 'px)';
                }
                break;
            case 'Over':
                addClass([this.element], [OVER]);
                if (this.enableDock && this.element.classList.contains(CLOSE)) {
                    if (sibling) {
                        sibling.style[this.position === 'Left' ? 'marginLeft' : 'marginRight'] = margin;
                    }
                }
                break;
            case 'Auto':
                addClass([this.element], [TRASITION]);
                if (Browser.isDevice) {
                    if (sibling && (this.enableDock) && !this.getState()) {
                        sibling.style[this.position === 'Left' ? 'marginLeft' : 'marginRight'] = margin;
                        addClass([this.element], PUSH);
                    }
                    else {
                        addClass([this.element], OVER);
                    }
                }
                else {
                    addClass([this.element], PUSH);
                    if (sibling && (this.enableDock || this.element.classList.contains(OPEN))) {
                        sibling.style[this.position === 'Left' ? 'marginLeft' : 'marginRight'] = margin;
                    }
                }
                this.createBackDrop();
        }
    };
    /**
     * Removes the control from the DOM and detaches all its related event handlers. Also it removes the attributes and classes.
     *
     * @returns {void}
     *
     */
    Sidebar.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        if (this.target) {
            removeClass([this.target], CONTEXT);
        }
        this.destroyBackDrop();
        if (this.element) {
            removeClass([this.element], [OPEN, CLOSE, PUSH, SLIDE, OVER, LEFT, RIGHT, TRASITION]);
            removeClass([this.element], SIDEBARABSOLUTE);
            this.element.style.width = '';
            this.element.style.zIndex = '';
            this.element.style.transform = '';
            if (!isNullOrUndefined(this.sidebarEleCopy.getAttribute('tabindex'))) {
                this.element.setAttribute('tabindex', this.tabIndex);
            }
            else {
                this.element.removeAttribute('tabindex');
            }
        }
        this.windowWidth = null;
        var sibling = document.querySelector('.e-main-content') || this.targetEle;
        if (!isNullOrUndefined(sibling)) {
            sibling.style.margin = '';
            sibling.style.transform = '';
        }
        this.unWireEvents();
    };
    __decorate([
        Property('auto')
    ], Sidebar.prototype, "dockSize", void 0);
    __decorate([
        Property(null)
    ], Sidebar.prototype, "mediaQuery", void 0);
    __decorate([
        Property(false)
    ], Sidebar.prototype, "enableDock", void 0);
    __decorate([
        Property('en-US')
    ], Sidebar.prototype, "locale", void 0);
    __decorate([
        Property(false)
    ], Sidebar.prototype, "enablePersistence", void 0);
    __decorate([
        Property(true)
    ], Sidebar.prototype, "enableGestures", void 0);
    __decorate([
        Property(false)
    ], Sidebar.prototype, "isOpen", void 0);
    __decorate([
        Property(false)
    ], Sidebar.prototype, "enableRtl", void 0);
    __decorate([
        Property(true)
    ], Sidebar.prototype, "animate", void 0);
    __decorate([
        Property('auto')
    ], Sidebar.prototype, "height", void 0);
    __decorate([
        Property(false)
    ], Sidebar.prototype, "closeOnDocumentClick", void 0);
    __decorate([
        Property('Left')
    ], Sidebar.prototype, "position", void 0);
    __decorate([
        Property(null)
    ], Sidebar.prototype, "target", void 0);
    __decorate([
        Property(false)
    ], Sidebar.prototype, "showBackdrop", void 0);
    __decorate([
        Property('Auto')
    ], Sidebar.prototype, "type", void 0);
    __decorate([
        Property('auto')
    ], Sidebar.prototype, "width", void 0);
    __decorate([
        Property(1000)
    ], Sidebar.prototype, "zIndex", void 0);
    __decorate([
        Event()
    ], Sidebar.prototype, "created", void 0);
    __decorate([
        Event()
    ], Sidebar.prototype, "close", void 0);
    __decorate([
        Event()
    ], Sidebar.prototype, "open", void 0);
    __decorate([
        Event()
    ], Sidebar.prototype, "change", void 0);
    __decorate([
        Event()
    ], Sidebar.prototype, "destroyed", void 0);
    Sidebar = __decorate([
        NotifyPropertyChanges
    ], Sidebar);
    return Sidebar;
}(Component));
export { Sidebar };
