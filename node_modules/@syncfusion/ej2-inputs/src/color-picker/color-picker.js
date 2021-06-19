var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* eslint-disable prefer-spread */
/* eslint-disable @typescript-eslint/ban-types */
import { Component, Event, NotifyPropertyChanges, Property } from '@syncfusion/ej2-base';
import { Browser, closest, detach, EventHandler, getInstance, select, selectAll, formatUnit } from '@syncfusion/ej2-base';
import { addClass, attributes, classList, isNullOrUndefined, L10n } from '@syncfusion/ej2-base';
import { remove, removeClass, rippleEffect } from '@syncfusion/ej2-base';
import { SplitButton, getModel } from '@syncfusion/ej2-splitbuttons';
import { Deferred } from '@syncfusion/ej2-splitbuttons';
import { Tooltip, getZindexPartial, Popup } from '@syncfusion/ej2-popups';
import { Input } from './../input/index';
import { NumericTextBox } from './../numerictextbox/index';
import { Slider } from './../slider/slider';
var APPLY = 'e-apply';
var CANCEL = 'e-cancel';
var CURRENT = 'e-current';
var CONTAINER = 'e-container';
var CTRLBTN = 'e-ctrl-btn';
var CTRLSWITCH = 'e-switch-ctrl-btn';
var DISABLED = 'e-disabled';
var FORMATSWITCH = 'e-value-switch-btn';
var HANDLER = 'e-handler';
var HEX = 'e-hex';
var HIDEHEX = 'e-hide-hex-value';
var HIDEOPACITY = 'e-hide-opacity';
var HIDERGBA = 'e-hide-switchable-value';
var HIDEVALUE = 'e-hide-value';
var HIDEVALUESWITCH = 'e-hide-valueswitcher';
var HSVAREA = 'e-hsv-color';
var HSVCONTAINER = 'e-hsv-container';
var INPUTWRAPPER = 'e-selected-value';
var MODESWITCH = 'e-mode-switch-btn';
var NOCOLOR = 'e-nocolor-item';
var OPACITY = 'e-opacity-value';
var PALETTES = 'e-palette';
var PALETTECONTENT = 'e-color-palette';
var PICKERCONTENT = 'e-color-picker';
var PREVIEW = 'e-preview-container';
var PREVIOUS = 'e-previous';
var RTL = 'e-rtl';
var SHOWVALUE = 'e-show-value';
var SELECT = 'e-selected';
var SPLITPREVIEW = 'e-split-preview';
var TILE = 'e-tile';
var presets = {
    default: ['#000000', '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#ffeb3b',
        '#ffffff', '#ffebee', '#fce4ec', '#f3e5f5', '#ede7f6', '#e3f2fd', '#e1f5fe', '#e0f7fa', '#e0f2f1', '#fffde7',
        '#f2f2f2', '#ffcdd2', '#f8bbd0', '#e1bee7', '#d1c4e9', '#bbdefb', '#b3e5fc', '#b2ebf2', '#b2dfdb', '#fff9c4',
        '#e6e6e6', '#ef9a9a', '#f48fb1', '#ce93d8', '#b39ddb', '#90caf9', '#81d4fa', '#80deea', '#80cbc4', '#fff59d',
        '#cccccc', '#e57373', '#f06292', '#ba68c8', '#9575cd', '#64b5f6', '#4fc3f7', '#4dd0e1', '#4db6ac', '#fff176',
        '#b3b3b3', '#ef5350', '#ec407a', '#ab47bc', '#7e57c2', '#42a5f5', '#29b6f6', '#26c6da', '#26a69a', '#ffee58',
        '#999999', '#e53935', '#d81b60', '#8e24aa', '#5e35b1', '#1e88e5', '#039be5', '#00acc1', '#00897b', '#fdd835',
        '#808080', '#d32f2f', '#c2185b', '#7b1fa2', '#512da8', '#1976d2', '#0288d1', '#0097a7', '#00796b', '#fbc02d',
        '#666666', '#c62828', '#ad1457', '#6a1b9a', '#4527a0', '#1565c0', '#0277bd', '#00838f', '#00695c', '#f9a825',
        '#4d4d4d', '#b71c1c', '#880e4f', '#4a148c', '#311b92', '#0d47a1', '#01579b', '#006064', '#004d40', '#f57f17']
};
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
var ColorPicker = /** @class */ (function (_super) {
    __extends(ColorPicker, _super);
    function ColorPicker(options, element) {
        return _super.call(this, options, element) || this;
    }
    ColorPicker.prototype.preRender = function () {
        var ele = this.element;
        this.formElement = closest(this.element, 'form');
        if (this.formElement) {
            EventHandler.add(this.formElement, 'reset', this.formResetHandler, this);
        }
        var localeText = { Apply: 'Apply', Cancel: 'Cancel', ModeSwitcher: 'Switch Mode' };
        this.l10n = new L10n('colorpicker', localeText, this.locale);
        if (ele.getAttribute('ejs-for') && !ele.getAttribute('name')) {
            ele.setAttribute('name', ele.id);
        }
    };
    /**
     * To Initialize the component rendering
     *
     * @private
     * @returns {void}
     */
    ColorPicker.prototype.render = function () {
        this.initWrapper();
        if (this.inline) {
            this.createWidget();
        }
        else {
            this.createSplitBtn();
        }
        if (!this.enableOpacity) {
            addClass([this.container.parentElement], HIDEOPACITY);
        }
        this.renderComplete();
    };
    ColorPicker.prototype.initWrapper = function () {
        var wrapper = this.createElement('div', { className: 'e-' + this.getModuleName() + '-wrapper' });
        this.element.parentNode.insertBefore(wrapper, this.element);
        wrapper.appendChild(this.element);
        attributes(this.element, { 'tabindex': '-1', 'spellcheck': 'false' });
        this.container = this.createElement('div', { className: CONTAINER });
        this.getWrapper().appendChild(this.container);
        var value = this.value ? this.roundValue(this.value).toLowerCase() : '#008000ff';
        if (this.noColor && this.mode === 'Palette' && this.value === '') {
            value = '';
        }
        var slicedValue = value.slice(0, 7);
        if (isNullOrUndefined(this.initialInputValue)) {
            this.initialInputValue = slicedValue;
        }
        this.element.value = slicedValue;
        if (this.enableOpacity) {
            this.setProperties({ 'value': value }, true);
        }
        else {
            this.setProperties({ 'value': slicedValue }, true);
        }
        if (this.enableRtl) {
            wrapper.classList.add(RTL);
        }
        if (this.cssClass) {
            addClass([wrapper], this.cssClass.split(' '));
        }
        this.tileRipple = rippleEffect(this.container, { selector: '.' + TILE });
        this.ctrlBtnRipple = rippleEffect(this.container, { selector: '.e-btn' });
    };
    ColorPicker.prototype.getWrapper = function () {
        return this.element.parentElement;
    };
    ColorPicker.prototype.createWidget = function () {
        if (this.mode === 'Palette') {
            this.createPalette();
            if (!this.inline) {
                this.firstPaletteFocus();
            }
        }
        else {
            this.createPicker();
            if (!this.inline) {
                this.getDragHandler().focus();
            }
        }
        this.isRgb = true;
        this.createInput();
        this.createCtrlBtn();
        if (!this.disabled) {
            this.wireEvents();
        }
        if (this.inline && this.disabled) {
            this.toggleDisabled(true);
        }
        if (Browser.isDevice) {
            this.refreshPopupPos();
        }
    };
    ColorPicker.prototype.createSplitBtn = function () {
        var _this = this;
        var splitButton = this.createElement('button', { className: 'e-split-colorpicker' });
        this.getWrapper().appendChild(splitButton);
        this.splitBtn = new SplitButton({
            iconCss: 'e-selected-color',
            target: this.container,
            disabled: this.disabled,
            enableRtl: this.enableRtl,
            open: this.onOpen.bind(this),
            click: function (args) {
                _this.trigger('change', {
                    currentValue: { hex: _this.value.slice(0, 7), rgba: _this.convertToRgbString(_this.hexToRgb(_this.value)) },
                    previousValue: { hex: null, rgba: null }, value: _this.value
                });
            }
        });
        this.splitBtn.createElement = this.createElement;
        this.splitBtn.appendTo(splitButton);
        var preview = this.createElement('span', { className: SPLITPREVIEW });
        select('.e-selected-color', splitButton).appendChild(preview);
        preview.style.backgroundColor = this.convertToRgbString(this.hexToRgb(this.value));
        var popupEle = this.getPopupEle();
        addClass([popupEle], 'e-colorpicker-popup');
        if (this.cssClass) {
            addClass([popupEle], this.cssClass.split(' '));
        }
        if (Browser.isDevice) {
            var popupInst = this.getPopupInst();
            popupInst.relateTo = document.body;
            popupInst.position = { X: 'center', Y: 'center' };
            popupInst.targetType = 'container';
            popupInst.collision = { X: 'fit', Y: 'fit' };
            popupInst.offsetY = 4;
            popupEle.style.zIndex = getZindexPartial(this.splitBtn.element).toString();
        }
        this.bindCallBackEvent();
    };
    ColorPicker.prototype.onOpen = function (args) {
        this.trigger('open', { element: this.container });
    };
    ColorPicker.prototype.getPopupInst = function () {
        return getInstance(this.getPopupEle(), Popup);
    };
    ColorPicker.prototype.bindCallBackEvent = function () {
        var _this = this;
        this.splitBtn.beforeOpen = function (args) {
            var callBackPromise = new Deferred();
            _this.trigger('beforeOpen', args, function (observeOpenArgs) {
                if (!observeOpenArgs.cancel) {
                    var popupEle = _this.getPopupEle();
                    popupEle.style.top = formatUnit(0 + pageYOffset);
                    popupEle.style.left = formatUnit(0 + pageXOffset);
                    popupEle.style.display = 'block';
                    _this.createWidget();
                    popupEle.style.display = '';
                    if (Browser.isDevice) {
                        _this.modal = _this.createElement('div');
                        _this.modal.className = 'e-' + _this.getModuleName() + ' e-modal';
                        _this.modal.style.display = 'none';
                        document.body.insertBefore(_this.modal, popupEle);
                        document.body.className += ' e-colorpicker-overflow';
                        _this.modal.style.display = 'block';
                        _this.modal.style.zIndex = (Number(popupEle.style.zIndex) - 1).toString();
                    }
                }
                args.cancel = observeOpenArgs.cancel;
                callBackPromise.resolve(observeOpenArgs);
            });
            return callBackPromise;
        };
        this.splitBtn.beforeClose = function (args) {
            var callBackPromise = new Deferred();
            if (!isNullOrUndefined(args.event)) {
                var beforeCloseArgs = { element: _this.container, event: args.event, cancel: false };
                _this.trigger('beforeClose', beforeCloseArgs, function (observedCloseArgs) {
                    if (Browser.isDevice && args.event.target === _this.modal) {
                        observedCloseArgs.cancel = true;
                    }
                    if (!observedCloseArgs.cancel) {
                        _this.onPopupClose();
                    }
                    args.cancel = observedCloseArgs.cancel;
                    callBackPromise.resolve(observedCloseArgs);
                });
            }
            else {
                callBackPromise.resolve(args);
            }
            return callBackPromise;
        };
    };
    ColorPicker.prototype.onPopupClose = function () {
        this.unWireEvents();
        this.destroyOtherComp();
        this.container.style.width = '';
        select('.' + SPLITPREVIEW, this.splitBtn.element).style.backgroundColor
            = this.convertToRgbString(this.hexToRgb(this.value));
        this.container.innerHTML = '';
        removeClass([this.container], [PICKERCONTENT, PALETTECONTENT]);
        if (Browser.isDevice && this.modal) {
            removeClass([document.body], 'e-colorpicker-overflow');
            this.modal.style.display = 'none';
            this.modal.outerHTML = '';
            this.modal = null;
        }
    };
    ColorPicker.prototype.createPalette = function () {
        classList(this.container, [PALETTECONTENT], [PICKERCONTENT]);
        if (this.presetColors) {
            var paletteGroup = this.createElement('div', { className: 'e-custom-palette' });
            this.appendElement(paletteGroup);
            var keys = Object.keys(this.presetColors);
            if (keys.length === 1) {
                this.appendPalette(this.presetColors[keys[0]], keys[0], paletteGroup);
            }
            else {
                for (var i = 0, len = keys.length; i < len; i++) {
                    this.appendPalette(this.presetColors[keys[i]], keys[i], paletteGroup);
                }
            }
            if (selectAll('.e-row', paletteGroup).length > 10) {
                addClass([paletteGroup], 'e-palette-group');
            }
        }
        else {
            this.appendPalette(presets.default, 'default');
        }
        if (this.mode === 'Palette' && !this.modeSwitcher && this.noColor) {
            this.setNoColor();
        }
        var width = parseInt(getComputedStyle(this.container).borderBottomWidth, 10);
        this.container.style.width = formatUnit(this.container.children[0].offsetWidth + width + width);
        this.rgb = this.hexToRgb(this.roundValue(this.value));
        this.hsv = this.rgbToHsv.apply(this, this.rgb);
    };
    ColorPicker.prototype.firstPaletteFocus = function () {
        if (!select('.' + SELECT, this.container.children[0])) {
            selectAll('.' + PALETTES, this.container)[0].focus();
        }
    };
    ColorPicker.prototype.appendPalette = function (colors, key, refEle) {
        var palette = this.createElement('div', { className: PALETTES, attrs: { 'tabindex': '0' } });
        if (refEle) {
            refEle.appendChild(palette);
        }
        else {
            this.appendElement(palette);
        }
        var row;
        var tile;
        var roundedColor;
        for (var i = 0, len = colors.length; i < len; i++) {
            if (i === 0 || i % this.columns === 0) {
                row = this.createElement('div', {
                    className: 'e-row', attrs: { 'role': 'row' }
                });
                palette.appendChild(row);
            }
            roundedColor = this.roundValue(colors[i]).toLowerCase();
            tile = this.createElement('span', {
                className: TILE, attrs: { 'role': 'gridcell', 'aria-label': roundedColor, 'aria-selected': 'false' }
            });
            this.trigger('beforeTileRender', { element: tile, presetName: key, value: colors[i] });
            row.appendChild(tile);
            if (this.value === roundedColor) {
                this.addTileSelection(tile);
                palette.focus();
            }
            tile.style.backgroundColor = this.convertToRgbString(this.hexToRgb(roundedColor));
        }
    };
    ColorPicker.prototype.setNoColor = function () {
        var noColorEle = this.container.querySelector('.e-row').children[0];
        noColorEle.classList.add(NOCOLOR);
        if (!this.value) {
            noColorEle.classList.add(SELECT);
            closest(noColorEle, '.' + PALETTES).focus();
        }
        ['aria-selected', 'aria-label'].forEach(function (attr) { noColorEle.removeAttribute(attr); });
        noColorEle.style.backgroundColor = '';
    };
    ColorPicker.prototype.appendElement = function (ele, insertPos) {
        if (insertPos === void 0) { insertPos = 0; }
        var refEle = this.container.children[insertPos];
        if (refEle) {
            this.container.insertBefore(ele, refEle);
        }
        else {
            this.container.appendChild(ele);
        }
    };
    ColorPicker.prototype.addTileSelection = function (ele) {
        ele.classList.add(SELECT);
        ele.setAttribute('aria-selected', 'true');
    };
    ColorPicker.prototype.createPicker = function () {
        classList(this.container, [PICKERCONTENT], [PALETTECONTENT]);
        var hsvContainer = this.createElement('div', { className: HSVCONTAINER });
        this.appendElement(hsvContainer);
        hsvContainer.appendChild(this.createElement('div', { className: HSVAREA }));
        var dragHandler = this.createElement('span', { className: HANDLER, attrs: { 'tabindex': '0' } });
        hsvContainer.appendChild(dragHandler);
        this.rgb = this.hexToRgb(this.value);
        this.hsv = this.rgbToHsv.apply(this, this.rgb);
        this.setHsvContainerBg();
        this.setHandlerPosition();
        this.createSlider();
        this.createDragTooltip();
    };
    ColorPicker.prototype.setHsvContainerBg = function (h) {
        if (h === void 0) { h = this.hsv[0]; }
        this.getHsvContainer().style.backgroundColor = this.convertToRgbString(this.hsvToRgb(h, 100, 100, 1));
    };
    ColorPicker.prototype.getHsvContainer = function () {
        return select('.' + HSVCONTAINER, this.container);
    };
    ColorPicker.prototype.setHandlerPosition = function () {
        var dragHandler = this.getDragHandler();
        var hsvArea = select('.' + HSVAREA, this.container);
        if (this.enableRtl) {
            dragHandler.style.left = formatUnit(hsvArea.offsetWidth * Math.abs(100 - this.hsv[1]) / 100);
        }
        else {
            dragHandler.style.left = formatUnit(hsvArea.offsetWidth * this.hsv[1] / 100);
        }
        dragHandler.style.top = formatUnit(hsvArea.offsetHeight * (100 - this.hsv[2]) / 100);
    };
    ColorPicker.prototype.createSlider = function () {
        var sliderPreviewWrapper = this.createElement('div', { className: 'e-slider-preview' });
        this.appendElement(sliderPreviewWrapper, 1);
        this.createPreview(sliderPreviewWrapper);
        var sliderWrapper = this.createElement('div', { className: 'e-colorpicker-slider' });
        sliderPreviewWrapper.insertBefore(sliderWrapper, sliderPreviewWrapper.children[0]);
        var slider = this.createElement('div', { className: 'e-hue-slider' });
        sliderWrapper.appendChild(slider);
        this.hueSlider = new Slider({
            value: this.hsv[0],
            min: 0,
            max: 359,
            enableRtl: this.enableRtl,
            enabled: !this.disabled,
            change: this.hueChange.bind(this)
        });
        this.hueSlider.createElement = this.createElement;
        this.hueSlider.appendTo(slider);
        if (this.enableOpacity) {
            slider = this.createElement('div', { className: 'e-opacity-slider' });
            sliderWrapper.appendChild(slider);
            this.createOpacitySlider(slider);
        }
    };
    ColorPicker.prototype.createOpacitySlider = function (slider) {
        this.opacitySlider = new Slider({
            value: this.rgb[3] * 100,
            min: 0,
            max: 100,
            enableRtl: this.enableRtl,
            enabled: !this.disabled,
            change: this.opacityChange.bind(this)
        });
        this.opacitySlider.createElement = this.createElement;
        this.opacitySlider.appendTo(slider);
        var opacityBgTrack = this.createElement('div', { className: 'e-opacity-empty-track' });
        slider.appendChild(opacityBgTrack);
        this.updateOpacitySliderBg();
    };
    ColorPicker.prototype.updateOpacitySliderBg = function () {
        var direction = this.enableRtl ? 'to left' : 'to right';
        select('.e-slider-track', this.opacitySlider.element).style.background =
            'linear-gradient(' + direction + ', rgba(' + this.rgb.slice(0, 3) + ', 0) 0%, ' +
                this.convertToRgbString(this.rgb.slice(0, 3)) + ' 100%)';
    };
    ColorPicker.prototype.hueChange = function (args) {
        this.hsv[0] = args.value;
        this.setHsvContainerBg();
        this.convertToOtherFormat();
    };
    ColorPicker.prototype.opacityChange = function (args) {
        var value = args.value;
        var pValue = this.rgbToHex(this.rgb);
        this.hsv[3] = value / 100;
        this.rgb[3] = value / 100;
        var cValue = this.rgbToHex(this.rgb);
        this.updateOpacityInput(value);
        var rgb = this.convertToRgbString(this.rgb);
        this.updatePreview(rgb);
        this.triggerEvent(cValue, pValue, rgb);
    };
    ColorPicker.prototype.updateOpacityInput = function (value) {
        if (this.enableOpacity && !this.getWrapper().classList.contains(HIDEVALUE)) {
            var opacityTextBoxInst = getInstance(select('.' + OPACITY, this.container), NumericTextBox);
            opacityTextBoxInst.value = value;
            opacityTextBoxInst.dataBind();
        }
    };
    ColorPicker.prototype.createPreview = function (parentEle) {
        var previewContainer = this.createElement('div', { className: PREVIEW });
        parentEle.appendChild(previewContainer);
        var preview = this.createElement('span', { className: 'e-preview ' + CURRENT });
        previewContainer.appendChild(preview);
        var colorValue = this.convertToRgbString(this.rgb);
        preview.style.backgroundColor = colorValue;
        preview = this.createElement('span', { className: 'e-preview ' + PREVIOUS });
        previewContainer.appendChild(preview);
        preview.style.backgroundColor = colorValue;
    };
    ColorPicker.prototype.isPicker = function () {
        return !this.container.classList.contains(PALETTECONTENT);
    };
    ColorPicker.prototype.getPopupEle = function () {
        return this.container.parentElement;
    };
    ColorPicker.prototype.createNumericInput = function (element, value, label, max) {
        var _this = this;
        var numericInput = new NumericTextBox({
            value: value,
            placeholder: label,
            min: 0,
            max: max,
            format: '###.##',
            showSpinButton: false,
            floatLabelType: 'Always',
            enableRtl: this.enableRtl,
            enabled: !this.disabled,
            readonly: this.isPicker() ? false : true,
            change: function (args) {
                if (args.event) {
                    _this.inputHandler(args.event);
                }
            }
        });
        numericInput.createElement = this.createElement;
        numericInput.appendTo(element);
    };
    ColorPicker.prototype.createInput = function () {
        var isPicker = this.isPicker();
        var wrapper = this.getWrapper();
        if ((isPicker && !wrapper.classList.contains(HIDEVALUE)) || (!isPicker && wrapper.classList.contains(SHOWVALUE))) {
            var inputWrap = this.createElement('div', { className: INPUTWRAPPER });
            if (isPicker) {
                this.appendElement(inputWrap, 2);
            }
            else {
                this.appendElement(inputWrap, 1);
            }
            var container = this.createElement('div', { className: 'e-input-container' });
            inputWrap.appendChild(container);
            if (!wrapper.classList.contains(HIDEVALUESWITCH)) {
                this.appendValueSwitchBtn(inputWrap);
            }
            if (!wrapper.classList.contains(HIDEHEX)) {
                var hexInput = this.createElement('input', {
                    className: HEX,
                    attrs: { 'maxlength': '7', 'spellcheck': 'false' }
                });
                container.appendChild(hexInput);
                Input.createInput({
                    element: hexInput,
                    floatLabelType: 'Always',
                    properties: {
                        placeholder: 'HEX',
                        enableRtl: this.enableRtl,
                        enabled: !this.disabled,
                        readonly: this.isPicker() ? false : true
                    }
                }, this.createElement);
                Input.setValue(this.value.slice(0, 7), hexInput);
                hexInput.addEventListener('input', this.inputHandler.bind(this));
            }
            if (!wrapper.classList.contains(HIDERGBA)) {
                var label = void 0;
                var value = void 0;
                if (this.isRgb) {
                    label = 'RGB';
                    value = this.rgb;
                }
                else {
                    label = 'HSV';
                    value = this.hsv;
                }
                var clsName = ['rh', 'gs', 'bv'];
                for (var i = 0; i < 3; i++) {
                    this.createNumericInput(container.appendChild(this.createElement('input', { className: 'e-' + clsName[i] + '-value' })), value[i], label[i], 255);
                }
                if (this.enableOpacity) {
                    this.appendOpacityValue(container);
                }
            }
        }
    };
    ColorPicker.prototype.appendOpacityValue = function (container) {
        this.createNumericInput(container.appendChild(this.createElement('input', { className: OPACITY })), this.rgb[3] * 100, 'A', 100);
    };
    ColorPicker.prototype.appendValueSwitchBtn = function (targetEle) {
        var valueSwitchBtn = this.createElement('button', {
            className: 'e-icons e-css e-btn e-flat e-icon-btn ' + FORMATSWITCH
        });
        targetEle.appendChild(valueSwitchBtn);
        if (this.isPicker() && !this.getWrapper().classList.contains(HIDERGBA)) {
            valueSwitchBtn.addEventListener('click', this.formatSwitchHandler.bind(this));
        }
    };
    ColorPicker.prototype.createCtrlBtn = function () {
        if (this.modeSwitcher || this.showButtons) {
            this.l10n.setLocale(this.locale);
            var btnWrapper = this.createElement('div', { className: CTRLSWITCH });
            this.container.appendChild(btnWrapper);
            if (this.showButtons) {
                var controlBtnWrapper = this.createElement('div', { className: CTRLBTN });
                btnWrapper.appendChild(controlBtnWrapper);
                var apply = this.l10n.getConstant('Apply');
                controlBtnWrapper.appendChild(this.createElement('button', {
                    innerHTML: apply,
                    className: 'e-btn e-css e-flat e-primary e-small ' + APPLY,
                    attrs: { 'title': apply }
                }));
                var cancel = this.l10n.getConstant('Cancel');
                controlBtnWrapper.appendChild(this.createElement('button', {
                    innerHTML: cancel,
                    className: 'e-btn e-css e-flat e-small ' + CANCEL,
                    attrs: { 'title': cancel }
                }));
            }
            if (this.modeSwitcher) {
                this.appendModeSwitchBtn();
            }
        }
    };
    ColorPicker.prototype.appendModeSwitchBtn = function () {
        var modeSwitcher = this.createElement('button', {
            className: 'e-icons e-btn e-flat e-icon-btn ' + MODESWITCH, attrs: { title: this.l10n.getConstant('ModeSwitcher') }
        });
        select('.' + CTRLSWITCH, this.container).insertBefore(modeSwitcher, select('.' + CTRLBTN, this.container));
    };
    ColorPicker.prototype.createDragTooltip = function () {
        var _this = this;
        var tooltip = new Tooltip({
            opensOn: 'Custom',
            showTipPointer: false,
            cssClass: 'e-color-picker-tooltip',
            beforeOpen: function (args) {
                _this.tooltipEle = args.element;
            },
            animation: { open: { effect: 'None' }, close: { effect: 'None' } }
        });
        tooltip.createElement = this.createElement;
        tooltip.appendTo(this.container);
        tooltip.open(this.container);
        this.tooltipEle.style.zIndex = getZindexPartial(this.tooltipEle).toString();
        select('.e-tip-content', this.tooltipEle).appendChild(this.createElement('div', { className: 'e-tip-transparent' }));
    };
    ColorPicker.prototype.getTooltipInst = function () {
        return getInstance(this.container, Tooltip);
    };
    ColorPicker.prototype.setTooltipOffset = function (value) {
        this.getTooltipInst().offsetY = value;
    };
    ColorPicker.prototype.toggleDisabled = function (enable) {
        if (enable) {
            this.getWrapper().classList.add(DISABLED);
        }
        else {
            this.getWrapper().classList.remove(DISABLED);
        }
        if (this.showButtons) {
            ([].slice.call(selectAll('.e-btn', this.container))).forEach(function (ele) {
                if (enable) {
                    attributes(ele, { 'disabled': '' });
                }
                else {
                    ele.removeAttribute('disabled');
                }
            });
        }
    };
    ColorPicker.prototype.convertToRgbString = function (rgb) {
        return rgb.length ? rgb.length === 4 ? 'rgba(' + rgb.join() + ')' : 'rgb(' + rgb.join() + ')' : '';
    };
    ColorPicker.prototype.convertToHsvString = function (hsv) {
        return hsv.length === 4 ? 'hsva(' + hsv.join() + ')' : 'hsv(' + hsv.join() + ')';
    };
    ColorPicker.prototype.updateHsv = function () {
        this.hsv[1] = this.hsv[1] > 100 ? 100 : this.hsv[1];
        this.hsv[2] = this.hsv[2] > 100 ? 100 : this.hsv[2];
        this.setHandlerPosition();
    };
    ColorPicker.prototype.convertToOtherFormat = function (isKey) {
        if (isKey === void 0) { isKey = false; }
        var pValue = this.rgbToHex(this.rgb);
        this.rgb = this.hsvToRgb.apply(this, this.hsv);
        var cValue = this.rgbToHex(this.rgb);
        var rgba = this.convertToRgbString(this.rgb);
        this.updatePreview(rgba);
        this.updateInput(cValue);
        this.triggerEvent(cValue, pValue, rgba, isKey);
    };
    ColorPicker.prototype.updateInput = function (value) {
        var wrapper = this.getWrapper();
        if (!wrapper.classList.contains(HIDEVALUE)) {
            if (!wrapper.classList.contains(HIDEHEX)) {
                Input.setValue(value.substr(0, 7), select('.' + HEX, this.container));
            }
            if (!wrapper.classList.contains(HIDERGBA)) {
                if (this.isRgb) {
                    this.updateValue(this.rgb, false);
                }
                else {
                    this.updateValue(this.hsv, false);
                }
            }
        }
    };
    ColorPicker.prototype.updatePreview = function (value) {
        if (this.enableOpacity) {
            this.updateOpacitySliderBg();
        }
        select('.e-tip-transparent', this.tooltipEle).style.backgroundColor = value;
        select('.' + PREVIEW + ' .' + CURRENT, this.container).style.backgroundColor = value;
        select('.' + PREVIEW + ' .' + PREVIOUS, this.container).style.backgroundColor
            = this.convertToRgbString(this.hexToRgb(this.value));
    };
    ColorPicker.prototype.getDragHandler = function () {
        return select('.' + HANDLER, this.container);
    };
    ColorPicker.prototype.removeTileSelection = function () {
        var selectedEle = [].slice.call(selectAll('.' + SELECT, this.container.children[0]));
        selectedEle.forEach(function (ele) {
            ele.classList.remove(SELECT);
            ele.setAttribute('aria-selected', 'false');
        });
    };
    ColorPicker.prototype.convertRgbToNumberArray = function (value) {
        return (value.slice(value.indexOf('(') + 1, value.indexOf(')'))).split(',').map(function (n, i) {
            return (i !== 3) ? parseInt(n, 10) : parseFloat(n);
        });
    };
    /**
     * To get color value in specified type.
     *
     * @param {string} value - Specify the color value.
     * @param {string} type - Specify the type to which the specified color needs to be converted.
     * @method getValue
     * @returns {string} - Color value
     */
    ColorPicker.prototype.getValue = function (value, type) {
        if (!value) {
            value = this.value;
        }
        type = !type ? 'hex' : type.toLowerCase();
        if (value[0] === 'r') {
            var cValue = this.convertRgbToNumberArray(value);
            if (type === 'hex' || type === 'hexa') {
                var hex = this.rgbToHex(cValue);
                return type === 'hex' ? hex.slice(0, 7) : hex;
            }
            else {
                if (type === 'hsv') {
                    return this.convertToHsvString(this.rgbToHsv.apply(this, cValue.slice(0, 3)));
                }
                else {
                    if (type === 'hsva') {
                        return this.convertToHsvString(this.rgbToHsv.apply(this, cValue));
                    }
                    else {
                        return 'null';
                    }
                }
            }
        }
        else {
            if (value[0] === 'h') {
                var cValue = this.hsvToRgb.apply(this, this.convertRgbToNumberArray(value));
                if (type === 'rgba') {
                    return this.convertToRgbString(cValue);
                }
                else {
                    if (type === 'hex' || type === 'hexa') {
                        var hex = this.rgbToHex(cValue);
                        return type === 'hex' ? hex.slice(0, 7) : hex;
                    }
                    else {
                        if (type === 'rgb') {
                            return this.convertToRgbString(cValue.slice(0, 3));
                        }
                        else {
                            return 'null';
                        }
                    }
                }
            }
            else {
                value = this.roundValue(value);
                var rgb = this.hexToRgb(value);
                if (type === 'rgb' || type === 'hsv') {
                    rgb = rgb.slice(0, 3);
                }
                if (type === 'rgba' || type === 'rgb') {
                    return this.convertToRgbString(rgb);
                }
                else {
                    if (type === 'hsva' || type === 'hsv') {
                        return this.convertToHsvString(this.rgbToHsv.apply(this, rgb));
                    }
                    else {
                        if (type === 'hex') {
                            return value.slice(0, 7);
                        }
                        else {
                            if (type === 'a') {
                                return rgb[3].toString();
                            }
                            else {
                                return 'null';
                            }
                        }
                    }
                }
            }
        }
    };
    /**
     * To show/hide ColorPicker popup based on current state of the SplitButton.
     *
     * @method toggle
     * @returns {void}
     */
    ColorPicker.prototype.toggle = function () {
        if (this.container.parentElement.classList.contains('e-popup-close')) {
            this.splitBtn.toggle();
        }
        else {
            this.closePopup(null);
        }
    };
    /**
     * Get component name.
     *
     * @returns {string} - Module Name
     * @private
     */
    ColorPicker.prototype.getModuleName = function () {
        return 'colorpicker';
    };
    /**
     * Gets the properties to be maintained in the persisted state.
     *
     * @returns {string} - Persist data
     */
    ColorPicker.prototype.getPersistData = function () {
        return this.addOnPersist(['value']);
    };
    ColorPicker.prototype.wireEvents = function () {
        if (this.isPicker()) {
            var dragHandler = this.getDragHandler();
            EventHandler.add(dragHandler, 'keydown', this.pickerKeyDown, this);
            EventHandler.add(this.getHsvContainer(), 'mousedown touchstart', this.handlerDown, this);
            if (this.modeSwitcher || this.showButtons) {
                this.addCtrlSwitchEvent();
            }
            EventHandler.add(select('.' + PREVIOUS, this.container), 'click', this.previewHandler, this);
        }
        else {
            EventHandler.add(this.container, 'click', this.paletteClickHandler, this);
            EventHandler.add(this.container, 'keydown', this.paletteKeyDown, this);
        }
    };
    ColorPicker.prototype.formResetHandler = function () {
        this.value = this.initialInputValue;
        attributes(this.element, { 'value': this.initialInputValue });
    };
    ColorPicker.prototype.addCtrlSwitchEvent = function () {
        var ctrlSwitchBtn = select('.' + CTRLSWITCH, this.container);
        if (ctrlSwitchBtn) {
            EventHandler.add(ctrlSwitchBtn, 'click', this.btnClickHandler, this);
        }
    };
    ColorPicker.prototype.pickerKeyDown = function (e) {
        switch (e.keyCode) {
            case 39:
                this.handlerDragPosition(1, this.enableRtl ? -1 : 1, e);
                break;
            case 37:
                this.handlerDragPosition(1, this.enableRtl ? 1 : -1, e);
                break;
            case 38:
                this.handlerDragPosition(2, 1, e);
                break;
            case 40:
                this.handlerDragPosition(2, -1, e);
                break;
            case 13: {
                e.preventDefault();
                var cValue = this.rgbToHex(this.rgb);
                this.enterKeyHandler(cValue, e);
            }
        }
    };
    ColorPicker.prototype.enterKeyHandler = function (value, e) {
        this.triggerChangeEvent(value);
        if (!this.inline) {
            this.closePopup(e);
            this.splitBtn.element.focus();
        }
    };
    ColorPicker.prototype.closePopup = function (e) {
        var _this = this;
        var beforeCloseArgs = { element: this.container, event: e, cancel: false };
        this.trigger('beforeClose', beforeCloseArgs, function (observedcloseArgs) {
            if (!observedcloseArgs.cancel) {
                _this.splitBtn.toggle();
                _this.onPopupClose();
            }
        });
    };
    ColorPicker.prototype.triggerChangeEvent = function (value) {
        var hex = value.slice(0, 7);
        this.trigger('change', {
            currentValue: { hex: hex, rgba: this.convertToRgbString(this.rgb) },
            previousValue: { hex: this.value.slice(0, 7), rgba: this.convertToRgbString(this.hexToRgb(this.value)) },
            value: this.enableOpacity ? value : hex
        });
        if (this.enableOpacity) {
            this.setProperties({ 'value': value }, true);
        }
        else {
            this.setProperties({ 'value': hex }, true);
        }
        this.element.value = hex ? hex : '#000000';
    };
    ColorPicker.prototype.handlerDragPosition = function (prob, value, e) {
        e.preventDefault();
        this.hsv[prob] += value * (e.ctrlKey ? 1 : 3);
        if (this.hsv[prob] < 0) {
            this.hsv[prob] = 0;
        }
        this.updateHsv();
        this.convertToOtherFormat(true);
    };
    ColorPicker.prototype.handlerDown = function (e) {
        e.preventDefault();
        var x;
        var y;
        if (e.type === 'mousedown') {
            this.clientX = Math.abs(e.pageX - pageXOffset);
            this.clientY = Math.abs(e.pageY - pageYOffset);
            this.setTooltipOffset(8);
        }
        else {
            this.clientX = Math.abs(e.changedTouches[0].pageX - pageXOffset);
            this.clientY = Math.abs(e.changedTouches[0].pageY - pageYOffset);
            this.setTooltipOffset(-8);
        }
        this.setHsv(this.clientX, this.clientY);
        this.getDragHandler().style.transition = 'left .4s cubic-bezier(.25, .8, .25, 1), top .4s cubic-bezier(.25, .8, .25, 1)';
        this.updateHsv();
        this.convertToOtherFormat();
        this.getDragHandler().focus();
        EventHandler.add(document, 'mousemove touchmove', this.handlerMove, this);
        EventHandler.add(document, 'mouseup touchend', this.handlerEnd, this);
    };
    ColorPicker.prototype.handlerMove = function (e) {
        if (e.type !== 'touchmove') {
            e.preventDefault();
        }
        var x;
        var y;
        if (e.type === 'mousemove') {
            x = Math.abs(e.pageX - pageXOffset);
            y = Math.abs(e.pageY - pageYOffset);
        }
        else {
            x = Math.abs(e.changedTouches[0].pageX - pageXOffset);
            y = Math.abs(e.changedTouches[0].pageY - pageYOffset);
        }
        this.setHsv(x, y);
        var dragHandler = this.getDragHandler();
        var left = parseInt(dragHandler.style.left, 10);
        var top = parseInt(dragHandler.style.top, 10);
        this.updateHsv();
        this.convertToOtherFormat();
        this.getTooltipInst().refresh(dragHandler);
        if (!this.tooltipEle.style.transform) {
            if (Math.abs(this.clientX - x) > 8 || Math.abs(this.clientY - y) > 8) {
                select('.' + HSVAREA, this.container).style.cursor = 'pointer';
                dragHandler.style.transition = 'none';
                if (!this.inline) {
                    this.tooltipEle.style.zIndex = (parseInt(this.getPopupEle().style.zIndex, 10) + 1).toString();
                }
                this.tooltipEle.style.transform = 'rotate(45deg)';
                dragHandler.classList.add('e-hide-handler');
            }
        }
    };
    ColorPicker.prototype.setHsv = function (clientX, clientY) {
        var ele = select('.' + HSVAREA, this.container);
        var position = ele.getBoundingClientRect();
        if (this.enableRtl) {
            clientX = clientX > position.right ? 0 : Math.abs(clientX - position.right);
        }
        else {
            clientX = clientX > position.left ? Math.abs(clientX - position.left) : 0;
        }
        clientY = clientY > position.top ? Math.abs(clientY - position.top) : 0;
        this.hsv[2] = Math.round(Number(100 * (ele.offsetHeight -
            Math.max(0, Math.min(ele.offsetHeight, (clientY - ele.offsetTop)))) / ele.offsetHeight) * 10) / 10;
        this.hsv[1] =
            Math.round(Number(100 * (Math.max(0, Math.min(ele.offsetWidth, (clientX - ele.offsetLeft)))) / ele.offsetWidth) * 10) / 10;
    };
    ColorPicker.prototype.handlerEnd = function (e) {
        if (e.type !== 'touchend') {
            e.preventDefault();
        }
        EventHandler.remove(document, 'mousemove touchmove', this.handlerMove);
        EventHandler.remove(document, 'mouseup touchend', this.handlerEnd);
        var dragHandler = this.getDragHandler();
        select('.' + HSVAREA, this.container).style.cursor = '';
        if (this.tooltipEle.style.transform) {
            this.tooltipEle.style.transform = '';
            dragHandler.classList.remove('e-hide-handler');
        }
        if (!this.inline && !this.showButtons) {
            this.closePopup(e);
        }
    };
    ColorPicker.prototype.btnClickHandler = function (e) {
        var target = e.target;
        if (closest(target, '.' + MODESWITCH)) {
            e.stopPropagation();
            this.switchToPalette();
        }
        else {
            if (target.classList.contains(APPLY) || target.classList.contains(CANCEL)) {
                this.ctrlBtnClick(target, e);
            }
        }
    };
    ColorPicker.prototype.switchToPalette = function () {
        this.trigger('beforeModeSwitch', { element: this.container, mode: 'Palette' });
        this.unWireEvents();
        this.destroyOtherComp();
        detach(select('.e-slider-preview', this.container));
        if (!this.getWrapper().classList.contains(HIDEVALUE)) {
            remove(select('.' + INPUTWRAPPER, this.container));
        }
        detach(this.getHsvContainer());
        this.createPalette();
        this.firstPaletteFocus();
        this.createInput();
        this.refreshPopupPos();
        this.wireEvents();
        this.trigger('onModeSwitch', { element: this.container, mode: 'Palette' });
    };
    ColorPicker.prototype.refreshPopupPos = function () {
        if (!this.inline) {
            var popupEle = this.getPopupEle();
            popupEle.style.left = formatUnit(0 + pageXOffset);
            popupEle.style.top = formatUnit(0 + pageYOffset);
            this.getPopupInst().refreshPosition(this.splitBtn.element.parentElement);
        }
    };
    ColorPicker.prototype.formatSwitchHandler = function (e) {
        var target = e.target.parentElement;
        if (this.isRgb) {
            this.updateValue(this.hsv, true, 3, [360, 100, 100]);
            this.isRgb = false;
        }
        else {
            this.updateValue(this.rgb, true, 2);
            this.isRgb = true;
        }
    };
    ColorPicker.prototype.updateValue = function (value, format, idx, max) {
        var clsName = ['e-rh-value', 'e-gs-value', 'e-bv-value'];
        var inst;
        for (var i = 0, len = clsName.length; i < len; i++) {
            inst = getInstance(select('.' + clsName[i], this.container), NumericTextBox);
            inst.value = Math.round(value[i]);
            if (format) {
                inst.placeholder = clsName[i].substr(idx, 1).toUpperCase();
                inst.max = max ? max[i] : 255;
            }
            inst.dataBind();
        }
    };
    ColorPicker.prototype.previewHandler = function (e) {
        var target = e.target;
        var pValue = this.rgbToHex(this.rgb);
        this.rgb = this.convertRgbToNumberArray(target.style.backgroundColor);
        if (!this.rgb[3]) {
            this.rgb[3] = 1;
        }
        var cValue = this.rgbToHex(this.rgb);
        var hsv = this.rgbToHsv.apply(this, this.rgb);
        if (hsv[0] !== this.hsv[0]) {
            this.hueSlider.setProperties({ 'value': hsv[0] }, true);
            this.hueSlider.refresh();
        }
        this.setHsvContainerBg(hsv[0]);
        if (this.enableOpacity && hsv[3] !== this.hsv[3]) {
            this.opacitySlider.setProperties({ 'value': hsv[3] * 100 }, true);
            this.opacitySlider.refresh();
            this.updateOpacitySliderBg();
        }
        this.hsv = hsv;
        this.setHandlerPosition();
        this.updateInput(cValue);
        select('.' + PREVIEW + ' .' + CURRENT, this.container).style.backgroundColor = this.convertToRgbString(this.rgb);
        this.triggerEvent(cValue, pValue, this.convertToRgbString(this.rgb));
    };
    ColorPicker.prototype.paletteClickHandler = function (e) {
        e.preventDefault();
        var target = e.target;
        if (target.classList.contains(TILE)) {
            this.removeTileSelection();
            this.addTileSelection(target);
            if (target.classList.contains(NOCOLOR)) {
                this.noColorTile();
            }
            else {
                var cValue = target.getAttribute('aria-label');
                var pValue = this.rgbToHex(this.rgb);
                this.rgb = this.hexToRgb(this.roundValue(cValue));
                this.hsv = this.rgbToHsv.apply(this, this.rgb);
                if (this.getWrapper().classList.contains(SHOWVALUE)) {
                    this.updateInput(cValue);
                }
                this.triggerEvent(cValue, pValue, this.convertToRgbString(this.rgb));
            }
            if (!this.inline && !this.showButtons) {
                this.closePopup(e);
            }
        }
        else {
            if (closest(target, '.' + MODESWITCH)) {
                this.switchToPicker();
            }
            else {
                if (target.classList.contains(APPLY) || target.classList.contains(CANCEL)) {
                    this.ctrlBtnClick(target, e);
                }
                else {
                    if (this.getWrapper().classList.contains(SHOWVALUE) && closest(target, '.' + FORMATSWITCH)) {
                        this.formatSwitchHandler(e);
                    }
                }
            }
        }
    };
    ColorPicker.prototype.noColorTile = function (isKey) {
        if (isKey === void 0) { isKey = false; }
        var pValue = this.rgbToHex(this.rgb);
        this.rgb = [];
        this.hsv = [];
        this.triggerEvent('', pValue, '', isKey);
    };
    ColorPicker.prototype.switchToPicker = function () {
        var wrapper = this.getWrapper();
        this.trigger('beforeModeSwitch', { element: this.container, mode: 'Picker' });
        this.unWireEvents();
        ([].slice.call(selectAll('.' + PALETTES, this.container))).forEach(function (ele) {
            detach(ele);
        });
        if (wrapper.classList.contains(SHOWVALUE)) {
            detach(select('.' + INPUTWRAPPER, this.container));
        }
        this.container.style.width = '';
        var grpEle = select('.e-custom-palette', this.container);
        if (this.presetColors) {
            remove(grpEle);
        }
        this.createPicker();
        this.getDragHandler().focus();
        this.createInput();
        this.refreshPopupPos();
        this.wireEvents();
        this.trigger('onModeSwitch', { element: this.container, mode: 'Picker' });
    };
    ColorPicker.prototype.ctrlBtnClick = function (ele, e) {
        if (ele.classList.contains(APPLY)) {
            var cValue = this.rgbToHex(this.rgb);
            this.triggerChangeEvent(cValue);
        }
        if (!this.inline) {
            this.closePopup(e);
            this.splitBtn.element.focus();
        }
    };
    ColorPicker.prototype.paletteKeyDown = function (e) {
        var target = e.target;
        if (!target.classList.contains(PALETTES)) {
            return;
        }
        var selectedEle;
        var idx;
        var tiles = [].slice.call(selectAll('.' + TILE, target));
        var prevSelectedEle = (tiles.filter(function (tile) { return tile.classList.contains('e-selected'); })).pop();
        switch (!e.altKey && e.keyCode) {
            case 39:
                e.preventDefault();
                selectedEle = prevSelectedEle ? tiles[this.tilePosition(tiles, prevSelectedEle, this.enableRtl ? -1 : 1)]
                    : tiles[this.enableRtl ? tiles.length - 1 : 0];
                this.keySelectionChanges(selectedEle);
                break;
            case 37:
                e.preventDefault();
                selectedEle = prevSelectedEle ? tiles[this.tilePosition(tiles, prevSelectedEle, this.enableRtl ? 1 : -1)]
                    : tiles[this.enableRtl ? 0 : tiles.length - 1];
                this.keySelectionChanges(selectedEle);
                break;
            case 38:
                e.preventDefault();
                idx = prevSelectedEle ? this.tilePosition(tiles, prevSelectedEle, -this.columns) : 0;
                selectedEle = tiles[idx] ? tiles[idx] : tiles[idx - this.columns];
                this.keySelectionChanges(selectedEle);
                break;
            case 40:
                e.preventDefault();
                idx = prevSelectedEle ? this.tilePosition(tiles, prevSelectedEle, this.columns) : tiles.length - 1;
                if (tiles[idx]) {
                    selectedEle = tiles[idx];
                }
                else {
                    idx %= tiles.length;
                    idx += tiles[tiles.length - 1].parentElement.childElementCount;
                    selectedEle = tiles[idx];
                }
                this.keySelectionChanges(selectedEle);
                break;
            case 13:
                e.preventDefault();
                if (prevSelectedEle) {
                    var cValue = prevSelectedEle.getAttribute('aria-label');
                    this.enterKeyHandler(cValue ? cValue : '', e);
                }
        }
    };
    ColorPicker.prototype.keySelectionChanges = function (newEle) {
        this.removeTileSelection();
        this.addTileSelection(newEle);
        if (newEle.classList.contains(NOCOLOR)) {
            this.noColorTile(true);
        }
        else {
            var cValue = newEle.getAttribute('aria-label');
            var pValue = this.rgbToHex(this.rgb);
            this.rgb = this.hexToRgb(cValue);
            this.hsv = this.rgbToHsv.apply(this, this.rgb);
            if (this.getWrapper().classList.contains(SHOWVALUE)) {
                this.updateInput(cValue);
            }
            this.triggerEvent(cValue, pValue, this.convertToRgbString(this.rgb), true);
        }
    };
    ColorPicker.prototype.tilePosition = function (items, element, cIdx) {
        items = Array.prototype.slice.call(items);
        var n = items.length;
        var emptyCount = this.columns - items[n - 1].parentElement.childElementCount;
        var idx = items.indexOf(element);
        idx += cIdx;
        if (idx < 0) {
            idx += n + emptyCount;
        }
        else {
            idx %= n + emptyCount;
        }
        return idx;
    };
    ColorPicker.prototype.inputHandler = function (e) {
        var target = e.target;
        if (!target.value.length) {
            return;
        }
        var hsv;
        var pValue;
        var label = select('.e-float-text', target.parentElement).textContent;
        switch (label) {
            case 'HEX': {
                var value = '';
                if ((target.value[0] === '#' && target.value.length !== 5) || (target.value[0] !== '#' && target.value.length !== 4)) {
                    value = this.roundValue(target.value);
                }
                if (value.length === 9) {
                    pValue = this.rgbToHex(this.rgb);
                    this.rgb = this.hexToRgb(value + value.substr(-2));
                    this.inputValueChange(this.rgbToHsv.apply(this, this.rgb), pValue, target.value);
                }
                else {
                    return;
                }
                break;
            }
            case 'R':
                if (this.rgb[0] !== Number(target.value)) {
                    pValue = this.rgbToHex(this.rgb);
                    this.rgb[0] = Number(target.value);
                    hsv = this.rgbToHsv.apply(this, this.rgb);
                    this.inputValueChange(hsv, pValue);
                }
                break;
            case 'G':
                if (this.rgb[1] !== Number(target.value)) {
                    pValue = this.rgbToHex(this.rgb);
                    this.rgb[1] = Number(target.value);
                    hsv = this.rgbToHsv.apply(this, this.rgb);
                    this.inputValueChange(hsv, pValue);
                }
                break;
            case 'B':
                if (this.rgb[2] !== Number(target.value)) {
                    pValue = this.rgbToHex(this.rgb);
                    this.rgb[2] = Number(target.value);
                    hsv = this.rgbToHsv.apply(this, this.rgb);
                    this.inputValueChange(hsv, pValue);
                }
                break;
            case 'H':
                this.hueSlider.value = Number(target.value);
                break;
            case 'S':
                if (this.hsv[1] !== Number(target.value)) {
                    this.hsv[1] = Number(target.value);
                    this.updateHsv();
                    this.convertToOtherFormat();
                }
                break;
            case 'V':
                if (this.hsv[2] !== Number(target.value)) {
                    this.hsv[2] = Number(target.value);
                    this.updateHsv();
                    this.convertToOtherFormat();
                }
                break;
            case 'A':
                this.opacitySlider.value = Number(target.value);
                break;
        }
    };
    ColorPicker.prototype.inputValueChange = function (hsv, pValue, value) {
        if (hsv[0] !== this.hsv[0]) {
            this.hueSlider.setProperties({ 'value': hsv[0] }, true);
            this.hueSlider.refresh();
            this.setHsvContainerBg(hsv[0]);
        }
        this.hsv = hsv;
        var cValue = this.rgbToHex(this.rgb);
        this.setHandlerPosition();
        this.updateInput(value ? value : cValue);
        var rgba = this.convertToRgbString(this.rgb);
        this.updatePreview(rgba);
        this.triggerEvent(cValue, pValue, rgba);
    };
    ColorPicker.prototype.triggerEvent = function (cValue, pValue, rgba, isKey) {
        if (isKey === void 0) { isKey = false; }
        var hex = cValue.slice(0, 7);
        if (!this.showButtons && !isKey) {
            this.trigger('change', { currentValue: { hex: hex, rgba: rgba },
                previousValue: { hex: this.value.slice(0, 7), rgba: this.convertToRgbString(this.hexToRgb(this.value)) }, value: cValue });
            this.setProperties({ 'value': cValue }, true);
            this.element.value = hex ? hex : '#000000';
        }
        else {
            this.trigger('select', {
                currentValue: { hex: hex, rgba: rgba },
                previousValue: { hex: pValue.slice(0, 7), rgba: this.convertToRgbString(this.hexToRgb(pValue)) }
            });
        }
    };
    /**
     * Removes the component from the DOM and detaches all its related event handlers.
     * Also it maintains the initial input element from the DOM.
     *
     * @method destroy
     * @returns {void}
     */
    ColorPicker.prototype.destroy = function () {
        var _this = this;
        var wrapper = this.getWrapper();
        _super.prototype.destroy.call(this);
        ['tabindex', 'spellcheck'].forEach(function (attr) { _this.element.removeAttribute(attr); });
        if (this.inline) {
            this.unWireEvents();
            this.destroyOtherComp();
        }
        else {
            if (this.isPopupOpen()) {
                this.unWireEvents();
                this.destroyOtherComp();
            }
            this.splitBtn.destroy();
            this.splitBtn = null;
        }
        this.tileRipple();
        this.tileRipple = null;
        this.ctrlBtnRipple();
        this.ctrlBtnRipple = null;
        if (this.element.nextElementSibling) {
            detach(this.element.nextElementSibling);
        }
        if (wrapper) {
            wrapper.parentElement.insertBefore(this.element, wrapper);
            detach(wrapper);
        }
        this.container = null;
        if (this.formElement) {
            EventHandler.remove(this.formElement, 'reset', this.formResetHandler);
        }
    };
    ColorPicker.prototype.destroyOtherComp = function () {
        if (this.isPicker()) {
            this.hueSlider.destroy();
            if (this.enableOpacity) {
                this.opacitySlider.destroy();
                this.opacitySlider = null;
            }
            this.hueSlider = null;
            var tooltipInst = this.getTooltipInst();
            tooltipInst.close();
            tooltipInst.destroy();
            this.tooltipEle = null;
        }
    };
    ColorPicker.prototype.isPopupOpen = function () {
        return this.getPopupEle().classList.contains('e-popup-open');
    };
    ColorPicker.prototype.unWireEvents = function () {
        if (this.isPicker()) {
            var wrapper = this.getWrapper();
            var dragHandler = this.getDragHandler();
            EventHandler.remove(dragHandler, 'keydown', this.pickerKeyDown);
            EventHandler.remove(this.getHsvContainer(), 'mousedown touchstart', this.handlerDown);
            if (this.modeSwitcher || this.showButtons) {
                EventHandler.remove(select('.' + CTRLSWITCH, this.container), 'click', this.btnClickHandler);
            }
            EventHandler.remove(select('.' + PREVIOUS, this.container), 'click', this.previewHandler);
        }
        else {
            EventHandler.remove(this.container, 'click', this.paletteClickHandler);
            EventHandler.remove(this.container, 'keydown', this.paletteKeyDown);
        }
    };
    ColorPicker.prototype.roundValue = function (value) {
        if (!value) {
            return '';
        }
        if (value[0] !== '#') {
            value = '#' + value;
        }
        var len = value.length;
        if (len === 4) {
            value += 'f';
            len = 5;
        }
        if (len === 5) {
            var tempValue = '';
            for (var i = 1, len_1 = value.length; i < len_1; i++) {
                tempValue += (value.charAt(i) + value.charAt(i));
            }
            value = '#' + tempValue;
            len = 9;
        }
        if (len === 7) {
            value += 'ff';
        }
        return value;
    };
    ColorPicker.prototype.hexToRgb = function (hex) {
        if (!hex) {
            return [];
        }
        hex = hex.trim();
        if (hex.length !== 9) {
            hex = this.roundValue(hex);
        }
        var opacity = Number((parseInt(hex.slice(-2), 16) / 255).toFixed(2));
        hex = hex.slice(1, 7);
        var bigInt = parseInt(hex, 16);
        var h = [];
        h.push((bigInt >> 16) & 255);
        h.push((bigInt >> 8) & 255);
        h.push(bigInt & 255);
        h.push(opacity);
        return h;
    };
    ColorPicker.prototype.rgbToHsv = function (r, g, b, opacity) {
        if (this.rgb && !this.rgb.length) {
            return [];
        }
        r /= 255;
        g /= 255;
        b /= 255;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var h;
        var v = max;
        var d = max - min;
        var s = max === 0 ? 0 : d / max;
        if (max === min) {
            h = 0;
        }
        else {
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        var hsv = [Math.round(h * 360), Math.round(s * 1000) / 10, Math.round(v * 1000) / 10];
        if (!isNullOrUndefined(opacity)) {
            hsv.push(opacity);
        }
        return hsv;
    };
    ColorPicker.prototype.hsvToRgb = function (h, s, v, opacity) {
        var r;
        var g;
        var b;
        s /= 100;
        v /= 100;
        if (s === 0) {
            r = g = b = v;
            return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), opacity];
        }
        h /= 60;
        var i = Math.floor(h);
        var f = h - i;
        var p = v * (1 - s);
        var q = v * (1 - s * f);
        var t = v * (1 - s * (1 - f));
        switch (i) {
            case 0:
                r = v;
                g = t;
                b = p;
                break;
            case 1:
                r = q;
                g = v;
                b = p;
                break;
            case 2:
                r = p;
                g = v;
                b = t;
                break;
            case 3:
                r = p;
                g = q;
                b = v;
                break;
            case 4:
                r = t;
                g = p;
                b = v;
                break;
            default:
                r = v;
                g = p;
                b = q;
        }
        var rgb = [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
        if (!isNullOrUndefined(opacity)) {
            rgb.push(opacity);
        }
        return rgb;
    };
    ColorPicker.prototype.rgbToHex = function (rgb) {
        return rgb.length ? ('#' + this.hex(rgb[0]) + this.hex(rgb[1]) + this.hex(rgb[2]) +
            (!isNullOrUndefined(rgb[3]) ? (rgb[3] !== 0 ? (Math.round(rgb[3] * 255) + 0x10000).toString(16).substr(-2) : '00') : '')) : '';
    };
    ColorPicker.prototype.hex = function (x) {
        return ('0' + x.toString(16)).slice(-2);
    };
    ColorPicker.prototype.changeModeSwitcherProp = function (prop) {
        var ctrlSwitchWrapper = select('.' + CTRLSWITCH, this.container);
        if (prop) {
            if (ctrlSwitchWrapper) {
                this.appendModeSwitchBtn();
            }
            else {
                this.createCtrlBtn();
                if (this.isPicker() && !this.disabled) {
                    this.addCtrlSwitchEvent();
                }
            }
        }
        else {
            if (ctrlSwitchWrapper) {
                if (this.showButtons) {
                    detach(select('.' + MODESWITCH, ctrlSwitchWrapper));
                }
                else {
                    remove(ctrlSwitchWrapper);
                }
            }
        }
    };
    ColorPicker.prototype.changeShowBtnProps = function (prop) {
        var ctrlBtnWrapper = select('.' + CTRLSWITCH, this.container);
        if (prop) {
            if (ctrlBtnWrapper) {
                remove(ctrlBtnWrapper);
            }
            this.createCtrlBtn();
            if (this.isPicker() && !this.disabled) {
                this.addCtrlSwitchEvent();
            }
        }
        else {
            if (this.modeSwitcher) {
                detach(select('.' + CTRLBTN, ctrlBtnWrapper));
            }
            else {
                remove(ctrlBtnWrapper);
            }
        }
    };
    ColorPicker.prototype.changeValueProp = function (newProp) {
        if (this.isPicker()) {
            this.rgb = this.hexToRgb(newProp);
            this.hsv = this.rgbToHsv.apply(this, this.rgb);
            this.setHandlerPosition();
            detach(closest(this.hueSlider.element, '.e-slider-preview'));
            this.createSlider();
            this.setHsvContainerBg();
            this.updateInput(newProp);
            if (this.rgb.length === 4) {
                this.updateOpacityInput(this.rgb[3] * 100);
            }
        }
        else {
            this.removeTileSelection();
            var ele = this.container.querySelector('span[aria-label="' + this.roundValue(newProp) + '"]');
            if (ele) {
                this.addTileSelection(ele);
            }
        }
    };
    ColorPicker.prototype.setInputEleProps = function (prop) {
        remove(select('.' + INPUTWRAPPER, this.container));
        this.createInput();
    };
    ColorPicker.prototype.changeDisabledProp = function (newProp) {
        if (this.isPicker()) {
            this.hueSlider.enabled = !newProp;
            this.opacitySlider.enabled = !newProp;
            this.setInputEleProps(newProp);
        }
        if (newProp) {
            this.toggleDisabled(true);
            this.unWireEvents();
        }
        else {
            this.toggleDisabled(false);
            this.wireEvents();
        }
    };
    ColorPicker.prototype.changeCssClassProps = function (newProp, oldProp) {
        var wrapper = this.getWrapper();
        var popupWrapper = this.getPopupEle();
        if (oldProp) {
            removeClass([wrapper, popupWrapper], oldProp.split(' '));
        }
        if (newProp) {
            addClass([wrapper, popupWrapper], newProp.split(' '));
        }
    };
    ColorPicker.prototype.changeRtlProps = function (newProp) {
        if (newProp) {
            addClass([this.getWrapper()], 'e-rtl');
        }
        else {
            removeClass([this.getWrapper()], 'e-rtl');
        }
    };
    ColorPicker.prototype.changePaletteProps = function () {
        detach(this.container.children[0]);
        this.container.style.width = '';
        this.createPalette();
    };
    ColorPicker.prototype.changeOpacityProps = function (newProp) {
        var wrapper = this.getWrapper();
        if (newProp) {
            removeClass([this.container.parentElement], HIDEOPACITY);
            this.createOpacitySlider(select('.e-colorpicker-slider', this.container).appendChild(this.createElement('div', { className: 'e-opacity-slider' })));
            if (!wrapper.classList.contains(HIDEVALUE) && !wrapper.classList.contains(HIDERGBA)) {
                this.appendOpacityValue(select('.e-input-container', this.container));
            }
        }
        else {
            addClass([this.container.parentElement], HIDEOPACITY);
            this.opacitySlider.destroy();
            remove(this.opacitySlider.element);
            this.opacitySlider = null;
            if (!wrapper.classList.contains(HIDEVALUE) && !wrapper.classList.contains(HIDERGBA)) {
                remove(select('.' + OPACITY, this.container).parentElement);
            }
        }
    };
    /**
     * Called internally if any of the property value changed.
     *
     * @param  {ColorPickerModel} newProp - Specifies new properties
     * @param  {ColorPickerModel} oldProp - Specifies old properties
     * @returns {void}
     * @private
     */
    ColorPicker.prototype.onPropertyChanged = function (newProp, oldProp) {
        var _this = this;
        if (!isNullOrUndefined(newProp.value)) {
            var value = this.roundValue(newProp.value);
            if (value.length === 9) {
                this.element.value = this.roundValue(value).slice(0, 7);
                var preview = this.splitBtn && select('.' + SPLITPREVIEW, this.splitBtn.element);
                if (preview) {
                    preview.style.backgroundColor = this.convertToRgbString(this.hexToRgb(newProp.value));
                }
            }
            else {
                this.value = oldProp.value;
            }
        }
        if (!this.inline && isNullOrUndefined(newProp.inline)) {
            var otherCompModel = ['disabled', 'enableRtl'];
            this.splitBtn.setProperties(getModel(newProp, otherCompModel));
            if (!this.isPopupOpen()) {
                this.changeCssClassProps(newProp.cssClass, oldProp.cssClass);
                this.changeRtlProps(newProp.enableRtl);
                return;
            }
        }
        var _loop_1 = function (prop) {
            switch (prop) {
                case 'inline':
                    if (newProp.inline) {
                        this_1.getWrapper().appendChild(this_1.container);
                        this_1.splitBtn.destroy();
                        detach(this_1.element.nextElementSibling);
                        if (!this_1.container.children.length) {
                            this_1.createWidget();
                        }
                    }
                    else {
                        this_1.destroyOtherComp();
                        this_1.unWireEvents();
                        this_1.container.innerHTML = '';
                        this_1.createSplitBtn();
                    }
                    break;
                case 'cssClass': {
                    this_1.changeCssClassProps(newProp.cssClass, oldProp.cssClass);
                    var props = newProp.cssClass.split(' ').concat(oldProp.cssClass.split(' '));
                    props = props.reduce(function (a, b) { if (a.indexOf(b) < 0) {
                        a.push(b);
                    } return a; }, []);
                    var count_1 = 0;
                    props.forEach(function (cls) {
                        if (count_1 === 0 &&
                            (cls === HIDEVALUE || cls === HIDEVALUESWITCH || cls === SHOWVALUE || cls === HIDEHEX || cls === HIDERGBA)) {
                            var inputWrap = select('.' + INPUTWRAPPER, _this.container);
                            if (inputWrap) {
                                remove(select('.' + INPUTWRAPPER, _this.container));
                            }
                            _this.createInput();
                            count_1++;
                        }
                    });
                    break;
                }
                case 'enableRtl':
                    if (this_1.isPicker()) {
                        this_1.hueSlider.enableRtl = newProp.enableRtl;
                        if (this_1.enableOpacity) {
                            this_1.opacitySlider.enableRtl = newProp.enableRtl;
                        }
                        this_1.setInputEleProps(newProp.enableRtl);
                    }
                    this_1.changeRtlProps(newProp.enableRtl);
                    break;
                case 'disabled':
                    this_1.changeDisabledProp(newProp.disabled);
                    break;
                case 'value':
                    if (this_1.value !== oldProp.value) {
                        this_1.changeValueProp(newProp.value);
                    }
                    break;
                case 'showButtons':
                    this_1.changeShowBtnProps(newProp.showButtons);
                    break;
                case 'mode':
                    if (newProp.mode === 'Picker') {
                        this_1.switchToPicker();
                    }
                    else {
                        this_1.switchToPalette();
                    }
                    break;
                case 'modeSwitcher':
                    this_1.changeModeSwitcherProp(newProp.modeSwitcher);
                    break;
                case 'columns':
                case 'presetColors':
                    if (!this_1.isPicker()) {
                        this_1.changePaletteProps();
                    }
                    break;
                case 'noColor':
                    if (newProp.noColor) {
                        if (this_1.mode === 'Palette' && !this_1.modeSwitcher) {
                            this_1.setNoColor();
                        }
                    }
                    else {
                        this_1.changePaletteProps();
                    }
                    break;
                case 'enableOpacity':
                    this_1.changeOpacityProps(newProp.enableOpacity);
                    break;
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            _loop_1(prop);
        }
    };
    /**
     * Sets the focus to Colorpicker
     * its native method
     *
     * @public
     * @returns {void}
     */
    ColorPicker.prototype.focusIn = function () {
        this.element.parentElement.focus();
    };
    __decorate([
        Property('#008000ff')
    ], ColorPicker.prototype, "value", void 0);
    __decorate([
        Property('')
    ], ColorPicker.prototype, "cssClass", void 0);
    __decorate([
        Property(false)
    ], ColorPicker.prototype, "disabled", void 0);
    __decorate([
        Property('Picker')
    ], ColorPicker.prototype, "mode", void 0);
    __decorate([
        Property(true)
    ], ColorPicker.prototype, "modeSwitcher", void 0);
    __decorate([
        Property(null)
    ], ColorPicker.prototype, "presetColors", void 0);
    __decorate([
        Property(true)
    ], ColorPicker.prototype, "showButtons", void 0);
    __decorate([
        Property(10)
    ], ColorPicker.prototype, "columns", void 0);
    __decorate([
        Property(false)
    ], ColorPicker.prototype, "inline", void 0);
    __decorate([
        Property(false)
    ], ColorPicker.prototype, "noColor", void 0);
    __decorate([
        Property(false)
    ], ColorPicker.prototype, "enablePersistence", void 0);
    __decorate([
        Property(true)
    ], ColorPicker.prototype, "enableOpacity", void 0);
    __decorate([
        Event()
    ], ColorPicker.prototype, "select", void 0);
    __decorate([
        Event()
    ], ColorPicker.prototype, "change", void 0);
    __decorate([
        Event()
    ], ColorPicker.prototype, "beforeTileRender", void 0);
    __decorate([
        Event()
    ], ColorPicker.prototype, "beforeOpen", void 0);
    __decorate([
        Event()
    ], ColorPicker.prototype, "open", void 0);
    __decorate([
        Event()
    ], ColorPicker.prototype, "beforeClose", void 0);
    __decorate([
        Event()
    ], ColorPicker.prototype, "beforeModeSwitch", void 0);
    __decorate([
        Event()
    ], ColorPicker.prototype, "onModeSwitch", void 0);
    __decorate([
        Event()
    ], ColorPicker.prototype, "created", void 0);
    ColorPicker = __decorate([
        NotifyPropertyChanges
    ], ColorPicker);
    return ColorPicker;
}(Component));
export { ColorPicker };
