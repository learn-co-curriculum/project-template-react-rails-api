/// <reference path="../drop-down-list/drop-down-list-model.d.ts" />
import { EmitType, KeyboardEventArgs } from '@syncfusion/ej2-base';
import { DropDownList } from '../drop-down-list/drop-down-list';
import { FilteringEventArgs } from '../drop-down-base/drop-down-base';
import { FieldSettingsModel } from '../drop-down-base/drop-down-base-model';
import { ComboBoxModel } from '../combo-box/combo-box-model';
import { InputObject, FloatLabelType } from '@syncfusion/ej2-inputs';
import { DataManager, Query } from '@syncfusion/ej2-data';
/**
 * The ComboBox component allows the user to type a value or choose an option from the list of predefined options.
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
 *   let games:ComboBox = new ComboBox();
 *   games.appendTo("#list");
 * ```
 */
export declare class ComboBox extends DropDownList {
    /**
     * Specifies whether suggest a first matched item in input when searching. No action happens when no matches found.
     *
     * @default false
     */
    autofill: boolean;
    /**
     * Specifies whether the component allows user defined value which does not exist in data source.
     *
     * @default true
     */
    allowCustom: boolean;
    /**
     * Allows additional HTML attributes such as title, name, etc., and
     * accepts n number of attributes in a key-value pair format.
     *
     * {% codeBlock src='combobox/htmlAttributes/index.md' %}{% endcodeBlock %}
     *
     * @default {}

     */
    htmlAttributes: {
        [key: string]: string;
    };
    /**
     * When allowFiltering is set to true, show the filter bar (search box) of the component.
     * The filter action retrieves matched items through the `filtering` event based on
     * the characters typed in the search TextBox.
     * If no match is found, the value of the `noRecordsTemplate` property will be displayed.
     *
     * {% codeBlock src="combobox/allow-filtering-api/index.ts" %}{% endcodeBlock %}
     *
     * {% codeBlock src="combobox/allow-filtering-api/index.html" %}{% endcodeBlock %}
     *
     * @default false

     */
    allowFiltering: boolean;
    /**
     * Accepts the external `Query`
     * that execute along with [`data processing`](../../combo-box/data-binding).
     *
     * {% codeBlock src='combobox/query/index.md' %}{% endcodeBlock %}
     *
     * @default null

     */
    query: Query;
    /**
     * Gets or sets the index of the selected item in the component.
     *
     * {% codeBlock src="combobox/index-api/index.ts" %}{% endcodeBlock %}
     *
     * {% codeBlock src="combobox/index-api/index.html" %}{% endcodeBlock %}
     *
     * @default null
     * @blazorType int
     * @isBlazorNullableType true
     * @blazorDefaultValue

     */
    index: number;
    /**
     * Specifies whether to show or hide the clear button.
     * When the clear button is clicked, `value`, `text`, and `index` properties are reset to null.
     *
     * @default true
     * @blazorOverrideType override
     */
    showClearButton: boolean;
    /**
     * Enable or disable rendering component in right to left direction.
     *
     * @default false

     * @blazorOverrideType override
     */
    enableRtl: boolean;
    /**
     * Triggers on set a
     * [`custom value`](../../combo-box/getting-started#custom-values) to this component.
     *
     * @event customValueSpecifier
     * @blazorProperty 'CustomValueSpecifier'
     */
    customValueSpecifier: EmitType<CustomValueSpecifierEventArgs>;
    /**
     * Triggers on typing a character in the component.
     * > For more details about the filtering refer to [`Filtering`](../../combo-box/filtering) documentation.
     *
     * @event filtering
     * @blazorProperty 'Filtering'
     */
    filtering: EmitType<FilteringEventArgs>;
    /**
     * Not applicable to this component.
     *
     * @default null
     * @private
     */
    valueTemplate: string;
    /**
     * Specifies whether to display the floating label above the input element.
     * Possible values are:
     * * Never: The label will never float in the input when the placeholder is available.
     * * Always: The floating label will always float above the input.
     * * Auto: The floating label will float above the input after focusing or entering a value in the input.
     *
     * {% codeBlock src="combobox/float-label-type-api/index.ts" %}{% endcodeBlock %}
     *
     * {% codeBlock src="combobox/float-label-type-api/index.html" %}{% endcodeBlock %}
     *
     * @default Syncfusion.EJ2.Inputs.FloatLabelType.Never
     * @aspType Syncfusion.EJ2.Inputs.FloatLabelType
     * @isEnumeration true
     * @blazorType Syncfusion.Blazor.Inputs.FloatLabelType

     */
    floatLabelType: FloatLabelType;
    /**
     * Not applicable to this component.
     *
     * @default null
     * @private

     */
    filterBarPlaceholder: string;
    /**
     * Sets CSS classes to the root element of the component that allows customization of appearance.
     *
     * @default null

     */
    cssClass: string;
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
     * Specifies a short hint that describes the expected value of the DropDownList component.
     *
     * @default null

