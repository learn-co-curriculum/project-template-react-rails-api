import { DataUtil } from './util';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
/**
 * Query class is used to build query which is used by the DataManager to communicate with datasource.
 */
var Query = /** @class */ (function () {
    /**
     * Constructor for Query class.
     * @param  {string|string[]} from?
     * @hidden
     */
    function Query(from) {
        /** @hidden */
        this.subQuery = null;
        /** @hidden */
        this.isChild = false;
        /** @hidden */
        this.distincts = [];
        this.queries = [];
        this.key = '';
        this.fKey = '';
        if (typeof from === 'string') {
            this.fromTable = from;
        }
        else if (from && from instanceof Array) {
            this.lookups = from;
        }
        this.expands = [];
        this.sortedColumns = [];
        this.groupedColumns = [];
        this.subQuery = null;
        this.isChild = false;
        this.params = [];
        this.lazyLoad = [];
        return this;
    }
    /**
     * Sets the primary key.
     * @param  {string} field - Defines the column field.
     */
    Query.prototype.setKey = function (field) {
        this.key = field;
        return this;
    };
    /**
     * Sets default DataManager to execute query.
     * @param  {DataManager} dataManager - Defines the DataManager.
     */
    Query.prototype.using = function (dataManager) {
        this.dataManager = dataManager;
        return this;
    };
    /**
     * Executes query with the given DataManager.
     * @param  {DataManager} dataManager - Defines the DataManager.
     * @param  {Function} done - Defines the success callback.
     * @param  {Function} fail - Defines the failure callback.
     * @param  {Function} always - Defines the callback which will be invoked on either success or failure.
     *
     * <pre>
     * let dataManager: DataManager = new DataManager([{ ID: '10' }, { ID: '2' }, { ID: '1' }, { ID: '20' }]);
     * let query: Query = new Query();
     * query.sortBy('ID', (x: string, y: string): number => { return parseInt(x, 10) - parseInt(y, 10) });
     * let promise: Promise< Object > = query.execute(dataManager);
     * promise.then((e: { result: Object }) => { });
     * </pre>
     */
    Query.prototype.execute = function (dataManager, done, fail, always) {
        dataManager = dataManager || this.dataManager;
        if (dataManager) {
            return dataManager.executeQuery(this, done, fail, always);
        }
        return DataUtil.throwError('Query - execute() : dataManager needs to be is set using "using" function or should be passed as argument');
    };
    /**
     * Executes query with the local datasource.
     * @param  {DataManager} dataManager - Defines the DataManager.
     */
    Query.prototype.executeLocal = function (dataManager) {
        dataManager = dataManager || this.dataManager;
        if (dataManager) {
            return dataManager.executeLocal(this);
        }
        return DataUtil.throwError('Query - executeLocal() : dataManager needs to be is set using "using" function or should be passed as argument');
    };
    /**
     * Creates deep copy of the Query object.
     */
    Query.prototype.clone = function () {
        var cloned = new Query();
        cloned.queries = this.queries.slice(0);
        cloned.key = this.key;
        cloned.isChild = this.isChild;
        cloned.dataManager = this.dataManager;
        cloned.fromTable = this.fromTable;
        cloned.params = this.params.slice(0);
        cloned.expands = this.expands.slice(0);
        cloned.sortedColumns = this.sortedColumns.slice(0);
        cloned.groupedColumns = this.groupedColumns.slice(0);
        cloned.subQuerySelector = this.subQuerySelector;
        cloned.subQuery = this.subQuery;
        cloned.fKey = this.fKey;
        cloned.isCountRequired = this.isCountRequired;
        cloned.distincts = this.distincts.slice(0);
        cloned.lazyLoad = this.lazyLoad.slice(0);
        return cloned;
    };
    /**
     * Specifies the name of table to retrieve data in query execution.
     * @param  {string} tableName - Defines the table name.
     */
    Query.prototype.from = function (tableName) {
        this.fromTable = tableName;
        return this;
    };
    /**
     * Adds additional parameter which will be sent along with the request which will be generated while DataManager execute.
     * @param  {string} key - Defines the key of additional parameter.
     * @param  {Function|string} value - Defines the value for the key.
     */
    Query.prototype.addParams = function (key, value) {
        if (typeof value === 'function') {
            this.params.push({ key: key, fn: value });
        }
        else {
            this.params.push({ key: key, value: value });
        }
        return this;
    };
    /**
     * @hidden
     */
    Query.prototype.distinct = function (fields) {
        if (typeof fields === 'string') {
            this.distincts = [].slice.call([fields], 0);
        }
        else {
            this.distincts = fields.slice(0);
        }
        return this;
    };
    /**
     * Expands the related table.
     * @param  {string|Object[]} tables
     */
    Query.prototype.expand = function (tables) {
        if (typeof tables === 'string') {
            this.expands = [].slice.call([tables], 0);
        }
        else {
            this.expands = tables.slice(0);
        }
        return this;
    };
    /**
     * Filter data with given filter criteria.
     * @param  {string|Predicate} fieldName - Defines the column field or Predicate.
     * @param  {string} operator - Defines the operator how to filter data.
     * @param  {string|number|boolean} value - Defines the values to match with data.
     * @param  {boolean} ignoreCase - If ignore case set to false, then filter data with exact match or else
     * filter data with case insensitive.
     */
    Query.prototype.where = function (fieldName, operator, value, ignoreCase, ignoreAccent) {
        operator = operator ? (operator).toLowerCase() : null;
        var predicate = null;
        if (typeof fieldName === 'string') {
            predicate = new Predicate(fieldName, operator, value, ignoreCase, ignoreAccent);
        }
        else if (fieldName instanceof Predicate) {
            predicate = fieldName;
        }
        this.queries.push({
            fn: 'onWhere',
            e: predicate
        });
        return this;
    };
    /**
     * Search data with given search criteria.
     * @param  {string|number|boolean} searchKey - Defines the search key.
     * @param  {string|string[]} fieldNames - Defines the collection of column fields.
     * @param  {string} operator - Defines the operator how to search data.
     * @param  {boolean} ignoreCase - If ignore case set to false, then filter data with exact match or else
     * filter data with case insensitive.
     */
    Query.prototype.search = function (searchKey, fieldNames, operator, ignoreCase, ignoreAccent) {
        if (typeof fieldNames === 'string') {
            fieldNames = [fieldNames];
        }
        if (!operator || operator === 'none') {
            operator = 'contains';
        }
        var comparer = DataUtil.fnOperators[operator];
        this.queries.push({
            fn: 'onSearch',
            e: {
                fieldNames: fieldNames,
                operator: operator,
                searchKey: searchKey,
                ignoreCase: ignoreCase,
                ignoreAccent: ignoreAccent,
                comparer: comparer
            }
        });
        return this;
    };
    /**
     * Sort the data with given sort criteria.
     * By default, sort direction is ascending.
     * @param  {string|string[]} fieldName - Defines the single or collection of column fields.
     * @param  {string|Function} comparer - Defines the sort direction or custom sort comparer function.
     */
    Query.prototype.sortBy = function (fieldName, comparer, isFromGroup) {
        return this.sortByForeignKey(fieldName, comparer, isFromGroup);
    };
    /**
     * Sort the data with given sort criteria.
     * By default, sort direction is ascending.
     * @param  {string|string[]} fieldName - Defines the single or collection of column fields.
     * @param  {string|Function} comparer - Defines the sort direction or custom sort comparer function.
     * @param  {string} direction - Defines the sort direction .
     */
    Query.prototype.sortByForeignKey = function (fieldName, comparer, isFromGroup, direction) {
        var order = !isNullOrUndefined(direction) ? direction : 'ascending';
        var sorts;
        var temp;
        if (typeof fieldName === 'string' && DataUtil.endsWith(fieldName.toLowerCase(), ' desc')) {
            fieldName = fieldName.replace(/ desc$/i, '');
            comparer = 'descending';
        }
        if (!comparer || typeof comparer === 'string') {
            order = comparer ? comparer.toLowerCase() : 'ascending';
            comparer = DataUtil.fnSort(comparer);
        }
        if (isFromGroup) {
            sorts = Query.filterQueries(this.queries, 'onSortBy');
            for (var i = 0; i < sorts.length; i++) {
                temp = sorts[i].e.fieldName;
                if (typeof temp === 'string') {
                    if (temp === fieldName) {
                        return this;
                    }
                }
                else if (temp instanceof Array) {
                    for (var j = 0; j < temp.length; j++) {
                        if (temp[j] === fieldName || fieldName.toLowerCase() === temp[j] + ' desc') {
                            return this;
                        }
                    }
                }
            }
        }
        this.queries.push({
            fn: 'onSortBy',
            e: {
                fieldName: fieldName,
                comparer: comparer,
                direction: order
            }
        });
        return this;
    };
    /**
     * Sorts data in descending order.
     * @param  {string} fieldName - Defines the column field.
     */
    Query.prototype.sortByDesc = function (fieldName) {
        return this.sortBy(fieldName, 'descending');
    };
    /**
     * Groups data with the given field name.
     * @param  {string} fieldName - Defines the column field.
     */
    Query.prototype.group = function (fieldName, fn, format) {
        this.sortBy(fieldName, null, true);
        this.queries.push({
            fn: 'onGroup',
            e: {
                fieldName: fieldName,
                comparer: fn ? fn : null,
                format: format ? format : null
            }
        });
        return this;
    };
    /**
     * Gets data based on the given page index and size.
     * @param  {number} pageIndex - Defines the current page index.
     * @param  {number} pageSize - Defines the no of records per page.
     */
    Query.prototype.page = function (pageIndex, pageSize) {
        this.queries.push({
            fn: 'onPage',
            e: {
                pageIndex: pageIndex,
                pageSize: pageSize
            }
        });
        return this;
    };
    /**
     * Gets data based on the given start and end index.
     * @param  {number} start - Defines the start index of the datasource.
     * @param  {number} end - Defines the end index of the datasource.
     */
    Query.prototype.range = function (start, end) {
        this.queries.push({
            fn: 'onRange',
            e: {
                start: start,
                end: end
            }
        });
        return this;
    };
    /**
     * Gets data from the top of the data source based on given number of records count.
     * @param  {number} nos - Defines the no of records to retrieve from datasource.
     */
    Query.prototype.take = function (nos) {
        this.queries.push({
            fn: 'onTake',
            e: {
                nos: nos
            }
        });
        return this;
    };
    /**
     * Skips data with given number of records count from the top of the data source.
     * @param  {number} nos - Defines the no of records skip in the datasource.
     */
    Query.prototype.skip = function (nos) {
        this.queries.push({
            fn: 'onSkip',
            e: { nos: nos }
        });
        return this;
    };
    /**
     * Selects specified columns from the data source.
     * @param  {string|string[]} fieldNames - Defines the collection of column fields.
     */
    Query.prototype.select = function (fieldNames) {
        if (typeof fieldNames === 'string') {
            fieldNames = [].slice.call([fieldNames], 0);
        }
        this.queries.push({
            fn: 'onSelect',
            e: { fieldNames: fieldNames }
        });
        return this;
    };
    /**
     * Gets the records in hierarchical relationship from two tables. It requires the foreign key to relate two tables.
     * @param  {Query} query - Defines the query to relate two tables.
     * @param  {Function} selectorFn - Defines the custom function to select records.
     */
    Query.prototype.hierarchy = function (query, selectorFn) {
        this.subQuerySelector = selectorFn;
        this.subQuery = query;
        return this;
    };
    /**
     * Sets the foreign key which is used to get data from the related table.
     * @param  {string} key - Defines the foreign key.
     */
    Query.prototype.foreignKey = function (key) {
        this.fKey = key;
        return this;
    };
    /**
     * It is used to get total number of records in the DataManager execution result.
     */
    Query.prototype.requiresCount = function () {
        this.isCountRequired = true;
        return this;
    };
    //type - sum, avg, min, max
    /**
     * Aggregate the data with given type and field name.
     * @param  {string} type - Defines the aggregate type.
     * @param  {string} field - Defines the column field to aggregate.
     */
    Query.prototype.aggregate = function (type, field) {
        this.queries.push({
            fn: 'onAggregates',
            e: { field: field, type: type }
        });
        return this;
    };
    /**
     * Pass array of filterColumn query for performing filter operation.
     * @param  {QueryOptions[]} queries
     * @param  {string} name
     * @hidden
     */
    Query.filterQueries = function (queries, name) {
        return queries.filter(function (q) {
            return q.fn === name;
        });
    };
    /**
     * To get the list of queries which is already filtered in current data source.
     * @param  {Object[]} queries
     * @param  {string[]} singles
     * @hidden
     */
    Query.filterQueryLists = function (queries, singles) {
        var filtered = queries.filter(function (q) {
            return singles.indexOf(q.fn) !== -1;
        });
        var res = {};
        for (var i = 0; i < filtered.length; i++) {
            if (!res[filtered[i].fn]) {
                res[filtered[i].fn] = filtered[i].e;
            }
        }
        return res;
    };
    return Query;
}());
export { Query };
/**
 * Predicate class is used to generate complex filter criteria.
 * This will be used by DataManager to perform multiple filtering operation.
 */
