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
import { Touch, Component, EventHandler, selectAll, getUniqueID, removeClass } from '@syncfusion/ej2-base';
import { NotifyPropertyChanges, Property, Browser, detach, createElement as buildTag } from '@syncfusion/ej2-base';
import { classList, isNullOrUndefined } from '@syncfusion/ej2-base';
var CLS_ROOT = 'e-vscroll';
var CLS_RTL = 'e-rtl';
var CLS_DISABLE = 'e-overlay';
var CLS_VSCROLLBAR = 'e-vscroll-bar';
var CLS_VSCROLLCON = 'e-vscroll-content';
var CLS_NAVARROW = 'e-nav-arrow';
var CLS_NAVUPARROW = 'e-nav-up-arrow';
var CLS_NAVDOWNARROW = 'e-nav-down-arrow';
var CLS_VSCROLLNAV = 'e-scroll-nav';
var CLS_VSCROLLNAVUP = 'e-scroll-up-nav';
var CLS_VSCROLLNAVDOWN = 'e-scroll-down-nav';
var CLS_DEVICE = 'e-scroll-device';
var CLS_OVERLAY = 'e-scroll-overlay';
var CLS_UPOVERLAY = 'e-scroll-up-overlay';
var CLS_DOWNOVERLAY = 'e-scroll-down-overlay';
var OVERLAY_MAXWID = 40;
/**
 * VScroll module is introduces vertical scroller when content exceeds the current viewing area.
 * It can be useful for the components like Toolbar, Tab which needs vertical scrolling alone.
 * Hidden content can be view by touch moving or icon click.
 * ```html
 * <div id="scroll"/>
 * <script>
 *   var scrollObj = new VScroll();
 *   scrollObj.appendTo("#scroll");
 * </script>
 * ```
 */
