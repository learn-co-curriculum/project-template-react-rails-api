import { Component, INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { EmitType } from '@syncfusion/ej2-base';
import { CheckBoxModel } from './check-box-model';
import { ChangeEventArgs } from './../common/common';
/**
 * Defines the label position of CheckBox.
 */
export declare type LabelPosition = 'After' | 'Before';
/**
 * The CheckBox is a graphical user interface element that allows you to select one or more options from the choices.
 * It contains checked, unchecked, and indeterminate states.
 * ```html
 * <input type="checkbox" id="checkbox"/>
 * <script>
 * var checkboxObj = new CheckBox({ label: "Default" });
 * checkboxObj.appendTo("#checkbox");
 * </script>
 * ```
 */
export declare class CheckBox extends Component<HTMLInputElement> implements INotifyPropertyChanged {
    private tagName;
    private isFocused;
    private isMouseClick;
    private isVue;
    private formElement;
    private initialCheckedValue;
    private wrapper;
    /**
     * Triggers when the CheckBox state has been changed by user interaction.
     *
     * @event change
     */
    change: EmitType<ChangeEventArgs>;
    /**
     * Triggers once the component rendering is completed.
     *
     * @event created
     */
    created: EmitType<Event>;
    /**
     * Specifies a value that indicates whether the CheckBox is `checked` or not.
     * When set to `true`, the CheckBox will be in `checked` state.
     *
     * @default false
     */
    checked: boolean;
    /**
     * Defines class/multiple classes separated by a space in the CheckBox element.
     * You can add custom styles to the CheckBox by using this property.
     *
     * @default ''
     */
    cssClass: string;
    /**
     * Specifies a value that indicates whether the CheckBox is `disabled` or not.
     * When set to `true`, the CheckBox will be in `disabled` state.
     *
     * @default false
     */
    disabled: boolean;
    /**
     * Specifies a value that indicates whether the CheckBox is in `indeterminate` state or not.
     * When set to `true`, the CheckBox will be in `indeterminate` state.
     *
     * @default false
     */
    indeterminate: boolean;
    /**
     * Defines the caption for the CheckBox, that describes the purpose of the CheckBox.
     *
     * @default ''
     */
    label: string;
    /**
     * Positions label `before`/`after` the CheckBox.
     * The possible values are:
     * * Before - The label is positioned to left of the CheckBox.
     * * After - The label is positioned to right of the CheckBox.
     *
     * @default 'After'
     */
    labelPosition: LabelPosition;
    /**
     * Defines `name` attribute for the CheckBox.
     * It is used to reference form data (CheckBox value) after a form is submitted.
     *
     * @default ''
     */
    name: string;
    /**
     * Defines `value` attribute for the CheckBox.
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
     * @param {CheckBoxModel} options - Specifies checkbox model
     * @param {string | HTMLInputElement} element - Specifies target element
     */
    constructor(options?: CheckBoxModel, element?: string | HTMLInputElement);
    private changeState;
    private clickHandler;
    /**
     * Destroys the widget.
     *
     * @returns {void}
     */
    destroy(): void;
    private focusHandler;
    private focusOutHandler;
    /**
     * Gets the module name.
     *
     * @private
     * @returns {string} - Module Name
     */
    protected getModuleName(): string;
    /**
     * Gets the properties to be maintained in the persistence state.
     *
     * @private
     * @returns {string} - Persist Data
     */
    getPersistData(): string;
    private getWrapper;
    private initialize;
    private initWrapper;
    private keyUpHandler;
    private labelMouseDownHandler;
    private labelMouseUpHandler;
    /**
     * Called internally if any of the property value changes.
     *
     * @private
     * @param {CheckBoxModel} newProp - Specifies new Properties
     * @param {CheckBoxModel} oldProp - Specifies old Properties
     *
     * @returns {void}
     */
    onPropertyChanged(newProp: CheckBoxModel, oldProp: CheckBoxModel): void;
    /**
     * Initialize Angular, React and Unique ID support.
     *
     * @private
     * @returns {void}
     */
    protected preRender(): void;
    /**
     * Initialize the control rendering.
     *
     * @private
     * @returns {void}
     */
    protected render(): void;
    private setDisabled;
    private setText;
    private changeHandler;
    private formResetHandler;
    protected unWireEvents(): void;
    protected wireEvents(): void;
    private updateVueArrayModel;
    protected updateHtmlAttributeToWrapper(): void;
    /**
     * Click the CheckBox element
     * its native method
     *
     * @public
     * @returns {void}
     */
    click(): void;
    /**
     * Sets the focus to CheckBox
     * its native method
     *
     * @public
     * @returns {void}
     */
    focusIn(): void;
}
