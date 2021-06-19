import { ComplexBase } from '@syncfusion/ej2-react-base';
import { ResourcesModel } from '@syncfusion/ej2-schedule';
/**
 * `ResourcesDirective` represent a resource of the react Schedule.
 * It must be contained in a Schedule component(`SchduleComponent`).
 * ```tsx
 * <ScheduleComponent>
 * <ResourcesDirective>
 * <ResourceDirective field='RoomId' name='Rooms'></ResourceDirective>
 * <ResourceDirective field='OwnerId' name='Owners'></ResourceDirective>
 * <ResourcesDirective>
 * </ScheduleComponent>
 * ```
 */
export declare class ResourceDirective extends ComplexBase<ResourcesModel, ResourcesModel> {
    static moduleName: string;
}
export declare class ResourcesDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
