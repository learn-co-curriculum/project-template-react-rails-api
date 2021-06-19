/**
 * Defines floating label type of the input and decides how the label should float on the input.
 */
export declare type FloatLabelType = 'Never' | 'Always' | 'Auto';
/**
 * Base for Input creation through util methods.
 */
export declare namespace Input {
    /**
     * Create a wrapper to input element with multiple span elements and set the basic properties to input based components.
     * ```
     * E.g : Input.createInput({ element: element, floatLabelType : "Auto", properties: { placeholder: 'Search' } });
     * ```
     *
     */
    function createInput(args: InputArgs, internalCreateElement?: createElementParams): InputObject;
    function bindInitialEvent(args: InputArgs): void;
    function wireFloatingEvents(element: HTMLInputElement | HTMLTextAreaElement): void;
    function wireClearBtnEvents(element: HTMLInputElement | HTMLTextAreaElement, button: HTMLElement, container: HTMLElement): void;
    /**
     * Sets the value to the input element.
     * ```
     * E.g : Input.setValue('content', element, "Auto", true );
     * ```
     *
     * @param {string} value - Specify the value of the input element.
     * @param {HTMLInputElement | HTMLTextAreaElement} element - The element on which the specified value is updated.
     * @param {string} floatLabelType - Specify the float label type of the input element.
     * @param {boolean} clearButton - Boolean value to specify whether the clear icon is enabled / disabled on the input.
     */
    function setValue(value: string, element: HTMLInputElement | HTMLTextAreaElement, floatLabelType?: string, clearButton?: boolean): void;
    /**
     * Sets the single or multiple cssClass to wrapper of input element.
     * ```
     * E.g : Input.setCssClass('e-custom-class', [element]);
     * ```
     *
     * @param {string} cssClass - Css class names which are needed to add.
     * @param {Element[] | NodeList} elements - The elements which are needed to add / remove classes.
     * @param {string} oldClass
     * - Css class names which are needed to remove. If old classes are need to remove, can give this optional parameter.
     */
    function setCssClass(cssClass: string, elements: Element[] | NodeList, oldClass?: string): void;
    /**
     * Set the width to the wrapper of input element.
     * ```
     * E.g : Input.setWidth('200px', container);
     * ```
     *
     * @param {number | string} width - Width value which is need to add.
     * @param {HTMLElement} container - The element on which the width is need to add.
     */
    function setWidth(width: number | string, container: HTMLElement): void;
    /**
     * Set the placeholder attribute to the input element.
     * ```
     * E.g : Input.setPlaceholder('Search here', element);
     * ```
     *
     * @param {string} placeholder - Placeholder value which is need to add.
     * @param {HTMLInputElement | HTMLTextAreaElement} element - The element on which the placeholder is need to add.
     */
    function setPlaceholder(placeholder: string, element: HTMLInputElement | HTMLTextAreaElement): void;
    /**
     * Set the read only attribute to the input element
     * ```
     * E.g : Input.setReadonly(true, element);
     * ```
     *
     * @param {boolean} isReadonly
     * - Boolean value to specify whether to set read only. Setting "True" value enables read only.
     * @param {HTMLInputElement | HTMLTextAreaElement} element
     * - The element which is need to enable read only.
     */
    function setReadonly(isReadonly: boolean, element: HTMLInputElement | HTMLTextAreaElement, floatLabelType?: string): void;
    /**
     * Displays the element direction from right to left when its enabled.
     * ```
     * E.g : Input.setEnableRtl(true, [inputObj.container]);
     * ```
     *
     * @param {boolean} isRtl
     * - Boolean value to specify whether to set RTL. Setting "True" value enables the RTL mode.
     * @param {Element[] | NodeList} elements
     * - The elements that are needed to enable/disable RTL.
     */
    function setEnableRtl(isRtl: boolean, elements: Element[] | NodeList): void;
    /**
     * Enables or disables the given input element.
     * ```
     * E.g : Input.setEnabled(false, element);
     * ```
     *
     * @param {boolean} isEnable
     * - Boolean value to specify whether to enable or disable.
     * @param {HTMLInputElement | HTMLTextAreaElement} element
     * - Element to be enabled or disabled.
     */
    function setEnabled(isEnable: boolean, element: HTMLInputElement | HTMLTextAreaElement, floatLabelType?: string, inputContainer?: HTMLElement): void;
    function setClearButton(isClear: boolean, element: HTMLInputElement | HTMLTextAreaElement, inputObject: InputObject, initial?: boolean, internalCreateElement?: createElementParams): void;
    /**
     * Removing the multiple attributes from the given element such as "disabled","id" , etc.
     * ```
     * E.g : Input.removeAttributes({ 'disabled': 'disabled', 'aria-disabled': 'true' }, element);
     * ```
     *
     * @param {string} attrs
     * - Array of attributes which are need to removed from the element.
     * @param {HTMLInputElement | HTMLElement} element
     * - Element on which the attributes are needed to be removed.
     */
    function removeAttributes(attrs: {
        [key: string]: string;
    }, element: HTMLInputElement | HTMLElement): void;
    /**
     * Adding the multiple attributes to the given element such as "disabled","id" , etc.
     * ```
     * E.g : Input.addAttributes({ 'id': 'inputpopup' }, element);
     * ```
     *
     * @param {string} attrs
     * - Array of attributes which is added to element.
     * @param {HTMLInputElement | HTMLElement} element
     * - Element on which the attributes are needed to be added.
     */
    function addAttributes(attrs: {
        [key: string]: string;
    }, element: HTMLInputElement | HTMLElement): void;
    function removeFloating(input: InputObject): void;
    function addFloating(input: HTMLInputElement | HTMLTextAreaElement, type: FloatLabelType | string, placeholder: string, internalCreateElement?: createElementParams): void;
    /**
     * Enable or Disable the ripple effect on the icons inside the Input. Ripple effect is only applicable for material theme.
     * ```
     * E.g : Input.setRipple(true, [inputObjects]);
     * ```
     *
     * @param {boolean} isRipple
     * - Boolean value to specify whether to enable the ripple effect.
     * @param {InputObject[]} inputObj
     * - Specify the collection of input objects.
     */
    function setRipple(isRipple: boolean, inputObj: InputObject[]): void;
    /**
     * Creates a new span element with the given icons added and append it in container element.
     * ```
     * E.g : Input.addIcon('append', 'e-icon-spin', inputObj.container, inputElement);
     * ```
     *
     * @param {string} position - Specify the icon placement on the input.Possible values are append and prepend.
     * @param {string | string[]} icons - Icon classes which are need to add to the span element which is going to created.
     * Span element acts as icon or button element for input.
     * @param {HTMLElement} container - The container on which created span element is going to append.
     * @param {HTMLElement} input - The inputElement on which created span element is going to prepend.
     */
    function addIcon(position: string, icons: string | string[], container: HTMLElement, input: HTMLElement, internalCreate?: createElementParams): void;
    /**
     * Creates a new span element with the given icons added and prepend it in input element.
     * ```
     * E.g : Input.prependSpan('e-icon-spin', inputObj.container, inputElement);
     * ```
     *
     * @param {string} iconClass - Icon classes which are need to add to the span element which is going to created.
     * Span element acts as icon or button element for input.
     * @param {HTMLElement} container - The container on which created span element is going to append.
     * @param {HTMLElement} inputElement - The inputElement on which created span element is going to prepend.
     */
    function prependSpan(iconClass: string, container: HTMLElement, inputElement: HTMLElement, internalCreateElement?: createElementParams): HTMLElement;
    /**
     * Creates a new span element with the given icons added and append it in container element.
     * ```
     * E.g : Input.appendSpan('e-icon-spin', inputObj.container);
     * ```
     *
     * @param {string} iconClass - Icon classes which are need to add to the span element which is going to created.
     * Span element acts as icon or button element for input.
     * @param {HTMLElement} container - The container on which created span element is going to append.
     */
    function appendSpan(iconClass: string, container: HTMLElement, internalCreateElement?: createElementParams): HTMLElement;
    function validateInputType(containerElement: HTMLElement, input: HTMLInputElement | HTMLTextAreaElement): void;
}
export interface InputObject {
    container?: HTMLElement;
    buttons?: HTMLElement[];
    clearButton?: HTMLElement;
}
/**
 * Arguments to create input element for input text boxes utility.These properties are optional.
 */
