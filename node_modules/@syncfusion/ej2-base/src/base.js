import { isUndefined, isNullOrUndefined, merge, setImmediate, setValue, isBlazor, getValue, extend } from './util';
import { addClass, removeClass } from './dom';
import { Observer } from './observer';
var isColEName = new RegExp('\]');
/* tslint:enable:no-any */
/**
 * Base library module is common module for Framework modules like touch,keyboard and etc.,
 * @private
 */
var Base = /** @class */ (function () {
    /**
     * Base constructor accept options and element
     */
    function Base(options, element) {
        this.isRendered = false;
        this.isComplexArraySetter = false;
        this.isServerRendered = false;
        this.allowServerDataBinding = true;
        this.isProtectedOnChange = true;
        this.properties = {};
        this.changedProperties = {};
        this.oldProperties = {};
        this.bulkChanges = {};
        this.refreshing = false;
        this.ignoreCollectionWatch = false;
        // tslint:disable-next-line:no-empty
        this.finalUpdate = function () { };
        this.childChangedProperties = {};
        this.modelObserver = new Observer(this);
        if (!isUndefined(element)) {
            if ('string' === typeof (element)) {
                this.element = document.querySelector(element);
            }
            else {
                this.element = element;
            }
            if (!isNullOrUndefined(this.element)) {
                this.isProtectedOnChange = false;
                this.addInstance();
            }
        }
        if (!isUndefined(options)) {
            this.setProperties(options, true);
        }
        this.isDestroyed = false;
    }
    /** Property base section */
    /**
     * Function used to set bunch of property at a time.
     * @private
     * @param  {Object} prop - JSON object which holds components properties.
     * @param  {boolean} muteOnChange? - Specifies to true when we set properties.
     */
    Base.prototype.setProperties = function (prop, muteOnChange) {
        var prevDetection = this.isProtectedOnChange;
        this.isProtectedOnChange = !!muteOnChange;
        merge(this, prop);
        if (muteOnChange !== true) {
            merge(this.changedProperties, prop);
            this.dataBind();
        }
        else if (isBlazor() && this.isRendered) {
            this.serverDataBind(prop);
        }
        this.finalUpdate();
        this.changedProperties = {};
        this.oldProperties = {};
        this.isProtectedOnChange = prevDetection;
    };
    ;
    /**
     * Calls for child element data bind
     * @param {Object} obj
     * @param {Object} parent
     * @returns {void}
     */
    // tslint:disable-next-line:no-any
    Base.callChildDataBind = function (obj, parent) {
        var keys = Object.keys(obj);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (parent[key] instanceof Array) {
                for (var _a = 0, _b = parent[key]; _a < _b.length; _a++) {
                    var obj_1 = _b[_a];
                    if (obj_1.dataBind !== undefined) {
                        obj_1.dataBind();
                    }
                }
            }
            else {
                parent[key].dataBind();
            }
        }
    };
    Base.prototype.clearChanges = function () {
        this.finalUpdate();
        this.changedProperties = {};
        this.oldProperties = {};
        this.childChangedProperties = {};
    };
    /**
     * Bind property changes immediately to components
     */
    Base.prototype.dataBind = function () {
        Base.callChildDataBind(this.childChangedProperties, this);
        if (Object.getOwnPropertyNames(this.changedProperties).length) {
            var prevDetection = this.isProtectedOnChange;
            var newChanges = this.changedProperties;
            var oldChanges = this.oldProperties;
            this.clearChanges();
            this.isProtectedOnChange = true;
            this.onPropertyChanged(newChanges, oldChanges);
            this.isProtectedOnChange = prevDetection;
        }
    };
    ;
    /* tslint:disable:no-any */
    Base.prototype.serverDataBind = function (newChanges) {
        if (!isBlazor()) {
            return;
        }
        newChanges = newChanges ? newChanges : {};
        extend(this.bulkChanges, {}, newChanges, true);
        var sfBlazor = 'sfBlazor';
        if (this.allowServerDataBinding && window[sfBlazor].updateModel) {
            window[sfBlazor].updateModel(this);
            this.bulkChanges = {};
        }
    };
    /* tslint:enable:no-any */
    Base.prototype.saveChanges = function (key, newValue, oldValue) {
        if (isBlazor()) {
            // tslint:disable-next-line:no-any
            var newChanges = {};
            newChanges[key] = newValue;
            this.serverDataBind(newChanges);
        }
        if (this.isProtectedOnChange) {
            return;
        }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.finalUpdate();
        this.finalUpdate = setImmediate(this.dataBind.bind(this));
    };
    ;
    /** Event Base Section */
    /**
     * Adds the handler to the given event listener.
     * @param {string} eventName - A String that specifies the name of the event
     * @param {Function} listener - Specifies the call to run when the event occurs.
     * @return {void}
     */
    Base.prototype.addEventListener = function (eventName, handler) {
        this.modelObserver.on(eventName, handler);
    };
    /**
     * Removes the handler from the given event listener.
     * @param {string} eventName - A String that specifies the name of the event to remove
     * @param {Function} listener - Specifies the function to remove
     * @return {void}
     */
    Base.prototype.removeEventListener = function (eventName, handler) {
        this.modelObserver.off(eventName, handler);
    };
    /**
     * Triggers the handlers in the specified event.
     * @private
     * @param {string} eventName - Specifies the event to trigger for the specified component properties.
     * Can be a custom event, or any of the standard events.
     * @param {Event} eventProp - Additional parameters to pass on to the event properties
     * @param {Function} successHandler - this function will invoke after event successfully triggered
     * @param {Function} errorHandler - this function will invoke after event if it failured to call.
     * @return {void}
     */
    Base.prototype.trigger = function (eventName, eventProp, successHandler, errorHandler) {
        var _this = this;
        if (this.isDestroyed !== true) {
            var prevDetection = this.isProtectedOnChange;
            this.isProtectedOnChange = false;
            var data = this.modelObserver.notify(eventName, eventProp, successHandler, errorHandler);
            if (isColEName.test(eventName)) {
                var handler = getValue(eventName, this);
                if (handler) {
                    var blazor = 'Blazor';
                    if (window[blazor]) {
                        var promise = handler.call(this, eventProp);
                        if (promise && typeof promise.then === 'function') {
                            if (!successHandler) {
                                data = promise;
                            }
                            else {
                                promise.then(function (data) {
                                    if (successHandler) {
                                        data = typeof data === 'string' && _this.modelObserver.isJson(data) ?
                                            JSON.parse(data) : data;
                                        successHandler.call(_this, data);
                                    }
                                }).catch(function (data) {
                                    if (errorHandler) {
                                        data = typeof data === 'string' && _this.modelObserver.isJson(data) ? JSON.parse(data) : data;
                                        errorHandler.call(_this, data);
                                    }
                                });
                            }
                        }
                        else if (successHandler) {
                            successHandler.call(this, eventProp);
                        }
                    }
                    else {
                        handler.call(this, eventProp);
                        if (successHandler) {
                            successHandler.call(this, eventProp);
                        }
                    }
                }
                else if (successHandler) {
                    successHandler.call(this, eventProp);
                }
            }
            this.isProtectedOnChange = prevDetection;
            return data;
        }
    };
    /**
     * To maintain instance in base class
     */
    Base.prototype.addInstance = function () {
        // Add module class to the root element
        var moduleClass = 'e-' + this.getModuleName().toLowerCase();
        addClass([this.element], ['e-lib', moduleClass]);
        if (!isNullOrUndefined(this.element.ej2_instances)) {
            this.element.ej2_instances.push(this);
        }
        else {
            setValue('ej2_instances', [this], this.element);
        }
    };
    /**
     * To remove the instance from the element
     */
    Base.prototype.destroy = function () {
        var _this = this;
        this.element.ej2_instances =
            this.element.ej2_instances.filter(function (i) { return i !== _this; });
        removeClass([this.element], ['e-' + this.getModuleName()]);
        if (this.element.ej2_instances.length === 0) {
            // Remove module class from the root element
            removeClass([this.element], ['e-lib']);
        }
        this.clearChanges();
        this.modelObserver.destroy();
        this.isDestroyed = true;
    };
    return Base;
}());
export { Base };
/**
 * Global function to get the component instance from the rendered element.
 * @param elem Specifies the HTMLElement or element id string.
 * @param comp Specifies the component module name or Component.
 */
// tslint:disable-next-line:no-any
export function getComponent(elem, comp) {
    var instance;
    var i;
    var ele = typeof elem === 'string' ? document.getElementById(elem) : elem;
    for (i = 0; i < ele.ej2_instances.length; i++) {
        instance = ele.ej2_instances[i];
        if (typeof comp === 'string') {
            var compName = instance.getModuleName();
            if (comp === compName) {
                return instance;
            }
        }
        else {
            // tslint:disable-next-line:no-any
            if (instance instanceof comp) {
                return instance;
            }
        }
    }
    return undefined;
}
/**
 * Function to remove the child instances.
 * @return {void}
 * @private
 */
// tslint:disable-next-line:no-any
export function removeChildInstance(element) {
    // tslint:disable-next-line:no-any
    var childEle = [].slice.call(element.getElementsByClassName('e-control'));
    for (var i = 0; i < childEle.length; i++) {
        var compName = childEle[i].classList[1].split('e-')[1];
        // tslint:disable-next-line:no-any
        var compInstance = getComponent(childEle[i], compName);
        if (!isUndefined(compInstance)) {
            compInstance.destroy();
        }
    }
}
