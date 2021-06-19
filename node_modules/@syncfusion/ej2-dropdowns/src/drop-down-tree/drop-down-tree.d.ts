import { FloatLabelType } from '@syncfusion/ej2-inputs';
import { INotifyPropertyChanged, EmitType } from '@syncfusion/ej2-base';
import { Component, ChildProperty } from '@syncfusion/ej2-base';
import { KeyboardEventArgs } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { Popup } from '@syncfusion/ej2-popups';
import { DropDownTreeModel, FieldsModel, TreeSettingsModel } from './drop-down-tree-model';
export declare type TreeFilterType = 'StartsWith' | 'EndsWith' | 'Contains';
export declare class Fields extends ChildProperty<Fields> {
    /**
     * This field specifies the child items or mapping field for the nested child items that contains an array of JSON objects.
     */
    child: string | FieldsModel;
    /**
     * Specifies the array of JavaScript objects or instance of Data Manager to populate the dropdown tree items.
     *
     * @default []
     */
    dataSource: DataManager | {
        [key: string]: Object;
    }[];
    /**
     * This fields specifies the mapping field to define the expanded state of a Dropdown tree item.
     */
    expanded: string;
    /**
     * This field specifies the mapping field to indicate whether the Dropdown tree item has children or not.
     */
    hasChildren: string;
    /**
     * Specifies the mapping field for htmlAttributes to be added to the Dropdown Tree item.
     */
    htmlAttributes: string;
    /**
     * Specifies the mapping field for icon class of each Dropdown Tree item that will be added before the text.
     */
    iconCss: string;
    /**
     * Specifies the mapping field for image URL of each Dropdown Tree item where image will be added before the text.
     */
    imageUrl: string;
    /**
     * Specifies the parent value field mapped in the data source.
     */
    parentValue: string;
    /**
     * Defines the external [`Query`](https://ej2.syncfusion.com/documentation/api/data/query/)
     * that will execute along with the data processing.
     *
     * @default null
     */
    query: Query;
    /**
     * Specifies the mapping field for the selected state of the Dropdown Tree item.
     */
    selected: string;
    /**
     * Specifies the table name used to fetch data from a specific table in the server.
     */
    tableName: string;
    /**
     * Specifies the mapping field for text displayed as Dropdown Tree items display text.
     */
    text: string;
    /**
     * Specifies the mapping field for tooltip that will be displayed as hovering text of the Dropdown Tree item.
     */
    tooltip: string;
    /**
     * Specifies the value(ID) field mapped in the data source.
     */
    value: string;
}
export declare class TreeSettings extends ChildProperty<TreeSettings> {
    /**
     * Specifies whether the child and parent tree items check states are dependent over each other when checkboxes are enabled.
     *
     * @default false
     */
    autoCheck: boolean;
    /**
     * Specifies the action on which the parent items in the pop-up should expand or collapse. The available actions are
     * * `Auto` - In desktop, the expand or collapse operation happens when you double-click the node,
     * and in mobile devices it happens on single-tap.
     * * `Click` - The expand or collapse operation happens when you perform single-click/tap
     * on the pop-up item in both desktop and mobile devices.
     * * `DblClick` - The expand or collapse operation happens when you perform a double-click/tap
     * on the pop-up item in both desktop and mobile devices.
     * * `None` - The expand or collapse operation will not happen when you perform single-click/tap
     * or double-click/tap on the pop-up items in both desktop and mobile devices.
     *
     * @default 'Auto'
     */
    expandOn: ExpandOn;
    /**
     * By default, the load on demand (Lazy load) is set to false.
     * Enabling this property will render only the parent tree items in the popup and
     * the child items will be rendered on demand when expanding the corresponding parent node.
     *
     * @default false
     */
    loadOnDemand: boolean;
}
export interface DdtChangeEventArgs {
    /**
     * If the event is triggered by interaction, it returns true. Otherwise, it returns false.
     */
    isInteracted: boolean;
    /**
     * Returns the component previous values.
     */
    oldValue: string[];
    /**
     * Returns the updated component values.
     */
    value: string[];
    /**
     * Specifies the original event.
     */
    e: MouseEvent | KeyboardEvent;
    /**
     * Returns the root element of the component.
     */
    element: HTMLElement;
}
export interface DdtBeforeOpenEventArgs {
    /**
     * Determines whether the current action needs to be prevented or not.
     */
    cancel: boolean;
}
export interface DdtPopupEventArgs {
    /**
     * Specifies the pop-up object.
     */
    popup: Popup;
}
export interface DdtDataBoundEventArgs {
    /**
     * Return the DropDownTree data.
     */
    data: {
        [key: string]: Object;
    }[];
}
export interface DdtFocusEventArgs {
    /**
     * Specifies whether the element is interacted when focusing or not.
     */
    isInteracted?: boolean;
    /**
     * Specifies the original event.
     */
    event?: MouseEvent | FocusEvent | TouchEvent | KeyboardEvent;
}
export interface DdtFilteringEventArgs {
    /**
     * To prevent the internal filtering action.
     */
    preventDefaultAction: boolean;
    /**
     * Gets the `input` event arguments.
     */
    event: Event;
    /**
     * Determines whether the current action needs to be prevented or not.
     */
    cancel: boolean;
    /**
     * Filter text value.
     */
    text: string;
    /**
     * Gets or sets the fields of Dropdown Tree.
     */
    fields: FieldsModel;
}
export interface DdtSelectEventArgs {
    /**
     * Returns the name of action like select or unselect.
     */
    action: string;
    /**
     * If the event is triggered by interacting the Dropdown Tree, it returns true. Otherwise, it returns false.
     */
    isInteracted: boolean;
    /**
     * Returns the currently selected Dropdown item.
     */
    item: HTMLLIElement;
    /**
     * Return the currently selected item as JSON object from the data source.
     */
    itemData: {
        [key: string]: Object;
    };
}
export interface DdtKeyPressEventArgs {
    /**
     * If you want to cancel this event then, set cancel as true. Otherwise, false.
     */
    cancel: boolean;
    /**
     * Return the actual event.
     */
    event: KeyboardEventArgs;
}
export declare type Mode = 'Default' | 'Delimiter' | 'Box';
export declare type SortOrder = 'None' | 'Ascending' | 'Descending';
export declare type ExpandOn = 'Auto' | 'Click' | 'DblClick' | 'None';
/**
 * The Dropdown Tree control allows you to select single or multiple values from hierarchical data in a tree-like structure.
 * It has several out-of-the-box features, such as data binding, check boxes, templates, filter,
 * UI customization, accessibility, and preselected values.
 * ```html
 *  <input type="text" id="tree"></input>
 * ```
 * ```typescript
 *  let ddtObj: DropDownTree = new DropDownTree();
 *  ddtObj.appendTo("#tree");
 * ```
 */
