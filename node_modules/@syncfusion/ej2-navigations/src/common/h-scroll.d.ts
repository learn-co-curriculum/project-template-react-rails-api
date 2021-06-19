import { Component } from '@syncfusion/ej2-base';
import { INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { HScrollModel } from './h-scroll-model';
/**
 * HScroll module is introduces horizontal scroller when content exceeds the current viewing area.
 * It can be useful for the components like Toolbar, Tab which needs horizontal scrolling alone.
 * Hidden content can be view by touch moving or icon click.
 * ```html
 * <div id="scroll"/>
 * <script>
 *   var scrollObj = new HScroll();
 *   scrollObj.appendTo("#scroll");
 * </script>
 * ```
 */
export declare class HScroll extends Component<HTMLElement> implements INotifyPropertyChanged {
    private isDevice;
    private touchModule;
    private scrollEle;
    private scrollItems;
    private uniqueId;
    private timeout;
    private keyTimeout;
    private keyTimer;
    private browser;
    private browserCheck;
    private ieCheck;
    private customStep;
    /**
     * Specifies the left or right scrolling distance of the horizontal scrollbar moving.
     *
     * @default null
     */
    scrollStep: number;
    /**
     * Initialize the event handler
     *
     * @private
     * @returns {void}
     */
    protected preRender(): void;
    /**
     * To Initialize the horizontal scroll  rendering
     *
     * @private
     * @returns {void}
     */
    protected render(): void;
    private setScrollState;
    /**
     * Initializes a new instance of the HScroll class.
     *
     * @param {HScrollModel} options  - Specifies HScroll model properties as options.
     * @param {string | HTMLElement} element  - Specifies the element for which horizontal scrolling applies.
     */
    constructor(options?: HScrollModel, element?: string | HTMLElement);
    private initialize;
    protected getPersistData(): string;
    /**
     * Returns the current module name.
     *
     * @returns {string} - It returns the current module name.
     * @private
     */
    protected getModuleName(): string;
    /**
     * Removes the control from the DOM and also removes all its related events.
     *
     * @returns {void}
     */
    destroy(): void;
    /**
     * Specifies the value to disable/enable the HScroll component.
     * When set to `true` , the component will be disabled.
     *
     * @param  {boolean} value - Based on this Boolean value, HScroll will be enabled (false) or disabled (true).
     * @returns {void}.
     */
    disable(value: boolean): void;
    private createOverlay;
    private createNavIcon;
    private onKeyPress;
    private onKeyUp;
    private eventBinding;
    private repeatScroll;
    private tabHoldHandler;
    private contains;
    private eleScrolling;
    private clickEventHandler;
    private swipeHandler;
    private scrollUpdating;
    private frameScrollRequest;
    private touchHandler;
    private arrowDisabling;
    private scrollHandler;
    /**
     * Gets called when the model property changes.The data that describes the old and new values of property that changed.
     *
     * @param  {HScrollModel} newProp - It contains the new value of data.
     * @param  {HScrollModel} oldProp - It contains the old value of data.
     * @returns {void}
     * @private
     */
    onPropertyChanged(newProp: HScrollModel, oldProp: HScrollModel): void;
}
