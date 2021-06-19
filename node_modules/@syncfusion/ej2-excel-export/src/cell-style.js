/**
 * CellStyle class
 * @private
 */
var CellStyle = /** @class */ (function () {
    function CellStyle() {
        this.numFmtId = 0;
        this.backColor = 'none';
        this.fontName = 'Calibri';
        this.fontSize = 10.5;
        this.fontColor = '#000000';
        this.italic = false;
        this.bold = false;
        this.underline = false;
        this.wrapText = false;
        this.hAlign = 'general';
        this.vAlign = 'bottom';
        this.indent = 0;
        this.rotation = 0;
        this.numberFormat = 'GENERAL';
        this.type = 'datetime';
        this.borders = new Borders();
        this.isGlobalStyle = false;
    }
    return CellStyle;
}());
export { CellStyle };
/**
 * Font Class
 * @private
 */
var Font = /** @class */ (function () {
    function Font() {
        this.sz = 10.5;
        this.name = 'Calibri';
        this.u = false;
        this.b = false;
        this.i = false;
        this.color = 'FF000000';
    }
    return Font;
}());
export { Font };
/**
 * CellXfs class
 * @private
 */
var CellXfs = /** @class */ (function () {
    function CellXfs() {
    }
    return CellXfs;
}());
export { CellXfs };
/**
 * Alignment class
 * @private
 */
var Alignment = /** @class */ (function () {
    function Alignment() {
    }
    return Alignment;
}());
export { Alignment };
/**
 * CellStyleXfs class
 * @private
 */
var CellStyleXfs = /** @class */ (function () {
    function CellStyleXfs() {
    }
    return CellStyleXfs;
}());
export { CellStyleXfs };
/**
 * CellStyles class
 * @private
 */
var CellStyles = /** @class */ (function () {
    function CellStyles() {
        this.name = 'Normal';
        this.xfId = 0;
    }
    return CellStyles;
}());
export { CellStyles };
/**
 * NumFmt class
 * @private
 */
var NumFmt = /** @class */ (function () {
    function NumFmt(id, code) {
        this.numFmtId = id;
        this.formatCode = code;
    }
    return NumFmt;
}());
export { NumFmt };
/**
 * Border class
 * @private
 */
var Border = /** @class */ (function () {
    function Border(mLine, mColor) {
        this.lineStyle = mLine;
        this.color = mColor;
    }
    return Border;
}());
export { Border };
/**
 * Borders class
 * @private
 */
var Borders = /** @class */ (function () {
    function Borders() {
        this.left = new Border('none', '#FFFFFF');
        this.right = new Border('none', '#FFFFFF');
        this.top = new Border('none', '#FFFFFF');
        this.bottom = new Border('none', '#FFFFFF');
        this.all = new Border('none', '#FFFFFF');
    }
    return Borders;
}());
export { Borders };
