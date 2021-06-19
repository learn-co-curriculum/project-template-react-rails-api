/// <reference path="../common/menu-base-model.d.ts" />
import { INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { ContextMenuModel } from './context-menu-model';
import { MenuBase } from '../common/menu-base';
import { MenuItemModel } from './../common/menu-base-model';
/**
 * The ContextMenu is a graphical user interface that appears on the user right click/touch hold operation.
 * ```html
 * <div id = 'target'></div>
 * <ul id = 'contextmenu'></ul>
 * ```
 * ```typescript
 * <script>
 * var contextMenuObj = new ContextMenu({items: [{ text: 'Cut' }, { text: 'Copy' },{ text: 'Paste' }], target: '#target'});
 * </script>
 * ```
 */
export declare class ContextMenu extends MenuBase implements INotifyPropertyChanged {
    /**
     * Constructor for creating the widget.
     *
     * @private
     * @param {ContextMenuModel} options - Specifies the context menu model
     * @param {string} element - Specifies the element
     */
    constructor(options?: ContextMenuModel, element?: string | HTMLUListElement);
    /**
     * Specifies target element selector in which the ContextMenu should be opened.
     *
     * @default ''
     */
    target: string;
    /**
     * Specifies the filter selector for elements inside the target in that the context menu will be opened.
     *
     * @default ''
     */
    filter: string;
    /**
     * Specifies menu items with its properties which will be rendered as ContextMenu.
     *
     * @default []
     * @aspType object
     * @blazorType object
     */
    items: MenuItemModel[];
    /**
     * For internal use only - prerender processing.
     *
     * @private
     * @returns {void}
     */
    protected preRender(): void;
    protected initialize(): void;
    /**
     * This method is used to open the ContextMenu in specified position.
     *
     * @param {number} top - To specify ContextMenu vertical positioning.
     * @param {number} left - To specify ContextMenu horizontal positioning.
     * @param {HTMLElement} target - To calculate z-index for ContextMenu based upon the specified target.
     * @method open
     * @returns {void}
     */
    open(top: number, left: number, target?: HTMLElement): void;
    /**
     * Closes the ContextMenu if it is opened.
     *
     * @returns {void}
     */
    close(): void;
    /**
     * Called internally if any of the property value changed.
     *
     * @private
     * @param {ContextMenuModel} newProp - Specifies new properties
     * @param {ContextMenuModel} oldProp - Specifies old properties
     * @returns {void}
     */
    onPropertyChanged(newProp: ContextMenuModel, oldProp: ContextMenuModel): void;
    /**
     * Get module name.
     *
     * @returns {string} - Module Name
     * @private
     */
    protected getModuleName(): string;
}
