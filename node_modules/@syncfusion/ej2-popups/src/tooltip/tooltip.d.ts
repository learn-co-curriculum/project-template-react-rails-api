import { Component, ChildProperty, BaseEventArgs } from '@syncfusion/ej2-base';
import { EmitType } from '@syncfusion/ej2-base';
import { INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { TooltipModel, AnimationModel } from './tooltip-model';
/**
 * Set of open modes available for Tooltip.
 */
export declare type OpenMode = 'Auto' | 'Hover' | 'Click' | 'Focus' | 'Custom';
/**
 * Applicable positions where the Tooltip can be displayed over specific target elements.
 */
export declare type Position = 'TopLeft' | 'TopCenter' | 'TopRight' | 'BottomLeft' | 'BottomCenter' | 'BottomRight' | 'LeftTop' | 'LeftCenter' | 'LeftBottom' | 'RightTop' | 'RightCenter' | 'RightBottom';
/**
 * Applicable tip positions attached to the Tooltip.
 */
export declare type TipPointerPosition = 'Auto' | 'Start' | 'Middle' | 'End';
/**
 * Animation effects that are applicable for Tooltip.
 */
export declare type Effect = 'FadeIn' | 'FadeOut' | 'FadeZoomIn' | 'FadeZoomOut' | 'FlipXDownIn' | 'FlipXDownOut' | 'FlipXUpIn' | 'FlipXUpOut' | 'FlipYLeftIn' | 'FlipYLeftOut' | 'FlipYRightIn' | 'FlipYRightOut' | 'ZoomIn' | 'ZoomOut' | 'None';
/**
 * Interface for Tooltip event arguments.
 */
export interface TooltipEventArgs extends BaseEventArgs {
    /**
     * It is used to denote the type of the triggered event.
     */
    type: string;
    /**
     * It illustrates whether the current action needs to be prevented or not.
     */
    cancel: boolean;
    /**
     * It is used to specify the current event object.
     */
    event: Event;
    /**
     * It is used to denote the current target element where the Tooltip is to be displayed.
     */
    target: HTMLElement;
    /**
     * It is used to denote the Tooltip element
     */
    element: HTMLElement;
    /**
     * It is used to denote the Collided Tooltip position
     */
    collidedPosition?: string;
    /**
     * If the event is triggered by interaction, it returns true. Otherwise, it returns false.
     */
    isInteracted?: boolean;
}
/**
 * Animation options that are common for both open and close actions of the Tooltip.
 */
export interface TooltipAnimationSettings {
    /**
     * It is used to apply the Animation effect on the Tooltip, during open and close actions.
     */
    effect?: Effect;
    /**
     * It is used to denote the duration of the animation that is completed per animation cycle.
     */
    duration?: number;
    /**
     * It is used to denote the delay value in milliseconds and indicating the waiting time before animation begins.
     */
    delay?: number;
}
export declare class Animation extends ChildProperty<Animation> {
    /**
     * Animation settings to be applied on the Tooltip, while it is being shown over the target.
     */
    open: TooltipAnimationSettings;
    /**
     * Animation settings to be applied on the Tooltip, when it is closed.
     */
    close: TooltipAnimationSettings;
}
/**
 * Represents the Tooltip component that displays a piece of information about the target element on mouse hover.
 * ```html
 * <div id="tooltip">Show Tooltip</div>
 * ```
 * ```typescript
 * <script>
 *   var tooltipObj = new Tooltip({ content: 'Tooltip text' });
 *   tooltipObj.appendTo("#tooltip");
 * </script>
 * ```
 */
export declare class Tooltip extends Component<HTMLElement> implements INotifyPropertyChanged {
    private popupObj;
    private tooltipEle;
    private ctrlId;
    private tipClass;
    private tooltipPositionX;
    private tooltipPositionY;
    private tooltipEventArgs;
    private isHidden;
    private isTooltipOpen;
    private showTimer;
    private hideTimer;
    private tipWidth;
    private touchModule;
    private tipHeight;
    private autoCloseTimer;
    private isBlazorTemplate;
    private isBlazorTooltip;
    private contentTargetValue;
    private contentEvent;
    private contentAnimation;
    /**
     * It is used to set the width of Tooltip component which accepts both string and number values.
     * When set to auto, the Tooltip width gets auto adjusted to display its content within the viewable screen.
     *
     * @default 'auto'
     */
    width: string | number;
    /**
     * It is used to set the height of Tooltip component which accepts both string and number values.
     * When Tooltip content gets overflow due to height value then the scroll mode will be enabled.
     * Refer the documentation [here](https://ej2.syncfusion.com/documentation/tooltip/setting-dimension/)
     *  to know more about this property with demo.
     *
     * @default 'auto'
     */
    height: string | number;
    /**
     * It is used to display the content of Tooltip which can be both string and HTML Elements.
     * Refer the documentation [here](https://ej2.syncfusion.com/documentation/tooltip/content/)
     *  to know more about this property with demo.
     *
     * {% codeBlock src="tooltip/content-api/index.ts" %}{% endcodeBlock %}
     *
     * @blazorType object
     */
    content: string | HTMLElement;
    /**
     * It is used to denote the target selector where the Tooltip need to be displayed.
     * The target element is considered as parent container.
     *
     * {% codeBlock src="tooltip/target-api/index.ts" %}{% endcodeBlock %}
     */
    target: string;
    /**
     * It is used to set the position of Tooltip element, with respect to Target element.
     *
     * {% codeBlock src="tooltip/position-api/index.ts" %}{% endcodeBlock %}
     *
     * @default 'TopCenter'
     */
    position: Position;
    /**
     * It sets the space between the target and Tooltip element in X axis.
     *
     * {% codeBlock src="tooltip/offsetX-api/index.ts" %}{% endcodeBlock %}
     * {% codeBlock src="tooltip/offsetx/index.md" %}{% endcodeBlock %}
     *
     * @default 0
     */
    offsetX: number;
    /**
     * It sets the space between the target and Tooltip element in Y axis.
     *
     * {% codeBlock src="tooltip/offsetX-api/index.ts" %}{% endcodeBlock %}
     * {% codeBlock src="tooltip/offsety/index.md" %}{% endcodeBlock %}
     *
     * @default 0
     */
    offsetY: number;
    /**
     * It is used to show or hide the tip pointer of Tooltip.
     *
     * {% codeBlock src="tooltip/offsetX-api/index.ts" %}{% endcodeBlock %}
     * {% codeBlock src="tooltip/showtippointer/index.md" %}{% endcodeBlock %}
     *
     * @default true
     */
    showTipPointer: boolean;
    /**
     * It enables or disables the parsing of HTML string content into HTML DOM elements for Tooltip.
     * If the value of the property is set to false, the tooltip content will be displayed as HTML string instead of HTML DOM elements.
     *
     * @default true
     */
    enableHtmlParse: boolean;
    /**
     * It is used to set the collision target element as page viewport (window) or Tooltip element, when using the target.
     * If this property is enabled, tooltip will perform the collision calculation between the target elements
     * and viewport(window) instead of Tooltip element.
     *
     * @default false
     */
    windowCollision: boolean;
    /**
     * It is used to set the position of tip pointer on tooltip.
     * When it sets to auto, the tip pointer auto adjusts within the space of target's length
     *  and does not point outside.
     * Refer the documentation
     *  [here](https://ej2.syncfusion.com/documentation/tooltip/position.html?lang=typescript#tip-pointer-positioning)
     *  to know more about this property with demo.
     * {% codeBlock src="tooltip/tippointerposition/index.md" %}{% endcodeBlock %}
     *
     * @default 'Auto'
     */
    tipPointerPosition: TipPointerPosition;
    /**
     * It is used to determine the device mode to display the Tooltip content.
     * If it is in desktop, it will show the Tooltip content when hovering on the target element.
     * If it is in touch device, it will show the Tooltip content when tap and holding on the target element.
     * {% codeBlock src="tooltip/openson/index.md" %}{% endcodeBlock %}
     * {% codeBlock src="tooltip/opensOn-api/index.ts" %}{% endcodeBlock %}
     *
     * @default 'Auto'
     */
    opensOn: string;
    /**
     * It allows the Tooltip to follow the mouse pointer movement over the specified target element.
     * Refer the documentation [here](https://ej2.syncfusion.com/documentation/tooltip/position/#mouse-trailing)
     *  to know more about this property with demo.
     * {% codeBlock src="tooltip/mousetrail/index.md" %}{% endcodeBlock %}
     * {% codeBlock src="tooltip/offsetX-api/index.ts" %}{% endcodeBlock %}
     *
     * @default false
     */
    mouseTrail: boolean;
    /**
     * It is used to display the Tooltip in an open state until closed by manually.
     * Refer the documentation [here](https://ej2.syncfusion.com/documentation/tooltip/open-mode/#sticky-mode)
     *  to know more about this property with demo.
     * {% codeBlock src="tooltip/issticky/index.md" %}{% endcodeBlock %}
     *
     * @default false
     */
    isSticky: boolean;
    /**
     * We can set the same or different animation option to Tooltip while it is in open or close state.
     * Refer the documentation [here](https://ej2.syncfusion.com/documentation/tooltip/animation/)
     *  to know more about this property with demo.
     * {% codeBlock src="tooltip/animation/index.md" %}{% endcodeBlock %}
     * {% codeBlock src="tooltip/animation-api/index.ts" %}{% endcodeBlock %}
     *
     * @default { open: { effect: 'FadeIn', duration: 150, delay: 0 }, close: { effect: 'FadeOut', duration: 150, delay: 0 } }
     */
    animation: AnimationModel;
    /**
     * It is used to open the Tooltip after the specified delay in milliseconds.
     *
     * @default 0
     */
    openDelay: number;
    /**
     * It is used to close the Tooltip after a specified delay in milliseconds.
     *
     * @default 0
     */
    closeDelay: number;
    /**
     * It is used to customize the Tooltip which accepts custom CSS class names that
     *  defines specific user-defined styles and themes to be applied on the Tooltip element.
     *
     * @default null
     */
    cssClass: string;
    /**
     * Defines whether to allow the cross-scripting site or not.
     *
     * @default false
     */
    enableHtmlSanitizer: boolean;
    /**
     * We can trigger `beforeRender` event before the Tooltip and its contents are added to the DOM.
     * When one of its arguments `cancel` is set to true, the Tooltip can be prevented from rendering on the page.
     * This event is mainly used for the purpose of customizing the Tooltip before it shows up on the screen.
     * For example, to load the AJAX content or to set new animation effects on the Tooltip, this event can be opted.
     * Refer the documentation
     *  [here](https://ej2.syncfusion.com/documentation/tooltip/content/#dynamic-content-via-ajax)
     *  to know more about this property with demo.
     *
     * @event
     * @blazorProperty 'OnRender'
     */
    beforeRender: EmitType<TooltipEventArgs>;
    /**
     * We can trigger `beforeOpen` event before the Tooltip is displayed over the target element.
     * When one of its arguments `cancel` is set to true, the Tooltip display can be prevented.
     * This event is mainly used for the purpose of refreshing the Tooltip positions dynamically or to
     *  set customized styles in it and so on.
     * {% codeBlock src="tooltip/beforeOpen/index.md" %}{% endcodeBlock %}
     *
     * @event
     * @blazorProperty 'OnOpen'
     */
    beforeOpen: EmitType<TooltipEventArgs>;
    /**
     * We can trigger `afterOpen` event after the Tooltip Component gets opened.
     * {% codeBlock src="tooltip/afterOpen/index.md" %}{% endcodeBlock %}
     *
     * @event
     * @blazorProperty 'Opened'
     */
    afterOpen: EmitType<TooltipEventArgs>;
    /**
     * We can trigger `beforeClose` event before the Tooltip hides from the screen. If returned false, then the Tooltip is no more hidden.
     * {% codeBlock src="tooltip/beforeClose/index.md" %}{% endcodeBlock %}
     *
     * @event
     * @blazorProperty 'OnClose'
     */
    beforeClose: EmitType<TooltipEventArgs>;
    /**
     * We can trigger `afterClose` event when the Tooltip Component gets closed.
     * {% codeBlock src="tooltip/afterClose/index.md" %}{% endcodeBlock %}
     *
     * @event
     * @blazorProperty 'Closed'
     */
    afterClose: EmitType<TooltipEventArgs>;
    /**
     * We can trigger `beforeCollision` event for every collision fit calculation.
     * {% codeBlock src="tooltip/beforeCollision/index.md" %}{% endcodeBlock %}
     *
     * @event
     * @blazorProperty 'OnCollision'
     */
    beforeCollision: EmitType<TooltipEventArgs>;
    /**
     * We can trigger `created` event after the Tooltip component is created.
     *
     * @event
     * @blazorProperty 'Created'
     */
    created: EmitType<Object>;
    /**
     * We can trigger `destroyed` event when the Tooltip component is destroyed.
     *
     * @event
     * @blazorProperty 'Destroyed'
     */
    destroyed: EmitType<Object>;
    /**
     * Constructor for creating the Tooltip Component
     *
     * @param {TooltipModel} options - specifies the options for the constructor
     * @param {string| HTMLElement} element - specifies the element for the constructor
     *
     */
    constructor(options?: TooltipModel, element?: string | HTMLElement);
    private initialize;
    private isServerRender;
    private formatPosition;
    private renderArrow;
    private setTipClass;
    private renderPopup;
    private getTooltipPosition;
    private reposition;
    private openPopupHandler;
    private closePopupHandler;
    private calculateTooltipOffset;
    private updateTipPosition;
    private adjustArrow;
    private renderContent;
    private renderCloseIcon;
    private addDescribedBy;
    private removeDescribedBy;
    private tapHoldHandler;
    private touchEndHandler;
    private targetClick;
    private targetHover;
    private showTooltip;
    private beforeRenderCallback;
    private contentUpdated;
    private beforeRenderBlazor;
    private afterRenderBlazor;
    private beforeOpenCallback;
    private needTemplateReposition;
    private checkCollision;
    private collisionFlipFit;
    private checkCollideTarget;
    private hideTooltip;
    private tooltipHide;
    private blazorHide;
    private popupHide;
    private restoreElement;
    private clear;
    private tooltipHover;
    private tooltipMouseOut;
    private onMouseOut;
    private tooltipElementMouseOut;
    private onStickyClose;
    private onMouseMove;
    private keyDown;
    private touchEnd;
    private scrollHandler;
    /**
     * Core method that initializes the control rendering.
     *
     * @private
     * @returns {void}
     */
    render(): void;
    /**
     * Initializes the values of private members.
     *
     * @private
     * @returns {void}
     */
    protected preRender(): void;
    /**
     * Binding events to the Tooltip element.
     *
     * @hidden
     * @param {string} trigger - specify the trigger string to the function
     * @returns {void}
     *
     */
    private wireEvents;
    private getTriggerList;
    private wireFocusEvents;
    private wireMouseEvents;
    /**
     * Unbinding events from the element on widget destroy.
     *
     * @hidden
     *
     * @param {string} trigger - specify the trigger string to the function
     * @returns {void}
     *
     */
    private unwireEvents;
    private unwireFocusEvents;
    private unwireMouseEvents;
    private findTarget;
    /**
     * Core method to return the component name.
     *
     * @private
     *
     * @returns {string} - this method returns module name.
     */
    getModuleName(): string;
    /**
     * Returns the properties to be maintained in the persisted state.
     *
     * @private
     *
     * @returns {string} - this method returns persisted data.
     */
    protected getPersistData(): string;
    /**
     * Called internally, if any of the property value changed.
     *
     * @private
     *
     * @param {TooltipModel} newProp - this param gives new property values to the method
     * @param {TooltipModel} oldProp - this param gives old property values to the method
     * @returns {void}
     *
     */
    onPropertyChanged(newProp: TooltipModel, oldProp: TooltipModel): void;
    /**
     * It is used to show the Tooltip on the specified target with specific animation settings.
     *
     * @param {HTMLElement} element - Target element where the Tooltip is to be displayed. (It is an optional parameter)
     * @param {TooltipAnimationSettings} animation - Sets the specific animation, while showing the Tooltip on the screen. (It is an optional parameter)
     * @returns {void}
     */
    open(element?: HTMLElement, animation?: TooltipAnimationSettings): void;
    /**
     * It is used to hide the Tooltip with specific animation effect.
     *
     * @param {TooltipAnimationSettings} animation - Sets the specific animation when hiding Tooltip from the screen. (It is an optional parameter)
     * @returns {void}
     */
    close(animation?: TooltipAnimationSettings): void;
    /**
     * It is used to refresh the Tooltip content and its position.
     *
     * @param {HTMLElement} target - Target element where the Tooltip content or position needs to be refreshed.
     * @returns {void}
     */
    refresh(target?: HTMLElement): void;
    /**
     * It is used to destroy the Tooltip component.
     * @method destroy
     * @returns {void}
     * @memberof Tooltip
     */
    destroy(): void;
}
