"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e2e_1 = require("@syncfusion/ej2-base/helpers/e2e");
class ToolbarHelper extends e2e_1.TestHelper {
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
    getLeftScrollNavigationElement() {
        return this.selector('#' + this.id + ' .e-toolbar-items.e-hscroll .e-scroll-nav.e-scroll-left-nav');
    }
    getRightScrollNavigationElement() {
        return this.selector('#' + this.id + ' .e-toolbar-items.e-hscroll .e-scroll-nav.e-scroll-right-nav');
    }
    getOverflowNavigationElement() {
        return this.selector('#' + this.id + ' .e-toolbar_pop_nav.e-hor-nav');
    }
    getItems() {
        return this.selector('#' + this.id + ' .e-toolbar-items');
    }
    getItemElement() {
        return this.selector('#' + this.id + ' .e-toolbar-items .e-toolbar-item');
    }
    getOverflowItemElement() {
        return this.selector('#' + this.id + ' .e-toolbar-pop.e-popup .e-toolbar-item');
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
exports.ToolbarHelper = ToolbarHelper;
