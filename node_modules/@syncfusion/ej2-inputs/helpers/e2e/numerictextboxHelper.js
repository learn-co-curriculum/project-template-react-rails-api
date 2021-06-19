"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e2e_1 = require("@syncfusion/ej2-base/helpers/e2e");
class numerictextboxHelper extends e2e_1.TestHelper {
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
    getWrapperElement() {
        return this.selector('.e-control-wrapper.e-numeric.e-input-group');
    }
    getInputElement() {
        return this.selector('.e-control-wrapper.e-numeric.e-input-group .e-numerictextbox');
    }
    getUpIconElement() {
        return this.selector('.e-control-wrapper.e-numeric.e-input-group .e-input-group-icon.e-spin-up');
    }
    getDownIconElement() {
        return this.selector('.e-control-wrapper.e-numeric.e-input-group .e-input-group-icon.e-spin-down');
    }
    getFocusElement() {
        return this.selector('.e-control-wrapper.e-numeric.e-input-group.e-input-focus');
    }
    getClearIconElement() {
        return this.selector('.e-control-wrapper.e-numeric.e-input-group .e-clear-icon');
    }
    getFloatLabelElement() {
        return this.selector('#' + 'label_' + this.id);
    }
}
exports.numerictextboxHelper = numerictextboxHelper;
