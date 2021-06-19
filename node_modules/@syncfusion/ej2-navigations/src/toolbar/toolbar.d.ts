import { Component, EmitType, BaseEventArgs } from '@syncfusion/ej2-base';
import { INotifyPropertyChanged, ChildProperty } from '@syncfusion/ej2-base';
import { ToolbarModel, ItemModel } from './toolbar-model';
/**
 * Specifies the options for supporting element types of Toolbar command.
 */
export declare type ItemType = 'Button' | 'Separator' | 'Input';
/**
 * Specifies the options of where the text will be displayed in popup mode of the Toolbar.
 */
export declare type DisplayMode = 'Both' | 'Overflow' | 'Toolbar';
/**
 * Specifies the options of the Toolbar item display area when the Toolbar content overflows to available space.Applicable to `popup` mode.
 */
export declare type OverflowOption = 'None' | 'Show' | 'Hide';
/**
 * Specifies the options of Toolbar display mode. Display option is considered when Toolbar content exceeds the available space.
 */
export declare type OverflowMode = 'Scrollable' | 'Popup' | 'MultiRow' | 'Extended';
/**
 * Specifies the options for aligning the Toolbar items.
 */
export declare type ItemAlign = 'Left' | 'Center' | 'Right';
/** An interface that holds options to control the toolbar clicked action. */
export interface ClickEventArgs extends BaseEventArgs {
    /** Defines the current Toolbar Item Object. */
    item: ItemModel;
    /**
     * Defines the current Event arguments.
     */
    originalEvent: Event;
    /** Defines the prevent action. */
    cancel?: boolean;
}
/** */
export interface BeforeCreateArgs extends BaseEventArgs {
    /** Enable or disable the popup collision. */
    enableCollision: boolean;
    /** Specifies the scrolling distance in scroller. */
    scrollStep: number;
}
/**
 * An item object that is used to configure Toolbar commands.
 */
export declare class Item extends ChildProperty<Item> {
    /**
     * Specifies the unique ID to be used with button or input element of Toolbar items.
     *
     * @default ""
     */
    id: string;
    /**
     * Specifies the text to be displayed on the Toolbar button.
     *
     * @default ""
     */
    text: string;
    /**
     * Specifies the width of the Toolbar button commands.
     *
     * @default 'auto'
     */
    width: number | string;
    /**
     * Defines single/multiple classes (separated by space) to be used for customization of commands.
     *
     * @default ""
     */
    cssClass: string;
    /**
     * Defines the priority of items to display it in popup always.
     * It allows to maintain toolbar item on popup always but it does not work for toolbar priority items.
     *
     * @default false
     */
    showAlwaysInPopup: boolean;
    /**
     * Specifies whether an item should be disabled or not.
     *
     * @default false
     */
    disabled: boolean;
    /**
     * Defines single/multiple classes separated by space used to specify an icon for the button.
     * The icon will be positioned before the text content if text is available, otherwise the icon alone will be rendered.
     *
     * @default ""
     */
    prefixIcon: string;
    /**
     * Defines single/multiple classes separated by space used to specify an icon for the button.
     * The icon will be positioned after the text content if text is available.
     *
     * @default ""
     */
    suffixIcon: string;
    /**
     * Specifies whether an item should be hidden or not.
     *
     * @default true
     */
    visible: boolean;
    /**
     * Specifies the Toolbar command display area when an element's content is too large to fit available space.
     * This is applicable only to `popup` mode. Possible values are:
     * - Show:  Always shows the item as the primary priority on the *Toolbar*.
     * - Hide: Always shows the item as the secondary priority on the *popup*.
     * - None: No priority for display, and as per normal order moves to popup when content exceeds.
     *
     * @default 'None'
     */
    overflow: OverflowOption;
    /**
     * Specifies the HTML element/element ID as a string that can be added as a Toolbar command.
     * ```
     * E.g - items: [{ template: '<input placeholder="Search"/>' },{ template: '#checkbox1' }]
     * ```
     *
     * @default ""
     */
    template: string | Object;
    /**
     * Specifies the types of command to be rendered in the Toolbar.
     * Supported types are:
     * - Button: Creates the Button control with its given properties like text, prefixIcon, etc.
     * - Separator: Adds a horizontal line that separates the Toolbar commands.
     * - Input: Creates an input element that is applicable to template rendering with Syncfusion controls like DropDownList,
     * AutoComplete, etc.
     *
     * @default 'Button'
     */
    type: ItemType;
    /**
     * Specifies where the button text will be displayed on *popup mode* of the Toolbar.
     * Possible values are:
     * - Toolbar:  Text will be displayed on *Toolbar* only.
     * - Overflow: Text will be displayed only when content overflows to *popup*.
     * - Both: Text will be displayed on *popup* and *Toolbar*.
     *
     * @default 'Both'
     */
    showTextOn: DisplayMode;
    /**
     * Defines htmlAttributes used to add custom attributes to Toolbar command.
     * Supports HTML attributes such as style, class, etc.
     *
     * @default null
     */
    htmlAttributes: {
        [key: string]: string;
    };
    /**
     * Specifies the text to be displayed on hovering the Toolbar button.
     *
     * @default ""
     */
    tooltipText: string;
    /**
     * Specifies the location for aligning Toolbar items on the Toolbar. Each command will be aligned according to the `align` property.
     * Possible values are:
     * - Left: To align commands to the left side of the Toolbar.
     * - Center: To align commands at the center of the Toolbar.
     * - Right: To align commands to the right side of the Toolbar.
     * ```html
     * <div id="element"> </div>
     * ```
     * ```typescript
     * let toolbar: Toolbar = new Toolbar({
     *     items: [
     *         { text: "Home" },
     *         { text: "My Home Page" , align: 'Center' },
     *         { text: "Search", align: 'Right' }
     *         { text: "Settings", align: 'Right' }
     *     ]
     * });
     * toolbar.appendTo('#element');
     * ```
     *
     * @default "Left"
     */
    align: ItemAlign;
    /**
     * Event triggers when `click` the toolbar item.
     *
     * @event
     */
    click: EmitType<ClickEventArgs>;
}
/**
 * The Toolbar control contains a group of commands that are aligned horizontally.
 * ```html
 * <div id="toolbar"/>
 * <script>
 *   var toolbarObj = new Toolbar();
 *   toolbarObj.appendTo("#toolbar");
 * </script>
 * ```
 */
