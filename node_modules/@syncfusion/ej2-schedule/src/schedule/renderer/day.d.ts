import { Schedule } from '../base/schedule';
import { VerticalView } from './vertical-view';
/**
 * day view
 */
export declare class Day extends VerticalView {
    viewClass: string;
    /**
     * Constructor for day view
     *
     * @param {Schedule} parent Accepts the schedule instance
     */
    constructor(parent: Schedule);
    /**
     * Get module name.
     *
     * @returns {string} Returns the module name.
     */
    protected getModuleName(): string;
}
