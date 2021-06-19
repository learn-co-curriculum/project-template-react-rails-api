import { ComplexBase } from '@syncfusion/ej2-react-base';
import { HeaderRowsModel } from '@syncfusion/ej2-schedule';
export interface HeaderRowsDirTypecast {
    template?: string | Function | any;
}
/**
 * `HeaderRowsDirective` represent a header rows of the react Schedule.
 * It must be contained in a Schedule component(`SchduleComponent`).
 * ```tsx
 * <ScheduleComponent>
 *  <HeaderRowsDirective>
 *   <HeaderRowDirective option='Week'></HeaderRowDirective>
 *   <HeaderRowDirective option='Date'></HeaderRowDirective>
 *  <HeaderRowsDirective>
 * </ScheduleComponent>
 * ```
 */
export declare class HeaderRowDirective extends ComplexBase<HeaderRowsModel | HeaderRowsDirTypecast, HeaderRowsModel | HeaderRowsDirTypecast> {
    static moduleName: string;
}
export declare class HeaderRowsDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
