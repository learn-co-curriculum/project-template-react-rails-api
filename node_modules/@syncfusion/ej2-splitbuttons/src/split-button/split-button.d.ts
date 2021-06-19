/// <reference path="../drop-down-button/drop-down-button-model.d.ts" />
import { EmitType } from '@syncfusion/ej2-base';
import { BaseEventArgs, INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { MenuEventArgs, BeforeOpenCloseMenuEventArgs, OpenCloseMenuEventArgs } from './../common/common';
import { SplitButtonIconPosition } from './../common/common';
import { DropDownButton } from '../drop-down-button/drop-down-button';
import { ItemModel } from './../common/common-model';
import { SplitButtonModel } from './split-button-model';
/**
 * SplitButton component has primary and secondary button. Primary button is used to select
 * default action and secondary button is used to toggle contextual overlays for displaying list of
 * action items. It can contain both text and images.
 * ```html
 * <button id="element"></button>
 * ```
 * ```typescript
 * <script>
 * var splitBtnObj = new SplitButton({content: 'SplitButton'});
 * splitBtnObj.appendTo("#element");
 * </script>
 * ```
 */
export declare class SplitButton extends DropDownButton implements INotifyPropertyChanged {
    private wrapper;
    private primaryBtnObj;
    private secondaryBtnObj;
    /**
     * Defines the content of the SplitButton primary action button can either be a text or HTML elements.
     *
     * @default ""
     */
    content: string;
    /**
     * Defines class/multiple classes separated by a space in the SplitButton element. The SplitButton
     * size and styles can be customized by using this.
     *
     * @default ""
     */
    cssClass: string;
    /**
     * Specifies a value that indicates whether the SplitButton is disabled or not.
     *
     * @default false.
     */
    disabled: boolean;
    /**
     * Defines class/multiple classes separated by a space for the SplitButton that is used to include an
     * icon. SplitButton can also include font icon and sprite image.
     *
     * @default ""
     */
    iconCss: string;
    /**
     * Positions the icon before/top of the text content in the SplitButton. The possible values are
     * * Left: The icon will be positioned to the left of the text content.
     * * Top: The icon will be positioned to the top of the text content.
     *
     * @default "Left"
     */
    iconPosition: SplitButtonIconPosition;
    /**
     * Specifies the popup element creation on open.
     *
     * @default false
     */
    createPopupOnClick: boolean;
    /**
     * Specifies action items with its properties which will be rendered as SplitButton secondary button popup.
     *
     * @default []
     */
    items: ItemModel[];
    /**
     * Allows to specify the SplitButton popup item element.
     *
     * @default ""
     */
    target: string | Element;
    /**
     * Triggers while rendering each Popup item of SplitButton.
     *
     * @event beforeItemRender
     */
    beforeItemRender: EmitType<MenuEventArgs>;
    /**
     * Triggers before opening the SplitButton popup.
     *
     * @event beforeOpen
     */
    beforeOpen: EmitType<BeforeOpenCloseMenuEventArgs>;
    /**
     * Triggers before closing the SplitButton popup.
     *
     * @event beforeClose
     */
    beforeClose: EmitType<BeforeOpenCloseMenuEventArgs>;
    /**
     * Triggers when the primary button of SplitButton has been clicked.
     *
     * @event click
     */
    click: EmitType<ClickEventArgs>;
    /**
     * Triggers while closing the SplitButton popup.
     *
     * @event close
     */
    close: EmitType<OpenCloseMenuEventArgs>;
    /**
     * Triggers while opening the SplitButton popup.
     *
     * @event open
     */
    open: EmitType<OpenCloseMenuEventArgs>;
    /**
     * Triggers while selecting action item of SplitButton popup.
     *
     * @event select
     */
    select: EmitType<MenuEventArgs>;
    /**
     * Triggers once the component rendering is completed.
     *
     * @event created
     */
    created: EmitType<Event>;
    /**
     * Constructor for creating the widget
     *
     * @param  {SplitButtonModel} options - Specifies the splitbutton model
     * @param  {string|HTMLButtonElement} element - Specifies the element
     * @hidden
     */
    constructor(options?: SplitButtonModel, element?: string | HTMLButtonElement);
    /**
     * Initialize Angular support.
     *
     * @private
     * @returns {void}
     */
    protected preRender(): void;
    /**
     * Initialize the Component rendering
     *
     * @returns {void}
     * @private
     */
    render(): void;
    private renderControl;
    /**
     * Adds a new item to the menu. By default, new item appends to the list as the last item,
     * but you can insert based on the text parameter.
     *
     * @param  { ItemModel[] } items - Specifies an array of JSON data.
     * @param { string } text - Specifies the text to insert the newly added item in the menu.
     * @returns {void}.
     */
    addItems(items: ItemModel[], text?: string): void;
    /**
     * Removes the items from the menu.
     *
     * @param  { string[] } items - Specifies an array of string to remove the items.
     * @param { string } isUniqueId - Set `true` if specified items is a collection of unique id.
     * @returns {void}.
     */
    removeItems(items: string[], isUniqueId?: boolean): void;
    private initWrapper;
    private createPrimaryButton;
    private createSecondaryButton;
    private setAria;
    /**
     * Get component name.
     *
     * @returns {string} - Module Name
     * @private
     */
    getModuleName(): string;
    /**
     * To open/close SplitButton popup based on current state of the SplitButton.
     *
     * @returns {void}
     */
    toggle(): void;
    destroy(): void;
    protected wireEvents(): void;
    protected unWireEvents(): void;
    private primaryBtnClickHandler;
    private btnKeyBoardHandler;
    /**
     * Called internally if any of the property value changed.
     *
     * @param  {SplitButtonModel} newProp - Specifies new properties
     * @param  {SplitButtonModel} oldProp - Specifies old properties
     * @returns {void}
     */
    onPropertyChanged(newProp: SplitButtonModel, oldProp: SplitButtonModel): void;
    /**
     * Sets the focus to SplitButton
     * its native method
     *
     * @public
     * @returns {void}
     */
    focusIn(): void;
}
/**
 * Interface for Split Button click event arguments.
 */
export interface ClickEventArgs extends BaseEventArgs {
    element: Element;
}
/**
 * Deferred is used to handle asynchronous operation.
 */
export declare class Deferred {
    /**
     * Reject a Deferred object and call failCallbacks with the given args.
     */
    reject: Function;
    /**
     * Resolve a Deferred object and call doneCallbacks with the given args.
     */
    resolve: Function;
    /**
     * Promise is an object that represents a value that may not be available yet, but will be resolved at some point in the future.
     */
    promise: Promise<Object>;
    /**
     * Defines the callback function triggers when the Deferred object is rejected.
     */
    catch: Function;
    /**
     * Defines the callback function triggers when the Deferred object is resolved.
     */
    then: Function;
}