export declare class Toolbar extends Component<HTMLElement> implements INotifyPropertyChanged {
    private trgtEle;
    private ctrlTem;
    private popObj;
    private tbarEle;
    private tbarAlgEle;
    private tbarAlign;
    private tbarEleMrgn;
    private tbResize;
    private offsetWid;
    private keyModule;
    private scrollModule;
    private activeEle;
    private popupPriCount;
    private tbarItemsCol;
    private isVertical;
    private tempId;
    private isExtendedOpen;
    private resizeContext;
    /**
     * Contains the keyboard configuration of the Toolbar.
     */
    private keyConfigs;
    /**
     * An array of items that is used to configure Toolbar commands.
     *
     * @default []
     */
    items: ItemModel[];
    /**
     * Specifies the width of the Toolbar in pixels/numbers/percentage. Number value is considered as pixels.
     *
     * @default 'auto'
     */
    width: string | number;
    /**
     * Specifies the height of the Toolbar in pixels/number/percentage. Number value is considered as pixels.
     *
     * @default 'auto'
     */
    height: string | number;
    /**
     * Sets the CSS classes to root element of the Tab that helps to customize component styles.
     *
     * @default ''
     */
    cssClass: string;
    /**
     * Specifies the Toolbar display mode when Toolbar content exceeds the viewing area.
     * Possible modes are:
     * - Scrollable: All the elements are displayed in a single line with horizontal scrolling enabled.
     * - Popup: Prioritized elements are displayed on the Toolbar and the rest of elements are moved to the *popup*.
     * - MultiRow: Displays the overflow toolbar items as an in-line of a toolbar.
     * - Extended: Hide the overflowing toolbar items in the next row.  Show the overflowing toolbar items when you click the expand icons.
     * If the popup content overflows the height of the page, the rest of the elements will be hidden.
     *
     * @default 'Scrollable'
     */
    overflowMode: OverflowMode;
    /**
     * Specifies the scrolling distance in scroller.
     *
     * @default null
     */
    scrollStep: number;
    /**
     * Enable or disable the popup collision.
     *
     * @default true
     */
    enableCollision: boolean;
    /**
     * Defines whether to allow the cross-scripting site or not.
     *
     * @default true
     */
    enableHtmlSanitizer: boolean;
    /**
     * When this property is set to true, it allows the keyboard interaction in toolbar.
     *
     * @default true
     */
    allowKeyboard: boolean;
    /**
     * The event will be fired on clicking the Toolbar elements.
     *
     * @event
     */
    clicked: EmitType<ClickEventArgs>;
    /**
     * The event will be fired when the control is rendered.
     *
     * @event
     */
    created: EmitType<Event>;
    /**
     * The event will be fired when the control gets destroyed.
     *
     * @event
     */
    destroyed: EmitType<Event>;
    /**
     * The event will be fired before the control is rendered on a page.
     *
     * @event
     */
    beforeCreate: EmitType<BeforeCreateArgs>;
    /**
     * Removes the control from the DOM and also removes all its related events.
     *
     * @returns {void}.
     */
    destroy(): void;
    /**
     * Initialize the event handler
     *
     * @private
     * @returns {void}
     */
    protected preRender(): void;
    /**
     * Initializes a new instance of the Toolbar class.
     *
     * @param {ToolbarModel} options  - Specifies Toolbar model properties as options.
     * @param { string | HTMLElement} element  - Specifies the element that is rendered as a Toolbar.
     */
    constructor(options?: ToolbarModel, element?: string | HTMLElement);
    private wireEvents;
    private wireKeyboardEvent;
    private unwireKeyboardEvent;
    private docKeyDown;
    private unwireEvents;
    private clearProperty;
    private docEvent;
    private destroyScroll;
    private destroyItems;
    private destroyMode;
    private add;
    private remove;
    private elementFocus;
    private clstElement;
    private keyHandling;
    private keyActionHandler;
    /**
     * Specifies the value to disable/enable the Toolbar component.
     * When set to `true`, the component will be disabled.
     *
     * @param  {boolean} value - Based on this Boolean value, Toolbar will be enabled (false) or disabled (true).
     * @returns {void}.
     */
    disable(value: boolean): void;
    private eleContains;
    private eleFocus;
    private clickHandler;
    private popupClickHandler;
    /**
     * To Initialize the control rendering
     *
     * @private
     * @returns {void}
     */
    protected render(): void;
    private initialize;
    private renderControl;
    private renderLayout;
    private itemsAlign;
    /**
     * @hidden
     * @returns {void}
     */
    changeOrientation(): void;
    private initScroll;
    private itemWidthCal;
    private getScrollCntEle;
    private checkOverflow;
    /**
     * Refresh the whole Toolbar component without re-rendering.
     * - It is used to manually refresh the Toolbar overflow modes such as scrollable, popup, multi row, and extended.
     * - It will refresh the Toolbar component after loading items dynamically.
     *
     * @returns {void}.
     */
    refreshOverflow(): void;
    private toolbarAlign;
    private renderOverflowMode;
    private setOverflowAttributes;
    private separator;
    private createPopupEle;
    private pushingPoppedEle;
    private createPopup;
    private getElementOffsetY;
    private popupInit;
    private tbarPopupHandler;
    private popupOpen;
    private popupClose;
    private checkPriority;
    private createPopupIcon;
    private tbarPriRef;
    private popupRefresh;
    private ignoreEleFetch;
    private checkPopupRefresh;
    private popupEleWidth;
    private popupEleRefresh;
    private removePositioning;
    private refreshPositioning;
    private itemPositioning;
    private tbarItemAlign;
    private ctrlTemplate;
    private renderItems;
    private setAttr;
    /**
     * Enables or disables the specified Toolbar item.
     *
     * @param  {number|HTMLElement|NodeList} items - DOM element or an array of items to be enabled or disabled.
     * @param  {boolean} isEnable  - Boolean value that determines whether the command should be enabled or disabled.
     * By default, `isEnable` is set to true.
     * @returns {void}.
     */
    enableItems(items: number | HTMLElement | NodeList, isEnable?: boolean): void;
    private getElementByIndex;
    /**
     * Adds new items to the Toolbar that accepts an array as Toolbar items.
     *
     * @param  {ItemModel[]} items - DOM element or an array of items to be added to the Toolbar.
     * @param  {number} index - Number value that determines where the command is to be added. By default, index is 0.
     * @returns {void}.

     */
    addItems(items: ItemModel[], index?: number): void;
    /**
     * Removes the items from the Toolbar. Acceptable arguments are index of item/HTMLElement/node list.
     *
     * @param  {number|HTMLElement|NodeList|HTMLElement[]} args
     * Index or DOM element or an Array of item which is to be removed from the Toolbar.
     * @returns {void}.

     */
    removeItems(args: number | HTMLElement | NodeList | Element | HTMLElement[]): void;
    private removeItemByIndex;
    private templateRender;
    private buttonRendering;
    private renderSubComponent;
    private itemClick;
    private activeEleSwitch;
    private activeEleRemove;
    protected getPersistData(): string;
    /**
     * Returns the current module name.
     *
     * @returns {string} - Returns the module name as string.
     * @private
     */
    protected getModuleName(): string;
    private itemsRerender;
    private resize;
    private extendedOpen;
    /**
     * Gets called when the model property changes.The data that describes the old and new values of the property that changed.
     *
     * @param  {ToolbarModel} newProp - It contains new value of the data.
     * @param  {ToolbarModel} oldProp - It contains old value of the data.
     * @returns {void}
     * @private
     */
    onPropertyChanged(newProp: ToolbarModel, oldProp: ToolbarModel): void;
    /**
     * Shows or hides the Toolbar item that is in the specified index.
     *
     * @param  {number | HTMLElement} index - Index value of target item or DOM element  of items to be hidden or shown.
     * @param  {boolean} value - Based on this Boolean value, item will be hide (true) or show (false). By default, value is false.
     * @returns {void}.
     */
    hideItem(index: number | HTMLElement | Element, value?: boolean): void;
}
