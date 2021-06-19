import { Schedule } from '../base/schedule';
import { VerticalView } from './vertical-view';
/**
 * work week view
 */
export declare class WorkWeek extends VerticalView {
    viewClass: string;
    /**
     * Constructor for work week view
     *
     * @param {Schedule} parent Accepts the schedule instance
     */
    constructor(parent: Schedule);
    startDate(): Date;
    endDate(): Date;
    /**
     * Get module name.
     *
     * @returns {string} Returns the module name.
     */
    protected getModuleName(): string;
}
