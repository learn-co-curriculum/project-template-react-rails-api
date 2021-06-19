import { Base } from './base';
import { INotifyPropertyChanged } from './notify-property-change';
import { ChildProperty } from './child-property';
import { PositionModel, DraggableModel } from './draggable-model';
/**
 * Specifies the Direction in which drag movement happen.
 */
export declare type DragDirection = 'x' | 'y';
/**
 * Specifies the position coordinates
 */
export declare class Position extends ChildProperty<Position> {
    /**
     * Specifies the left position of cursor in draggable.
     */
    left: number;
    /**
     * Specifies the left position of cursor in draggable.
     */
    top: number;
}
interface PageInfo {
    x: number;
    y: number;
}
/**
 * Coordinates for element position
 * @private
 */
export interface Coordinates {
    /**
     * Defines the x Coordinate of page.
     */
    pageX: number;
    /**
     * Defines the y Coordinate of page.
     */
    pageY: number;
    /**
     * Defines the x Coordinate of client.
     */
    clientX: number;
    /**
     * Defines the y Coordinate of client.
     */
    clientY: number;
}
/**
 * Interface to specify the drag data in the droppable.
 */
export interface DropInfo {
    /**
     * Specifies the current draggable element
     */
    draggable?: HTMLElement;
    /**
     * Specifies the current helper element.
     */
    helper?: HTMLElement;
    /**
     * Specifies the drag target element
     */
    draggedElement?: HTMLElement;
}
export interface DropObject {
    target: HTMLElement;
    instance: DropOption;
}
/**
 * Used to access values
 * @private
 */
export interface DragPosition {
    left?: string;
    top?: string;
}
/**
 * Used for accessing the interface.
 * @private
 */
export interface Instance extends HTMLElement {
    /**
     * Specifies current instance collection in element
     */
    ej2_instances: {
        [key: string]: Object;
    }[];
}
/**
 * Droppable function to be invoked from draggable
 * @private
 */
export interface DropOption {
    /**
     * Used to triggers over function while draggable element is over the droppable element.
     */
    intOver: Function;
    /**
     * Used to triggers out function while draggable element is out of the droppable element.
     */
    intOut: Function;
    /**
     * Used to triggers  out function while draggable element is dropped on the droppable element.
     */
    intDrop: Function;
    /**
     * Specifies the information about the drag element.
     */
    dragData: DropInfo;
    /**
     * Specifies the status of the drag of drag stop calling.
     */
    dragStopCalled: boolean;
}
/**
 * Drag Event arguments
 */
export interface DragEventArgs {
    /**
     * Specifies the actual event.
     */
    event?: MouseEvent & TouchEvent;
    /**
     * Specifies the current drag element.
     */
    element?: HTMLElement;
    /**
     * Specifies the current target element.
     */
    target?: HTMLElement;
}
/**
 * Used for accessing the BlazorEventArgs.
 * @private
 */
export interface BlazorDragEventArgs {
    /**
     * bind draggable element for Blazor Components
     */
    bindEvents: Function;
    /**
     * Draggable element to which draggable events are to be binded in Blazor.
     */
    dragElement: HTMLElement;
}
/**
 * Draggable Module provides support to enable draggable functionality in Dom Elements.
 * ```html
 * <div id='drag'>Draggable</div>
 * <script>
 * var ele = document.getElementById('drag');
 * var drag:Draggable = new Draggable(ele,{
 *     clone:false,
 *     drag: function(e) {
 *      //drag handler code.
 *      },
 *     handle:'.class'
 * });
 * </script>
 * ```
 */
