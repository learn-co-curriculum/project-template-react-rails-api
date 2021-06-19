/// <reference path="../drop-down-base/drop-down-base-model.d.ts" />
import { EmitType } from '@syncfusion/ej2-base';
import { KeyboardEventArgs } from '@syncfusion/ej2-base';
import { IInput, InputObject, FloatLabelType } from '@syncfusion/ej2-inputs';
import { DropDownBase, SelectEventArgs, FilteringEventArgs, PopupEventArgs } from '../drop-down-base/drop-down-base';
import { FieldSettingsModel } from '../drop-down-base/drop-down-base-model';
import { DropDownListModel } from '../drop-down-list';
import { DataManager, Query } from '@syncfusion/ej2-data';
export interface ChangeEventArgs extends SelectEventArgs {
    /**
     * Returns the selected value
     *
     * @isGenericType true
     */
    value: number | string | boolean;
    /**
     * Returns the previous selected list item
     */
    previousItem: HTMLLIElement;
    /**
     * Returns the previous selected item as JSON Object from the data source.
     *
     * @blazorType object
     */
    previousItemData: FieldSettingsModel;
    /**
     * Returns the root element of the component.
     */
    element: HTMLElement;
}
export declare const dropDownListClasses: DropDownListClassList;
/**
 * The DropDownList component contains a list of predefined values from which you can
 * choose a single value.
 * ```html
 * <input type="text" tabindex="1" id="list"> </input>
 * ```
 * ```typescript
 *   let dropDownListObj:DropDownList = new DropDownList();
 *   dropDownListObj.appendTo("#list");
 * ```
 */
