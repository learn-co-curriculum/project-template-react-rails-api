import { TestHelper } from '@syncfusion/ej2-base/helpers/e2e';
export declare class datepickerHelper extends TestHelper {
    id: string;
    wrapperFn: Function;
    constructor(id: string, wrapperFn: Function);
    selector(arg: any): any;
    getElement(): any;
    getDateIcon(): any;
    getClearIcon(): any;
    getCalender(): any;
    getCalendarMonthHeader(): any;
    getCalendarYearHeader(): any;
    getCalendarDecadeHeader(): any;
    getTitleElement(): any;
    getIconContainer(): any;
    getPreviousIcon(): any;
    getNextIcon(): any;
    getWeekHeader(): any;
    getCellElement(): any;
    getOtherMonthCellElement(): any;
    getSelectedCellElement(): any;
    getDisabledElement(): any;
    getDisabledWeekEndElement(): any;
    getTodayCellElement(): any;
    getWeenkendElement(): any;
    getFooterContainer(): any;
    getTodayElement(): any;
}
