import { Component, INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { BaseEventArgs, EmitType } from '@syncfusion/ej2-base';
import { RadioButtonModel } from './radio-button-model';
/**
 * Defines the label position of Radio Button.
 */
export declare type RadioLabelPosition = 'After' | 'Before';
/**
 * The RadioButton is a graphical user interface element that allows you to select one option from the choices.
 * It contains checked and unchecked states.
 * ```html
 * <input type="radio" id="radio"/>
 * <script>
 * var radioObj = new RadioButton({ label: "Default" });
 * radioObj.appendTo("#radio");
 * </script>
 * ```
 */
export declare class RadioButton extends Component<HTMLInputElement> implements INotifyPropertyChanged {
    private tagName;
    private isFocused;
    private formElement;
    private initialCheckedValue;
    private angularValue;
    private isVue;
    /**
     * Event trigger when the RadioButton state has been changed by user interaction.
     *
     * @event change
     */
    change: EmitType<ChangeArgs>;
    /**
     * Triggers once the component rendering is completed.
     *
     * @event created
     */
    created: EmitType<Event>;
    /**
     * Specifies a value that indicates whether the RadioButton is `checked` or not.
     * When set to `true`, the RadioButton will be in `checked` state.
     *
     * @default false
     */
    checked: boolean;
    /**
     * Defines class/multiple classes separated by a space in the RadioButton element.
     * You can add custom styles to the RadioButton by using this property.
     *
     * @default ''
     */
    cssClass: string;
    /**
     * Specifies a value that indicates whether the RadioButton is `disabled` or not.
     * When set to `true`, the RadioButton will be in `disabled` state.
     *
     * @default false
     */
    disabled: boolean;
    /**
     * Defines the caption for the RadioButton, that describes the purpose of the RadioButton.
     *
     * @default ''
     */
    label: string;
    /**
     * Positions label `before`/`after` the RadioButton.
     * The possible values are:
     * * Before: The label is positioned to left of the RadioButton.
     * * After: The label is positioned to right of the RadioButton.
     *
     * @default 'After'
     */
    labelPosition: RadioLabelPosition;
    /**
     * Defines `name` attribute for the RadioButton.
     * It is used to reference form data (RadioButton value) after a form is submitted.
     *
     * @default ''
     */
    name: string;
    /**
     * Defines `value` attribute for the RadioButton.
     * It is a form data passed to the server when submitting the form.
     *
     * @default ''
     */
    value: string;
    /**
     * Defines whether to allow the cross-scripting site or not.
     *
     * @default false
     */
    enableHtmlSanitizer: boolean;
    /**
     * You can add the additional html attributes such as disabled, value etc., to the element.
     * If you configured both property and equivalent html attribute then the component considers the property value.
     *
     * @default {}
     */
    htmlAttributes: {
        [key: string]: string;
    };
    /**
     * Constructor for creating the widget
     *
     * @private
     * @param {RadioButtonModel} options - Specifies Radio button model
     * @param {string | HTMLInputElement} element - Specifies target element
     */
    constructor(options?: RadioButtonModel, element?: string | HTMLInputElement);
    private changeHandler;
    private updateChange;
    /**
     * Destroys the widget.
     *
     * @returns {void}
     */
    destroy(): void;
    private focusHandler;
    private focusOutHandler;
    protected getModuleName(): string;
    /**
     * To get the value of selected radio button in a group.
     *
     * @method getSelectedValue
     * @returns {string} - Selected Value
     */
    getSelectedValue(): string;
    private getRadioGroup;
    /**
     * Gets the properties to be maintained in the persistence state.
     *
     * @private
     * @returns {string} - Persist Data
     */
    getPersistData(): string;
    private getLabel;
    private initialize;
    private initWrapper;
    private keyUpHandler;
    private labelRippleHandler;
    private formResetHandler;
    /**
     * Called internally if any of the property value changes.
     *
     * @private
     * @param {RadioButtonModel} newProp - Specifies New Properties
     * @param {RadioButtonModel} oldProp - Specifies Old Properties
     * @returns {void}
     */
    onPropertyChanged(newProp: RadioButtonModel, oldProp: RadioButtonModel): void;
    /**
     * Initialize checked Property, Angular and React and Unique ID support.
     *
     * @private
     * @returns {void}
     */
    protected preRender(): void;
    /**
     * Initialize the control rendering
     *
     * @private
     * @returns {void}
     */
    protected render(): void;
    private setDisabled;
    private setText;
    private updateHtmlAttribute;
    protected unWireEvents(): void;
    protected wireEvents(): void;
    /**
     * Click the RadioButton element
     * its native method
     *
     * @public
     * @returns {void}
     */
    click(): void;
    /**
     * Sets the focus to RadioButton
     * its native method
     *
     * @public
     * @returns {void}
     */
    focusIn(): void;
}
/**
 * Interface for Radio Button change event arguments.
 */
export interface ChangeArgs extends BaseEventArgs {
    /** Returns the value of the RadioButton. */
    value?: string;
    /** Returns the event parameters of the RadioButton. */
    event?: Event;
}
