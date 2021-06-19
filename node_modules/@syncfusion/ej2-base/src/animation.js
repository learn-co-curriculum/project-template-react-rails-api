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
import { createElement, selectAll, closest } from './dom';
import { Base } from './base';
import { Browser } from './browser';
import { EventHandler } from './event-handler';
import { Property, NotifyPropertyChanges, Event } from './notify-property-change';
/**
 * The Animation framework provide options to animate the html DOM elements
 * ```typescript
 *   let animeObject = new Animation({
 *      name: 'SlideLeftIn',
 *      duration: 1000
 *   });
 *   animeObject.animate('#anime1');
 *   animeObject.animate('#anime2', { duration: 500 });
 * ```
 */
var Animation = /** @class */ (function (_super) {
    __extends(Animation, _super);
    function Animation(options) {
        var _this = _super.call(this, options, undefined) || this;
        /**
         * @private
         */
        _this.easing = {
            ease: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
            linear: 'cubic-bezier(0.250, 0.250, 0.750, 0.750)',
            easeIn: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)',
            easeOut: 'cubic-bezier(0.000, 0.000, 0.580, 1.000)',
            easeInOut: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
            elasticInOut: 'cubic-bezier(0.5,-0.58,0.38,1.81)',
            elasticIn: 'cubic-bezier(0.17,0.67,0.59,1.81)',
            elasticOut: 'cubic-bezier(0.7,-0.75,0.99,1.01)'
        };
        return _this;
    }
    Animation_1 = Animation;
    /**
     * Applies animation to the current element.
     * @param {string | HTMLElement} element - Element which needs to be animated.
     * @param {AnimationModel} options - Overriding default animation settings.
     * @return {void}
     */
    Animation.prototype.animate = function (element, options) {
        options = !options ? {} : options;
        var model = this.getModel(options);
        if (typeof element === 'string') {
            var elements = Array.prototype.slice.call(selectAll(element, document));
            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                var element_1 = elements_1[_i];
                model.element = element_1;
                Animation_1.delayAnimation(model);
            }
        }
        else {
            model.element = element;
            Animation_1.delayAnimation(model);
        }
    };
    /**
     * Stop the animation effect on animated element.
     * @param {HTMLElement} element - Element which needs to be stop the animation.
     * @param {AnimationOptions} model - Handling the animation model at stop function.
     * @return {void}
     */
    Animation.stop = function (element, model) {
        element.style.animation = '';
        element.removeAttribute('e-animate');
        var animationId = element.getAttribute('e-animation-id');
        if (animationId) {
            var frameId = parseInt(animationId, 10);
            cancelAnimationFrame(frameId);
            element.removeAttribute('e-animation-id');
        }
        if (model && model.end) {
            model.end.call(this, model);
        }
    };
    /**
     * Set delay to animation element
     * @param {AnimationModel} model
     * @returns {void}
     */
    Animation.delayAnimation = function (model) {
        if (model.delay) {
            setTimeout(function () { Animation_1.applyAnimation(model); }, model.delay);
        }
        else {
            Animation_1.applyAnimation(model);
        }
    };
    /**
     * Triggers animation
     * @param {AnimationModel} model
     * @returns {void}
     */
    Animation.applyAnimation = function (model) {
        var _this = this;
        model.timeStamp = 0;
        var step = 0;
        var timerId = 0;
        var startTime = 0;
        var prevTimeStamp = 0;
        var duration = model.duration;
        model.element.setAttribute('e-animate', 'true');
        var startAnimation = function (timeStamp) {
            try {
                if (timeStamp) {
                    // let step: number = model.timeStamp = timeStamp - startTime;
                    /** phantomjs workaround for timestamp fix */
                    prevTimeStamp = prevTimeStamp === 0 ? timeStamp : prevTimeStamp;
                    model.timeStamp = (timeStamp + model.timeStamp) - prevTimeStamp;
                    prevTimeStamp = timeStamp;
                    /** phantomjs workaround end */
                    // trigger animation begin event
                    if (!step && model.begin) {
                        model.begin.call(_this, model);
                    }
                    step = step + 1;
                    var avg = model.timeStamp / step;
                    if (model.timeStamp < duration && model.timeStamp + avg < duration && model.element.getAttribute('e-animate')) {
                        // apply animation effect to the current element                
                        model.element.style.animation = model.name + ' ' + model.duration + 'ms ' + model.timingFunction;
                        if (model.progress) {
                            model.progress.call(_this, model);
                        }
                        // repeat requestAnimationFrame 
                        requestAnimationFrame(startAnimation);
                    }
                    else {
                        // clear requestAnimationFrame
                        cancelAnimationFrame(timerId);
                        model.element.removeAttribute('e-animation-id');
                        model.element.removeAttribute('e-animate');
                        model.element.style.animation = '';
                        if (model.end) {
                            model.end.call(_this, model);
                        }
                    }
                }
                else {
                    startTime = performance.now();
                    // set initial requestAnimationFrame
                    timerId = requestAnimationFrame(startAnimation);
                    model.element.setAttribute('e-animation-id', timerId.toString());
                }
            }
            catch (e) {
                cancelAnimationFrame(timerId);
                model.element.removeAttribute('e-animation-id');
                if (model.fail) {
                    model.fail.call(_this, e);
                }
            }
        };
        startAnimation();
    };
    /**
     * Returns Animation Model
     * @param {AnimationModel} options
     * @returns {AnimationModel}
     */
    Animation.prototype.getModel = function (options) {
        return {
            name: options.name || this.name,
            delay: options.delay || this.delay,
            duration: (options.duration !== undefined ? options.duration : this.duration),
            begin: options.begin || this.begin,
            end: options.end || this.end,
            fail: options.fail || this.fail,
            progress: options.progress || this.progress,
            timingFunction: this.easing[options.timingFunction] ? this.easing[options.timingFunction] :
                (options.timingFunction || this.easing[this.timingFunction])
        };
    };
    /**
     * @private
     */
    Animation.prototype.onPropertyChanged = function (newProp, oldProp) {
        // no code needed
    };
    /**
     * Returns module name as animation
     * @private
     */
    Animation.prototype.getModuleName = function () {
        return 'animation';
    };
    /**
     * @private
     */
    Animation.prototype.destroy = function () {
        //Override base destroy;
    };
    var Animation_1;
    __decorate([
        Property('FadeIn')
    ], Animation.prototype, "name", void 0);
    __decorate([
        Property(400)
    ], Animation.prototype, "duration", void 0);
    __decorate([
        Property('ease')
    ], Animation.prototype, "timingFunction", void 0);
    __decorate([
        Property(0)
    ], Animation.prototype, "delay", void 0);
    __decorate([
        Event()
    ], Animation.prototype, "progress", void 0);
    __decorate([
        Event()
    ], Animation.prototype, "begin", void 0);
    __decorate([
        Event()
    ], Animation.prototype, "end", void 0);
    __decorate([
        Event()
    ], Animation.prototype, "fail", void 0);
    Animation = Animation_1 = __decorate([
        NotifyPropertyChanges
    ], Animation);
    return Animation;
}(Base));
export { Animation };
/**
 * Ripple provides material theme's wave effect when an element is clicked
 * ```html
 * <div id='ripple'></div>
 * <script>
 *   rippleEffect(document.getElementById('ripple'));
 * </script>
 * ```
 * @private
 * @param HTMLElement element - Target element
 * @param RippleOptions rippleOptions - Ripple options .
 */
