import { Virtualization } from './virtualization';
import { ModuleDeclaration } from '@syncfusion/ej2-base';
import { Component, BaseEventArgs } from '@syncfusion/ej2-base';
import { INotifyPropertyChanged, ChildProperty } from '@syncfusion/ej2-base';
import { EmitType } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { ListBaseOptions, SortOrder, FieldsMapping } from '../common/list-base';
import { ListViewModel, FieldSettingsModel } from './list-view-model';
export declare const classNames: ClassNames;
/**
 * An interface that holds options of fields.
 */
export interface Fields {
    /**
     * Specifies the id field mapped in dataSource.
     */
    id?: string | number;
    /**
     * The `text` property is used to map the text value from the data source for each list item.
     */
    text?: string | number;
    /**
     * It is used to map the custom field values of list item from the dataSource.
     */
    [key: string]: Object | string | number | undefined;
}
/**
 * Represents the field settings of the ListView.
 */
export declare class FieldSettings extends ChildProperty<FieldSettings> {
    /**
     * Specifies the id field mapped in dataSource.
     */
    id: string;
    /**
     * The `text` property is used to map the text value from the data source for each list item.
     */
    text: string;
    /**
     * The `isChecked` property is used to check whether the list items are in checked state or not.
     */
    isChecked: string;
    /**
     * The `isVisible` property is used to check whether the list items are in visible state or not.
     */
    isVisible: string;
    /**
     * Specifies the enabled state of the ListView component.
     * And, we can disable the component using this property by setting its value as false.
     */
    enabled: string;
    /**
     * The `iconCss` is used to customize the icon to the list items dynamically.
     *  We can add a specific image to the icons using `iconCss` property.
     */
    iconCss: string;
    /**
     * The `child` property is used for nested navigation of listed items.
     */
    child: string;
    /**
     * The `tooltip` is used to display the information about the target element while hovering on list items.
     */
    tooltip: string;
    /**
     * The `groupBy` property is used to wraps the ListView elements into a group.
     */
    groupBy: string;
    /**
     * The `sortBy` property used to enable the sorting of list items to be ascending or descending order.
     */
    sortBy: string;
    /**
     * The `htmlAttributes` allows additional attributes such as id, class, etc., and
     *  accepts n number of attributes in a key-value pair format.
     */
    htmlAttributes: string;
    /**
     * Specifies the `tableName` used to fetch data from a specific table in the server.
     */
    tableName: string;
}
/**
 * An interface that holds animation settings.
 */
export interface AnimationSettings {
    /**
     * It is used to specify the effect which is shown in sub list transform.
     */
    effect?: ListViewEffect;
    /**
     * It is used to specify the time duration of transform object.
     */
    duration?: number;
    /**
     * It is used to specify the easing effect applied while transform
     */
    easing?: string;
}
/**
 * An enum type that denotes the effects of the ListView. Available options are as follows None, SlideLeft, SlideDown, Zoom, Fade;
 */
export declare type ListViewEffect = 'None' | 'SlideLeft' | 'SlideDown' | 'Zoom' | 'Fade';
/**
 * An enum type that denotes the position of checkbox of the ListView. Available options are as follows Left and Right;
 */
export declare type checkBoxPosition = 'Left' | 'Right';
/**
 * Represents the EJ2 ListView control.
 * ```html
 * <div id="listview">
 * <ul>
 * <li>Favorite</li>
 * <li>Documents</li>
 * <li>Downloads</li>
 * </ul>
 * </div>
 * ```
 * ```typescript
 *   var listviewObject = new ListView({});
 *   listviewObject.appendTo("#listview");
 * ```
 */
