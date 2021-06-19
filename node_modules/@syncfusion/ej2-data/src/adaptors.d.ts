import { Ajax } from '@syncfusion/ej2-base';
import { Aggregates } from './util';
import { DataManager, DataOptions } from './manager';
import { Query, Predicate, QueryOptions, ParamOption } from './query';
/**
 * Adaptors are specific data source type aware interfaces that are used by DataManager to communicate with DataSource.
 * This is the base adaptor class that other adaptors can extend.
 * @hidden
 */
export declare class Adaptor {
    /**
     * Specifies the datasource option.
     * @default null
     */
    dataSource: DataOptions;
    updateType: string;
    updateKey: string;
    /**
     * It contains the datamanager operations list like group, searches, etc.,
     * @default null
     * @hidden
     */
    pvt: PvtOptions;
    /**
     * Constructor for Adaptor class
     * @param  {DataOptions} ds?
     * @hidden
     * @returns aggregates
     */
    constructor(ds?: DataOptions);
    protected options: RemoteOptions;
    /**
     * Returns the data from the query processing.
     * @param  {Object} data
     * @param  {DataOptions} ds?
     * @param  {Query} query?
     * @param  {XMLHttpRequest} xhr?
     * @returns Object
     */
    processResponse(data: Object, ds?: DataOptions, query?: Query, xhr?: XMLHttpRequest): Object;
    /**
     * Specifies the type of adaptor.
     * @default Adaptor
     */
    type: Object;
}
/**
 * JsonAdaptor is used to process JSON data. It contains methods to process the given JSON data based on the queries.
 * @hidden
 */
export declare class JsonAdaptor extends Adaptor {
    /**
     * Process the JSON data based on the provided queries.
     * @param  {DataManager} dataManager
     * @param  {Query} query
     * @returns Object
     */
    processQuery(dataManager: DataManager, query: Query): Object;
    /**
     * Perform lazy load grouping in JSON array based on the given query and lazy load details.
     * @param  {LazyLoadGroupArgs} args
     */
    lazyLoadGroup(args: LazyLoadGroupArgs): {
        result: Object[];
        count: number;
    };
    private formGroupResult;
    /**
     * Separate the aggregate query from the given queries
     * @param  {Query} query
     */
    getAggregate(query: Query): Object[];
    /**
     * Performs batch update in the JSON array which add, remove and update records.
     * @param  {DataManager} dm
     * @param  {CrudOptions} changes
     * @param  {RemoteArgs} e
     */
    batchRequest(dm: DataManager, changes: CrudOptions, e: RemoteArgs): CrudOptions;
    /**
     * Performs filter operation with the given data and where query.
     * @param  {Object[]} ds
     * @param  {{validate:Function}} e
     */
    onWhere(ds: Object[], e: {
        validate: Function;
    }): Object[];
    /**
     * Returns aggregate function based on the aggregate type.
     * @param  {Object[]} ds
     * @param  {{field:string} e
     * @param  {string}} type
     */
    onAggregates(ds: Object[], e: {
        field: string;
        type: string;
    }): Function;
    /**
     * Performs search operation based on the given query.
     * @param  {Object[]} ds
     * @param  {QueryOptions} e
     */
    onSearch(ds: Object[], e: QueryOptions): Object[];
    /**
     * Sort the data with given direction and field.
     * @param  {Object[]} ds
     * @param  {{comparer:(a:Object} e
     * @param  {Object} b
     */
    onSortBy(ds: Object[], e: {
        comparer: (a: Object, b: Object) => number;
        fieldName: string;
    }, query: Query): Object[];
    /**
     * Group the data based on the given query.
     * @param  {Object[]} ds
     * @param  {QueryOptions} e
     * @param  {Query} query
     */
    onGroup(ds: Object[], e: QueryOptions, query: Query): Object[];
    /**
     * Retrieves records based on the given page index and size.
     * @param  {Object[]} ds
     * @param  {{pageSize:number} e
     * @param  {number}} pageIndex
     * @param  {Query} query
     */
    onPage(ds: Object[], e: {
        pageSize: number;
        pageIndex: number;
    }, query: Query): Object[];
    /**
     * Retrieves records based on the given start and end index from query.
     * @param  {Object[]} ds
     * @param  {{start:number} e
     * @param  {number}} end
     */
    onRange(ds: Object[], e: {
        start: number;
        end: number;
    }): Object[];
    /**
     * Picks the given count of records from the top of the datasource.
     * @param  {Object[]} ds
     * @param  {{nos:number}} e
     */
    onTake(ds: Object[], e: {
        nos: number;
    }): Object[];
    /**
     * Skips the given count of records from the data source.
     * @param  {Object[]} ds
     * @param  {{nos:number}} e
     */
    onSkip(ds: Object[], e: {
        nos: number;
    }): Object[];
    /**
     * Selects specified columns from the data source.
     * @param  {Object[]} ds
     * @param  {{fieldNames:string}} e
     */
    onSelect(ds: Object[], e: {
        fieldNames: string[] | Function;
    }): Object[];
    /**
     * Inserts new record in the table.
     * @param  {DataManager} dm
     * @param  {Object} data
     * @param  {number} position
     */
    insert(dm: DataManager, data: Object, tableName?: string, query?: Query, position?: number): Object;
    /**
     * Remove the data from the dataSource based on the key field value.
     * @param  {DataManager} dm
     * @param  {string} keyField
     * @param  {Object} value
     * @param  {string} tableName?
     * @returns null
     */
    remove(dm: DataManager, keyField: string, value: Object, tableName?: string): Object;
    /**
     * Updates existing record and saves the changes to the table.
     * @param  {DataManager} dm
     * @param  {string} keyField
     * @param  {Object} value
     * @param  {string} tableName?
     * @returns null
     */
    update(dm: DataManager, keyField: string, value: Object, tableName?: string): void;
}
/**
 * URL Adaptor of DataManager can be used when you are required to use remote service to retrieve data.
 * It interacts with server-side for all DataManager Queries and CRUD operations.
 * @hidden
 */
