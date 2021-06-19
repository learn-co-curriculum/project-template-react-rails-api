import { ComplexBase } from '@syncfusion/ej2-react-base';
import { ViewsModel } from '@syncfusion/ej2-schedule';
export interface ViewsDirTypecast {
    dateHeaderTemplate?: string | Function | any;
    cellHeaderTemplate?: string | Function | any;
    cellTemplate?: string | Function | any;
    eventTemplate?: string | Function | any;
    resourceHeaderTemplate?: string | Function | any;
    timeScaleMinorSlotTemplate?: string | Function | any;
    timeScaleMajorSlotTemplate?: string | Function | any;
    groupHeaderTooltipTemplate?: string | Function | any;
}
/**
 * `ViewsDirective` represent a view of the react Schedule.
 * It must be contained in a Schedule component(`SchduleComponent`).
 * ```tsx
 * <ScheduleComponent>
 * <ViewsDirective>
 * <ViewDirective option='day' dateFormat='dd MMM'></ViewDirective>
 * <ViewDirective option='week'></ViewDirective>
 * <ViewsDirective>
 * </ScheduleComponent>
 * ```
 */
export declare class ViewDirective extends ComplexBase<ViewsModel | ViewsDirTypecast, ViewsModel | ViewsDirTypecast> {
    static moduleName: string;
    static complexTemplate: Object;
}
export declare class ViewsDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
