import { Component, EmitType } from '@syncfusion/ej2-base';
import { INotifyPropertyChanged, ChildProperty } from '@syncfusion/ej2-base';
import { Effect } from '@syncfusion/ej2-base';
import { BaseEventArgs } from '@syncfusion/ej2-base';
import { OverflowMode } from '../toolbar/toolbar';
import { TabModel, TabItemModel, HeaderModel, TabActionSettingsModel, TabAnimationSettingsModel } from './tab-model';
declare type HTEle = HTMLElement;
/**
 * Options to set the orientation of Tab header.
 */
export declare type HeaderPosition = 'Top' | 'Bottom' | 'Left' | 'Right';
/**
 * Options to set the content element height adjust modes.
 */
export declare type HeightStyles = 'None' | 'Auto' | 'Content' | 'Fill';
/**
 * Specifies the options of Tab content display mode.
 */
export declare type ContentLoad = 'Dynamic' | 'Init' | 'Demand';
/** An interface that holds options to control the selected item action. */
export interface SelectEventArgs extends BaseEventArgs {
    /** Defines the previous Tab item element. */
    previousItem: HTMLElement;
    /** Defines the previous Tab item index. */
    previousIndex: number;
    /** Defines the selected Tab item element. */
    selectedItem: HTMLElement;
    /** Defines the selected Tab item index. */
    selectedIndex: number;
    /** Defines the content selection done through swiping. */
    isSwiped: boolean;
    /** Defines the prevent action. */
    cancel?: boolean;
    /** Defines the selected content. */
    selectedContent: HTMLElement;
}
/** An interface that holds options to control the selecting item action. */
export interface SelectingEventArgs extends SelectEventArgs {
    /** Defines the selecting Tab item element. */
    selectingItem: HTMLElement;
    /** Defines the selecting Tab item index. */
    selectingIndex: number;
    /** Defines the selecting Tab item content. */
    selectingContent: HTMLElement;
    /** Defines the type of the event. */
    event?: Event;
}
/** An interface that holds options to control the removing and removed item action. */
export interface RemoveEventArgs extends BaseEventArgs {
    /** Defines the removed Tab item element. */
    removedItem: HTMLElement;
    /** Defines the removed Tab item index. */
    removedIndex: number;
    /** Defines the prevent action. */
    cancel?: boolean;
}
/** An interface that holds options to control the adding and added item action. */
export interface AddEventArgs extends BaseEventArgs {
    /** Defines the added Tab item element */
    addedItems: TabItemModel[];
    /** Defines the prevent action. */
    cancel?: boolean;
}
/** An interface that holds option to control the dragging and dragged item action. */
export interface DragEventArgs extends BaseEventArgs {
    /** Defines the current dragged Tab item. */
    draggedItem: HTMLElement;
    /** Defines the dropped Tab item. */
    droppedItem: HTMLElement;
    /** defines the Dragged Tab item index. */
    index: number;
    /** Return the actual event. */
    event: MouseEvent;
    /** Return the target element */
    target: HTMLElement;
    /** Return the clone element */
    clonedElement: HTMLElement;
    /** Defines the prevent action. */
    cancel?: boolean;
}
/**
 * Objects used for configuring the Tab selecting item action properties.
 */
export declare class TabActionSettings extends ChildProperty<TabActionSettings> {
    /**
     * Specifies the animation effect for displaying Tab content.
     *
     * @default 'SlideLeftIn'
     * @aspType string
     */
    effect: 'None' | Effect;
    /**
     * Specifies the time duration to transform content.
     *
     * @default 600
     */
    duration: number;
    /**
     * Specifies easing effect applied while transforming content.
     *
     * @default 'ease'
     */
    easing: string;
}
/**
 * Objects used for configuring the Tab animation properties.
 */
export declare class TabAnimationSettings extends ChildProperty<TabAnimationSettings> {
    /**
     * Specifies the animation to appear while moving to previous Tab content.
     *
     * @default { effect: 'SlideLeftIn', duration: 600, easing: 'ease' }
     */
    previous: TabActionSettingsModel;
    /**
     * Specifies the animation to appear while moving to next Tab content.
     *
     * @default { effect: 'SlideRightIn', duration: 600, easing: 'ease' }
     */
    next: TabActionSettingsModel;
}
/**
 * Objects used for configuring the Tab item header properties.
 */
