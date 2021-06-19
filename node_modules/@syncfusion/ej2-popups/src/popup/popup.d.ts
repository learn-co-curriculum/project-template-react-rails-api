import { ChildProperty } from '@syncfusion/ej2-base';
import { AnimationModel, EmitType, Component } from '@syncfusion/ej2-base';
import { INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { PopupModel, PositionDataModel } from './popup-model';
/**
 * Specifies the offset position values.
 */
export declare class PositionData extends ChildProperty<PositionData> {
    /**
     * specify the offset left value
     *
     * @blazorType string
     */
    X: string | number;
    /**
     * specify the offset top value.
     *
     * @blazorType string
     */
    Y: string | number;
}
/**
 * Provides information about a CollisionAxis.
 */
export interface CollisionAxis {
    /**
     * specify the collision handler for a X-Axis.
     *
     * @default "none"
     */
    X?: CollisionType;
    /**
     * specify the collision handler for a Y-Axis.
     *
     * @default "none"
     */
    Y?: CollisionType;
}
/**
 * Collision type.
 */
export declare type CollisionType = 'none' | 'flip' | 'fit';
/**
 * action on scroll type.
 */
export declare type ActionOnScrollType = 'reposition' | 'hide' | 'none';
/**
 * Target element type.
 */
export declare type TargetType = 'relative' | 'container';
/**
 * Represents the Popup Component
 * ```html
 * <div id="popup" style="position:absolute;height:100px;width:100px;">
 * <div style="margin:35px 25px;">Popup Content</div></div>
 * ```
 * ```typescript
 * <script>
 *   var popupObj = new Popup();
 *   popupObj.appendTo("#popup");
 * </script>
 * ```
 */
export declare class Popup extends Component<HTMLElement> implements INotifyPropertyChanged {
    private fixedParent;
    /**
     * Specifies the height of the popup element.
     *
     * @default 'auto'
     */
    height: string | number;
    /**
     * Specifies the height of the popup element.
     *
     * @default 'auto'
     */
    width: string | number;
    /**
     * Specifies the content of the popup element, it can be string or HTMLElement.
     *
     * @default null
     */
    content: string | HTMLElement;
    /**
     * Specifies the relative element type of the component.
     *
     * @default 'container'
     */
    targetType: TargetType;
    /**
     * Specifies the collision detectable container element of the component.
     *
     * @default null
     */
    viewPortElement: HTMLElement;
    /**
     * Specifies the collision handler settings of the component.
     *
     * @default { X: 'none',Y: 'none' }
     */
    collision: CollisionAxis;
    /**
     * Specifies the relative container element of the popup element.Based on the relative element, popup element will be positioned.
     *
     * @default 'body'
     */
    relateTo: HTMLElement | string;
    /**
     * Specifies the popup element position, respective to the relative element.
     *
     * @default {X:"left", Y:"top"}
     */
    position: PositionDataModel;
    /**
     * specifies the popup element offset-x value, respective to the relative element.
     *
     * @default 0
     */
    offsetX: number;
    /**
     * specifies the popup element offset-y value, respective to the relative element.
     *
     * @default 0
     */
    offsetY: number;
    /**
     * specifies the z-index value of the popup element.
     *
     * @default 1000
     */
    zIndex: number;
    /**
     * specifies the rtl direction state of the popup element.
     *
     * @default false
     */
    enableRtl: boolean;
    /**
     * specifies the action that should happen when scroll the target-parent container.
     * This property should define either `reposition` or `hide`.
     * when set `reposition` to this property, the popup position will refresh when scroll any parent container.
     * when set `hide` to this property, the popup will be closed when scroll any parent container.
     *
     * @default 'reposition'
     */
    actionOnScroll: ActionOnScrollType;
    /**
     * specifies the animation that should happen when popup open.
     *
     * @default 'null'
     */
    showAnimation: AnimationModel;
    /**
     * specifies the animation that should happen when popup closes.
     *
     * @default 'null'
     */
    hideAnimation: AnimationModel;
    /**
     * Triggers the event once opened the popup.
     *
     * @event 'object'
     */
    open: EmitType<Object>;
    /**
     * Trigger the event once closed the popup.
     *
     * @event 'object'
     */
    close: EmitType<Object>;
    /**
     * * Constructor for creating the widget
     */
    /**
     * Triggers the event when target element hide from view port on scroll.
     *
     * @event 'object'
     */
    targetExitViewport: EmitType<Object>;
    private targetInvisibleStatus;
    constructor(element?: HTMLElement, options?: PopupModel);
    /**
     * Called internally if any of the property value changed.
     *
     * @param {PopupModel} newProp - specifies the new property
     * @param {PopupModel} oldProp - specifies the old property
     * @private
     * @returns {void}
     */
    onPropertyChanged(newProp: PopupModel, oldProp: PopupModel): void;
    /**
     * gets the Component module name.
     *
     * @returns {void}
     * @private
     */
    getModuleName(): string;
    /**
     * To resolve if any collision occurs.
     *
     * @returns {void}
     */
    resolveCollision(): void;
    /**
     * gets the persisted state properties of the Component.
     *
     * @returns {void}
     */
    protected getPersistData(): string;
    /**
     * To destroy the control.
     *
     * @returns {void}
     */
    destroy(): void;
    /**
     * To Initialize the control rendering
     *
     * @returns {void}
     * @private
     */
    render(): void;
    private wireEvents;
    wireScrollEvents(): void;
    private unwireEvents;
    unwireScrollEvents(): void;
    private getRelateToElement;
    private scrollRefresh;
    /**
     * This method is to get the element visibility on viewport when scroll
     * the page. This method will returns true even though 1 px of element
     * part is in visible.
     *
     * @param {HTMLElement} relateToElement - specifies the element
     * @param {HTMLElement} scrollElement - specifies the scroll element
     * @returns {boolean} - retruns the boolean
     */
    private isElementOnViewport;
    private isElementVisible;
    /**
     * Initialize the event handler
     *
     * @returns {void}
     * @private
     */
    protected preRender(): void;
    private setEnableRtl;
    private setContent;
    private orientationOnChange;
    /**
     * Based on the `relative` element and `offset` values, `Popup` element position will refreshed.
     *
     * @returns {void}
     */
    refreshPosition(target?: HTMLElement, collision?: boolean): void;
    private reposition;
    private checkGetBoundingClientRect;
    private getAnchorPosition;
    private callFlip;
    private callFit;
    private checkCollision;
    /**
     * Shows the popup element from screen.
     *
     * @returns {void}
     * @param {AnimationModel} animationOptions - specifies the model
     * @param { HTMLElement } relativeElement - To calculate the zIndex value dynamically.
     */
    show(animationOptions?: AnimationModel, relativeElement?: HTMLElement): void;
    /**
     * Hides the popup element from screen.
     *
     * @param {AnimationModel} animationOptions - To give the animation options.
     * @returns {void}
     */
    hide(animationOptions?: AnimationModel): void;
    /**
     * Gets scrollable parent elements for the given element.
     *
     * @returns {void}
     * @param { HTMLElement } element - Specify the element to get the scrollable parents of it.
     */
    getScrollableParent(element: HTMLElement): HTMLElement[];
    private checkFixedParent;
}
/**
 * Gets scrollable parent elements for the given element.
 *
 * @param { HTMLElement } element - Specify the element to get the scrollable parents of it.
 * @param {boolean} fixedParent - specifies the parent element
 * @private
 * @returns {void}
 */
export declare function getScrollableParent(element: HTMLElement, fixedParent?: boolean): HTMLElement[];
/**
 * Gets the maximum z-index of the given element.
 *
 * @returns {void}
 * @param { HTMLElement } element - Specify the element to get the maximum z-index of it.
 * @private
 */
export declare function getZindexPartial(element: HTMLElement): number;
/**
 * Gets the maximum z-index of the page.
 *
 * @returns {void}
 * @param { HTMLElement } tagName - Specify the tagName to get the maximum z-index of it.
 * @private
 */
export declare function getMaxZindex(tagName?: string[]): number;
