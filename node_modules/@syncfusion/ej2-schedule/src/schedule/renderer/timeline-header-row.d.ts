import { Schedule } from '../base/schedule';
import { TdData } from '../base/interface';
/**
 * timeline header rows
 */
export declare class TimelineHeaderRow {
    parent: Schedule;
    renderDates: Date[];
    constructor(parent: Schedule, renderDates: Date[]);
    private groupByYear;
    private groupByMonth;
    private groupByWeek;
    private generateSlots;
    generateColumnLevels(dateSlots: TdData[], hourSlots: TdData[]): TdData[][];
}
