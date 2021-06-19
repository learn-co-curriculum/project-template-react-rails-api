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
var ViewDirective = /** @class */ (function (_super) {
    __extends(ViewDirective, _super);
    function ViewDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewDirective.moduleName = 'view';
    ViewDirective.complexTemplate = { 'timeScaleMinorSlotTemplate': 'timeScale.minorSlotTemplate', 'timeScaleMajorSlotTemplate': 'timeScale.majorSlotTemplate', 'groupHeaderTooltipTemplate': 'group.headerTooltipTemplate' };
    return ViewDirective;
}(ComplexBase));
export { ViewDirective };
var ViewsDirective = /** @class */ (function (_super) {
    __extends(ViewsDirective, _super);
    function ViewsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewsDirective.propertyName = 'views';
    ViewsDirective.moduleName = 'views';
    return ViewsDirective;
}(ComplexBase));
export { ViewsDirective };
