"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e2e_1 = require("@syncfusion/ej2-base/helpers/e2e");
class timepickerHelper extends e2e_1.TestHelper {
    constructor(id, wrapperFn) {
        super();
        this.id = id;
        if (wrapperFn !== undefined) {
            this.wrapperFn = wrapperFn;
        }
        return this;
    }
    selector(arg) {
        return (this.wrapperFn ? this.wrapperFn(arg) : arg);
    }
    getElement() {
        return this.selector('#' + this.id);
    }
    getTimePickerInput() {
        return this.selector('.e-control.e-timepicker.e-lib.e-input');
    }
    getTimePickerIcon() {
        return this.selector('.e-time-wrapper .e-time-icon');
    }
    getTimePickerClearIcon() {
        return this.selector('.e-time-wrapper .e-clear-icon');
    }
    getTimePicker() {
        return this.selector('.e-input-group.e-control-wrapper');
    }
    getTimePickerContent() {
        return this.selector('.e-timepicker .e-content');
    }
    getTimePickerListContent() {
        return this.selector('.e-timepicker .e-content .e-list-parent');
    }
    getTimePickerListItem() {
        return this.selector('.e-timepicker .e-content .e-list-parent .e-list-item');
    }
    getTimePickerDisabledTime() {
        return this.selector('.e-timepicker .e-content .e-list-parent .e-list-item.e-disabled');
    }
    getTimePickerSelectedTime() {
        return this.selector('.e-timepicker .e-content .e-list-parent .e-list-item.e-active');
    }
}
exports.timepickerHelper = timepickerHelper;
