import { L10n } from '@syncfusion/ej2-base';
import { CalendarUtil, CalendarType } from '../common/calendar-util';
/**
 * Date Generator from Recurrence Rule
 */
/**
 * Generate Summary from Recurrence Rule
 *
 * @param {string} rule Accepts the Recurrence rule
 * @param {L10n} localeObject Accepts the locale object
 * @param {string} locale Accepts the locale name
 * @param {CalendarType} calendarType Accepts the calendar type
 * @returns {string} Returns the summary string from given recurrence rule
 */
export declare function generateSummary(rule: string, localeObject: L10n, locale: string, calendarType?: CalendarType): string;
/**
 * Generates the date collections from the given recurrence rule
 *
 * @param {Date} startDate Accepts the rule start date
 * @param {string} rule Accepts the recurrence rule
 * @param {string} excludeDate Accepts the exception dates in string format
 * @param {number} startDayOfWeek Accepts the start day index of week
 * @param {number} maximumCount Accepts the maximum number count to generate date collections
 * @param {Date} viewDate Accepts the current date instead of start date
 * @param {CalendarType} calendarMode Accepts the calendar type
 * @param {string} oldTimezone Accepts the timezone name
 * @param {string} newTimezone Accepts the timezone name
 * @returns {number[]} Returns the collection of dates
 */
export declare function generate(startDate: Date, rule: string, excludeDate: string, startDayOfWeek: number, maximumCount?: number, viewDate?: Date, calendarMode?: CalendarType, oldTimezone?: string, newTimezone?: string): number[];
/**
 * Generate date object from given date string
 *
 * @param {string} recDateString Accepts the exception date as string
 * @returns {Date} Returns the date from exception date string
 */
export declare function getDateFromRecurrenceDateString(recDateString: string): Date;
/**
 * Method to generate recurrence rule object from given rule
 *
 * @param {string} rules Accepts the recurrence rule
 * @returns {RecRule} Returns the recurrence rule object
 */
export declare function extractObjectFromRule(rules: string): RecRule;
/**
 * Internal method to get calendar util
 *
 * @param {CalendarType} calendarMode Accepts the calendar type object
 * @returns {CalendarUtil} Returns the calendar util object
 * @private
 */
export declare function getCalendarUtil(calendarMode: CalendarType): CalendarUtil;
/** @private */
export interface RecRule {
    freq: FreqType;
    interval: number;
    count: number;
    until: Date;
    day: string[];
    wkst: string;
    month: number[];
    weekNo: number[];
    monthDay: number[];
    yearDay: number[];
    setPosition: number;
    validRules: string[];
    recExceptionCount?: number;
}
/** @private */
export declare type FreqType = 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
/**
 * Method to generate string from date
 *
 * @param {Date} date Accepts the date value
 * @returns {string} Returns the string value
 */
export declare function getRecurrenceStringFromDate(date: Date): string;