export interface InputArgs {
    /**
     * Element which is needed to add to the container.
     * ```
     * E.g : Input.createInput({ element: element });
     * ```
     */
    element: HTMLInputElement | HTMLTextAreaElement;
    /**
     * ```
     * E.g : Input.createInput({ element: element, buttons: ['e-icon-up', 'e-icon-down'] });
     * ```
     * Specifies the icon classes for span element which will be append to the container.
     */
    buttons?: string[];
    /**
     * ```
     * E.g : Input.createInput({ element: element, customTag: 'ej2-custom-input' });
     * ```
     * Specifies the custom tag which is acts as container to the input.
     */
    customTag?: string;
    /**
     * ```
     * E.g : Input.createInput({ element: element, floatLabelType : "Always" });
     * ```
     * Specifies how the floating label works.
     * Possible values are:
     * * Never - Never float the label in the input when the placeholder is available.
     * * Always - The floating label will always float above the input.
     * * Auto - The floating label will float above the input after focusing or entering a value in the input.
     */
    floatLabelType?: FloatLabelType | string;
    /**
     * ```
     * E.g : Input.createInput({ element: element, properties: { readonly: true, placeholder: 'Search here' } });
     * ```
     * To specifies the properties such as readonly,enable rtl,etc.
     */
    properties?: {
        readonly?: boolean;
        placeholder?: string;
        cssClass?: string;
        enableRtl?: boolean;
        enabled?: boolean;
        showClearButton?: boolean;
    };
}
/**
 * Default required properties for input components.
 */
export interface IInput {
    /**
     * Sets the placeholder value to input.
     */
    placeholder: string;
    /**
     * Sets the css class value to input.
     */
    cssClass: string;
    /**
     * Sets the enabled value to input.
     */
    enabled?: boolean;
    /**
     * Sets the readonly value to input.
     */
    readonly: boolean;
    /**
     * Sets the enable rtl value to input.
     */
    enableRtl: boolean;
    /**
     * Specifies whether to display the Clear button in the input.
     */
    showClearButton?: boolean;
    /**
     * Specifies how the floating label works.
     * Possible values are:
     * * Never - Never float the label in the input when the placeholder is available.
     * * Always - The floating label will always float above the input.
     * * Auto - The floating label will float above the input after focusing or entering a value in the input.
     */
    floatLabelType?: FloatLabelType | string;
    /**
     * Sets the change event mapping function to input.
     */
    change: Function;
}
export declare type createElementParams = (tag: string, prop?: {
    id?: string;
    className?: string;
    innerHTML?: string;
    styles?: string;
    attrs?: {
        [key: string]: string;
    };
}) => HTMLElement;
/**
 * Defines the argument for the focus event.
 */
export interface FocusEventArgs {
    model?: Object;
}
/**
 * Defines the argument for the blur event.
 */
export interface BlurEventArgs {
    model?: Object;
}
