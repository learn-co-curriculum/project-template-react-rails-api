import { Component, EmitType } from '@syncfusion/ej2-base';
import { BaseEventArgs, Effect } from '@syncfusion/ej2-base';
import { INotifyPropertyChanged, ChildProperty } from '@syncfusion/ej2-base';
import { AccordionModel, AccordionItemModel, AccordionAnimationSettingsModel, AccordionActionSettingsModel } from './accordion-model';
/**
 * Specifies the option to expand single or multiple panel at a time.
 */
export declare type ExpandMode = 'Single' | 'Multiple';
/** An interface that holds options to control the accordion click action. */
export interface AccordionClickArgs extends BaseEventArgs {
    /** Defines the current Accordion Item Object. */
    item?: AccordionItemModel;
    /**
     * Defines the current Event arguments.
     */
    originalEvent?: Event;
}
/** An interface that holds options to control the expanding item action. */
export interface ExpandEventArgs extends BaseEventArgs {
    /** Defines the current Accordion Item Object. */
    item?: AccordionItemModel;
    /** Defines the current Accordion Item Element. */
    element?: HTMLElement;
    /** Defines the expand/collapse state. */
    isExpanded?: boolean;
    /** Defines the prevent action. */
    cancel?: boolean;
    /** Defines the Accordion Item Index */
    index?: number;
    /** Defines the Accordion Item Content */
    content?: HTMLElement;
}
/** An interface that holds options to control the expanded item action. */
export interface ExpandedEventArgs extends BaseEventArgs {
    /** Defines the current Accordion Item Object. */
    item?: AccordionItemModel;
    /** Defines the current Accordion Item Element. */
    element?: HTMLElement;
    /** Defines the expand/collapse state. */
    isExpanded?: boolean;
    /** Defines the Accordion Item Index */
    index?: number;
    /** Defines the Accordion Item Content */
    content?: HTMLElement;
}
/**
 * Objects used for configuring the Accordion expanding item action properties.
 */
export declare class AccordionActionSettings extends ChildProperty<AccordionActionSettings> {
    /**
     * Specifies the type of animation.
     *
     * @default 'SlideDown'
     * @aspType string
     */
    effect: 'None' | Effect;
    /**
     * Specifies the duration to animate.
     *
     * @default 400
     */
    duration: number;
    /**
     * Specifies the animation timing function.
     *
     * @default 'linear'
     */
    easing: string;
}
/**
 * Objects used for configuring the Accordion animation properties.
 */
export declare class AccordionAnimationSettings extends ChildProperty<AccordionAnimationSettings> {
    /**
     * Specifies the animation to appear while collapsing the Accordion item.
     *
     * @default { effect: 'SlideDown', duration: 400, easing: 'linear' }
     */
    collapse: AccordionActionSettingsModel;
    /**
     * Specifies the animation to appear while expanding the Accordion item.
     *
     * @default { effect: 'SlideDown', duration: 400, easing: 'linear' }
     */
    expand: AccordionActionSettingsModel;
}
/**
 * An item object that is used to configure Accordion items.
 */
