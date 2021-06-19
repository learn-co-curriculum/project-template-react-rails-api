/// <reference path="../common/menu-base-model.d.ts" />
import { INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { MenuBase } from '../common/menu-base';
import { FieldSettingsModel } from '../common/menu-base-model';
import { MenuModel } from './menu-model';
/**
 * Specifies the option for orientation mode of Menu. By default, component rendered in Horizontal orientation mode.
 */
export declare type Orientation = 'Horizontal' | 'Vertical';
/**
 * The Menu is a graphical user interface that serve as navigation headers for your application or site.
 * ```html
 * <ul id = 'menu'></ul>
 * ```
 * ```typescript
 * <script>
 * var menuObj = new Menu({ items: [{ text: 'Home' }, { text: 'Contact Us' },{ text: 'Login' }]});
 * menuObj.appendTo("#menu");
 * </script>
 * ```
 */
export declare class Menu extends MenuBase implements INotifyPropertyChanged {
    private tempItems;
    /**
     * Specified the orientation of Menu whether it can be horizontal or vertical.
     *
     * @default 'Horizontal'
     */
    orientation: Orientation;
    /**
     * Specifies target element to open/close Menu while click in Hamburger mode.
     *
     * @default ''
     */
    target: string;
    /**
     * Specifies the template for Menu item.
     *
     * @default null
     */
    template: string;
    /**
     * Specifies whether to enable / disable the scrollable option in Menu.
     *
     * @default false
     */
    enableScrolling: boolean;
    /**
     * Specifies whether to enable / disable the hamburger mode in Menu.
     *
     * @default false
     */
    hamburgerMode: boolean;
    /**
     * Specifies the title text for hamburger mode in Menu.
     *
     * @default 'Menu'
     */
    title: string;
    /**
     * Defines whether to allow the cross-scripting site or not.
     *
     * @default false
     */
    enableHtmlSanitizer: boolean;
    /**
     * Specifies mapping fields from the dataSource.
     *
     * @default { itemId: "id", text: "text", parentId: "parentId", iconCss: "iconCss", url: "url", separator: "separator",
     * children: "items" }
     */
    fields: FieldSettingsModel;
    /**
     * Constructor for creating the component.
     *
     * @private
     * @param {MenuModel} options - Specifies the menu model
     * @param {string} element - Specifies the element
     */
    constructor(options?: MenuModel, element?: string | HTMLUListElement);
    /**
     * Get module name.
     *
     * @private
     * @returns {string} - Module Name
     */
    protected getModuleName(): string;
    /**
     * For internal use only - prerender processing.
     *
     * @private
     * @returns {void}
     */
    protected preRender(): void;
    protected initialize(): void;
    private updateMenuItems;
    /**
     * Called internally if any of the property value changed.
     *
     * @private
     * @param {MenuModel} newProp - Specifies the new properties.
     * @param {MenuModel} oldProp - Specifies the old properties.
     * @returns {void}
     */
    onPropertyChanged(newProp: MenuModel, oldProp: MenuModel): void;
    private createMenuItems;
    /**
     * This method is used to open the Menu in hamburger mode.
     *
     * @method open
     * @returns {void}
     */
    open(): void;
    /**
     * Closes the Menu if it is opened in hamburger mode.
     *
     * @returns {void}
     */
    close(): void;
}
