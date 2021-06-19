import { Base, EmitType } from '@syncfusion/ej2-base';
import { INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { FormValidatorModel } from './form-validator-model';
/**
 * global declarations
 */
export declare const regex: any;
/**
 * ErrorOption values
 *
 * @private
 */
export declare enum ErrorOption {
    /**
     * Defines the error message.
     */
    Message = 0,
    /**
     * Defines the error element type.
     */
    Label = 1
}
/**
 * FormValidator class enables you to validate the form fields based on your defined rules
 * ```html
 * <form id='formId'>
 *  <input type='text' name='Name' />
 *  <input type='text' name='Age' />
 * </form>
 * <script>
 *   let formObject = new FormValidator('#formId', {
 *      rules: { Name: { required: true }, Age: { range: [18, 30] } };
 *   });
 *   formObject.validate();
 * </script>
 * ```
 */
export declare class FormValidator extends Base<HTMLFormElement> implements INotifyPropertyChanged {
    private validated;
    private errorRules;
    private allowSubmit;
    private required;
    private infoElement;
    private inputElement;
    private selectQuery;
    private inputElements;
    private l10n;
    private internationalization;
    private localyMessage;
    /**
     * default locale variable
     */
    locale: string;
    /**
     * Ignores input fields based on the class name
     *
     * @default 'e-hidden'
     */
    ignore: string;
    /**
     * Maps the input fields with validation rules
     *
     * @default {}
     */
    rules: {
        [name: string]: {
            [rule: string]: Object;
        };
    };
    /**
     * Sets the defined css class to error fields
     *
     * @default 'e-error'
     */
    errorClass: string;
    /**
     * Sets the defined css class to valid fields
     *
     * @default 'e-valid'
     */
    validClass: string;
    /**
     * Specify HTML element for error
     *
     * @default 'label'
     */
    errorElement: string;
    /**
     * Specify HTML element for error container
     *
     * @default 'div'
     */
    errorContainer: string;
    /**
     * Option to display the error
     *
     * @default ErrorOption.Label

     */
    errorOption: ErrorOption;
    /**
     * Triggers when a field's focused  out
     *
     * @event focusout
     */
    focusout: EmitType<Event>;
    /**
     * Trigger when keyup is triggered in any fields
     *
     * @event keyup
     */
    keyup: EmitType<KeyboardEvent>;
    /**
     * Triggers when a check box field is clicked
     *
     * @event click
     */
    click: EmitType<Event>;
    /**
     * Trigger when a select/drop-down field is changed
     *
     * @event change
     */
    change: EmitType<Event>;
    /**
     * Triggers before form is being submitted
     *
     * @event submit
     */
    submit: EmitType<Event>;
    /**
     * Triggers before validation starts
     *
     * @event validationBegin
     */
    validationBegin: EmitType<Object | ValidArgs>;
    /**
     * Triggers after validation is completed
     *
     * @event validationComplete
     */
    validationComplete: EmitType<Object | FormEventArgs>;
    /**
     * Assigns the custom function to place the error message in the page.
     *
     * @event customPlacement
     */
    customPlacement: EmitType<HTMLElement | any>;
    /**
     * Add validation rules to the corresponding input element based on `name` attribute.
     *
     * @param {string} name `name` of form field.
     * @param {Object} rules Validation rules for the corresponding element.
     * @returns {void}
     */
    addRules(name: string, rules: Object): void;
    /**
     * Remove validation to the corresponding field based on name attribute.
     * When no parameter is passed, remove all the validations in the form.
     *
     * @param {string} name Input name attribute value.
     * @param {string[]} rules List of validation rules need to be remove from the corresponding element.
     * @returns {void}
     */
    removeRules(name?: string, rules?: string[]): void;
    /**
     * Validate the current form values using defined rules.
     * Returns `true` when the form is valid otherwise `false`
     *
     * @param {string} selected - Optional parameter to validate specified element.
     * @returns {boolean}
     */
    validate(selected?: string): boolean;
    /**
     * Reset the value of all the fields in form.
     *
     * @returns {void}
     */
    reset(): void;
    /**
     * Get input element by name.
     *
     * @param {string} name - Input element name attribute value.
     * @returns {HTMLInputElement}
     */
    getInputElement(name: string): HTMLInputElement;
    /**
     * Destroy the form validator object and error elements.
     *
     * @returns {void}
     */
    destroy(): void;
    /**
     * Specifies the default messages for validation rules.
     *
     * @default { List of validation message }
     */
    defaultMessages: {
        [rule: string]: string;
    };
    /**
     * @param {FormValidatorModel} newProp - Returns the dynamic property value of the component.
     * @param {FormValidatorModel} oldProp - Returns the previous property value of the component.
     * @returns {void}
     * @private
     */
    onPropertyChanged(newProp: FormValidatorModel, oldProp?: FormValidatorModel): void;
    /**
     * @private
     * @returns {void}
     */
    localeFunc(): void;
    /**
     * @private
     * @returns {string} - Returns the component name.
     */
    getModuleName(): string;
    /**
     * @param {any} args - Specifies the culture name.
     * @private
     */
    afterLocalization(args: any): void;
    /**
     * Allows you to refresh the form validator base events to the elements inside the form.
     *
     * @returns {void}
     */
    refresh(): void;
    /**
     * Initializes the FormValidator.
     *
     * @param {string | HTMLFormElement} element - Specifies the element to render as component.
     * @param {FormValidatorModel} options - Specifies the FormValidator model.
     * @private
     */
    constructor(element: string | HTMLFormElement, options?: FormValidatorModel);
    private clearForm;
    private createHTML5Rules;
    private annotationRule;
    private defRule;
    private wireEvents;
    private unwireEvents;
    private focusOutHandler;
    private keyUpHandler;
    private clickHandler;
    private changeHandler;
    private submitHandler;
    private resetHandler;
    private validateRules;
    private optionalValidationStatus;
    private isValid;
    private getErrorMessage;
    private createErrorElement;
    private getErrorElement;
    private removeErrorRules;
    private showMessage;
    private hideMessage;
    private checkRequired;
    private static checkValidator;
    private static isCheckable;
}
export interface ValidArgs {
    /**
     * Returns the value in input element.
     */
    value: string;
    /**
     * Returns the rule mapped for the input.
     */
    param?: Object;
    /**
     * Returns the input element.
     */
    element?: HTMLElement;
    /**
     * Returns the current form element.
     */
    formElement?: HTMLFormElement;
}
export interface FormEventArgs {
    /**
     * Returns the name of the input element.
     */
    inputName: string;
    /**
     * Returns the error message.
     */
    message: string;
    /**
     * Returns the input element.
     */
    element: HTMLInputElement;
    /**
     * Returns the status input element.
     */
    status?: string;
    /**
     * Returns the error element for corresponding input.
     */
    errorElement?: HTMLElement;
}