export declare class UrlAdaptor extends Adaptor {
    /**
     * Process the query to generate request body.
     * @param  {DataManager} dm
     * @param  {Query} query
     * @param  {Object[]} hierarchyFilters?
     * @returns p
     */
    processQuery(dm: DataManager, query: Query, hierarchyFilters?: Object[]): Object;
    private getRequestQuery;
    /**
     * Convert the object from processQuery to string which can be added query string.
     * @param  {Object} req
     * @param  {Query} query
     * @param  {DataManager} dm
     */
    convertToQueryString(request: Object, query: Query, dm: DataManager): string;
    /**
     * Return the data from the data manager processing.
     * @param  {DataResult} data
     * @param  {DataOptions} ds?
     * @param  {Query} query?
     * @param  {XMLHttpRequest} xhr?
     * @param  {Object} request?
     * @param  {CrudOptions} changes?
     */
    processResponse(data: DataResult, ds?: DataOptions, query?: Query, xhr?: XMLHttpRequest, request?: Object, changes?: CrudOptions): DataResult;
    private formRemoteGroupedData;
    private getGroupedRecords;
    /**
     * Add the group query to the adaptor`s option.
     * @param  {Object[]} e
     * @returns void
     */
    onGroup(e: QueryOptions[]): QueryOptions[];
    /**
     * Add the aggregate query to the adaptor`s option.
     * @param  {Aggregates[]} e
     * @returns void
     */
    onAggregates(e: Aggregates[]): void;
    /**
     * Prepare the request body based on the newly added, removed and updated records.
     * The result is used by the batch request.
     * @param  {DataManager} dm
     * @param  {CrudOptions} changes
     * @param  {Object} e
     */
    batchRequest(dm: DataManager, changes: CrudOptions, e: Object, query: Query, original?: Object): Object;
    /**
     * Method will trigger before send the request to server side.
     * Used to set the custom header or modify the request options.
     * @param  {DataManager} dm
     * @param  {XMLHttpRequest} request
     * @returns void
     */
    beforeSend(dm: DataManager, request: XMLHttpRequest): void;
    /**
     * Prepare and returns request body which is used to insert a new record in the table.
     * @param  {DataManager} dm
     * @param  {Object} data
     * @param  {string} tableName
     */
    insert(dm: DataManager, data: Object, tableName: string, query: Query): Object;
    /**
     * Prepare and return request body which is used to remove record from the table.
     * @param  {DataManager} dm
     * @param  {string} keyField
     * @param  {number|string} value
     * @param  {string} tableName
     */
    remove(dm: DataManager, keyField: string, value: number | string, tableName: string, query: Query): Object;
    /**
     * Prepare and return request body which is used to update record.
     * @param  {DataManager} dm
     * @param  {string} keyField
     * @param  {Object} value
     * @param  {string} tableName
     */
    update(dm: DataManager, keyField: string, value: Object, tableName: string, query: Query): Object;
    /**
     * To generate the predicate based on the filtered query.
     * @param  {Object[]|string[]|number[]} data
     * @param  {Query} query
     * @hidden
     */
    getFiltersFrom(data: Object[] | string[] | number[], query: Query): Predicate;
    protected getAggregateResult(pvt: PvtOptions, data: DataResult, args: DataResult, groupDs?: Object[], query?: Query): DataResult;
    protected getQueryRequest(query: Query): Requests;
    addParams(options: {
        dm: DataManager;
        query: Query;
        params: ParamOption[];
        reqParams: {
            [key: string]: Object;
        };
    }): void;
}
/**
 * OData Adaptor that is extended from URL Adaptor, is used for consuming data through OData Service.
 * @hidden
 */