var VScroll = /** @class */ (function (_super) {
    __extends(VScroll, _super);
    /**
     * Initializes a new instance of the VScroll class.
     *
     * @param {VScrollModel} options  - Specifies VScroll model properties as options.
     * @param {string | HTMLElement} element  - Specifies the element for which vertical scrolling applies.
     */
    function VScroll(options, element) {
        return _super.call(this, options, element) || this;
    }
    /**
     * Initialize the event handler
     *
     * @private
     * @returns {void}
     */
    VScroll.prototype.preRender = function () {
        this.browser = Browser.info.name;
        this.browserCheck = this.browser === 'mozilla';
        this.isDevice = Browser.isDevice;
        this.customStep = true;
        var ele = this.element;
        this.ieCheck = this.browser === 'edge' || this.browser === 'msie';
        this.initialize();
        if (ele.id === '') {
            ele.id = getUniqueID('vscroll');
            this.uniqueId = true;
        }
        ele.style.display = 'block';
        if (this.enableRtl) {
            ele.classList.add(CLS_RTL);
        }
    };
    /**
     * To Initialize the vertical scroll rendering
     *
     * @private
     * @returns {void}
     */
    VScroll.prototype.render = function () {
        this.touchModule = new Touch(this.element, { scroll: this.touchHandler.bind(this), swipe: this.swipeHandler.bind(this) });
        EventHandler.add(this.scrollEle, 'scroll', this.scrollEventHandler, this);
        if (!this.isDevice) {
            this.createNavIcon(this.element);
        }
        else {
            this.element.classList.add(CLS_DEVICE);
            this.createOverlayElement(this.element);
        }
        this.setScrollState();
        EventHandler.add(this.element, 'wheel', this.wheelEventHandler, this);
    };
    VScroll.prototype.setScrollState = function () {
        if (isNullOrUndefined(this.scrollStep) || this.scrollStep < 0) {
            this.scrollStep = this.scrollEle.offsetHeight;
            this.customStep = false;
        }
        else {
            this.customStep = true;
        }
    };
    VScroll.prototype.initialize = function () {
        var scrollCnt = buildTag('div', { className: CLS_VSCROLLCON });
        var scrollBar = buildTag('div', { className: CLS_VSCROLLBAR });
        scrollBar.setAttribute('tabindex', '-1');
        var ele = this.element;
        var innerEle = [].slice.call(ele.children);
        for (var _i = 0, innerEle_1 = innerEle; _i < innerEle_1.length; _i++) {
            var ele_1 = innerEle_1[_i];
            scrollCnt.appendChild(ele_1);
        }
        scrollBar.appendChild(scrollCnt);
        ele.appendChild(scrollBar);
        scrollBar.style.overflowY = 'hidden';
        this.scrollEle = scrollBar;
        this.scrollItems = scrollCnt;
    };
    VScroll.prototype.getPersistData = function () {
        var keyEntity = ['scrollStep'];
        return this.addOnPersist(keyEntity);
    };
    /**
     * Returns the current module name.
     *
     * @returns {string} - It returns the current module name.
     * @private
     */
    VScroll.prototype.getModuleName = function () {
        return 'vScroll';
    };
    /**
     * Removes the control from the DOM and also removes all its related events.
     *
     * @returns {void}
     */
    VScroll.prototype.destroy = function () {
        var el = this.element;
        el.style.display = '';
        removeClass([this.element], [CLS_ROOT, CLS_DEVICE]);
        var navs = selectAll('.e-' + el.id + '_nav.' + CLS_VSCROLLNAV, el);
        var overlays = selectAll('.' + CLS_OVERLAY, el);
        [].slice.call(overlays).forEach(function (ele) {
            detach(ele);
        });
        for (var _i = 0, _a = [].slice.call(this.scrollItems.children); _i < _a.length; _i++) {
            var elem = _a[_i];
            el.appendChild(elem);
        }
        if (this.uniqueId) {
            this.element.removeAttribute('id');
        }
        detach(this.scrollEle);
        if (navs.length > 0) {
            detach(navs[0]);
            if (!isNullOrUndefined(navs[1])) {
                detach(navs[1]);
            }
        }
        EventHandler.remove(this.scrollEle, 'scroll', this.scrollEventHandler);
        this.touchModule.destroy();
        this.touchModule = null;
        _super.prototype.destroy.call(this);
    };
    /**
     * Specifies the value to disable/enable the VScroll component.
     * When set to `true` , the component will be disabled.
     *
     * @param  {boolean} value - Based on this Boolean value, VScroll will be enabled (false) or disabled (true).
     * @returns {void}.
     */
    VScroll.prototype.disable = function (value) {
        var navEle = selectAll('.e-scroll-nav:not(.' + CLS_DISABLE + ')', this.element);
        if (value) {
            this.element.classList.add(CLS_DISABLE);
        }
        else {
            this.element.classList.remove(CLS_DISABLE);
        }
        [].slice.call(navEle).forEach(function (el) {
            el.setAttribute('tabindex', !value ? '0' : '-1');
        });
    };
    VScroll.prototype.createOverlayElement = function (element) {
        var id = element.id.concat('_nav');
        var downOverlayEle = buildTag('div', { className: CLS_OVERLAY + ' ' + CLS_DOWNOVERLAY });
        var clsDown = 'e-' + element.id.concat('_nav ' + CLS_VSCROLLNAV + ' ' + CLS_VSCROLLNAVDOWN);
        var downEle = buildTag('div', { id: id.concat('down'), className: clsDown });
        var navItem = buildTag('div', { className: CLS_NAVDOWNARROW + ' ' + CLS_NAVARROW + ' e-icons' });
        downEle.appendChild(navItem);
        var upEle = buildTag('div', { className: CLS_OVERLAY + ' ' + CLS_UPOVERLAY });
        if (this.ieCheck) {
            downEle.classList.add('e-ie-align');
        }
        element.appendChild(downOverlayEle);
        element.appendChild(downEle);
        element.insertBefore(upEle, element.firstChild);
        this.eventBinding([downEle]);
    };
    VScroll.prototype.createNavIcon = function (element) {
        var id = element.id.concat('_nav');
        var clsDown = 'e-' + element.id.concat('_nav ' + CLS_VSCROLLNAV + ' ' + CLS_VSCROLLNAVDOWN);
        var nav = buildTag('div', { id: id.concat('_down'), className: clsDown });
        nav.setAttribute('aria-disabled', 'false');
        var navItem = buildTag('div', { className: CLS_NAVDOWNARROW + ' ' + CLS_NAVARROW + ' e-icons' });
        var clsUp = 'e-' + element.id.concat('_nav ' + CLS_VSCROLLNAV + ' ' + CLS_VSCROLLNAVUP);
        var navElement = buildTag('div', { id: id.concat('_up'), className: clsUp + ' ' + CLS_DISABLE });
        navElement.setAttribute('aria-disabled', 'true');
        var navUpItem = buildTag('div', { className: CLS_NAVUPARROW + ' ' + CLS_NAVARROW + ' e-icons' });
        navElement.appendChild(navUpItem);
        nav.appendChild(navItem);
        nav.setAttribute('tabindex', '0');
        element.appendChild(nav);
        element.insertBefore(navElement, element.firstChild);
        if (this.ieCheck) {
            nav.classList.add('e-ie-align');
            navElement.classList.add('e-ie-align');
        }
        this.eventBinding([nav, navElement]);
    };
    VScroll.prototype.onKeyPress = function (ev) {
        var _this = this;
        if (ev.key === 'Enter') {
            var timeoutFun_1 = function () {
                _this.keyTimeout = true;
                _this.eleScrolling(10, ev.target, true);
            };
            this.keyTimer = window.setTimeout(function () {
                timeoutFun_1();
            }, 100);
        }
    };
    VScroll.prototype.onKeyUp = function (ev) {
        if (ev.key !== 'Enter') {
            return;
        }
        if (this.keyTimeout) {
            this.keyTimeout = false;
        }
        else {
            ev.target.click();
        }
        clearTimeout(this.keyTimer);
    };
    VScroll.prototype.eventBinding = function (element) {
        var _this = this;
        [].slice.call(element).forEach(function (ele) {
            new Touch(ele, { tapHold: _this.tabHoldHandler.bind(_this), tapHoldThreshold: 500 });
            ele.addEventListener('keydown', _this.onKeyPress.bind(_this));
            ele.addEventListener('keyup', _this.onKeyUp.bind(_this));
            ele.addEventListener('mouseup', _this.repeatScroll.bind(_this));
            ele.addEventListener('touchend', _this.repeatScroll.bind(_this));
            ele.addEventListener('contextmenu', function (e) {
                e.preventDefault();
            });
            EventHandler.add(ele, 'click', _this.clickEventHandler, _this);
        });
    };
    VScroll.prototype.repeatScroll = function () {
        clearInterval(this.timeout);
    };
    VScroll.prototype.tabHoldHandler = function (ev) {
        var _this = this;
        var trgt = ev.originalEvent.target;
        trgt = this.contains(trgt, CLS_VSCROLLNAV) ? trgt.firstElementChild : trgt;
        var scrollDistance = 10;
        var timeoutFun = function () {
            _this.eleScrolling(scrollDistance, trgt, true);
        };
        this.timeout = window.setInterval(function () {
            timeoutFun();
        }, 50);
    };
    VScroll.prototype.contains = function (element, className) {
        return element.classList.contains(className);
    };
    VScroll.prototype.eleScrolling = function (scrollDis, trgt, isContinuous) {
        var classList = trgt.classList;
        if (classList.contains(CLS_VSCROLLNAV)) {
            classList = trgt.querySelector('.' + CLS_NAVARROW).classList;
        }
        if (classList.contains(CLS_NAVDOWNARROW)) {
            this.frameScrollRequest(scrollDis, 'add', isContinuous);
        }
        else if (classList.contains(CLS_NAVUPARROW)) {
            this.frameScrollRequest(scrollDis, '', isContinuous);
        }
    };
    VScroll.prototype.clickEventHandler = function (event) {
        this.eleScrolling(this.scrollStep, event.target, false);
    };
    VScroll.prototype.wheelEventHandler = function (e) {
        e.preventDefault();
        this.frameScrollRequest(this.scrollStep, (e.deltaY > 0 ? 'add' : ''), false);
    };
    VScroll.prototype.swipeHandler = function (e) {
        var swipeElement = this.scrollEle;
        var distance;
        if (e.velocity <= 1) {
            distance = e.distanceY / (e.velocity * 10);
        }
        else {
            distance = e.distanceY / e.velocity;
        }
        var start = 0.5;
        var animate = function () {
            var step = Math.sin(start);
            if (step <= 0) {
                window.cancelAnimationFrame(step);
            }
            else {
                if (e.swipeDirection === 'Up') {
                    swipeElement.scrollTop += distance * step;
                }
                else if (e.swipeDirection === 'Down') {
                    swipeElement.scrollTop -= distance * step;
                }
                start -= 0.02;
                window.requestAnimationFrame(animate);
            }
        };
        animate();
    };
    VScroll.prototype.scrollUpdating = function (scrollVal, action) {
        if (action === 'add') {
            this.scrollEle.scrollTop += scrollVal;
        }
        else {
            this.scrollEle.scrollTop -= scrollVal;
        }
    };
    VScroll.prototype.frameScrollRequest = function (scrollValue, action, isContinuous) {
        var _this = this;
        var step = 10;
        if (isContinuous) {
            this.scrollUpdating(scrollValue, action);
            return;
        }
        if (!this.customStep) {
            [].slice.call(selectAll('.' + CLS_OVERLAY, this.element)).forEach(function (el) {
                scrollValue -= el.offsetHeight;
            });
        }
        var animate = function () {
            if (scrollValue < step) {
                window.cancelAnimationFrame(step);
            }
            else {
                _this.scrollUpdating(step, action);
                scrollValue -= step;
                window.requestAnimationFrame(animate);
            }
        };
        animate();
    };
    VScroll.prototype.touchHandler = function (e) {
        var el = this.scrollEle;
        var distance = e.distanceY;
        if (e.scrollDirection === 'Up') {
            el.scrollTop = el.scrollTop + distance;
        }
        else if (e.scrollDirection === 'Down') {
            el.scrollTop = el.scrollTop - distance;
        }
    };
    VScroll.prototype.arrowDisabling = function (addDisableCls, removeDisableCls) {
        if (this.isDevice) {
            var arrowEle = isNullOrUndefined(addDisableCls) ? removeDisableCls : addDisableCls;
            var arrowIcon = arrowEle.querySelector('.' + CLS_NAVARROW);
            if (isNullOrUndefined(addDisableCls)) {
                classList(arrowIcon, [CLS_NAVDOWNARROW], [CLS_NAVUPARROW]);
            }
            else {
                classList(arrowIcon, [CLS_NAVUPARROW], [CLS_NAVDOWNARROW]);
            }
        }
        else {
            addDisableCls.classList.add(CLS_DISABLE);
            addDisableCls.setAttribute('aria-disabled', 'true');
            addDisableCls.removeAttribute('tabindex');
            removeDisableCls.classList.remove(CLS_DISABLE);
            removeDisableCls.setAttribute('aria-disabled', 'false');
            removeDisableCls.setAttribute('tabindex', '0');
        }
        this.repeatScroll();
    };
    VScroll.prototype.scrollEventHandler = function (e) {
        var target = e.target;
        var height = target.offsetHeight;
        var navUpEle = this.element.querySelector('.' + CLS_VSCROLLNAVUP);
        var navDownEle = this.element.querySelector('.' + CLS_VSCROLLNAVDOWN);
        var upOverlay = this.element.querySelector('.' + CLS_UPOVERLAY);
        var downOverlay = this.element.querySelector('.' + CLS_DOWNOVERLAY);
        var scrollTop = target.scrollTop;
        if (scrollTop <= 0) {
            scrollTop = -scrollTop;
        }
        if (this.isDevice) {
            if (scrollTop < OVERLAY_MAXWID) {
                upOverlay.style.height = scrollTop + 'px';
            }
            else {
                upOverlay.style.height = '40px';
            }
            if ((target.scrollHeight - Math.ceil(height + scrollTop)) < OVERLAY_MAXWID) {
                downOverlay.style.height = (target.scrollHeight - Math.ceil(height + scrollTop)) + 'px';
            }
            else {
                downOverlay.style.height = '40px';
            }
        }
        if (scrollTop === 0) {
            this.arrowDisabling(navUpEle, navDownEle);
        }
        else if (Math.ceil(height + scrollTop + .1) >= target.scrollHeight) {
            this.arrowDisabling(navDownEle, navUpEle);
        }
        else {
            var disEle = this.element.querySelector('.' + CLS_VSCROLLNAV + '.' + CLS_DISABLE);
            if (disEle) {
                disEle.classList.remove(CLS_DISABLE);
                disEle.setAttribute('aria-disabled', 'false');
                disEle.setAttribute('tabindex', '0');
            }
        }
    };
    /**
     * Gets called when the model property changes.The data that describes the old and new values of property that changed.
     *
     * @param  {VScrollModel} newProp - It contains the new value of data.
     * @param  {VScrollModel} oldProp - It contains the old value of data.
     * @returns {void}
     * @private
     */
    VScroll.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'scrollStep':
                    this.setScrollState();
                    break;
                case 'enableRtl':
                    if (newProp.enableRtl) {
                        this.element.classList.add(CLS_RTL);
                    }
                    else {
                        this.element.classList.remove(CLS_RTL);
                    }
                    break;
            }
        }
    };
    __decorate([
        Property(null)
    ], VScroll.prototype, "scrollStep", void 0);
    VScroll = __decorate([
        NotifyPropertyChanges
    ], VScroll);
    return VScroll;
}(Component));
export { VScroll };
