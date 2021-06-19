/// <reference path="../drop-down-base/drop-down-base-model.d.ts" />
import { DropDownBase, FilteringEventArgs, SelectEventArgs } from '../drop-down-base/drop-down-base';
import { FieldSettingsModel } from '../drop-down-base/drop-down-base-model';
import { ChildProperty, BaseEventArgs } from '@syncfusion/ej2-base';
import { ModuleDeclaration, EmitType } from '@syncfusion/ej2-base';
import { SelectionSettingsModel, ListBoxModel, ToolbarSettingsModel } from './list-box-model';
import { DataManager, Query } from '@syncfusion/ej2-data';
/**
 * Defines the selection mode of List Box.
 */
export declare type SelectionMode = 'Multiple' | 'Single';
/**
 * Defines the toolbar position of List Box.
 */
export declare type ToolBarPosition = 'Left' | 'Right';
/**
 * Defines the checkbox position of List Box.
 */
export declare type CheckBoxPosition = 'Left' | 'Right';
declare type obj = {
    [key: string]: object;
};
/**
 * Defines the Selection settings of List Box.
 */
export declare class SelectionSettings extends ChildProperty<SelectionSettings> {
    /**
     * Specifies the selection modes. The possible values are
     * * `Single`: Allows you to select a single item in the ListBox.
     * * `Multiple`: Allows you to select more than one item in the ListBox.
     *
     * @default 'Multiple'
     */
    mode: SelectionMode;
    /**
     * If 'showCheckbox' is set to true, then 'checkbox' will be visualized in the list item.
     *
     * @default false
     */
    showCheckbox: boolean;
    /**
     * Allows you to either show or hide the selectAll option on the component.
     *
     * @default false
     */
    showSelectAll: boolean;
    /**
     * Set the position of the checkbox.
     *
     * @default 'Left'
     */
    checkboxPosition: CheckBoxPosition;
}
/**
 * Defines the toolbar settings of List Box.
 */
export declare class ToolbarSettings extends ChildProperty<ToolbarSettings> {
    /**
     * Specifies the list of tools for dual ListBox.
     * The predefined tools are 'moveUp', 'moveDown', 'moveTo', 'moveFrom', 'moveAllTo', and 'moveAllFrom'.
     *
     * @default []
     */
    items: string[];
    /**
     * Positions the toolbar before/after the ListBox.
     * The possible values are:
     * * Left: The toolbar will be positioned to the left of the ListBox.
     * * Right: The toolbar will be positioned to the right of the ListBox.
     *
     * @default 'Right'
     */
    position: ToolBarPosition;
}
/**
 * The ListBox is a graphical user interface component used to display a list of items.
 * Users can select one or more items in the list using a checkbox or by keyboard selection.
 * It supports sorting, grouping, reordering and drag and drop of items.
 * ```html
 * <select id="listbox">
 *      <option value='1'>Badminton</option>
 *      <option value='2'>Basketball</option>
 *      <option value='3'>Cricket</option>
 *      <option value='4'>Football</option>
 *      <option value='5'>Tennis</option>
 * </select>
 * ```
 * ```typescript
 * <script>
 *   var listObj = new ListBox();
 *   listObj.appendTo("#listbox");
 * </script>
 * ```
 */