export declare class ODataAdaptor extends UrlAdaptor {
    protected getModuleName(): string;
    /**
     * Specifies the root url of the provided odata url.
     * @hidden
     * @default null
     */
    rootUrl: string;
    /**
     * Specifies the resource name of the provided odata table.
     * @hidden
     * @default null
     */
    resourceTableName: string;
    protected options: RemoteOptions;
    constructor(props?: RemoteOptions);
    /**
     * Generate request string based on the filter criteria from query.
     * @param  {Predicate} pred
     * @param  {boolean} requiresCast?
     */
    onPredicate(predicate: Predicate, query: Query | boolean, requiresCast?: boolean): string;
    addParams(options: {
        dm: DataManager;
        query: Query;
        params: ParamOption[];
        reqParams: {
            [key: string]: Object;
        };
    }): void;
    /**
     * Generate request string based on the multiple filter criteria from query.
     * @param  {Predicate} pred
     * @param  {boolean} requiresCast?
     */
    onComplexPredicate(predicate: Predicate, query: Query, requiresCast?: boolean): string;
    /**
     * Generate query string based on the multiple filter criteria from query.
     * @param  {Predicate} filter
     * @param  {boolean} requiresCast?
     */
    onEachWhere(filter: Predicate, query: Query, requiresCast?: boolean): string;
    /**
     * Generate query string based on the multiple filter criteria from query.
     * @param  {string[]} filters
     */
    onWhere(filters: string[]): string;
    /**
     * Generate query string based on the multiple search criteria from query.
     * @param  {{fields:string[]} e
     * @param  {string} operator
     * @param  {string} key
     * @param  {boolean}} ignoreCase
     */
    onEachSearch(e: {
        fields: string[];
        operator: string;
        key: string;
        ignoreCase: boolean;
    }): void;
    /**
     * Generate query string based on the search criteria from query.
     * @param  {Object} e
     */
    onSearch(e: Object): string;
    /**
     * Generate query string based on multiple sort criteria from query.
     * @param  {QueryOptions} e
     */
    onEachSort(e: QueryOptions): string;
    /**
     * Returns sort query string.
     * @param  {string[]} e
     */
    onSortBy(e: string[]): string;
    /**
     * Adds the group query to the adaptor option.
     * @param  {Object[]} e
     * @returns string
     */
    onGroup(e: QueryOptions[]): QueryOptions[];
    /**
     * Returns the select query string.
     * @param  {string[]} e
     */
    onSelect(e: string[]): string;
    /**
     * Add the aggregate query to the adaptor option.
     * @param  {Object[]} e
     * @returns string
     */
    onAggregates(e: Object[]): string;
    /**
     * Returns the query string which requests total count from the data source.
     * @param  {boolean} e
     * @returns string
     */
    onCount(e: boolean): string;
    /**
     * Method will trigger before send the request to server side.
     * Used to set the custom header or modify the request options.
     * @param  {DataManager} dm
     * @param  {XMLHttpRequest} request
     * @param  {Ajax} settings?
     */
    beforeSend(dm: DataManager, request: XMLHttpRequest, settings?: Ajax): void;
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
    processResponse(data: DataResult, ds?: DataOptions, query?: Query, xhr?: XMLHttpRequest, request?: Ajax, changes?: CrudOptions): Object;
    /**
     * Converts the request object to query string.
     * @param  {Object} req
     * @param  {Query} query
     * @param  {DataManager} dm
     * @returns tableName
     */
    convertToQueryString(request: Object, query: Query, dm: DataManager): string;
    private localTimeReplacer;
    /**
     * Prepare and returns request body which is used to insert a new record in the table.
     * @param  {DataManager} dm
     * @param  {Object} data
     * @param  {string} tableName?
     */
    insert(dm: DataManager, data: Object, tableName?: string): Object;
    /**
     * Prepare and return request body which is used to remove record from the table.
     * @param  {DataManager} dm
     * @param  {string} keyField
     * @param  {number} value
     * @param  {string} tableName?
     */
    remove(dm: DataManager, keyField: string, value: number, tableName?: string): Object;
    /**
     * Updates existing record and saves the changes to the table.
     * @param  {DataManager} dm
     * @param  {string} keyField
     * @param  {Object} value
     * @param  {string} tableName?
     * @returns this
     */
    update(dm: DataManager, keyField: string, value: Object, tableName?: string, query?: Query, original?: Object): Object;
    /**
     * Prepare the request body based on the newly added, removed and updated records.
     * The result is used by the batch request.
     * @param  {DataManager} dm
     * @param  {CrudOptions} changes
     * @param  {RemoteArgs} e
     * @returns {Object}
     */
    batchRequest(dm: DataManager, changes: CrudOptions, e: RemoteArgs, query: Query, original?: CrudOptions): Object;
    /**
     * Generate the string content from the removed records.
     * The result will be send during batch update.
     * @param  {Object[]} arr
     * @param  {RemoteArgs} e
     * @returns this
     */
    generateDeleteRequest(arr: Object[], e: RemoteArgs, dm: DataManager): string;
    /**
     * Generate the string content from the inserted records.
     * The result will be send during batch update.
     * @param  {Object[]} arr
     * @param  {RemoteArgs} e
     */
    generateInsertRequest(arr: Object[], e: RemoteArgs, dm: DataManager): string;
    /**
     * Generate the string content from the updated records.
     * The result will be send during batch update.
     * @param  {Object[]} arr
     * @param  {RemoteArgs} e
     */
    generateUpdateRequest(arr: Object[], e: RemoteArgs, dm: DataManager, org?: Object[]): string;
    protected static getField(prop: string): string;
    private generateBodyContent;
    protected processBatchResponse(data: DataResult, query?: Query, xhr?: XMLHttpRequest, request?: Ajax, changes?: CrudOptions): CrudOptions | DataResult;
    compareAndRemove(data: Object, original: Object, key?: string): Object;
}
/**
 * The OData v4 is an improved version of OData protocols.
 * The DataManager uses the ODataV4Adaptor to consume OData v4 services.
 * @hidden
 */
