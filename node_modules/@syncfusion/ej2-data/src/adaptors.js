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
import { merge, extend, isNullOrUndefined, setValue, getValue } from '@syncfusion/ej2-base';
import { DataUtil } from './util';
import { Query, Predicate } from './query';
var consts = { GroupGuid: '{271bbba0-1ee7}' };
/**
 * Adaptors are specific data source type aware interfaces that are used by DataManager to communicate with DataSource.
 * This is the base adaptor class that other adaptors can extend.
 * @hidden
 */
var Adaptor = /** @class */ (function () {
    /**
     * Constructor for Adaptor class
     * @param  {DataOptions} ds?
     * @hidden
     * @returns aggregates
     */
    function Adaptor(ds) {
        // common options for all the adaptors 
        this.options = {
            from: 'table',
            requestType: 'json',
            sortBy: 'sorted',
            select: 'select',
            skip: 'skip',
            group: 'group',
            take: 'take',
            search: 'search',
            count: 'requiresCounts',
            where: 'where',
            aggregates: 'aggregates',
            expand: 'expand'
        };
        /**
         * Specifies the type of adaptor.
         * @default Adaptor
         */
        this.type = Adaptor;
        this.dataSource = ds;
        this.pvt = {};
    }
    /**
     * Returns the data from the query processing.
     * @param  {Object} data
     * @param  {DataOptions} ds?
     * @param  {Query} query?
     * @param  {XMLHttpRequest} xhr?
     * @returns Object
     */
    Adaptor.prototype.processResponse = function (data, ds, query, xhr) {
        return data;
    };
    return Adaptor;
}());
export { Adaptor };
/**
 * JsonAdaptor is used to process JSON data. It contains methods to process the given JSON data based on the queries.
 * @hidden
 */
var JsonAdaptor = /** @class */ (function (_super) {
    __extends(JsonAdaptor, _super);
    function JsonAdaptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Process the JSON data based on the provided queries.
     * @param  {DataManager} dataManager
     * @param  {Query} query
     * @returns Object
     */
    JsonAdaptor.prototype.processQuery = function (dataManager, query) {
        var result = dataManager.dataSource.json.slice(0);
        var count = result.length;
        var countFlg = true;
        var ret;
        var key;
        var lazyLoad = {};
        var keyCount = 0;
        var group = [];
        var page;
        for (var i = 0; i < query.lazyLoad.length; i++) {
            keyCount++;
            lazyLoad[query.lazyLoad[i].key] = query.lazyLoad[i].value;
        }
        var agg = {};
        for (var i = 0; i < query.queries.length; i++) {
            key = query.queries[i];
            if ((key.fn === 'onPage' || key.fn === 'onGroup') && query.lazyLoad.length) {
                if (key.fn === 'onGroup') {
                    group.push(key.e);
                }
                if (key.fn === 'onPage') {
                    page = key.e;
                }
                continue;
            }
            ret = this[key.fn].call(this, result, key.e, query);
            if (key.fn === 'onAggregates') {
                agg[key.e.field + ' - ' + key.e.type] = ret;
            }
            else {
                result = ret !== undefined ? ret : result;
            }
            if (key.fn === 'onPage' || key.fn === 'onSkip' || key.fn === 'onTake' || key.fn === 'onRange') {
                countFlg = false;
            }
            if (countFlg) {
                count = result.length;
            }
        }
        if (keyCount) {
            var args = {
                query: query, lazyLoad: lazyLoad, result: result, group: group, page: page
            };
            var lazyLoadData = this.lazyLoadGroup(args);
            result = lazyLoadData.result;
            count = lazyLoadData.count;
        }
        if (query.isCountRequired) {
            result = {
                result: result,
                count: count,
                aggregates: agg
            };
        }
        return result;
    };
    /**
     * Perform lazy load grouping in JSON array based on the given query and lazy load details.
     * @param  {LazyLoadGroupArgs} args
     */
    JsonAdaptor.prototype.lazyLoadGroup = function (args) {
        var count = 0;
        var agg = this.getAggregate(args.query);
        var result = args.result;
        if (!isNullOrUndefined(args.lazyLoad.onDemandGroupInfo)) {
            var req = args.lazyLoad.onDemandGroupInfo;
            for (var i = req.where.length - 1; i >= 0; i--) {
                result = this.onWhere(result, req.where[i]);
            }
            if (args.group.length !== req.level) {
                var field = args.group[req.level].fieldName;
                result = DataUtil.group(result, field, agg, null, null, args.group[0].comparer, true);
            }
            count = result.length;
            var data = result;
            result = result.slice(req.skip);
            result = result.slice(0, req.take);
            if (args.group.length !== req.level) {
                this.formGroupResult(result, data);
            }
        }
        else {
            var field = args.group[0].fieldName;
            result = DataUtil.group(result, field, agg, null, null, args.group[0].comparer, true);
            count = result.length;
            var data = result;
            if (args.page) {
                result = this.onPage(result, args.page, args.query);
            }
            this.formGroupResult(result, data);
        }
        return { result: result, count: count };
    };
    JsonAdaptor.prototype.formGroupResult = function (result, data) {
        if (result.length && data.length) {
            var uid = 'GroupGuid';
            var childLevel = 'childLevels';
            var level = 'level';
            var records = 'records';
            result[uid] = data[uid];
            result[childLevel] = data[childLevel];
            result[level] = data[level];
            result[records] = data[records];
        }
        return result;
    };
    /**
     * Separate the aggregate query from the given queries
     * @param  {Query} query
     */
    JsonAdaptor.prototype.getAggregate = function (query) {
        var aggQuery = Query.filterQueries(query.queries, 'onAggregates');
        var agg = [];
        if (aggQuery.length) {
            var tmp = void 0;
            for (var i = 0; i < aggQuery.length; i++) {
                tmp = aggQuery[i].e;
                agg.push({ type: tmp.type, field: DataUtil.getValue(tmp.field, query) });
            }
        }
        return agg;
    };
    /**
     * Performs batch update in the JSON array which add, remove and update records.
     * @param  {DataManager} dm
     * @param  {CrudOptions} changes
     * @param  {RemoteArgs} e
     */
    JsonAdaptor.prototype.batchRequest = function (dm, changes, e) {
        var i;
        var deletedRecordsLen = changes.deletedRecords.length;
        for (i = 0; i < changes.addedRecords.length; i++) {
            this.insert(dm, changes.addedRecords[i]);
        }
        for (i = 0; i < changes.changedRecords.length; i++) {
            this.update(dm, e.key, changes.changedRecords[i]);
        }
        for (i = 0; i < deletedRecordsLen; i++) {
            this.remove(dm, e.key, changes.deletedRecords[i]);
        }
        return changes;
    };
    /**
     * Performs filter operation with the given data and where query.
     * @param  {Object[]} ds
     * @param  {{validate:Function}} e
     */
    JsonAdaptor.prototype.onWhere = function (ds, e) {
        if (!ds || !ds.length) {
            return ds;
        }
        return ds.filter(function (obj) {
            if (e) {
                return e.validate(obj);
            }
        });
    };
    /**
     * Returns aggregate function based on the aggregate type.
     * @param  {Object[]} ds
     * @param  {{field:string} e
     * @param  {string}} type
     */
    JsonAdaptor.prototype.onAggregates = function (ds, e) {
        var fn = DataUtil.aggregates[e.type];
        if (!ds || !fn || ds.length === 0) {
            return null;
        }
        return fn(ds, e.field);
    };
    /**
     * Performs search operation based on the given query.
     * @param  {Object[]} ds
     * @param  {QueryOptions} e
     */
    JsonAdaptor.prototype.onSearch = function (ds, e) {
        if (!ds || !ds.length) {
            return ds;
        }
        if (e.fieldNames.length === 0) {
            DataUtil.getFieldList(ds[0], e.fieldNames);
        }
        return ds.filter(function (obj) {
            for (var j = 0; j < e.fieldNames.length; j++) {
                if (e.comparer.call(obj, DataUtil.getObject(e.fieldNames[j], obj), e.searchKey, e.ignoreCase, e.ignoreAccent)) {
                    return true;
                }
            }
            return false;
        });
    };
    /**
     * Sort the data with given direction and field.
     * @param  {Object[]} ds
     * @param  {{comparer:(a:Object} e
     * @param  {Object} b
     */
    JsonAdaptor.prototype.onSortBy = function (ds, e, query) {
        if (!ds || !ds.length) {
            return ds;
        }
        var fnCompare;
        var field = DataUtil.getValue(e.fieldName, query);
        if (!field) {
            return ds.sort(e.comparer);
        }
        if (field instanceof Array) {
            field = field.slice(0);
            for (var i = field.length - 1; i >= 0; i--) {
                if (!field[i]) {
                    continue;
                }
                fnCompare = e.comparer;
                if (DataUtil.endsWith(field[i], ' desc')) {
                    fnCompare = DataUtil.fnSort('descending');
                    field[i] = field[i].replace(' desc', '');
                }
                ds = DataUtil.sort(ds, field[i], fnCompare);
            }
            return ds;
        }
        return DataUtil.sort(ds, field, e.comparer);
    };
    /**
     * Group the data based on the given query.
     * @param  {Object[]} ds
     * @param  {QueryOptions} e
     * @param  {Query} query
     */
    JsonAdaptor.prototype.onGroup = function (ds, e, query) {
        if (!ds || !ds.length) {
            return ds;
        }
        var agg = this.getAggregate(query);
        return DataUtil.group(ds, DataUtil.getValue(e.fieldName, query), agg, null, null, e.comparer);
    };
    /**
     * Retrieves records based on the given page index and size.
     * @param  {Object[]} ds
     * @param  {{pageSize:number} e
     * @param  {number}} pageIndex
     * @param  {Query} query
     */
    JsonAdaptor.prototype.onPage = function (ds, e, query) {
        var size = DataUtil.getValue(e.pageSize, query);
        var start = (DataUtil.getValue(e.pageIndex, query) - 1) * size;
        var end = start + size;
        if (!ds || !ds.length) {
            return ds;
        }
        return ds.slice(start, end);
    };
    /**
     * Retrieves records based on the given start and end index from query.
     * @param  {Object[]} ds
     * @param  {{start:number} e
     * @param  {number}} end
     */
    JsonAdaptor.prototype.onRange = function (ds, e) {
        if (!ds || !ds.length) {
            return ds;
        }
        return ds.slice(DataUtil.getValue(e.start), DataUtil.getValue(e.end));
    };
    /**
     * Picks the given count of records from the top of the datasource.
     * @param  {Object[]} ds
     * @param  {{nos:number}} e
     */
    JsonAdaptor.prototype.onTake = function (ds, e) {
        if (!ds || !ds.length) {
            return ds;
        }
        return ds.slice(0, DataUtil.getValue(e.nos));
    };
    /**
     * Skips the given count of records from the data source.
     * @param  {Object[]} ds
     * @param  {{nos:number}} e
     */
    JsonAdaptor.prototype.onSkip = function (ds, e) {
        if (!ds || !ds.length) {
            return ds;
        }
        return ds.slice(DataUtil.getValue(e.nos));
    };
    /**
     * Selects specified columns from the data source.
     * @param  {Object[]} ds
     * @param  {{fieldNames:string}} e
     */
    JsonAdaptor.prototype.onSelect = function (ds, e) {
        if (!ds || !ds.length) {
            return ds;
        }
        return DataUtil.select(ds, DataUtil.getValue(e.fieldNames));
    };
    /**
     * Inserts new record in the table.
     * @param  {DataManager} dm
     * @param  {Object} data
     * @param  {number} position
     */
    JsonAdaptor.prototype.insert = function (dm, data, tableName, query, position) {
        if (isNullOrUndefined(position)) {
            return dm.dataSource.json.push(data);
        }
        else {
            return dm.dataSource.json.splice(position, 0, data);
        }
    };
    /**
     * Remove the data from the dataSource based on the key field value.
     * @param  {DataManager} dm
     * @param  {string} keyField
     * @param  {Object} value
     * @param  {string} tableName?
     * @returns null
     */
    JsonAdaptor.prototype.remove = function (dm, keyField, value, tableName) {
        var ds = dm.dataSource.json;
        var i;
        if (typeof value === 'object' && !(value instanceof Date)) {
            value = DataUtil.getObject(keyField, value);
        }
        for (i = 0; i < ds.length; i++) {
            if (DataUtil.getObject(keyField, ds[i]) === value) {
                break;
            }
        }
        return i !== ds.length ? ds.splice(i, 1) : null;
    };
    /**
     * Updates existing record and saves the changes to the table.
     * @param  {DataManager} dm
     * @param  {string} keyField
     * @param  {Object} value
     * @param  {string} tableName?
     * @returns null
     */
    JsonAdaptor.prototype.update = function (dm, keyField, value, tableName) {
        var ds = dm.dataSource.json;
        var i;
        var key;
        if (!isNullOrUndefined(keyField)) {
            key = getValue(keyField, value);
        }
        for (i = 0; i < ds.length; i++) {
            if (!isNullOrUndefined(keyField) && (getValue(keyField, ds[i])) === key) {
                break;
            }
        }
        return i < ds.length ? merge(ds[i], value) : null;
    };
    return JsonAdaptor;
}(Adaptor));
export { JsonAdaptor };
/**
 * URL Adaptor of DataManager can be used when you are required to use remote service to retrieve data.
 * It interacts with server-side for all DataManager Queries and CRUD operations.
 * @hidden
 */