export declare class ListView extends Component<HTMLElement> implements INotifyPropertyChanged {
    private ulElement;
    private selectedLI;
    private onUIScrolled;
    private curUL;
    private curDSLevel;
    private curViewDS;
    private curDSJSON;
    localData: DataSource[];
    private liCollection;
    private headerEle;
    private contentContainer;
    private touchModule;
    private listBaseOption;
    virtualizationModule: Virtualization;
    private animateOptions;
    private rippleFn;
    private isNestedList;
    private currentLiElements;
    private selectedData;
    private selectedId;
    private isWindow;
    private selectedItems;
    private aniObj;
    private LISTVIEW_TEMPLATE_ID;
    private LISTVIEW_GROUPTEMPLATE_ID;
    private LISTVIEW_HEADERTEMPLATE_ID;
    private liElement;
    private itemReRender;
    private virtualCheckBox;
    private liElementHeight;
    private previousSelectedItems;
    private hiddenItems;
    private enabledItems;
    private disabledItems;
    /**
     * The `cssClass` property is used to add a user-preferred class name in the root element of the ListView,
     *  using which we can customize the component (both CSS and functionality customization)
     *
     * {% codeBlock src='listview/cssClass/index.md' %}{% endcodeBlock %}
     *
     * @default ''
     */
    cssClass: string;
    /**
     * If `enableVirtualization` set to true, which will increase the ListView performance, while loading a large amount of data.
     *
     * {% codeBlock src='listview/enableVirtualization/index.md' %}{% endcodeBlock %}
     *
     * @default false
     */
    enableVirtualization: boolean;
    /**
     * The `htmlAttributes` allows additional attributes such as id, class, etc., and
     *  accepts n number of attributes in a key-value pair format.
     *
     * {% codeBlock src='listview/htmlAttributes/index.md' %}{% endcodeBlock %}
     *
     * @default {}
     */
    htmlAttributes: {
        [key: string]: string;
    };
    /**
     * If `enable` set to true, the list items are enabled.
     * And, we can disable the component using this property by setting its value as false.
     *
     * {% codeBlock src='listview/enable/index.md' %}{% endcodeBlock %}
     *
     * @default true
     */
    enable: boolean;
    /**
     * The `dataSource` provides the data to render the ListView component which is mapped with the fields of ListView.
     *
     * @isGenericType true
     *
     * {% codeBlock src='listview/dataSource/index.md' %}{% endcodeBlock %}
     *
     * @default []
     */
    dataSource: {
        [key: string]: Object;
    }[] | string[] | number[] | DataManager;
    /**
     * The `query` is used to fetch the specific data from dataSource by using where and select keywords.
     *
     * {% codeBlock src='listview/query/index.md' %}{% endcodeBlock %}
     *
     * @default null
     * @blazorType Data.Query
     */
    query: Query;
    /**
     * The `fields` is used to map keys from the dataSource which extracts the appropriate data from the dataSource
     *  with specified mapped with the column fields to render the ListView.
     *
     * {% codeBlock src='listview/fields/index.md' %}{% endcodeBlock %}
     *
     * @default defaultMappedFields
     */
    fields: FieldSettingsModel;
    /**
     * The `animation` property provides an option to apply the different
     *  animations on the ListView component.
     *
     * {% codeBlock src='listview/animation/index.md' %}{% endcodeBlock %}
     *
     *
     * @default { effect: 'SlideLeft', duration: 400, easing: 'ease' }
     */
    animation: AnimationSettings;
    /**
     * The `sortOrder` is used to sort the data source. The available type of sort orders are,
     * * `None` - The data source is not sorting.
     * * `Ascending` - The data source is sorting with ascending order.
     * * `Descending` - The data source is sorting with descending order.
     *
     * {% codeBlock src='listview/sortOrder/index.md' %}{% endcodeBlock %}
     *
     * @default 'None'
     */
    sortOrder: SortOrder;
    /**
     * If `showIcon` set to true, which will show or hide the icon of the list item.
     *
     * {% codeBlock src='listview/showIcon/index.md' %}{% endcodeBlock %}
     *
     * @default false
     */
    showIcon: boolean;
    /**
     * If `showCheckBox` set to true, which will show or hide the checkbox.
     *
     * {% codeBlock src='listview/showCheckBox/index.md' %}{% endcodeBlock %}
     *
     *
     * @default false
     */
    showCheckBox: boolean;
    /**
     * The `checkBoxPosition` is used to set the position of check box in a list item.
     * By default, the `checkBoxPosition` is Left, which will appear before the text content in a list item.
     *
     * {% codeBlock src='listview/checkBoxPosition/index.md' %}{% endcodeBlock %}
     *
     * @default 'Left'
     */
    checkBoxPosition: checkBoxPosition;
    /**
     * The `headerTitle` is used to set the title of the ListView component.
     *
     * {% codeBlock src='listview/headerTitle/index.md' %}{% endcodeBlock %}
     *
     *
     * @default ""
     */
    headerTitle: string;
    /**
     * If `showHeader` set to true, which will show or hide the header of the ListView component.
     *
     * {% codeBlock src='listview/showHeader/index.md' %}{% endcodeBlock %}
     *
     * @default false
     */
    showHeader: boolean;
    /**
     * If `enableHtmlSanitizer` set to true, allows the cross-scripting site.
     *
     * {% codeBlock src='listview/enableHtmlSanitizer/index.md' %}{% endcodeBlock %}
     *
     * @default false
     */
    enableHtmlSanitizer: boolean;
    /**
     * Defines the height of the ListView component which accepts both string and number values.
     *
     * {% codeBlock src='listview/height/index.md' %}{% endcodeBlock %}
     *
     * @default ''
     */
    height: number | string;
    /**
     * Defines the width of the ListView component which accepts both string and number values.
     *
     * {% codeBlock src='listview/width/index.md' %}{% endcodeBlock %}
     *
     * @default ''
     */
    width: number | string;
    /**
     * The ListView component supports to customize the content of each list items with the help of `template` property.
     *
     * {% codeBlock src='listview/template/index.md' %}{% endcodeBlock %}
     *
     * @default null

     */
    template: string;
    /**
     * The ListView has an option to custom design the ListView header title with the help of `headerTemplate` property.
     *
     * {% codeBlock src="listview/headerTemplate/index.md" %}{% endcodeBlock %}
     *
     * @default null

     */
    headerTemplate: string;
    /**
     * The ListView has an option to custom design the group header title with the help of `groupTemplate` property.
     *
     * {% codeBlock src="listview/groupTemplate/index.md" %}{% endcodeBlock %}
     *
     * @default null

     */
    groupTemplate: string;
    /**
     * Triggers when we select the list item in the component.
     *
     * @event 'object'
     * @blazorProperty 'Selected'
     */
    select: EmitType<SelectEventArgs>;
    /**
     * Triggers when every ListView action starts.
     *
     * @event 'object'
     * @blazorProperty 'OnActionBegin'
     */
    actionBegin: EmitType<object>;
    /**
     * Triggers when every ListView actions completed.
     *
     * @event 'object'
     * @blazorProperty 'OnActionComplete'
     */
    actionComplete: EmitType<MouseEvent>;
    /**
     * Triggers, when the data fetch request from the remote server, fails.
     *
     * @event 'object'
     *
     * @blazorProperty 'OnActionFailure'
     */
    actionFailure: EmitType<MouseEvent>;
    /**
     * Constructor for creating the widget
     *
     * @param options
     *
     * @param element
     */
    constructor(options?: ListViewModel, element?: string | HTMLElement);
    /**
     * @param newProp
     *
     * @param oldProp
     *
     * @private
     */
    onPropertyChanged(newProp: ListViewModel, oldProp: ListViewModel): void;
    private setHTMLAttribute;
    private setCSSClass;
    private setSize;
    private setEnable;
    private setEnableRTL;
    private enableElement;
    private header;
    private switchView;
    protected preRender(): void;
    private updateLiElementHeight;
    private initialization;
    private renderCheckbox;
    private checkInternally;
    /**
     * Checks the specific list item by passing the unchecked fields as an argument to this method.
     *
     * @param  {Fields | HTMLElement | Element} item - It accepts Fields or HTML list element as an argument.
     */
    checkItem(item: Fields | HTMLElement | Element): void;
    private toggleCheckBase;
    /**
     * Uncheck the specific list item by passing the checked fields as an argument to this method.
     *
     * @param  {Fields | HTMLElement | Element} item - It accepts Fields or HTML list element as an argument.
     */
    uncheckItem(item: Fields | HTMLElement | Element): void;
    /**
     * Checks all the unchecked items in the ListView.
     */
    checkAllItems(): void;
    /**
     * Uncheck all the checked items in ListView.
     */
    uncheckAllItems(): void;
    private toggleAllCheckBase;
    private setCheckbox;
    /**
     * Refresh the height of the list item only on enabling the virtualization property.
     */
    refreshItemHeight(): void;
    private clickHandler;
    private removeElement;
    private hoverHandler;
    private leaveHandler;
    private homeKeyHandler;
    private onArrowKeyDown;
    private arrowKeyHandler;
    private enterKeyHandler;
    private spaceKeyHandler;
    private keyActionHandler;
    private swipeActionHandler;
    private focusout;
    private wireEvents;
    private unWireEvents;
    private removeFocus;
    private removeHover;
    private removeSelect;
    private isValidLI;
    private setCheckboxLI;
    private selectEventData;
    private setSelectedItemData;
    private setSelectLI;
    private setHoverLI;
    private getSubDS;
    private getItemData;
    private findItemFromDS;
    private getQuery;
    private setViewDataSource;
    private isInAnimation;
    private setLocalData;
    private reRender;
    private resetCurrentList;
    private setAttributes;
    private createList;
    private resetBlazorTemplates;
    private updateBlazorTemplates;
    private exceptionEvent;
    private UpdateCurrentUL;
    private removeActiveClass;
    private renderingNestedList;
    private renderSubList;
    private renderIntoDom;
    private renderList;
    private getElementUID;
    /**
     * Initializes the ListView component rendering.
     */
    render(): void;
    private initBlazor;
    /**
     * It is used to destroy the ListView component.
     */
    destroy(): void;
    /**
     * Switches back from the navigated sub list item.
     */
    back(): void;
    /**
     * Selects the list item from the ListView by passing the elements or field object.
     *
     * @param  {Fields | HTMLElement | Element} item - We can pass element Object or Fields as Object with ID and Text fields.
     */
    selectItem(item: Fields | HTMLElement | Element): void;
    private getLiFromObjOrElement;
    /**
     * Selects multiple list items from the ListView.
     *
     * @param  {Fields[] | HTMLElement[] | Element[]} item - We can pass array of
     *  elements or array of fields Object with ID and Text fields.
     */
    selectMultipleItems(item: Fields[] | HTMLElement[] | Element[]): void;
    private getParentId;
    /**
     * Gets the details of the currently selected item from the list items.
     *
     * @blazorType ListSelectedItem<TValue>
     */
    getSelectedItems(): SelectedItem | SelectedCollection | UISelectedItem | NestedListData;
    private blazorGetSelectedItems;
    private convertItemsToArray;
    /**
     * Finds out an item details from the current list.
     *
     * @param  {Fields | HTMLElement | Element} item - We can pass element Object or Fields as Object with ID and Text fields.
     * @blazorType TValue
     */
    findItem(item: Fields | HTMLElement | Element): SelectedItem;
    /**
     * Enables the disabled list items by passing the Id and text fields.
     *
     * @param  {Fields | HTMLElement | Element} item - We can pass element Object or Fields as Object with ID and Text fields.
     */
    enableItem(item: Fields | HTMLElement | Element): void;
    /**
     * Disables the list items by passing the Id and text fields.
     *
     * @param  {Fields | HTMLElement | Element} item - We can pass element Object or Fields as Object with ID and Text fields.
     */
    disableItem(item: Fields | HTMLElement | Element): void;
    private setItemState;
    /**
     * Shows the hide list item from the ListView.
     *
     * @param  {Fields | HTMLElement | Element} item - We can pass element Object or Fields as Object with ID and Text fields.
     */
    showItem(item: Fields | HTMLElement | Element): void;
    /**
     * Hides an list item from the ListView.
     *
     * @param  {Fields | HTMLElement | Element} item - We can pass element Object or Fields as Object with ID and Text fields.
     */
    hideItem(item: Fields | HTMLElement | Element): void;
    private showHideItem;
    /**
     * Adds the new list item(s) to the current ListView.
     * To add a new list item(s) in the ListView, we need to pass the `data` as an array of items that need
     * to be added and `fields` as the target item to which we need to add the given item(s) as its children.
     * For example fields: { text: 'Name', tooltip: 'Name', id:'id'}
     *
     * @param  {{Object}[]} data - JSON Array Data that need to add.
     *
     * @param  {Fields} fields - Target item to add the given data as its children (can be null).
     *
     * @blazorType data|object,fields|object
     */
    addItem(data: {
        [key: string]: Object;
    }[], fields?: Fields): void;
    private addItemInternally;
    private addItemInNestedList;
    private addItemIntoDom;
    private addListItem;
    /**
     * Removes the list item from the data source based on a passed
     *  element like fields: { text: 'Name', tooltip: 'Name', id:'id'}
     *
     * @param  {Fields | HTMLElement | Element} item - We can pass element Object or Fields as Object with ID and Text fields.
     */
    removeItem(item: Fields | HTMLElement | Element): void;
    private removeItemFromList;
    private validateNestedView;
    /**
     * Removes multiple items from the ListView by passing the array of elements or array of field objects.
     *
     * @param  {Fields[] | HTMLElement[] | Element[]} item - We can pass array of elements or array of field Object with ID and Text fields.
     */
    removeMultipleItems(item: HTMLElement[] | Element[] | Fields[]): void;
    private findParent;
    protected getModuleName(): string;
    requiredModules(): ModuleDeclaration[];
    /**
     * Get the properties to be maintained in the persisted state.
     */
    protected getPersistData(): string;
}
/** @hidden */
export interface ClassNames {
    root: string;
    hover: string;
    focused: string;
    selected: string;
    parentItem: string;
    listItem: string;
    hasChild: string;
    view: string;
    header: string;
    text: string;
    headerText: string;
    headerTemplateText: string;
    listItemText: string;
    listIcon: string;
    textContent: string;
    groupListItem: string;
    disable: string;
    content: string;
    backIcon: string;
    icon: string;
    checkboxWrapper: string;
    checkbox: string;
    checked: string;
    checkboxIcon: string;
    checklist: string;
    checkboxRight: string;
    checkboxLeft: string;
    listviewCheckbox: string;
    itemCheckList: string;
    virtualElementContainer: string;
}
/**
 * An interface that holds list selected item.
 */