export function rippleEffect(element, rippleOptions, done) {
    var rippleModel = getRippleModel(rippleOptions);
    if (rippleModel.rippleFlag === false || (rippleModel.rippleFlag === undefined && !isRippleEnabled)) {
        return Function;
    }
    element.setAttribute('data-ripple', 'true');
    EventHandler.add(element, 'mousedown', rippleHandler, { parent: element, rippleOptions: rippleModel });
    EventHandler.add(element, 'mouseup', rippleUpHandler, { parent: element, rippleOptions: rippleModel, done: done });
    EventHandler.add(element, 'mouseleave', rippleLeaveHandler, { parent: element, rippleOptions: rippleModel });
    if (Browser.isPointer) {
        EventHandler.add(element, 'transitionend', rippleLeaveHandler, { parent: element, rippleOptions: rippleModel });
    }
    return (function () {
        element.removeAttribute('data-ripple');
        EventHandler.remove(element, 'mousedown', rippleHandler);
        EventHandler.remove(element, 'mouseup', rippleUpHandler);
        EventHandler.remove(element, 'mouseleave', rippleLeaveHandler);
        EventHandler.remove(element, 'transitionend', rippleLeaveHandler);
    });
}
function getRippleModel(rippleOptions) {
    var rippleModel = {
        selector: rippleOptions && rippleOptions.selector ? rippleOptions.selector : null,
        ignore: rippleOptions && rippleOptions.ignore ? rippleOptions.ignore : null,
        rippleFlag: rippleOptions && rippleOptions.rippleFlag,
        isCenterRipple: rippleOptions && rippleOptions.isCenterRipple,
        duration: rippleOptions && rippleOptions.duration ? rippleOptions.duration : 350
    };
    return rippleModel;
}
/**
 * Handler for ripple event
 * @param {MouseEvent} e
 * @returns {void}
 * @private
 */
