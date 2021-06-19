import { DataManager } from './manager';
import { Query } from './query';
/**
 * Data manager common utility methods.
 * @hidden
 */
export declare class DataUtil {
    /**
     * Specifies the value which will be used to adjust the date value to server timezone.
     * @default null
     */
    static serverTimezoneOffset: number;
    /**
     * Species whether are not to be parsed with serverTimezoneOffset value.
     * @hidden
     */
    static timeZoneHandling: boolean;
    /**
     * Returns the value by invoking the provided parameter function.
     * If the paramater is not of type function then it will be returned as it is.
     * @param  {Function|string|string[]|number} value
     * @param  {Object} inst?
     * @hidden
     */
    static getValue<T>(value: T | Function, inst?: Object): T;
    /**
     * Returns true if the input string ends with given string.
     * @param  {string} input
     * @param  {string} substr
     */
    static endsWith(input: string, substr: string): boolean;
    /**
     * Returns true if the input string starts with given string.
     * @param  {string} str
     * @param  {string} startstr
     */
    static startsWith(input: string, start: string): boolean;
    /**
     * To return the sorting function based on the string.
     * @param  {string} order
     * @hidden
     */
    static fnSort(order: string): Function;
    /**
     * Comparer function which is used to sort the data in ascending order.
     * @param  {string|number} x
     * @param  {string|number} y
     * @returns number
     */
    static fnAscending(x: string | number, y: string | number): number;
    /**
     * Comparer function which is used to sort the data in descending order.
     * @param  {string|number} x
     * @param  {string|number} y
     * @returns number
     */
    static fnDescending(x: string | number, y: string | number): number;
    private static extractFields;
    /**
     * Select objects by given fields from jsonArray.
     * @param  {Object[]} jsonArray
     * @param  {string[]} fields
     */
    static select(jsonArray: Object[], fields: string[]): Object[];
    /**
     * Group the input data based on the field name.
     * It also performs aggregation of the grouped records based on the aggregates paramater.
     * @param  {Object[]} jsonArray
     * @param  {string} field?
     * @param  {Object[]} agg?
     * @param  {number} level?
     * @param  {Object[]} groupDs?
     */
    static group(jsonArray: Object[], field?: string, aggregates?: Object[], level?: number, groupDs?: Object[], format?: Function, isLazyLoad?: boolean): Object[];
    /**
     * It is used to categorize the multiple items based on a specific field in jsonArray.
     * The hierarchical queries are commonly required when you use foreign key binding.
     * @param  {string} fKey
     * @param  {string} from
     * @param  {Object[]} source
     * @param  {Group} lookup?
     * @param  {string} pKey?
     * @hidden
     */
    static buildHierarchy(fKey: string, from: string, source: Group, lookup?: Group, pKey?: string): void;
    /**
     * Throw error with the given string as message.
     * @param  {string} er
     */
    static throwError: Function;
    static aggregates: Aggregates;
    /**
     * The method used to get the field names which started with specified characters.
     * @param  {Object} obj
     * @param  {string[]} fields?
     * @param  {string} prefix?
     * @hidden
     */
    static getFieldList(obj: Object, fields?: string[], prefix?: string): string[];
    /**
     * Gets the value of the property in the given object.
     * The complex object can be accessed by providing the field names concatenated with dot(.).
     * @param  {string} nameSpace - The name of the property to be accessed.
     * @param  {Object} from - Defines the source object.
     */
    static getObject(nameSpace: string, from: Object): Object;
    /**
     * To set value for the nameSpace in desired object.
     * @param {string} nameSpace - String value to the get the inner object.
     * @param {Object} value - Value that you need to set.
     * @param {Object} obj - Object to get the inner object value.
     * @return { [key: string]: Object; } | Object
     * @hidden
     */
    static setValue(nameSpace: string, value: Object | null, obj: Object): {
        [key: string]: Object;
    } | Object;
    /**
     * Sort the given data based on the field and comparer.
     * @param  {Object[]} ds - Defines the input data.
     * @param  {string} field - Defines the field to be sorted.
     * @param  {Function} comparer - Defines the comparer function used to sort the records.
     */
    static sort(ds: Object[], field: string, comparer: Function): Object[];
    static ignoreDiacritics(value: string | number | boolean): string | Object;
    private static merge;
    private static getVal;
    private static toLowerCase;
    /**
     * Specifies the Object with filter operators.
     */
    static operatorSymbols: {
        [key: string]: string;
    };
    /**
     * Specifies the Object with filter operators which will be used for OData filter query generation.
     * * It will be used for date/number type filter query.
     */
    static odBiOperator: {
        [key: string]: string;
    };
    /**
     * Specifies the Object with filter operators which will be used for OData filter query generation.
     * It will be used for string type filter query.
     */
    static odUniOperator: {
        [key: string]: string;
    };
    /**
     * Specifies the Object with filter operators which will be used for ODataV4 filter query generation.
     * It will be used for string type filter query.
     */
    static odv4UniOperator: {
        [key: string]: string;
    };
    static diacritics: {
        [key: string]: string;
    };
    static fnOperators: Operators;
    /**
     * To perform the filter operation with specified adaptor and returns the result.
     * @param  {Object} adaptor
     * @param  {string} fnName
     * @param  {Object} param1?
     * @param  {Object} param2?
     * @hidden
     */
    static callAdaptorFunction(adaptor: Object, fnName: string, param1?: Object, param2?: Object): Object;
    static getAddParams(adp: Object, dm: DataManager, query: Query): Object;
    /**
     * To perform the parse operation on JSON data, like convert to string from JSON or convert to JSON from string.
     */
    static parse: ParseOption;
    /**
     * Checks wheather the given input is a plain object or not.
     * @param  {Object|Object[]} obj
     */
    static isPlainObject(obj: Object | Object[]): boolean;
    /**
     * Returns true when the browser cross origin request.
     */
    static isCors(): boolean;
    /**
     * Generate random GUID value which will be prefixed with the given value.
     * @param  {string} prefix
     */
    static getGuid(prefix: string): string;
    /**
     * Checks wheather the given value is null or not.
     * @param  {string|Object} val
     * @returns boolean
     */
    static isNull(val: string | Object): boolean;
    /**
     * To get the required items from collection of objects.
     * @param  {Object[]} array
     * @param  {string} field
     * @param  {Function} comparer
     * @returns Object
     * @hidden
     */
    static getItemFromComparer(array: Object[], field: string, comparer: Function): Object;
    /**
     * To get distinct values of Array or Array of Objects.
     * @param  {Object[]} json
     * @param  {string} field
     * @param  {boolean} requiresCompleteRecord
     * @returns Object[]
     * * distinct array of objects is return when requiresCompleteRecord set as true.
     * @hidden
     */
    static distinct(json: Object[], fieldName: string, requiresCompleteRecord?: boolean): Object[];
    /**
     * @hidden
     */
    static dateParse: DateParseOption;
}
/**
 * @hidden
 */
