"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e2e_1 = require("@syncfusion/ej2-base/helpers/e2e");
class ListViewHelper extends e2e_1.TestHelper {
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
    getNestedULElement(parentId) {
        return this.selector(`[pid="${parentId}"]`);
    }
    getULElement() {
        return this.selector(`#${this.id} > div.e-content > ul:nth-child(1)`);
    }
}
exports.ListViewHelper = ListViewHelper;
