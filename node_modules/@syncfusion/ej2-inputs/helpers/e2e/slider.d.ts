import { TestHelper } from '@syncfusion/ej2-base/helpers/e2e';
/**
 * E2E test helpers for slider to easily interact and the test the component
 */
export declare class SliderHelper extends TestHelper {
    id: string;
    wrapperFn: Function;
    /**
     * Initialize the Slider E2E helpers
     * @param id Element id of the slider element
     * @param wrapperFn Pass the wrapper function
     */
    constructor(id: string, wrapperFn: Function);
    /**
     * Used get root element or id of the Slider component
     */
    getElement(): any;
    /**
     * Used to get the tooltip element of slider component.
     * @param tooltipCssClass cssClass for the slider tooltip element
     * if assigned in the tooltip property of slider.
     *
     * Works only if the `tooltip` is used in the slider.
     */
    getSliderTooltipElement(tooltipCssClass?: string): any;
    /**
     * Used to get the slider components ticks element.
     *
     * Works only if `ticks` is enabled for slider.
     */
    getSliderTickElement(): any;
    /**
     * Used to get the first button element of the slider component.
     *
     * Works only if `showButtons` is enabled for slider.
     */
    getFirstButtonElement(): any;
    /**
     * Used to get the second button element of the slider component.
     *
     * Works only if `showButtons` is enabled for slider.
     */
    getSecondButtonElement(): any;
}