export interface Aggregates {
    sum?: Function;
    average?: Function;
    min?: Function;
    max?: Function;
    truecount?: Function;
    falsecount?: Function;
    count?: Function;
    type?: string;
    field?: string;
}
/**
 * @hidden
 */
export interface Operators {
    equal?: Function;
    notequal?: Function;
    lessthan?: Function;
    greaterthan?: Function;
    lessthanorequal?: Function;
    greaterthanorequal?: Function;
    contains?: Function;
    notnull?: Function;
    isnull?: Function;
    startswith?: Function;
    endswith?: Function;
    processSymbols?: Function;
    processOperator?: Function;
}
/**
 * @hidden
 */
export interface Group {
    GroupGuid?: string;
    level?: number;
    childLevels?: number;
    records?: Object[];
    key?: string;
    count?: number;
    items?: Object[];
    aggregates?: Object;
    field?: string;
    result?: Object;
}
/**
 * @hidden
 */
export interface ParseOption {
    parseJson?: Function;
    iterateAndReviveArray?: Function;
    iterateAndReviveJson?: Function;
    jsonReviver?: (key: string, value: Object) => Object;
    isJson?: Function;
    isGuid?: Function;
    replacer?: Function;
    jsonReplacer?: Function;
    arrayReplacer?: Function;
    jsonDateReplacer?: (key: string, value: any) => any;
}
/**
 * @hidden
 */
export interface DateParseOption {
    addSelfOffset?: (input: Date) => Date;
    toUTC?: (input: Date) => Date;
    toTimeZone?: (input: Date, offset?: number, utc?: boolean) => Date;
    toLocalTime?: (input: Date) => string;
}
