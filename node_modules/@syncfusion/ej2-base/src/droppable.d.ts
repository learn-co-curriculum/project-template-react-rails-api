import { Base } from './base';
import { INotifyPropertyChanged } from './notify-property-change';
import { DroppableModel } from './droppable-model';
import { DropInfo } from './draggable';
/**
 * Droppable arguments in drop callback.
 * @private
 */
export interface DropData {
    /**
     * Specifies that current element can be dropped.
     */
    canDrop: boolean;
    /**
     * Specifies target to drop.
     */
    target: HTMLElement;
}
export interface DropEvents extends MouseEvent, TouchEvent {
    dropTarget?: HTMLElement;
}
/**
 * Interface for drop event args
 */
export interface DropEventArgs {
    /**
     * Specifies the original mouse or touch  event arguments.
     */
    event?: MouseEvent & TouchEvent;
    /**
     * Specifies the target element.
     */
    target?: HTMLElement;
    /**
     *  Specifies the dropped element.
     */
    droppedElement?: HTMLElement;
    /**
     * Specifies the dragData
     */
    dragData?: DropInfo;
}
/**
 * Droppable Module provides support to enable droppable functionality in Dom Elements.
 * ```html
 * <div id='drop'>Droppable</div>
 * <script>
 * let ele:HTMLElement = document.getElementById('drop');
 * var drag:Droppable = new Droppable(ele,{
 *     accept:'.drop',
 *     drop: function(e) {
 *      //drop handler code.
 *     }
 * });
 * </script>
 * ```
 */
export declare class Droppable extends Base<HTMLElement> implements INotifyPropertyChanged {
    /**
     * Defines the selector for draggable element to be accepted by the droppable.
     */
    accept: string;
    /**
     * Defines the scope value to group sets of draggable and droppable items.
     * A draggable with the same scope value will only be accepted by the droppable.
     */
    scope: string;
    /**
     * Specifies the callback function, which will be triggered while drag element is dropped in droppable.
     * @event
     */
    drop: (args: DropEventArgs) => void;
    /**
     * Specifies the callback function, which will be triggered while drag element is moved over droppable element.
     * @event
     */
    over: Function;
    /**
     * Specifies the callback function, which will be triggered while drag element is moved out of droppable element.
     * @event
     */
    out: Function;
    private mouseOver;
    dragData: {
        [key: string]: DropInfo;
    };
    constructor(element: HTMLElement, options?: DroppableModel);
    protected bind(): void;
    private wireEvents;
    onPropertyChanged(newProp: DroppableModel, oldProp: DroppableModel): void;
    getModuleName(): string;
    private dragStopCalled;
    intOver(event: MouseEvent & TouchEvent, element?: Element): void;
    intOut(event: MouseEvent & TouchEvent, element?: Element): void;
    private intDrop;
    private isDropArea;
    destroy(): void;
}