     */
    placeholder: string;
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
     * *Constructor for creating the component
     *
     * @param {ComboBoxModel} options - Specifies the ComboBox model.
     * @param {string | HTMLElement} element - Specifies the element to render as component.
     * @private
     */
    constructor(options?: ComboBoxModel, element?: string | HTMLElement);
    /**
     * Initialize the event handler
     *
     * @private
     * @returns {void}
     */
    protected preRender(): void;
    protected getLocaleName(): string;
    protected wireEvent(): void;
    private preventBlur;
    protected onBlur(e: MouseEvent): void;
    protected targetElement(): HTMLElement | HTMLInputElement;
    protected setOldText(text: string): void;
    protected setOldValue(value: string | number): void;
    private valueMuteChange;
    protected updateValues(): void;
    protected updateIconState(): void;
    protected getAriaAttributes(): {
        [key: string]: string;
    };
    protected searchLists(e: KeyboardEventArgs | MouseEvent): void;
    protected getNgDirective(): string;
    protected setSearchBox(): InputObject;
    protected onActionComplete(ulElement: HTMLElement, list: {
        [key: string]: Object;
    }[], e?: Object, isUpdated?: boolean): void;
    protected getFocusElement(): Element;
    protected setValue(e?: KeyboardEventArgs): boolean;
    protected checkCustomValue(): void;
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
    protected setAutoFill(activeElement: Element, isHover?: boolean): void;
    private isAndroidAutoFill;
    protected clearAll(e?: MouseEvent | KeyboardEventArgs, property?: ComboBoxModel): void;
    protected isSelectFocusItem(element: Element): boolean;
    private inlineSearch;
    protected incrementalSearch(e: KeyboardEventArgs): void;
    private setAutoFillSelection;
    protected getValueByText(text: string): string | number | boolean;
    protected unWireEvent(): void;
    protected setSelection(li: Element, e: MouseEvent | KeyboardEventArgs | TouchEvent): void;
    protected selectCurrentItem(e: KeyboardEventArgs): void;
    protected setHoverList(li: Element): void;
    private targetFocus;
    protected dropDownClick(e: MouseEvent): void;
    private customValue;
    private updateCustomValueCallback;
    /**
     * Dynamically change the value of properties.
     *
     * @param {ComboBoxModel} newProp - Returns the dynamic property value of the component.
     * @param {ComboBoxModel} oldProp - Returns the previous property value of the component.
     * @private
     * @returns {void}
     */
    onPropertyChanged(newProp: ComboBoxModel, oldProp: ComboBoxModel): void;
    /**
     * To initialize the control rendering.
     *
     * @private
     * @returns {void}
     */
    render(): void;
    /**
     * Return the module name of this component.
     *
     * @private
     * @returns {string} Return the module name of this component.
     */
    getModuleName(): string;
    /**
     * Adds a new item to the combobox popup list. By default, new item appends to the list as the last item,
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
    /**
     * Opens the popup that displays the list of items.
     *
     * @returns {void}

     */
    showPopup(): void;
    /**
     * Hides the popup if it is in open state.
     *
     * @returns {void}

     */
    hidePopup(e?: MouseEvent | KeyboardEventArgs): void;
    /**
     * Sets the focus to the component for interaction.
     *
     * @returns {void}
     */
    focusIn(): void;
    /**
     * Allows you to clear the selected values from the component.
     *
     * @returns {void}

     */
    clear(): void;
    /**
     * Moves the focus from the component if the component is already focused.
     *
     * @returns {void}

     */
    focusOut(e?: MouseEvent | KeyboardEventArgs): void;
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
    protected renderHightSearch(): void;
}
export interface CustomValueSpecifierEventArgs {
    /**
     * Gets the typed custom text to make a own text format and assign it to `item` argument.
     */
    text: string;
    /**
     * Sets the text custom format data for set a `value` and `text`.
     *
     * @blazorType object
     */
    item: {
        [key: string]: string | Object;
    };
}
