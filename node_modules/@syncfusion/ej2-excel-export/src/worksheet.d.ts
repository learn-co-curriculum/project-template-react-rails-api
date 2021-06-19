import { Column } from './column';
import { Rows } from './row';
import { HyperLinkType } from './enum';
import { Image } from './image';
import { AutoFilters } from './auto-filters';
/**
 * Worksheet class
 * @private
 */
export declare class Worksheet {
    isSummaryRowBelow: boolean;
    index: number;
    columns: Column[];
    rows: Rows;
    freezePanes: FreezePane;
    name: string;
    showGridLines: boolean;
    mergeCells: MergeCells;
    hyperLinks: HyperLink[];
    images: Image[];
    enableRtl: boolean;
    autoFilters: AutoFilters;
}
/**
 * Hyperlink class
 * @private
 */
export declare class HyperLink {
    ref: string;
    rId: number;
    toolTip: string;
    location: string;
    display: string;
    target: string;
    type: HyperLinkType;
}
/**
 * Grouping class
 * @private
 */
export declare class Grouping {
    outlineLevel: number;
    isCollapsed: boolean;
    isHidden: boolean;
}
/**
 * FreezePane class
 * @private
 */
export declare class FreezePane {
    row: number;
    column: number;
    leftCell: string;
}
/**
 * MergeCell
 * @private
 */
export declare class MergeCell {
    ref: string;
    x: number;
    width: number;
    y: number;
    height: number;
}
/**
 * MergeCells class
 * @private
 */
export declare class MergeCells extends Array {
    add: (mergeCell: MergeCell) => MergeCell;
    static isIntersecting(base: MergeCell, compare: MergeCell): boolean;
}
