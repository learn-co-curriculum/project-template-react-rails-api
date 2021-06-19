import { Cells } from './cell';
import { Grouping } from './worksheet';
/**
 * Row class
 * @private
 */
export declare class Row {
    height: number;
    index: number;
    cells: Cells;
    spans: string;
    grouping: Grouping;
}
/**
 * Rows class
 * @private
 */
export declare class Rows extends Array {
    add: (row: Row) => void;
}