export declare class DropDownTree extends Component<HTMLElement> implements INotifyPropertyChanged {
    private inputEle;
    private inputObj;
    private hiddenElement;
    private isReverseUpdate;
    private checkSelectAll;
    private inputWrapper;
    private popupDiv;
    private tree;
    private isPopupOpen;
    private inputFocus;
    private popupObj;
    private treeObj;
    private overAllClear;
    private isClearButtonClick;
    private isDocumentClick;
    private isFirstRender;
    private hasTemplate;
    private isInitialized;
    private treeDataType;
    private oldValue;
    private removeValue;
    private currentValue;
    private currentText;
    private treeItems;
    private filterTimer;
    private filterContainer;
    private isRemoteData;
    private selectedText;
    private chipWrapper;
    private chipCollection;
    private isChipDelete;
    private checkAllParent;
    private selectAllSpan;
    private checkBoxElement;
    private checkWrapper;
    private isNodeSelected;
    private dataValue;
    private popupEle;
    private isDynamicChange;
    private header;
    private footer;
    private noRecord;
    private headerTemplateId;
    private footerTemplateId;
    private l10n;
    private actionFailureTemplateId;
    private noRecordsTemplateId;
    private isValueChange;
    private keyEventArgs;
    private keyboardModule;
    private keyConfigs;
    private isBlazorPlatForm;
    private overFlowWrapper;
    private isFilteredData;
    private isFilterRestore;
    private treeData;
    private selectedData;
    private filterObj;
    private filterDelayTime;
    private nestedTableUpdate;
    private clearIconWidth;
    /**
     * Specifies the template that renders to the popup list content of the
     * Dropdown Tree component when the data fetch request from the remote server fails.
     *
     * @default 'The Request Failed'
     */
    actionFailureTemplate: string;
    /**
     * When allowFiltering is set to true, it shows the filter bar (search text box) of the component.
     * The filter action retrieves matched items through the **filtering** event based on the characters typed in the search text box.
     * If no match is found, the value of the **noRecordsTemplate** property will be displayed.
     *
     * @default false
     */
    allowFiltering: boolean;
    /**
     * Enables or disables the multi-selection of items. To select multiple items:
     * * Select the items by holding down the **CTRL** key when clicking on the items.
     * * Select consecutive items by clicking the first item to select and hold down the **SHIFT** key and click the last item to select.
     *
     * @default false
     */
    allowMultiSelection: boolean;
    /**
     * By default, the Dropdown Tree component fires the change event while focusing out the component.
     * If you want to fire the change event on every value selection and remove, then disable this property.
     *
     * @default true
     */
    changeOnBlur: boolean;
    /**
     * Specifies the CSS classes to be added with the root and popup element of the Dropdown Tree component.
     * that allows customization of appearance.
     *
     * @default ''
     */
    cssClass: string;
    /**
     * Defines the value separator character in the input element when multi-selection or checkbox is enabled in the Dropdown Tree.
     * The delimiter character is applicable only for **default** and **delimiter** visibility modes.
     *
     * @default ","
     */
    delimiterChar: string;
    /**
     * Specifies a value that indicates whether the Dropdown Tree component is enabled or not.
     *
     * @default true
     */
    enabled: boolean;
    /**
     * Specifies the data source and mapping fields to render Dropdown Tree items.
     *
     * @default {value: 'value', text: 'text', dataSource: [], child: 'child', parentValue: 'parentValue', hasChildren: 'hasChildren',
     *  expanded: 'expanded', htmlAttributes: 'htmlAttributes', iconCss: 'iconCss', imageUrl: 'imageUrl',
     *  query: null, selected: 'selected', tableName: null, tooltip: 'tooltip'}
     */
    fields: FieldsModel;
    /**
     * Accepts the value to be displayed as a watermark text on the filter bar.
     *
     * @default null
     */
    filterBarPlaceholder: string;
    /**
     * Determines on which filter type, the component needs to be considered on search action.
     * The **TreeFilterType** and its supported data types are,
     *
     * <table>
     * <tr>
     * <td colSpan=1 rowSpan=1><b>
     * TreeFilterType</b></td><td colSpan=1 rowSpan=1><b>
     * Description</b></td><td colSpan=1 rowSpan=1><b>
     * Supported Types</b></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * StartsWith<br/></td><td colSpan=1 rowSpan=1>
     * Checks whether a value begins with the specified value.<br/></td><td colSpan=1 rowSpan=1>
     * String<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * EndsWith<br/></td><td colSpan=1 rowSpan=1>
     * Checks whether a value ends with the specified value.<br/></td><td colSpan=1 rowSpan=1>
     * String<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * Contains<br/></td><td colSpan=1 rowSpan=1>
     * Checks whether a value contains with specified value.<br/></td><td colSpan=1 rowSpan=1>
     * String<br/></td></tr>
     * </table>
     *
     * The default value set to **StartsWith**, all the suggestion items which starts with typed characters to listed in the
     * suggestion popup.
     *
     * @default 'StartsWith'
     */
    filterType: TreeFilterType;
    /**
     * Specifies whether to display the floating label above the input element.
     * Possible values are:
     * * Never: The label will never float in the input when the placeholder is available.
     * * Always: The floating label will always float above the input.
     * * Auto: The floating label will float above the input after focusing or entering a value in the input.
     *
     * @default Syncfusion.EJ2.Inputs.FloatLabelType.Never
     * @isEnumeration true
     */
    floatLabelType: FloatLabelType;
    /**
     * Specifies the template that renders a customized footer container at the bottom of the pop-up list.
     * By default, the footerTemplate will be null and there will be no footer container for the pop-up list.
     *
     * @default null
     */
    footerTemplate: string;
    /**
     * When **ignoreAccent** is set to true, then it ignores the diacritic characters or accents when filtering.
     */
    ignoreAccent: boolean;
    /**
     * When set to false, consider the case-sensitive on performing the search to find suggestions. By default, consider the casing.
     *
     * @default true
     */
    ignoreCase: boolean;
    /**
     * Specifies the template that renders a customized header container at the top of the pop-up list.
     * By default, the headerTemplate will be null and there will be no header container for the pop-up list.
     *
     * @default null
     */
    headerTemplate: string;
    /**
     * Allows additional HTML attributes such as title, name, etc., and accepts n number of attributes in a key-value pair format.
     *
     * @default {}
     */
    htmlAttributes: {
        [key: string]: string;
    };
    /**
     * Specifies a template to render customized content for all the items.
     * If the **itemTemplate** property is set, the template content overrides the displayed item text.
     * The property accepts [template string](https://ej2.syncfusion.com/documentation/common/template-engine/)
     * or HTML element ID holding the content.
     *
     * @default null
     */
    itemTemplate: string;
    /**
     * Configures visibility mode for component interaction when allowMultiSelection or checkbox is enabled.
     * Different modes are:
     * * Box : Selected items will be visualized in chip.
     * * Delimiter : Selected items will be visualized in the text content.
     * * Default : On focus in component will act in the box mode. On blur component will act in the delimiter mode.
     */
    mode: Mode;
    /**
     * Specifies the template that renders a customized pop-up list content when there is no data available
     * to be displayed within the pop-up.
     *
     * @default 'No Records Found'
     */
    noRecordsTemplate: string;
    /**
     * Specifies a short hint that describes the expected value of the Dropdown Tree component.
     *
     * @default null
     */
    placeholder: string;
    /**
     * Specifies the height of the pop-up list.
     *
     * @default '300px'
     */
    popupHeight: string | number;
    /**
     * Specifies the width of the popup list. By default, the popup width sets based on the width of the Dropdown Tree element.
     *
     * @default '100%'
     */
    popupWidth: string | number;
    /**
     * When set to true, the user interactions on the component will be disabled.
     *
     * @default false
     */
    readonly: boolean;
    /**
     * Specifies whether to show or hide the selectAll checkbox in the pop-up which allows you to select all the items in the pop-up.
     *
     * @default false
     */
    showSelectAll: boolean;
    /**
     * Specifies the display text for the selectAll checkbox in the pop-up.
     *
     * @default 'Select All'
     */
    selectAllText: string;
    /**
     * Enables or disables the checkbox option in the Dropdown Tree component.
     * If enabled, the Checkbox will be displayed next to the expand or collapse icon of the tree items.
     *
     * @default false
     */
    showCheckBox: boolean;
    /**
     * Specifies whether to show or hide the clear icon in textbox.
     * When the clear button is clicked, `value`, `text` properties will be reset to null.
     *
     * @default true
     */
    showClearButton: boolean;
    /**
     * Specifies whether to show or hide the Dropdown button.
     *
     * @default true
     */
    showDropDownIcon: boolean;
    /**
     * Specifies a value that indicates whether the items are sorted in the ascending or descending order, or not sorted at all.
     * The available types of sort order are,
     * * `None` - The items are not sorted.
     * * `Ascending` - The items are sorted in the ascending order.
     * * `Descending` - The items are sorted in the descending order.
     *
     * @default 'None'
     */
    sortOrder: SortOrder;
    /**
     * Gets or sets the display text of the selected item which maps the data **text** field in the component.
     *
     * @default null
     */
    text: string;
    /**
     * Configures the pop-up tree settings.
     *
     * @default {autoCheck: false, expandOn: 'Auto', loadOnDemand: false}
     */
    treeSettings: TreeSettingsModel;
    /**
     * Specifies the display text for the unselect all checkbox in the pop-up.
     *
     * @default 'Unselect All'
     */
    unSelectAllText: string;
    /**
     * Gets or sets the value of selected item(s) which maps the data **value** field in the component.
     *
     * @default null
     * @aspType Object
     */
    value: string[];
    /**
     * Specifies the width of the component. By default, the component width sets based on the width of its parent container.
     * You can also set the width in pixel values.
     *
     * @default '100%'
     */
    width: string | number;
    /**
     * Specifies the z-index value of the pop-up element.
     *
     * @default 1000
     */
    zIndex: number;
    /**
     * Defines whether to enable or disable the feature called wrap the selected items into multiple lines when the selected item's text
     * content exceeded the input width limit.
     *
     * @default false
     */
    wrapText: boolean;
    /**
     * Triggers when the data fetch request from the remote server fails.
     *
     * @event
     */
    actionFailure: EmitType<Object>;
    /**
     * Fires when popup opens before animation.
     *
     * @event
     */
    beforeOpen: EmitType<DdtBeforeOpenEventArgs>;
    /**
     * Triggers when an item in a popup is selected or when the model value is changed by user.
     *
     * @event
     */
    change: EmitType<DdtChangeEventArgs>;
    /**
     * Fires when popup close after animation completion.
     *
     * @event
     */
    close: EmitType<DdtPopupEventArgs>;
    /**
     * Triggers when the Dropdown Tree input element gets focus-out.
     *
     * @event
     */
    blur: EmitType<Object>;
    /**
     * Triggers when the Dropdown Tree is created successfully.
     *
     * @event
     */
    created: EmitType<Object>;
    /**
     * Triggers when data source is populated in the Dropdown Tree.
     *
     * @event
     */
    dataBound: EmitType<DdtDataBoundEventArgs>;
    /**
     * Triggers when the Dropdown Tree is destroyed successfully.
     *
     * @event
     */
    destroyed: EmitType<Object>;
    /**
     * Triggers on typing a character in the filter bar when the **allowFiltering** is enabled.
     *
     * @event
     * @blazorProperty 'Filtering'
     */
    filtering: EmitType<DdtFilteringEventArgs>;
    /**
     * Triggers when the Dropdown Tree input element is focused.
     *
     * @event
     */
    focus: EmitType<DdtFocusEventArgs>;
    /**
     * Triggers when key press is successful. It helps to customize the operations at key press.
     *
     * @event
     */
    keyPress: EmitType<DdtKeyPressEventArgs>;
    /**
     * Fires when popup opens after animation completion.
     *
     * @event
     */
    open: EmitType<DdtPopupEventArgs>;
    /**
     * Triggers when an item in the popup is selected by the user either with mouse/tap or with keyboard navigation.
     *
     * @event
     */
    select: EmitType<DdtSelectEventArgs>;
    constructor(options?: DropDownTreeModel, element?: string | HTMLElement);
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @returns {string}
     * @hidden
     */
    getPersistData(): string;
    getLocaleName(): string;
    /**
     * Initialize the event handler.
     *
     * @returns {void}
     * @private
     */
    protected preRender(): void;
    /**
     * To Initialize the control rendering
     *
     * @private
     * @returns {void}
     */
    render(): void;
    private ensureAutoCheck;
    private hideCheckAll;
    private renderFilter;
    private filterChangeHandler;
    private filterHandler;
    private nestedFilter;
    private nestedChildFilter;
    private selfReferencefilter;
    private isMatchedNode;
    private wireEvents;
    private wireTreeEvents;
    private wireCheckAllWrapperEvents;
    private unWireEvents;
    private dropDownClick;
    private mouseIn;
    private onMouseLeave;
    protected getDirective(): string;
    private focusOut;
    private onFocusOut;
    private updateView;
    private triggerChangeEvent;
    private ddtCompareValues;
    private focusIn;
    private treeAction;
    private keyActionHandler;
    private checkAllAction;
    private windowResize;
    private resetValueHandler;
    protected getAriaAttributes(): {
        [key: string]: string;
    };
    private updateOverFlowView;
    private updateRemainTemplate;
    private getOverflowVal;
    private updateDelimMode;
    private createHiddenElement;
    private createClearIcon;
    private validationAttribute;
    private createChip;
    private getValidMode;
    private createSelectAllWrapper;
    private clickHandler;
    private changeState;
    private setLocale;
    private setAttributes;
    private setHTMLAttributes;
    private updateDataAttribute;
    private showOverAllClear;
    private setTreeValue;
    private setTreeText;
    private setSelectedValue;
    private setValidValue;
    private getItems;
    private getNestedItems;
    private getChildType;
    private renderTree;
    private renderPopup;
    private updatePopupHeight;
    private createPopup;
    private setElementWidth;
    private setWidth;
    private getHeight;
    private onDocumentClick;
    private onActionFailure;
    private OnDataBound;
    private restoreFilterSelection;
    private setCssClass;
    private setEnableRTL;
    private setEnable;
    private cloneFields;
    private cloneChildField;
    private getTreeFields;
    private getTreeChildren;
    private getTreeDataType;
    private setFields;
    private getEventArgs;
    private onBeforeSelect;
    private updateHiddenValue;
    private onNodeSelected;
    private onNodeClicked;
    private onNodeChecked;
    private beforeCheck;
    private updateClearButton;
    private updateDropDownIconState;
    private updateMode;
    private ensurePlaceHolder;
    private ensureClearIconPosition;
    private setMultiSelectValue;
    private setMultiSelect;
    private getSelectedData;
    private removeSelectedData;
    private updateSelectedValues;
    private setChipValues;
    private setSelectAllWrapper;
    private setHeaderTemplate;
    private templateComplier;
    private setFooterTemplate;
    private clearAll;
    private removeChip;
    private resetValue;
    private clearCheckAll;
    private selectAllItems;
    private updateTreeSettings;
    private updateCheckBoxState;
    private updateTemplate;
    private l10nUpdate;
    private ddtupdateBlazorTemplates;
    private ddtresetBlazorTemplates;
    private updateRecordTemplate;
    private updateOverflowWrapper;
    private updateMultiSelection;
    private updateAllowFiltering;
    private updateFilterPlaceHolder;
    private updateValue;
    private updateText;
    private updateModelMode;
    private updateOption;
    /**
     * Dynamically change the value of properties.
     *
     * @param {DropDownTreeModel} newProp - specifies the newProp value.
     * @param {DropDownTreeModel} oldProp - specifies the newProp value.
     * @returns {void}
     * @private
     */
    onPropertyChanged(newProp: DropDownTreeModel, oldProp: DropDownTreeModel): void;
    /**
     * Allows you to clear the selected values from the Dropdown Tree component.
     *
     * @method clear
     * @returns {void}
     */
    clear(): void;
    /**
     * Removes the component from the DOM and detaches all its related event handlers. Also, it removes the attributes and classes.
     *
     * @method destroy
     * @returns {void}
     */
    destroy(): void;
    private destroyFilter;
    /**
     * Ensures visibility of the Dropdown Tree item by using item value or item element.
     * If many Dropdown Tree items are present, and we are in need to find a particular item, then the `ensureVisible` property
     * helps you to bring the item to visibility by expanding the Dropdown Tree and scrolling to the specific item.
     *
     * @param  {string | Element} item - Specifies the value of Dropdown Tree item/ Dropdown Tree item element.
     * @returns {void}
     */
    ensureVisible(item: string | Element): void;
    /**
     * To get the updated data source of the Dropdown Tree.
     *
     * @param  {string | Element} item - Specifies the value of Dropdown Tree item/ Dropdown Tree item element
     * @returns {'{[key: string]: Object }[]'} - returns the updated data source of the Dropdown Tree.
     */
    getData(item?: string | Element): {
        [key: string]: Object;
    }[];
    /**
     * Close the Dropdown tree pop-up.
     *
     * @returns {void}
     */
    hidePopup(): void;
    /**
     * Based on the state parameter, entire list item will be selected or deselected.
     *
     * @param {boolean} state - Unselects/Selects entire Dropdown Tree items.
     * @returns {void}
     *
     */
    selectAll(state: boolean): void;
    /**
     * Opens the popup that displays the Dropdown Tree items.
     *
     * @returns {void}
     */
    showPopup(): void;
    /**
     * Return the module name.
     *
     * @private
     * @returns {string} - returns the module name.
     */
    getModuleName(): string;
}