var UrlAdaptor = /** @class */ (function (_super) {
    __extends(UrlAdaptor, _super);
    function UrlAdaptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Process the query to generate request body.
     * @param  {DataManager} dm
     * @param  {Query} query
     * @param  {Object[]} hierarchyFilters?
     * @returns p
     */
    // tslint:disable-next-line:max-func-body-length
    UrlAdaptor.prototype.processQuery = function (dm, query, hierarchyFilters) {
        var queries = this.getQueryRequest(query);
        var singles = Query.filterQueryLists(query.queries, ['onSelect', 'onPage', 'onSkip', 'onTake', 'onRange']);
        var params = query.params;
        var url = dm.dataSource.url;
        var temp;
        var skip;
        var take = null;
        var options = this.options;
        var request = { sorts: [], groups: [], filters: [], searches: [], aggregates: [] };
        // calc Paging & Range
        if ('onPage' in singles) {
            temp = singles.onPage;
            skip = DataUtil.getValue(temp.pageIndex, query);
            take = DataUtil.getValue(temp.pageSize, query);
            skip = (skip - 1) * take;
        }
        else if ('onRange' in singles) {
            temp = singles.onRange;
            skip = temp.start;
            take = temp.end - temp.start;
        }
        // Sorting
        for (var i = 0; i < queries.sorts.length; i++) {
            temp = DataUtil.getValue(queries.sorts[i].e.fieldName, query);
            request.sorts.push(DataUtil.callAdaptorFunction(this, 'onEachSort', { name: temp, direction: queries.sorts[i].e.direction }, query));
        }
        // hierarchy
        if (hierarchyFilters) {
            temp = this.getFiltersFrom(hierarchyFilters, query);
            if (temp) {
                request.filters.push(DataUtil.callAdaptorFunction(this, 'onEachWhere', temp.toJson(), query));
            }
        }
        // Filters
        for (var i = 0; i < queries.filters.length; i++) {
            var res = DataUtil.callAdaptorFunction(this, 'onEachWhere', queries.filters[i].e.toJson(), query);
            if ((this.getModuleName &&
                this.getModuleName() === 'ODataV4Adaptor') &&
                !isNullOrUndefined(queries.filters[i].e.key) && queries.filters.length > 1) {
                res = "(" + res + ")";
            }
            request.filters.push(res);
            var keys_3 = typeof request.filters[i] === 'object' ? Object.keys(request.filters[i]) : [];
            for (var _i = 0, keys_1 = keys_3; _i < keys_1.length; _i++) {
                var prop = keys_1[_i];
                if (DataUtil.isNull((request)[prop])) {
                    delete request[prop];
                }
            }
        }
        // Searches
        for (var i = 0; i < queries.searches.length; i++) {
            temp = queries.searches[i].e;
            request.searches.push(DataUtil.callAdaptorFunction(this, 'onEachSearch', {
                fields: temp.fieldNames,
                operator: temp.operator,
                key: temp.searchKey,
                ignoreCase: temp.ignoreCase
            }, query));
        }
        // Grouping
        for (var i = 0; i < queries.groups.length; i++) {
            request.groups.push(DataUtil.getValue(queries.groups[i].e.fieldName, query));
        }
        // aggregates
        for (var i = 0; i < queries.aggregates.length; i++) {
            temp = queries.aggregates[i].e;
            request.aggregates.push({ type: temp.type, field: DataUtil.getValue(temp.field, query) });
        }
        var req = {};
        this.getRequestQuery(options, query, singles, request, req);
        // Params
        DataUtil.callAdaptorFunction(this, 'addParams', { dm: dm, query: query, params: params, reqParams: req });
        if (query.lazyLoad.length) {
            for (var i = 0; i < query.lazyLoad.length; i++) {
                req[query.lazyLoad[i].key] = query.lazyLoad[i].value;
            }
        }
        // cleanup
        var keys = Object.keys(req);
        for (var _a = 0, keys_2 = keys; _a < keys_2.length; _a++) {
            var prop = keys_2[_a];
            if (DataUtil.isNull(req[prop]) || req[prop] === '' || req[prop].length === 0) {
                delete req[prop];
            }
        }
        if (!(options.skip in req && options.take in req) && take !== null) {
            req[options.skip] = DataUtil.callAdaptorFunction(this, 'onSkip', skip, query);
            req[options.take] = DataUtil.callAdaptorFunction(this, 'onTake', take, query);
        }
        var p = this.pvt;
        this.pvt = {};
        if (this.options.requestType === 'json') {
            return {
                data: JSON.stringify(req, DataUtil.parse.jsonDateReplacer),
                url: url,
                pvtData: p,
                type: 'POST',
                contentType: 'application/json; charset=utf-8'
            };
        }
        temp = this.convertToQueryString(req, query, dm);
        temp = (dm.dataSource.url.indexOf('?') !== -1 ? '&' : '/') + temp;
        return {
            type: 'GET', url: temp.length ? url.replace(/\/*$/, temp) : url, pvtData: p
        };
    };
    UrlAdaptor.prototype.getRequestQuery = function (options, query, singles, request, request1) {
        var param = 'param';
        var req = request1;
        req[options.from] = query.fromTable;
        if (options.apply && query.distincts.length) {
            req[options.apply] = 'onDistinct' in this ? DataUtil.callAdaptorFunction(this, 'onDistinct', query.distincts) : '';
        }
        if (!query.distincts.length && options.expand) {
            req[options.expand] = 'onExpand' in this && 'onSelect' in singles ?
                DataUtil.callAdaptorFunction(this, 'onExpand', { selects: DataUtil.getValue(singles.onSelect.fieldNames, query), expands: query.expands }, query) : query.expands;
        }
        req[options.select] = 'onSelect' in singles && !query.distincts.length ?
            DataUtil.callAdaptorFunction(this, 'onSelect', DataUtil.getValue(singles.onSelect.fieldNames, query), query) : '';
        req[options.count] = query.isCountRequired ? DataUtil.callAdaptorFunction(this, 'onCount', query.isCountRequired, query) : '';
        req[options.search] = request.searches.length ? DataUtil.callAdaptorFunction(this, 'onSearch', request.searches, query) : '';
        req[options.skip] = 'onSkip' in singles ?
            DataUtil.callAdaptorFunction(this, 'onSkip', DataUtil.getValue(singles.onSkip.nos, query), query) : '';
        req[options.take] = 'onTake' in singles ?
            DataUtil.callAdaptorFunction(this, 'onTake', DataUtil.getValue(singles.onTake.nos, query), query) : '';
        req[options.where] = request.filters.length || request.searches.length ?
            DataUtil.callAdaptorFunction(this, 'onWhere', request.filters, query) : '';
        req[options.sortBy] = request.sorts.length ? DataUtil.callAdaptorFunction(this, 'onSortBy', request.sorts, query) : '';
        req[options.group] = request.groups.length ? DataUtil.callAdaptorFunction(this, 'onGroup', request.groups, query) : '';
        req[options.aggregates] = request.aggregates.length ?
            DataUtil.callAdaptorFunction(this, 'onAggregates', request.aggregates, query) : '';
        req[param] = [];
    };
    /**
     * Convert the object from processQuery to string which can be added query string.
     * @param  {Object} req
     * @param  {Query} query
     * @param  {DataManager} dm
     */
    UrlAdaptor.prototype.convertToQueryString = function (request, query, dm) {
        return '';
        // this needs to be overridden
    };
    /**
     * Return the data from the data manager processing.
     * @param  {DataResult} data
     * @param  {DataOptions} ds?
     * @param  {Query} query?
     * @param  {XMLHttpRequest} xhr?
     * @param  {Object} request?
     * @param  {CrudOptions} changes?
     */
    UrlAdaptor.prototype.processResponse = function (data, ds, query, xhr, request, changes) {
        if (xhr && xhr.getResponseHeader('Content-Type') &&
            xhr.getResponseHeader('Content-Type').indexOf('application/json') !== -1) {
            var handleTimeZone = DataUtil.timeZoneHandling;
            if (ds && !ds.timeZoneHandling) {
                DataUtil.timeZoneHandling = false;
            }
            data = DataUtil.parse.parseJson(data);
            DataUtil.timeZoneHandling = handleTimeZone;
        }
        var requests = request;
        var pvt = requests.pvtData || {};
        var groupDs = data ? data.groupDs : [];
        if (xhr && xhr.getResponseHeader('Content-Type') &&
            xhr.getResponseHeader('Content-Type').indexOf('xml') !== -1) {
            return (query.isCountRequired ? { result: [], count: 0 } : []);
        }
        var d = JSON.parse(requests.data);
        if (d && d.action === 'batch' && data && data.addedRecords) {
            changes.addedRecords = data.addedRecords;
            return changes;
        }
        if (data && data.d) {
            data = data.d;
        }
        var args = {};
        if (data && 'count' in data) {
            args.count = data.count;
        }
        args.result = data && data.result ? data.result : data;
        var isExpand = false;
        if (Array.isArray(data.result) && data.result.length) {
            var key = 'key';
            var val = 'value';
            var level = 'level';
            if (!isNullOrUndefined(data.result[0][key])) {
                args.result = this.formRemoteGroupedData(args.result, 1, pvt.groups.length - 1);
            }
            if (query && query.lazyLoad.length && pvt.groups.length) {
                for (var i = 0; i < query.lazyLoad.length; i++) {
                    if (query.lazyLoad[i][key] === 'onDemandGroupInfo') {
                        var value = query.lazyLoad[i][val][level];
                        if (pvt.groups.length === value) {
                            isExpand = true;
                        }
                    }
                }
            }
        }
        if (!isExpand) {
            this.getAggregateResult(pvt, data, args, groupDs, query);
        }
        return DataUtil.isNull(args.count) ? args.result : { result: args.result, count: args.count, aggregates: args.aggregates };
    };
    UrlAdaptor.prototype.formRemoteGroupedData = function (data, level, childLevel) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].items.length && Object.keys(data[i].items[0]).indexOf('key') > -1) {
                this.formRemoteGroupedData(data[i].items, level + 1, childLevel - 1);
            }
        }
        var uid = 'GroupGuid';
        var childLvl = 'childLevels';
        var lvl = 'level';
        var records = 'records';
        data[uid] = consts[uid];
        data[lvl] = level;
        data[childLvl] = childLevel;
        data[records] = data[0].items.length ? this.getGroupedRecords(data, !isNullOrUndefined(data[0].items[records])) : [];
        return data;
    };
    UrlAdaptor.prototype.getGroupedRecords = function (data, hasRecords) {
        var childGroupedRecords = [];
        var records = 'records';
        for (var i = 0; i < data.length; i++) {
            if (!hasRecords) {
                for (var j = 0; j < data[i].items.length; j++) {
                    childGroupedRecords.push(data[i].items[j]);
                }
            }
            else {
                childGroupedRecords = childGroupedRecords.concat(data[i].items[records]);
            }
        }
        return childGroupedRecords;
    };
    /**
     * Add the group query to the adaptor`s option.
     * @param  {Object[]} e
     * @returns void
     */
    UrlAdaptor.prototype.onGroup = function (e) {
        this.pvt.groups = e;
        return e;
    };
    /**
     * Add the aggregate query to the adaptor`s option.
     * @param  {Aggregates[]} e
     * @returns void
     */
    UrlAdaptor.prototype.onAggregates = function (e) {
        this.pvt.aggregates = e;
    };
    /**
     * Prepare the request body based on the newly added, removed and updated records.
     * The result is used by the batch request.
     * @param  {DataManager} dm
     * @param  {CrudOptions} changes
     * @param  {Object} e
     */
    UrlAdaptor.prototype.batchRequest = function (dm, changes, e, query, original) {
        var url;
        var key;
        return {
            type: 'POST',
            url: dm.dataSource.batchUrl || dm.dataSource.crudUrl || dm.dataSource.removeUrl || dm.dataSource.url,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(extend({}, {
                changed: changes.changedRecords,
                added: changes.addedRecords,
                deleted: changes.deletedRecords,
                action: 'batch',
                table: e[url],
                key: e[key]
            }, DataUtil.getAddParams(this, dm, query)))
        };
    };
    /**
     * Method will trigger before send the request to server side.
     * Used to set the custom header or modify the request options.
     * @param  {DataManager} dm
     * @param  {XMLHttpRequest} request
     * @returns void
     */
    UrlAdaptor.prototype.beforeSend = function (dm, request) {
        // need to extend this method
    };
    /**
     * Prepare and returns request body which is used to insert a new record in the table.
     * @param  {DataManager} dm
     * @param  {Object} data
     * @param  {string} tableName
     */
    UrlAdaptor.prototype.insert = function (dm, data, tableName, query) {
        return {
            url: dm.dataSource.insertUrl || dm.dataSource.crudUrl || dm.dataSource.url,
            data: JSON.stringify(extend({}, {
                value: data,
                table: tableName,
                action: 'insert'
            }, DataUtil.getAddParams(this, dm, query)))
        };
    };
    /**
     * Prepare and return request body which is used to remove record from the table.
     * @param  {DataManager} dm
     * @param  {string} keyField
     * @param  {number|string} value
     * @param  {string} tableName
     */
    UrlAdaptor.prototype.remove = function (dm, keyField, value, tableName, query) {
        return {
            type: 'POST',
            url: dm.dataSource.removeUrl || dm.dataSource.crudUrl || dm.dataSource.url,
            data: JSON.stringify(extend({}, {
                key: value,
                keyColumn: keyField,
                table: tableName,
                action: 'remove'
            }, DataUtil.getAddParams(this, dm, query)))
        };
    };
    /**
     * Prepare and return request body which is used to update record.
     * @param  {DataManager} dm
     * @param  {string} keyField
     * @param  {Object} value
     * @param  {string} tableName
     */
    UrlAdaptor.prototype.update = function (dm, keyField, value, tableName, query) {
        return {
            type: 'POST',
            url: dm.dataSource.updateUrl || dm.dataSource.crudUrl || dm.dataSource.url,
            data: JSON.stringify(extend({}, {
                value: value,
                action: 'update',
                keyColumn: keyField,
                key: DataUtil.getObject(keyField, value),
                table: tableName
            }, DataUtil.getAddParams(this, dm, query)))
        };
    };
    /**
     * To generate the predicate based on the filtered query.
     * @param  {Object[]|string[]|number[]} data
     * @param  {Query} query
     * @hidden
     */
    UrlAdaptor.prototype.getFiltersFrom = function (data, query) {
        var key = query.fKey;
        var value;
        var prop = key;
        var pKey = query.key;
        var predicats = [];
        if (typeof data[0] !== 'object') {
            prop = null;
        }
        for (var i = 0; i < data.length; i++) {
            if (typeof data[0] === 'object') {
                value = DataUtil.getObject(pKey || prop, data[i]);
            }
            else {
                value = data[i];
            }
            predicats.push(new Predicate(key, 'equal', value));
        }
        return Predicate.or(predicats);
    };
    UrlAdaptor.prototype.getAggregateResult = function (pvt, data, args, groupDs, query) {
        var pData = data;
        if (data && data.result) {
            pData = data.result;
        }
        if (pvt && pvt.aggregates && pvt.aggregates.length) {
            var agg = pvt.aggregates;
            var fn = void 0;
            var aggregateData = pData;
            var res = {};
            if (data.aggregate) {
                aggregateData = data.aggregate;
            }
            for (var i = 0; i < agg.length; i++) {
                fn = DataUtil.aggregates[agg[i].type];
                if (fn) {
                    res[agg[i].field + ' - ' + agg[i].type] = fn(aggregateData, agg[i].field);
                }
            }
            args.aggregates = res;
        }
        var key = 'key';
        var isServerGrouping = Array.isArray(data.result) && data.result.length && !isNullOrUndefined(data.result[0][key]);
        if (pvt && pvt.groups && pvt.groups.length && !isServerGrouping) {
            var groups = pvt.groups;
            for (var i = 0; i < groups.length; i++) {
                var level = null;
                if (!isNullOrUndefined(groupDs)) {
                    groupDs = DataUtil.group(groupDs, groups[i]);
                }
                var groupQuery = Query.filterQueries(query.queries, 'onGroup')[i].e;
                pData = DataUtil.group(pData, groups[i], pvt.aggregates, level, groupDs, groupQuery.comparer);
            }
            args.result = pData;
        }
        return args;
    };
    UrlAdaptor.prototype.getQueryRequest = function (query) {
        var req = { sorts: [], groups: [], filters: [], searches: [], aggregates: [] };
        req.sorts = Query.filterQueries(query.queries, 'onSortBy');
        req.groups = Query.filterQueries(query.queries, 'onGroup');
        req.filters = Query.filterQueries(query.queries, 'onWhere');
        req.searches = Query.filterQueries(query.queries, 'onSearch');
        req.aggregates = Query.filterQueries(query.queries, 'onAggregates');
        return req;
    };
    UrlAdaptor.prototype.addParams = function (options) {
        var req = options.reqParams;
        if (options.params.length) {
            req.params = {};
        }
        for (var _i = 0, _a = options.params; _i < _a.length; _i++) {
            var tmp = _a[_i];
            if (req[tmp.key]) {
                throw new Error('Query() - addParams: Custom Param is conflicting other request arguments');
            }
            req[tmp.key] = tmp.value;
            if (tmp.fn) {
                req[tmp.key] = tmp.fn.call(options.query, tmp.key, options.query, options.dm);
            }
            req.params[tmp.key] = req[tmp.key];
        }
    };
    return UrlAdaptor;
}(Adaptor));
export { UrlAdaptor };
/**
 * OData Adaptor that is extended from URL Adaptor, is used for consuming data through OData Service.
 * @hidden
 */
