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
import { VerticalView } from './vertical-view';
/**
 * day view
 */
var Day = /** @class */ (function (_super) {
    __extends(Day, _super);
    /**
     * Constructor for day view
     *
     * @param {Schedule} parent Accepts the schedule instance
     */
    function Day(parent) {
        var _this = _super.call(this, parent) || this;
        _this.viewClass = 'e-day-view';
        return _this;
    }
    /**
     * Get module name.
     *
     * @returns {string} Returns the module name.
     */
    Day.prototype.getModuleName = function () {
        return 'day';
    };
    return Day;
}(VerticalView));
export { Day };