export declare class AccordionItem extends ChildProperty<AccordionItem> {
    /**
     * Sets the text content to be displayed for the Accordion item.
     * You can set the content of the Accordion item using `content` property.
     * It also supports to include the title as `HTML element`, `string`, or `query selector`.
     * ```typescript
     *   let accordionObj: Accordion = new Accordion( {
     *        items: [
     *          { header: 'Accordion Header', content: 'Accordion Content' },
     *          { header: '<div>Accordion Header</div>', content: '<div>Accordion Content</div' },
     *          { header: '#headerContent', content: '#panelContent' }]
     *        });
     *   accordionObj.appendTo('#accordion');
     * ```
     *
     * @default null
     */
    content: string;
    /**
     * Sets the header text to be displayed for the Accordion item.
     * You can set the title of the Accordion item using `header` property.
     * It also supports to include the title as `HTML element`, `string`, or `query selector`.
     * ```typescript
     *   let accordionObj: Accordion = new Accordion( {
     *        items: [
     *          { header: 'Accordion Header', content: 'Accordion Content' },
     *          { header: '<div>Accordion Header</div>', content: '<div>Accordion Content</div' },
     *          { header: '#headerContent', content: '#panelContent' }]
     *        });
     *   accordionObj.appendTo('#accordion');
     * ```
     *
     * @default null
     */
    header: string;
    /**
     * Defines single/multiple classes (separated by a space) are to be used for Accordion item customization.
     *
     * @default null
     */
    cssClass: string;
    /**
     * Defines an icon with the given custom CSS class that is to be rendered before the header text.
     * Add the css classes to the `iconCss` property and write the css styles to the defined class to set images/icons.
     * Adding icon is applicable only to the header.
     * ```typescript
     *   let accordionObj: Accordion = new Accordion( {
     *        items: [
     *          { header: 'Accordion Header', iconCss: 'e-app-icon' }]
     *        });
     *   accordionObj.appendTo('#accordion');
     * ```
     * ```css
     * .e-app-icon::before {
     *   content: "\e710";
     * }
     * ```
     *
     * @default null
     */
    iconCss: string;
    /**
     * Sets the expand (true) or collapse (false) state of the Accordion item. By default, all the items are in a collapsed state.
     *
     * @default false
     */
    expanded: boolean;
    /**
     * Sets false to hide an accordion item.
     *
     * @default true
     */
    visible: boolean;
    /**
     * Sets true to disable an accordion item.
     *
     * @default false
     */
    disabled: boolean;
    /**
     * Sets unique ID to accordion item.
     *
     * @default null
     */
    id: string;
}
/**
 * The Accordion is a vertically collapsible content panel that displays one or more panels at a time within the available space.
 * ```html
 * <div id='accordion'/>
 * <script>
 *   var accordionObj = new Accordion();
 *   accordionObj.appendTo('#accordion');
 * </script>
 * ```
 */
