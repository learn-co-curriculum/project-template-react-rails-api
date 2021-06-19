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
var Worksheet = /** @class */ (function () {
    function Worksheet() {
        this.isSummaryRowBelow = true;
        this.showGridLines = true;
        this.enableRtl = false;
    }
    return Worksheet;
}());
export { Worksheet };
/**
 * Hyperlink class
 * @private
 */
var HyperLink = /** @class */ (function () {
    function HyperLink() {
    }
    return HyperLink;
}());
export { HyperLink };
/**
 * Grouping class
 * @private
 */
var Grouping = /** @class */ (function () {
    function Grouping() {
    }
    return Grouping;
}());
export { Grouping };
/**
 * FreezePane class
 * @private
 */
var FreezePane = /** @class */ (function () {
    function FreezePane() {
    }
    return FreezePane;
}());
export { FreezePane };
/**
 * MergeCell
 * @private
 */
var MergeCell = /** @class */ (function () {
    function MergeCell() {
    }
    return MergeCell;
}());
export { MergeCell };
/**
 * MergeCells class
 * @private
 */
var MergeCells = /** @class */ (function (_super) {
    __extends(MergeCells, _super);
    function MergeCells() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.add = function (mergeCell) {
            var inserted = false;
            var count = 0;
            for (var _i = 0, _a = _this; _i < _a.length; _i++) {
                var mCell = _a[_i];
                if (MergeCells.isIntersecting(mCell, mergeCell)) {
                    var intersectingCell = new MergeCell();
                    intersectingCell.x = Math.min(mCell.x, mergeCell.x);
                    intersectingCell.y = Math.min(mCell.Y, mergeCell.y);
                    intersectingCell.width = Math.max(mCell.Width + mCell.X, mergeCell.width + mergeCell.x);
                    intersectingCell.height = Math.max(mCell.Height + mCell.Y, mergeCell.height + mergeCell.y);
                    intersectingCell.ref = (_this[count].ref.split(':')[0]) + ':' + (mergeCell.ref.split(':')[1]);
                    _this[count] = intersectingCell;
                    mergeCell = intersectingCell;
                    inserted = true;
                }
                count++;
            }
            if (!inserted) {
                _this.push(mergeCell);
            }
            return mergeCell;
        };
        return _this;
    }
    MergeCells.isIntersecting = function (base, compare) {
        return (base.x <= compare.x + compare.width)
            && (compare.x <= base.x + base.width)
            && (base.y <= compare.y + compare.height)
            && (compare.y <= base.y + base.height);
    };
    return MergeCells;
}(Array));
export { MergeCells };
