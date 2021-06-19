import { Component, EmitType } from '@syncfusion/ej2-base';
import { INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { FloatLabelType } from '../input/input';
import { TextBoxModel } from './textbox-model';
export interface FocusInEventArgs {
    /** Returns the TextBox container element */
    container?: HTMLElement;
    /** Returns the event parameters from TextBox. */
    event?: Event;
    /** Returns the entered value of the TextBox. */
    value?: string;
}
export interface FocusOutEventArgs {
    /** Returns the TextBox container element */
    container?: HTMLElement;
    /** Returns the event parameters from TextBox. */
    event?: Event;
    /** Returns the entered value of the TextBox. */
    value?: string;
}
export interface ChangedEventArgs extends FocusInEventArgs {
    /** Returns the previously entered value of the TextBox. */
    previousValue?: string;
    /** DEPRECATED-Returns the original event. */
    isInteraction?: boolean;
    /** Returns the original event. */
    isInteracted?: boolean;
}
export interface InputEventArgs extends FocusInEventArgs {
    /** Returns the previously updated value of the TextBox. */
    previousValue?: string;
}
/**
 * Represents the TextBox component that allows the user to enter the values based on it's type.
 * ```html
 * <input name='images' id='textbox'/>
 * ```
 * ```typescript
 * <script>
 *   var textboxObj = new TextBox();
 *   textboxObj.appendTo('#textbox');
 * </script>
 * ```
 */
export declare class TextBox extends Component<HTMLInputElement | HTMLTextAreaElement> implements INotifyPropertyChanged {
    private textboxWrapper;
    private l10n;
    private previousValue;
    private cloneElement;
    private globalize;
    private preventChange;
    private isAngular;
    private isHiddenInput;
    private textarea;
    private respectiveElement;
    private isForm;
    private formElement;
    private initialValue;
    private textboxOptions;
    private inputPreviousValue;
    private isVue;
    /**
     * Specifies the behavior of the TextBox such as text, password, email, etc.
     *
     * @default 'text'
     */
    type: string;
    /**
     * Specifies the boolean value whether the TextBox allows user to change the text.
     *
     * @default false
     */
    readonly: boolean;
    /**
     * Sets the content of the TextBox.
     *
     * @default null
     */
    value: string;
    /**
     * Specifies the floating label behavior of the TextBox that the placeholder text floats above the TextBox based on the below values.
     * Possible values are:
     * * `Never` - The placeholder text should not be float ever.
     * * `Always` - The placeholder text floats above the TextBox always.
     * * `Auto` - The placeholder text floats above the TextBox while focusing or enter a value in Textbox.
     *
     * @default Never
     */
    floatLabelType: FloatLabelType;
    /**
     * Specifies the CSS class value that is appended to wrapper of Textbox.
     *
     * @default ''
     */
    cssClass: string;
    /**
     * Specifies the text that is shown as a hint/placeholder until the user focus or enter a value in Textbox.
     * The property is depending on the floatLabelType property.
     *
     * @default null
     */
    placeholder: string;
    /**
     * Specifies whether the browser is allow to automatically enter or select a value for the textbox.
     * By default, autocomplete is enabled for textbox.
     * Possible values are:
     * `on` - Specifies that autocomplete is enabled.
     * `off` - Specifies that autocomplete is disabled.
     *
     * @default 'on'
     */
    autocomplete: string;
    /**
     * You can add the additional html attributes such as disabled, value etc., to the element.
     * If you configured both property and equivalent html attribute then the component considers the property value.
     * {% codeBlock src='textbox/htmlAttributes/index.md' %}{% endcodeBlock %}
     *
     * @default {}
     */
    htmlAttributes: {
        [key: string]: string;
    };
    /**
     * Specifies a boolean value that enable or disable the multiline on the TextBox.
     * The TextBox changes from single line to multiline when enable this multiline mode.
     *
     * @default false
     */
    multiline: boolean;
    /**
     * Specifies a Boolean value that indicates whether the TextBox allow user to interact with it.
     *
     * @default true
     */
    enabled: boolean;
    /**
     * Specifies a Boolean value that indicates whether the clear button is displayed in Textbox.
     *
     * @default false
     */
    showClearButton: boolean;
    /**
     * Enable or disable persisting TextBox state between page reloads. If enabled, the `value` state will be persisted.
     *
     * @default false
     */
    enablePersistence: boolean;
    /**
     * Specifies the width of the Textbox component.
     *
     * @default null
     */
    width: number | string;
    /**
     * Triggers when the TextBox component is created.
     *
     * @event created
     * @blazorProperty 'Created'
     */
    created: EmitType<Object>;
    /**
     * Triggers when the TextBox component is destroyed.
     *
     * @event destroyed
     * @blazorProperty 'Destroyed'
     */
    destroyed: EmitType<Object>;
    /**
     * Triggers when the content of TextBox has changed and gets focus-out.
     *
     * @event change
     * @blazorProperty 'ValueChange'
     */
    change: EmitType<ChangedEventArgs>;
    /**
     * Triggers when the TextBox has focus-out.
     *
     * @event blur
     */
    blur: EmitType<FocusOutEventArgs>;
    /**
     * Triggers when the TextBox gets focus.
     *
     * @event focus
     */
    focus: EmitType<FocusInEventArgs>;
    /**
     * Triggers each time when the value of TextBox has changed.
     *
     * @event input
     */
    input: EmitType<InputEventArgs>;
    /**
     *
     * @param {TextBoxModel} options - Specifies the TextBox model.
     * @param {string | HTMLInputElement | HTMLTextAreaElement} element - Specifies the element to render as component.
     * @private
     */
    constructor(options?: TextBoxModel, element?: string | HTMLInputElement | HTMLTextAreaElement);
    /**
     * Calls internally if any of the property value is changed.
     *
     * @param {TextBoxModel} newProp - Returns the dynamic property value of the component.
     * @param {TextBoxModel} oldProp - Returns the previous property value of the component.
     * @returns {void}
     * @private
     */
    onPropertyChanged(newProp: TextBoxModel, oldProp: TextBoxModel): void;
    /**
     * Gets the component name
     *
     * @returns {string} Returns the component name.
     * @private
     */
    getModuleName(): string;
    private isBlank;
    protected preRender(): void;
    private checkAttributes;
    /**
     * To Initialize the control rendering
     *
     * @returns {void}
     * @private
     */
    render(): void;
    private updateHTMLAttrToWrapper;
    private updateHTMLAttrToElement;
    private updateCssClass;
    private getInputValidClassList;
    private setInitialValue;
    private wireEvents;
    private animationHandler;
    private resetValue;
    private resetForm;
    private focusHandler;
    private focusOutHandler;
    private inputHandler;
    private changeHandler;
    private raiseChangeEvent;
    private bindClearEvent;
    private resetInputHandler;
    private unWireEvents;
    /**
     * Removes the component from the DOM and detaches all its related event handlers.
     * Also, it maintains the initial TextBox element from the DOM.
     *
     * @method destroy
     * @returns {void}
     */
    destroy(): void;
    /**
     * Adding the icons to the TextBox component.
     *
     * @param { string } position - Specify the icon placement on the TextBox. Possible values are append and prepend.
     * @param { string | string[] } icons - Icon classes which are need to add to the span element which is going to created.
     * Span element acts as icon or button element for TextBox.
     * @returns {void}
     */
    addIcon(position: string, icons: string | string[]): void;
    /**
     * Gets the properties to be maintained in the persisted state.
     *
     */
    getPersistData(): string;
    /**
     * Adding the multiple attributes as key-value pair to the TextBox element.
     *
     * @param {string} attributes - Specifies the attributes to be add to TextBox element.
     * @returns {void}
     */
    addAttributes(attributes: {
        [key: string]: string;
    }): void;
    /**
     * Removing the multiple attributes as key-value pair to the TextBox element.
     *
     * @param { string[] } attributes - Specifies the attributes name to be removed from TextBox element.
     * @returns {void}
     */
    removeAttributes(attributes: string[]): void;
    /**
     * Sets the focus to widget for interaction.
     *
     * @returns {void}
     */
    focusIn(): void;
    /**
     * Remove the focus from widget, if the widget is in focus state.
     *
     * @returns {void}
     */
    focusOut(): void;
}
