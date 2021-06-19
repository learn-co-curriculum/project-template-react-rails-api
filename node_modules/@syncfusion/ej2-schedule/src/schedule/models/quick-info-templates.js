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
import { Property, ChildProperty } from '@syncfusion/ej2-base';
/**
 * A class that defines the template options available to customize the quick popup of scheduler.
 */
var QuickInfoTemplates = /** @class */ (function (_super) {
    __extends(QuickInfoTemplates, _super);
    function QuickInfoTemplates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property('Both')
    ], QuickInfoTemplates.prototype, "templateType", void 0);
    __decorate([
        Property()
    ], QuickInfoTemplates.prototype, "header", void 0);
    __decorate([
        Property()
    ], QuickInfoTemplates.prototype, "content", void 0);
    __decorate([
        Property()
    ], QuickInfoTemplates.prototype, "footer", void 0);
    return QuickInfoTemplates;
}(ChildProperty));
export { QuickInfoTemplates };
