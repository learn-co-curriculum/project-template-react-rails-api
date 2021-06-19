import { TestHelper } from '@syncfusion/ej2-base/helpers/e2e';
export declare class timepickerHelper extends TestHelper {
    id: string;
    wrapperFn: Function;
    constructor(id: string, wrapperFn: Function);
    selector(arg: any): any;
    getElement(): any;
    getTimePickerInput(): any;
    getTimePickerIcon(): any;
    getTimePickerClearIcon(): any;
    getTimePicker(): any;
    getTimePickerContent(): any;
    getTimePickerListContent(): any;
    getTimePickerListItem(): any;
    getTimePickerDisabledTime(): any;
    getTimePickerSelectedTime(): any;
}