export declare class ListBox extends DropDownBase {
    private prevSelIdx;
    private listCurrentOptions;
    private allowDragAll;
    private checkBoxSelectionModule;
    private tBListBox;
    private initLoad;
    private spinner;
    private initialSelectedOptions;
    private showSelectAll;
    private selectAllText;
    private unSelectAllText;
    private popupWrapper;
    private targetInputElement;
    private isValidKey;
    private isFiltered;
    private clearFilterIconElem;
    private remoteFilterAction;
    private mainList;
    private remoteCustomValue;
    private filterParent;
    protected inputString: string;
    protected filterInput: HTMLInputElement;
    protected isCustomFiltering: boolean;
    private jsonData;
    private toolbarAction;
    private isDataSourceUpdate;
    /**
     * Sets the CSS classes to root element of this component, which helps to customize the
     * complete styles.
     *
     * @default ''
     */
    cssClass: string;
    /**
     * Sets the specified item to the selected state or gets the selected item in the ListBox.
     *
     * @default []
     * @aspType object
     * @isGenericType true
     */
    value: string[] | number[] | boolean[];
    /**
     * Sets the height of the ListBox component.
     *
     * @default ''
     */
    height: number | string;
    /**
     * If 'allowDragAndDrop' is set to true, then you can perform drag and drop of the list item.
     * ListBox contains same 'scope' property enables drag and drop between multiple ListBox.
     *
     * @default false
     */
    allowDragAndDrop: boolean;
    /**
     * Sets limitation to the value selection.
     * based on the limitation, list selection will be prevented.
     *
     * @default 1000
     */
    maximumSelectionLength: number;
    /**
     * To enable the filtering option in this component.
     * Filter action performs when type in search box and collect the matched item through `filtering` event.
     * If searching character does not match, `noRecordsTemplate` property value will be shown.
     *
     * @default false
     */
    allowFiltering: boolean;
    /**
     * Defines the scope value to group sets of draggable and droppable ListBox.
     * A draggable with the same scope value will be accepted by the droppable.
     *
     * @default ''
     */
    scope: string;
    /**
     * When set to ‘false’, consider the `case-sensitive` on performing the search to find suggestions.
     * By default consider the casing.
     *
     * @default true
     * @private
     */
    ignoreCase: boolean;
    /**
     * Accepts the value to be displayed as a watermark text on the filter bar.
     *
     * @default null
     */
    filterBarPlaceholder: string;
    /**
     * Triggers while rendering each list item.
     *
     * @event beforeItemRender
     * @blazorProperty 'OnItemRender'
     */
    beforeItemRender: EmitType<BeforeItemRenderEventArgs>;
    /**
     * Triggers on typing a character in the component.
     *
     * @event filtering
     * @blazorProperty 'ItemSelected'
     */
    filtering: EmitType<FilteringEventArgs>;
    /**
     * Triggers when an item in the popup is selected by the user either with mouse/tap or with keyboard navigation.
     *
     * @event select
     * @private
     */
    select: EmitType<SelectEventArgs>;
    /**
     * Adds a new item to the popup list. By default, new item appends to the list as the last item,
     * but you can insert based on the index parameter.
     *
     * @param  { Object[] } items - Specifies an array of JSON data or a JSON data.
     * @param { number } itemIndex - Specifies the index to place the newly added item in the popup list.
     * @returns {void}.
     * @private
     */
    addItem(items: {
        [key: string]: Object;
    }[] | {
        [key: string]: Object;
    } | string | boolean | number | string[] | boolean[] | number[], itemIndex?: number): void;
    /**
     * Triggers while select / unselect the list item.
     *
     * @event change
     * @blazorProperty 'ValueChange'
     */
    change: EmitType<ListBoxChangeEventArgs>;
    /**
     * Triggers before dropping the list item on another list item.
     *
     * @event beforeDrop
     * @blazorProperty 'OnDrop'
     */
    beforeDrop: EmitType<DropEventArgs>;
    /**
     * Triggers after dragging the list item.
     *
     * @event dragStart
     * @blazorProperty 'DragStart'
     */
    dragStart: EmitType<DragEventArgs>;
    /**
     * Triggers while dragging the list item.
     *
     * @event drag
     * @blazorProperty 'Dragging'
     */
    drag: EmitType<DragEventArgs>;
    /**
     * Triggers before dropping the list item on another list item.
     *
     * @event drop
     * @blazorProperty 'Dropped'
     */
    drop: EmitType<DragEventArgs>;
    /**
     * Triggers when data source is populated in the list.
     *
     * @event dataBound
     * @private
     */
    dataBound: EmitType<Object>;
    /**
     * Accepts the template design and assigns it to the group headers present in the list.
     *
     * @default null
     * @private
     */
    groupTemplate: string;
    /**
     * Accepts the template design and assigns it to list of component
     * when no data is available on the component.
     *
     * @default 'No records found'
     * @private
     */
    noRecordsTemplate: string;
    /**
     * Accepts the template and assigns it to the list content of the ListBox component
     * when the data fetch request from the remote server fails.
     *
     * @default 'Request Failed'
     * @private
     */
    actionFailureTemplate: string;
    /**
     * specifies the z-index value of the component popup element.
     *
     * @default 1000
     * @private
     */
    zIndex: number;
    /**
     * ignoreAccent set to true, then ignores the diacritic characters or accents when filtering.
     *
     * @private
     */
    ignoreAccent: boolean;
    /**
     * Specifies the toolbar items and its position.
     *
     * @default { items: [], position: 'Right' }
     */
    toolbarSettings: ToolbarSettingsModel;
    /**
     * Specifies the selection mode and its type.
     *
     * @default { mode: 'Multiple', type: 'Default' }
     */
    selectionSettings: SelectionSettingsModel;
    /**
     * Constructor for creating the ListBox component.
     *
     * @param {ListBoxModel} options - Specifies ListBox model
     * @param {string | HTMLElement} element - Specifies the element.
     */
    constructor(options?: ListBoxModel, element?: string | HTMLElement);
    /**
     * Build and render the component.
     *
     * @private
     * @returns {void}
     */
    render(): void;
    private updateBlazorListData;
    private initWrapper;
    private updateSelectionSettings;
    private initDraggable;
    protected updateActionCompleteData(li: HTMLElement, item: {
        [key: string]: Object;
    }): void;
    private initToolbar;
    private createButtons;
    protected validationAttribute(input: HTMLInputElement, hiddenSelect: HTMLSelectElement): void;
    private setHeight;
    private setCssClass;
    private setEnable;
    protected showSpinner(): void;
    protected hideSpinner(): void;
    private onInput;
    private clearText;
    private refreshClearIcon;
    protected onActionComplete(ulElement: HTMLElement, list: obj[] | boolean[] | string[] | number[], e?: Object): void;
    private initToolbarAndStyles;
    private triggerDragStart;
    private triggerDrag;
    private beforeDragEnd;
    private dragEnd;
    private removeSelected;
    private getCurIdx;
    private getComponent;
    protected listOption(dataSource: obj[] | string[] | number[] | boolean[], fields: FieldSettingsModel): FieldSettingsModel;
    private triggerBeforeItemRender;
    requiredModules(): ModuleDeclaration[];
    /**
     * This method is used to enable or disable the items in the ListBox based on the items and enable argument.
     *
     * @param {string[]} items - Text items that needs to be enabled/disabled.
     * @param {boolean} enable - Set `true`/`false` to enable/disable the list items.
     * @param {boolean} isValue - Set `true` if `items` parameter is a array of unique values.
     * @returns {void}
     */
    enableItems(items: string[], enable?: boolean, isValue?: boolean): void;
    /**
     * Based on the state parameter, specified list item will be selected/deselected.
     *
     * @param {string[]} items - Array of text value of the item.
     * @param {boolean} state - Set `true`/`false` to select/un select the list items.
     * @param {boolean} isValue - Set `true` if `items` parameter is a array of unique values.
     * @returns {void}
     */
    selectItems(items: string[], state?: boolean, isValue?: boolean): void;
    /**
     * Based on the state parameter, entire list item will be selected/deselected.
     *
     * @param {boolean} state - Set `true`/`false` to select/un select the entire list items.
     * @returns {void}
     */
    selectAll(state?: boolean): void;
    /**
     * Adds a new item to the list. By default, new item appends to the list as the last item,
     * but you can insert based on the index parameter.
     *
     * @param  { Object[] } items - Specifies an array of JSON data or a JSON data.
     * @param { number } itemIndex - Specifies the index to place the newly added item in the list.
     * @returns {void}.
     */
    addItems(items: obj[] | obj, itemIndex?: number): void;
    /**
     * Removes a item from the list. By default, removed the last item in the list,
     * but you can remove based on the index parameter.
     *
     * @param  { Object[] } items - Specifies an array of JSON data or a JSON data.
     * @param { number } itemIndex - Specifies the index to remove the item from the list.
     * @returns {void}.
     */
    removeItems(items?: obj[] | obj, itemIndex?: number): void;
    /**
     * Removes a item from the list. By default, removed the last item in the list,
     * but you can remove based on the index parameter.
     *
     * @param  { Object[] } items - Specifies an array of JSON data or a JSON data.
     * @param { number } itemIndex - Specifies the index to remove the item from the list.
     * @returns {void}.
     */
    removeItem(items?: {
        [key: string]: Object;
    }[] | {
        [key: string]: Object;
    } | string | boolean | number | string[] | boolean[] | number[], itemIndex?: number): void;
    /**
     * Gets the array of data Object that matches the given array of values.
     *
     * @param  { string[] | number[] | boolean[] } value - Specifies the array value of the list item.
     * @returns {object[]}.
     */
    getDataByValues(value: string[] | number[] | boolean[]): {
        [key: string]: Object;
    }[];
    /**
     * Moves the given value(s) / selected value(s) upwards.
     *
     * @param  { string[] | number[] | boolean[] } value - Specifies the value(s).
     * @returns {void}
     */
    moveUp(value?: string[] | number[] | boolean[]): void;
    /**
     * Moves the given value(s) / selected value(s) downwards.
     *
     * @param  { string[] | number[] | boolean[] } value - Specifies the value(s).
     * @returns {void}
     */
    moveDown(value?: string[] | number[] | boolean[]): void;
    /**
     * Moves the given value(s) / selected value(s) to the given / default scoped ListBox.
     *
     * @param  { string[] | number[] | boolean[] } value - Specifies the value or array value of the list item.
     * @param {number} index - Specifies the index.
     * @param {string} targetId - Specifies the target id.
     * @returns {void}
     */
    moveTo(value?: string[] | number[] | boolean[], index?: number, targetId?: string): void;
    /**
     * Moves all the values from one ListBox to the scoped ListBox.
     *
     * @param  { string } targetId - Specifies the scoped ListBox ID.
     * @param  { string } index - Specifies the index to where the items moved.
     * @returns {void}
     */
    moveAllTo(targetId?: string, index?: number): void;
    /**
     * Gets the updated dataSource in ListBox.
     *
     * @returns {{ [key: string]: Object }[] | string[] | boolean[] | number[]} - Updated DataSource.
     */
    getDataList(): {
        [key: string]: Object;
    }[] | string[] | boolean[] | number[];
    /**
     * Returns the sorted Data in ListBox.
     *
     * @returns {{ [key: string]: Object }[] | string[] | boolean[] | number[]} - Sorted data
     */
    getSortedList(): {
        [key: string]: Object;
    }[] | string[] | boolean[] | number[];
    private getElemByValue;
    private updateLiCollection;
    private selectAllItems;
    private updateMainList;
    private wireEvents;
    private wireToolbarEvent;
    private unwireEvents;
    private clickHandler;
    private checkSelectAll;
    protected getQuery(query: Query): Query;
    private setFiltering;
    private filterWireEvents;
    private selectHandler;
    private triggerChange;
    private getDataByElems;
    private getDataByElements;
    private checkMaxSelection;
    private toolbarClickHandler;
    private moveUpDown;
    private moveItemTo;
    private moveItemFrom;
    /**
     * Called internally if any of the property value changed.
     *
     * @param {ListBox} fListBox - Specifies the from listbox.
     * @param {ListBox} tListBox - Specifies the to listbox.
     * @param {boolean} isKey - Specifies the key.
     * @param {Element[]} value - Specifies the value.
     * @param {number} index - Specifies the index.
     * @returns {void}
     * @private
     */
    private moveData;
    private selectNextList;
    private moveAllItemTo;
    private moveAllItemFrom;
    private moveAllData;
    private changeData;
    private getSelectedItems;
    private getScopedListBox;
    private getGrabbedItems;
    private getDragArgs;
    private onKeyDown;
    private keyDownStatus;
    private keyDownHandler;
    private upDownKeyHandler;
    private KeyUp;
    /**
     * To filter the data from given data source by using query.
     *
     * @param  {Object[] | DataManager } dataSource - Set the data source to filter.
     * @param  {Query} query - Specify the query to filter the data.
     * @param  {FieldSettingsModel} fields - Specify the fields to map the column in the data table.
     * @returns {void}.
     */
    filter(dataSource: {
        [key: string]: Object;
    }[] | DataManager | string[] | number[] | boolean[], query?: Query, fields?: FieldSettingsModel): void;
    private filteringAction;
    protected targetElement(): string;
    private dataUpdater;
    private focusOutHandler;
    private getValidIndex;
    private updateSelectedOptions;
    private clearSelection;
    private setSelection;
    private updateSelectTag;
    private checkDisabledState;
    private updateToolBarState;
    private setCheckboxPosition;
    private showCheckbox;
    private isSelected;
    private getSelectTag;
    private getToolElem;
    private formResetHandler;
    /**
     * Return the module name.
     *
     * @private
     * @returns {string} - Module name
     */
    getModuleName(): string;
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @returns {string} - Persist data
     */
    protected getPersistData(): string;
    protected getLocaleName(): string;
    destroy(): void;
    /**
     * Called internally if any of the property value changed.
     *
     * @param {ListBoxModel} newProp - Specifies the new properties.
     * @param {ListBoxModel} oldProp - Specifies the old properties.
     * @returns {void}
     * @private
     */
    onPropertyChanged(newProp: ListBoxModel, oldProp: ListBoxModel): void;
}
/**
 * Interface for before item render event.
 */
