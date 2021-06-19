"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e2e_1 = require("@syncfusion/ej2-base/helpers/e2e");
class MenuHelper extends e2e_1.TestHelper {
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
    invoke(fName, args = []) {
        let cy;
        return cy.get('#' + this.id).then((ele) => {
            var inst = ele[0].ej2_instances[0];
            return inst[fName].apply(inst, args);
        });
    }
}
exports.MenuHelper = MenuHelper;
