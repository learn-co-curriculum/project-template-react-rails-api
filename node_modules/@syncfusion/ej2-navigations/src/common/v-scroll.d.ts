import { Component } from '@syncfusion/ej2-base';
import { INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { VScrollModel } from './v-scroll-model';
/**
 * VScroll module is introduces vertical scroller when content exceeds the current viewing area.
 * It can be useful for the components like Toolbar, Tab which needs vertical scrolling alone.
 * Hidden content can be view by touch moving or icon click.
 * ```html
 * <div id="scroll"/>
 * <script>
 *   var scrollObj = new VScroll();
 *   scrollObj.appendTo("#scroll");
 * </script>
 * ```
 */
export declare class VScroll extends Component<HTMLElement> implements INotifyPropertyChanged {
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
    private isDevice;
    private customStep;
    /**
     * Specifies the up or down scrolling distance of the vertical scrollbar moving.
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
     * To Initialize the vertical scroll rendering
     *
     * @private
     * @returns {void}
     */
    protected render(): void;
    private setScrollState;
    /**
     * Initializes a new instance of the VScroll class.
     *
     * @param {VScrollModel} options  - Specifies VScroll model properties as options.
     * @param {string | HTMLElement} element  - Specifies the element for which vertical scrolling applies.
     */
    constructor(options?: VScrollModel, element?: string | HTMLElement);
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
     * Specifies the value to disable/enable the VScroll component.
     * When set to `true` , the component will be disabled.
     *
     * @param  {boolean} value - Based on this Boolean value, VScroll will be enabled (false) or disabled (true).
     * @returns {void}.
     */
    disable(value: boolean): void;
    private createOverlayElement;
    private createNavIcon;
    private onKeyPress;
    private onKeyUp;
    private eventBinding;
    private repeatScroll;
    private tabHoldHandler;
    private contains;
    private eleScrolling;
    private clickEventHandler;
    private wheelEventHandler;
    private swipeHandler;
    private scrollUpdating;
    private frameScrollRequest;
    private touchHandler;
    private arrowDisabling;
    private scrollEventHandler;
    /**
     * Gets called when the model property changes.The data that describes the old and new values of property that changed.
     *
     * @param  {VScrollModel} newProp - It contains the new value of data.
     * @param  {VScrollModel} oldProp - It contains the old value of data.
     * @returns {void}
     * @private
     */
    onPropertyChanged(newProp: VScrollModel, oldProp: VScrollModel): void;
}
