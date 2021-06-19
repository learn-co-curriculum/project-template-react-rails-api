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
import { Property, NotifyPropertyChanges, Component, isBlazor, isRippleEnabled } from '@syncfusion/ej2-base';
import { addClass, Event, detach, removeClass } from '@syncfusion/ej2-base';
import { rippleEffect, EventHandler, Observer, SanitizeHtmlHelper } from '@syncfusion/ej2-base';
import { getTextNode } from '../common/common';
export var buttonObserver = new Observer();
var cssClassName = {
    RTL: 'e-rtl',
    BUTTON: 'e-btn',
    PRIMARY: 'e-primary',
    ICONBTN: 'e-icon-btn'
};
/**
 * The Button is a graphical user interface element that triggers an event on its click action. It can contain a text, an image, or both.
 * ```html
 * <button id="button">Button</button>
 * ```
 * ```typescript
 * <script>
 * var btnObj = new Button();
 * btnObj.appendTo("#button");
 * </script>
 * ```
 */
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    /**
     * Constructor for creating the widget
     *
     * @param  {ButtonModel} options - Specifies the button model
     * @param  {string|HTMLButtonElement} element - Specifies the target element
     */
    function Button(options, element) {
        return _super.call(this, options, element) || this;
    }
    Button.prototype.preRender = function () {
        // pre render code snippets
    };
    /**
     * Initialize the control rendering
     *
     * @returns {void}
     * @private
     */
    Button.prototype.render = function () {
        this.initialize();
        this.removeRippleEffect = rippleEffect(this.element, { selector: '.' + cssClassName.BUTTON });
        this.renderComplete();
    };
    Button.prototype.initialize = function () {
        if (this.cssClass) {
            addClass([this.element], this.cssClass.split(' '));
        }
        if (this.isPrimary) {
            this.element.classList.add(cssClassName.PRIMARY);
        }
        if (!isBlazor() || (isBlazor() && this.getModuleName() !== 'progress-btn')) {
            if (this.content) {
                var tempContent = (this.enableHtmlSanitizer) ? SanitizeHtmlHelper.sanitize(this.content) : this.content;
                this.element.innerHTML = tempContent;
            }
            this.setIconCss();
        }
        if (this.enableRtl) {
            this.element.classList.add(cssClassName.RTL);
        }
        if (this.disabled) {
            this.controlStatus(this.disabled);
        }
        else {
            this.wireEvents();
        }
    };
    Button.prototype.controlStatus = function (disabled) {
        this.element.disabled = disabled;
    };
    Button.prototype.setIconCss = function () {
        if (this.iconCss) {
            var span = this.createElement('span', { className: 'e-btn-icon ' + this.iconCss });
            if (!this.element.textContent.trim()) {
                this.element.classList.add(cssClassName.ICONBTN);
            }
            else {
                span.classList.add('e-icon-' + this.iconPosition.toLowerCase());
                if (this.iconPosition === 'Top' || this.iconPosition === 'Bottom') {
                    this.element.classList.add('e-' + this.iconPosition.toLowerCase() + '-icon-btn');
                }
            }
            var node = this.element.childNodes[0];
            if (node && (this.iconPosition === 'Left' || this.iconPosition === 'Top')) {
                this.element.insertBefore(span, node);
            }
            else {
                this.element.appendChild(span);
            }
        }
    };
    Button.prototype.wireEvents = function () {
        if (this.isToggle) {
            EventHandler.add(this.element, 'click', this.btnClickHandler, this);
        }
    };
    Button.prototype.unWireEvents = function () {
        if (this.isToggle) {
            EventHandler.remove(this.element, 'click', this.btnClickHandler);
        }
    };
    Button.prototype.btnClickHandler = function () {
        if (this.element.classList.contains('e-active')) {
            this.element.classList.remove('e-active');
        }
        else {
            this.element.classList.add('e-active');
        }
    };
    /**
     * Destroys the widget.
     *
     * @returns {void}
     */
    Button.prototype.destroy = function () {
        var classList = [cssClassName.PRIMARY, cssClassName.RTL, cssClassName.ICONBTN, 'e-success', 'e-info', 'e-danger',
            'e-warning', 'e-flat', 'e-outline', 'e-small', 'e-bigger', 'e-active', 'e-round',
            'e-top-icon-btn', 'e-bottom-icon-btn'];
        if (this.cssClass) {
            classList = classList.concat(this.cssClass.split(' '));
        }
        _super.prototype.destroy.call(this);
        removeClass([this.element], classList);
        if (!this.element.getAttribute('class')) {
            this.element.removeAttribute('class');
        }
        if (this.disabled) {
            this.element.removeAttribute('disabled');
        }
        if (this.content) {
            this.element.innerHTML = this.element.innerHTML.replace(this.content, '');
        }
        var span = this.element.querySelector('span.e-btn-icon');
        if (span) {
            detach(span);
        }
        this.unWireEvents();
        if (isRippleEnabled) {
            this.removeRippleEffect();
        }
    };
    /**
     * Get component name.
     *
     * @returns {string} - Module name
     * @private
     */
    Button.prototype.getModuleName = function () {
        return 'btn';
    };
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @returns {string} - Persist Data
     * @private
     */
    Button.prototype.getPersistData = function () {
        return this.addOnPersist([]);
    };
    /**
     * Dynamically injects the required modules to the component.
     *
     * @private
     * @returns {void}
     */
    Button.Inject = function () {
        // Inject code snippets
    };
    /**
     * Called internally if any of the property value changed.
     *
     * @param  {ButtonModel} newProp - Specifies new properties
     * @param  {ButtonModel} oldProp - Specifies old properties
     * @returns {void}
     * @private
     */
    Button.prototype.onPropertyChanged = function (newProp, oldProp) {
        var span = this.element.querySelector('span.e-btn-icon');
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'isPrimary':
                    if (newProp.isPrimary) {
                        this.element.classList.add(cssClassName.PRIMARY);
                    }
                    else {
                        this.element.classList.remove(cssClassName.PRIMARY);
                    }
                    break;
                case 'disabled':
                    this.controlStatus(newProp.disabled);
                    break;
                case 'iconCss': {
                    if (span) {
                        if (newProp.iconCss) {
                            span.className = 'e-btn-icon ' + newProp.iconCss;
                            if (this.element.textContent.trim()) {
                                if (this.iconPosition === 'Left') {
                                    span.classList.add('e-icon-left');
                                }
                                else {
                                    span.classList.add('e-icon-right');
                                }
                            }
                        }
                        else {
                            detach(span);
                        }
                    }
                    else {
                        this.setIconCss();
                    }
                    break;
                }
                case 'iconPosition':
                    removeClass([this.element], ['e-top-icon-btn', 'e-bottom-icon-btn']);
                    span = this.element.querySelector('span.e-btn-icon');
                    if (span) {
                        detach(span);
                    }
                    this.setIconCss();
                    break;
                case 'cssClass':
                    if (oldProp.cssClass) {
                        removeClass([this.element], oldProp.cssClass.split(' '));
                    }
                    if (newProp.cssClass) {
                        addClass([this.element], newProp.cssClass.split(' '));
                    }
                    break;
                case 'enableRtl':
                    if (newProp.enableRtl) {
                        this.element.classList.add(cssClassName.RTL);
                    }
                    else {
                        this.element.classList.remove(cssClassName.RTL);
                    }
                    break;
                case 'content': {
                    var node = getTextNode(this.element);
                    if (!node) {
                        this.element.classList.remove(cssClassName.ICONBTN);
                    }
                    if (!isBlazor() || (isBlazor() && !this.isServerRendered && this.getModuleName() !== 'progress-btn')) {
                        if (this.enableHtmlSanitizer) {
                            newProp.content = SanitizeHtmlHelper.sanitize(newProp.content);
                        }
                        this.element.innerHTML = newProp.content;
                        this.setIconCss();
                    }
                    break;
                }
                case 'isToggle':
                    if (newProp.isToggle) {
                        EventHandler.add(this.element, 'click', this.btnClickHandler, this);
                    }
                    else {
                        EventHandler.remove(this.element, 'click', this.btnClickHandler);
                        removeClass([this.element], ['e-active']);
                    }
                    break;
            }
        }
    };
    /**
     * Click the button element
     * its native method
     *
     * @public
     * @returns {void}
     */
    Button.prototype.click = function () {
        this.element.click();
    };
    /**
     * Sets the focus to Button
     * its native method
     *
     * @public
     * @returns {void}
     */
    Button.prototype.focusIn = function () {
        this.element.focus();
    };
    __decorate([
        Property('Left')
    ], Button.prototype, "iconPosition", void 0);
    __decorate([
        Property('')
    ], Button.prototype, "iconCss", void 0);
    __decorate([
        Property(false)
    ], Button.prototype, "disabled", void 0);
    __decorate([
        Property(false)
    ], Button.prototype, "isPrimary", void 0);
    __decorate([
        Property('')
    ], Button.prototype, "cssClass", void 0);
    __decorate([
        Property('')
    ], Button.prototype, "content", void 0);
    __decorate([
        Property(false)
    ], Button.prototype, "isToggle", void 0);
    __decorate([
        Property()
    ], Button.prototype, "locale", void 0);
    __decorate([
        Property(false)
    ], Button.prototype, "enableHtmlSanitizer", void 0);
    __decorate([
        Event()
    ], Button.prototype, "created", void 0);
    Button = __decorate([
        NotifyPropertyChanges
    ], Button);
    return Button;
}(Component));
export { Button };
