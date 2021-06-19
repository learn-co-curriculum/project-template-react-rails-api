"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e2e_1 = require("@syncfusion/ej2-base/helpers/e2e");
class AutoCompleteHelper extends e2e_1.TestHelper {
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
    getListItemElement() {
        return this.selector('.e-popup .e-content .e-list-parent .e-list-item');
    }
    getListGroupingElemnt() {
        return this.selector('.e-popup .e-content .e-list-parent .e-list-group-item');
    }
    getValueElement() {
        return this.selector('#' + this.id + '_hidden');
    }
    getWrapperElement() {
        return this.selector('.e-input-group.e-control-wrapper.e-ddl');
    }
    getClearIconElement() {
        return this.selector('.e-input-group.e-control-wrapper.e-ddl .e-clear-icon');
    }
    getSpinnerElement() {
        return this.selector('.e-input-group.e-control-wrapper.e-ddl .e-clear-icon .e-spinner-pane');
    }
    getSpinnerInnerElement() {
        return this.selector('.e-input-group.e-control-wrapper.e-ddl .e-clear-icon .e-spinner-pane .e-spinner-inner');
    }
}
exports.AutoCompleteHelper = AutoCompleteHelper;