export declare class Header extends ChildProperty<Header> {
    /**
     * Specifies the display text of the Tab item header.
     *
     * @default ''
     */
    text: string | HTMLElement;
    /**
     * Specifies the icon class that is used to render an icon in the Tab header.
     *
     * @default ''
     */
    iconCss: string;
    /**
     * Options for positioning the icon in the Tab item header. This property depends on `iconCss` property.
     * The possible values are:
     * - Left: Places the icon to the `left` of the item.
     * - Top: Places the icon on the `top` of the item.
     * - Right: Places the icon to the `right` end of the item.
     * - Bottom: Places the icon at the `bottom` of the item.
     *
     * @default 'left'
     */
    iconPosition: string;
}
/**
 * An array of object that is used to configure the Tab.
 */
export declare class TabItem extends ChildProperty<TabItem> {
    /**
     * The object used for configuring the Tab item header properties.
     *
     * @default {}
     */
    header: HeaderModel;
    /**
     * Specifies the header text of Tab item.
     *
     * @default null
     */
    headerTemplate: string;
    /**
     * Specifies the content of Tab item, that is displayed when concern item header is selected.
     *
     * @default ''
     */
    content: string | HTMLElement;
    /**
     * Sets the CSS classes to the Tab item to customize its styles.
     *
     * @default ''
     */
    cssClass: string;
    /**
     * Sets true to disable user interactions of the Tab item.
     *
     * @default false
     */
    disabled: boolean;
    /**
     * Sets false to hide the Tab item.
     *
     * @default true
     */
    visible: boolean;
    /**
     * Sets unique ID to Tab item.
     *
     * @default null
     */
    id: string;
}
/**
 * Tab is a content panel to show multiple contents in a single space, one at a time.
 * Each Tab item has an associated content, that will be displayed based on the active Tab header item.
 * ```html
 * <div id="tab"></div>
 * <script>
 *   var tabObj = new Tab();
 *   tab.appendTo("#tab");
 * </script>
 * ```
 */
