import { TestHelper } from '@syncfusion/ej2-base/helpers/e2e';
/**
 * E2E test helpers for Tooltip to easily interact and the test the component
 */
export declare class TooltipHelper extends TestHelper {
    id: string;
    wrapperFn: Function;
    /**
     * Initialize the Tooltip E2E helpers
     * @param id Element id of the tooltip element
     * @param wrapperFn Pass the wrapper function
     */
    constructor(id: string, wrapperFn: Function);
    /**
     * Used to get root element of the Tooltip component
     */
    getElement(): any;
    /**
     * Used to get the opened tooltip popup element
     */
    getTooltipPopup(): any;
    /**
     * Used to get the opened tooltip close button.
     * Works only when `isSticky` is enabled
     */
    getTooltipPopupCloseButton(): any;
}
