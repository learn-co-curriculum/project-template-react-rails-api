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
 * Worksheet class
 * @private
 */
var Cell = /** @class */ (function () {
    function Cell() {
    }
    return Cell;
}());
export { Cell };
/**
 * Cells class
 * @private
 */
var Cells = /** @class */ (function (_super) {
    __extends(Cells, _super);
    function Cells() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.add = function (cell) {
            var inserted = false;
            var count = 0;
            for (var _i = 0, _a = _this; _i < _a.length; _i++) {
                var c = _a[_i];
                if (c.index === cell.index) {
                    _this[count] = cell;
                    inserted = true;
                }
                count++;
            }
            if (!inserted) {
                _this.push(cell);
            }
        };
        return _this;
    }
    return Cells;
}(Array));
export { Cells };
