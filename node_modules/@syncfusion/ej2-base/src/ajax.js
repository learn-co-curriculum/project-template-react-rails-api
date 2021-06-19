import { isNullOrUndefined, merge } from './util';
var headerRegex = /^(.*?):[ \t]*([^\r\n]*)$/gm;
var defaultType = 'GET';
/**
 * Ajax class provides ability to make asynchronous HTTP request to the server
 * ```typescript
 *   var ajax = new Ajax("index.html", "GET", true);
 *   ajax.send().then(
 *               function (value) {
 *                   console.log(value);
 *               },
 *               function (reason) {
 *                   console.log(reason);
 *               });
 * ```
 */
var Ajax = /** @class */ (function () {
    /**
     * Constructor for Ajax class
     * @param  {string|Object} options?
     * @param  {string} type?
     * @param  {boolean} async?
     * @returns defaultType
     */
    function Ajax(options, type, async, contentType) {
        /**
         * A boolean value indicating whether the request should be sent asynchronous or not.
         * @default true
         */
        this.mode = true;
        /**
         * A boolean value indicating whether to ignore the promise reject.
         * @private
         * @default true
         */
        this.emitError = true;
        this.options = {};
        if (typeof options === 'string') {
            this.url = options;
            this.type = type ? type.toUpperCase() : defaultType;
            this.mode = !isNullOrUndefined(async) ? async : true;
        }
        else if (typeof options === 'object') {
            this.options = options;
            merge(this, this.options);
        }
        this.type = this.type ? this.type.toUpperCase() : defaultType;
        this.contentType = (this.contentType !== undefined) ? this.contentType : contentType;
    }
    /**
     * Send the request to server.
     * @param {any} data - To send the user data
     * @return {Promise}
     */
    Ajax.prototype.send = function (data) {
        var _this = this;
        this.data = isNullOrUndefined(data) ? this.data : data;
        var eventArgs = {
            cancel: false,
            httpRequest: null
        };
        var promise = new Promise(function (resolve, reject) {
            _this.httpRequest = new XMLHttpRequest();
            _this.httpRequest.onreadystatechange = function () { _this.stateChange(resolve, reject); };
            if (!isNullOrUndefined(_this.onLoad)) {
                _this.httpRequest.onload = _this.onLoad;
            }
            if (!isNullOrUndefined(_this.onProgress)) {
                _this.httpRequest.onprogress = _this.onProgress;
            }
            /* istanbul ignore next */
            if (!isNullOrUndefined(_this.onAbort)) {
                _this.httpRequest.onabort = _this.onAbort;
            }
            /* istanbul ignore next */
            if (!isNullOrUndefined(_this.onError)) {
                _this.httpRequest.onerror = _this.onError;
            }
            //** Upload Events **/
            /* istanbul ignore next */
            if (!isNullOrUndefined(_this.onUploadProgress)) {
                _this.httpRequest.upload.onprogress = _this.onUploadProgress;
            }
            _this.httpRequest.open(_this.type, _this.url, _this.mode);
            // Set default headers
            if (!isNullOrUndefined(_this.data) && _this.contentType !== null) {
                _this.httpRequest.setRequestHeader('Content-Type', _this.contentType || 'application/json; charset=utf-8');
            }
            if (_this.beforeSend) {
                eventArgs.httpRequest = _this.httpRequest;
                _this.beforeSend(eventArgs);
            }
            if (!eventArgs.cancel) {
                _this.httpRequest.send(!isNullOrUndefined(_this.data) ? _this.data : null);
            }
        });
        return promise;
    };
    Ajax.prototype.successHandler = function (data) {
        if (this.onSuccess) {
            this.onSuccess(data, this);
        }
        return data;
    };
    Ajax.prototype.failureHandler = function (reason) {
        if (this.onFailure) {
            this.onFailure(this.httpRequest);
        }
        return reason;
    };
    Ajax.prototype.stateChange = function (resolve, reject) {
        var data = this.httpRequest.responseText;
        if (this.dataType && this.dataType.toLowerCase() === 'json') {
            if (data === '') {
                data = undefined;
            }
            else {
                try {
                    data = JSON.parse(data);
                }
                catch (error) {
                    // no exception handle
                }
            }
        }
        if (this.httpRequest.readyState === 4) {
            //success range should be 200 to 299
            if ((this.httpRequest.status >= 200 && this.httpRequest.status <= 299) || this.httpRequest.status === 304) {
                resolve(this.successHandler(data));
            }
            else {
                if (this.emitError) {
                    reject(new Error(this.failureHandler(this.httpRequest.statusText)));
                }
                else {
                    resolve();
                }
            }
        }
    };
    /**
     * To get the response header from XMLHttpRequest
     * @param  {string} key Key to search in the response header
     * @returns {string}
     */
    Ajax.prototype.getResponseHeader = function (key) {
        var responseHeaders;
        var header;
        responseHeaders = {};
        var headers = headerRegex.exec(this.httpRequest.getAllResponseHeaders());
        while (headers) {
            responseHeaders[headers[1].toLowerCase()] = headers[2];
            headers = headerRegex.exec(this.httpRequest.getAllResponseHeaders());
        }
        header = responseHeaders[key.toLowerCase()];
        return isNullOrUndefined(header) ? null : header;
    };
    return Ajax;
}());
export { Ajax };
