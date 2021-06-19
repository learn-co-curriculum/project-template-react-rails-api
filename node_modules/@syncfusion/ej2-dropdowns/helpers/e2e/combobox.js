"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e2e_1 = require("@syncfusion/ej2-base/helpers/e2e");
class ComboBoxHelper extends e2e_1.TestHelper {
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
    getInputElement() {
        return this.selector('#' + this.id);
    }
    getPopupElement() {
        return this.selector('#' + this.id + '_popup');
    }
    getValueElement() {
        return this.selector('#' + this.id + '_hidden');
    }
    getListItemElement() {
        return this.selector('.e-popup .e-content .e-list-parent .e-list-item');
    }
    getListGroupingElemnt() {
        return this.selector('.e-popup .e-content .e-list-parent .e-list-group-item');
    }
    getWrapperElement() {
        return this.selector('.e-input-group.e-control-wrapper.e-ddl');
    }
    getClearIconElement() {
        return this.selector('.e-input-group.e-control-wrapper.e-ddl .e-clear-icon');
    }
    getInputGroupIconElement() {
        return this.selector('.e-input-group.e-control-wrapper.e-ddl .e-input-group-icon.e-ddl-icon.e-search-icon');
    }
    getSpinnerElement() {
        return this.selector('.e-input-group.e-control-wrapper.e-ddl .e-input-group-icon .e-spinner-pane');
    }
    getSpinnerInnerElement() {
        return this.selector('.e-input-group.e-control-wrapper.e-ddl .e-input-group-icon .e-spinner-pane .e-spinner-inner');
    }
}
exports.ComboBoxHelper = ComboBoxHelper;
