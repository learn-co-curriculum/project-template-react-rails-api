import { TestHelper } from '@syncfusion/ej2-base/helpers/e2e';
export declare class AutoCompleteHelper extends TestHelper {
    id: string;
    wrapperFn: Function;
    constructor(id: string, wrapperFn: Function);
    selector(arg: any): any;
    getInputElement(): any;
    getPopupElement(): any;
    getListItemElement(): any;
    getListGroupingElemnt(): any;
    getValueElement(): any;
    getWrapperElement(): any;
    getClearIconElement(): any;
    getSpinnerElement(): any;
    getSpinnerInnerElement(): any;
}
