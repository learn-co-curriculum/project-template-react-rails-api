import { Calendar } from './calendar';
export declare class Islamic {
    constructor(instance: Calendar);
    private calendarInstance;
    getModuleName(): string;
    islamicTitleUpdate(date: Date, view: string): void;
    islamicRenderDays(currentDate: Date, value?: Date, multiSelection?: boolean, values?: Date[]): HTMLElement[];
    islamicIconHandler(): void;
    islamicNext(): void;
    islamicPrevious(): void;
    islamicRenderYears(e?: Event, value?: Date): void;
    islamicRenderDecade(e?: Event, value?: Date): void;
    islamicDayCell(localDate: Date): HTMLElement;
    islamicRenderTemplate(elements: HTMLElement[], count: number, classNm: string, e?: Event, value?: Date): void;
    islamicCompareMonth(start: Date, end: Date): number;
    islamicCompare(startDate: Date, endDate: Date, modifier: number): number;
    getIslamicDate(date: Date): any;
    toGregorian(year: number, month: number, date: number): Date;
    hijriCompareYear(start: Date, end: Date): number;
    hijriCompareDecade(start: Date, end: Date): number;
    destroy(): void;
    protected islamicInValue(inValue: string | Date | number): string;
}
export interface IslamicDateArgs {
    year: number;
    date: number;
    month: number;
}