var ODataAdaptor = /** @class */ (function (_super) {
    __extends(ODataAdaptor, _super);
    function ODataAdaptor(props) {
        var _this = _super.call(this) || this;
        // options replaced the default adaptor options
        _this.options = extend({}, _this.options, {
            requestType: 'get',
            accept: 'application/json;odata=light;q=1,application/json;odata=verbose;q=0.5',
            multipartAccept: 'multipart/mixed',
            sortBy: '$orderby',
            select: '$select',
            skip: '$skip',
            take: '$top',
            count: '$inlinecount',
            where: '$filter',
            expand: '$expand',
            batch: '$batch',
            changeSet: '--changeset_',
            batchPre: 'batch_',
            contentId: 'Content-Id: ',
            batchContent: 'Content-Type: multipart/mixed; boundary=',
            changeSetContent: 'Content-Type: application/http\nContent-Transfer-Encoding: binary ',
            batchChangeSetContentType: 'Content-Type: application/json; charset=utf-8 ',
            updateType: 'PUT'
        });
        extend(_this.options, props || {});
        return _this;
    }
    ODataAdaptor.prototype.getModuleName = function () {
        return 'ODataAdaptor';
    };
    /**
     * Generate request string based on the filter criteria from query.
     * @param  {Predicate} pred
     * @param  {boolean} requiresCast?
     */
    ODataAdaptor.prototype.onPredicate = function (predicate, query, requiresCast) {
        var returnValue = '';
        var operator;
        var guid;
        var val = predicate.value;
        var type = typeof val;
        var field = predicate.field ? ODataAdaptor.getField(predicate.field) : null;
        if (val instanceof Date) {
            val = 'datetime\'' + DataUtil.parse.replacer(val) + '\'';
        }
        if (type === 'string') {
            val = encodeURIComponent(val);
            val = '\'' + val + '\'';
            if (requiresCast) {
                field = 'cast(' + field + ', \'Edm.String\')';
            }
            if (DataUtil.parse.isGuid(val)) {
                guid = 'guid';
            }
            if (predicate.ignoreCase) {
                if (!guid) {
                    field = 'tolower(' + field + ')';
                }
                val = val.toLowerCase();
            }
        }
        operator = DataUtil.odBiOperator[predicate.operator];
        if (operator) {
            returnValue += field;
            returnValue += operator;
            if (guid) {
                returnValue += guid;
            }
            return returnValue + val;
        }
        if (!isNullOrUndefined(this.getModuleName) && this.getModuleName() === 'ODataV4Adaptor') {
            operator = DataUtil.odv4UniOperator[predicate.operator];
        }
        else {
            operator = DataUtil.odUniOperator[predicate.operator];
        }
        if (operator === 'substringof') {
            var temp = val;
            val = field;
            field = temp;
        }
        returnValue += operator + '(';
        returnValue += field + ',';
        if (guid) {
            returnValue += guid;
        }
        returnValue += val + ')';
        return returnValue;
    };
    ODataAdaptor.prototype.addParams = function (options) {
        _super.prototype.addParams.call(this, options);
        delete options.reqParams.params;
    };
    /**
     * Generate request string based on the multiple filter criteria from query.
     * @param  {Predicate} pred
     * @param  {boolean} requiresCast?
     */
    ODataAdaptor.prototype.onComplexPredicate = function (predicate, query, requiresCast) {
        var res = [];
        for (var i = 0; i < predicate.predicates.length; i++) {
            res.push('(' + this.onEachWhere(predicate.predicates[i], query, requiresCast) + ')');
        }
        return res.join(' ' + predicate.condition + ' ');
    };
    /**
     * Generate query string based on the multiple filter criteria from query.
     * @param  {Predicate} filter
     * @param  {boolean} requiresCast?
     */
    ODataAdaptor.prototype.onEachWhere = function (filter, query, requiresCast) {
        return filter.isComplex ? this.onComplexPredicate(filter, query, requiresCast) : this.onPredicate(filter, query, requiresCast);
    };
    /**
     * Generate query string based on the multiple filter criteria from query.
     * @param  {string[]} filters
     */
    ODataAdaptor.prototype.onWhere = function (filters) {
        if (this.pvt.search) {
            filters.push(this.onEachWhere(this.pvt.search, null, true));
        }
        return filters.join(' and ');
    };
    /**
     * Generate query string based on the multiple search criteria from query.
     * @param  {{fields:string[]} e
     * @param  {string} operator
     * @param  {string} key
     * @param  {boolean}} ignoreCase
     */
    ODataAdaptor.prototype.onEachSearch = function (e) {
        if (e.fields && e.fields.length === 0) {
            DataUtil.throwError('Query() - Search : oData search requires list of field names to search');
        }
        var filter = this.pvt.search || [];
        for (var i = 0; i < e.fields.length; i++) {
            filter.push(new Predicate(e.fields[i], e.operator, e.key, e.ignoreCase));
        }
        this.pvt.search = filter;
    };
    /**
     * Generate query string based on the search criteria from query.
     * @param  {Object} e
     */
    ODataAdaptor.prototype.onSearch = function (e) {
        this.pvt.search = Predicate.or(this.pvt.search);
        return '';
    };
    /**
     * Generate query string based on multiple sort criteria from query.
     * @param  {QueryOptions} e
     */
    ODataAdaptor.prototype.onEachSort = function (e) {
        var res = [];
        if (e.name instanceof Array) {
            for (var i = 0; i < e.name.length; i++) {
                res.push(ODataAdaptor.getField(e.name[i]) + (e.direction === 'descending' ? ' desc' : ''));
            }
        }
        else {
            res.push(ODataAdaptor.getField(e.name) + (e.direction === 'descending' ? ' desc' : ''));
        }
        return res.join(',');
    };
    /**
     * Returns sort query string.
     * @param  {string[]} e
     */
    ODataAdaptor.prototype.onSortBy = function (e) {
        return e.reverse().join(',');
    };
    /**
     * Adds the group query to the adaptor option.
     * @param  {Object[]} e
     * @returns string
     */
    ODataAdaptor.prototype.onGroup = function (e) {
        this.pvt.groups = e;
        return [];
    };
    /**
     * Returns the select query string.
     * @param  {string[]} e
     */
    ODataAdaptor.prototype.onSelect = function (e) {
        for (var i = 0; i < e.length; i++) {
            e[i] = ODataAdaptor.getField(e[i]);
        }
        return e.join(',');
    };
    /**
     * Add the aggregate query to the adaptor option.
     * @param  {Object[]} e
     * @returns string
     */
    ODataAdaptor.prototype.onAggregates = function (e) {
        this.pvt.aggregates = e;
        return '';
    };
    /**
     * Returns the query string which requests total count from the data source.
     * @param  {boolean} e
     * @returns string
     */
    ODataAdaptor.prototype.onCount = function (e) {
        return e === true ? 'allpages' : '';
    };
    /**
     * Method will trigger before send the request to server side.
     * Used to set the custom header or modify the request options.
     * @param  {DataManager} dm
     * @param  {XMLHttpRequest} request
     * @param  {Ajax} settings?
     */
    ODataAdaptor.prototype.beforeSend = function (dm, request, settings) {
        if (DataUtil.endsWith(settings.url, this.options.batch) && settings.type.toLowerCase() === 'post') {
            request.setRequestHeader('Accept', this.options.multipartAccept);
            request.setRequestHeader('DataServiceVersion', '2.0');
            request.overrideMimeType('text/plain; charset=x-user-defined');
        }
        else {
            request.setRequestHeader('Accept', this.options.accept);
        }
        request.setRequestHeader('DataServiceVersion', '2.0');
        request.setRequestHeader('MaxDataServiceVersion', '2.0');
    };
    /**
     * Returns the data from the query processing.
     * @param  {DataResult} data
     * @param  {DataOptions} ds?
     * @param  {Query} query?
     * @param  {XMLHttpRequest} xhr?
     * @param  {Ajax} request?
     * @param  {CrudOptions} changes?
     * @returns aggregateResult
     */
    ODataAdaptor.prototype.processResponse = function (data, ds, query, xhr, request, changes) {
        var metaCheck = 'odata.metadata';
        if ((request && request.type === 'GET') && !this.rootUrl && data[metaCheck]) {
            var dataUrls = data[metaCheck].split('/$metadata#');
            this.rootUrl = dataUrls[0];
            this.resourceTableName = dataUrls[1];
        }
        var pvtData = 'pvtData';
        if (!isNullOrUndefined(data.d)) {
            var dataCopy = ((query && query.isCountRequired) ? data.d.results : data.d);
            var metaData = '__metadata';
            if (!isNullOrUndefined(dataCopy)) {
                for (var i = 0; i < dataCopy.length; i++) {
                    if (!isNullOrUndefined(dataCopy[i][metaData])) {
                        delete dataCopy[i][metaData];
                    }
                }
            }
        }
        var pvt = request && request[pvtData];
        var emptyAndBatch = this.processBatchResponse(data, query, xhr, request, changes);
        if (emptyAndBatch) {
            return emptyAndBatch;
        }
        var versionCheck = xhr && request.getResponseHeader('DataServiceVersion');
        var count = null;
        var version = (versionCheck && parseInt(versionCheck, 10)) || 2;
        if (query && query.isCountRequired) {
            var oDataCount = '__count';
            if (data[oDataCount] || data['odata.count']) {
                count = data[oDataCount] || data['odata.count'];
            }
            if (data.d) {
                data = data.d;
            }
            if (data[oDataCount] || data['odata.count']) {
                count = data[oDataCount] || data['odata.count'];
            }
        }
        if (version === 3 && data.value) {
            data = data.value;
        }
        if (data.d) {
            data = data.d;
        }
        if (version < 3 && data.results) {
            data = data.results;
        }
        var args = {};
        args.count = count;
        args.result = data;
        this.getAggregateResult(pvt, data, args, null, query);
        return DataUtil.isNull(count) ? args.result : { result: args.result, count: args.count, aggregates: args.aggregates };
    };
    /**
     * Converts the request object to query string.
     * @param  {Object} req
     * @param  {Query} query
     * @param  {DataManager} dm
     * @returns tableName
     */
    ODataAdaptor.prototype.convertToQueryString = function (request, query, dm) {
        var res = [];
        var table = 'table';
        var tableName = request[table] || '';
        var format = '$format';
        delete request[table];
        if (dm.dataSource.requiresFormat) {
            request[format] = 'json';
        }
        var keys = Object.keys(request);
        for (var _i = 0, keys_4 = keys; _i < keys_4.length; _i++) {
            var prop = keys_4[_i];
            res.push(prop + '=' + request[prop]);
        }
        res = res.join('&');
        if (dm.dataSource.url && dm.dataSource.url.indexOf('?') !== -1 && !tableName) {
            return res;
        }
        return res.length ? tableName + '?' + res : tableName || '';
    };
    ODataAdaptor.prototype.localTimeReplacer = function (key, convertObj) {
        for (var _i = 0, _a = !isNullOrUndefined(convertObj) ? Object.keys(convertObj) : []; _i < _a.length; _i++) {
            var prop = _a[_i];
            if ((convertObj[prop] instanceof Date)) {
                convertObj[prop] = DataUtil.dateParse.toLocalTime(convertObj[prop]);
            }
        }
        return convertObj;
    };
    /**
     * Prepare and returns request body which is used to insert a new record in the table.
     * @param  {DataManager} dm
     * @param  {Object} data
     * @param  {string} tableName?
     */
    ODataAdaptor.prototype.insert = function (dm, data, tableName) {
        return {
            url: (dm.dataSource.insertUrl || dm.dataSource.url).replace(/\/*$/, tableName ? '/' + tableName : ''),
            data: JSON.stringify(data, this.options.localTime ? this.localTimeReplacer : null)
        };
    };
    /**
     * Prepare and return request body which is used to remove record from the table.
     * @param  {DataManager} dm
     * @param  {string} keyField
     * @param  {number} value
     * @param  {string} tableName?
     */
    ODataAdaptor.prototype.remove = function (dm, keyField, value, tableName) {
        var url;
        if (typeof value === 'string' && !DataUtil.parse.isGuid(value)) {
            url = "('" + value + "')";
        }
        else {
            url = "(" + value + ")";
        }
        return {
            type: 'DELETE',
            url: (dm.dataSource.removeUrl || dm.dataSource.url).replace(/\/*$/, tableName ? '/' + tableName : '') + url
        };
    };
    /**
     * Updates existing record and saves the changes to the table.
     * @param  {DataManager} dm
     * @param  {string} keyField
     * @param  {Object} value
     * @param  {string} tableName?
     * @returns this
     */
    ODataAdaptor.prototype.update = function (dm, keyField, value, tableName, query, original) {
        if (this.options.updateType === 'PATCH' && !isNullOrUndefined(original)) {
            value = this.compareAndRemove(value, original, keyField);
        }
        var url;
        if (typeof value[keyField] === 'string' && !DataUtil.parse.isGuid(value[keyField])) {
            url = "('" + value[keyField] + "')";
        }
        else {
            url = "(" + value[keyField] + ")";
        }
        return {
            type: this.options.updateType,
            url: (dm.dataSource.updateUrl || dm.dataSource.url).replace(/\/*$/, tableName ? '/' + tableName : '') + url,
            data: JSON.stringify(value, this.options.localTime ? this.localTimeReplacer : null),
            accept: this.options.accept
        };
    };
    /**
     * Prepare the request body based on the newly added, removed and updated records.
     * The result is used by the batch request.
     * @param  {DataManager} dm
     * @param  {CrudOptions} changes
     * @param  {RemoteArgs} e
     * @returns {Object}
     */
    ODataAdaptor.prototype.batchRequest = function (dm, changes, e, query, original) {
        var initialGuid = e.guid = DataUtil.getGuid(this.options.batchPre);
        var url = this.rootUrl ? this.rootUrl + '/' + this.options.batch :
            dm.dataSource.url.replace(/\/*$/, '/' + this.options.batch);
        e.url = this.resourceTableName ? this.resourceTableName : e.url;
        var args = {
            url: e.url,
            key: e.key,
            cid: 1,
            cSet: DataUtil.getGuid(this.options.changeSet)
        };
        var req = '--' + initialGuid + '\n';
        req += 'Content-Type: multipart/mixed; boundary=' + args.cSet.replace('--', '') + '\n';
        this.pvt.changeSet = 0;
        req += this.generateInsertRequest(changes.addedRecords, args, dm);
        req += this.generateUpdateRequest(changes.changedRecords, args, dm, original ? original.changedRecords : []);
        req += this.generateDeleteRequest(changes.deletedRecords, args, dm);
        req += args.cSet + '--\n';
        req += '--' + initialGuid + '--';
        return {
            type: 'POST',
            url: url,
            dataType: 'json',
            contentType: 'multipart/mixed; charset=UTF-8;boundary=' + initialGuid,
            data: req
        };
    };
    /**
     * Generate the string content from the removed records.
     * The result will be send during batch update.
     * @param  {Object[]} arr
     * @param  {RemoteArgs} e
     * @returns this
     */
    ODataAdaptor.prototype.generateDeleteRequest = function (arr, e, dm) {
        if (!arr) {
            return '';
        }
        var req = '';
        var stat = {
            'method': 'DELETE ',
            'url': function (data, i, key) {
                var url = DataUtil.getObject(key, data[i]);
                if (typeof url === 'number' || DataUtil.parse.isGuid(url)) {
                    return '(' + url + ')';
                }
                else if (url instanceof Date) {
                    var dateTime = data[i][key];
                    return '(' + dateTime.toJSON() + ')';
                }
                else {
                    return "('" + url + "')";
                }
            },
            'data': function (data, i) { return ''; }
        };
        req = this.generateBodyContent(arr, e, stat, dm);
        return req + '\n';
    };
    /**
     * Generate the string content from the inserted records.
     * The result will be send during batch update.
     * @param  {Object[]} arr
     * @param  {RemoteArgs} e
     */
    ODataAdaptor.prototype.generateInsertRequest = function (arr, e, dm) {
        if (!arr) {
            return '';
        }
        var req = '';
        var stat = {
            'method': 'POST ',
            'url': function (data, i, key) { return ''; },
            'data': function (data, i) { return JSON.stringify(data[i]) + '\n\n'; }
        };
        req = this.generateBodyContent(arr, e, stat, dm);
        return req;
    };
    /**
     * Generate the string content from the updated records.
     * The result will be send during batch update.
     * @param  {Object[]} arr
     * @param  {RemoteArgs} e
     */
    ODataAdaptor.prototype.generateUpdateRequest = function (arr, e, dm, org) {
        var _this = this;
        if (!arr) {
            return '';
        }
        var req = '';
        arr.forEach(function (change) { return change = _this.compareAndRemove(change, org.filter(function (o) { return DataUtil.getObject(e.key, o) === DataUtil.getObject(e.key, change); })[0], e.key); });
        var stat = {
            'method': this.options.updateType + ' ',
            'url': function (data, i, key) {
                if (typeof data[i][key] === 'number' || DataUtil.parse.isGuid(data[i][key])) {
                    return '(' + data[i][key] + ')';
                }
                else if (data[i][key] instanceof Date) {
                    var date = data[i][key];
                    return '(' + date.toJSON() + ')';
                }
                else {
                    return "('" + data[i][key] + "')";
                }
            },
            'data': function (data, i) { return JSON.stringify(data[i]) + '\n\n'; }
        };
        req = this.generateBodyContent(arr, e, stat, dm);
        return req;
    };
    ODataAdaptor.getField = function (prop) {
        return prop.replace(/\./g, '/');
    };
    ODataAdaptor.prototype.generateBodyContent = function (arr, e, stat, dm) {
        var req = '';
        for (var i = 0; i < arr.length; i++) {
            req += '\n' + e.cSet + '\n';
            req += this.options.changeSetContent + '\n\n';
            req += stat.method;
            if (stat.method === 'POST ') {
                req += (dm.dataSource.insertUrl || dm.dataSource.crudUrl || e.url) + stat.url(arr, i, e.key) + ' HTTP/1.1\n';
            }
            else if (stat.method === 'PUT ' || stat.method === 'PATCH ') {
                req += (dm.dataSource.updateUrl || dm.dataSource.crudUrl || e.url) + stat.url(arr, i, e.key) + ' HTTP/1.1\n';
            }
            else if (stat.method === 'DELETE ') {
                req += (dm.dataSource.removeUrl || dm.dataSource.crudUrl || e.url) + stat.url(arr, i, e.key) + ' HTTP/1.1\n';
            }
            req += 'Accept: ' + this.options.accept + '\n';
            req += 'Content-Id: ' + this.pvt.changeSet++ + '\n';
            req += this.options.batchChangeSetContentType + '\n';
            if (!isNullOrUndefined(arr[i]['@odata.etag'])) {
                req += 'If-Match: ' + arr[i]['@odata.etag'] + '\n\n';
                delete arr[i]['@odata.etag'];
            }
            else {
                req += '\n';
            }
            req += stat.data(arr, i);
        }
        return req;
    };
    ODataAdaptor.prototype.processBatchResponse = function (data, query, xhr, request, changes) {
        if (xhr && xhr.getResponseHeader('Content-Type') && xhr.getResponseHeader('Content-Type').indexOf('xml') !== -1) {
            return (query.isCountRequired ? { result: [], count: 0 } : []);
        }
        if (request && this.options.batch && DataUtil.endsWith(request.url, this.options.batch) && request.type.toLowerCase() === 'post') {
            var guid = xhr.getResponseHeader('Content-Type');
            var cIdx = void 0;
            var jsonObj = void 0;
            var d = data + '';
            guid = guid.substring(guid.indexOf('=batchresponse') + 1);
            d = d.split(guid);
            if (d.length < 2) {
                return {};
            }
            d = d[1];
            var exVal = /(?:\bContent-Type.+boundary=)(changesetresponse.+)/i.exec(d);
            if (exVal) {
                d.replace(exVal[0], '');
            }
            var changeGuid = exVal ? exVal[1] : '';
            d = d.split(changeGuid);
            for (var i = d.length; i > -1; i--) {
                if (!/\bContent-ID:/i.test(d[i]) || !/\bHTTP.+201/.test(d[i])) {
                    continue;
                }
                cIdx = parseInt(/\bContent-ID: (\d+)/i.exec(d[i])[1], 10);
                if (changes.addedRecords[cIdx]) {
                    jsonObj = DataUtil.parse.parseJson(/^\{.+\}/m.exec(d[i])[0]);
                    extend({}, changes.addedRecords[cIdx], this.processResponse(jsonObj));
                }
            }
            return changes;
        }
        return null;
    };
    ODataAdaptor.prototype.compareAndRemove = function (data, original, key) {
        var _this = this;
        if (isNullOrUndefined(original)) {
            return data;
        }
        Object.keys(data).forEach(function (prop) {
            if (prop !== key && prop !== '@odata.etag') {
                if (DataUtil.isPlainObject(data[prop])) {
                    _this.compareAndRemove(data[prop], original[prop]);
                    var final = Object.keys(data[prop]).filter(function (data) { return data !== '@odata.etag'; });
                    if (final.length === 0) {
                        delete data[prop];
                    }
                }
                else if (data[prop] === original[prop]) {
                    delete data[prop];
                }
                else if (data[prop] && original[prop] && data[prop].valueOf() === original[prop].valueOf()) {
                    delete data[prop];
                }
            }
        });
        return data;
    };
    return ODataAdaptor;
}(UrlAdaptor));
export { ODataAdaptor };
/**
 * The OData v4 is an improved version of OData protocols.
 * The DataManager uses the ODataV4Adaptor to consume OData v4 services.
 * @hidden
 */
var ODataV4Adaptor = /** @class */ (function (_super) {
    __extends(ODataV4Adaptor, _super);
    function ODataV4Adaptor(props) {
        var _this = _super.call(this, props) || this;
        // options replaced the default adaptor options
        _this.options = extend({}, _this.options, {
            requestType: 'get',
            accept: 'application/json, text/javascript, */*; q=0.01',
            multipartAccept: 'multipart/mixed',
            sortBy: '$orderby',
            select: '$select',
            skip: '$skip',
            take: '$top',
            count: '$count',
            search: '$search',
            where: '$filter',
            expand: '$expand',
            batch: '$batch',
            changeSet: '--changeset_',
            batchPre: 'batch_',
            contentId: 'Content-Id: ',
            batchContent: 'Content-Type: multipart/mixed; boundary=',
            changeSetContent: 'Content-Type: application/http\nContent-Transfer-Encoding: binary ',
            batchChangeSetContentType: 'Content-Type: application/json; charset=utf-8 ',
            updateType: 'PATCH',
            localTime: false,
            apply: '$apply'
        });
        extend(_this.options, props || {});
        return _this;
    }
    /**
     * @hidden
     */
    ODataV4Adaptor.prototype.getModuleName = function () {
        return 'ODataV4Adaptor';
    };
    /**
     * Returns the query string which requests total count from the data source.
     * @param  {boolean} e
     * @returns string
     */
    ODataV4Adaptor.prototype.onCount = function (e) {
        return e === true ? 'true' : '';
    };
    /**
     * Generate request string based on the filter criteria from query.
     * @param  {Predicate} pred
     * @param  {boolean} requiresCast?
     */
    ODataV4Adaptor.prototype.onPredicate = function (predicate, query, requiresCast) {
        var returnValue = '';
        var val = predicate.value;
        var isDate = val instanceof Date;
        if (query instanceof Query) {
            var queries = this.getQueryRequest(query);
            for (var i = 0; i < queries.filters.length; i++) {
                if (queries.filters[i].e.key === predicate.value) {
                    requiresCast = true;
                }
            }
        }
        returnValue = _super.prototype.onPredicate.call(this, predicate, query, requiresCast);
        if (isDate) {
            returnValue = returnValue.replace(/datetime'(.*)'$/, '$1');
        }
        if (DataUtil.parse.isGuid(val)) {
            returnValue = returnValue.replace('guid', '').replace(/'/g, '');
        }
        return returnValue;
    };
    /**
     *  Generate query string based on the multiple search criteria from query.
     * @param  {{fields:string[]} e
     * @param  {string} operator
     * @param  {string} key
     * @param  {boolean}} ignoreCase
     */
    ODataV4Adaptor.prototype.onEachSearch = function (e) {
        var search = this.pvt.searches || [];
        search.push(e.key);
        this.pvt.searches = search;
    };
    /**
     *  Generate query string based on the search criteria from query.
     * @param  {Object} e
     */
    ODataV4Adaptor.prototype.onSearch = function (e) {
        return this.pvt.searches.join(' OR ');
    };
    /**
     * Returns the expand query string.
     * @param  {string} e
     */
    ODataV4Adaptor.prototype.onExpand = function (e) {
        var _this = this;
        var selected = {};
        var expanded = {};
        var expands = e.expands.slice();
        var exArr = [];
        var selects = e.selects.filter(function (item) { return item.indexOf('.') > -1; });
        selects.forEach(function (select) {
            var splits = select.split('.');
            if (!(splits[0] in selected)) {
                selected[splits[0]] = [];
            }
            selected[splits[0]].push(splits[1]);
        });
        //Auto expand from select query
        Object.keys(selected).forEach(function (expand) {
            if ((expands.indexOf(expand) === -1)) {
                expands.push(expand);
            }
        });
        expands.forEach(function (expand) {
            expanded[expand] = expand in selected ? expand + "(" + _this.options.select + "=" + selected[expand].join(',') + ")" : expand;
        });
        Object.keys(expanded).forEach(function (ex) { return exArr.push(expanded[ex]); });
        return exArr.join(',');
    };
    /**
     * Returns the groupby query string.
     * @param  {string} e
     */
    ODataV4Adaptor.prototype.onDistinct = function (distinctFields) {
        var fields = distinctFields.map(function (field) { return ODataAdaptor.getField(field); }).join(',');
        return "groupby((" + fields + "))";
    };
    /**
     * Returns the select query string.
     * @param  {string[]} e
     */
    ODataV4Adaptor.prototype.onSelect = function (e) {
        return _super.prototype.onSelect.call(this, e.filter(function (item) { return item.indexOf('.') === -1; }));
    };
    /**
     * Method will trigger before send the request to server side.
     * Used to set the custom header or modify the request options.
     * @param  {DataManager} dm
     * @param  {XMLHttpRequest} request
     * @param  {Ajax} settings
     * @returns void
     */
    ODataV4Adaptor.prototype.beforeSend = function (dm, request, settings) {
        if (settings.type === 'POST' || settings.type === 'PUT' || settings.type === 'PATCH') {
            request.setRequestHeader('Prefer', 'return=representation');
        }
        request.setRequestHeader('Accept', this.options.accept);
    };
    /**
     * Returns the data from the query processing.
     * @param  {DataResult} data
     * @param  {DataOptions} ds?
     * @param  {Query} query?
     * @param  {XMLHttpRequest} xhr?
     * @param  {Ajax} request?
     * @param  {CrudOptions} changes?
     * @returns aggregateResult
     */
    ODataV4Adaptor.prototype.processResponse = function (data, ds, query, xhr, request, changes) {
        var metaName = '@odata.context';
        if ((request && request.type === 'GET') && !this.rootUrl && data[metaName]) {
            var dataUrl = data[metaName].split('/$metadata#');
            this.rootUrl = dataUrl[0];
            this.resourceTableName = dataUrl[1];
        }
        var pvtData = 'pvtData';
        var pvt = request && request[pvtData];
        var emptyAndBatch = _super.prototype.processBatchResponse.call(this, data, query, xhr, request, changes);
        if (emptyAndBatch) {
            return emptyAndBatch;
        }
        var count = null;
        var dataCount = '@odata.count';
        if (query && query.isCountRequired) {
            if (dataCount in data) {
                count = data[dataCount];
            }
        }
        data = !isNullOrUndefined(data.value) ? data.value : data;
        var args = {};
        args.count = count;
        args.result = data;
        this.getAggregateResult(pvt, data, args, null, query);
        return DataUtil.isNull(count) ? args.result : { result: args.result, count: count, aggregates: args.aggregates };
    };
    return ODataV4Adaptor;
}(ODataAdaptor));
export { ODataV4Adaptor };
/**
 * The Web API is a programmatic interface to define the request and response messages system that is mostly exposed in JSON or XML.
 * The DataManager uses the WebApiAdaptor to consume Web API.
 * Since this adaptor is targeted to interact with Web API created using OData endpoint, it is extended from ODataAdaptor
 * @hidden
 */
var WebApiAdaptor = /** @class */ (function (_super) {
    __extends(WebApiAdaptor, _super);
    function WebApiAdaptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebApiAdaptor.prototype.getModuleName = function () {
        return 'WebApiAdaptor';
    };
    /**
     * Prepare and returns request body which is used to insert a new record in the table.
     * @param  {DataManager} dm
     * @param  {Object} data
     * @param  {string} tableName?
     */
    WebApiAdaptor.prototype.insert = function (dm, data, tableName) {
        return {
            type: 'POST',
            url: dm.dataSource.url,
            data: JSON.stringify(data)
        };
    };
    /**
     * Prepare and return request body which is used to remove record from the table.
     * @param  {DataManager} dm
     * @param  {string} keyField
     * @param  {number} value
     * @param  {string} tableName?
     */
    WebApiAdaptor.prototype.remove = function (dm, keyField, value, tableName) {
        return {
            type: 'DELETE',
            url: dm.dataSource.url + '/' + value,
            data: JSON.stringify(value)
        };
    };
    /**
     * Prepare and return request body which is used to update record.
     * @param  {DataManager} dm
     * @param  {string} keyField
     * @param  {Object} value
     * @param  {string} tableName?
     */
    WebApiAdaptor.prototype.update = function (dm, keyField, value, tableName) {
        return {
            type: 'PUT',
            url: dm.dataSource.url,
            data: JSON.stringify(value)
        };
    };
    WebApiAdaptor.prototype.batchRequest = function (dm, changes, e) {
        var _this = this;
        var initialGuid = e.guid = DataUtil.getGuid(this.options.batchPre);
        var url = dm.dataSource.url.replace(/\/*$/, '/' + this.options.batch);
        e.url = this.resourceTableName ? this.resourceTableName : e.url;
        var req = [];
        var _loop_1 = function (i, x) {
            changes.addedRecords.forEach(function (j, d) {
                var stat = {
                    'method': 'POST ',
                    'url': function (data, i, key) { return ''; },
                    'data': function (data, i) { return JSON.stringify(data[i]) + '\n\n'; }
                };
                req.push('--' + initialGuid);
                req.push('Content-Type: application/http; msgtype=request', '');
                req.push('POST ' + '/api/' + (dm.dataSource.insertUrl || dm.dataSource.crudUrl || e.url)
                    + stat.url(changes.addedRecords, i, e.key) + ' HTTP/1.1');
                req.push('Content-Type: ' + 'application/json; charset=utf-8');
                req.push('Host: ' + location.host);
                req.push('', j ? JSON.stringify(j) : '');
            });
        };
        //insertion
        for (var i = 0, x = changes.addedRecords.length; i < x; i++) {
            _loop_1(i, x);
        }
        var _loop_2 = function (i, x) {
            changes.changedRecords.forEach(function (j, d) {
                var stat = {
                    'method': _this.options.updateType + ' ',
                    'url': function (data, i, key) { return ''; },
                    'data': function (data, i) { return JSON.stringify(data[i]) + '\n\n'; }
                };
                req.push('--' + initialGuid);
                req.push('Content-Type: application/http; msgtype=request', '');
                req.push('PUT ' + '/api/' + (dm.dataSource.updateUrl || dm.dataSource.crudUrl || e.url)
                    + stat.url(changes.changedRecords, i, e.key) + ' HTTP/1.1');
                req.push('Content-Type: ' + 'application/json; charset=utf-8');
                req.push('Host: ' + location.host);
                req.push('', j ? JSON.stringify(j) : '');
            });
        };
        //updation 
        for (var i = 0, x = changes.changedRecords.length; i < x; i++) {
            _loop_2(i, x);
        }
        var _loop_3 = function (i, x) {
            changes.deletedRecords.forEach(function (j, d) {
                var state = {
                    'mtd': 'DELETE ',
                    'url': function (data, i, key) {
                        var url = DataUtil.getObject(key, data[i]);
                        if (typeof url === 'number' || DataUtil.parse.isGuid(url)) {
                            return '/' + url;
                        }
                        else if (url instanceof Date) {
                            var datTime = data[i][key];
                            return '/' + datTime.toJSON();
                        }
                        else {
                            return "/'" + url + "'";
                        }
                    },
                    'data': function (data, i) { return ''; }
                };
                req.push('--' + initialGuid);
                req.push('Content-Type: application/http; msgtype=request', '');
                req.push('DELETE ' + '/api/' + (dm.dataSource.removeUrl || dm.dataSource.crudUrl || e.url)
                    + state.url(changes.deletedRecords, i, e.key) + ' HTTP/1.1');
                req.push('Content-Type: ' + 'application/json; charset=utf-8');
                req.push('Host: ' + location.host);
                req.push('', j ? JSON.stringify(j) : '');
            });
        };
        //deletion
        for (var i = 0, x = changes.deletedRecords.length; i < x; i++) {
            _loop_3(i, x);
        }
        req.push('--' + initialGuid + '--', '');
        return {
            type: 'POST',
            url: url,
            contentType: 'multipart/mixed; boundary=' + initialGuid,
            data: req.join('\r\n')
        };
    };
    /**
     * Method will trigger before send the request to server side.
     * Used to set the custom header or modify the request options.
     * @param  {DataManager} dm
     * @param  {XMLHttpRequest} request
     * @param  {Ajax} settings
     * @returns void
     */
    WebApiAdaptor.prototype.beforeSend = function (dm, request, settings) {
        request.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
    };
    /**
     * Returns the data from the query processing.
     * @param  {DataResult} data
     * @param  {DataOptions} ds?
     * @param  {Query} query?
     * @param  {XMLHttpRequest} xhr?
     * @param  {Ajax} request?
     * @param  {CrudOptions} changes?
     * @returns aggregateResult
     */
    WebApiAdaptor.prototype.processResponse = function (data, ds, query, xhr, request, changes) {
        var pvtData = 'pvtData';
        var pvt = request && request[pvtData];
        var count = null;
        var args = {};
        if (request && request.type.toLowerCase() !== 'post') {
            var versionCheck = xhr && request.getResponseHeader('DataServiceVersion');
            var version = (versionCheck && parseInt(versionCheck, 10)) || 2;
            if (query && query.isCountRequired) {
                if (!DataUtil.isNull(data.Count)) {
                    count = data.Count;
                }
            }
            if (version < 3 && data.Items) {
                data = data.Items;
            }
            args.count = count;
            args.result = data;
            this.getAggregateResult(pvt, data, args, null, query);
        }
        args.result = args.result || data;
        return DataUtil.isNull(count) ? args.result : { result: args.result, count: args.count, aggregates: args.aggregates };
    };
    return WebApiAdaptor;
}(ODataAdaptor));
export { WebApiAdaptor };
/**
 * WebMethodAdaptor can be used by DataManager to interact with web method.
 * @hidden
 */
var WebMethodAdaptor = /** @class */ (function (_super) {
    __extends(WebMethodAdaptor, _super);
    function WebMethodAdaptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Prepare the request body based on the query.
     * The query information can be accessed at the WebMethod using variable named `value`.
     * @param  {DataManager} dm
     * @param  {Query} query
     * @param  {Object[]} hierarchyFilters?
     * @returns application
     */
    WebMethodAdaptor.prototype.processQuery = function (dm, query, hierarchyFilters) {
        var obj = new UrlAdaptor().processQuery(dm, query, hierarchyFilters);
        var getData = 'data';
        var data = DataUtil.parse.parseJson(obj[getData]);
        var result = {};
        var value = 'value';
        if (data.param) {
            for (var i = 0; i < data.param.length; i++) {
                var param = data.param[i];
                var key = Object.keys(param)[0];
                result[key] = param[key];
            }
        }
        result[value] = data;
        var pvtData = 'pvtData';
        var url = 'url';
        return {
            data: JSON.stringify(result),
            url: obj[url],
            pvtData: obj[pvtData],
            type: 'POST',
            contentType: 'application/json; charset=utf-8'
        };
    };
    return WebMethodAdaptor;
}(UrlAdaptor));
export { WebMethodAdaptor };
/**
 * RemoteSaveAdaptor, extended from JsonAdaptor and it is used for binding local data and performs all DataManager queries in client-side.
 * It interacts with server-side only for CRUD operations.
 * @hidden
 */
var RemoteSaveAdaptor = /** @class */ (function (_super) {
    __extends(RemoteSaveAdaptor, _super);
    /**
     * @hidden
     */
    function RemoteSaveAdaptor() {
        var _this = _super.call(this) || this;
        setValue('beforeSend', UrlAdaptor.prototype.beforeSend, _this);
        return _this;
    }
    RemoteSaveAdaptor.prototype.insert = function (dm, data, tableName, query, position) {
        this.pvt.position = position;
        this.updateType = 'add';
        return {
            url: dm.dataSource.insertUrl || dm.dataSource.crudUrl || dm.dataSource.url,
            data: JSON.stringify(extend({}, {
                value: data,
                table: tableName,
                action: 'insert'
            }, DataUtil.getAddParams(this, dm, query)))
        };
    };
    RemoteSaveAdaptor.prototype.remove = function (dm, keyField, val, tableName, query) {
        _super.prototype.remove.call(this, dm, keyField, val);
        return {
            type: 'POST',
            url: dm.dataSource.removeUrl || dm.dataSource.crudUrl || dm.dataSource.url,
            data: JSON.stringify(extend({}, {
                key: val,
                keyColumn: keyField,
                table: tableName,
                action: 'remove'
            }, DataUtil.getAddParams(this, dm, query)))
        };
    };
    RemoteSaveAdaptor.prototype.update = function (dm, keyField, val, tableName, query) {
        this.updateType = 'update';
        this.updateKey = keyField;
        return {
            type: 'POST',
            url: dm.dataSource.updateUrl || dm.dataSource.crudUrl || dm.dataSource.url,
            data: JSON.stringify(extend({}, {
                value: val,
                action: 'update',
                keyColumn: keyField,
                key: val[keyField],
                table: tableName
            }, DataUtil.getAddParams(this, dm, query)))
        };
    };
    RemoteSaveAdaptor.prototype.processResponse = function (data, ds, query, xhr, request, changes, e) {
        var i;
        var newData = request ? JSON.parse(request.data) : data;
        data = newData.action === 'batch' ? DataUtil.parse.parseJson(data) : data;
        if (this.updateType === 'add') {
            _super.prototype.insert.call(this, ds, data, null, null, this.pvt.position);
        }
        if (this.updateType === 'update') {
            _super.prototype.update.call(this, ds, this.updateKey, data);
        }
        this.updateType = undefined;
        if (data.added) {
            for (i = 0; i < data.added.length; i++) {
                _super.prototype.insert.call(this, ds, data.added[i]);
            }
        }
        if (data.changed) {
            for (i = 0; i < data.changed.length; i++) {
                _super.prototype.update.call(this, ds, e.key, data.changed[i]);
            }
        }
        if (data.deleted) {
            for (i = 0; i < data.deleted.length; i++) {
                _super.prototype.remove.call(this, ds, e.key, data.deleted[i]);
            }
        }
        return data;
    };
    /**
     * Prepare the request body based on the newly added, removed and updated records.
     * Also perform the changes in the locally cached data to sync with the remote data.
     * The result is used by the batch request.
     * @param  {DataManager} dm
     * @param  {CrudOptions} changes
     * @param  {RemoteArgs} e
     */
    RemoteSaveAdaptor.prototype.batchRequest = function (dm, changes, e, query, original) {
        return {
            type: 'POST',
            url: dm.dataSource.batchUrl || dm.dataSource.crudUrl || dm.dataSource.url,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(extend({}, {
                changed: changes.changedRecords,
                added: changes.addedRecords,
                deleted: changes.deletedRecords,
                action: 'batch',
                table: e.url,
                key: e.key
            }, DataUtil.getAddParams(this, dm, query)))
        };
    };
    RemoteSaveAdaptor.prototype.addParams = function (options) {
        var urlParams = new UrlAdaptor();
        urlParams.addParams(options);
    };
    return RemoteSaveAdaptor;
}(JsonAdaptor));
export { RemoteSaveAdaptor };
/**
 * Ajax Adaptor that is extended from URL Adaptor, is used for handle data operations with user defined functions.
 * @hidden
 */
var CustomDataAdaptor = /** @class */ (function (_super) {
    __extends(CustomDataAdaptor, _super);
    function CustomDataAdaptor(props) {
        var _this = _super.call(this) || this;
        // options replaced the default adaptor options
        _this.options = extend({}, _this.options, {
            getData: new Function(),
            addRecord: new Function(),
            updateRecord: new Function(),
            deleteRecord: new Function(),
            batchUpdate: new Function()
        });
        extend(_this.options, props || {});
        return _this;
    }
    CustomDataAdaptor.prototype.getModuleName = function () {
        return 'CustomDataAdaptor';
    };
    return CustomDataAdaptor;
}(UrlAdaptor));
export { CustomDataAdaptor };
/**
 * Cache Adaptor is used to cache the data of the visited pages. It prevents new requests for the previously visited pages.
 * You can configure cache page size and duration of caching by using cachingPageSize and timeTillExpiration properties of the DataManager
 * @hidden
 */
var CacheAdaptor = /** @class */ (function (_super) {
    __extends(CacheAdaptor, _super);
    /**
     * Constructor for CacheAdaptor class.
     * @param  {CacheAdaptor} adaptor?
     * @param  {number} timeStamp?
     * @param  {number} pageSize?
     * @hidden
     */
    function CacheAdaptor(adaptor, timeStamp, pageSize) {
        var _this = _super.call(this) || this;
        _this.isCrudAction = false;
        _this.isInsertAction = false;
        if (!isNullOrUndefined(adaptor)) {
            _this.cacheAdaptor = adaptor;
        }
        _this.pageSize = pageSize;
        _this.guidId = DataUtil.getGuid('cacheAdaptor');
        var obj = { keys: [], results: [] };
        window.localStorage.setItem(_this.guidId, JSON.stringify(obj));
        var guid = _this.guidId;
        if (!isNullOrUndefined(timeStamp)) {
            setInterval(function () {
                var data;
                data = DataUtil.parse.parseJson(window.localStorage.getItem(guid));
                var forDel = [];
                for (var i = 0; i < data.results.length; i++) {
                    var currentTime = +new Date();
                    var requestTime = +new Date(data.results[i].timeStamp);
                    data.results[i].timeStamp = currentTime - requestTime;
                    if (currentTime - requestTime > timeStamp) {
                        forDel.push(i);
                    }
                }
                for (var i = 0; i < forDel.length; i++) {
                    data.results.splice(forDel[i], 1);
                    data.keys.splice(forDel[i], 1);
                }
                window.localStorage.removeItem(guid);
                window.localStorage.setItem(guid, JSON.stringify(data));
            }, timeStamp);
        }
        return _this;
    }
    /**
     * It will generate the key based on the URL when we send a request to server.
     * @param  {string} url
     * @param  {Query} query?
     * @hidden
     */
    CacheAdaptor.prototype.generateKey = function (url, query) {
        var queries = this.getQueryRequest(query);
        var singles = Query.filterQueryLists(query.queries, ['onSelect', 'onPage', 'onSkip', 'onTake', 'onRange']);
        var key = url;
        var page = 'onPage';
        if (page in singles) {
            key += singles[page].pageIndex;
        }
        queries.sorts.forEach(function (obj) {
            key += obj.e.direction + obj.e.fieldName;
        });
        queries.groups.forEach(function (obj) {
            key += obj.e.fieldName;
        });
        queries.searches.forEach(function (obj) {
            key += obj.e.searchKey;
        });
        for (var filter = 0; filter < queries.filters.length; filter++) {
            var currentFilter = queries.filters[filter];
            if (currentFilter.e.isComplex) {
                var newQuery = query.clone();
                newQuery.queries = [];
                for (var i = 0; i < currentFilter.e.predicates.length; i++) {
                    newQuery.queries.push({ fn: 'onWhere', e: currentFilter.e.predicates[i], filter: query.queries.filter });
                }
                key += currentFilter.e.condition + this.generateKey(url, newQuery);
            }
            else {
                key += currentFilter.e.field + currentFilter.e.operator + currentFilter.e.value;
            }
        }
        return key;
    };
    /**
     * Process the query to generate request body.
     * If the data is already cached, it will return the cached data.
     * @param  {DataManager} dm
     * @param  {Query} query?
     * @param  {Object[]} hierarchyFilters?
     */
    CacheAdaptor.prototype.processQuery = function (dm, query, hierarchyFilters) {
        var key = this.generateKey(dm.dataSource.url, query);
        var cachedItems;
        cachedItems = DataUtil.parse.parseJson(window.localStorage.getItem(this.guidId));
        var data = cachedItems ? cachedItems.results[cachedItems.keys.indexOf(key)] : null;
        if (data != null && !this.isCrudAction && !this.isInsertAction) {
            return data;
        }
        this.isCrudAction = null;
        this.isInsertAction = null;
        return this.cacheAdaptor.processQuery.apply(this.cacheAdaptor, [].slice.call(arguments, 0));
    };
    /**
     * Returns the data from the query processing.
     * It will also cache the data for later usage.
     * @param  {DataResult} data
     * @param  {DataManager} ds?
     * @param  {Query} query?
     * @param  {XMLHttpRequest} xhr?
     * @param  {Ajax} request?
     * @param  {CrudOptions} changes?
     */
    CacheAdaptor.prototype.processResponse = function (data, ds, query, xhr, request, changes) {
        if (this.isInsertAction || (request && this.cacheAdaptor.options.batch &&
            DataUtil.endsWith(request.url, this.cacheAdaptor.options.batch) && request.type.toLowerCase() === 'post')) {
            return this.cacheAdaptor.processResponse(data, ds, query, xhr, request, changes);
        }
        data = this.cacheAdaptor.processResponse.apply(this.cacheAdaptor, [].slice.call(arguments, 0));
        var key = query ? this.generateKey(ds.dataSource.url, query) : ds.dataSource.url;
        var obj = {};
        obj = DataUtil.parse.parseJson(window.localStorage.getItem(this.guidId));
        var index = obj.keys.indexOf(key);
        if (index !== -1) {
            obj.results.splice(index, 1);
            obj.keys.splice(index, 1);
        }
        obj.results[obj.keys.push(key) - 1] = { keys: key, result: data.result, timeStamp: new Date(), count: data.count };
        while (obj.results.length > this.pageSize) {
            obj.results.splice(0, 1);
            obj.keys.splice(0, 1);
        }
        window.localStorage.setItem(this.guidId, JSON.stringify(obj));
        return data;
    };
    /**
     * Method will trigger before send the request to server side. Used to set the custom header or modify the request options.
     * @param  {DataManager} dm
     * @param  {XMLHttpRequest} request
     * @param  {Ajax} settings?
     */
    CacheAdaptor.prototype.beforeSend = function (dm, request, settings) {
        if (!isNullOrUndefined(this.cacheAdaptor.options.batch) && DataUtil.endsWith(settings.url, this.cacheAdaptor.options.batch)
            && settings.type.toLowerCase() === 'post') {
            request.setRequestHeader('Accept', this.cacheAdaptor.options.multipartAccept);
        }
        if (!dm.dataSource.crossDomain) {
            request.setRequestHeader('Accept', this.cacheAdaptor.options.accept);
        }
    };
    /**
     * Updates existing record and saves the changes to the table.
     * @param  {DataManager} dm
     * @param  {string} keyField
     * @param  {Object} value
     * @param  {string} tableName
     */
    CacheAdaptor.prototype.update = function (dm, keyField, value, tableName) {
        this.isCrudAction = true;
        return this.cacheAdaptor.update(dm, keyField, value, tableName);
    };
    /**
     * Prepare and returns request body which is used to insert a new record in the table.
     * @param  {DataManager} dm
     * @param  {Object} data
     * @param  {string} tableName?
     */
    CacheAdaptor.prototype.insert = function (dm, data, tableName) {
        this.isInsertAction = true;
        return this.cacheAdaptor.insert(dm, data, tableName);
    };
    /**
     * Prepare and return request body which is used to remove record from the table.
     * @param  {DataManager} dm
     * @param  {string} keyField
     * @param  {Object} value
     * @param  {string} tableName?
     */
    CacheAdaptor.prototype.remove = function (dm, keyField, value, tableName) {
        this.isCrudAction = true;
        return this.cacheAdaptor.remove(dm, keyField, value, tableName);
    };
    /**
     * Prepare the request body based on the newly added, removed and updated records.
     * The result is used by the batch request.
     * @param  {DataManager} dm
     * @param  {CrudOptions} changes
     * @param  {RemoteArgs} e
     */
    CacheAdaptor.prototype.batchRequest = function (dm, changes, e) {
        return this.cacheAdaptor.batchRequest(dm, changes, e);
    };
    return CacheAdaptor;
}(UrlAdaptor));
export { CacheAdaptor };