export interface ListSelectedItem {
    /**
     * Specifies the selected item dataSource collection.
     *
     * @isGenericType true
     * @blazorType List<T>
     */
    data?: object[];
    /**
     * Specifies the selected item text collection.
     */
    text?: string[];
    /**
     * Specifies index of the selected element.
     * Available only in virtualization.
     */
    index?: number[];
    /**
     * Specifies the hierarchical parent id collection of the current view.
     * Available only in nested list with checkbox enabled.
     */
    parentId?: string[];
}
/**
 * An interface that holds selected item.
 */
export interface SelectedItem {
    /**
     * It denotes the selected item text.
     */
    text: string;
    /**
     * It denotes the selected item list element.
     *
     * @blazorType DOM
     */
    item: HTMLElement | Element;
    /**
     * It denotes the selected item dataSource JSON object.
     *
     * @isGenericType true
     */
    data: {
        [key: string]: Object;
    } | string[] | number[];
}
/**
 * An interface that holds selected collection.
 */
export interface SelectedCollection {
    /**
     * It denotes the selected item text data or collection.
     */
    text: string | string[];
    /**
     * It denotes the selected item list element or element collection.
     */
    item: HTMLElement | Element[] | NodeList;
    /**
     * It denotes the selected item dataSource JSON object or object collection.
     *
     * @isGenericType true
     */
    data: {
        [key: string]: object;
    } | {
        [key: string]: object;
    }[] | string[] | number[];
}
/**
 * An interface that holds UI selected item.
 */
