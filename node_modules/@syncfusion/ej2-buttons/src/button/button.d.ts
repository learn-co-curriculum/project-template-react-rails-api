import { INotifyPropertyChanged, Component } from '@syncfusion/ej2-base';
import { EmitType } from '@syncfusion/ej2-base';
import { Observer } from '@syncfusion/ej2-base';
import { ButtonModel } from './button-model';
/**
 * Defines the icon position of button.
 */
export declare type IconPosition = 'Left' | 'Right' | 'Top' | 'Bottom';
export declare const buttonObserver: Observer;
/**
 * The Button is a graphical user interface element that triggers an event on its click action. It can contain a text, an image, or both.
 * ```html
 * <button id="button">Button</button>
 * ```
 * ```typescript
 * <script>
 * var btnObj = new Button();
 * btnObj.appendTo("#button");
 * </script>
 * ```
 */
export declare class Button extends Component<HTMLButtonElement> implements INotifyPropertyChanged {
    private removeRippleEffect;
    /**
     * Positions the icon before/after the text content in the Button.
     * The possible values are:
     * * Left: The icon will be positioned to the left of the text content.
     * * Right: The icon will be positioned to the right of the text content.
     *
     * @default "left"
     */
    iconPosition: IconPosition;
    /**
     * Defines class/multiple classes separated by a space for the Button that is used to include an icon.
     * Buttons can also include font icon and sprite image.
     *
     * @default ""
     */
    iconCss: string;
    /**
     * Specifies a value that indicates whether the Button is `disabled` or not.
     *
     * @default false.
     */
    disabled: boolean;
    /**
     * Allows the appearance of the Button to be enhanced and visually appealing when set to `true`.
     *
     * @default false
     */
    isPrimary: boolean;
    /**
     * Defines class/multiple classes separated by a space in the Button element. The Button types, styles, and
     * size can be defined by using
     * [`this`](http://ej2.syncfusion.com/documentation/button/howto.html?lang=typescript#create-a-block-button).
     * {% codeBlock src='button/cssClass/index.md' %}{% endcodeBlock %}
     *
     * @default ""
     */
    cssClass: string;
    /**
     * Defines the text `content` of the Button element.
     * {% codeBlock src='button/content/index.md' %}{% endcodeBlock %}
     *
     * @default ""
     */
    content: string;
    /**
     * Makes the Button toggle, when set to `true`. When you click it, the state changes from normal to active.
     *
     * @default false
     */
    isToggle: boolean;
    /**
     * Overrides the global culture and localization value for this component. Default global culture is 'en-US'.
     *
     * @private
     */
    locale: string;
    /**
     * Defines whether to allow the cross-scripting site or not.
     *
     * @default false
     */
    enableHtmlSanitizer: boolean;
    /**
     * Triggers once the component rendering is completed.
     *
     * @event created
     */
    created: EmitType<Event>;
    /**
     * Constructor for creating the widget
     *
     * @param  {ButtonModel} options - Specifies the button model
     * @param  {string|HTMLButtonElement} element - Specifies the target element
     */
    constructor(options?: ButtonModel, element?: string | HTMLButtonElement);
    protected preRender(): void;
    /**
     * Initialize the control rendering
     *
     * @returns {void}
     * @private
     */
    render(): void;
    private initialize;
    private controlStatus;
    private setIconCss;
    protected wireEvents(): void;
    protected unWireEvents(): void;
    private btnClickHandler;
    /**
     * Destroys the widget.
     *
     * @returns {void}
     */
    destroy(): void;
    /**
     * Get component name.
     *
     * @returns {string} - Module name
     * @private
     */
    getModuleName(): string;
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @returns {string} - Persist Data
     * @private
     */
    getPersistData(): string;
    /**
     * Dynamically injects the required modules to the component.
     *
     * @private
     * @returns {void}
     */
    static Inject(): void;
    /**
     * Called internally if any of the property value changed.
     *
     * @param  {ButtonModel} newProp - Specifies new properties
     * @param  {ButtonModel} oldProp - Specifies old properties
     * @returns {void}
     * @private
     */
    onPropertyChanged(newProp: ButtonModel, oldProp: ButtonModel): void;
    /**
     * Click the button element
     * its native method
     *
     * @public
     * @returns {void}
     */
    click(): void;
    /**
     * Sets the focus to Button
     * its native method
     *
     * @public
     * @returns {void}
     */
    focusIn(): void;
}
