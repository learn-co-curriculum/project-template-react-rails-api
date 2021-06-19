import { Button, IconPosition } from '@syncfusion/ej2-buttons';
import { INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { EmitType, BaseEventArgs } from '@syncfusion/ej2-base';
import { ChildProperty } from '@syncfusion/ej2-base';
import { ProgressButtonModel, SpinSettingsModel, AnimationSettingsModel } from './progress-button-model';
/**
 * Defines the spin settings.
 */
export declare class SpinSettings extends ChildProperty<SpinSettings> {
    /**
     * Specifies the template content to be displayed in a spinner.
     *
     * @default null
     */
    template: string;
    /**
     * Sets the width of a spinner.
     *
     * @default '16'
     */
    width: string | number;
    /**
     * Specifies the position of a spinner in the progress button. The possible values are:
     * * Left: The spinner will be positioned to the left of the text content.
     * * Right: The spinner will be positioned to the right of the text content.
     * * Top: The spinner will be positioned at the top of the text content.
     * * Bottom: The spinner will be positioned at the bottom of the text content.
     * * Center: The spinner will be positioned at the center of the progress button.
     *
     * @default 'Left'
     * @aspType Syncfusion.EJ2.SplitButtons.SpinPosition
     * @blazorType Syncfusion.Blazor.SplitButtons.SpinPosition
     * @isEnumeration true
     */
    position: SpinPosition;
}
/**
 * Defines the animation settings.
 */
export declare class AnimationSettings extends ChildProperty<AnimationSettings> {
    /**
     * Specifies the duration taken to animate.
     *
     * @default 400
     */
    duration: number;
    /**
     * Specifies the effect of animation.
     *
     * @default 'None'
     * @aspType Syncfusion.EJ2.SplitButtons.AnimationEffect
     * @blazorType Syncfusion.Blazor.SplitButtons.AnimationEffect
     * @isEnumeration true
     */
    effect: AnimationEffect;
    /**
     * Specifies the animation timing function.
     *
     * @default 'ease'
     */
    easing: string;
}
/**
 * The ProgressButton visualizes the progression of an operation to indicate the user
 * that a process is happening in the background with visual representation.
 * ```html
 * <button id="element"></button>
 * ```
 * ```typescript
 * <script>
 * var progressButtonObj = new ProgressButton({ content: 'Progress Button' });
 * progressButtonObj.appendTo("#element");
 * </script>
 * ```
 */
export declare class ProgressButton extends Button implements INotifyPropertyChanged {
    private progressTime;
    private percent;
    private isPaused;
    private timerId;
    private step;
    private interval;
    private eIsVertical;
    /**
     * Enables or disables the background filler UI in the progress button.
     *
     * @default false
     */
    enableProgress: boolean;
    /**
     * Specifies the duration of progression in the progress button.
     *
     * @default 2000
     */
    duration: number;
    /**
     * Positions an icon in the progress button. The possible values are:
     * * Left: The icon will be positioned to the left of the text content.
     * * Right: The icon will be positioned to the right of the text content.
     * * Top: The icon will be positioned at the top of the text content.
     * * Bottom: The icon will be positioned at the bottom of the text content.
     *
     * @default "Left"
     */
    iconPosition: IconPosition;
    /**
     * Defines class/multiple classes separated by a space for the progress button that is used to include an icon.
     * Progress button can also include font icon and sprite image.
     *
     * @default ""
     */
    iconCss: string;
    /**
     * Enables or disables the progress button.
     *
     * @default false.
     */
    disabled: boolean;
    /**
     * Allows the appearance of the progress button to be enhanced and visually appealing when set to `true`.
     *
     * @default false
     */
    isPrimary: boolean;
    /**
     * Specifies the root CSS class of the progress button that allows customization of component’s appearance.
     * The progress button types, styles, and size can be achieved by using this property.
     *
     * @default ""
     */
    cssClass: string;
    /**
     * Defines the text `content` of the progress button element.
     *
     * @default ""
     */
    content: string;
    /**
     * Makes the progress button toggle, when set to `true`. When you click it, the state changes from normal to active.
     *
     * @default false
     */
    isToggle: boolean;
    /**
     * Defines whether to allow the cross-scripting site or not.
     *
     * @default false
     */
    enableHtmlSanitizer: boolean;
    /**
     * Specifies a spinner and its related properties.
     */
    spinSettings: SpinSettingsModel;
    /**
     * Specifies the animation settings.
     */
    animationSettings: AnimationSettingsModel;
    /**
     * Triggers once the component rendering is completed.
     *
     * @event created
     * @blazorProperty 'Created'
     */
    created: EmitType<Event>;
    /**
     * Triggers when the progress starts.
     *
     * @event begin
     * @blazorProperty 'OnBegin'
     */
    begin: EmitType<ProgressEventArgs>;
    /**
     * Triggers in specified intervals.
     *
     * @event progress
     * @blazorProperty 'Progressing'
     */
    progress: EmitType<ProgressEventArgs>;
    /**
     * Triggers when the progress is completed.
     *
     * @event end
     * @blazorProperty 'OnEnd'
     */
    end: EmitType<ProgressEventArgs>;
    /**
     * Triggers when the progress is incomplete.
     *
     * @event fail
     * @blazorProperty 'OnFailure'
     */
    fail: EmitType<Event>;
    /**
     * Constructor for creating the widget.
     *
     * @param  {ProgressButtonModel} options - Specifies progress button model
     * @param  {string|HTMLButtonElement} element - Specifies element
     */
    constructor(options?: ProgressButtonModel, element?: string | HTMLButtonElement);
    protected preRender(): void;
    /**
     * Initialize the Component rendering
     *
     * @returns {void}
     * @private
     */
    render(): void;
    /**
     * Starts the button progress at the specified percent.
     *
     * @param {number} percent - Starts the button progress at this percent.
     * @returns {void}
     */
    start(percent?: number): void;
    /**
     * Stops the button progress.
     *
     * @returns {void}
     */
    stop(): void;
    /**
     * Complete the button progress.
     *
     * @returns {void}
     */
    progressComplete(): void;
    /**
     * Get component name.
     *
     * @returns {string} - Module Name
     * @private
     */
    getModuleName(): string;
    /**
     * Destroys the widget.
     *
     * @returns {void}
     */
    destroy(): void;
    private init;
    private createSpinner;
    private getSpinner;
    private getProgress;
    private setSpinPosition;
    private createProgress;
    private setContent;
    private setContentIcon;
    private clickHandler;
    private startProgress;
    private startAnimate;
    private successCallback;
    private startContAnimate;
    private finishProgress;
    private setSpinnerSize;
    private hideSpin;
    private setIconSpan;
    private setAria;
    protected wireEvents(): void;
    protected unWireEvents(): void;
    /**
     * Called internally if any of the property value changed.
     *
     * @param  {ProgressButtonModel} newProp - Specifies new properties
     * @param  {ProgressButtonModel} oldProp - Specifies old properties
     * @returns {void}
     * @private
     */
    onPropertyChanged(newProp: ProgressButtonModel, oldProp: ProgressButtonModel): void;
    /**
     * Sets the focus to ProgressButton
     * its native method
     *
     * @public
     * @returns {void}
     */
    focusIn(): void;
}
/**
 * Defines the spin position of progress button.
 */
export declare type SpinPosition = 'Left' | 'Right' | 'Top' | 'Bottom' | 'Center';
/**
 * Defines the animation effect of progress button.
 */
export declare type AnimationEffect = 'None' | 'SlideLeft' | 'SlideRight' | 'SlideUp' | 'SlideDown' | 'ZoomIn' | 'ZoomOut';
/**
 * Interface for progress event arguments.
 */
export interface ProgressEventArgs extends BaseEventArgs {
    /**
     * Indicates the current state of progress in percentage.
     */
    percent: number;
    /**
     * Indicates the current duration of the progress.
     */
    currentDuration: number;
    /**
     * Specifies the interval.
     *
     * @default 1
     */
    step: number;
}
