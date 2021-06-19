import { Schedule } from '../base/schedule';
/**
 * Tooltip for Schedule
 */
export declare class EventTooltip {
    private parent;
    private tooltipObj;
    constructor(parent: Schedule);
    private getTargets;
    private onBeforeRender;
    private onBeforeClose;
    private setContent;
    close(): void;
    destroy(): void;
}
