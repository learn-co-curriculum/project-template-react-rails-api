import { Schedule } from '../base/schedule';
/**
 * ICalendar Import Module
 */
export declare class ICalendarImport {
    private parent;
    private allDay;
    constructor(parent: Schedule);
    initializeCalendarImport(fileContent: Blob | string): void;
    private iCalendarParser;
    private processOccurrence;
    private getDateString;
    private dateParsing;
    protected getModuleName(): string;
    destroy(): void;
}