export declare class DropDownList extends DropDownBase implements IInput {
    protected inputWrapper: InputObject;
    protected inputElement: HTMLInputElement;
    private valueTempElement;
    private listObject;
    private header;
    private footer;
    protected selectedLI: HTMLElement;
    protected previousSelectedLI: HTMLElement;
    protected previousItemData: {
        [key: string]: Object;
    } | string | number | boolean;
    private listHeight;
    protected hiddenElement: HTMLSelectElement;
    protected isPopupOpen: boolean;
    private isDocumentClick;
    protected isInteracted: boolean;
    private isFilterFocus;
    protected beforePopupOpen: boolean;
    protected initial: boolean;
    private initRemoteRender;
    private searchBoxHeight;
    private popupObj;
    private backIconElement;
    private clearIconElement;
    private containerStyle;
    protected previousValue: string | number | boolean;
    protected activeIndex: number;
    protected filterInput: HTMLInputElement;
    private searchKeyModule;
    private tabIndex;
    private isNotSearchList;
    protected isTyped: boolean;
    protected isSelected: boolean;
    protected preventFocus: boolean;
    protected preventAutoFill: boolean;
    protected queryString: string;
    protected isValidKey: boolean;
    protected typedString: string;
    protected isEscapeKey: boolean;
    private isPreventBlur;
    protected isTabKey: boolean;
    private actionCompleteData;
    private actionData;
    protected prevSelectPoints: {
        [key: string]: number;
    };
    protected isSelectCustom: boolean;
    protected isDropDownClick: boolean;
    protected preventAltUp: boolean;
    private searchKeyEvent;
    private filterInputObj;
    protected spinnerElement: HTMLElement;
    protected keyConfigure: {
        [key: string]: string;
    };
    protected isCustomFilter: boolean;
    private isSecondClick;
    private serverPopupEle;
    protected isServerBlazor: boolean;
    private isServerIncrementalSearch;
    private isServerNavigation;
    protected isListSearched: boolean;
    protected preventChange: boolean;
    protected isAngular: boolean;
    /**
     * Sets CSS classes to the root element of the component that allows customization of appearance.
     *
     * @default null
     */
    cssClass: string;
    /**
     * Specifies the width of the component. By default, the component width sets based on the width of
     * its parent container. You can also set the width in pixel values.
     *
     * @default '100%'
     * @aspType string
     * @blazorType string
     */
    width: string | number;
    /**
     * Specifies the height of the popup list.
     * > For more details about the popup configuration refer to
     * [`Popup Configuration`](../../drop-down-list/getting-started#configure-the-popup-list) documentation.
     *
     * @default '300px'
     * @aspType string
     * @blazorType string
     */
    popupHeight: string | number;
    /**
     * Specifies the width of the popup list. By default, the popup width sets based on the width of
     * the component.
     * > For more details about the popup configuration refer to
     * [`Popup Configuration`](../../drop-down-list/getting-started#configure-the-popup-list) documentation.
     *
     * @default '100%'
     * @aspType string
     * @blazorType string
     */
    popupWidth: string | number;
    /**
     * Specifies a short hint that describes the expected value of the DropDownList component.
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
     * Allows additional HTML attributes such as title, name, etc., and
     * accepts n number of attributes in a key-value pair format.
     *
     * {% codeBlock src='dropdownlist/htmlAttributes/index.md' %}{% endcodeBlock %}
     *
     * @default {}
     */
    htmlAttributes: {
        [key: string]: string;
    };
    /**
     * Accepts the external `Query`
     * that execute along with data processing.
     *
     * {% codeBlock src='dropdownlist/query/index.md' %}{% endcodeBlock %}
     *
     * @default null

     */
    query: Query;
    /**
     * Accepts the template design and assigns it to the selected list item in the input element of the component.
     * For more details about the available template options refer to
     * [`Template`](../../drop-down-list/templates) documentation.
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
     * > For more details about the available template options refer to [`Template`](../../drop-down-list/templates) documentation.
     *
     * @default null
     */
    headerTemplate: string;
    /**
     * Accepts the template design and assigns it to the footer container of the popup list.
     * > For more details about the available template options refer to [`Template`](../../drop-down-list/templates) documentation.
     *
     * @default null
     */
    footerTemplate: string;
    /**
     * When allowFiltering is set to true, show the filter bar (search box) of the component.
     * The filter action retrieves matched items through the `filtering` event based on
     * the characters typed in the search TextBox.
     *
     * If no match is found, the value of the `noRecordsTemplate` property will be displayed.
     * > For more details about the filtering refer to [`Filtering`](../../drop-down-list/filtering) documentation.
     *
     * {% codeBlock src="dropdownlist/allow-filtering-api/index.ts" %}{% endcodeBlock %}
     *
     * {% codeBlock src="dropdownlist/allow-filtering-api/index.html" %}{% endcodeBlock %}
     *
     * @default false
     */
    allowFiltering: boolean;
    /**
     * When set to true, the user interactions on the component are disabled.
     *
     * @default false
     */
    readonly: boolean;
    /**
     * Gets or sets the display text of the selected item in the component.
     *
     * @default null
     */
    text: string;
    /**
     * Gets or sets the value of the selected item in the component.
     *
     * @default null
     * @isGenericType true
     */
    value: number | string | boolean;
    /**
     * Gets or sets the index of the selected item in the component.
     *
     * {% codeBlock src="dropdownlist/index-api/index.ts" %}{% endcodeBlock %}
     *
     * {% codeBlock src="dropdownlist/index-api/index.html" %}{% endcodeBlock %}
     *
     * @default null
     * @blazorType int
     * @isBlazorNullableType true
     * @blazorDefaultValue
     */
    index: number;
    /**
     * Specifies whether to display the floating label above the input element.
     * Possible values are:
     * * Never: The label will never float in the input when the placeholder is available.
     * * Always: The floating label will always float above the input.
     * * Auto: The floating label will float above the input after focusing or entering a value in the input.
     *
     * {% codeBlock src="dropdownlist/float-label-type-api/index.ts" %}{% endcodeBlock %}
     *
     * {% codeBlock src="dropdownlist/float-label-type-api/index.html" %}{% endcodeBlock %}
     *
     * @default Syncfusion.EJ2.Inputs.FloatLabelType.Never
     * @aspType Syncfusion.EJ2.Inputs.FloatLabelType
     * @isEnumeration true
     * @blazorType Syncfusion.Blazor.Inputs.FloatLabelType
     */
    floatLabelType: FloatLabelType;
    /**
     * Specifies whether to show or hide the clear button.
     * When the clear button is clicked, `value`, `text`, and `index` properties are reset to null.
     *
     * @default false
     * @blazorOverrideType virtual
     */
    showClearButton: boolean;
    /**
     * Triggers on typing a character in the filter bar when the
     * [`allowFiltering`](./#allowfiltering)
     * is enabled.
     * > For more details about the filtering refer to [`Filtering`](../../drop-down-list/filtering) documentation.
     *
     * @event filtering
     * @blazorProperty 'Filtering'
     */
    filtering: EmitType<FilteringEventArgs>;
    /**
     * Triggers when an item in a popup is selected or when the model value is changed by user.
     * Use change event to
     * [`Configure the Cascading DropDownList`](../../drop-down-list/how-to/cascading)
     *
     * @event change
     * @blazorProperty 'ValueChange'
     */
    change: EmitType<ChangeEventArgs>;
    /**
     * Triggers when the popup before opens.
     *
     * @event beforeOpen
     * @blazorProperty 'OnOpen'
     * @blazorType BeforeOpenEventArgs
     */
    beforeOpen: EmitType<Object>;
    /**
     * Triggers when the popup opens.
     *
     * @event open
     * @blazorProperty 'Opened'
     */
    open: EmitType<PopupEventArgs>;
    /**
     * Triggers when the popup is closed.
     *
     * @event close
     * @blazorProperty 'OnClose'
     */
    close: EmitType<PopupEventArgs>;
    /**
     * Triggers when focus moves out from the component.
     *
     * @event blur
     */
    blur: EmitType<Object>;
    /**
     * Triggers when the component is focused.
     *
     * @event focus
     */
    focus: EmitType<Object>;
    /**
     * * Constructor for creating the DropDownList component.
     *
     * @param {DropDownListModel} options - Specifies the DropDownList model.
     * @param {string | HTMLElement} element - Specifies the element to render as component.
     * @private
     */
    constructor(options?: DropDownListModel, element?: string | HTMLElement);
    /**
     * Initialize the event handler.
     *
     * @private
     * @returns {void}
     */
    protected preRender(): void;
    private initializeData;
    protected setZIndex(): void;
    protected renderList(isEmptyData?: boolean): void;
    private floatLabelChange;
    protected resetHandler(e: MouseEvent): void;
    protected resetFocusElement(): void;
    protected clearAll(e?: MouseEvent | KeyboardEventArgs, properties?: DropDownListModel): void;
    private resetSelection;
    private setHTMLAttributes;
    protected getAriaAttributes(): {
        [key: string]: string;
    };
    protected setEnableRtl(): void;
    private setEnable;
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @returns {string} Returns the persisted data of the component.
     */
    protected getPersistData(): string;
    protected getLocaleName(): string;
    private preventTabIndex;
    protected targetElement(): HTMLElement | HTMLInputElement;
    protected getNgDirective(): string;
    protected getElementByText(text: string): Element;
    protected getElementByValue(value: string | number | boolean): Element;
    private initValue;
    protected updateValues(): void;
    protected onBlur(e: MouseEvent): void;
    protected focusOutAction(e?: MouseEvent | KeyboardEventArgs): void;
    protected onFocusOut(): void;
    protected onFocus(e?: FocusEvent | MouseEvent | KeyboardEvent | TouchEvent): void;
    private resetValueHandler;
    protected wireEvent(): void;
    protected bindCommonEvent(): void;
    private bindClearEvent;
    protected unBindCommonEvent(): void;
    protected updateIconState(): void;
    /**
     * Event binding for list
     *
     * @returns {void}
     */
    private wireListEvents;
    private onSearch;
    private onServerIncrementalSearch;
    protected onMouseClick(e: MouseEvent): void;
    private onMouseOver;
    private setHover;
    private onMouseLeave;
    protected removeHover(): void;
    protected isValidLI(li: Element | HTMLElement): boolean;
    protected incrementalSearch(e: KeyboardEventArgs): void;
    /**
     * Hides the spinner loader.
     *
     * @returns {void}
     */
    hideSpinner(): void;
    /**
     * Shows the spinner loader.
     *
     * @returns {void}
     */
    showSpinner(): void;
    protected keyActionHandler(e: KeyboardEventArgs): void;
    private updateUpDownAction;
    private updateHomeEndAction;
    protected selectCurrentValueOnTab(e: KeyboardEventArgs): void;
    protected mobileKeyActionHandler(e: KeyboardEventArgs): void;
    protected selectCurrentItem(e: KeyboardEventArgs): void;
    protected isSelectFocusItem(element: Element): boolean;
    private getPageCount;
    private pageUpSelection;
    private pageDownSelection;
    protected unWireEvent(): void;
    /**
     * Event un binding for list items.
     *
     * @returns {void}
     */
    private unWireListEvents;
    protected checkSelector(id: string): string;
    protected onDocumentClick(e: MouseEvent): void;
    private activeStateChange;
    private focusDropDown;
    protected dropDownClick(e: MouseEvent): void;
    protected cloneElements(): void;
    protected updateSelectedItem(li: Element, e: MouseEvent | KeyboardEvent | TouchEvent, preventSelect?: boolean, isSelection?: boolean): void;
    private selectEventCallback;
    protected activeItem(li: Element): void;
    protected setValue(e?: KeyboardEventArgs): boolean;
    protected setSelection(li: Element, e: MouseEvent | KeyboardEventArgs | TouchEvent): void;
    private setSelectOptions;
    private dropdownCompiler;
    private setValueTemplate;
    protected removeSelection(): void;
    protected getItemData(): {
        [key: string]: string;
    };
    /**
     * To trigger the change event for list.
     *
     * @param {MouseEvent | KeyboardEvent | TouchEvent} eve - Specifies the event arguments.
     * @returns {void}
     */
    protected onChangeEvent(eve: MouseEvent | KeyboardEvent | TouchEvent): void;
    private detachChanges;
    protected detachChangeEvent(eve: MouseEvent | KeyboardEvent | TouchEvent): void;
    protected setHiddenValue(): void;
    /**
     * Filter bar implementation
     *
     * @param {KeyboardEventArgs} e - Specifies the event arguments.
     * @returns {void}
     */
    protected onFilterUp(e: KeyboardEventArgs): void;
    protected onFilterDown(e: KeyboardEventArgs): void;
    protected removeFillSelection(): void;
    protected getQuery(query: Query): Query;
    protected getSelectionPoints(): {
        [key: string]: number;
    };
    protected searchLists(e: KeyboardEventArgs | MouseEvent): void;
    /**
     * To filter the data from given data source by using query
     *
     * @param  {Object[] | DataManager } dataSource - Set the data source to filter.
     * @param  {Query} query - Specify the query to filter the data.
     * @param  {FieldSettingsModel} fields - Specify the fields to map the column in the data table.
     * @returns {void}

     */
    filter(dataSource: {
        [key: string]: Object;
    }[] | DataManager | string[] | number[] | boolean[], query?: Query, fields?: FieldSettingsModel): void;
    private filteringAction;
    protected setSearchBox(popupElement: HTMLElement): InputObject;
    protected onInput(e: KeyboardEventArgs): void;
    protected pasteHandler(e: KeyboardEventArgs): void;
    protected onActionFailure(e: Object): void;
    protected onActionComplete(ulElement: HTMLElement, list: {
        [key: string]: Object;
    }[], e?: Object, isUpdated?: boolean): void;
    private updateActionCompleteDataValues;
    private addNewItem;
    protected updateActionCompleteData(li: HTMLElement, item: {
        [key: string]: Object;
    }, index?: number): void;
    private actionCompleteDataUpdate;
    private focusIndexItem;
    protected updateSelection(): void;
    protected removeFocus(): void;
    protected renderPopup(): void;
    private checkCollision;
    private serverBlazorUpdateSelection;
    private bindServerScrollEvent;
    private updateServerPopup;
    private getOffsetValue;
    private createPopup;
    private isEmptyList;
    protected getFocusElement(): void;
    private isFilterLayout;
    private scrollHandler;
    private setSearchBoxPosition;
    private setPopupPosition;
    private setWidth;
    private scrollBottom;
    private scrollTop;
    protected isEditTextBox(): boolean;
    protected isFiltering(): boolean;
    protected isPopupButton(): boolean;
    protected setScrollPosition(e?: KeyboardEventArgs): void;
    private clearText;
    private listScroll;
    private setEleWidth;
    private closePopup;
    private destroyPopup;
    private clickOnBackIcon;
    /**
     * To Initialize the control rendering
     *
     * @private
     * @returns {void}
     */
    render(): void;
    private setFooterTemplate;
    private setHeaderTemplate;
    protected setOldText(text: string): void;
    protected setOldValue(value: string | number | boolean): void;
    protected refreshPopup(): void;
    protected checkData(newProp?: DropDownListModel): void;
    protected updateDataSource(props?: DropDownListModel): void;
    protected checkCustomValue(): void;
    private updateInputFields;
    /**
     * Dynamically change the value of properties.
     *
     * @private
     * @param {DropDownListModel} newProp - Returns the dynamic property value of the component.
     * @param {DropDownListModel} oldProp - Returns the previous previous value of the component.
     * @returns {void}
     */
    onPropertyChanged(newProp: DropDownListModel, oldProp: DropDownListModel): void;
    private checkValidLi;
    private setSelectionData;
    private setCssClass;
    /**
     * Return the module name of this component.
     *
     * @private
     * @returns {string} Return the module name of this component.
     */
    getModuleName(): string;
    /**
     * Opens the popup that displays the list of items.
     *
     * @returns {void}
     */
    showPopup(): void;
    private invokeRenderPopup;
    private clientRenderPopup;
    protected renderHightSearch(): void;
    private updateclientItemData;
    private initValueItemData;
    private serverUpdateListElement;
    /**
     * Hides the popup if it is in an open state.
     *
     * @returns {void}
     */
    hidePopup(e?: MouseEvent | KeyboardEventArgs): void;
    /**
     * Sets the focus on the component for interaction.
     *
     * @returns {void}
     */
    focusIn(e?: FocusEvent | MouseEvent | KeyboardEvent | TouchEvent): void;
    /**
     * Moves the focus from the component if the component is already focused.
     *
     * @returns {void}
     */
    focusOut(e?: MouseEvent | KeyboardEventArgs): void;
    /**
     * Removes the component from the DOM and detaches all its related event handlers. Also it removes the attributes and classes.
     *
     * @method destroy
     * @returns {void}
     */
    destroy(): void;
    /**
     * Gets all the list items bound on this component.
     *
     * @returns {Element[]}
     */
    getItems(): Element[];
    /**
     * Gets the data Object that matches the given value.
     *
     * @param { string | number } value - Specifies the value of the list item.
     * @returns {Object}
     * @blazorType object
     */
    getDataByValue(value: string | number | boolean): {
        [key: string]: Object;
    } | string | number | boolean;
    /**
     * Allows you to clear the selected values from the component.
     *
     * @returns {void}
     */
    clear(): void;
}
export interface DropDownListClassList {
    root: string;
    hover: string;
    selected: string;
    rtl: string;
    base: string;
    disable: string;
    input: string;
    inputFocus: string;
    li: string;
    icon: string;
    iconAnimation: string;
    value: string;
    focus: string;
    device: string;
    backIcon: string;
    filterBarClearIcon: string;
    filterInput: string;
    filterParent: string;
    mobileFilter: string;
    footer: string;
    header: string;
    clearIcon: string;
    clearIconHide: string;
    popupFullScreen: string;
    disableIcon: string;
    hiddenElement: string;
}