export interface UISelectedItem {
    /**
     * It denotes the selected item text data or collection.
     */
    text: string | number | string[] | number[];
    /**
     * It denotes the selected item list element or element collection.
     */
    item?: HTMLElement | Element[] | NodeList;
    /**
     * It denotes the selected item dataSource JSON object or object collection.
     *
     * @isGenericType true
     */
    data: {
        [key: string]: object;
    } | {
        [key: string]: object;
    }[] | string | number | string[] | number[];
    /**
     * It is used to denote the index of the selected element.
     */
    index?: number | number[];
    /**
     * It is used to check whether the element is checked or not.
     */
    isChecked?: boolean;
}
/**
 * An interface that holds details of data and parent.
 */
export interface DataAndParent {
    /**
     * It denotes the selected item dataSource JSON object or object collection.
     *
     * @isGenericType true
     */
    data: {
        [key: string]: object;
    } | {
        [key: string]: object;
    }[] | string[];
    /**
     * It denotes the selected item's parent id;
     */
    parentId: string[];
}
/**
 * An interface that holds nested list data.
 */
export interface NestedListData {
    /**
     * It denotes the selected item text data or collection.
     */
    text: string | string[];
    /**
     * It denotes the selected item list element or element collection.
     */
    item: HTMLElement | Element[] | NodeList;
    /**
     * It denotes the selected item dataSource JSON object with it's parent id.
     */
    data: DataAndParent[];
}
/**
 * An interface that holds selected event arguments
 */
export interface SelectEventArgs extends BaseEventArgs, SelectedItem {
    /**
     * Specifies that event has triggered by user interaction.
     */
    isInteracted: boolean;
    /**
     * Specifies that event argument when event raised by other event.
     */
    event: MouseEvent | KeyboardEvent;
    /**
     * It is used to denote the index of the selected element.
     */
    index: number;
    /**
     * It is used to check whether the element is checked or not.
     */
    isChecked?: boolean;
}
/**
 * An interface that holds item created event arguments
 */
export interface ItemCreatedArgs {
    curData: {
        [key: string]: object;
    };
    dataSource: {
        [key: string]: object;
    } | string[];
    fields: FieldsMapping;
    item: HTMLElement;
    options: ListBaseOptions;
    text: string;
}
interface DataSource {
    [key: string]: object;
}
export {};
