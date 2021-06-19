"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e2e_1 = require("@syncfusion/ej2-base/helpers/e2e");
class DropDownListHelper extends e2e_1.TestHelper {
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
        return this.selector('.e-input-group.e-control-wrapper.e-ddl.e-lib.e-keyboard');
    }
    getInputGroupIconElement() {
        return this.selector('.e-input-group.e-control-wrapper.e-ddl.e-lib.e-keyboard .e-input-group-icon');
    }
    getSpinnerElement() {
        return this.selector('.e-input-group.e-control-wrapper.e-ddl.e-lib.e-keyboard .e-input-group-icon .e-spinner-pane');
    }
    getSpinnerInnerElement() {
        return this.selector('.e-input-group.e-control-wrapper.e-ddl.e-lib.e-keyboard .e-input-group-icon .e-spinner-pane .e-spinner-inner');
    }
    getFilterParentElement() {
        return this.selector('.e-popup .e-filter-parent');
    }
    getfilterInputGroupElement() {
        return this.selector('.e-popup .e-filter-parent .e-input-group');
    }
    getFilterInputElement() {
        return this.selector('.e-popup .e-filter-parent .e-input-group .e-input-filter');
    }
    getFilterClearIconElement() {
        return this.selector('.e-popup .e-filter-parent .e-input-group .e-clear-icon');
    }
}
exports.DropDownListHelper = DropDownListHelper;
