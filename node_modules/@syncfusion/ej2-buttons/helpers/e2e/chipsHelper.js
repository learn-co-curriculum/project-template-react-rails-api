"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e2e_1 = require("@syncfusion/ej2-base/helpers/e2e");
class ChipsHelper extends e2e_1.TestHelper {
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
    getFocusedChip() {
        return this.selector(`#${this.id} > div.e-chip.e-focused`);
    }
    getActiveChip() {
        return this.selector(`#${this.id} > div.e-chip.e-active`);
    }
    getNthChip(nthItem) {
        return this.selector(`#${this.id} > div:nth-child(${nthItem})`);
    }
}
exports.ChipsHelper = ChipsHelper;
