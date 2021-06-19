import { ModuleLoader, ModuleDeclaration } from './module-loader';
import { Base } from './base';
import { Observer, BoundOptions } from './observer';
import { ElementProperties } from './dom';
export declare let versionBasedStatePersistence: boolean;
/**
 * To enable or disable version based statePersistence functionality for all components globally.
 * @param {boolean} status - Optional argument Specifies the status value to enable or disable versionBasedStatePersistence option.
 * @returns {void}
 */
export declare function enableVersionBasedPersistence(status: boolean): void;
/**
 * Base class for all Essential JavaScript components
 */
export declare abstract class Component<ElementType extends HTMLElement> extends Base<ElementType> {
    element: ElementType;
    private randomId;
    ej2StatePersistenceVersion: string;
    /**
     * Enable or disable persisting component's state between page reloads.
     * @default false
     */
    enablePersistence: boolean;
    /**
     * Enable or disable rendering component in right to left direction.
     * @default false
     */
    enableRtl: boolean;
    /**
     * Overrides the global culture and localization value for this component. Default global culture is 'en-US'.
     * @default ''
     */
    locale: string;
    /**
     * string template option for Blazor template rendering
     * @private
     */
    isStringTemplate: boolean;
    currentContext: {
        calls?: Function;
        args?: any;
    };
    protected needsID: boolean;
    protected isReactHybrid: boolean;
    protected moduleLoader: ModuleLoader;
    protected localObserver: Observer;
    protected abstract render(): void;
    protected abstract preRender(): void;
    protected abstract getPersistData(): string;
    protected injectedModules: Function[];
    protected mount: Function;
    protected requiredModules(): ModuleDeclaration[];
    /**
     * Destroys the sub modules while destroying the widget
     */
    protected destroy(): void;
    /**
     * Applies all the pending property changes and render the component again.
     */
    refresh(): void;
    private accessMount;
    /**
     * Returns the route element of the component
     */
    getRootElement(): HTMLElement;
    /**
     * Returns the persistence data for component
     */
    getLocalData(): any;
    /**
     * Appends the control within the given HTML element
     * @param {string | HTMLElement} selector - Target element where control needs to be appended
     */
    appendTo(selector?: string | HTMLElement): void;
    /**
     * It is used to process the post rendering functionalities to a component.
     */
    protected renderComplete(wrapperElement?: Node): void;
    /**
     * When invoked, applies the pending property changes immediately to the component.
     */
    dataBind(): void;
    /**
     * Attach one or more  event handler to the current component context.
     * It is used for internal handling event internally within the component only.
     * @param {BoundOptions[]| string} event - It is  optional type either to  Set the collection of event list or the eventName.
     * @param {Function} handler - optional parameter Specifies the handler to run when the event occurs
     * @param {Object} context - optional parameter Specifies the context to be bind in the handler.
     * @return {void}
     * @private
     */
    on(event: BoundOptions[] | string, handler?: Function, context?: Object): void;
    /**
     * To remove one or more event handler that has been attached with the on() method.
     * @param {BoundOptions[]| string} event - It is  optional type either to  Set the collection of event list or the eventName.
     * @param {Function} handler - optional parameter Specifies the function to run when the event occurs
     * @return {void}
     * @private
     */
    off(event: BoundOptions[] | string, handler?: Function): void;
    /**
     * To notify the handlers in the specified event.
     * @param {string} property - Specifies the event to be notify.
     * @param {Object} argument - Additional parameters to pass while calling the handler.
     * @return {void}
     * @private
     */
    notify(property: string, argument: Object): void;
    /**
     * Get injected modules
     * @private
     */
    getInjectedModules(): Function[];
    /**
     * Dynamically injects the required modules to the component.
     */
    static Inject(...moduleList: Function[]): void;
    /**
     * Initialize the constructor for component base
     */
    constructor(options?: Object, selector?: string | ElementType);
    /**
     * This is a instance method to create an element.
     * @private
     */
    createElement(tagName: string, prop?: ElementProperties, isVDOM?: boolean): any;
    /**
     *
     * @param handler - handler to be triggered after state Updated.
     * @param argument - Arguments to be passed to caller.
     * @private
     */
    triggerStateChange(handler?: Function, argument?: any): void;
    private injectModules;
    private detectFunction;
    private mergePersistData;
    private setPersistData;
    protected renderReactTemplates(): void;
    protected clearTemplate(templateName?: string[], index?: any): void;
    private getUniqueID;
    private pageID;
    private isHistoryChanged;
    protected addOnPersist(options: string[]): string;
    protected getActualProperties<T>(obj: T): T;
    protected ignoreOnPersist(options: string[]): string;
    protected iterateJsonProperties(obj: {
        [key: string]: Object;
    }, ignoreList: string[]): Object;
}
