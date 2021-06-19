import { Ajax } from '@syncfusion/ej2-base';
import { extend, isNullOrUndefined } from '@syncfusion/ej2-base';
import { DataUtil } from './util';
import { Query } from './query';
import { ODataAdaptor, JsonAdaptor, CacheAdaptor, RemoteSaveAdaptor, CustomDataAdaptor } from './adaptors';
/**
 * DataManager is used to manage and manipulate relational data.
 */
var DataManager = /** @class */ (function () {
    /**
     * Constructor for DataManager class
     * @param  {DataOptions|JSON[]} dataSource?
     * @param  {Query} query?
     * @param  {AdaptorOptions|string} adaptor?
     * @hidden
     */
    function DataManager(dataSource, query, adaptor) {
        var _this = this;
        /** @hidden */
        this.dateParse = true;
        /** @hidden */
        this.timeZoneHandling = true;
        this.requests = [];
        if (!dataSource && !this.dataSource) {
            dataSource = [];
        }
        adaptor = adaptor || dataSource.adaptor;
        if (dataSource && dataSource.timeZoneHandling === false) {
            this.timeZoneHandling = dataSource.timeZoneHandling;
        }
        var data;
        if (dataSource instanceof Array) {
            data = {
                json: dataSource,
                offline: true
            };
        }
        else if (typeof dataSource === 'object') {
            if (!dataSource.json) {
                dataSource.json = [];
            }
            data = {
                url: dataSource.url,
                insertUrl: dataSource.insertUrl,
                removeUrl: dataSource.removeUrl,
                updateUrl: dataSource.updateUrl,
                crudUrl: dataSource.crudUrl,
                batchUrl: dataSource.batchUrl,
                json: dataSource.json,
                headers: dataSource.headers,
                accept: dataSource.accept,
                data: dataSource.data,
                timeTillExpiration: dataSource.timeTillExpiration,
                cachingPageSize: dataSource.cachingPageSize,
                enableCaching: dataSource.enableCaching,
                requestType: dataSource.requestType,
                key: dataSource.key,
                crossDomain: dataSource.crossDomain,
                jsonp: dataSource.jsonp,
                dataType: dataSource.dataType,
                offline: dataSource.offline !== undefined ? dataSource.offline
                    : dataSource.adaptor instanceof RemoteSaveAdaptor || dataSource.adaptor instanceof CustomDataAdaptor ?
                        false : dataSource.url ? false : true,
                requiresFormat: dataSource.requiresFormat
            };
        }
        else {
            DataUtil.throwError('DataManager: Invalid arguments');
        }
        if (data.requiresFormat === undefined && !DataUtil.isCors()) {
            data.requiresFormat = isNullOrUndefined(data.crossDomain) ? true : data.crossDomain;
        }
        if (data.dataType === undefined) {
            data.dataType = 'json';
        }
        this.dataSource = data;
        this.defaultQuery = query;
        if (data.url && data.offline && !data.json.length) {
            this.isDataAvailable = false;
            this.adaptor = adaptor || new ODataAdaptor();
            this.dataSource.offline = false;
            this.ready = this.executeQuery(query || new Query());
            this.ready.then(function (e) {
                _this.dataSource.offline = true;
                _this.isDataAvailable = true;
                data.json = e.result;
                _this.adaptor = new JsonAdaptor();
            });
        }
        else {
            this.adaptor = data.offline ? new JsonAdaptor() : new ODataAdaptor();
        }
        if (!data.jsonp && this.adaptor instanceof ODataAdaptor) {
            data.jsonp = 'callback';
        }
        this.adaptor = adaptor || this.adaptor;
        if (data.enableCaching) {
            this.adaptor = new CacheAdaptor(this.adaptor, data.timeTillExpiration, data.cachingPageSize);
        }
        return this;
    }
    /**
     * Overrides DataManager's default query with given query.
     * @param  {Query} query - Defines the new default query.
     */
    DataManager.prototype.setDefaultQuery = function (query) {
        this.defaultQuery = query;
        return this;
    };
    /**
     * Executes the given query with local data source.
     * @param  {Query} query - Defines the query to retrieve data.
     */
    DataManager.prototype.executeLocal = function (query) {
        if (!this.defaultQuery && !(query instanceof Query)) {
            DataUtil.throwError('DataManager - executeLocal() : A query is required to execute');
        }
        if (!this.dataSource.json) {
            DataUtil.throwError('DataManager - executeLocal() : Json data is required to execute');
        }
        query = query || this.defaultQuery;
        var result = this.adaptor.processQuery(this, query);
        if (query.subQuery) {
            var from = query.subQuery.fromTable;
            var lookup = query.subQuery.lookups;
            var res = query.isCountRequired ? result.result :
                result;
            if (lookup && lookup instanceof Array) {
                DataUtil.buildHierarchy(query.subQuery.fKey, from, res, lookup, query.subQuery.key);
            }
            for (var j = 0; j < res.length; j++) {
                if (res[j][from] instanceof Array) {
                    res[j] = extend({}, {}, res[j]);
                    res[j][from] = this.adaptor.processResponse(query.subQuery.using(new DataManager(res[j][from].slice(0))).executeLocal(), this, query);
                }
            }
        }
        return this.adaptor.processResponse(result, this, query);
    };
    /**
     * Executes the given query with either local or remote data source.
     * It will be executed as asynchronously and returns Promise object which will be resolved or rejected after action completed.
     * @param  {Query|Function} query - Defines the query to retrieve data.
     * @param  {Function} done - Defines the callback function and triggers when the Promise is resolved.
     * @param  {Function} fail - Defines the callback function and triggers when the Promise is rejected.
     * @param  {Function} always - Defines the callback function and triggers when the Promise is resolved or rejected.
     */
    DataManager.prototype.executeQuery = function (query, done, fail, always) {
        var _this = this;
        var makeRequest = 'makeRequest';
        if (typeof query === 'function') {
            always = fail;
            fail = done;
            done = query;
            query = null;
        }
        if (!query) {
            query = this.defaultQuery;
        }
        if (!(query instanceof Query)) {
            DataUtil.throwError('DataManager - executeQuery() : A query is required to execute');
        }
        var deffered = new Deferred();
        var args = { query: query };
        if (!this.dataSource.offline && (this.dataSource.url !== undefined && this.dataSource.url !== '')
            || (!isNullOrUndefined(this.adaptor[makeRequest])) || this.isCustomDataAdaptor(this.adaptor)) {
            var result = this.adaptor.processQuery(this, query);
            if (!isNullOrUndefined(this.adaptor[makeRequest])) {
                this.adaptor[makeRequest](result, deffered, args, query);
            }
            else if (!isNullOrUndefined(result.url) || this.isCustomDataAdaptor(this.adaptor)) {
                this.makeRequest(result, deffered, args, query);
            }
            else {
                args = DataManager.getDeferedArgs(query, result, args);
                deffered.resolve(args);
            }
        }
        else {
            DataManager.nextTick(function () {
                var res = _this.executeLocal(query);
                args = DataManager.getDeferedArgs(query, res, args);
                deffered.resolve(args);
            });
        }
        if (done || fail) {
            deffered.promise.then(done, fail);
        }
        if (always) {
            deffered.promise.then(always, always);
        }
        return deffered.promise;
    };
    DataManager.getDeferedArgs = function (query, result, args) {
        if (query.isCountRequired) {
            args.result = result.result;
            args.count = result.count;
            args.aggregates = result.aggregates;
        }
        else {
            args.result = result;
        }
        return args;
    };
    DataManager.nextTick = function (fn) {
        (window.setImmediate || window.setTimeout)(fn, 0);
    };
    DataManager.prototype.extendRequest = function (url, fnSuccess, fnFail) {
        return extend({}, {
            type: 'GET',
            dataType: this.dataSource.dataType,
            crossDomain: this.dataSource.crossDomain,
            jsonp: this.dataSource.jsonp,
            cache: true,
            processData: false,
            onSuccess: fnSuccess,
            onFailure: fnFail
        }, url);
    };
    // tslint:disable-next-line:max-func-body-length
    DataManager.prototype.makeRequest = function (url, deffered, args, query) {
        var _this = this;
        var isSelector = !!query.subQuerySelector;
        var fnFail = function (e) {
            args.error = e;
            deffered.reject(args);
        };
        var process = function (data, count, xhr, request, actual, aggregates, virtualSelectRecords) {
            args.xhr = xhr;
            args.count = count ? parseInt(count.toString(), 10) : 0;
            args.result = data;
            args.request = request;
            args.aggregates = aggregates;
            args.actual = actual;
            args.virtualSelectRecords = virtualSelectRecords;
            deffered.resolve(args);
        };
        var fnQueryChild = function (data, selector) {
            var subDeffer = new Deferred();
            var childArgs = { parent: args };
            query.subQuery.isChild = true;
            var subUrl = _this.adaptor.processQuery(_this, query.subQuery, data ? _this.adaptor.processResponse(data) : selector);
            var childReq = _this.makeRequest(subUrl, subDeffer, childArgs, query.subQuery);
            if (!isSelector) {
                subDeffer.then(function (subData) {
                    if (data) {
                        DataUtil.buildHierarchy(query.subQuery.fKey, query.subQuery.fromTable, data, subData, query.subQuery.key);
                        process(data, subData.count, subData.xhr);
                    }
                }, fnFail);
            }
            return childReq;
        };
        var fnSuccess = function (data, request) {
            if (_this.isCustomDataAdaptor(_this.adaptor)) {
                request = extend({}, _this.ajaxReqOption, request);
            }
            if (request.httpRequest.getResponseHeader('Content-Type').indexOf('xml') === -1 && _this.dateParse) {
                data = DataUtil.parse.parseJson(data);
            }
            var result = _this.adaptor.processResponse(data, _this, query, request.httpRequest, request);
            var count = 0;
            var aggregates = null;
            var virtualSelectRecords = 'virtualSelectRecords';
            var virtualRecords = data[virtualSelectRecords];
            if (query.isCountRequired) {
                count = result.count;
                aggregates = result.aggregates;
                result = result.result;
            }
            if (!query.subQuery) {
                process(result, count, request.httpRequest, request.type, data, aggregates, virtualRecords);
                return;
            }
            if (!isSelector) {
                fnQueryChild(result, request);
            }
        };
        var req = this.extendRequest(url, fnSuccess, fnFail);
        if (!this.isCustomDataAdaptor(this.adaptor)) {
            var ajax_1 = new Ajax(req);
            ajax_1.beforeSend = function () {
                _this.beforeSend(ajax_1.httpRequest, ajax_1);
            };
            req = ajax_1.send();
            req.catch(function (e) { return true; }); // to handle failure remote requests.        
            this.requests.push(ajax_1);
        }
        else {
            this.ajaxReqOption = req;
            var request = req;
            this.adaptor.options.getData({
                data: request.data,
                onSuccess: request.onSuccess, onFailure: request.onFailure
            });
        }
        if (isSelector) {
            var promise = void 0;
            var res = query.subQuerySelector.call(this, { query: query.subQuery, parent: query });
            if (res && res.length) {
                promise = Promise.all([req, fnQueryChild(null, res)]);
                promise.then(function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var result = args[0];
                    var pResult = _this.adaptor.processResponse(result[0], _this, query, _this.requests[0].httpRequest, _this.requests[0]);
                    var count = 0;
                    if (query.isCountRequired) {
                        count = pResult.count;
                        pResult = pResult.result;
                    }
                    var cResult = _this.adaptor.processResponse(result[1], _this, query.subQuery, _this.requests[1].httpRequest, _this.requests[1]);
                    count = 0;
                    if (query.subQuery.isCountRequired) {
                        count = cResult.count;
                        cResult = cResult.result;
                    }
                    DataUtil.buildHierarchy(query.subQuery.fKey, query.subQuery.fromTable, pResult, cResult, query.subQuery.key);
                    isSelector = false;
                    process(pResult, count, _this.requests[0].httpRequest);
                });
            }
            else {
                isSelector = false;
            }
        }
        return req;
    };
    DataManager.prototype.beforeSend = function (request, settings) {
        this.adaptor.beforeSend(this, request, settings);
        var headers = this.dataSource.headers;
        var props;
        for (var i = 0; headers && i < headers.length; i++) {
            props = [];
            var keys = Object.keys(headers[i]);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var prop = keys_1[_i];
                props.push(prop);
                request.setRequestHeader(prop, headers[i][prop]);
            }
        }
    };
    /**
     * Save bulk changes to the given table name.
     * User can add a new record, edit an existing record, and delete a record at the same time.
     * If the datasource from remote, then updated in a single post.
     * @param  {Object} changes - Defines the CrudOptions.
     * @param  {string} key - Defines the column field.
     * @param  {string|Query} tableName - Defines the table name.
     * @param  {Query} query - Sets default query for the DataManager.
     */
    DataManager.prototype.saveChanges = function (changes, key, tableName, query, original) {
        var _this = this;
        if (tableName instanceof Query) {
            query = tableName;
            tableName = null;
        }
        var args = {
            url: tableName,
            key: key || this.dataSource.key
        };
        var req = this.adaptor.batchRequest(this, changes, args, query || new Query(), original);
        var doAjaxRequest = 'doAjaxRequest';
        if (this.dataSource.offline) {
            return req;
        }
        if (!isNullOrUndefined(this.adaptor[doAjaxRequest])) {
            return this.adaptor[doAjaxRequest](req);
        }
        else if (!this.isCustomDataAdaptor(this.adaptor)) {
            var deff_1 = new Deferred();
            var ajax_2 = new Ajax(req);
            ajax_2.beforeSend = function () {
                _this.beforeSend(ajax_2.httpRequest, ajax_2);
            };
            ajax_2.onSuccess = function (data, request) {
                deff_1.resolve(_this.adaptor.processResponse(data, _this, null, request.httpRequest, request, changes, args));
            };
            ajax_2.onFailure = function (e) {
                deff_1.reject([{ error: e }]);
            };
            ajax_2.send().catch(function (e) { return true; }); // to handle the failure requests.        
            return deff_1.promise;
        }
        else {
            return this.doAjaxRequest(req, this.adaptor.options.batchUpdate);
        }
    };
    /**
     * Inserts new record in the given table.
     * @param  {Object} data - Defines the data to insert.
     * @param  {string|Query} tableName - Defines the table name.
     * @param  {Query} query - Sets default query for the DataManager.
     */
    DataManager.prototype.insert = function (data, tableName, query, position) {
        if (tableName instanceof Query) {
            query = tableName;
            tableName = null;
        }
        var req = this.adaptor.insert(this, data, tableName, query, position);
        var doAjaxRequest = 'doAjaxRequest';
        if (this.dataSource.offline) {
            return req;
        }
        if (!isNullOrUndefined(this.adaptor[doAjaxRequest])) {
            return this.adaptor[doAjaxRequest](req);
        }
        else {
            return this.doAjaxRequest(req, this.adaptor.options.addRecord);
        }
    };
    /**
     * Removes data from the table with the given key.
     * @param  {string} keyField - Defines the column field.
     * @param  {Object} value - Defines the value to find the data in the specified column.
     * @param  {string|Query} tableName - Defines the table name
     * @param  {Query} query - Sets default query for the DataManager.
     */
    DataManager.prototype.remove = function (keyField, value, tableName, query) {
        if (typeof value === 'object') {
            value = DataUtil.getObject(keyField, value);
        }
        if (tableName instanceof Query) {
            query = tableName;
            tableName = null;
        }
        var res = this.adaptor.remove(this, keyField, value, tableName, query);
        var doAjaxRequest = 'doAjaxRequest';
        if (this.dataSource.offline) {
            return res;
        }
        if (!isNullOrUndefined(this.adaptor[doAjaxRequest])) {
            return this.adaptor[doAjaxRequest](res);
        }
        else {
            var remove = this.adaptor.options.deleteRecord;
            return this.doAjaxRequest(res, remove);
        }
    };
    /**
     * Updates existing record in the given table.
     * @param  {string} keyField - Defines the column field.
     * @param  {Object} value - Defines the value to find the data in the specified column.
     * @param  {string|Query} tableName - Defines the table name
     * @param  {Query} query - Sets default query for the DataManager.
     */
    DataManager.prototype.update = function (keyField, value, tableName, query, original) {
        if (tableName instanceof Query) {
            query = tableName;
            tableName = null;
        }
        var res = this.adaptor.update(this, keyField, value, tableName, query, original);
        var doAjaxRequest = 'doAjaxRequest';
        if (this.dataSource.offline) {
            return res;
        }
        if (!isNullOrUndefined(this.adaptor[doAjaxRequest])) {
            return this.adaptor[doAjaxRequest](res);
        }
        else {
            var update = this.adaptor.options.updateRecord;
            return this.doAjaxRequest(res, update);
        }
    };
    DataManager.prototype.isCustomDataAdaptor = function (dataSource) {
        return this.adaptor.getModuleName &&
            this.adaptor.getModuleName() === 'CustomDataAdaptor';
    };
    DataManager.prototype.successFunc = function (record, request) {
        if (this.isCustomDataAdaptor(this.adaptor)) {
            request = extend({}, this.ajaxReqOption, request);
        }
        try {
            DataUtil.parse.parseJson(record);
        }
        catch (e) {
            record = [];
        }
        record = this.adaptor.processResponse(DataUtil.parse.parseJson(record), this, null, request.httpRequest, request);
        this.ajaxDeffered.resolve(record);
    };
    ;
    DataManager.prototype.failureFunc = function (e) {
        this.ajaxDeffered.reject([{ error: e }]);
    };
    ;
    DataManager.prototype.doAjaxRequest = function (res, ajaxFunc) {
        var _this = this;
        res = extend({}, {
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            processData: false
        }, res);
        this.ajaxDeffered = new Deferred();
        if (!this.isCustomDataAdaptor(this.adaptor)) {
            var ajax_3 = new Ajax(res);
            ajax_3.beforeSend = function () {
                _this.beforeSend(ajax_3.httpRequest, ajax_3);
            };
            ajax_3.onSuccess = this.successFunc.bind(this);
            ajax_3.onFailure = this.failureFunc.bind(this);
            ajax_3.send().catch(function (e) { return true; }); // to handle the failure requests.
        }
        else {
            this.ajaxReqOption = res;
            ajaxFunc.call(this, {
                data: res.data, onSuccess: this.successFunc.bind(this),
                onFailure: this.failureFunc.bind(this)
            });
        }
        return this.ajaxDeffered.promise;
    };
    return DataManager;
}());
export { DataManager };
/**
 * Deferred is used to handle asynchronous operation.
 */
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        /**
         * Promise is an object that represents a value that may not be available yet, but will be resolved at some point in the future.
         */
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
        /**
         * Defines the callback function triggers when the Deferred object is resolved.
         */
        this.then = this.promise.then.bind(this.promise);
        /**
         * Defines the callback function triggers when the Deferred object is rejected.
         */
        this.catch = this.promise.catch.bind(this.promise);
    }
    return Deferred;
}());
export { Deferred };
