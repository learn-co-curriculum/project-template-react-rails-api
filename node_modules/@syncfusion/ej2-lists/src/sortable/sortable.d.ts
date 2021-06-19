import { Base, INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { SortableModel } from './sortable-model';
/**
 * Sortable Module provides support to enable sortable functionality in Dom Elements.
 * ```html
 * <div id="sortable">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 *   <div>Item 4</div>
 *   <div>Item 5</div>
 * </div>
 * ```
 * ```typescript
 *   let ele: HTMLElement = document.getElementById('sortable');
 *   let sortObj: Sortable = new Sortable(ele, {});
 * ```
 */
export declare class Sortable extends Base<HTMLElement> implements INotifyPropertyChanged {
    private target;
    private curTarget;
    private placeHolderElement;
    /**
     * It is used to enable or disable the built-in animations. The default value is `false`
     *
     * @default false
     */
    enableAnimation: boolean;
    /**
     * Specifies the sortable item class.
     *
     * @default null
     */
    itemClass: string;
    /**
     * Defines the scope value to group sets of sortable libraries.
     * More than one Sortable with same scope allows to transfer elements between different sortable libraries which has same scope value.
     */
    scope: string;
    /**
     * Defines the callback function for customizing the cloned element.
     */
    helper: (Element: object) => HTMLElement;
    /**
     * Defines the callback function for customizing the placeHolder element.
     */
    placeHolder: (Element: object) => HTMLElement;
    /**
     * Specifies the callback function for drag event.
     *
     * @event 'object'
     */
    drag: (e: any) => void;
    /**
     * Specifies the callback function for beforeDragStart event.
     *
     *  @event 'object'
     */
    beforeDragStart: (e: any) => void;
    /**
     * Specifies the callback function for dragStart event.
     *
     *  @event 'object'
     */
    dragStart: (e: any) => void;
    /**
     * Specifies the callback function for beforeDrop event.
     *
     *  @event 'object'
     */
    beforeDrop: (e: any) => void;
    /**
     * Specifies the callback function for drop event.
     *
     *  @event 'object'
     */
    drop: (e: any) => void;
    constructor(element: HTMLElement, options?: SortableModel);
    protected bind(): void;
    private initializeDraggable;
    private getPlaceHolder;
    private getHelper;
    private isValidTarget;
    private onDrag;
    private removePlaceHolder;
    private updateItemClass;
    private getSortableInstance;
    private refreshDisabled;
    private getIndex;
    private getSortableElement;
    private onDragStart;
    private queryPositionInfo;
    private isPlaceHolderPresent;
    private onDragStop;
    /**
     * It is used to sort array of elements from source element to destination element.
     *
     * @param destination - Defines the destination element to which the sortable elements needs to be appended.
     *
     * If it is null, then the Sortable library element will be considered as destination.
     * @param targetIndexes - Specifies the sortable elements indexes which needs to be sorted.
     * @param insertBefore - Specifies the index before which the sortable elements needs to be appended.
     * If it is null, elements will be appended as last child.
     * @function moveTo
     * @returns {void}
     */
    moveTo(destination?: HTMLElement, targetIndexes?: number[], insertBefore?: number): void;
    /**
     * It is used to destroy the Sortable library.
     */
    destroy(): void;
    getModuleName(): string;
    onPropertyChanged(newProp: SortableModel, oldProp: SortableModel): void;
}
/**
 * It is used to sort array of elements from source element to destination element.
 *
 * @private
 */
export declare function moveTo(from: HTMLElement, to?: HTMLElement, targetIndexes?: number[], insertBefore?: number): void;
/**
 * An interface that holds item drop event arguments
 */
export interface DropEventArgs {
    previousIndex: number;
    currentIndex: number;
    droppedElement: Element;
    target: Element;
    helper: Element;
    cancel?: boolean;
    handled?: boolean;
}
/**
 * An interface that holds item before drag event arguments
 */
export interface BeforeDragEventArgs {
    cancel?: boolean;
    target: Element;
}
