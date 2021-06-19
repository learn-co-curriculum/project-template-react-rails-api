import { BaseEventArgs, Component, EmitType, INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { ColorPickerModel } from './color-picker-model';
/**
 * ColorPicker Mode
 */
export declare type ColorPickerMode = 'Picker' | 'Palette';
/**
 * ColorPicker component is a user interface to select and adjust color values. It provides supports for various
 * color specification like Red Green Blue, Hue Saturation Value and Hex codes.
 * ```html
 * <input type="color" id="color-picker">
 * ```
 * ```typescript
 * <script>
 *   let colorPickerObj: ColorPicker = new ColorPicker(null , "#color-picker");
 * </script>
 * ```
 */
export declare class ColorPicker extends Component<HTMLInputElement> implements INotifyPropertyChanged {
    private splitBtn;
    private hueSlider;
    private opacitySlider;
    private tooltipEle;
    private container;
    private modal;
    private isRgb;
    private l10n;
    private tileRipple;
    private ctrlBtnRipple;
    private clientX;
    private clientY;
    private rgb;
    private hsv;
    private formElement;
    private initialInputValue;
    /**
     * It is used to set the color value for ColorPicker. It should be specified as Hex code.
     *
     * @default '#008000ff'
     */
    value: string;
    /**
     * This property sets the CSS classes to root element of the ColorPicker
     *  which helps to customize the UI styles.
     *
     * @default ''
     */
    cssClass: string;
    /**
     * It is used to enable / disable ColorPicker component. If it is disabled the ColorPicker popup won’t open.
     *
     * @default false
     */
    disabled: boolean;
    /**
     * It is used to render the ColorPicker with the specified mode.
     *
     * @default 'Picker'
     */
    mode: ColorPickerMode;
    /**
     * It is used to show / hide the mode switcher button of ColorPicker component.
     *
     * @default true
     */
    modeSwitcher: boolean;
    /**
     * It is used to load custom colors to palette.
     *
     * @default null
     */
    presetColors: {
        [key: string]: string[];
    };
    /**
     * It is used to show / hide the control buttons (apply / cancel) of  ColorPicker component.
     *
     * @default true
     */
    showButtons: boolean;
    /**
     * It is used to render the ColorPicker palette with specified columns.
     *
     * @default 10
     */
    columns: number;
    /**
     * It is used to render the ColorPicker component as inline.
     *
     * @default false
     */
    inline: boolean;
    /**
     * It is used to enable / disable the no color option of ColorPicker component.
     *
     * @default false
     */
    noColor: boolean;
    /**
     * To enable or disable persisting component's state between page reloads and it is extended from component class.
     *
     * @default false
     */
    enablePersistence: boolean;
    /**
     * It is used to enable / disable the opacity option of ColorPicker component.
     *
     * @default true
     */
    enableOpacity: boolean;
    /**
     * Triggers while selecting the color in picker / palette, when showButtons property is enabled.
     *
     * @event select
     * @blazorProperty 'Selected'
     */
    select: EmitType<ColorPickerEventArgs>;
    /**
     * Triggers while changing the colors. It will be triggered based on the showButtons property.
     * If the property is false, the event will be triggered while selecting the colors.
     * If the property is true, the event will be triggered while apply the selected color.
     *
     * @event change
     * @blazorProperty 'ValueChange'
     */
    change: EmitType<ColorPickerEventArgs>;
    /**
     * Trigger while rendering each palette tile.
     *
     * @event beforeTileRender
     * @blazorProperty 'OnTileRender'
     */
    beforeTileRender: EmitType<PaletteTileEventArgs>;
    /**
     * Triggers before opening the ColorPicker popup.
     *
     * @event beforeOpen
     * @blazorProperty 'OnOpen'
     */
    beforeOpen: EmitType<BeforeOpenCloseEventArgs>;
    /**
     * Triggers while opening the ColorPicker popup.
     *
     * @event open
     * @blazorProperty 'Opened'
     */
    open: EmitType<OpenEventArgs>;
    /**
     * Triggers before closing the ColorPicker popup.
     *
     * @event beforeClose
     * @blazorProperty 'OnClose'
     */
    beforeClose: EmitType<BeforeOpenCloseEventArgs>;
    /**
     * Triggers before Switching between ColorPicker mode.
     *
     * @event beforeModeSwitch
     * @blazorProperty 'OnModeSwitch'
     */
    beforeModeSwitch: EmitType<ModeSwitchEventArgs>;
    /**
     * Triggers after Switching between ColorPicker mode.
     *
     * @event onModeSwitch
     * @blazorProperty 'ModeSwitched'
     */
    onModeSwitch: EmitType<ModeSwitchEventArgs>;
    /**
     * Triggers once the component rendering is completed.
     *
     * @event created
     * @blazorProperty 'Created'
     */
    created: EmitType<Event>;
    constructor(options?: ColorPickerModel, element?: string | HTMLInputElement);
    protected preRender(): void;
    /**
     * To Initialize the component rendering
     *
     * @private
     * @returns {void}
     */
    render(): void;
    private initWrapper;
    private getWrapper;
    private createWidget;
    private createSplitBtn;
    private onOpen;
    private getPopupInst;
    private bindCallBackEvent;
    private onPopupClose;
    private createPalette;
    private firstPaletteFocus;
    private appendPalette;
    private setNoColor;
    private appendElement;
    private addTileSelection;
    private createPicker;
    private setHsvContainerBg;
    private getHsvContainer;
    private setHandlerPosition;
    private createSlider;
    private createOpacitySlider;
    private updateOpacitySliderBg;
    private hueChange;
    private opacityChange;
    private updateOpacityInput;
    private createPreview;
    private isPicker;
    private getPopupEle;
    private createNumericInput;
    private createInput;
    private appendOpacityValue;
    private appendValueSwitchBtn;
    private createCtrlBtn;
    private appendModeSwitchBtn;
    private createDragTooltip;
    private getTooltipInst;
    private setTooltipOffset;
    private toggleDisabled;
    private convertToRgbString;
    private convertToHsvString;
    private updateHsv;
    private convertToOtherFormat;
    private updateInput;
    private updatePreview;
    private getDragHandler;
    private removeTileSelection;
    private convertRgbToNumberArray;
    /**
     * To get color value in specified type.
     *
     * @param {string} value - Specify the color value.
     * @param {string} type - Specify the type to which the specified color needs to be converted.
     * @method getValue
     * @returns {string} - Color value
     */
    getValue(value?: string, type?: string): string;
    /**
     * To show/hide ColorPicker popup based on current state of the SplitButton.
     *
     * @method toggle
     * @returns {void}
     */
    toggle(): void;
    /**
     * Get component name.
     *
     * @returns {string} - Module Name
     * @private
     */
    getModuleName(): string;
    /**
     * Gets the properties to be maintained in the persisted state.
     *
     * @returns {string} - Persist data
     */
    getPersistData(): string;
    protected wireEvents(): void;
    private formResetHandler;
    private addCtrlSwitchEvent;
    private pickerKeyDown;
    private enterKeyHandler;
    private closePopup;
    private triggerChangeEvent;
    private handlerDragPosition;
    private handlerDown;
    private handlerMove;
    private setHsv;
    private handlerEnd;
    private btnClickHandler;
    private switchToPalette;
    private refreshPopupPos;
    private formatSwitchHandler;
    private updateValue;
    private previewHandler;
    private paletteClickHandler;
    private noColorTile;
    private switchToPicker;
    private ctrlBtnClick;
    private paletteKeyDown;
    private keySelectionChanges;
    private tilePosition;
    private inputHandler;
    private inputValueChange;
    private triggerEvent;
    /**
     * Removes the component from the DOM and detaches all its related event handlers.
     * Also it maintains the initial input element from the DOM.
     *
     * @method destroy
     * @returns {void}
     */
    destroy(): void;
    private destroyOtherComp;
    private isPopupOpen;
    protected unWireEvents(): void;
    private roundValue;
    private hexToRgb;
    private rgbToHsv;
    private hsvToRgb;
    private rgbToHex;
    private hex;
    private changeModeSwitcherProp;
    private changeShowBtnProps;
    private changeValueProp;
    private setInputEleProps;
    private changeDisabledProp;
    private changeCssClassProps;
    private changeRtlProps;
    private changePaletteProps;
    private changeOpacityProps;
    /**
     * Called internally if any of the property value changed.
     *
     * @param  {ColorPickerModel} newProp - Specifies new properties
     * @param  {ColorPickerModel} oldProp - Specifies old properties
     * @returns {void}
     * @private
     */
    onPropertyChanged(newProp: ColorPickerModel, oldProp: ColorPickerModel): void;
    /**
     * Sets the focus to Colorpicker
     * its native method
     *
     * @public
     * @returns {void}
     */
    focusIn(): void;
}
/**
 * Interface for change / select event.
 */
export interface ColorPickerEventArgs extends BaseEventArgs {
    currentValue: {
        hex: string;
        rgba: string;
    };
    previousValue: {
        hex: string;
        rgba: string;
    };
}
/**
 * Interface for before change event.
 */
export interface PaletteTileEventArgs extends BaseEventArgs {
    element: HTMLElement;
    presetName: string;
    value: string;
}
/**
 * Interface for before open / close event.
 */
export interface BeforeOpenCloseEventArgs extends BaseEventArgs {
    element: HTMLElement;
    event: Event;
    cancel: boolean;
}
/**
 * Interface for open event.
 */
export interface OpenEventArgs extends BaseEventArgs {
    element: HTMLElement;
}
/**
 * Interface for mode switching event.
 */
export interface ModeSwitchEventArgs extends BaseEventArgs {
    element: HTMLElement;
    mode: string;
}