function rippleHandler(e) {
    var target = (e.target);
    var selector = this.rippleOptions.selector;
    var element = selector ? closest(target, selector) : target;
    if (!element || (this.rippleOptions && closest(target, this.rippleOptions.ignore))) {
        return;
    }
    var offset = element.getBoundingClientRect();
    var offsetX = e.pageX - document.body.scrollLeft;
    var offsetY = e.pageY - ((!document.body.scrollTop && document.documentElement) ?
        document.documentElement.scrollTop : document.body.scrollTop);
    var pageX = Math.max(Math.abs(offsetX - offset.left), Math.abs(offsetX - offset.right));
    var pageY = Math.max(Math.abs(offsetY - offset.top), Math.abs(offsetY - offset.bottom));
    var radius = Math.sqrt(pageX * pageX + pageY * pageY);
    var diameter = radius * 2 + 'px';
    var x = offsetX - offset.left - radius;
    var y = offsetY - offset.top - radius;
    if (this.rippleOptions && this.rippleOptions.isCenterRipple) {
        x = 0;
        y = 0;
        diameter = '100%';
    }
    element.classList.add('e-ripple');
    var duration = this.rippleOptions.duration.toString();
    var styles = 'width: ' + diameter + ';height: ' + diameter + ';left: ' + x + 'px;top: ' + y + 'px;' +
        'transition-duration: ' + duration + 'ms;';
    var rippleElement = createElement('div', { className: 'e-ripple-element', styles: styles });
    element.appendChild(rippleElement);
    window.getComputedStyle(rippleElement).getPropertyValue('opacity');
    rippleElement.style.transform = 'scale(1)';
    if (element !== this.parent) {
        EventHandler.add(element, 'mouseleave', rippleLeaveHandler, { parent: this.parent, rippleOptions: this.rippleOptions });
    }
}
/**
 * Handler for ripple element mouse up event
 * @param {MouseEvent} e
 * @returns {void}
 * @private
 */
function rippleUpHandler(e) {
    removeRipple(e, this);
}
/**
 * Handler for ripple element mouse move event
 * @param {MouseEvent} e
 * @returns {void}
 * @private
 */
function rippleLeaveHandler(e) {
    removeRipple(e, this);
}
/**
 * Handler for removing ripple element
 * @param {MouseEvent} e
 * @param {rippleArgs} eventArgs
 * @returns {void}
 * @private
 */
function removeRipple(e, eventArgs) {
    var duration = eventArgs.rippleOptions.duration;
    var target = (e.target);
    var selector = eventArgs.rippleOptions.selector;
    var element = selector ? closest(target, selector) : target;
    if (!element || (element && element.className.indexOf('e-ripple') === -1)) {
        return;
    }
    var rippleElements = selectAll('.e-ripple-element', element);
    var rippleElement = rippleElements[rippleElements.length - 1];
    if (rippleElement) {
        rippleElement.style.opacity = '0.5';
    }
    if (eventArgs.parent !== element) {
        EventHandler.remove(element, 'mouseleave', rippleLeaveHandler);
    }
    /* tslint:disable:align */
    setTimeout(function () {
        if (rippleElement && rippleElement.parentNode) {
            rippleElement.parentNode.removeChild(rippleElement);
        }
        if (!element.getElementsByClassName('e-ripple-element').length) {
            element.classList.remove('e-ripple');
        }
        if (eventArgs.done) {
            eventArgs.done(e);
        }
    }, duration);
}
export var isRippleEnabled = false;
/**
 * Animation Module provides support to enable ripple effect functionality to Essential JS 2 components.
 * @param {boolean} isRipple Specifies the boolean value to enable or disable ripple effect.
 * @returns {boolean}
 */
export function enableRipple(isRipple) {
    isRippleEnabled = isRipple;
    return isRippleEnabled;
}
