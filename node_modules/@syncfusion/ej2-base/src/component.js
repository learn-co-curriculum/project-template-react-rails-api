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
import { isUndefined, getValue, isNullOrUndefined, setValue, uniqueID, isBlazor } from './util';
import { ModuleLoader } from './module-loader';
import { Base } from './base';
import { Observer } from './observer';
import { ChildProperty } from './child-property';
import { Property, NotifyPropertyChanges } from './notify-property-change';
import { onIntlChange, rightToLeft, defaultCulture } from './internationalization';
import { createElement, addClass, removeClass, select } from './dom';
import { VirtualDOM } from './virtual-dom';
import { getRandomId } from './template-engine';
var componentCount = 0;
var lastPageID;
var lastHistoryLen = 0;
export var versionBasedStatePersistence = false;
/**
 * To enable or disable version based statePersistence functionality for all components globally.
 * @param {boolean} status - Optional argument Specifies the status value to enable or disable versionBasedStatePersistence option.
 * @returns {void}
 */
/* istanbul ignore next */
export function enableVersionBasedPersistence(status) {
    versionBasedStatePersistence = status;
}
/**
 * Base class for all Essential JavaScript components
 */
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    /**
     * Initialize the constructor for component base
     */
    function Component(options, selector) {
        var _this = _super.call(this, options, selector) || this;
        _this.randomId = uniqueID();
        /**
         * string template option for Blazor template rendering
         * @private
         */
        _this.isStringTemplate = false;
        _this.needsID = false;
        _this.isReactHybrid = false;
        if (isNullOrUndefined(_this.enableRtl)) {
            _this.setProperties({ 'enableRtl': rightToLeft }, true);
        }
        if (isNullOrUndefined(_this.locale)) {
            _this.setProperties({ 'locale': defaultCulture }, true);
        }
        _this.moduleLoader = new ModuleLoader(_this);
        _this.localObserver = new Observer(_this);
        // tslint:disable-next-line:no-function-constructor-with-string-args
        onIntlChange.on('notifyExternalChange', _this.detectFunction, _this, _this.randomId);
        if (!isUndefined(selector)) {
            _this.appendTo();
        }
        return _this;
    }
    Component.prototype.requiredModules = function () {
        return [];
    };
    ;
    /**
     * Destroys the sub modules while destroying the widget
     */
    Component.prototype.destroy = function () {
        if (this.isDestroyed) {
            return;
        }
        if (this.enablePersistence) {
            this.setPersistData();
        }
        this.localObserver.destroy();
        if (this.refreshing) {
            return;
        }
        removeClass([this.element], ['e-control']);
        this.trigger('destroyed', { cancel: false });
        _super.prototype.destroy.call(this);
        this.moduleLoader.clean();
        onIntlChange.off('notifyExternalChange', this.detectFunction, this.randomId);
    };
    /**
     * Applies all the pending property changes and render the component again.
     */
    Component.prototype.refresh = function () {
        this.refreshing = true;
        this.moduleLoader.clean();
        this.destroy();
        this.clearChanges();
        this.localObserver = new Observer(this);
        this.preRender();
        this.injectModules();
        this.render();
        this.refreshing = false;
    };
    /* istanbul ignore next */
    Component.prototype.accessMount = function () {
        if (this.mount && !this.isReactHybrid) {
            this.mount();
        }
    };
    /**
     * Returns the route element of the component
     */
    /* istanbul ignore next */
    Component.prototype.getRootElement = function () {
        if (this.isReactHybrid) {
            return this.actualElement;
        }
        else {
            return this.element;
        }
    };
    /**
     * Returns the persistence data for component
     */
    /* istanbul ignore next */
    //tslint:disable:no-any
    Component.prototype.getLocalData = function () {
        var eleId = this.getModuleName() + this.element.id;
        if (versionBasedStatePersistence) {
            return window.localStorage.getItem(eleId + this.ej2StatePersistenceVersion);
        }
        else {
            return window.localStorage.getItem(eleId);
        }
    };
    /**
     * Appends the control within the given HTML element
     * @param {string | HTMLElement} selector - Target element where control needs to be appended
     */
    Component.prototype.appendTo = function (selector) {
        if (!isNullOrUndefined(selector) && typeof (selector) === 'string') {
            this.element = select(selector, document);
        }
        else if (!isNullOrUndefined(selector)) {
            this.element = selector;
        }
        if (!isNullOrUndefined(this.element)) {
            var moduleClass = 'e-' + this.getModuleName().toLowerCase();
            addClass([this.element], ['e-control', moduleClass]);
            this.isProtectedOnChange = false;
            if (this.needsID && !this.element.id) {
                this.element.id = this.getUniqueID(this.getModuleName());
            }
            if (this.enablePersistence) {
                this.mergePersistData();
                window.addEventListener('unload', this.setPersistData.bind(this));
            }
            var inst = getValue('ej2_instances', this.element);
            if (!inst || inst.indexOf(this) === -1) {
                _super.prototype.addInstance.call(this);
            }
            this.preRender();
            this.injectModules();
            this.render();
            if (!this.mount) {
                this.trigger('created');
            }
            else {
                this.accessMount();
            }
        }
    };
    /**
     * It is used to process the post rendering functionalities to a component.
     */
    Component.prototype.renderComplete = function (wrapperElement) {
        if (isBlazor()) {
            var sfBlazor = 'sfBlazor';
            // tslint:disable-next-line:no-any
            window[sfBlazor].renderComplete(this.element, wrapperElement);
        }
        this.isRendered = true;
    };
    /**
     * When invoked, applies the pending property changes immediately to the component.
     */
    Component.prototype.dataBind = function () {
        this.injectModules();
        _super.prototype.dataBind.call(this);
    };
    ;
    /**
     * Attach one or more  event handler to the current component context.
     * It is used for internal handling event internally within the component only.
     * @param {BoundOptions[]| string} event - It is  optional type either to  Set the collection of event list or the eventName.
     * @param {Function} handler - optional parameter Specifies the handler to run when the event occurs
     * @param {Object} context - optional parameter Specifies the context to be bind in the handler.
     * @return {void}
     * @private
     */
    Component.prototype.on = function (event, handler, context) {
        if (typeof event === 'string') {
            this.localObserver.on(event, handler, context);
        }
        else {
            for (var _i = 0, event_1 = event; _i < event_1.length; _i++) {
                var arg = event_1[_i];
                this.localObserver.on(arg.event, arg.handler, arg.context);
            }
        }
    };
    /**
     * To remove one or more event handler that has been attached with the on() method.
     * @param {BoundOptions[]| string} event - It is  optional type either to  Set the collection of event list or the eventName.
     * @param {Function} handler - optional parameter Specifies the function to run when the event occurs
     * @return {void}
     * @private
     */
    Component.prototype.off = function (event, handler) {
        if (typeof event === 'string') {
            this.localObserver.off(event, handler);
        }
        else {
            for (var _i = 0, event_2 = event; _i < event_2.length; _i++) {
                var arg = event_2[_i];
                this.localObserver.off(arg.event, arg.handler);
            }
        }
    };
    /**
     * To notify the handlers in the specified event.
     * @param {string} property - Specifies the event to be notify.
     * @param {Object} argument - Additional parameters to pass while calling the handler.
     * @return {void}
     * @private
     */
    Component.prototype.notify = function (property, argument) {
        if (this.isDestroyed !== true) {
            this.localObserver.notify(property, argument);
        }
    };
    /**
     * Get injected modules
     * @private
     */
    Component.prototype.getInjectedModules = function () {
        return this.injectedModules;
    };
    ;
    /**
     * Dynamically injects the required modules to the component.
     */
    Component.Inject = function () {
        var moduleList = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            moduleList[_i] = arguments[_i];
        }
        if (!this.prototype.injectedModules) {
            this.prototype.injectedModules = [];
        }
        for (var i = 0; i < moduleList.length; i++) {
            if (this.prototype.injectedModules.indexOf(moduleList[i]) === -1) {
                this.prototype.injectedModules.push(moduleList[i]);
            }
        }
    };
    /**
     * This is a instance method to create an element.
     * @private
     */
    /* istanbul ignore next */
    //tslint:disable:no-any
    Component.prototype.createElement = function (tagName, prop, isVDOM) {
        if (isVDOM && this.isReactHybrid) {
            if (prop) {
                prop = {};
            }
            prop['data-id'] = getRandomId();
            return VirtualDOM.createElement(tagName, prop);
        }
        else {
            return createElement(tagName, prop);
        }
    };
    /**
     *
     * @param handler - handler to be triggered after state Updated.
     * @param argument - Arguments to be passed to caller.
     * @private
     */
    /* istanbul ignore next */
    //tslint:disable:no-any
    Component.prototype.triggerStateChange = function (handler, argument) {
        if (this.isReactHybrid) {
            //tslint:disable:no-any
            this.setState();
            this.currentContext = { calls: handler, args: argument };
        }
    };
    // tslint: enable: no-any
    Component.prototype.injectModules = function () {
        if (this.injectedModules && this.injectedModules.length) {
            this.moduleLoader.inject(this.requiredModules(), this.injectedModules);
        }
    };
    Component.prototype.detectFunction = function (args) {
        var prop = Object.keys(args);
        if (prop.length) {
            this[prop[0]] = args[prop[0]];
        }
    };
    Component.prototype.mergePersistData = function () {
        var data;
        if (versionBasedStatePersistence) {
            data = window.localStorage.getItem(this.getModuleName() + this.element.id + this.ej2StatePersistenceVersion);
        }
        else {
            data = window.localStorage.getItem(this.getModuleName() + this.element.id);
        }
        if (!(isNullOrUndefined(data) || (data === ''))) {
            this.setProperties(JSON.parse(data), true);
        }
    };
    Component.prototype.setPersistData = function () {
        if (!this.isDestroyed) {
            if (versionBasedStatePersistence) {
                window.localStorage.setItem(this.getModuleName() + this.element.id + this.ej2StatePersistenceVersion, this.getPersistData());
            }
            else {
                window.localStorage.setItem(this.getModuleName() + this.element.id, this.getPersistData());
            }
        }
    };
    //tslint:disable-next-line
    Component.prototype.renderReactTemplates = function () {
        //No Code
    };
    //tslint:disable-next-line
    Component.prototype.clearTemplate = function (templateName, index) {
        //No Code
    };
    Component.prototype.getUniqueID = function (definedName) {
        if (this.isHistoryChanged()) {
            componentCount = 0;
        }
        lastPageID = this.pageID(location.href);
        lastHistoryLen = history.length;
        return definedName + '_' + lastPageID + '_' + componentCount++;
    };
    Component.prototype.pageID = function (url) {
        var hash = 0;
        if (url.length === 0) {
            return hash;
        }
        for (var i = 0; i < url.length; i++) {
            var char = url.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash);
    };
    Component.prototype.isHistoryChanged = function () {
        return lastPageID !== this.pageID(location.href) || lastHistoryLen !== history.length;
    };
    Component.prototype.addOnPersist = function (options) {
        var _this = this;
        var persistObj = {};
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var key = options_1[_i];
            var objValue = void 0;
            objValue = getValue(key, this);
            if (!isUndefined(objValue)) {
                setValue(key, this.getActualProperties(objValue), persistObj);
            }
        }
        return JSON.stringify(persistObj, function (key, value) {
            return _this.getActualProperties(value);
        });
    };
    Component.prototype.getActualProperties = function (obj) {
        if (obj instanceof ChildProperty) {
            return getValue('properties', obj);
        }
        else {
            return obj;
        }
    };
    Component.prototype.ignoreOnPersist = function (options) {
        return JSON.stringify(this.iterateJsonProperties(this.properties, options));
    };
    Component.prototype.iterateJsonProperties = function (obj, ignoreList) {
        var newObj = {};
        var _loop_1 = function (key) {
            if (ignoreList.indexOf(key) === -1) {
                // tslint:disable-next-line:no-any
                var value = obj[key];
                if (typeof value === 'object' && !(value instanceof Array)) {
                    var newList = ignoreList.filter(function (str) {
                        return new RegExp(key + '.').test(str);
                    }).map(function (str) {
                        return str.replace(key + '.', '');
                    });
                    newObj[key] = this_1.iterateJsonProperties(this_1.getActualProperties(value), newList);
                }
                else {
                    newObj[key] = value;
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
            var key = _a[_i];
            _loop_1(key);
        }
        return newObj;
    };
    __decorate([
        Property(false)
    ], Component.prototype, "enablePersistence", void 0);
    __decorate([
        Property()
    ], Component.prototype, "enableRtl", void 0);
    __decorate([
        Property()
    ], Component.prototype, "locale", void 0);
    Component = __decorate([
        NotifyPropertyChanges
    ], Component);
    return Component;
}(Base));
export { Component };
//Function handling for page navigation detection 
/* istanbul ignore next */
(function () {
    if (typeof window !== 'undefined') {
        window.addEventListener('popstate', 
        /* istanbul ignore next */
        function () {
            componentCount = 0;
        });
    }
})();
