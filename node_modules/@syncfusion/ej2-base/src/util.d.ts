/**
 * Common utility methods
 */
export interface IKeyValue extends CSSStyleDeclaration {
    [key: string]: any;
}
/**
 * Function to check whether the platform is blazor or not.
 * @return {boolean} result
 * @private
 */
export declare function disableBlazorMode(): void;
/**
 * Create Instance from constructor function with desired parameters.
 * @param {Function} classFunction - Class function to which need to create instance
 * @param {any[]} params - Parameters need to passed while creating instance
 * @return {any}
 * @private
 */
export declare function createInstance(classFunction: Function, params: any[]): any;
/**
 * To run a callback function immediately after the browser has completed other operations.
 * @param {Function} handler - callback function to be triggered.
 * @return {Function}
 * @private
 */
export declare function setImmediate(handler: Function): Function;
/**
 * To get nameSpace value from the desired object.
 * @param {string} nameSpace - String value to the get the inner object
 * @param {any} obj - Object to get the inner object value.
 * @return {any}
 * @private
 */
export declare function getValue(nameSpace: string, obj: any): any;
/**
 * To set value for the nameSpace in desired object.
 * @param {string} nameSpace - String value to the get the inner object
 * @param {any} value - Value that you need to set.
 * @param {any} obj - Object to get the inner object value.
 * @return {void}
 * @private
 */
export declare function setValue(nameSpace: string, value: any, obj: any): any;
/**
 * Delete an item from Object
 * @param {any} obj - Object in which we need to delete an item.
 * @param {string} params - String value to the get the inner object
 * @return {void}
 * @private
 */
export declare function deleteObject(obj: any, key: string): void;
/**
 * Check weather the given argument is only object.
 * @param {any} obj - Object which is need to check.
 * @return {boolean}
 * @private
 */
export declare function isObject(obj: any): boolean;
/**
 * To get enum value by giving the string.
 * @param {any} enumObject - Enum object.
 * @param {string} enumValue - Enum value to be searched
 * @return {any}
 * @private
 */
export declare function getEnumValue(enumObject: any, enumValue: string | number): any;
/**
 * Merge the source object into destination object.
 * @param {any} source - source object which is going to merge with destination object
 * @param {any} destination - object need to be merged
 * @return {void}
 * @private
 */
export declare function merge(source: Object, destination: Object): void;
/**
 * Extend the two object with newer one.
 * @param {any} copied - Resultant object after merged
 * @param {Object} first - First object need to merge
 * @param {Object} second - Second object need to merge
 * @return {Object}
 * @private
 */
export declare function extend(copied: Object, first: Object, second?: Object, deep?: boolean): Object;
/**
 * To check whether the object is null or undefined.
 * @param {Object} value - To check the object is null or undefined
 * @return {boolean}
 * @private
 */
export declare function isNullOrUndefined(value: Object): boolean;
/**
 * To check whether the object is undefined.
 * @param {Object} value - To check the object is undefined
 * @return {boolean}
 * @private
 */
export declare function isUndefined(value: Object): boolean;
/**
 * To return the generated unique name
 * @param {string} definedName - To concatenate the unique id to provided name
 * @return {string}
 * @private
 */
export declare function getUniqueID(definedName?: string): string;
/**
 * It limits the rate at which a function can fire. The function will fire only once every provided second instead of as quickly.
 * @param {Function} eventFunction - Specifies the function to run when the event occurs
 * @param {number} delay - A number that specifies the milliseconds for function delay call option
 * @return {Function}
 * @private
 */
export declare function debounce(eventFunction: Function, delay: number): Function;
/**
 * To convert the object to string for query url
 * @param  {Object} data
 * @returns string
 * @private
 */
export declare function queryParams(data: any): string;
/**
 * To check whether the given array contains object.
 * @param {T[]} value- Specifies the T type array to be checked.
 * @private
 */
export declare function isObjectArray<T>(value: T[]): boolean;
/**
 * To check whether the  child element is descendant to parent element or parent and child are same element.
 * @param{Element} - Specifies the child element to compare with parent.
 * @param{Element} - Specifies the parent element.
 * @return boolean
 * @private
 */
export declare function compareElementParent(child: Element, parent: Element): boolean;
/**
 * To throw custom error message.
 * @param{string} - Specifies the error message to be thrown.
 * @private
 */
export declare function throwError(message: string): void;
/**
 * This function is used to print given element
 * @param{Element} element - Specifies the print content element.
 * @param{Window} printWindow - Specifies the print window.
 * @private
 */
export declare function print(element: Element, printWindow?: Window): Window;
/**
 * Function to normalize the units applied to the element.
 * @param  {number|string} value
 * @return {string} result
 * @private
 */
export declare function formatUnit(value: number | string): string;
/**
 * Function to check whether the platform is blazor or not.
 * @return {boolean} result
 * @private
 */
export declare function enableBlazorMode(): void;
/**
 * Function to check whether the platform is blazor or not.
 * @return {boolean} result
 * @private
 */
export declare function isBlazor(): boolean;
/**
 * Function to convert xPath to DOM element in blazor platform
 * @return {HTMLElement} result
 * @param {HTMLElement | object} element
 * @private
 */
export declare function getElement(element: object): HTMLElement;
/**
 * Function to fetch the Instances of a HTML element for the given component.
 * @param {string | HTMLElement} element
 * @param {any} component
 * @return {Object} inst
 * @private
 */
export declare function getInstance(element: string | HTMLElement, component: any): Object;
/**
 * Function to add instances for the given element.
 * @param {string | HTMLElement} element
 * @param {Object} instance
 * @return {void}
 * @private
 */
export declare function addInstance(element: string | HTMLElement, instance: Object): void;
/**
 * Function to generate the unique id.
 * @return {any}
 * @private
 */
export declare function uniqueID(): any;
