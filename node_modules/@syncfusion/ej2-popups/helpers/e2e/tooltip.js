"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e2e_1 = require("@syncfusion/ej2-base/helpers/e2e");
/**
 * E2E test helpers for Tooltip to easily interact and the test the component
 */
class TooltipHelper extends e2e_1.TestHelper {
    /**
     * Initialize the Tooltip E2E helpers
     * @param id Element id of the tooltip element
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
     * Used to get root element of the Tooltip component
     */
    getElement() {
        return this.selector('#' + this.id);
    }
    /**
     * Used to get the opened tooltip popup element
     */
    getTooltipPopup() {
        return this.selector(`[id^="${this.id}_"]`);
    }
    /**
     * Used to get the opened tooltip close button.
     * Works only when `isSticky` is enabled
     */
    getTooltipPopupCloseButton() {
        return this.selector(`[id^="${this.id}_"] > div.e-icons.e-tooltip-close`);
    }
}
exports.TooltipHelper = TooltipHelper;
