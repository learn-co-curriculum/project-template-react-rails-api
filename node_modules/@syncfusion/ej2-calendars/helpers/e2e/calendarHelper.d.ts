import { TestHelper } from '@syncfusion/ej2-base/helpers/e2e';
export declare class calendarHelper extends TestHelper {
    id: string;
    wrapperFn: Function;
    constructor(id: string, wrapperFn: Function);
    selector(arg: any): any;
    getElement(): any;
    getMonthHeaderElement(): any;
    getYearHeaderElement(): any;
    getDecadeHeaderElement(): any;
    getMonthContentElement(): any;
    getTitleElement(): any;
    getNextIconElement(): any;
    getPrevIconElement(): any;
    getWeekHeaderElement(): any;
    getWeekNumberElement(): any;
    getCellElement(): any;
    getOtherMonthCellElement(): any;
    getSelectedCellElement(): any;
    getDisabledCellElement(): any;
    getFocusedCellElement(): any;
    getTodayCellElement(): any;
    getFooterElement(): any;
    getTodatButtonElement(): any;
}
