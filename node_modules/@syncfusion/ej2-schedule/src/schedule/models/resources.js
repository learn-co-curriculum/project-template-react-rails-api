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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Property, ChildProperty } from '@syncfusion/ej2-base';
/**
 * A class that represents the resource related configurations and its data binding options.
 */
var Resources = /** @class */ (function (_super) {
    __extends(Resources, _super);
    function Resources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property()
    ], Resources.prototype, "field", void 0);
    __decorate([
        Property()
    ], Resources.prototype, "title", void 0);
    __decorate([
        Property()
    ], Resources.prototype, "name", void 0);
    __decorate([
        Property(false)
    ], Resources.prototype, "allowMultiple", void 0);
    __decorate([
        Property([])
    ], Resources.prototype, "dataSource", void 0);
    __decorate([
        Property()
    ], Resources.prototype, "query", void 0);
    __decorate([
        Property('Id')
    ], Resources.prototype, "idField", void 0);
    __decorate([
        Property('Text')
    ], Resources.prototype, "textField", void 0);
    __decorate([
        Property('Expanded')
    ], Resources.prototype, "expandedField", void 0);
    __decorate([
        Property('GroupID')
    ], Resources.prototype, "groupIDField", void 0);
    __decorate([
        Property('Color')
    ], Resources.prototype, "colorField", void 0);
    __decorate([
        Property('StartHour')
    ], Resources.prototype, "startHourField", void 0);
    __decorate([
        Property('EndHour')
    ], Resources.prototype, "endHourField", void 0);
    __decorate([
        Property('WorkDays')
    ], Resources.prototype, "workDaysField", void 0);
    __decorate([
        Property('CssClass')
    ], Resources.prototype, "cssClassField", void 0);
    return Resources;
}(ChildProperty));
export { Resources };
