import { INotifyPropertyChanged } from './notify-property-change';
import { Base, EmitType } from './base';
import { ChildProperty } from './child-property';
import { BaseEventArgs } from './event-handler';
import { TouchModel, SwipeSettingsModel } from './touch-model';
/**
 * SwipeSettings is a framework module that provides support to handle swipe event like swipe up, swipe right, etc..,
 */
export declare class SwipeSettings extends ChildProperty<SwipeSettings> {
    /**
     * Property specifies minimum distance of swipe moved.
     */
    swipeThresholdDistance: number;
}
/**
 * Touch class provides support to handle the touch event like tap, double tap, tap hold, etc..,
 * ```typescript
 *    let node: HTMLElement;
 * let touchObj: Touch = new Touch({
 *    element: node,
 *    tap: function (e) {
 *        // tap handler function code
 *    }
 *    tapHold: function (e) {
 *        // tap hold handler function code
 *    }
 *    scroll: function (e) {
 *        // scroll handler function code
 *    }
 *    swipe: function (e) {
 *        // swipe handler function code
 *    }
 * });
 * ```
 */
export declare class Touch extends Base<HTMLElement> implements INotifyPropertyChanged {
    private isTouchMoved;
    private startPoint;
    private movedPoint;
    private endPoint;
    private startEventData;
    private lastTapTime;
    private lastMovedPoint;
    private scrollDirection;
    private hScrollLocked;
    private vScrollLocked;
    private defaultArgs;
    private distanceX;
    private distanceY;
    private movedDirection;
    private tStampStart;
    private touchAction;
    private timeOutTap;
    private modeClear;
    private timeOutTapHold;
    /**
     * Specifies the callback function for tap event.
     * @event
     */
    tap: EmitType<TapEventArgs>;
    /**
     * Specifies the callback function for tapHold event.
     * @event
     */
    tapHold: EmitType<TapEventArgs>;
    /**
     * Specifies the callback function for swipe event.
     * @event
     */
    swipe: EmitType<SwipeEventArgs>;
    /**
     * Specifies the callback function for scroll event.
     * @event
     */
    scroll: EmitType<ScrollEventArgs>;
    /**
     * Specifies the time delay for tap.
     * @default 350
     */
    tapThreshold: number;
    /**
     * Specifies the time delay for tap hold.
     * @default 750
     */
    tapHoldThreshold: number;
    /**
     * Customize the swipe event configuration.
     * @default { swipeThresholdDistance: 50 }
     */
    swipeSettings: SwipeSettingsModel;
    private tapCount;
    constructor(element: HTMLElement, options?: TouchModel);
    /**
     * @private
     * @param newProp
     * @param oldProp
     */
    onPropertyChanged(newProp: TouchModel, oldProp: TouchModel): void;
    protected bind(): void;
    /**
     * To destroy the touch instance.
     * @return {void}
     */
    destroy(): void;
    private wireEvents;
    private unwireEvents;
    /**
     * Returns module name as touch
     * @returns {string}
     * @private
     */
    getModuleName(): string;
    /**
     * Returns if the HTML element is Scrollable.
     * @param {HTMLElement} element - HTML Element to check if Scrollable.
     * @returns {boolean}
     */
    private isScrollable;
    private startEvent;
    private moveEvent;
    private cancelEvent;
    private tapHoldEvent;
    private endEvent;
    private swipeFn;
    private modeclear;
    private calcPoints;
    private calcScrollPoints;
    private getVelocity;
    private checkSwipe;
    private updateChangeTouches;
}
/**
 * The argument type of `Tap` Event
 */
export interface TapEventArgs extends BaseEventArgs {
    /**
     * Original native event Object.
     */
    originalEvent: TouchEventArgs | MouseEventArgs;
    /**
     * Tap Count.
     */
    tapCount?: number;
}
/**
 * The argument type of `Scroll` Event
 */
export interface ScrollEventArgs extends BaseEventArgs {
    /**
     * Event argument for start event.
     */
    startEvents: TouchEventArgs | MouseEventArgs;
    /**
     * Original native event object for scroll.
     */
    originalEvent: TouchEventArgs | MouseEventArgs;
    /**
     * X position when scroll started.
     */
    startX: number;
    /**
     * Y position when scroll started.
     */
    startY: number;
    /**
     * The direction scroll.
     */
    scrollDirection: string;
    /**
     * The total traveled distance from X position
     */
    distanceX: number;
    /**
     * The total traveled distance from Y position
     */
    distanceY: number;
    /**
     * The velocity of scroll.
     */
    velocity: number;
}
/**
 * The argument type of `Swipe` Event
 */
export interface SwipeEventArgs extends BaseEventArgs {
    /**
     * Event argument for start event.
     */
    startEvents: TouchEventArgs | MouseEventArgs;
    /**
     * Original native event object  for swipe.
     */
    originalEvent: TouchEventArgs | MouseEventArgs;
    /**
     * X position when swipe started.
     */
    startX: number;
    /**
     * Y position when swipe started.
     */
    startY: number;
    /**
     * The direction swipe.
     */
    swipeDirection: string;
    /**
     * The total traveled distance from X position
     */
    distanceX: number;
    /**
     * The total traveled distance from Y position
     */
    distanceY: number;
    /**
     * The velocity of swipe.
     */
    velocity: number;
}
export interface TouchEventArgs extends MouseEvent {
    /**
     * A TouchList with touched points.
     */
    changedTouches: MouseEventArgs[] | TouchEventArgs[];
    /**
     * Cancel the default action.
     */
    preventDefault(): void;
    /**
     * The horizontal coordinate point of client area.
     */
    clientX: number;
    /**
     * The vertical coordinate point of client area.
     */
    clientY: number;
}
export interface MouseEventArgs extends MouseEvent {
    /**
     * A TouchList with touched points.
     */
    changedTouches: MouseEventArgs[] | TouchEventArgs[];
    /**
     * Cancel the default action.
     */
    preventDefault(): void;
    /**
     * The horizontal coordinate point of client area.
     */
    clientX: number;
    /**
     * The vertical coordinate point of client area.
     */
    clientY: number;
}
