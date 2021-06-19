var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ComplexBase } from '@syncfusion/ej2-react-base';
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
var ResourceDirective = /** @class */ (function (_super) {
    __extends(ResourceDirective, _super);
    function ResourceDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResourceDirective.moduleName = 'resource';
    return ResourceDirective;
}(ComplexBase));
export { ResourceDirective };
var ResourcesDirective = /** @class */ (function (_super) {
    __extends(ResourcesDirective, _super);
    function ResourcesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResourcesDirective.propertyName = 'resources';
    ResourcesDirective.moduleName = 'resources';
    return ResourcesDirective;
}(ComplexBase));
export { ResourcesDirective };