export declare class Draggable extends Base<HTMLElement> implements INotifyPropertyChanged {
    /**
     * Defines the distance between the cursor and the draggable element.
     */
    cursorAt: PositionModel;
    /**
     * If `clone` set to true, drag operations are performed in duplicate element of the draggable element.
     * @default true
     */
    clone: boolean;
    /**
     * Defines the parent  element in which draggable element movement will be restricted.
     */
    dragArea: HTMLElement | string;
    /**
     * Defines the dragArea is scrollable or not.
     */
    isDragScroll: boolean;
    /**
     * Defines wheather need to replace drag element by currentstateTarget.
     * @private
     */
    isReplaceDragEle: boolean;
    /**
     * Defines wheather need to add prevent select class to body or not.
     * @private
     */
    isPreventSelect: boolean;
    /**
     * Specifies the callback function for drag event.
     * @event
     */
    drag: Function;
    /**
     * Specifies the callback function for dragStart event.
     * @event
     */
    dragStart: Function;
    /**
     * Specifies the callback function for dragStop event.
     * @event
     */
    dragStop: Function;
    /**
     * Defines the minimum distance draggable element to be moved to trigger the drag operation.
     * @default 1
     */
    distance: number;
    /**
     * Defines the child element selector which will act as drag handle.
     */
    handle: string;
    /**
     * Defines the child element selector which will prevent dragging of element.
     */
    abort: string | string[];
    /**
     * Defines the callback function for customizing the cloned  element.
     */
    helper: Function;
    /**
     * Defines the scope value to group sets of draggable and droppable items.
     * A draggable with the same scope value will be accepted by the droppable.
     */
    scope: string;
    /**
     * Specifies the dragTarget by which the clone element is positioned if not given current context element will be considered.
     * @private
     */
    dragTarget: string;
    /**
     * Defines the axis to limit the draggable element drag path.The possible axis path values are
     * * `x` - Allows drag movement in horizontal direction only.
     * * `y` - Allows drag movement in vertical direction only.
     */
    axis: DragDirection;
    /**
     * Defines the function to change the position value.
     * @private
     */
    queryPositionInfo: Function;
    /**
     * Defines whether the drag clone element will be split form the cursor pointer.
     * @private
     */
    enableTailMode: boolean;
    /**
     * Defines whether to skip the previous drag movement comparison.
     * @private
     */
    skipDistanceCheck: boolean;
    /**
     * @private
     */
    preventDefault: boolean;
    /**
     * Defines whether to enable autoscroll on drag movement of draggable element.
     * enableAutoScroll
     * @private
     */
    enableAutoScroll: boolean;
    /**
     * Defines whether to enable taphold  on mobile devices.
     * enableAutoScroll
     * @private
     */
    enableTapHold: boolean;
    /**
     * Specifies the time delay for tap hold.
     * @default 750
     *  @private
     */
    tapHoldThreshold: number;
    private target;
    /**
     * @private
     */
    initialPosition: PageInfo;
    private relativeXPosition;
    private relativeYPosition;
    private margin;
    private offset;
    private position;
    private dragLimit;
    private borderWidth;
    private padding;
    private left;
    private top;
    private width;
    private height;
    private pageX;
    private diffX;
    private prevLeft;
    private prevTop;
    private dragProcessStarted;
    private tapHoldTimer;
    private dragElePosition;
    currentStateTarget: any;
    private externalInitialize;
    private diffY;
    private pageY;
    private helperElement;
    private hoverObject;
    private parentClientRect;
    private parentScrollX;
    private parentScrollY;
    private tempScrollHeight;
    private tempScrollWidth;
    droppables: {
        [key: string]: DropInfo;
    };
    constructor(element: HTMLElement, options?: DraggableModel);
    protected bind(): void;
    private static getDefaultPosition;
    private toggleEvents;
    private mobileInitialize;
    private removeTapholdTimer;
    private getScrollableParent;
    private getScrollableValues;
    private initialize;
    private intDragStart;
    private bindDragEvents;
    private elementInViewport;
    private getProcessedPositionValue;
    private calculateParentPosition;
    private intDrag;
    private triggerOutFunction;
    private getDragPosition;
    private getDocumentWidthHeight;
    private intDragStop;
    /**
     * @private
     */
    intDestroy(evt: MouseEvent & TouchEvent): void;
    onPropertyChanged(newProp: DraggableModel, oldProp: DraggableModel): void;
    getModuleName(): string;
    private isDragStarted;
    private setDragArea;
    private getProperTargetElement;
    private currentStateCheck;
    private getMousePosition;
    private getCoordinates;
    private getHelperElement;
    private setGlobalDroppables;
    private checkTargetElement;
    private getDropInstance;
    destroy(): void;
}
export {};
