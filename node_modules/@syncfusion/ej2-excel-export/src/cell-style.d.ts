import { HAlignType, VAlignType, LineStyle } from './enum';
/**
 * CellStyle class
 * @private
 */
export declare class CellStyle {
    name: string;
    index: number;
    backColor: string;
    numFmtId: number;
    borders: Borders;
    fontName: string;
    fontSize: number;
    fontColor: string;
    italic: boolean;
    bold: boolean;
    hAlign: HAlignType;
    indent: number;
    rotation: number;
    vAlign: VAlignType;
    underline: boolean;
    wrapText: boolean;
    numberFormat: string;
    type: string;
    isGlobalStyle: boolean;
    constructor();
}
/**
 * Font Class
 * @private
 */
export declare class Font {
    b: boolean;
    i: boolean;
    u: boolean;
    sz: number;
    name: string;
    color: string;
    constructor();
}
/**
 * CellXfs class
 * @private
 */
export declare class CellXfs {
    numFmtId: number;
    fontId: number;
    fillId: number;
    borderId: number;
    xfId: number;
    applyAlignment: number;
    alignment: Alignment;
}
/**
 * Alignment class
 * @private
 */
export declare class Alignment {
    horizontal: string;
    vertical: string;
    wrapText: number;
    indent: number;
    rotation: number;
}
/**
 * CellStyleXfs class
 * @private
 */
export declare class CellStyleXfs {
    numFmtId: number;
    fontId: number;
    fillId: number;
    borderId: number;
    alignment: Alignment;
}
/**
 * CellStyles class
 * @private
 */
export declare class CellStyles {
    name: string;
    xfId: number;
    constructor();
}
/**
 * NumFmt class
 * @private
 */
export declare class NumFmt {
    numFmtId: number;
    formatCode: string;
    constructor();
    constructor(id: number, code: string);
}
/**
 * Border class
 * @private
 */
export declare class Border {
    lineStyle: LineStyle;
    color: string;
    constructor();
    constructor(mLine: LineStyle, mColor: string);
}
/**
 * Borders class
 * @private
 */
export declare class Borders {
    left: Border;
    right: Border;
    bottom: Border;
    top: Border;
    all: Border;
    constructor();
}
