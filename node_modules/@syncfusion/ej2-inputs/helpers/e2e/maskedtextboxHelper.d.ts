import { TestHelper } from '@syncfusion/ej2-base/helpers/e2e';
export declare class maskedtextboxHelper extends TestHelper {
    id: string;
    wrapperFn: Function;
    constructor(id: string, wrapperFn: Function);
    selector(arg: any): any;
    getElement(): any;
    getWrapperElement(): any;
    getInputElement(): any;
    getFocusElement(): any;
    getClearIconElement(): any;
    getFloatLabelElement(): any;
    setModel(property: any, value: any): any;
}