export declare class ODataV4Adaptor extends ODataAdaptor {
    /**
     * @hidden
     */
    protected getModuleName(): string;
    protected options: RemoteOptions;
    constructor(props?: RemoteOptions);
    /**
     * Returns the query string which requests total count from the data source.
     * @param  {boolean} e
     * @returns string
     */
    onCount(e: boolean): string;
    /**
     * Generate request string based on the filter criteria from query.
     * @param  {Predicate} pred
     * @param  {boolean} requiresCast?
     */
    onPredicate(predicate: Predicate, query: Query | boolean, requiresCast?: boolean): string;
    /**
     *  Generate query string based on the multiple search criteria from query.
     * @param  {{fields:string[]} e
     * @param  {string} operator
     * @param  {string} key
     * @param  {boolean}} ignoreCase
     */
    onEachSearch(e: {
        fields: string[];
        operator: string;
        key: string;
        ignoreCase: boolean;
    }): void;
    /**
     *  Generate query string based on the search criteria from query.
     * @param  {Object} e
     */
    onSearch(e: Object): string;
    /**
     * Returns the expand query string.
     * @param  {string} e
     */
    onExpand(e: {
        selects: string[];
        expands: string[];
    }): string;
    /**
     * Returns the groupby query string.
     * @param  {string} e
     */
    onDistinct(distinctFields: string[]): Object;
    /**
     * Returns the select query string.
     * @param  {string[]} e
     */
    onSelect(e: string[]): string;
    /**
     * Method will trigger before send the request to server side.
     * Used to set the custom header or modify the request options.
     * @param  {DataManager} dm
     * @param  {XMLHttpRequest} request
     * @param  {Ajax} settings
     * @returns void
     */
    beforeSend(dm: DataManager, request: XMLHttpRequest, settings: Ajax): void;
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
    processResponse(data: DataResult, ds?: DataOptions, query?: Query, xhr?: XMLHttpRequest, request?: Ajax, changes?: CrudOptions): Object;
}
/**
 * The Web API is a programmatic interface to define the request and response messages system that is mostly exposed in JSON or XML.
 * The DataManager uses the WebApiAdaptor to consume Web API.
 * Since this adaptor is targeted to interact with Web API created using OData endpoint, it is extended from ODataAdaptor
 * @hidden
 */
