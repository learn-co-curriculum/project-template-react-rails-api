import { Base, EmitType } from './base';
import { AnimationModel } from './animation-model';
import { INotifyPropertyChanged } from './notify-property-change';
/**
 * Animation effect names
 */
export declare type Effect = 'FadeIn' | 'FadeOut' | 'FadeZoomIn' | 'FadeZoomOut' | 'FlipLeftDownIn' | 'FlipLeftDownOut' | 'FlipLeftUpIn' | 'FlipLeftUpOut' | 'FlipRightDownIn' | 'FlipRightDownOut' | 'FlipRightUpIn' | 'FlipRightUpOut' | 'FlipXDownIn' | 'FlipXDownOut' | 'FlipXUpIn' | 'FlipXUpOut' | 'FlipYLeftIn' | 'FlipYLeftOut' | 'FlipYRightIn' | 'FlipYRightOut' | 'SlideBottomIn' | 'SlideBottomOut' | 'SlideDown' | 'SlideLeft' | 'SlideLeftIn' | 'SlideLeftOut' | 'SlideRight' | 'SlideRightIn' | 'SlideRightOut' | 'SlideTopIn' | 'SlideTopOut' | 'SlideUp' | 'ZoomIn' | 'ZoomOut';
/**
 * The Animation framework provide options to animate the html DOM elements
 * ```typescript
 *   let animeObject = new Animation({
 *      name: 'SlideLeftIn',
 *      duration: 1000
 *   });
 *   animeObject.animate('#anime1');
 *   animeObject.animate('#anime2', { duration: 500 });
 * ```
 */
export declare class Animation extends Base<HTMLElement> implements INotifyPropertyChanged {
    /**
     * Specify the type of animation
     * @default : 'FadeIn';
     */
    name: Effect;
    /**
     * Specify the duration to animate
     * @default : 400;
     */
    duration: number;
    /**
     * Specify the animation timing function
     * @default : 'ease';
     */
    timingFunction: string;
    /**
     * Specify the delay to start animation
     * @default : 0;
     */
    delay: number;
    /**
     * Triggers when animation is in-progress
     * @event
     */
    progress: EmitType<AnimationOptions>;
    /**
     * Triggers when the animation is started
     * @event
     */
    begin: EmitType<AnimationOptions>;
    /**
     * Triggers when animation is completed
     * @event
     */
    end: EmitType<AnimationOptions>;
    /**
     * Triggers when animation is failed due to any scripts
     * @event
     */
    fail: EmitType<AnimationOptions>;
    /**
     * @private
     */
    easing: {
        [key: string]: string;
    };
    constructor(options: AnimationModel);
    /**
     * Applies animation to the current element.
     * @param {string | HTMLElement} element - Element which needs to be animated.
     * @param {AnimationModel} options - Overriding default animation settings.
     * @return {void}
     */
    animate(element: string | HTMLElement, options?: AnimationModel): void;
    /**
     * Stop the animation effect on animated element.
     * @param {HTMLElement} element - Element which needs to be stop the animation.
     * @param {AnimationOptions} model - Handling the animation model at stop function.
     * @return {void}
     */
    static stop(element: HTMLElement, model?: AnimationOptions): void;
    /**
     * Set delay to animation element
     * @param {AnimationModel} model
     * @returns {void}
     */
    private static delayAnimation;
    /**
     * Triggers animation
     * @param {AnimationModel} model
     * @returns {void}
     */
    private static applyAnimation;
    /**
     * Returns Animation Model
     * @param {AnimationModel} options
     * @returns {AnimationModel}
     */
    private getModel;
    /**
     * @private
     */
    onPropertyChanged(newProp: AnimationModel, oldProp: AnimationModel): void;
    /**
     * Returns module name as animation
     * @private
     */
    getModuleName(): string;
    /**
     * @private
     */
    destroy(): void;
}
/**
 * Animation event argument for progress event handler
 */
export interface AnimationOptions extends AnimationModel {
    /**
     * Get current time-stamp in progress EventHandler
     */
    timeStamp?: number;
    /**
     * Get current animation element in progress EventHandler
     */
    element?: HTMLElement;
}
/**
 * Ripple provides material theme's wave effect when an element is clicked
 * ```html
 * <div id='ripple'></div>
 * <script>
 *   rippleEffect(document.getElementById('ripple'));
 * </script>
 * ```
 * @private
 * @param HTMLElement element - Target element
 * @param RippleOptions rippleOptions - Ripple options .
 */
export declare function rippleEffect(element: HTMLElement, rippleOptions?: RippleOptions, done?: Function): () => void;
/**
 * Ripple method arguments to handle ripple effect
 * @private
 */
export interface RippleOptions {
    /**
     * Get selector child elements for ripple effect
     */
    selector?: string;
    /**
     * Get ignore elements to prevent ripple effect
     */
    ignore?: string;
    /**
     * Override the enableRipple method
     */
    rippleFlag?: boolean;
    /**
     * Set ripple effect from center position
     */
    isCenterRipple?: boolean;
    /**
     * Set ripple duration
     */
    duration?: number;
}
export declare let isRippleEnabled: boolean;
/**
 * Animation Module provides support to enable ripple effect functionality to Essential JS 2 components.
 * @param {boolean} isRipple Specifies the boolean value to enable or disable ripple effect.
 * @returns {boolean}
 */
export declare function enableRipple(isRipple: boolean): boolean;
