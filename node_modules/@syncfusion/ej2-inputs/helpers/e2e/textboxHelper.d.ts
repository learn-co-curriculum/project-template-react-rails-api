import { TestHelper } from '@syncfusion/ej2-base/helpers/e2e';
export declare class textboxHelper extends TestHelper {
    id: string;
    wrapperFn: Function;
    constructor(id: string, wrapperFn: Function);
    selector(arg: any): any;
    getElement(): any;
    getWrapperElement(): any;
    getInputElement(): any;
    getClearIconElement(): any;
    getFloatLabelElement(): any;
    setModel(property: any, value: any): any;
}
