import { TestHelper } from '@syncfusion/ej2-base/helpers/e2e';
export declare class DropDownListHelper extends TestHelper {
    id: string;
    wrapperFn: Function;
    constructor(id: string, wrapperFn: Function);
    selector(arg: any): any;
    getInputElement(): any;
    getPopupElement(): any;
    getValueElement(): any;
    getListItemElement(): any;
    getListGroupingElemnt(): any;
    getWrapperElement(): any;
    getInputGroupIconElement(): any;
    getSpinnerElement(): any;
    getSpinnerInnerElement(): any;
    getFilterParentElement(): any;
    getfilterInputGroupElement(): any;
    getFilterInputElement(): any;
    getFilterClearIconElement(): any;
}
