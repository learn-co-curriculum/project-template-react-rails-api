import { Schedule } from '../base/schedule';
/**
 * Work cell interactions
 */
export declare class WorkCellInteraction {
    private parent;
    constructor(parent: Schedule);
    cellMouseDown(e: Event): void;
    cellClick(e: Event & MouseEvent): void;
    cellDblClick(e: Event): void;
    private onHover;
    private isPreventAction;
    destroy(): void;
}
