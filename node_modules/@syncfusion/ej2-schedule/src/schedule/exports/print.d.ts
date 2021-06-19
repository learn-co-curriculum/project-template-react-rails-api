import { Schedule } from '../base/schedule';
import { ScheduleModel } from '../base/schedule-model';
/**
 * Print Module
 */
export declare class Print {
    private parent;
    private printInstance;
    private printWindow;
    constructor(parent: Schedule);
    print(printOptions?: ScheduleModel): void;
    private printScheduler;
    private printSchedulerWithModel;
    private getPrintScheduleModel;
    private contentReady;
    protected getModuleName(): string;
    destroy(): void;
}
