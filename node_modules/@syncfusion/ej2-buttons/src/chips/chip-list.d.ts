import { Component, INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { KeyboardEventArgs, MouseEventArgs } from '@syncfusion/ej2-base';
import { EmitType } from '@syncfusion/ej2-base';
import { ChipListModel } from './chip-list-model';
import { ChipModel } from './chip';
export declare const classNames: ClassNames;
export declare type selectionType = 'index' | 'value' | 'text';
export declare type Selection = 'Single' | 'Multiple' | 'None';
export interface ClassNames {
    chipSet: string;
    chip: string;
    avatar: string;
    text: string;
    icon: string;
    delete: string;
    deleteIcon: string;
    multiSelection: string;
    singleSelection: string;
    active: string;
    chipWrapper: string;
    iconWrapper: string;
    focused: string;
    disabled: string;
    rtl: string;
}
export interface SelectedItems {
    /**
     * It denotes the selected items text.
     */
    texts: string[];
    /**
     * It denotes the selected items index.
     */
    Indexes: number[];
    /**
     * It denotes the selected items data.
     */
    data: string[] | number[] | ChipModel[];
    /**
     * It denotes the selected items element.
     */
    elements: HTMLElement[];
}
export interface SelectedItem {
    /**
     * It denotes the selected item text.
     */
    text: string;
    /**
     * It denotes the selected item index.
     */
    index: number;
    /**
     * It denotes the selected item data.
     */
    data: string | number | ChipModel;
    /**
     * It denotes the selected item element.
     */
    element: HTMLElement;
}
export interface ClickEventArgs {
    /**
     * It denotes the clicked item text.
     */
    text: string;
    /**
     * It denotes the clicked item index.
     */
    index?: number;
    /**
     * It denotes the clicked item data.
     */
    data: string | number | ChipModel;
    /**
     * It denotes the clicked item element.
     */
    element: HTMLElement;
    /**
     * It denotes whether the clicked item is selected or not.
     */
    selected?: boolean;
    /**
     * It denotes whether the item can be clicked or not.
     */
    cancel: boolean;
    /**
     * It denotes the event.
     */
    event: MouseEventArgs | KeyboardEventArgs;
}
export interface DeleteEventArgs {
    /**
     * It denotes the deleted item text.
     */
    text: string;
    /**
     * It denotes the deleted item index.
     */
    index: number;
    /**
     * It denotes the deleted item data.
     */
    data: string | number | ChipModel;
    /**
     * It denotes the deleted Item element.
     */
    element: HTMLElement;
    /**
     * It denotes whether the item can be deleted or not.
     */
    cancel: boolean;
    /**
     * It denotes the event.
     */
    event: MouseEventArgs | KeyboardEventArgs;
}
export interface ChipDataArgs {
    /**
     * It denotes the item text.
     */
    text: string;
    /**
     * It denotes the Item index.
     */
    index: number;
    /**
     * It denotes the item data.
     */
    data: string | number | ChipModel;
    /**
     * It denotes the item element.
     */
    element: HTMLElement;
}
/**
 * A chip component is a small block of essential information, mostly used on contacts or filter tags.
 * ```html
 * <div id="chip"></div>
 * ```
 * ```typescript
 * <script>
 * var chipObj = new ChipList();
 * chipObj.appendTo("#chip");
 * </script>
 * ```
 */
export declare class ChipList extends Component<HTMLElement> implements INotifyPropertyChanged {
    /**
     * This chips property helps to render ChipList component.
     * {% codeBlock src='chips/chips/index.md' %}{% endcodeBlock %}
     *
     * @default []
     * @blazorType List<ChipListChip>
     *
     */
    chips: string[] | number[] | ChipModel[];
    /**
     * Specifies the text content for the chip.
     * {% codeBlock src='chips/text/index.md' %}{% endcodeBlock %}
     *
     * @default ''
     */
    text: string;
    /**
     * Specifies the customized text value for the avatar in the chip.
     * {% codeBlock src='chips/avatarText/index.md' %}{% endcodeBlock %}
     *
     * @default ''
     */
    avatarText: string;
    /**
     * Specifies the icon CSS class for the avatar in the chip.
     * {% codeBlock src='chips/avatarIconCss/index.md' %}{% endcodeBlock %}
     *
     * @default ''
     */
    avatarIconCss: string;
    /**
     * Specifies the leading icon CSS class for the chip.
     * {% codeBlock src='chips/leadingIconCss/index.md' %}{% endcodeBlock %}
     *
     * @default ''
     */
    leadingIconCss: string;
    /**
     * Specifies the trailing icon CSS class for the chip.
     * {% codeBlock src='chips/trailingIconCss/index.md' %}{% endcodeBlock %}
     *
     * @default ''
     */
    trailingIconCss: string;
    /**
     * Specifies the trailing icon url for the chip.
     *
     * @default ''
     */
    leadingIconUrl: string;
    /**
     * Specifies the trailing icon url for the chip.
     *
     * @default ''
     */
    trailingIconUrl: string;
    /**
     * Specifies the custom classes to be added to the chip element used to customize the ChipList component.
     * {% codeBlock src='chips/cssClass/index.md' %}{% endcodeBlock %}
     *
     * @default ''
     */
    cssClass: string;
    /**
     * Specifies a value that indicates whether the chip component is enabled or not.
     *
     * @default true
     * @blazorDefaultValue null
     * @blazorType bool?
     */
    enabled: boolean;
    /**
     * Sets or gets the selected chip items in the chip list.
     * {% codeBlock src='chips/selectedChips/index.md' %}{% endcodeBlock %}
     *
     * @default []
     */
    selectedChips: string[] | number[] | number;
    /**
     * Defines the selection type of the chip. The available types are:
     *   1. Input chip
     *   2. Choice chip
     *   3. Filter chip
     *   4. Action chip
     *
     * @default 'None'
     */
    selection: Selection;
    /**
     * Enables or disables the delete functionality of a chip.
     * {% codeBlock src='chips/enableDelete/index.md' %}{% endcodeBlock %}
     *
     * @default false
     */
    enableDelete: boolean;
    /**
     * Triggers when the component is created successfully.
     * {% codeBlock src='chips/created/index.md' %}{% endcodeBlock %}
     *
     * @event
     * @blazorProperty 'Created'
     */
    created: EmitType<Event>;
    /**
     * Triggers when a chip is clicked.
     * {% codeBlock src='chips/click/index.md' %}{% endcodeBlock %}
     *
     * @event
     * @blazorProperty 'OnClick'
     */
    click: EmitType<ClickEventArgs>;
    /**
     * Triggers before the click event of the chip is fired.
     * This event can be used to prevent the further process and restrict the click action over a chip.
     *
     * {% codeBlock src='chips/beforeClick/index.md' %}{% endcodeBlock %}
     *
     * @event
     * @blazorProperty 'OnBeforeClick'
     */
    beforeClick: EmitType<ClickEventArgs>;
    /**
     * Fires before removing the chip element.
     * {% codeBlock src='chips/delete/index.md' %}{% endcodeBlock %}
     *
     * @event
     * @blazorProperty 'OnDelete'
     */
    delete: EmitType<DeleteEventArgs>;
    constructor(options?: ChipListModel, element?: string | HTMLElement);
    private rippleFunction;
    private type;
    private innerText;
    multiSelectedChip: number[];
    /**
     * Initialize the event handler
     *
     * @private
     */
    protected preRender(): void;
    /**
     * To find the chips length.
     *
     * @returns boolean
     * @private
     */
    protected chipType(): boolean;
    /**
     * To Initialize the control rendering.
     *
     * @returns void
     * @private
     */
    protected render(): void;
    private createChip;
    private setAttributes;
    private setRtl;
    private chipCreation;
    private getFieldValues;
    private elementCreation;
    /**
     * A function that finds chip based on given input.
     *
     * @param  {number | HTMLElement } fields - We can pass index number or element of chip.
     * {% codeBlock src='chips/find/index.md' %}{% endcodeBlock %}.
     */
    find(fields: number | HTMLElement): ChipDataArgs;
    /**
     * Allows adding the chip item(s) by passing a single or array of string, number, or ChipModel values.
     *
     * @param  {string[] | number[] | ChipModel[] | string | number | ChipModel} chipsData - We can pass array of string or
     *  array of number or array of chip model or string data or number data or chip model.
     * {% codeBlock src='chips/add/index.md' %}{% endcodeBlock %}

     */
    add(chipsData: string[] | number[] | ChipModel[] | string | number | ChipModel): void;
    /**
     * Allows selecting the chip item(s) by passing a single or array of string, number, or ChipModel values.
     *
     * @param  {number | number[] | HTMLElement | HTMLElement[]} fields - We can pass number or array of number
     *  or chip element or array of chip element.
     * {% codeBlock src='chips/select/index.md' %}{% endcodeBlock %}
     */
    select(fields: number | number[] | HTMLElement | HTMLElement[] | string[], selectionType?: selectionType): void;
    private multiSelection;
    private onSelect;
    /**
     * Allows removing the chip item(s) by passing a single or array of string, number, or ChipModel values.
     *
     * @param  {number | number[] | HTMLElement | HTMLElement[]} fields - We can pass number or array of number
     *  or chip element or array of chip element.
     * {% codeBlock src='chips/remove/index.md' %}{% endcodeBlock %}
     */
    remove(fields: number | number[] | HTMLElement | HTMLElement[]): void;
    /**
     * Returns the selected chip(s) data.
     * {% codeBlock src='chips/getSelectedChips/index.md' %}{% endcodeBlock %}
     */
    getSelectedChips(): SelectedItem | SelectedItems;
    private wireEvent;
    private keyHandler;
    private focusInHandler;
    private focusOutHandler;
    private clickHandler;
    private clickEventHandler;
    private selectionHandler;
    private updateSelectedChips;
    private deleteHandler;
    /**
     * Removes the component from the DOM and detaches all its related event handlers. Also, it removes the attributes and classes.
     * {% codeBlock src='chips/destroy/index.md' %}{% endcodeBlock %}
     */
    destroy(): void;
    private removeMultipleAttributes;
    getPersistData(): string;
    getModuleName(): string;
    /**
     * Called internally if any of the property value changed.
     *
     * @returns void
     * @private
     */
    onPropertyChanged(newProp: ChipList, oldProp: ChipList): void;
}
