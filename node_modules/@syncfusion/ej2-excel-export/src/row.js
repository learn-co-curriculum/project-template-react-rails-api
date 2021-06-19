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
/**
 * Row class
 * @private
 */
var Row = /** @class */ (function () {
    function Row() {
    }
    return Row;
}());
export { Row };
/**
 * Rows class
 * @private
 */
var Rows = /** @class */ (function (_super) {
    __extends(Rows, _super);
    function Rows() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.add = function (row) {
            var inserted = false;
            var count = 0;
            for (var _i = 0, _a = _this; _i < _a.length; _i++) {
                var r = _a[_i];
                if (r.index === row.index) {
                    _this[count] = row;
                    inserted = true;
                }
                count++;
            }
            if (!inserted) {
                _this.push(row);
            }
        };
        return _this;
    }
    return Rows;
}(Array));
export { Rows };