export declare class WebApiAdaptor extends ODataAdaptor {
    protected getModuleName(): string;
    /**
     * Prepare and returns request body which is used to insert a new record in the table.
     * @param  {DataManager} dm
     * @param  {Object} data
     * @param  {string} tableName?
     */
    insert(dm: DataManager, data: Object, tableName?: string): Object;
    /**
     * Prepare and return request body which is used to remove record from the table.
     * @param  {DataManager} dm
     * @param  {string} keyField
     * @param  {number} value
     * @param  {string} tableName?
     */
    remove(dm: DataManager, keyField: string, value: number, tableName?: string): Object;
    /**
     * Prepare and return request body which is used to update record.
     * @param  {DataManager} dm
     * @param  {string} keyField
     * @param  {Object} value
     * @param  {string} tableName?
     */
    update(dm: DataManager, keyField: string, value: Object, tableName?: string): Object;
    batchRequest(dm: DataManager, changes: CrudOptions, e: RemoteArgs): Object;
    /**
     * Method will trigger before send the request to server side.
     * Used to set the custom header or modify the request options.
     * @param  {DataManager} dm
     * @param  {XMLHttpRequest} request
     * @param  {Ajax} settings
     * @returns void
     */
    beforeSend(dm: DataManager, request: XMLHttpRequest, settings: Ajax): void;
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
    processResponse(data: DataResult, ds?: DataOptions, query?: Query, xhr?: XMLHttpRequest, request?: Ajax, changes?: CrudOptions): Object;
}
/**
 * WebMethodAdaptor can be used by DataManager to interact with web method.
 * @hidden
 */
