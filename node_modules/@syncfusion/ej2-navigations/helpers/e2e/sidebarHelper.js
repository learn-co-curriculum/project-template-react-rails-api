"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e2e_1 = require("@syncfusion/ej2-base/helpers/e2e");
class SideBarHelper extends e2e_1.TestHelper {
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
    getSidebar() {
        return this.selector('.e-sidebar');
    }
    getLeftSideBar() {
        return this.selector('.e-sidebar.e-left.e-open');
    }
    getLeft() {
        return this.selector('.e-sidebar.e-left');
    }
    getRight() {
        return this.selector('.e-sidebar.e-right');
    }
    getRightSideBar() {
        return this.selector('.e-sidebar.e-right.e-open');
    }
    getDockSidebar() {
        return this.selector('.e-sidebar.e-dock');
    }
    getExpandedDockSidebar() {
        return this.selector('.e-selector.e-dock.e-open');
    }
    getCollapsedDockSidebar() {
        return this.selector('.e-sidebar.e-dock.e-close');
    }
    getOverStateSidebar() {
        return this.selector('.e-sidebar.e-over');
    }
    getExpandedOverStateSidebar() {
        return this.selector('.e-sidebar.e-over.e-open');
    }
    getCollapsedOverStateSidebar() {
        return this.selector('.e-sidebar.e-over.e-close');
    }
    getPushStateSidebar() {
        return this.selector('.e-sidebar.e-push');
    }
    getExpandedPushStateSidebar() {
        return this.selector('.e-sidebar.e-push.e-open');
    }
    getCollapsedPushStateSidebar() {
        return this.selector('.e-sidebar.e-push.e-close');
    }
    getSlideStateSidebar() {
        return this.selector('.e-sidebar.e-slide');
    }
    getExpandedSlideStateSidebar() {
        return this.selector('.e-sidebar.e-slide.e-open');
    }
    getCollapsedSlideStateSidebar() {
        return this.selector('.e-sidebar.e-slide.e-close');
    }
    getOverlayElement() {
        return this.selector('.e-sidebar-overlay');
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
exports.SideBarHelper = SideBarHelper;
