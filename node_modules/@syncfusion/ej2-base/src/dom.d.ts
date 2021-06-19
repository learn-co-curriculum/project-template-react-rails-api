import { VirtualObject } from './virtual-dom';
export interface ElementProperties {
    id?: string;
    className?: string;
    innerHTML?: string;
    styles?: string;
    attrs?: {
        [key: string]: string;
    };
}
/**
 * Function to create Html element.
 * @param tagName - Name of the tag, id and class names.
 * @param properties - Object to set properties in the element.
 * @param properties.id - To set the id to the created element.
 * @param properties.className - To add classes to the element.
 * @param properties.innerHTML - To set the innerHTML to element.
 * @param properties.styles - To set the some custom styles to element.
 * @param properties.attrs - To set the attributes to element.
 * @private
 */
export declare function createElement(tagName: string, properties?: ElementProperties): HTMLElement;
/**
 * The function used to add the classes to array of elements
 * @param  {Element[]|NodeList} elements - An array of elements that need to add a list of classes
 * @param  {string|string[]} classes - String or array of string that need to add an individual element as a class
 * @private
 */
export declare function addClass(elements: Element[] | NodeList, classes: string | string[]): Element[] | NodeList;
/**
 * The function used to add the classes to array of elements
 * @param  {Element[]|NodeList} elements - An array of elements that need to remove a list of classes
 * @param  {string|string[]} classes - String or array of string that need to add an individual element as a class
 * @private
 */
export declare function removeClass(elements: Element[] | NodeList, classes: string | string[]): Element[] | NodeList;
/**
 * The function used to check element is visible or not.
 * @param  {Element|Node} element - An element the need to check visibility
 * @private
 */
export declare function isVisible(element: Element | Node): Boolean;
/**
 * The function used to insert an array of elements into a first of the element.
 * @param  {Element[]|NodeList} fromElements - An array of elements that need to prepend.
 * @param  {Element} toElement - An element that is going to prepend.
 * @private
 */
export declare function prepend(fromElements: Element[] | NodeList, toElement: Element, isEval?: Boolean): Element[] | NodeList;
/**
 * The function used to insert an array of elements into last of the element.
 * @param  {Element[]|NodeList} fromElements - An array of elements that need to append.
 * @param  {Element} toElement - An element that is going to prepend.
 * @private
 */
export declare function append(fromElements: Element[] | NodeList, toElement: Element, isEval?: Boolean): Element[] | NodeList;
/**
 * The function used to remove the element from the
 * @param  {Element|Node|HTMLElement} element - An element that is going to detach from the Dom
 * @private
 */
export declare function detach(element: Element | Node | HTMLElement): any;
/**
 * The function used to remove the element from Dom also clear the bounded events
 * @param  {Element|Node|HTMLElement} element - An element remove from the Dom
 * @private
 */
export declare function remove(element: Element | Node | HTMLElement): void;
/**
 * The function helps to set multiple attributes to an element
 * @param  {Element|Node} element - An element that need to set attributes.
 * @param  {{[key:string]:string}} attributes - JSON Object that is going to as attributes.
 * @private
 */
export declare function attributes(element: Element | Node | any, attributes: {
    [key: string]: string;
}): Element;
/**
 * The function selects the element from giving context.
 * @param  {string} selector - Selector string need fetch element from the
 * @param  {Document|Element=document} context - It is an optional type, That specifies a Dom context.
 * @private
 */
export declare function select(selector: string, context?: Document | Element, needsVDOM?: boolean): any;
/**
 * The function selects an array of element from the given context.
 * @param  {string} selector - Selector string need fetch element from the
 * @param  {Document|Element=document} context - It is an optional type, That specifies a Dom context.
 * @private
 */
export declare function selectAll(selector: string, context?: Document | Element, needsVDOM?: boolean): HTMLElement[];
/**
 * Returns single closest parent element based on class selector.
 * @param  {Element} element - An element that need to find the closest element.
 * @param  {string} selector - A classSelector of closest element.
 * @private
 */
export declare function closest(element: Element | Node, selector: string): Element;
/**
 * Returns all sibling elements of the given element.
 * @param  {Element|Node} element - An element that need to get siblings.
 * @private
 */
export declare function siblings(element: Element | Node): Element[];
/**
 * set the value if not exist. Otherwise set the existing value
 * @param  {HTMLElement} element - An element to which we need to set value.
 * @param  {string} property - Property need to get or set.
 * @param  {string} value - value need to set.
 * @private
 */
export declare function getAttributeOrDefault(element: HTMLElement, property: string, value: string): string;
/**
 * Set the style attributes to Html element.
 * @param {HTMLElement} element - Element which we want to set attributes
 * @param {any} attrs - Set the given attributes to element
 * @return {void}
 * @private
 */
export declare function setStyleAttribute(element: HTMLElement, attrs: {
    [key: string]: Object;
}): void;
/**
 * Method for add and remove classes to a dom element.
 * @param {Element} element - Element for add and remove classes
 * @param {string[]} addClasses - List of classes need to be add to the element
 * @param {string[]} removeClasses - List of classes need to be remove from the element
 * @return {void}
 * @private
 */
export declare function classList(element: Element, addClasses: string[], removeClasses: string[]): void;
/**
 * Method to check whether the element matches the given selector.
 * @param {Element} element - Element to compare with the selector.
 * @param {string} selector - String selector which element will satisfy.
 * @return {void}
 * @private
 */
export declare function matches(element: Element, selector: string): boolean;
export declare function includeInnerHTML(ele: HTMLElement & VirtualObject, innerHTML: string): void;
export declare function containsClass(ele: HTMLElement & VirtualObject, className: string): any;
/**
 * Method to check whether the element matches the given selector.
 * @param {} element - Element to compare with the selector.
 * @param {string} selector - String selector which element will satisfy.
 * @return {Element | VirtualObject}
 * @private
 */
export declare function cloneNode(element: Object, deep?: boolean): any;