export declare class WebMethodAdaptor extends UrlAdaptor {
    /**
     * Prepare the request body based on the query.
     * The query information can be accessed at the WebMethod using variable named `value`.
     * @param  {DataManager} dm
     * @param  {Query} query
     * @param  {Object[]} hierarchyFilters?
     * @returns application
     */
    processQuery(dm: DataManager, query: Query, hierarchyFilters?: Object[]): Object;
}
/**
 * RemoteSaveAdaptor, extended from JsonAdaptor and it is used for binding local data and performs all DataManager queries in client-side.
 * It interacts with server-side only for CRUD operations.
 * @hidden
 */
export declare class RemoteSaveAdaptor extends JsonAdaptor {
    /**
     * @hidden
     */
    constructor();
    insert(dm: DataManager, data: Object, tableName: string, query: Query, position?: number): Object;
    remove(dm: DataManager, keyField: string, val: Object, tableName?: string, query?: Query): Object;
    update(dm: DataManager, keyField: string, val: Object, tableName: string, query?: Query): Object;
    processResponse(data: CrudOptions, ds?: DataOptions, query?: Query, xhr?: XMLHttpRequest, request?: Ajax, changes?: CrudOptions, e?: RemoteArgs): Object;
    /**
     * Prepare the request body based on the newly added, removed and updated records.
     * Also perform the changes in the locally cached data to sync with the remote data.
     * The result is used by the batch request.
     * @param  {DataManager} dm
     * @param  {CrudOptions} changes
     * @param  {RemoteArgs} e
     */
    batchRequest(dm: DataManager, changes: CrudOptions, e: RemoteArgs, query?: Query, original?: Object): Object;
    addParams(options: {
        dm: DataManager;
        query: Query;
        params: ParamOption[];
        reqParams: {
            [key: string]: Object;
        };
    }): void;
}
/**
 * Ajax Adaptor that is extended from URL Adaptor, is used for handle data operations with user defined functions.
 * @hidden
 */
export declare class CustomDataAdaptor extends UrlAdaptor {
    protected getModuleName(): string;
    protected options: RemoteOptions;
    constructor(props?: RemoteOptions);
}
/**
 * Cache Adaptor is used to cache the data of the visited pages. It prevents new requests for the previously visited pages.
 * You can configure cache page size and duration of caching by using cachingPageSize and timeTillExpiration properties of the DataManager
 * @hidden
 */
export declare class CacheAdaptor extends UrlAdaptor {
    private cacheAdaptor;
    private pageSize;
    private guidId;
    private isCrudAction;
    private isInsertAction;
    /**
     * Constructor for CacheAdaptor class.
     * @param  {CacheAdaptor} adaptor?
     * @param  {number} timeStamp?
     * @param  {number} pageSize?
     * @hidden
     */
    constructor(adaptor?: CacheAdaptor, timeStamp?: number, pageSize?: number);
    /**
     * It will generate the key based on the URL when we send a request to server.
     * @param  {string} url
     * @param  {Query} query?
     * @hidden
     */
    generateKey(url: string, query: Query): string;
    /**
     * Process the query to generate request body.
     * If the data is already cached, it will return the cached data.
     * @param  {DataManager} dm
     * @param  {Query} query?
     * @param  {Object[]} hierarchyFilters?
     */
    processQuery(dm: DataManager, query?: Query, hierarchyFilters?: Object[]): Object;
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
    processResponse(data: DataResult, ds?: DataManager, query?: Query, xhr?: XMLHttpRequest, request?: Ajax, changes?: CrudOptions): DataResult;
    /**
     * Method will trigger before send the request to server side. Used to set the custom header or modify the request options.
     * @param  {DataManager} dm
     * @param  {XMLHttpRequest} request
     * @param  {Ajax} settings?
     */
    beforeSend(dm: DataManager, request: XMLHttpRequest, settings?: Ajax): void;
    /**
     * Updates existing record and saves the changes to the table.
     * @param  {DataManager} dm
     * @param  {string} keyField
     * @param  {Object} value
     * @param  {string} tableName
     */
    update(dm: DataManager, keyField: string, value: Object, tableName: string): Object;
    /**
     * Prepare and returns request body which is used to insert a new record in the table.
     * @param  {DataManager} dm
     * @param  {Object} data
     * @param  {string} tableName?
     */
    insert(dm: DataManager, data: Object, tableName?: string): Object;
    /**
     * Prepare and return request body which is used to remove record from the table.
     * @param  {DataManager} dm
     * @param  {string} keyField
     * @param  {Object} value
     * @param  {string} tableName?
     */
    remove(dm: DataManager, keyField: string, value: Object, tableName?: string): Object[];
    /**
     * Prepare the request body based on the newly added, removed and updated records.
     * The result is used by the batch request.
     * @param  {DataManager} dm
     * @param  {CrudOptions} changes
     * @param  {RemoteArgs} e
     */
    batchRequest(dm: DataManager, changes: CrudOptions, e: RemoteArgs): CrudOptions;
}
/**
 * @hidden
 */
