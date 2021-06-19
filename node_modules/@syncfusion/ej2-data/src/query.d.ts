import { DataManager } from './manager';
import { NumberFormatOptions, DateFormatOptions } from '@syncfusion/ej2-base';
/**
 * Query class is used to build query which is used by the DataManager to communicate with datasource.
 */
export declare class Query {
    /** @hidden */
    queries: QueryOptions[];
    /** @hidden */
    key: string;
    /** @hidden */
    fKey: string;
    /** @hidden */
    fromTable: string;
    /** @hidden */
    lookups: string[];
    /** @hidden */
    expands: Object[];
    /** @hidden */
    sortedColumns: Object[];
    /** @hidden */
    groupedColumns: Object[];
    /** @hidden */
    subQuerySelector: Function;
    /** @hidden */
    subQuery: Query;
    /** @hidden */
    isChild: boolean;
    /** @hidden */
    params: ParamOption[];
    /** @hidden */
    lazyLoad: {
        key: string;
        value: object | boolean;
    }[];
    /** @hidden */
    isCountRequired: boolean;
    /** @hidden */
    dataManager: DataManager;
    /** @hidden */
    distincts: string[];
    /**
     * Constructor for Query class.
     * @param  {string|string[]} from?
     * @hidden
     */
    constructor(from?: string | string[]);
    /**
     * Sets the primary key.
     * @param  {string} field - Defines the column field.
     */
    setKey(field: string): Query;
    /**
     * Sets default DataManager to execute query.
     * @param  {DataManager} dataManager - Defines the DataManager.
     */
    using(dataManager: DataManager): Query;
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
    execute(dataManager?: DataManager, done?: Function, fail?: Function, always?: Function): Promise<Object>;
    /**
     * Executes query with the local datasource.
     * @param  {DataManager} dataManager - Defines the DataManager.
     */
    executeLocal(dataManager?: DataManager): Object[];
    /**
     * Creates deep copy of the Query object.
     */
    clone(): Query;
    /**
     * Specifies the name of table to retrieve data in query execution.
     * @param  {string} tableName - Defines the table name.
     */
    from(tableName: string): Query;
    /**
     * Adds additional parameter which will be sent along with the request which will be generated while DataManager execute.
     * @param  {string} key - Defines the key of additional parameter.
     * @param  {Function|string} value - Defines the value for the key.
     */
    addParams(key: string, value: Function | string | null): Query;
    /**
     * @hidden
     */
    distinct(fields: string | string[]): Query;
    /**
     * Expands the related table.
     * @param  {string|Object[]} tables
     */
    expand(tables: string | Object[]): Query;
    /**
     * Filter data with given filter criteria.
     * @param  {string|Predicate} fieldName - Defines the column field or Predicate.
     * @param  {string} operator - Defines the operator how to filter data.
     * @param  {string|number|boolean} value - Defines the values to match with data.
     * @param  {boolean} ignoreCase - If ignore case set to false, then filter data with exact match or else
     * filter data with case insensitive.
     */
    where(fieldName: string | Predicate | Predicate[], operator?: string, value?: string | Date | number | boolean | null, ignoreCase?: boolean, ignoreAccent?: boolean): Query;
    /**
     * Search data with given search criteria.
     * @param  {string|number|boolean} searchKey - Defines the search key.
     * @param  {string|string[]} fieldNames - Defines the collection of column fields.
     * @param  {string} operator - Defines the operator how to search data.
     * @param  {boolean} ignoreCase - If ignore case set to false, then filter data with exact match or else
     * filter data with case insensitive.
     */
    search(searchKey: string | number | boolean, fieldNames?: string | string[], operator?: string, ignoreCase?: boolean, ignoreAccent?: boolean): Query;
    /**
     * Sort the data with given sort criteria.
     * By default, sort direction is ascending.
     * @param  {string|string[]} fieldName - Defines the single or collection of column fields.
     * @param  {string|Function} comparer - Defines the sort direction or custom sort comparer function.
     */
    sortBy(fieldName: string | string[], comparer?: string | Function, isFromGroup?: boolean): Query;
    /**
     * Sort the data with given sort criteria.
     * By default, sort direction is ascending.
     * @param  {string|string[]} fieldName - Defines the single or collection of column fields.
     * @param  {string|Function} comparer - Defines the sort direction or custom sort comparer function.
     * @param  {string} direction - Defines the sort direction .
     */
    sortByForeignKey(fieldName: string | string[], comparer?: string | Function, isFromGroup?: boolean, direction?: string): Query;
    /**
     * Sorts data in descending order.
     * @param  {string} fieldName - Defines the column field.
     */
    sortByDesc(fieldName: string): Query;
    /**
     * Groups data with the given field name.
     * @param  {string} fieldName - Defines the column field.
     */
    group(fieldName: string, fn?: Function, format?: string | NumberFormatOptions | DateFormatOptions): Query;
    /**
     * Gets data based on the given page index and size.
     * @param  {number} pageIndex - Defines the current page index.
     * @param  {number} pageSize - Defines the no of records per page.
     */
    page(pageIndex: number, pageSize: number): Query;
    /**
     * Gets data based on the given start and end index.
     * @param  {number} start - Defines the start index of the datasource.
     * @param  {number} end - Defines the end index of the datasource.
     */
    range(start: number, end: number): Query;
    /**
     * Gets data from the top of the data source based on given number of records count.
     * @param  {number} nos - Defines the no of records to retrieve from datasource.
     */
    take(nos: number): Query;
    /**
     * Skips data with given number of records count from the top of the data source.
     * @param  {number} nos - Defines the no of records skip in the datasource.
     */
    skip(nos: number): Query;
    /**
     * Selects specified columns from the data source.
     * @param  {string|string[]} fieldNames - Defines the collection of column fields.
     */
    select(fieldNames: string | string[]): Query;
    /**
     * Gets the records in hierarchical relationship from two tables. It requires the foreign key to relate two tables.
     * @param  {Query} query - Defines the query to relate two tables.
     * @param  {Function} selectorFn - Defines the custom function to select records.
     */
    hierarchy(query: Query, selectorFn: Function): Query;
    /**
     * Sets the foreign key which is used to get data from the related table.
     * @param  {string} key - Defines the foreign key.
     */
    foreignKey(key: string): Query;
    /**
     * It is used to get total number of records in the DataManager execution result.
     */
    requiresCount(): Query;
    /**
     * Aggregate the data with given type and field name.
     * @param  {string} type - Defines the aggregate type.
     * @param  {string} field - Defines the column field to aggregate.
     */
    aggregate(type: string, field: string): Query;
    /**
     * Pass array of filterColumn query for performing filter operation.
     * @param  {QueryOptions[]} queries
     * @param  {string} name
     * @hidden
     */
    static filterQueries(queries: QueryOptions[], name: string): QueryOptions[];
    /**
     * To get the list of queries which is already filtered in current data source.
     * @param  {Object[]} queries
     * @param  {string[]} singles
     * @hidden
     */
    static filterQueryLists(queries: Object[], singles: string[]): Object;
}
/**
 * Predicate class is used to generate complex filter criteria.
 * This will be used by DataManager to perform multiple filtering operation.
 */