var Predicate = /** @class */ (function () {
    /**
     * Constructor for Predicate class.
     * @param  {string|Predicate} field
     * @param  {string} operator
     * @param  {string|number|boolean|Predicate|Predicate[]} value
     * @param  {boolean=false} ignoreCase
     * @hidden
     */
    function Predicate(field, operator, value, ignoreCase, ignoreAccent) {
        if (ignoreCase === void 0) { ignoreCase = false; }
        /** @hidden */
        this.ignoreAccent = false;
        /** @hidden */
        this.isComplex = false;
        if (typeof field === 'string') {
            this.field = field;
            this.operator = operator.toLowerCase();
            this.value = value;
            this.ignoreCase = ignoreCase;
            this.ignoreAccent = ignoreAccent;
            this.isComplex = false;
            this.comparer = DataUtil.fnOperators.processOperator(this.operator);
        }
        else if (field instanceof Predicate && value instanceof Predicate || value instanceof Array) {
            this.isComplex = true;
            this.condition = operator.toLowerCase();
            this.predicates = [field];
            if (value instanceof Array) {
                [].push.apply(this.predicates, value);
            }
            else {
                this.predicates.push(value);
            }
        }
        return this;
    }
    /**
     * Adds n-number of new predicates on existing predicate with “and” condition.
     * @param  {Object[]} args - Defines the collection of predicates.
     */
    Predicate.and = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Predicate.combinePredicates([].slice.call(args, 0), 'and');
    };
    /**
     * Adds new predicate on existing predicate with “and” condition.
     * @param  {string} field - Defines the column field.
     * @param  {string} operator - Defines the operator how to filter data.
     * @param  {string} value - Defines the values to match with data.
     * @param  {boolean} ignoreCase? - If ignore case set to false, then filter data with exact match or else
     * filter data with case insensitive.
     */
    Predicate.prototype.and = function (field, operator, value, ignoreCase, ignoreAccent) {
        return Predicate.combine(this, field, operator, value, 'and', ignoreCase, ignoreAccent);
    };
    /**
     * Adds n-number of new predicates on existing predicate with “or” condition.
     * @param  {Object[]} args - Defines the collection of predicates.
     */
    Predicate.or = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Predicate.combinePredicates([].slice.call(args, 0), 'or');
    };
    /**
     * Adds new predicate on existing predicate with “or” condition.
     * @param  {string} field - Defines the column field.
     * @param  {string} operator - Defines the operator how to filter data.
     * @param  {string} value - Defines the values to match with data.
     * @param  {boolean} ignoreCase? - If ignore case set to false, then filter data with exact match or else
     * filter data with case insensitive.
     */
    Predicate.prototype.or = function (field, operator, value, ignoreCase, ignoreAccent) {
        return Predicate.combine(this, field, operator, value, 'or', ignoreCase, ignoreAccent);
    };
    /**
     * Converts plain JavaScript object to Predicate object.
     * @param  {Predicate[]|Predicate} json - Defines single or collection of Predicate.
     */
    Predicate.fromJson = function (json) {
        if (json instanceof Array) {
            var res = [];
            for (var i = 0, len = json.length; i < len; i++) {
                res.push(this.fromJSONData(json[i]));
            }
            return res;
        }
        var pred = json;
        return this.fromJSONData(pred);
    };
    /**
     * Validate the record based on the predicates.
     * @param  {Object} record - Defines the datasource record.
     */
    Predicate.prototype.validate = function (record) {
        var predicate = this.predicates ? this.predicates : [];
        var isAnd;
        var ret;
        if (!this.isComplex && this.comparer) {
            return this.comparer.call(this, DataUtil.getObject(this.field, record), this.value, this.ignoreCase, this.ignoreAccent);
        }
        isAnd = this.condition === 'and';
        for (var i = 0; i < predicate.length; i++) {
            ret = predicate[i].validate(record);
            if (isAnd) {
                if (!ret) {
                    return false;
                }
            }
            else {
                if (ret) {
                    return true;
                }
            }
        }
        return isAnd;
    };
    /**
     * Converts predicates to plain JavaScript.
     * This method is uses Json stringify when serializing Predicate object.
     */
    Predicate.prototype.toJson = function () {
        var predicates;
        var p;
        if (this.isComplex) {
            predicates = [];
            p = this.predicates;
            for (var i = 0; i < p.length; i++) {
                predicates.push(p[i].toJson());
            }
        }
        return {
            isComplex: this.isComplex,
            field: this.field,
            operator: this.operator,
            value: this.value,
            ignoreCase: this.ignoreCase,
            ignoreAccent: this.ignoreAccent,
            condition: this.condition,
            predicates: predicates
        };
    };
    Predicate.combinePredicates = function (predicates, operator) {
        if (predicates.length === 1) {
            if (!(predicates[0] instanceof Array)) {
                return predicates[0];
            }
            predicates = predicates[0];
        }
        return new Predicate(predicates[0], operator, predicates.slice(1));
    };
    Predicate.combine = function (pred, field, operator, value, condition, ignoreCase, ignoreAccent) {
        if (field instanceof Predicate) {
            return Predicate[condition](pred, field);
        }
        if (typeof field === 'string') {
            return Predicate[condition](pred, new Predicate(field, operator, value, ignoreCase, ignoreAccent));
        }
        return DataUtil.throwError('Predicate - ' + condition + ' : invalid arguments');
    };
    Predicate.fromJSONData = function (json) {
        var preds = json.predicates || [];
        var len = preds.length;
        var predicates = [];
        var result;
        for (var i = 0; i < len; i++) {
            predicates.push(this.fromJSONData(preds[i]));
        }
        if (!json.isComplex) {
            result = new Predicate(json.field, json.operator, json.value, json.ignoreCase, json.ignoreAccent);
        }
        else {
            result = new Predicate(predicates[0], json.condition, predicates.slice(1));
        }
        return result;
    };
    return Predicate;
}());
export { Predicate };