export interface CrudOptions {
    changedRecords?: Object[];
    addedRecords?: Object[];
    deletedRecords?: Object[];
    changed?: Object[];
    added?: Object[];
    deleted?: Object[];
    action?: string;
    table?: string;
    key?: string;
}
/**
 * @hidden
 */
export interface PvtOptions {
    groups?: QueryOptions[];
    aggregates?: Aggregates[];
    search?: Object | Predicate;
    changeSet?: number;
    searches?: Object[];
    position?: number;
}
/**
 * @hidden
 */
export interface DataResult {
    nodeType?: number;
    addedRecords?: Object[];
    d?: DataResult | Object[];
    Count?: number;
    count?: number;
    result?: Object;
    results?: Object[] | DataResult;
    aggregate?: DataResult;
    aggregates?: Aggregates;
    value?: Object;
    Items?: Object[] | DataResult;
    keys?: string[];
    groupDs?: Object[];
}
/**
 * @hidden
 */
export interface Requests {
    sorts: QueryOptions[];
    groups: QueryOptions[];
    filters: QueryOptions[];
    searches: QueryOptions[];
    aggregates: QueryOptions[];
}
/**
 * @hidden
 */
export interface RemoteArgs {
    guid?: string;
    url?: string;
    key?: string;
    cid?: number;
    cSet?: string;
}
/**
 * @hidden
 */
export interface RemoteOptions {
    from?: string;
    requestType?: string;
    sortBy?: string;
    select?: string;
    skip?: string;
    group?: string;
    take?: string;
    search?: string;
    count?: string;
    where?: string;
    aggregates?: string;
    expand?: string;
    accept?: string;
    multipartAccept?: string;
    batch?: string;
    changeSet?: string;
    batchPre?: string;
    contentId?: string;
    batchContent?: string;
    changeSetContent?: string;
    batchChangeSetContentType?: string;
    updateType?: string;
    localTime?: boolean;
    apply?: string;
    getData?: Function;
    updateRecord?: Function;
    addRecord?: Function;
    deleteRecord?: Function;
    batchUpdate?: Function;
}
/**
 * @hidden
 */
export interface LazyLoad {
    isLazyLoad: boolean;
    onDemandGroupInfo: OnDemandGroupInfo;
}
/**
 * @hidden
 */
export interface OnDemandGroupInfo {
    level: number;
    skip: number;
    take: number;
    where: Predicate[];
}
/**
 * @hidden
 */
export interface LazyLoadGroupArgs {
    query: Query;
    lazyLoad: LazyLoad;
    result: Object[];
    group: Object[];
    page: {
        pageIndex: number;
        pageSize: number;
    };
}
