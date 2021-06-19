"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e2e_1 = require("@syncfusion/ej2-base/helpers/e2e");
class textboxHelper extends e2e_1.TestHelper {
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
    getWrapperElement() {
        return this.selector('.e-float-input.e-control-wrapper');
    }
    getInputElement() {
        return this.selector('.e-float-input.e-control-wrapper .e-control.e-textbox.e-lib');
    }
    getClearIconElement() {
        return this.selector('.e-float-input.e-control-wrapper .e-float-line .e-clear-icon');
    }
    getFloatLabelElement() {
        return this.selector('#' + 'label_' + this.id);
    }
    setModel(property, value) {
        let cy;
        return cy.get('#' + this.id).then((ele) => {
            return ele[0].ej2_instances[0][property] = value;
        });
    }
}
exports.textboxHelper = textboxHelper;
