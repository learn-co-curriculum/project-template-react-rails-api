"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e2e_1 = require("@syncfusion/ej2-base/helpers/e2e");
class AccordionHelper extends e2e_1.TestHelper {
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
    getItemElement() {
        return this.selector('#' + this.id + ' .e-acrdn-item');
    }
    getHeaderElement() {
        return this.selector('#' + this.id + ' .e-acrdn-item .e-acrdn-header');
    }
    getPanelElement() {
        return this.selector('#' + this.id + ' .e-acrdn-item .e-acrdn-panel');
    }
    getActiveElement() {
        return this.selector('#' + this.id + ' .e-acrdn-item.e-selected.e-active');
    }
    getExpandStateElement() {
        return this.selector('#' + this.id + ' .e-acrdn-item.e-expand-state');
    }
    setModel(property, value) {
        let cy;
        return cy.get('#' + this.id).then((ele) => {
            return ele[0].ej2_instances[0][property] = value;
        });
    }
    getModel(property) {
        let cy;
        return cy.get('#' + this.id).then((ele) => {
            return ele[0].ej2_instances[0][property];
        });
    }
    invoke(functionName, args = []) {
        let cy;
        return cy.get('#' + this.id).then((ele) => {
            var inst = ele[0].ej2_instances[0];
            return inst[functionName].apply(inst, args);
        });
    }
}
exports.AccordionHelper = AccordionHelper;
