/// <reference path="../drop-down-base/drop-down-base-model.d.ts" />
import { DropDownBase, SelectEventArgs, PopupEventArgs, FilteringEventArgs } from '../drop-down-base/drop-down-base';
import { FilterType } from '../drop-down-base/drop-down-base';
import { FieldSettingsModel } from '../drop-down-base/drop-down-base-model';
import { IInput, FloatLabelType } from '@syncfusion/ej2-inputs';
import { EmitType, KeyboardEventArgs } from '@syncfusion/ej2-base';
import { MultiSelectModel } from '../multi-select';
import { ModuleDeclaration } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { SortOrder } from '@syncfusion/ej2-lists';
export interface RemoveEventArgs extends SelectEventArgs {
}
/**
 * The Multiselect allows the user to pick a more than one value from list of predefined values.
 * ```html
 * <select id="list">
 *      <option value='1'>Badminton</option>
 *      <option value='2'>Basketball</option>
 *      <option value='3'>Cricket</option>
 *      <option value='4'>Football</option>
 *      <option value='5'>Tennis</option>
 * </select>
 * ```
 * ```typescript
 * <script>
 *   var multiselectObj = new Multiselect();
 *   multiselectObj.appendTo("#list");
 * </script>
 * ```
 */
export declare class MultiSelect extends DropDownBase implements IInput {
    private spinnerElement;
    private selectAllAction;
    private setInitialValue;
    private setDynValue;
    private listCurrentOptions;
    private targetInputElement;
    private selectAllHeight?;
    private searchBoxHeight?;
    private mobFilter?;
    private isFiltered;
    private isFirstClick;
    private focused;
    private initial;
    private backCommand;
    private keyAction;
    private isSelectAll;
    private clearIconWidth;
    /**
     * The `fields` property maps the columns of the data table and binds the data to the component.
     * * text - Maps the text column from data table for each list item.
     * * value - Maps the value column from data table for each list item.
     * * iconCss - Maps the icon class column from data table for each list item.
     * * groupBy - Group the list items with it's related items by mapping groupBy field.
     * ```html
     * <input type="text" tabindex="1" id="list"> </input>
     * ```
     * ```typescript
     *   let customers: MultiSelect = new MultiSelect({
     *      dataSource:new DataManager({ url:'http://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/' }),
     *      query: new Query().from('Customers').select(['ContactName', 'CustomerID']).take(5),
     *      fields: { text: 'ContactName', value: 'CustomerID' },
     *      placeholder: 'Select a customer'
     *   });
     *   customers.appendTo("#list");
     * ```
     *
     * @default {text: null, value: null, iconCss: null, groupBy: null}
     */
    fields: FieldSettingsModel;
    /**
     * Enable or disable persisting MultiSelect component's state between page reloads.
     * If enabled, following list of states will be persisted.
     * 1. value
     *
     * @default false
     */
    enablePersistence: boolean;
    /**
     * Accepts the template design and assigns it to the group headers present in the MultiSelect popup list.
     *
     * @default null
     */
    groupTemplate: string;
    /**
     * Accepts the template design and assigns it to popup list of MultiSelect component
     * when no data is available on the component.
     *
     * @default 'No records found'
     */
    noRecordsTemplate: string;
    /**
     * Accepts the template and assigns it to the popup list content of the MultiSelect component
     * when the data fetch request from the remote server fails.
     *
     * @default 'Request failed'
     */
    actionFailureTemplate: string;
    /**
     * Specifies the `sortOrder` to sort the data source. The available type of sort orders are
     * * `None` - The data source is not sorting.
     * * `Ascending` - The data source is sorting with ascending order.
     * * `Descending` - The data source is sorting with descending order.
     *
     * @default null
     * @asptype object
     * @aspjsonconverterignore
     */
    sortOrder: SortOrder;
    /**
     * Specifies a value that indicates whether the MultiSelect component is enabled or not.
     *
     * @default true
     */
    enabled: boolean;
    /**
     * Defines whether to allow the cross-scripting site or not.
     *
     * @default false
     */
    enableHtmlSanitizer: boolean;
    /**
     * Accepts the list items either through local or remote service and binds it to the MultiSelect component.
     * It can be an array of JSON Objects or an instance of
     * `DataManager`.
     *
     * @default []
     */
    dataSource: {
        [key: string]: Object;
    }[] | DataManager | string[] | number[] | boolean[];
    /**
     * Accepts the external `Query`
     * which will execute along with the data processing in MultiSelect.
     *
     * @default null
     */
    query: Query;
    /**
     * Determines on which filter type, the MultiSelect component needs to be considered on search action.
     * The `FilterType` and its supported data types are
     *
     * <table>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * FilterType<br/></td><td colSpan=1 rowSpan=1>
     * Description<br/></td><td colSpan=1 rowSpan=1>
     * Supported Types<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * StartsWith<br/></td><td colSpan=1 rowSpan=1>
     * Checks whether a value begins with the specified value.<br/></td><td colSpan=1 rowSpan=1>
     * String<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * EndsWith<br/></td><td colSpan=1 rowSpan=1>
     * Checks whether a value ends with specified value.<br/><br/></td><td colSpan=1 rowSpan=1>
     * <br/>String<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * Contains<br/></td><td colSpan=1 rowSpan=1>
     * Checks whether a value contains with specified value.<br/><br/></td><td colSpan=1 rowSpan=1>
     * <br/>String<br/></td></tr>
     * </table>
     *
     * The default value set to `StartsWith`, all the suggestion items which contain typed characters to listed in the suggestion popup.
     *
     * @default 'StartsWith'
     */
    filterType: FilterType;
    /**
     * specifies the z-index value of the component popup element.
     *
     * @default 1000
     */
    zIndex: number;
    /**
     * ignoreAccent set to true, then ignores the diacritic characters or accents when filtering.
     */
    ignoreAccent: boolean;
    /**
     * Overrides the global culture and localization value for this component. Default global culture is 'en-US'.
     *
     * @default 'en-US'
     */
    locale: string;
    /**
     * Specifies a Boolean value that indicates the whether the grouped list items are
     * allowed to check by checking the group header in checkbox mode.
     * By default, there is no checkbox provided for group headers.
     * This property allows you to render checkbox for group headers and to select
     * all the grouped items at once
     *
     * @default false
     */
    enableGroupCheckBox: boolean;
    /**
     * Sets the CSS classes to root element of this component which helps to customize the
     * complete styles.
     *
     * @default null
     */
    cssClass: string;
    /**
     * Gets or sets the width of the component. By default, it sizes based on its parent.
     * container dimension.
     *
     * @default '100%'
     * @aspType string
     * @blazorType string
     */
    width: string | number;
    /**
     * Gets or sets the height of the popup list. By default it renders based on its list item.
     * > For more details about the popup configuration refer to
     * [`Popup Configuration`](../../multi-select/getting-started/#configure-the-popup-list) documentation.
     *
     * @default '300px'
     * @aspType string
     * @blazorType string
     */
    popupHeight: string | number;
    /**
     * Gets or sets the width of the popup list and percentage values has calculated based on input width.
     * > For more details about the popup configuration refer to
     * [`Popup Configuration`](../../multi-select/getting-started/#configure-the-popup-list) documentation.
     *
     * @default '100%'
     * @aspType string
     * @blazorType string
     */
    popupWidth: string | number;
    /**
     * Gets or sets the placeholder in the component to display the given information
     * in input when no item selected.
     *
     * @default null
     */
    placeholder: string;
    /**
     * Accepts the value to be displayed as a watermark text on the filter bar.
     *
     * @default null
     */
    filterBarPlaceholder: string;
    /**
     * Gets or sets the additional attribute to `HtmlAttributes` property in MultiSelect,
     * which helps to add attribute like title, name etc, input should be key value pair.
     *
     * {% codeBlock src='multiselect/htmlAttributes/index.md' %}{% endcodeBlock %}
     *
     * @default {}
     */
    htmlAttributes: {
        [key: string]: string;
    };
    /**
     * Accepts the template design and assigns it to the selected list item in the input element of the component.
     * For more details about the available template options refer to
     * [`Template`](../../multi-select/templates) documentation.
     *
     * We have built-in `template engine`
     * which provides options to compile template string into a executable function.
     * For EX: We have expression evolution as like ES6 expression string literals.
     *
     * @default null
     */
    valueTemplate: string;
    /**
     * Accepts the template design and assigns it to the header container of the popup list.
     * > For more details about the available template options refer to [`Template`](../../multi-select/templates) documentation.
     *
     * @default null
     */
    headerTemplate: string;
    /**
     * Accepts the template design and assigns it to the footer container of the popup list.
     * > For more details about the available template options refer to [`Template`](../../multi-select/templates) documentation.
     *
     * @default null
     */
    footerTemplate: string;
    /**
     * Accepts the template design and assigns it to each list item present in the popup.
     * > For more details about the available template options refer to [`Template`](../../multi-select/templates) documentation.
     *
     * We have built-in `template engine`
     * which provides options to compile template string into a executable function.
     * For EX: We have expression evolution as like ES6 expression string literals.
     *
     * @default null
     */
    itemTemplate: string;
    /**
     * To enable the filtering option in this component.
     * Filter action performs when type in search box and collect the matched item through `filtering` event.
     * If searching character does not match, `noRecordsTemplate` property value will be shown.
     *
     * {% codeBlock src="multiselect/allow-filtering-api/index.ts" %}{% endcodeBlock %}
     *
     * {% codeBlock src="multiselect/allow-filtering-api/index.html" %}{% endcodeBlock %}
     *
     * @default null
     * @isBlazorNullableType true
     * @blazorDefaultValue
     */
    allowFiltering: boolean;
    /**
     * By default, the multiselect component fires the change event while focus out the component.
     * If you want to fires the change event on every value selection and remove, then disable the changeOnBlur property.
     *
     * @default true
     */
    changeOnBlur: boolean;
    /**
     * Allows user to add a
     * [`custom value`](../../multi-select/custom-value), the value which is not present in the suggestion list.
     *
     * @default false
     */
    allowCustomValue: boolean;
    /**
     * Enables close icon with the each selected item.
     *
     * @default true
     */
    showClearButton: boolean;
    /**
     * Sets limitation to the value selection.
     * based on the limitation, list selection will be prevented.
     *
     * @default 1000
     * @blazorType int
     */
    maximumSelectionLength: number;
    /**
     * Gets or sets the `readonly` to input or not. Once enabled, just you can copy or highlight
     * the text however tab key action will perform.
     *
     * @default false
     */
    readonly: boolean;
    /**
     * Selects the list item which maps the data `text` field in the component.
     *
     * @default null
     */
    text: string;
    /**
     * Selects the list item which maps the data `value` field in the component.
     * {% codeBlock src='multiselect/value/index.md' %}{% endcodeBlock %}
     *
     * @default null
     * @isGenericType true
     */
    value: number[] | string[] | boolean[];
    /**
     * Hides the selected item from the list item.
     *
     * @default true
     */
    hideSelectedItem: boolean;
    /**
     * Based on the property, when item get select popup visibility state will changed.
     *
     * @default true
     */
    closePopupOnSelect: boolean;
    /**
     * configures visibility mode for component interaction.
     *
     * - `Box` - selected items will be visualized in chip.
     *
     * - `Delimiter` - selected items will be visualized in text content.
     *
     * - `Default` - on `focus in` component will act in `box` mode.
     * on `blur` component will act in `delimiter` mode.
     *
     * - `CheckBox` - The 'checkbox' will be visualized in list item.
     *
     * {% codeBlock src="multiselect/visual-mode-api/index.ts" %}{% endcodeBlock %}
     *
     * {% codeBlock src="multiselect/visual-mode-api/index.html" %}{% endcodeBlock %}
     *
     * @default Default
     */
    mode: visualMode;
    /**
     * Sets the delimiter character for 'default' and 'delimiter' visibility modes.
     *
     * @default ','
     */
    delimiterChar: string;
    /**
     * Sets [`case sensitive`](../../multi-select/filtering/#case-sensitive-filtering)
     * option for filter operation.
     *
     * @default true
     */
    ignoreCase: boolean;
    /**
     * Allows you to either show or hide the DropDown button on the component
     *
     * @default false
     */
    showDropDownIcon: boolean;
    /**
     * Specifies whether to display the floating label above the input element.
     * Possible values are:
     * * Never: The label will never float in the input when the placeholder is available.
     * * Always: The floating label will always float above the input.
     * * Auto: The floating label will float above the input after focusing or entering a value in the input.
     *
     * @default Syncfusion.EJ2.Inputs.FloatLabelType.Never
     * @aspType Syncfusion.EJ2.Inputs.FloatLabelType
     * @isEnumeration true
     * @blazorType Syncfusion.Blazor.Inputs.FloatLabelType
     */
    floatLabelType: FloatLabelType;
    /**
     * Allows you to either show or hide the selectAll option on the component.
     *
     * @default false
     */
    showSelectAll: boolean;
    /**
     * Specifies the selectAllText to be displayed on the component.
     *
     * @default 'select All'
     */
    selectAllText: string;
    /**
     * Specifies the UnSelectAllText to be displayed on the component.
     *
     * @default 'select All'
     */
    unSelectAllText: string;
    /**
     * Reorder the selected items in popup visibility state.
     *
     * @default true
     */
    enableSelectionOrder: boolean;
    /**
     * Whether to automatically open the popup when the control is clicked.
     *
     * @default true
     */
    openOnClick: boolean;
    /**
     * Fires each time when selection changes happened in list items after model and input value get affected.
     *
     * @event change
     * @blazorProperty 'ValueChange'
     */
    change: EmitType<MultiSelectChangeEventArgs>;
    /**
     * Fires before the selected item removed from the widget.
     *
     * @event removing
     * @blazorProperty 'OnValueRemove'
     */
    removing: EmitType<RemoveEventArgs>;
    /**
     * Fires after the selected item removed from the widget.
     *
     * @event removed
     * @blazorProperty 'ValueRemoved'
     */
    removed: EmitType<RemoveEventArgs>;
    /**
     * Fires after select all process completion.
     *
     * @event selectedAll
     * @blazorProperty 'SelectedAll'
     */
    selectedAll: EmitType<ISelectAllEventArgs>;
    /**
     * Fires when popup opens before animation.
     *
     * @event beforeOpen
     * @blazorProperty 'OnOpen'
     * @blazorType BeforeOpenEventArgs
     */
    beforeOpen: EmitType<Object>;
    /**
     * Fires when popup opens after animation completion.
     *
     * @event open
     * @blazorProperty 'Opened'
     */
    open: EmitType<PopupEventArgs>;
    /**
     * Fires when popup close after animation completion.
     *
     * @event close
     * @blazorProperty 'OnClose'
     */
    close: EmitType<PopupEventArgs>;
    /**
     * Event triggers when the input get focus-out.
     *
     * @event blur
     */
    blur: EmitType<Object>;
    /**
     * Event triggers when the input get focused.
     *
     * @event focus
     */
    focus: EmitType<Object>;
    /**
     * Event triggers when the chip selection.
     *
     * @event chipSelection
     * @blazorProperty 'ChipSelected'
     */
    chipSelection: EmitType<Object>;
    /**
     * Triggers event,when user types a text in search box.
     * > For more details about filtering, refer to [`Filtering`](../../multi-select/filtering) documentation.
     *
     * @event filtering
     * @blazorProperty 'Filtering'
     */
    filtering: EmitType<FilteringEventArgs>;
    /**
     * Fires before set the selected item as chip in the component.
     * > For more details about chip customization refer [`Chip Customization`](../../multi-select/chip-customization)
     *
     * @event tagging
     * @blazorProperty 'OnChipTag'
     */
    tagging: EmitType<TaggingEventArgs>;
    /**
     * Triggers when the [`customValue`](../../multi-select/custom-value) is selected.
     *
     * @event customValueSelection
     * @blazorProperty 'CustomValueSpecifier'
     */
    customValueSelection: EmitType<CustomValueEventArgs>;
    /**
     * Constructor for creating the DropDownList widget.
     *
     * @param {MultiSelectModel} option - Specifies the MultiSelect model.
     * @param {string | HTMLElement} element - Specifies the element to render as component.
     * @private
     */
    constructor(option?: MultiSelectModel, element?: string | HTMLElement);
    private isValidKey;
    private mainList;
    ulElement: HTMLElement;
    private mainData;
    private mainListCollection;
    private customValueFlag;
    private inputElement;
    private componentWrapper;
    private overAllWrapper;
    private searchWrapper;
    private viewWrapper;
    private chipCollectionWrapper;
    private overAllClear;
    private dropIcon;
    private hiddenElement;
    private delimiterWrapper;
    private popupObj;
    private inputFocus;
    private header;
    private footer;
    private initStatus;
    private popupWrapper;
    private keyCode;
    private beforePopupOpen;
    private remoteCustomValue;
    private filterAction;
    private remoteFilterAction;
    private selectAllEventData;
    private selectAllEventEle;
    private filterParent;
    private removeIndex;
    private isDynamicDataChange;
    private enableRTL;
    requiredModules(): ModuleDeclaration[];
    private updateHTMLAttribute;
    private updateReadonly;
    private updateClearButton;
    private updateCssClass;
    private updateOldPropCssClass;
    private onPopupShown;
    private updateListItems;
    private loadTemplate;
    private setScrollPosition;
    private focusAtFirstListItem;
    private focusAtLastListItem;
    protected getAriaAttributes(): {
        [key: string]: string;
    };
    private updateListARIA;
    private ensureAriaDisabled;
    private removelastSelection;
    protected onActionFailure(e: Object): void;
    protected targetElement(): string;
    private getForQuery;
    protected onActionComplete(ulElement: HTMLElement, list: {
        [key: string]: Object;
    }[] | number[] | boolean[] | string[], e?: Object, isUpdated?: boolean): void;
    private updateActionList;
    private refreshSelection;
    private hideGroupItem;
    protected getValidLi(): HTMLElement;
    private checkSelectAll;
    private openClick;
    private keyUp;
    /**
     * To filter the multiselect data from given data source by using query
     *
     * @param  {Object[] | DataManager } dataSource - Set the data source to filter.
     * @param  {Query} query - Specify the query to filter the data.
     * @param  {FieldSettingsModel} fields - Specify the fields to map the column in the data table.
     * @returns {void}
     */
    filter(dataSource: {
        [key: string]: Object;
    }[] | DataManager | string[] | number[] | boolean[], query?: Query, fields?: FieldSettingsModel): void;
    protected getQuery(query: Query): Query;
    private dataUpdater;
    private tempQuery;
    private tempValues;
    private checkForCustomValue;
    protected getNgDirective(): string;
    private wrapperClick;
    private enable;
    private scrollFocusStatus;
    private keyDownStatus;
    private onBlur;
    private checkPlaceholderSize;
    private setPlaceholderSize;
    private refreshInputHight;
    private validateValues;
    private updateValueState;
    private updateTempValue;
    private getPagingCount;
    private pageUpSelection;
    private pageDownSelection;
    getItems(): Element[];
    private focusInHandler;
    private showDelimWrapper;
    private hideDelimWrapper;
    private expandTextbox;
    private isPopupOpen;
    private refreshPopup;
    private checkTextLength;
    private popupKeyActions;
    private updateAriaAttribute;
    private homeNavigation;
    private onKeyDown;
    private arrowDown;
    private arrowUp;
    private spaceKeySelection;
    private checkBackCommand;
    private keyNavigation;
    private selectByKey;
    private escapeAction;
    private scrollBottom;
    private scrollTop;
    private selectListByKey;
    private refreshListItems;
    private removeSelectedChip;
    private moveByTop;
    private moveByList;
    private updateCheck;
    private moveBy;
    private chipClick;
    private removeChipSelection;
    private addChipSelection;
    private onChipRemove;
    private makeTextBoxEmpty;
    private refreshPlaceHolder;
    private removeValue;
    private updateMainList;
    private removeChip;
    private setWidth;
    private updateChipStatus;
    private addValue;
    private checkMaxSelection;
    private dispatchSelect;
    private addChip;
    private removeChipFocus;
    private onMobileChipInteraction;
    private multiCompiler;
    private getChip;
    private calcPopupWidth;
    private mouseIn;
    private mouseOut;
    protected listOption(dataSource: {
        [key: string]: Object;
    }[], fields: FieldSettingsModel): FieldSettingsModel;
    private renderPopup;
    private setHeaderTemplate;
    private setFooterTemplate;
    private clearAll;
    private clearAllCallback;
    private windowResize;
    private resetValueHandler;
    protected wireEvent(): void;
    private onInput;
    private pasteHandler;
    protected search(e: KeyboardEventArgs): void;
    protected preRender(): void;
    protected getLocaleName(): string;
    private initializeData;
    private updateData;
    private initialTextUpdate;
    protected renderList(isEmptyData?: boolean): void;
    private initialValueUpdate;
    protected updateActionCompleteData(li: HTMLElement, item: {
        [key: string]: Object;
    }): void;
    protected updateAddItemList(list: HTMLElement, itemCount: number): void;
    protected updateDataList(): void;
    protected isValidLI(li: Element | HTMLElement): boolean;
    protected updateListSelection(li: Element, e: MouseEvent | KeyboardEventArgs, length?: number): void;
    private updateListSelectEventCallback;
    protected removeListSelection(): void;
    private removeHover;
    private removeFocus;
    private addListHover;
    private addListFocus;
    private addListSelection;
    private updateDelimeter;
    private onMouseClick;
    private findGroupStart;
    private findGroupAttrtibutes;
    private updateCheckBox;
    private deselectHeader;
    private onMouseOver;
    private onMouseLeave;
    private onListMouseDown;
    private onDocumentClick;
    private wireListEvents;
    private unwireListEvents;
    private hideOverAllClear;
    private showOverAllClear;
    /**
     * Sets the focus to widget for interaction.
     *
     * @returns {void}
     */
    focusIn(): void;
    /**
     * Remove the focus from widget, if the widget is in focus state.
     *
     * @returns {void}
     */
    focusOut(): void;
    /**
     * Shows the spinner loader.
     *
     * @returns {void}
     */
    showSpinner(): void;
    /**
     * Hides the spinner loader.
     *
     * @returns {void}
     */
    hideSpinner(): void;
    protected updateWrapperText(wrapperType: HTMLElement, wrapperData: string): void;
    private updateDelimView;
    private checkClearIconWidth;
    private updateRemainWidth;
    private updateRemainTemplate;
    private updateRemainingText;
    private getOverflowVal;
    private unWireEvent;
    private selectAllItem;
    private updateValue;
    private updateHiddenElement;
    private updatedataValueItems;
    private textboxValueUpdate;
    protected setZIndex(): void;
    protected updateDataSource(prop?: MultiSelectModel): void;
    private onLoadSelect;
    protected selectAllItems(state: boolean, event?: MouseEvent): void;
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @returns {string} Returns the persisted data of the component.
     */
    protected getPersistData(): string;
    /**
     * Dynamically change the value of properties.
     *
     * @param {MultiSelectModel} newProp - Returns the dynamic property value of the component.
     * @param {MultiSelectModel} oldProp - Returns the previous property value of the component.
     * @private
     * @returns {void}
     */
    onPropertyChanged(newProp: MultiSelectModel, oldProp: MultiSelectModel): void;
    private reInitializePoup;
    private updateVal;
    /**
     * Adds a new item to the multiselect popup list. By default, new item appends to the list as the last item,
     * but you can insert based on the index parameter.
     *
     * @param  { Object[] } items - Specifies an array of JSON data or a JSON data.
     * @param { number } itemIndex - Specifies the index to place the newly added item in the popup list.
     * @returns {void}
     */
    addItem(items: {
        [key: string]: Object;
    }[] | {
        [key: string]: Object;
    } | string | boolean | number | string[] | boolean[] | number[], itemIndex?: number): void;
    /**
     * Hides the popup, if the popup in a open state.
     *
     * @returns {void}
     */
    hidePopup(): void;
    /**
     * Shows the popup, if the popup in a closed state.
     *
     * @returns {void}
     */
    showPopup(): void;
    /**
     * Based on the state parameter, entire list item will be selected/deselected.
     * parameter
     * `true`   - Selects entire list items.
     * `false`  - Un Selects entire list items.
     *
     * @param {boolean} state - if it’s true then Selects the entire list items. If it’s false the Unselects entire list items.
     * @returns {void}
     */
    selectAll(state: boolean): void;
    /**
     * Return the module name of this component.
     *
     * @private
     * @returns {string} Return the module name of this component.
     */
    getModuleName(): string;
    /**
     * Allows you to clear the selected values from the Multiselect component.
     *
     * @returns {void}
     */
    clear(): void;
    /**
     * To Initialize the control rendering
     *
     * @private
     * @returns {void}
     */
    render(): void;
    private checkInitialValue;
    private checkAutoFocus;
    private setFloatLabelType;
    private addValidInputClass;
    private dropDownIcon;
    private initialUpdate;
    /**
     * Removes the component from the DOM and detaches all its related event handlers. Also it removes the attributes and classes.
     *
     * @method destroy
     * @returns {void}
     */
    destroy(): void;
}
export interface CustomValueEventArgs {
    /**
     * Gets the newly added data.
     *
     * @blazorType object
     */
    newData: Object;
    /**
     * Illustrates whether the current action needs to be prevented or not.
     */
    cancel: boolean;
}
export interface TaggingEventArgs {
    /**
     * If the event is triggered by interaction, it returns true. Otherwise, it returns false.
     */
    isInteracted: boolean;
    /**
     * Returns the selected item as JSON Object from the data source.
     *
     * @blazorType object
     */
    itemData: FieldSettingsModel;
    /**
     * Specifies the original event arguments.
     */
    e: MouseEvent | KeyboardEvent | TouchEvent;
    /**
     * To set the classes to chip element
     *
     * @param  { string } classes - Specify the classes to chip element.
     * @returns {void}
     * @blazorType string
     */
    setClass: Function;
    /**
     * Illustrates whether the current action needs to be prevented or not.
     */
    cancel: boolean;
}
export interface MultiSelectChangeEventArgs {
    /**
     * If the event is triggered by interaction, it returns true. Otherwise, it returns false.
     */
    isInteracted: boolean;
    /**
     * Returns the component initial Value.
     *
     * @isGenericType true
     */
    oldValue: number[] | string[] | boolean[];
    /**
     * Returns the updated component Values.
     *
     * @isGenericType true
     */
    value: number[] | string[] | boolean[];
    /**
     * Specifies the original event arguments.
     */
    e: MouseEvent | KeyboardEvent | TouchEvent;
    /**
     * Returns the root element of the component.
     */
    element: HTMLElement;
}
export declare type visualMode = 'Default' | 'Delimiter' | 'Box' | 'CheckBox';
export interface ISelectAllEventArgs {
    /**
     * If the event is triggered by interaction, it returns true. Otherwise, it returns false.
     */
    isInteracted: boolean;
    /**
     * Returns the selected list items.
     */
    items: HTMLLIElement[];
    /**
     * Returns the selected items as JSON Object from the data source.
     *
     * @blazorType object
     */
    itemData: FieldSettingsModel[];
    /**
     * Specifies the original event arguments.
     */
    event: MouseEvent | KeyboardEvent | TouchEvent;
    /**
     * Specifies whether it is selectAll or deSelectAll.
     */
    isChecked?: boolean;
}