export declare class Accordion extends Component<HTMLElement> implements INotifyPropertyChanged {
    private lastActiveItemId;
    private trgtEle;
    private ctrlTem;
    private keyModule;
    private initExpand;
    private isNested;
    private isDestroy;
    private templateEle;
    private isAngular;
    private headerTemplateFn;
    private itemTemplateFn;
    private removeRippleEffect;
    /**
     * Contains the keyboard configuration of the Accordion.
     */
    private keyConfigs;
    /**
     * An array of item that is used to specify Accordion items.
     * ```typescript
     *   let accordionObj: Accordion = new Accordion( {
     *        items: [
     *          { header: 'Accordion Header', content: 'Accordion Content' }]
     *        });
     *   accordionObj.appendTo('#accordion');
     * ```
     *
     * @default []
     */
    items: AccordionItemModel[];
    /**
     * Specifies the datasource for the accordion items.
     *
     * @isdatamanager false
     * @default []
     */
    dataSource: Object[];
    /**
     * Specifies the template option for accordion items.
     *
     * @default null
     */
    itemTemplate: string;
    /**
     * Specifies the header title template option for accordion items.
     *
     * @default null
     */
    headerTemplate: string;
    /**
     * Specifies the width of the Accordion in pixels/number/percentage. Number value is considered as pixels.
     *
     * @default '100%'
     */
    width: string | number;
    /**
     * Specifies the height of the Accordion in pixels/number/percentage. Number value is considered as pixels.
     *
     * @default 'auto'
     */
    height: string | number;
    /**
     * Specifies the expanded items at initial load.
     *
     * @default []
     */
    expandedIndices: number[];
    /**
     * Specifies the options to expand single or multiple panel at a time.
     * The possible values are:
     * - Single: Sets to expand only one Accordion item at a time.
     * - Multiple: Sets to expand more than one Accordion item at a time.
     *
     * @default 'Multiple'
     */
    expandMode: ExpandMode;
    /**
     * Defines whether to allow the cross-scripting site or not.
     *
     * @default false
     */
    enableHtmlSanitizer: boolean;
    /**
     * Specifies the animation configuration settings for expanding and collapsing the panel.
     *
     * @default { expand: { effect: 'SlideDown', duration: 400, easing: 'linear' },
     * collapse: { effect: 'SlideUp', duration: 400, easing: 'linear' }}
     */
    animation: AccordionAnimationSettingsModel;
    /**
     * The event will be fired while clicking anywhere within the Accordion.
     *
     * @event
     */
    clicked: EmitType<AccordionClickArgs>;
    /**
     * The event will be fired before the item gets collapsed/expanded.
     *
     * @event
     */
    expanding: EmitType<ExpandEventArgs>;
    /**
     * The event will be fired after the item gets collapsed/expanded.
     *
     * @event
     */
    expanded: EmitType<ExpandedEventArgs>;
    /**
     * The event will be fired once the control rendering is completed.
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
     * Initializes a new instance of the Accordion class.
     *
     * @param {AccordionModel} options  - Specifies Accordion model properties as options.
     * @param {string | HTMLElement} element  - Specifies the element that is rendered as an Accordion.
     */
    constructor(options?: AccordionModel, element?: string | HTMLElement);
    /**
     * Removes the control from the DOM and also removes all its related events.
     *
     * @returns {void}
     */
    destroy(): void;
    protected preRender(): void;
    private add;
    private remove;
    /**
     * To initialize the control rendering
     *
     * @private
     * @returns {void}
     */
    protected render(): void;
    private initialize;
    private renderControl;
    private wireFocusEvents;
    private unwireEvents;
    private wireEvents;
    private templateParser;
    private initializeheaderTemplate;
    private initializeItemTemplate;
    private getheaderTemplate;
    private getItemTemplate;
    private focusIn;
    private focusOut;
    private ctrlTemplate;
    private toggleIconGenerate;
    private initItemExpand;
    private renderItems;
    private clickHandler;
    private afterContentRender;
    private eleMoveFocus;
    private keyActionHandler;
    private headerEleGenerate;
    private renderInnerItem;
    private angularnativeCondiCheck;
    private fetchElement;
    private ariaAttrUpdate;
    private contentRendering;
    private expand;
    private expandAnimation;
    private expandProgress;
    private expandedItemsPush;
    private getIndexByItem;
    private getItemElements;
    private expandedItemsPop;
    private collapse;
    private collapseAnimation;
    private collapseProgress;
    /**
     * Returns the current module name.
     *
     * @returns {string} - It returns the current module name.
     * @private
     */
    protected getModuleName(): string;
    private itemAttribUpdate;
    private getItems;
    /**
     * Adds new item to the Accordion with the specified index of the Accordion.
     *
     * @param  {AccordionItemModel | AccordionItemModel[] | Object | Object[]} item - Item array that is to be added to the Accordion.
     * @param  {number} index - Number value that determines where the item should be added.
     * By default, item is added at the last index if the index is not specified.
     * @returns {void}
     */
    addItem(item: AccordionItemModel | AccordionItemModel[] | Object | Object[], index?: number): void;
    private expandedItemRefresh;
    /**
     * Dynamically removes item from Accordion.
     *
     * @param  {number} index - Number value that determines which item should be removed.
     * @returns {void}.
     */
    removeItem(index: number): void;
    /**
     * Sets focus to the specified index item header in Accordion.
     *
     * @param  {number} index - Number value that determines which item should be focused.
     * @returns {void}.
     */
    select(index: number): void;
    /**
     * Shows or hides the specified item from Accordion.
     *
     * @param  {number} index - Number value that determines which item should be hidden/shown.
     * @param  {boolean} isHidden - Boolean value that determines the action either hide (true) or show (false). Default value is false.
     * If the `isHidden` value is false, the item is shown or else item it is hidden.
     * @returns {void}.
     */
    hideItem(index: number, isHidden?: boolean): void;
    /**
     * Enables/Disables the specified Accordion item.
     *
     * @param  {number} index - Number value that determines which item should be enabled/disabled.
     * @param  {boolean} isEnable - Boolean value that determines the action as enable (true) or disable (false).
     * If the `isEnable` value is true, the item is enabled or else it is disabled.
     * @returns {void}.
     */
    enableItem(index: number, isEnable: boolean): void;
    /**
     * Refresh the Accordion component.
     *
     * @returns {void}.
     */
    refresh(): void;
    /**
     * Expands/Collapses the specified Accordion item.
     *
     * @param  {boolean} isExpand - Boolean value that determines the action as expand or collapse.
     * @param  {number} index - Number value that determines which item should be expanded/collapsed.`index` is optional parameter.
     * Without Specifying index, based on the `isExpand` value all Accordion item can be expanded or collapsed.
     * @returns {void}.
     */
    expandItem(isExpand: boolean, index?: number): void;
    private itemExpand;
    private destroyItems;
    private restoreContent;
    private updateItem;
    private setTemplate;
    private templateCompile;
    protected getPersistData(): string;
    /**
     * Gets called when the model property changes.The data that describes the old and new values of the property that changed.
     *
     * @param  {AccordionModel} newProp - It contains the new value of data.
     * @param  {AccordionModel} oldProp - It contains the old value of data.
     * @returns {void}
     * @private
     */
    onPropertyChanged(newProp: AccordionModel, oldProp: AccordionModel): void;
}
