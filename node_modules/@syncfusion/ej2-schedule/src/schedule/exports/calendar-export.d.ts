import { Schedule } from '../base/schedule';
/**
 * ICalendar Export Module
 */
export declare class ICalendarExport {
    private parent;
    constructor(parent: Schedule);
    initializeCalendarExport(fileName: string, customData: Record<string, any>[]): void;
    private customFieldFilter;
    private convertDateToString;
    private download;
    private filterEvents;
    protected getModuleName(): string;
    destroy(): void;
}