export interface BeforeItemRenderEventArgs extends BaseEventArgs {
    /**
     * Returns the list element before rendering.
     */
    element: Element;
    /**
     * Returns the list item before rendering.
     */
    item: {
        [key: string]: Object;
    };
}
/**
 * Interface for drag and drop event args.
 */
export interface SourceDestinationModel {
    /**
     * Specifies the list items before  drag or drop in the ListBox.
     */
    previousData?: string[] | boolean[] | number[] | {
        [key: string]: Object;
    }[] | DataManager;
    /**
     * Specifies the list items after drag or drop in the ListBox.
     */
    currentData?: string[] | boolean[] | number[] | {
        [key: string]: Object;
    }[] | DataManager;
}
/**
 * Interface for drag and drop event.
 */
export interface DragEventArgs {
    /**
     * Returns the previous index of the selected list item.
     */
    previousIndex?: number;
    /**
     * Returns the current index of the selected list item.
     */
    currentIndex?: number;
    /**
     * Returns the selected list element.
     */
    elements: Element[];
    /**
     * Returns the selected list items.
     */
    items: Object[];
    /**
     * Returns the target list element where the selected list element to be dropped.
     */
    target?: Element;
    /**
     * Returns true if the list element is dragged from ListBox. Otherwise, it remains false.
     */
    dragSelected?: boolean;
    /**
     * Returns the previous list item.
     */
    previousItem?: object[];
    /**
     * Returns the previous  and current list items of the source list box.
     */
    source?: SourceDestinationModel;
    /**
     * Returns the previous and current list items of the destination list box.
     */
    destination?: SourceDestinationModel;
}
/**
 * Interface for change event args.
 */
export interface ListBoxChangeEventArgs extends BaseEventArgs {
    /**
     * Returns the selected list elements.
     */
    elements: Element[];
    /**
     * Returns the selected list items.
     */
    items: Object[];
    /**
     * Returns the selected state or selected list item in the ListBox.
     */
    value: number | string | boolean;
    /**
     * Specifies the event.
     */
    event: Event;
}
/**
 * Interface for Drop event args.
 */
export interface DropEventArgs {
    /**
     * Returns the previous index of the selected list item.
     */
    previousIndex: number;
    /**
     * Returns the current index of the selected list item.
     */
    currentIndex: number;
    /**
     * Returns the selected list element to be dropped.
     */
    droppedElement: Element;
    /**
     * Returns the target list element where the selected list element to be dropped.
     */
    target: Element;
    /**
     * Returns the dragged list element.
     */
    helper: Element;
    /**
     * Illustrates whether the current action needs to be prevented or not.
     */
    cancel?: boolean;
    /**
     * Returns the selected list items.
     */
    items?: Object[];
}
export {};
