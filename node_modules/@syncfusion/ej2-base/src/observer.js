import { isNullOrUndefined, getValue, extend, isBlazor } from './util';
var Observer = /** @class */ (function () {
    function Observer(context) {
        this.ranArray = [];
        this.boundedEvents = {};
        if (isNullOrUndefined(context)) {
            return;
        }
        this.context = context;
    }
    ;
    /**
     * To attach handler for given property in current context.
     * @param {string} property - specifies the name of the event.
     * @param {Function} handler - Specifies the handler function to be called while event notified.
     * @param {Object} context - Specifies the context binded to the handler.
     * @param {string} id - specifies the random generated id.
     * @return {void}
     */
    Observer.prototype.on = function (property, handler, context, id) {
        if (isNullOrUndefined(handler)) {
            return;
        }
        var cntxt = context || this.context;
        if (this.notExist(property)) {
            this.boundedEvents[property] = [{ handler: handler, context: cntxt }];
            return;
        }
        if (!isNullOrUndefined(id)) {
            if (this.ranArray.indexOf(id) === -1) {
                this.ranArray.push(id);
                this.boundedEvents[property].push({ handler: handler, context: cntxt, id: id });
            }
        }
        else if (!this.isHandlerPresent(this.boundedEvents[property], handler)) {
            this.boundedEvents[property].push({ handler: handler, context: cntxt });
        }
    };
    /**
     * To remove handlers from a event attached using on() function.
     * @param {string} eventName - specifies the name of the event.
     * @param {Function} handler - Optional argument specifies the handler function to be called while event notified.
     * @param {string} id - specifies the random generated id.
     * @return {void}
     */
    Observer.prototype.off = function (property, handler, id) {
        if (this.notExist(property)) {
            return;
        }
        var curObject = getValue(property, this.boundedEvents);
        if (handler) {
            for (var i = 0; i < curObject.length; i++) {
                if (id) {
                    if (curObject[i].id === id) {
                        curObject.splice(i, 1);
                        var indexLocation = this.ranArray.indexOf(id);
                        if (indexLocation !== -1) {
                            this.ranArray.splice(indexLocation, 1);
                        }
                        break;
                    }
                }
                else if (handler === curObject[i].handler) {
                    curObject.splice(i, 1);
                    break;
                }
            }
        }
        else {
            delete this.boundedEvents[property];
        }
    };
    /**
     * To notify the handlers in the specified event.
     * @param {string} property - Specifies the event to be notify.
     * @param {Object} args - Additional parameters to pass while calling the handler.
     * @param {Function} successHandler - this function will invoke after event successfully triggered
     * @param {Function} errorHandler - this function will invoke after event if it was failure to call.
     * @return {void}
     */
    Observer.prototype.notify = function (property, argument, successHandler, errorHandler) {
        if (this.notExist(property)) {
            if (successHandler) {
                successHandler.call(this, argument);
            }
            return;
        }
        if (argument) {
            argument.name = property;
        }
        var blazor = 'Blazor';
        var curObject = getValue(property, this.boundedEvents).slice(0);
        if (window[blazor]) {
            return this.blazorCallback(curObject, argument, successHandler, errorHandler, 0);
        }
        else {
            for (var _i = 0, curObject_1 = curObject; _i < curObject_1.length; _i++) {
                var cur = curObject_1[_i];
                cur.handler.call(cur.context, argument);
            }
            if (successHandler) {
                successHandler.call(this, argument);
            }
        }
    };
    Observer.prototype.blazorCallback = function (objs, argument, successHandler, errorHandler, index) {
        var _this = this;
        var isTrigger = index === objs.length - 1;
        if (index < objs.length) {
            var obj_1 = objs[index];
            var promise = obj_1.handler.call(obj_1.context, argument);
            if (promise && typeof promise.then === 'function') {
                if (!successHandler) {
                    return promise;
                }
                promise.then(function (data) {
                    data = typeof data === 'string' && _this.isJson(data) ? JSON.parse(data, _this.dateReviver) : data;
                    extend(argument, argument, data, true);
                    if (successHandler && isTrigger) {
                        successHandler.call(obj_1.context, argument);
                    }
                    else {
                        return _this.blazorCallback(objs, argument, successHandler, errorHandler, index + 1);
                    }
                }).catch(function (data) {
                    if (errorHandler) {
                        errorHandler.call(obj_1.context, typeof data === 'string' &&
                            _this.isJson(data) ? JSON.parse(data, _this.dateReviver) : data);
                    }
                });
            }
            else if (successHandler && isTrigger) {
                successHandler.call(obj_1.context, argument);
            }
            else {
                return this.blazorCallback(objs, argument, successHandler, errorHandler, index + 1);
            }
        }
    };
    // tslint:disable-next-line:no-any
    Observer.prototype.dateReviver = function (key, value) {
        var dPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
        if (isBlazor && typeof value === 'string' && value.match(dPattern) !== null) {
            return (new Date(value));
        }
        return (value);
    };
    Observer.prototype.isJson = function (value) {
        try {
            JSON.parse(value);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    /**
     * To destroy handlers in the event
     */
    Observer.prototype.destroy = function () {
        this.boundedEvents = this.context = undefined;
    };
    /**
     * Returns if the property exists.
     */
    Observer.prototype.notExist = function (prop) {
        return this.boundedEvents.hasOwnProperty(prop) === false || this.boundedEvents[prop].length <= 0;
    };
    /**
     * Returns if the handler is present.
     */
    Observer.prototype.isHandlerPresent = function (boundedEvents, handler) {
        for (var _i = 0, boundedEvents_1 = boundedEvents; _i < boundedEvents_1.length; _i++) {
            var cur = boundedEvents_1[_i];
            if (cur.handler === handler) {
                return true;
            }
        }
        return false;
    };
    return Observer;
}());
export { Observer };