export declare class Tab extends Component<HTMLElement> implements INotifyPropertyChanged {
    private hdrEle;
    private cntEle;
    private tbObj;
    tabId: string;
    private tbItems;
    private tbItem;
    private tbPop;
    private isTemplate;
    private isPopup;
    private isReplace;
    private prevIndex;
    private prevItem;
    private popEle;
    private actEleId;
    private bdrLine;
    private popObj;
    private btnCls;
    private cnt;
    private show;
    private hide;
    private enableAnimation;
    private keyModule;
    private tabKeyModule;
    private touchModule;
    private maxHeight;
    private title;
    private initRender;
    private prevActiveEle;
    private lastIndex;
    private isSwipeed;
    private isNested;
    private itemIndexArray;
    private templateEle;
    private scrCntClass;
    private isAdd;
    private content;
    private selectedID;
    private selectingID;
    private isIconAlone;
    private dragItem;
    private cloneElement;
    private droppedIndex;
    private draggingItems;
    private draggableItems;
    private resizeContext;
    /**
     * Contains the keyboard configuration of the Tab.
     */
    private keyConfigs;
    /**
     * An array of object that is used to configure the Tab component.
     * ```typescript
     *   let tabObj: Tab = new Tab( {
     *     items: [
     *       { header: { text: 'TabItem1' }, content: 'Tab Item1 Content' },
     *       { header: { text: 'TabItem2' }, content: 'Tab Item2 Content' }
     *     ]
     *   });
     *   tabObj.appendTo('#tab');
     * ```
     *
     * @default []
     */
    items: TabItemModel[];
    /**
     * Specifies the width of the Tab component. Default, Tab width sets based on the width of its parent.
     *
     * @default '100%'
     */
    width: string | number;
    /**
     * Specifies the height of the Tab component. By default, Tab height is set based on the height of its parent.
     * To use height property, heightAdjustMode must be set to 'None'.
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
     * Specifies the index for activating the current Tab item.
     * ```typescript
     *   let tabObj: Tab = new Tab( {
     *     selectedItem: 1,
     *     items: [
     *       { header: { text: 'TabItem1' }, content: 'Tab Item1 Content' },
     *       { header: { text: 'TabItem2' }, content: 'Tab Item2 Content' }
     *     ]
     *   });
     *   tabObj.appendTo('#tab');
     * ```
     *
     * @default 0
     */
    selectedItem: number;
    /**
     * Specifies the orientation of Tab header.
     * The possible values are:
     * - Top: Places the Tab header on the top.
     * - Bottom: Places the Tab header at the bottom.
     * - Left: Places the Tab header on the left.
     * - Right: Places the Tab header at the right.
     *
     * @default 'Top'
     */
    headerPlacement: HeaderPosition;
    /**
     * Specifies the height style for Tab content.
     * The possible values are:
     * - None: Based on the given height property, the content panel height is set.
     * - Auto: Tallest panel height of a given Tab content is set to all the other panels.
     * - Content: Based on the corresponding content height, the content panel height is set.
     * - Fill: Based on the parent height, the content panel height is set.
     *
     * @default 'Content'
     */
    heightAdjustMode: HeightStyles;
    /**
     * Specifies the Tab display mode when Tab content exceeds the viewing area.
     * The possible modes are:
     * - Scrollable: All the elements are displayed in a single line with horizontal scrolling enabled.
     * - Popup: Tab container holds the items that can be placed within the available space and rest of the items are moved to the popup.
     * If the popup content overflows the height of the page, the rest of the elements can be viewed by scrolling the popup.
     *
     * @default 'Scrollable'
     */
    overflowMode: OverflowMode;
    /**
     * Specifies the modes for Tab content.
     * The possible modes are:
     * `Dynamic` Load Tab content dynamically at the time of switching it's header.
     * `Init` Load all tab contents at initial load.
     * `Demand` Load Tab content when required but keep content once it is rendered.
     *
     * @default 'Dynamic'
     */
    protected loadOn: ContentLoad;
    /**
     * Enable or disable persisting component's state between page reloads.
     * If enabled, following list of states will be persisted.
     * 1. selectedItem
     *
     * @default false
     */
    enablePersistence: boolean;
    /**
     * Defines whether to allow the cross-scripting site or not.
     *
     * @default false
     */
    enableHtmlSanitizer: boolean;
    /**
     * Specifies whether to show the close button for header items to remove the item from the Tab.
     *
     * @default false
     */
    showCloseButton: boolean;
    /**
     * Specifies the scrolling distance in scroller.
     *
     * @default null
     */
    scrollStep: number;
    /**
     * Defines the area in which the draggable element movement will be occurring. Outside that area will be restricted
     * for the draggable element movement. By default, the draggable element movement occurs in the toolbar.
     * @default null
     */
    dragArea: string;
    /**
     * Sets true to allow drag and drop the Tab items
     * @default false
     */
    allowDragAndDrop: boolean;
    /**
     * Specifies the animation configuration settings while showing the content of the Tab.
     *
     * @default
     * { previous: { effect: 'SlideLeftIn', duration: 600, easing: 'ease' },
     * next: { effect: 'SlideRightIn', duration: 600, easing: 'ease' } }
     */
    animation: TabAnimationSettingsModel;
    /**
     * The event will be fired once the component rendering is completed.
     *
     * @event
     */
    created: EmitType<Event>;
    /**
     * The event will be fired before adding the item to the Tab.
     *
     * @event
     */
    adding: EmitType<AddEventArgs>;
    /**
     * The event will be fired after adding the item to the Tab.
     *
     * @event
     */
    added: EmitType<AddEventArgs>;
    /**
     * The event will be fired before the item gets selected.
     *
     * @event
     */
    selecting: EmitType<SelectingEventArgs>;
    /**
     * The event will be fired after the item gets selected.
     *
     * @event
     */
    selected: EmitType<SelectEventArgs>;
    /**
     * The event will be fired before removing the item from the Tab.
     *
     * @event
     */
    removing: EmitType<RemoveEventArgs>;
    /**
     * The event will be fired after removing the item from the Tab.
     *
     * @event
     */
    removed: EmitType<RemoveEventArgs>;
    /**
     * The event will be fired before dragging the item from Tab
     * @event
     */
    onDragStart: EmitType<DragEventArgs>;
    /**
     * The event will be fired while dragging the Tab item
     * @event
     */
    dragging: EmitType<DragEventArgs>;
    /**
     * The event will be fired after dropping the Tab item
     * @event
     */
    dragged: EmitType<DragEventArgs>;
    /**
     * The event will be fired when the component gets destroyed.
     *
     * @event
     */
    destroyed: EmitType<Event>;
    /**
     * Removes the component from the DOM and detaches all its related event handlers, attributes and classes.
     *
     * @returns {void}
     */
    destroy(): void;
    /**
     * Refresh the tab component
     *
     * @returns {void}
     */
    refresh(): void;
    /**
     * Initialize component
     *
     * @private
     * @returns {void}
     */
    protected preRender(): void;
    /**
     * Initializes a new instance of the Tab class.
     *
     * @param {TabModel} options  - Specifies Tab model properties as options.
     * @param {string | HTMLElement} element  - Specifies the element that is rendered as a Tab.
     */
    constructor(options?: TabModel, element?: string | HTMLElement);
    /**
     * Initialize the component rendering
     *
     * @private
     * @returns {void}
     */
    protected render(): void;
    private renderContainer;
    private serverItemsChanged;
    private headerReady;
    private setActiveContent;
    private renderHeader;
    private renderContent;
    private reRenderItems;
    private parseObject;
    private removeActiveClass;
    private checkPopupOverflow;
    private popupHandler;
    private updateOrientationAttribute;
    private setCloseButton;
    private prevCtnAnimation;
    private triggerPrevAnimation;
    private triggerAnimation;
    private keyPressed;
    private getTabHeader;
    private getEleIndex;
    private extIndex;
    private expTemplateContent;
    private templateCompile;
    private compileElement;
    private headerTextCompile;
    private getContent;
    private getTrgContent;
    private findEle;
    private isVertical;
    private addVerticalClass;
    private updatePopAnimationConfig;
    private changeOrientation;
    private focusItem;
    private serverChangeOrientation;
    private changeToolbarOrientation;
    private setOrientation;
    private setCssClass;
    private setContentHeight;
    private getHeight;
    private setActiveBorder;
    private setActive;
    private contentReady;
    private setItems;
    private setRTL;
    private refreshActiveBorder;
    private showPopup;
    private bindDraggable;
    private wireEvents;
    private unWireEvents;
    private clickHandler;
    private swipeHandler;
    private spaceKeyDown;
    private keyHandler;
    private refreshActElePosition;
    private refreshItemVisibility;
    private hoverHandler;
    private evalOnPropertyChangeItems;
    private initializeDrag;
    private helper;
    private itemDragStart;
    private dragAction;
    private itemDragStop;
    /**
     * Enables or disables the specified Tab item. On passing value as `false`, the item will be disabled.
     *
     * @param  {number} index - Index value of target Tab item.
     * @param  {boolean} value - Boolean value that determines whether the command should be enabled or disabled.
     * By default, isEnable is true.
     * @returns {void}.
     */
    enableTab(index: number, value: boolean): void;
    /**
     * Adds new items to the Tab that accepts an array as Tab items.
     *
     * @param  {TabItemModel[]} items - An array of item that is added to the Tab.
     * @param  {number} index - Number value that determines where the items to be added. By default, index is 0.
     * @returns {void}.
     */
    addTab(items: TabItemModel[], index?: number): void;
    private addingTabContent;
    /**
     * Removes the items in the Tab from the specified index.
     *
     * @param  {number} index - Index of target item that is going to be removed.
     * @returns {void}.
     */
    removeTab(index: number): void;
    /**
     * Shows or hides the Tab that is in the specified index.
     *
     * @param  {number} index - Index value of target item.
     * @param  {boolean} value - Based on this Boolean value, item will be hide (false) or show (true). By default, value is true.
     * @returns {void}.
     */
    hideTab(index: number, value?: boolean): void;
    /**
     * Specifies the index or HTMLElement to select an item from the Tab.
     *
     * @param  {number | HTMLElement} args - Index or DOM element is used for selecting an item from the Tab.
     * @param {Event} event - An event which takes place in DOM.
     * @returns {void}.
     */
    select(args: number | HTEle, event?: Event): void;
    private selectingContent;
    /**
     * Gets the item index from the Tab.
     *
     * @param  {string} tabItemId - Item ID is used for getting index from the Tab.
     * @returns {number} - It returns item index.
     */
    getItemIndex(tabItemId: string): number;
    /**
     * Specifies the value to disable/enable the Tab component.
     * When set to `true`, the component will be disabled.
     *
     * @param  {boolean} value - Based on this Boolean value, Tab will be enabled (false) or disabled (true).
     * @returns {void}.
     */
    disable(value: boolean): void;
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @returns {string} - It returns the persisted state.
     */
    protected getPersistData(): string;
    /**
     * Returns the current module name.
     *
     * @returns {string} - It returns the current module name.
     * @private
     */
    protected getModuleName(): string;
    /**
     * Gets called when the model property changes.The data that describes the old and new values of the property that changed.
     *
     * @param  {TabModel} newProp - It contains the new value of data.
     * @param  {TabModel} oldProp - It contains the old value of data.
     * @returns {void}
     * @private
     */
    onPropertyChanged(newProp: TabModel, oldProp: TabModel): void;
    refreshActiveTab(): void;
}
export {};
