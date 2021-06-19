import { Schedule } from '../base/schedule';
/**
 * `Scroll` module
 */
export declare class Scroll {
    private parent;
    /**
     * Constructor for the scrolling.
     *
     * @param {Schedule} parent Accepts the Schedule instance
     */
    constructor(parent?: Schedule);
    /**
     * For internal use only - Get the module name.
     *
     * @returns {string} Returns the module name.
     * @private
     */
    protected getModuleName(): string;
    /**
     * Internal method to set the element width
     *
     * @returns {void}
     * @private
     */
    setWidth(): void;
    /**
     * Internal method to set the element height
     *
     * @returns {void}
     * @private
     */
    setHeight(): void;
    /**
     * Internal method to bind events
     *
     * @returns {void}
     * @private
     */
    addEventListener(): void;
    /**
     * Internal method to unbind events
     *
     * @returns {void}
     * @private
     */
    removeEventListener(): void;
    /**
     * Internal method to set the dimensions
     *
     * @returns {void}
     * @private
     */
    private setDimensions;
    /**
     * Internal method to set the dimensions dynamically
     *
     * @returns {void}
     * @private
     */
    private onPropertyChanged;
    /**
     * Destroy the scroll module
     *
     * @returns {void}
     * @private
     */
    destroy(): void;
}
