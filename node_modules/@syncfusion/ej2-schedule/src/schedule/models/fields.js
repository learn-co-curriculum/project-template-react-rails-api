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
import { Property, ChildProperty, Complex } from '@syncfusion/ej2-base';
import { FieldOptions } from './field-options';
/**
 * A Class that holds the collection of event fields that requires to be mapped with the dataSource
 * fields along with its available configuration settings. Each field in it accepts both string and Object
 *  data type. When each of the field is assigned with simple `string` value, it is assumed that the dataSource field
 *  name is mapped with it. If the `object` type is defined on each fields, then the validation related settings and mapping of
 *  those fields with dataSource can be given altogether within it.
 */
var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property('Id')
    ], Field.prototype, "id", void 0);
    __decorate([
        Property('IsBlock')
    ], Field.prototype, "isBlock", void 0);
    __decorate([
        Complex({ name: 'Subject' }, FieldOptions)
    ], Field.prototype, "subject", void 0);
    __decorate([
        Complex({ name: 'StartTime' }, FieldOptions)
    ], Field.prototype, "startTime", void 0);
    __decorate([
        Complex({ name: 'EndTime' }, FieldOptions)
    ], Field.prototype, "endTime", void 0);
    __decorate([
        Complex({ name: 'StartTimezone' }, FieldOptions)
    ], Field.prototype, "startTimezone", void 0);
    __decorate([
        Complex({ name: 'EndTimezone' }, FieldOptions)
    ], Field.prototype, "endTimezone", void 0);
    __decorate([
        Complex({ name: 'Location' }, FieldOptions)
    ], Field.prototype, "location", void 0);
    __decorate([
        Complex({ name: 'Description' }, FieldOptions)
    ], Field.prototype, "description", void 0);
    __decorate([
        Complex({ name: 'IsAllDay' }, FieldOptions)
    ], Field.prototype, "isAllDay", void 0);
    __decorate([
        Complex({ name: 'RecurrenceID' }, FieldOptions)
    ], Field.prototype, "recurrenceID", void 0);
    __decorate([
        Complex({ name: 'RecurrenceRule' }, FieldOptions)
    ], Field.prototype, "recurrenceRule", void 0);
    __decorate([
        Complex({ name: 'RecurrenceException' }, FieldOptions)
    ], Field.prototype, "recurrenceException", void 0);
    __decorate([
        Property('IsReadonly')
    ], Field.prototype, "isReadonly", void 0);
    __decorate([
        Property('FollowingID')
    ], Field.prototype, "followingID", void 0);
    return Field;
}(ChildProperty));
export { Field };
