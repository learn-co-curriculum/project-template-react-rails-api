"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e2e_1 = require("@syncfusion/ej2-base/helpers/e2e");
/**
 * E2E test helpers for slider to easily interact and the test the component
 */
class SliderHelper extends e2e_1.TestHelper {
    /**
     * Initialize the Slider E2E helpers
     * @param id Element id of the slider element
     * @param wrapperFn Pass the wrapper function
     */
    constructor(id, wrapperFn) {
        super();
        this.id = id;
        if (wrapperFn !== undefined) {
            this.wrapperFn = wrapperFn;
        }
        return this;
    }
    /**
     * Used get root element or id of the Slider component
     */
    getElement() {
        return this.selector('#' + this.id);
    }
    /**
     * Used to get the tooltip element of slider component.
     * @param tooltipCssClass cssClass for the slider tooltip element
     * if assigned in the tooltip property of slider.
     *
     * Works only if the `tooltip` is used in the slider.
     */
    getSliderTooltipElement(tooltipCssClass) {
        let tooltipSelector = '.e-slider-tooltip[id^="tooltip_"]';
        if (tooltipCssClass)
            tooltipSelector += `.${tooltipCssClass}`;
        return this.selector(tooltipSelector);
    }
    /**
     * Used to get the slider components ticks element.
     *
     * Works only if `ticks` is enabled for slider.
     */
    getSliderTickElement() {
        return this.selector(`#${this.id} > ul`);
    }
    /**
     * Used to get the first button element of the slider component.
     *
     * Works only if `showButtons` is enabled for slider.
     */
    getFirstButtonElement() {
        if (typeof cy !== 'undefined') {
            return this.selector(`#${this.id}`)
                .parent('.e-slider-container')
                .get('.e-slider-button.e-first-button');
        }
        if (typeof browser !== 'undefined') {
            return element(by.css(`#${this.id}`))
                .element(by.xpath('..'))
                .element(by.css('.e-slider-button.e-first-button'));
        }
    }
    /**
     * Used to get the second button element of the slider component.
     *
     * Works only if `showButtons` is enabled for slider.
     */
    getSecondButtonElement() {
        if (typeof cy !== 'undefined') {
            return this.selector(`#${this.id}`)
                .parent('.e-slider-container')
                .get('.e-slider-button.e-second-button');
        }
        if (typeof browser !== 'undefined') {
            return element(by.css(`#${this.id}`))
                .element(by.xpath('..'))
                .element(by.css('.e-slider-button.e-second-button'));
        }
    }
}
exports.SliderHelper = SliderHelper;
