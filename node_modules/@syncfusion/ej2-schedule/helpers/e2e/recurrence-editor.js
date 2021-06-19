"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e2e_1 = require("@syncfusion/ej2-base/helpers/e2e");
class RecurrenceEditorHelper extends e2e_1.TestHelper {
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
    changeRepeatType(repeatType) {
        if (typeof repeatType === 'string') {
            this.setModel('selectedType', repeatType.toLowerCase());
        }
        else {
            const frequencies = this.getModel('frequencies');
            this.setModel('selectedType', frequencies[repeatType]);
        }
    }
}
exports.RecurrenceEditorHelper = RecurrenceEditorHelper;