export declare class Predicate {
    /** @hidden */
    field: string;
    /** @hidden */
    operator: string;
    /** @hidden */
    value: string | number | Date | boolean | Predicate | Predicate[] | null;
    /** @hidden */
    condition: string;
    /** @hidden */
    ignoreCase: boolean;
    /** @hidden */
    ignoreAccent: boolean;
    /** @hidden */
    isComplex: boolean;
    /** @hidden */
    predicates: Predicate[];
    /** @hidden */
    comparer: Function;
    [x: string]: string | number | Date | boolean | Predicate | Predicate[] | Function | null;
    /**
     * Constructor for Predicate class.
     * @param  {string|Predicate} field
     * @param  {string} operator
     * @param  {string|number|boolean|Predicate|Predicate[]} value
     * @param  {boolean=false} ignoreCase
     * @hidden
     */
    constructor(field: string | Predicate, operator: string, value: string | number | Date | boolean | Predicate | Predicate[] | null, ignoreCase?: boolean, ignoreAccent?: boolean);
    /**
     * Adds n-number of new predicates on existing predicate with “and” condition.
     * @param  {Object[]} args - Defines the collection of predicates.
     */
    static and(...args: Object[]): Predicate;
    /**
     * Adds new predicate on existing predicate with “and” condition.
     * @param  {string} field - Defines the column field.
     * @param  {string} operator - Defines the operator how to filter data.
     * @param  {string} value - Defines the values to match with data.
     * @param  {boolean} ignoreCase? - If ignore case set to false, then filter data with exact match or else
     * filter data with case insensitive.
     */
    and(field: string | Predicate, operator?: string, value?: string | number | Date | null, ignoreCase?: boolean, ignoreAccent?: boolean): Predicate;
    /**
     * Adds n-number of new predicates on existing predicate with “or” condition.
     * @param  {Object[]} args - Defines the collection of predicates.
     */
    static or(...args: Object[]): Predicate;
    /**
     * Adds new predicate on existing predicate with “or” condition.
     * @param  {string} field - Defines the column field.
     * @param  {string} operator - Defines the operator how to filter data.
     * @param  {string} value - Defines the values to match with data.
     * @param  {boolean} ignoreCase? - If ignore case set to false, then filter data with exact match or else
     * filter data with case insensitive.
     */
    or(field: string | Predicate, operator?: string, value?: string | number | Date | null, ignoreCase?: boolean, ignoreAccent?: boolean): Predicate;
    /**
     * Converts plain JavaScript object to Predicate object.
     * @param  {Predicate[]|Predicate} json - Defines single or collection of Predicate.
     */
    static fromJson(json: Predicate[] | Predicate): Predicate[];
    /**
     * Validate the record based on the predicates.
     * @param  {Object} record - Defines the datasource record.
     */
    validate(record: Object): boolean;
    /**
     * Converts predicates to plain JavaScript.
     * This method is uses Json stringify when serializing Predicate object.
     */
    toJson(): Object;
    private static combinePredicates;
    private static combine;
    private static fromJSONData;
}
/**
 * @hidden
 */
export interface QueryOptions {
    fn?: string;
    e?: QueryOptions;
    fieldNames?: string | string[];
    operator?: string;
    searchKey?: string | number | boolean;
    ignoreCase?: boolean;
    ignoreAccent?: boolean;
    comparer?: string | Function;
    format?: string | NumberFormatOptions | DateFormatOptions;
    direction?: string;
    pageIndex?: number;
    pageSize?: number;
    start?: number;
    end?: number;
    nos?: number;
    field?: string;
    fieldName?: string;
    type?: Object;
    name?: string | string[];
    filter?: Object;
    key?: string;
    value?: string | number | Date | boolean | Predicate | Predicate[];
    isComplex?: boolean;
    predicates?: Predicate[];
    condition?: string;
}
/**
 * @hidden
 */
export interface QueryList {
    onSelect?: QueryOptions;
    onPage?: QueryOptions;
    onSkip?: QueryOptions;
    onTake?: QueryOptions;
    onRange?: QueryOptions;
}
/**
 * @hidden
 */
export interface ParamOption {
    key: string;
    value?: string | null;
    fn?: Function;
}
