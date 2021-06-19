/**
 * To detect the changes for inner properties.
 * @private
 */
export declare class ChildProperty<T> {
    private parentObj;
    private controlParent;
    private propName;
    private isParentArray;
    protected isComplexArraySetter: boolean;
    protected properties: {
        [key: string]: Object;
    };
    protected changedProperties: {
        [key: string]: Object;
    };
    protected childChangedProperties: {
        [key: string]: Object;
    };
    protected oldProperties: {
        [key: string]: Object;
    };
    protected finalUpdate: Function;
    private callChildDataBind;
    constructor(parent: T, propName: string, defaultValue: Object, isArray?: boolean);
    /**
     * Updates the property changes
     * @param {boolean} val
     * @param {string} propName
     * @returns {void}
     */
    private updateChange;
    /**
     * Updates time out duration
     */
    private updateTimeOut;
    /**
     * Clears changed properties
     */
    private clearChanges;
    /**
     * Set property changes
     * @param {Object} prop
     * @param {boolean} muteOnChange
     * {void}
     */
    protected setProperties(prop: Object, muteOnChange: boolean): void;
    /**
     * Binds data
     */
    protected dataBind(): void;
    /**
     * Saves changes to newer values
     * @param {string} key
     * @param {Object} newValue
     * @param {Object} oldValue
     * @returns {void}
     */
    protected saveChanges(key: string, newValue: Object, oldValue: Object, restrictServerDataBind?: boolean): void;
    protected serverDataBind(key: string, value: Object, isSaveChanges?: boolean, action?: string): void;
    protected getParentKey(isSaveChanges?: boolean): string;
}
