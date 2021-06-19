import { TestHelper } from '@syncfusion/ej2-base/helpers/e2e';
export declare class numerictextboxHelper extends TestHelper {
    id: string;
    wrapperFn: Function;
    constructor(id: string, wrapperFn: Function);
    selector(arg: any): any;
    getWrapperElement(): any;
    getInputElement(): any;
    getUpIconElement(): any;
    getDownIconElement(): any;
    getFocusElement(): any;
    getClearIconElement(): any;
    getFloatLabelElement(): any;
}
