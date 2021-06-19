"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e2e_1 = require("@syncfusion/ej2-base/helpers/e2e");
class ScheduleHelper extends e2e_1.TestHelper {
    constructor(id, wrapperFn) {
        super();
        this.id = id;
        if (wrapperFn !== undefined) {
            this.wrapperFn = wrapperFn;
        }
        return this;
    }
    getElement() {
        return this.selector('#' + this.id);
    }
    getEventWindow() {
        return this.selector('#' + this.id + '_dialog_wrapper');
    }
    getAlertDialog() {
        return this.selector('#' + this.id + 'QuickDialog');
    }
    getQuickPopup() {
        return this.selector('#' + this.id + ' .e-quick-popup-wrapper');
    }
    getMorePopup() {
        return this.selector('#' + this.id + ' .e-more-popup-wrapper');
    }
}
exports.ScheduleHelper = ScheduleHelper;
