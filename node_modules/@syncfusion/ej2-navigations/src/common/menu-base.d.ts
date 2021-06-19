import { Component, ChildProperty, INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { EmitType, BaseEventArgs } from '@syncfusion/ej2-base';
import { MenuItemModel, MenuBaseModel, FieldSettingsModel, MenuAnimationSettingsModel } from './menu-base-model';
/**
 * Sub menu open type
 */
export declare type MenuOpenType = 'Auto' | 'Click' | 'Hover';
/**
 * Menu animation effects
 */
export declare type MenuEffect = 'None' | 'SlideDown' | 'ZoomIn' | 'FadeIn';
/**
 * Configures the field options of the Menu.
 */
export declare class FieldSettings extends ChildProperty<FieldSettings> {
    /**
     * Specifies the itemId field for Menu item.
     *
     * @default 'id'
     */
    itemId: string | string[];
    /**
     * Specifies the parentId field for Menu item.
     *
     * @default 'parentId'
     */
    parentId: string | string[];
    /**
     * Specifies the text field for Menu item.
     *
     * @default 'text'
     */
    text: string | string[];
    /**
     * Specifies the css icon field for Menu item.
     *
     * @default 'iconCss'
     */
    iconCss: string | string[];
    /**
     * Specifies the Url field for Menu item.
     *
     * @default 'url'
     */
    url: string | string[];
    /**
     * Specifies the separator field for Menu item.
     *
     * @default 'separator'
     */
    separator: string | string[];
    /**
     * Specifies the children field for Menu item.
     *
     * @default 'items'
     */
    children: string | string[];
}
/**
 * Specifies menu items.
 */
export declare class MenuItem extends ChildProperty<MenuItem> {
    /**
     * Defines class/multiple classes separated by a space for the menu Item that is used to include an icon.
     * Menu Item can include font icon and sprite image.
     *
     * @default null
     */
    iconCss: string;
    /**
     * Specifies the id for menu item.
     *
     * @default ''
     */
    id: string;
    /**
     * Specifies separator between the menu items. Separator are either horizontal or vertical lines used to group menu items.
     *
     * @default false
     */
    separator: boolean;
    /**
     * Specifies the sub menu items that is the array of MenuItem model.
     *
     * @default []
     */
    items: MenuItemModel[];
    /**
     * Specifies text for menu item.
     *
     * @default ''
     */
    text: string;
    /**
     * Specifies url for menu item that creates the anchor link to navigate to the url provided.
     *
     * @default ''
     */
    url: string;
}
/**
 * Animation configuration settings.
 */
export declare class MenuAnimationSettings extends ChildProperty<MenuAnimationSettings> {
    /**
     * Specifies the effect that shown in the sub menu transform.
     * The possible effects are:
     * * None: Specifies the sub menu transform with no animation effect.
     * * SlideDown: Specifies the sub menu transform with slide down effect.
     * * ZoomIn: Specifies the sub menu transform with zoom in effect.
     * * FadeIn: Specifies the sub menu transform with fade in effect.
     *
     * @default 'SlideDown'
     * @aspType Syncfusion.EJ2.Navigations.MenuEffect
     * @blazorType Syncfusion.EJ2.Navigations.MenuEffect
     * @isEnumeration true
     */
    effect: MenuEffect;
    /**
     * Specifies the time duration to transform object.
     *
     * @default 400
     */
    duration: number;
    /**
     * Specifies the easing effect applied while transform.
     *
     * @default 'ease'
     */
    easing: string;
}
/**
 * @private
 * Base class for Menu and ContextMenu components.
 */
export declare abstract class MenuBase extends Component<HTMLUListElement> implements INotifyPropertyChanged {
    private clonedElement;
    private targetElement;
    private delegateClickHandler;
    private delegateMoverHandler;
    private delegateMouseDownHandler;
    private navIdx;
    private animation;
    private isTapHold;
    protected isMenu: boolean;
    protected hamburgerMode: boolean;
    protected title: string;
    private rippleFn;
    private uList;
    private lItem;
    private popupObj;
    private popupWrapper;
    private isNestedOrVertical;
    private top;
    private left;
    private keyType;
    private showSubMenu;
    private action;
    private cli;
    private cliIdx;
    private isClosed;
    private liTrgt;
    private isMenusClosed;
    private isCMenu;
    private pageX;
    private pageY;
    private tempItem;
    private showSubMenuOn;
    private defaultOption;
    private timer;
    /**
     * Triggers while rendering each menu item.
     *
     * @event beforeItemRender
     * @blazorProperty 'OnItemRender'
     */
    beforeItemRender: EmitType<MenuEventArgs>;
    /**
     * Triggers before opening the menu item.
     *
     * @event beforeOpen
     * @blazorProperty 'OnOpen'
     */
    beforeOpen: EmitType<BeforeOpenCloseMenuEventArgs>;
    /**
     * Triggers while opening the menu item.
     *
     * @event onOpen
     * @blazorProperty 'Opened'
     */
    onOpen: EmitType<OpenCloseMenuEventArgs>;
    /**
     * Triggers before closing the menu.
     *
     * @event beforeClose
     * @blazorProperty 'OnClose'
     */
    beforeClose: EmitType<BeforeOpenCloseMenuEventArgs>;
    /**
     * Triggers while closing the menu.
     *
     * @event onClose
     * @blazorProperty 'Closed'
     */
    onClose: EmitType<OpenCloseMenuEventArgs>;
    /**
     * Triggers while selecting menu item.
     *
     * @event select
     * @blazorProperty 'ItemSelected'
     */
    select: EmitType<MenuEventArgs>;
    /**
     * Triggers once the component rendering is completed.
     *
     * @event created
     * @blazorProperty 'Created'
     */
    created: EmitType<Event>;
    /**
     * Defines class/multiple classes separated by a space in the Menu wrapper.
     *
     * @default ''
     */
    cssClass: string;
    /**
     * If hoverDelay is set by particular number, the menu will open after that period.
     *
     * @default 0
     */
    hoverDelay: number;
    /**
     * Specifies whether to show the sub menu or not on click.
     * When set to true, the sub menu will open only on mouse click.
     *
     * @default false
     */
    showItemOnClick: boolean;
    /**
     * Specifies target element selector in which the ContextMenu should be opened.
     * Specifies target element to open/close Menu while click in Hamburger mode.
     *
     * @default ''
     * @private
     */
    target: string;
    /**
     * Specifies the filter selector for elements inside the target in that the context menu will be opened.
     * Not applicable to Menu component.
     *
     * @default ''
     * @private
     */
    filter: string;
    /**
     * Specifies the template for Menu item.
     * Not applicable to ContextMenu component.
     *
     * @default null
     * @private
     */
    template: string;
    /**
     * Specifies whether to enable / disable the scrollable option in Menu.
     * Not applicable to ContextMenu component.
     *
     * @default false
     * @private
     */
    enableScrolling: boolean;
    /**
     * Defines whether to allow the cross-scripting site or not.
     *
     * @default false
     */
    enableHtmlSanitizer: boolean;
    /**
     * Specifies mapping fields from the dataSource.
     * Not applicable to ContextMenu component.
     *
     * @default { itemId: "id", text: "text", parentId: "parentId", iconCss: "iconCss", url: "url", separator: "separator",
     * children: "items" }
     * @private
     */
    fields: FieldSettingsModel;
    /**
     * Specifies menu items with its properties which will be rendered as Menu.
     *
     * @default []
     */
    items: MenuItemModel[] | {
        [key: string]: Object;
    }[];
    /**
     * Specifies the animation settings for the sub menu open.
     *
     * @default { duration: 400, easing: 'ease', effect: 'SlideDown' }
     */
    animationSettings: MenuAnimationSettingsModel;
    /**
     * Constructor for creating the widget.
     *
     * @private
     * @param {MenuBaseModel} options - Specifies the menu base model
     * @param {string | HTMLUListElement} element - Specifies the element
     */
    constructor(options?: MenuBaseModel, element?: string | HTMLUListElement);
    /**
     * Initialized third party configuration settings.
     *
     * @private
     * @returns {void}
     */
    protected preRender(): void;
    /**
     * Initialize the control rendering.
     *
     * @private
     * @returns {void}
     */
    protected render(): void;
    protected initialize(): void;
    private renderItems;
    protected wireEvents(): void;
    private wireKeyboardEvent;
    private mouseDownHandler;
    private keyBoardHandler;
    private upDownKeyHandler;
    private isValidLI;
    private getUlByNavIdx;
    private rightEnterKeyHandler;
    private leftEscKeyHandler;
    private scrollHandler;
    private touchHandler;
    private cmenuHandler;
    protected closeMenu(ulIndex?: number, e?: MouseEvent | KeyboardEvent, isIterated?: boolean): void;
    private updateReactTemplate;
    private getMenuItemModel;
    private getPopups;
    private isMenuVisible;
    private canOpen;
    protected openMenu(li: Element, item: MenuItemModel | {
        [key: string]: Object;
    }, top?: number, left?: number, e?: MouseEvent | KeyboardEvent, target?: HTMLElement): void;
    private calculateIndentSize;
    private generatePopup;
    protected createHeaderContainer(wrapper?: Element): void;
    protected openHamburgerMenu(e?: MouseEvent | KeyboardEvent): void;
    protected closeHamburgerMenu(e?: MouseEvent | KeyboardEvent): void;
    private callFit;
    private triggerBeforeOpen;
    protected setBlankIconStyle(menu: HTMLElement): void;
    private checkScrollOffset;
    private setPosition;
    private toggleVisiblity;
    private createItems;
    private moverHandler;
    private removeStateWrapper;
    private removeLIStateByClass;
    protected getField(propName: string, level?: number): string;
    private getFields;
    private hasField;
    private menuHeaderClickHandler;
    private clickHandler;
    private afterCloseMenu;
    private setLISelected;
    private getLIByClass;
    /**
     * This method is used to get the index of the menu item in the Menu based on the argument.
     *
     * @param {MenuItem | string} item - item be passed to get the index | id to be passed to get the item index.
     * @param {boolean} isUniqueId - Set `true` if it is a unique id.
     * @returns {void}
     */
    getItemIndex(item: MenuItem | string, isUniqueId?: boolean): number[];
    /**
     * This method is used to set the menu item in the Menu based on the argument.
     *
     * @param {MenuItem} item - item need to be updated.
     * @param {string} id - id to be passed to update the item.
     * @param {boolean} isUniqueId - Set `true` if it is a unique id.
     * @returns {void}
     */
    setItem(item: MenuItem, id?: string, isUniqueId?: boolean): void;
    private getItem;
    private getItems;
    private setItems;
    private getIdx;
    private getLI;
    private updateItemsByNavIdx;
    private removeChildElement;
    /**
     * Called internally if any of the property value changed.
     *
     * @private
     * @param {MenuBaseModel} newProp - Specifies the new properties
     * @param {MenuBaseModel} oldProp - Specifies the old properties
     * @returns {void}
     */
    onPropertyChanged(newProp: MenuBaseModel, oldProp: MenuBaseModel): void;
    private updateItem;
    private getChangedItemIndex;
    private removeItem;
    /**
     * Used to unwire the bind events.
     *
     * @private
     * @param {string} targetSelctor - Specifies the target selector
     * @returns {void}
     */
    protected unWireEvents(targetSelctor?: string): void;
    private unWireKeyboardEvent;
    private toggleAnimation;
    private triggerOpen;
    private end;
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @returns {string} - Persist data
     */
    protected getPersistData(): string;
    /**
     * Get wrapper element.
     *
     * @returns {Element} - Wrapper element
     * @private
     */
    private getWrapper;
    protected getIndex(data: string, isUniqueId?: boolean, items?: MenuItemModel[] | {
        [key: string]: Object;
    }[], nIndex?: number[], isCallBack?: boolean, level?: number): number[];
    /**
     * This method is used to enable or disable the menu items in the Menu based on the items and enable argument.
     *
     * @param {string[]} items - Text items that needs to be enabled/disabled.
     * @param {boolean} enable - Set `true`/`false` to enable/disable the list items.
     * @param {boolean} isUniqueId - Set `true` if it is a unique id.
     * @returns {void}
     */
    enableItems(items: string[], enable?: boolean, isUniqueId?: boolean): void;
    /**
     * This method is used to show the menu items in the Menu based on the items text.
     *
     * @param {string[]} items - Text items that needs to be shown.
     * @param {boolean} isUniqueId - Set `true` if it is a unique id.
     * @returns {void}
     */
    showItems(items: string[], isUniqueId?: boolean): void;
    /**
     * This method is used to hide the menu items in the Menu based on the items text.
     *
     * @param {string[]} items - Text items that needs to be hidden.
     * @param {boolean} isUniqueId - Set `true` if it is a unique id.
     * @returns {void}
     */
    hideItems(items: string[], isUniqueId?: boolean): void;
    private showHideItems;
    /**
     * It is used to remove the menu items from the Menu based on the items text.
     *
     * @param {string[]} items Text items that needs to be removed.
     * @param {boolean} isUniqueId - Set `true` if it is a unique id.
     * @returns {void}
     */
    removeItems(items: string[], isUniqueId?: boolean): void;
    /**
     * It is used to insert the menu items after the specified menu item text.
     *
     * @param {MenuItemModel[]} items - Items that needs to be inserted.
     * @param {string} text - Text item after that the element to be inserted.
     * @param {boolean} isUniqueId - Set `true` if it is a unique id.
     * @returns {void}
     */
    insertAfter(items: MenuItemModel[], text: string, isUniqueId?: boolean): void;
    /**
     * It is used to insert the menu items before the specified menu item text.
     *
     * @param {MenuItemModel[]} items - Items that needs to be inserted.
     * @param {string} text - Text item before that the element to be inserted.
     * @param  {boolean} isUniqueId - Set `true` if it is a unique id.
     * @returns {void}
     */
    insertBefore(items: MenuItemModel[], text: string, isUniqueId?: boolean): void;
    private insertItems;
    private removeAttributes;
    /**
     * Destroys the widget.
     *
     * @returns {void}
     */
    destroy(): void;
}
/**
 * Interface for before item render/select event.
 */
export interface MenuEventArgs extends BaseEventArgs {
    element: HTMLElement;
    item: MenuItemModel;
    event?: Event;
}
/**
 * Interface for before open/close event.
 */
export interface BeforeOpenCloseMenuEventArgs extends BaseEventArgs {
    element: HTMLElement;
    items: MenuItemModel[];
    parentItem: MenuItemModel;
    event: Event;
    cancel: boolean;
    top?: number;
    left?: number;
    isFocused?: boolean;
    showSubMenuOn?: MenuOpenType;
}
/**
 * Interface for open/close event.
 */
export interface OpenCloseMenuEventArgs extends BaseEventArgs {
    element: HTMLElement;
    items: MenuItemModel[] | {
        [key: string]: Object;
    }[];
    parentItem: MenuItemModel;
}
