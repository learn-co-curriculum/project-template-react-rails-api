import { Observer } from './observer';
export interface DomElements extends HTMLElement {
    ej2_instances: Object[];
}
export interface AngularEventEmitter {
    subscribe?: (generatorOrNext?: any, error?: any, complete?: any) => any;
}
export declare type EmitType<T> = AngularEventEmitter & ((arg?: T, ...rest: any[]) => void);
export interface BlazorDotnetObject {
    dispose(): void;
    invokeMethod(methodName: string): void;
    invokeMethodAsync(methodName: string, ...args: any[]): void;
}
/**
 * Base library module is common module for Framework modules like touch,keyboard and etc.,
 * @private
 */
export declare abstract class Base<ElementType extends HTMLElement> {
    element: ElementType;
    isDestroyed: boolean;
    protected isRendered: boolean;
    protected isComplexArraySetter: boolean;
    isServerRendered: boolean;
    allowServerDataBinding: boolean;
    protected isProtectedOnChange: boolean;
    protected properties: {
        [key: string]: Object;
    };
    protected changedProperties: {
        [key: string]: Object;
    };
    protected oldProperties: {
        [key: string]: Object;
    };
    protected bulkChanges: {
        [key: string]: Object;
    };
    protected refreshing: boolean;
    ignoreCollectionWatch: boolean;
    protected finalUpdate: Function;
    protected modelObserver: Observer;
    protected childChangedProperties: {
        [key: string]: Object;
    };
    protected abstract getModuleName(): string;
    protected abstract onPropertyChanged(newProperties: Object, oldProperties?: Object): void;
    /** Property base section */
    /**
     * Function used to set bunch of property at a time.
     * @private
     * @param  {Object} prop - JSON object which holds components properties.
     * @param  {boolean} muteOnChange? - Specifies to true when we set properties.
     */
    setProperties(prop: Object, muteOnChange?: boolean): void;
    /**
     * Calls for child element data bind
     * @param {Object} obj
     * @param {Object} parent
     * @returns {void}
     */
    private static callChildDataBind;
    protected clearChanges(): void;
    /**
     * Bind property changes immediately to components
     */
    dataBind(): void;
    serverDataBind(newChanges?: {
        [key: string]: any;
    }): void;
    protected saveChanges(key: string, newValue: string, oldValue: string): void;
    /** Event Base Section */
    /**
     * Adds the handler to the given event listener.
     * @param {string} eventName - A String that specifies the name of the event
     * @param {Function} listener - Specifies the call to run when the event occurs.
     * @return {void}
     */
    addEventListener(eventName: string, handler: Function): void;
    /**
     * Removes the handler from the given event listener.
     * @param {string} eventName - A String that specifies the name of the event to remove
     * @param {Function} listener - Specifies the function to remove
     * @return {void}
     */
    removeEventListener(eventName: string, handler: Function): void;
    /**
     * Triggers the handlers in the specified event.
     * @private
     * @param {string} eventName - Specifies the event to trigger for the specified component properties.
     * Can be a custom event, or any of the standard events.
     * @param {Event} eventProp - Additional parameters to pass on to the event properties
     * @param {Function} successHandler - this function will invoke after event successfully triggered
     * @param {Function} errorHandler - this function will invoke after event if it failured to call.
     * @return {void}
     */
    trigger(eventName: string, eventProp?: Object, successHandler?: Function, errorHandler?: Function): void | object;
    /**
     * Base constructor accept options and element
     */
    constructor(options: Object, element: ElementType | string);
    /**
     * To maintain instance in base class
     */
    protected addInstance(): void;
    /**
     * To remove the instance from the element
     */
    protected destroy(): void;
}
/**
 * Global function to get the component instance from the rendered element.
 * @param elem Specifies the HTMLElement or element id string.
 * @param comp Specifies the component module name or Component.
 */
export declare function getComponent<T>(elem: HTMLElement | string, comp: string | any | T): T;
/**
 * Function to remove the child instances.
 * @return {void}
 * @private
 */
export declare function removeChildInstance(element: HTMLElement): void;
