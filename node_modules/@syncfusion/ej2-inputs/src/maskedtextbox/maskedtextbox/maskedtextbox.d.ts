import { Component, EmitType, INotifyPropertyChanged, BaseEventArgs } from '@syncfusion/ej2-base';
import { FloatLabelType } from '../../input/input';
import { MaskedTextBoxModel } from './maskedtextbox-model';
/**
 * The MaskedTextBox allows the user to enter the valid input only based on the provided mask.
 * ```html
 * <input id="mask" type="text" />
 * ```
 * ```typescript
 * <script>
 * var maskObj = new MaskedTextBox({ mask: "(999) 9999-999" });
 * maskObj.appendTo('#mask');
 * </script>
 * ```
 */
export declare class MaskedTextBox extends Component<HTMLInputElement> implements INotifyPropertyChanged {
    private cloneElement;
    private promptMask;
    private hiddenMask;
    private escapeMaskValue;
    private regExpCollec;
    private customRegExpCollec;
    private inputObj;
    private undoCollec;
    private redoCollec;
    private changeEventArgs;
    private focusEventArgs;
    private blurEventArgs;
    private maskKeyPress;
    private angularTagName;
    private prevValue;
    private isFocus;
    private isInitial;
    private isIosInvalid;
    private preEleVal;
    private formElement;
    private initInputValue;
    private maskOptions;
    private isAngular;
    private preventChange;
    private isClicked;
    /**
     * Gets or sets the CSS classes to root element of the MaskedTextBox which helps to customize the
     * complete UI styles for the MaskedTextBox component.
     *
     * @default null
     */
    cssClass: string;
    /**
     * Sets the width of the MaskedTextBox.
     *
     * @default null
     */
    width: number | string;
    /**
     * Gets or sets the string shown as a hint/placeholder when the MaskedTextBox is empty.
     * It acts as a label and floats above the MaskedTextBox based on the
     * <b><a href="#floatlabeltype" target="_blank">floatLabelType.</a></b>
     *
     * @default null
     */
    placeholder: string;
    /**
     * The <b><a href="#placeholder" target="_blank">placeholder</a></b> acts as a label
     * and floats above the MaskedTextBox based on the below values.
     * Possible values are:
     * * Never - The floating label will not be enable when the placeholder is available.
     * * Always - The floating label always floats above the MaskedTextBox.
     * * Auto - The floating label floats above the MaskedTextBox after focusing it or when enters the value in it.
     *
     * @default Never
     */
    floatLabelType: FloatLabelType;
    /**
     * You can add the additional html attributes such as disabled, value etc., to the element.
     * If you configured both property and equivalent html attribute then the component considers the property value.
     * {% codeBlock src='maskedtextbox/htmlAttributes/index.md' %}{% endcodeBlock %}
     *
     * @default {}
     */
    htmlAttributes: {
        [key: string]: string;
    };
    /**
     * Sets a value that enables or disables the MaskedTextBox component.
     *
     * @default true
     */
    enabled: boolean;
    /**
     * Specifies the boolean value whether the Masked TextBox allows the user to change the text.
     *
     * @default false
     */
    readonly: boolean;
    /**
     * Specifies whether to show or hide the clear icon.
     *
     * @default false
     */
    showClearButton: boolean;
    /**
     * Sets a value that enables or disables the persisting state of the MaskedTextBox after reloading the page.
     * If enabled, the 'value' state will be persisted.
     *
     * @default false
     */
    enablePersistence: boolean;
    /**
     * Sets a value that masks the MaskedTextBox to allow/validate the user input.
     * * Mask allows [`standard mask elements`](../../maskedtextbox/mask-configuration/#standard-mask-elements)
     * </b>, <b>[`custom characters`](../../maskedtextbox/mask-configuration/#custom-characters)</b> and
     * <b>[`regular expression`](../../maskedtextbox/mask-configuration/#regular-expression)</b> as mask
     * elements.
     * For more information on mask, refer to
     * [mask](../../maskedtextbox/mask-configuration/#standard-mask-elements).
     * * If the mask value is empty, the MaskedTextBox will behave as an input element with text type.
     * {% codeBlock src='maskedtextbox/mask/index.md' %}{% endcodeBlock %}
     *
     * @default null
     */
    mask: string;
    /**
     * Gets or sets a value that will be shown as a prompting symbol for the masked value.
     * The symbol used to show input positions in the MaskedTextBox.
     * For more information on prompt-character, refer to
     * [prompt-character](../../maskedtextbox/mask-configuration/#prompt-character).
     *
     * @default '_'
     */
    promptChar: string;
    /**
     * Gets or sets the value of the MaskedTextBox. It is a raw value of the MaskedTextBox excluding literals
     * and prompt characters. By using `getMaskedValue` property, you can get the value of MaskedTextBox with the masked format.
     * {% codeBlock src='maskedtextbox/value/index.md' %}{% endcodeBlock %}
     *
     * @default null
     */
    value: string;
    /**
     * Sets the collection of values to be mapped for non-mask elements(literals)
     * which have been set in the mask of MaskedTextBox.
     * In the below example, non-mask elements "P" accepts values
     * "P" , "A" , "p" , "a" and "M" accepts values "M", "m" mentioned in the custom characters collection.
     * > For more information on customCharacters, refer to
     * [customCharacters](../../maskedtextbox/mask-configuration/#custom-characters).
     * {% codeBlock src='maskedtextbox/customCharacters/index.md' %}{% endcodeBlock %}
     *
     * @default null
     */
    customCharacters: {
        [x: string]: Object;
    };
    /**
     * Triggers when the MaskedTextBox component is created.
     *
     * @event created
     * @blazorProperty 'Created'
     */
    created: EmitType<Object>;
    /**
     * Triggers when the MaskedTextBox component is destroyed.
     *
     * @event destroyed
     * @blazorProperty 'Destroyed'
     */
    destroyed: EmitType<Object>;
    /**
     * Triggers when the value of the MaskedTextBox changes.
     *
     * @event change
     * @blazorProperty 'ValueChange'
     */
    change: EmitType<MaskChangeEventArgs>;
    /**
     * Triggers when the MaskedTextBox got focus in.
     *
     * @event focus
     */
    focus: EmitType<MaskFocusEventArgs>;
    /**
     * Triggers when the MaskedTextBox got focus out.
     *
     * @event blur
     */
    blur: EmitType<MaskBlurEventArgs>;
    /**
     *
     * @param {MaskedTextBoxModel} options - Specifies the MaskedTextBox model.
     * @param {string | HTMLElement | HTMLInputElement} element - Specifies the element to render as component.
     * @private
     */
    constructor(options?: MaskedTextBoxModel, element?: string | HTMLElement | HTMLInputElement);
    /**
     * Gets the component name.
     *
     * @returns {string} Returns the component name.
     * @private
     */
    protected getModuleName(): string;
    /**
     * Initializes the event handler
     *
     * @returns {void}
     * @private
     */
    protected preRender(): void;
    /**
     * Gets the properties to be maintained in the persisted state.
     *
     * @returns {string}
     */
    getPersistData(): string;
    /**
     * Initializes the component rendering.
     *
     * @returns {void}
     * @private
     */
    render(): void;
    private updateHTMLAttrToElement;
    private updateCssClass;
    private getValidClassList;
    private updateHTMLAttrToWrapper;
    private resetMaskedTextBox;
    private setMaskPlaceholder;
    private setWidth;
    private checkHtmlAttributes;
    private createWrapper;
    /**
     * Calls internally if any of the property value is changed.
     *
     * @param {MaskedTextBoxModel} newProp - Returns the dynamic property value of the component.
     * @param {MaskedTextBoxModel} oldProp - Returns the previous property value of the component.
     * @returns {void}
     * @hidden
     */
    onPropertyChanged(newProp: MaskedTextBoxModel, oldProp: MaskedTextBoxModel): void;
    private updateValue;
    /**
     * Gets the value of the MaskedTextBox with the masked format.
     * By using `value` property, you can get the raw value of maskedtextbox without literals and prompt characters.
     *
     * @returns {string}
     */
    getMaskedValue(): string;
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
    /**
     * Removes the component from the DOM and detaches all its related event handlers.
     * Also it maintains the initial input element from the DOM.
     *
     * @method destroy
     * @returns {void}
     */
    destroy(): void;
}
export interface MaskChangeEventArgs extends BaseEventArgs {
    /** Returns the value of the MaskedTextBox with the masked format. */
    maskedValue?: string;
    /** Returns the raw value of MaskedTextBox by removing the prompt characters and literals(non-mask elements)
     * which have been set in the mask of MaskedTextBox.
     */
    value?: string;
    /** Returns true when the value of MaskedTextBox is changed by user interaction. Otherwise, it returns false.
     *
     * @private
     */
    isInteraction?: boolean;
    /** Returns true when the value of MaskedTextBox is changed by user interaction. Otherwise, it returns false */
    isInteracted?: boolean;
    /** Returns the original event arguments. */
    event?: Event;
}
export interface MaskFocusEventArgs extends BaseEventArgs {
    /** Returns selectionStart value as zero by default */
    selectionStart?: number;
    /** Returns selectionEnd value depends on mask length */
    selectionEnd?: number;
    /** Returns the original event arguments. */
    event?: MouseEvent | FocusEvent | TouchEvent | KeyboardEvent;
    /** Returns the value of MaskedTextBox. */
    value?: string;
    /** Returns the maskedValue of MaskedTextBox. */
    maskedValue?: string;
    /** Returns the MaskedTextBox container element */
    container?: HTMLElement;
}
export interface MaskBlurEventArgs extends BaseEventArgs {
    /** Returns the original event arguments. */
    event?: MouseEvent | FocusEvent | TouchEvent | KeyboardEvent;
    /** Returns the value of MaskedTextBox. */
    value?: string;
    /** Returns the maskedValue of MaskedTextBox. */
    maskedValue?: string;
    /** Returns the MaskedTextBox container element */
    container?: HTMLElement;
}
