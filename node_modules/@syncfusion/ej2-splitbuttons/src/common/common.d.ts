import { ChildProperty, BaseEventArgs } from '@syncfusion/ej2-base';
import { ItemModel } from './common-model';
/**
 * Defines the icon position of Split Button.
 */
export declare type SplitButtonIconPosition = 'Left' | 'Top';
/**
 * @param {Object} props - Specifies the properties
 * @param {string[]} model - Specifies the model
 * @returns {Object} Component Model
 */
export declare function getModel(props: Object, model: string[]): Object;
/** @hidden
 * @param {HTMLElement} ul - Specifies the UL element
 * @param {number} keyCode - Specifies the keycode
 * @returns {void}
 */
export declare function upDownKeyHandler(ul: HTMLElement, keyCode: number): void;
/** @hidden
 * @param {HTMLElement} popup - Specifies the popup element.
 * @returns {void}
 */
export declare function setBlankIconStyle(popup: HTMLElement): void;
/**
 * Defines the items of Split Button/DropDownButton.
 */
export declare class Item extends ChildProperty<Item> {
    /**
     * Defines class/multiple classes separated by a space for the item that is used to include an icon.
     * Action item can include font icon and sprite image.
     *
     * @default ''
     */
    iconCss: string;
    /**
     * Specifies the id for item.
     *
     * @default ''
     */
    id: string;
    /**
     * Specifies separator between the items. Separator are horizontal lines used to group action items.
     *
     * @default false
     */
    separator: boolean;
    /**
     * Specifies text for item.
     *
     * @default ''
     */
    text: string;
    /**
     * Specifies url for item that creates the anchor link to navigate to the url provided.
     *
     * @default ''
     */
    url: string;
    /**
     * Used to enable or disable the item.
     *
     * @default false
     */
    disabled: boolean;
}
/**
 * Interface for before item render / select event.
 */
export interface MenuEventArgs extends BaseEventArgs {
    element: HTMLElement;
    item: ItemModel;
}
/**
 * Interface for before open / close event.
 */
export interface BeforeOpenCloseMenuEventArgs extends BaseEventArgs {
    element: HTMLElement;
    items: ItemModel[];
    event: Event;
    cancel?: boolean;
}
/**
 * Interface for open/close event.
 */
export interface OpenCloseMenuEventArgs extends BaseEventArgs {
    element: HTMLElement;
    items: ItemModel[];
    parentItem?: ItemModel;
}
