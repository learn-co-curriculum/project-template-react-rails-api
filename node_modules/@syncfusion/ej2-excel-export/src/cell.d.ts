import { CellStyle } from './cell-style';
/**
 * Worksheet class
 * @private
 */
export declare class Cell {
    index: number;
    rowSpan: number;
    colSpan: number;
    value: string | Date | number | boolean;
    formula: string;
    cellStyle: CellStyle;
    styleIndex: number;
    sharedStringIndex: number;
    saveType: string;
    type: string;
    refName: string;
}
/**
 * Cells class
 * @private
 */
export declare class Cells extends Array {
    add: (cell: Cell) => void;
}
