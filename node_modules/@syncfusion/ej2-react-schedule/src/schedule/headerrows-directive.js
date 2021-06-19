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
var HeaderRowDirective = /** @class */ (function (_super) {
    __extends(HeaderRowDirective, _super);
    function HeaderRowDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderRowDirective.moduleName = 'headerRow';
    return HeaderRowDirective;
}(ComplexBase));
export { HeaderRowDirective };
var HeaderRowsDirective = /** @class */ (function (_super) {
    __extends(HeaderRowsDirective, _super);
    function HeaderRowsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderRowsDirective.propertyName = 'headerRows';
    HeaderRowsDirective.moduleName = 'headerRows';
    return HeaderRowsDirective;
}(ComplexBase));
export { HeaderRowsDirective };
