/**
 * Calendar functionalities
 */
export declare type CalendarType = 'Islamic' | 'Gregorian';
/** @private */
export interface CalendarUtil {
    firstDateOfMonth(date: Date): Date;
    lastDateOfMonth(date: Date): Date;
    isMonthStart(date: Date): boolean;
    getLeapYearDaysCount(): number;
    getYearDaysCount(date: Date, interval: number): number;
    getMonthDaysCount(date: Date): number;
    getDate(date: Date): number;
    getMonth(date: Date): number;
    getFullYear(date: Date): number;
    getYearLastDate(date: Date, interval: number): Date;
    getMonthStartDate(date: Date): Date;
    getMonthEndDate(date: Date): Date;
    getExpectedDays(date: Date, days: number[]): number[];
    setDate(dateObj: Date, date: number): void;
    setValidDate(date1: Date, interval: number, startDate: number, month?: number, date2?: Date): void;
    setMonth(date: Date, interval: number, startDate: number): void;
    addYears(date: Date, interval: number, month: number): void;
    isSameMonth(date1: Date, date2: Date): boolean;
    checkMonth(date: Date, months: number[]): boolean;
    compareMonth(date1: Date, date2: Date): boolean;
    isSameYear(date1: Date, date2: Date): boolean;
    isLastMonth(date: Date): boolean;
    isLeapYear(year: number, interval: number): boolean;
}
/** @private */
export declare class Gregorian implements CalendarUtil {
    firstDateOfMonth(date: Date): Date;
    lastDateOfMonth(dt: Date): Date;
    isMonthStart(date: Date): boolean;
    getLeapYearDaysCount(): number;
    getYearDaysCount(date: Date, interval: number): number;
    getDate(date: Date): number;
    getMonth(date: Date): number;
    getFullYear(date: Date): number;
    getYearLastDate(date: Date, interval: number): Date;
    getMonthDaysCount(date: Date): number;
    getMonthStartDate(date: Date): Date;
    getMonthEndDate(date: Date): Date;
    getExpectedDays(date: Date, days: number[]): number[];
    setDate(dateObj: Date, date: number): void;
    setValidDate(date: Date, interval: number, startDate: number, monthValue?: number, beginDate?: Date): void;
    setMonth(date: Date, interval: number, startDate: number): void;
    addYears(date: Date, interval: number): void;
    isSameMonth(date1: Date, date2: Date): boolean;
    checkMonth(date: Date, months: number[]): boolean;
    compareMonth(date1: Date, date2: Date): boolean;
    isSameYear(date1: Date, date2: Date): boolean;
    isLastMonth(date: Date): boolean;
    isLeapYear(year: number, interval: number): boolean;
}
/** @private */
export declare class Islamic implements CalendarUtil {
    firstDateOfMonth(date: Date): Date;
    lastDateOfMonth(date: Date): Date;
    isMonthStart(date: Date): boolean;
    getLeapYearDaysCount(): number;
    getYearDaysCount(date: Date, interval: number): number;
    getDate(date: Date): number;
    getMonth(date: Date): number;
    getFullYear(date: Date): number;
    getYearLastDate(date: Date, interval: number): Date;
    getMonthDaysCount(date: Date): number;
    getMonthStartDate(date: Date): Date;
    getMonthEndDate(date: Date): Date;
    getExpectedDays(date: Date, days: number[]): number[];
    setDate(dateObj: Date, date: number): void;
    setValidDate(date: Date, interval: number, startDate: number, monthValue?: number, beginDate?: Date): void;
    setMonth(date: Date, interval: number, startDate: number): void;
    addYears(date: Date, interval: number, monthValue: number): void;
    isSameMonth(date1: Date, date2: Date): boolean;
    checkMonth(date: Date, months: number[]): boolean;
    compareMonth(date1: Date, date2: Date): boolean;
    isSameYear(date1: Date, date2: Date): boolean;
    isLastMonth(date: Date): boolean;
    private updateDateObj;
    isLeapYear(year: number, interval: number): boolean;
    private getDaysInMonth;
    private getHijriDate;
}
