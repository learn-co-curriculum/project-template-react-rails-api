/* eslint-disable @typescript-eslint/no-explicit-any */
import { HijriParser, isNullOrUndefined } from '@syncfusion/ej2-base';
/** @private */
var Gregorian = /** @class */ (function () {
    function Gregorian() {
    }
    Gregorian.prototype.firstDateOfMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth());
    };
    Gregorian.prototype.lastDateOfMonth = function (dt) {
        return new Date(dt.getFullYear(), dt.getMonth() + 1, 0);
    };
    Gregorian.prototype.isMonthStart = function (date) {
        return (date.getDate() === 1);
    };
    Gregorian.prototype.getLeapYearDaysCount = function () {
        return 366;
    };
    Gregorian.prototype.getYearDaysCount = function (date, interval) {
        return ((date.getFullYear() + interval) % 4 === 0) ? 366 : 365;
    };
    Gregorian.prototype.getDate = function (date) {
        return date.getDate();
    };
    Gregorian.prototype.getMonth = function (date) {
        return (date.getMonth() + 1);
    };
    Gregorian.prototype.getFullYear = function (date) {
        return date.getFullYear();
    };
    Gregorian.prototype.getYearLastDate = function (date, interval) {
        return new Date(date.getFullYear() + interval, 0, 0);
    };
    Gregorian.prototype.getMonthDaysCount = function (date) {
        return this.lastDateOfMonth(date).getDate();
    };
    Gregorian.prototype.getMonthStartDate = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes());
    };
    Gregorian.prototype.getMonthEndDate = function (date) {
        date.setDate(1);
        return new Date(date.setMonth(date.getMonth() + 1));
    };
    Gregorian.prototype.getExpectedDays = function (date, days) {
        return days;
    };
    Gregorian.prototype.setDate = function (dateObj, date) {
        dateObj.setDate(date);
    };
    Gregorian.prototype.setValidDate = function (date, interval, startDate, monthValue, beginDate) {
        if (!isNullOrUndefined(beginDate)) {
            date.setMonth((beginDate ? monthValue : date.getMonth()) + interval);
        }
        else {
            date.setMonth(date.getMonth() + interval, startDate);
        }
    };
    Gregorian.prototype.setMonth = function (date, interval, startDate) {
        date.setFullYear(date.getFullYear());
        date.setMonth(interval - 1);
        date.setDate(startDate);
    };
    Gregorian.prototype.addYears = function (date, interval) {
        date.setFullYear(date.getFullYear() + interval);
    };
    Gregorian.prototype.isSameMonth = function (date1, date2) {
        return (date1.getMonth() === date2.getMonth());
    };
    Gregorian.prototype.checkMonth = function (date, months) {
        return (months.indexOf(date.getMonth() + 1) === -1);
    };
    Gregorian.prototype.compareMonth = function (date1, date2) {
        return (date1.getMonth() > date2.getMonth());
    };
    Gregorian.prototype.isSameYear = function (date1, date2) {
        return (date1.getFullYear() === date2.getFullYear());
    };
    Gregorian.prototype.isLastMonth = function (date) {
        return (date.getMonth() === 11);
    };
    Gregorian.prototype.isLeapYear = function (year, interval) {
        return ((year + interval) % 4 === 0);
    };
    return Gregorian;
}());
export { Gregorian };
/** @private */
var Islamic = /** @class */ (function () {
    function Islamic() {
    }
    Islamic.prototype.firstDateOfMonth = function (date) {
        var hDate = this.getHijriDate(date);
        var gDate = HijriParser.toGregorian(hDate.year, hDate.month, 1);
        return gDate;
    };
    Islamic.prototype.lastDateOfMonth = function (date) {
        var hDate = this.getHijriDate(date);
        var daysInMonth = this.getDaysInMonth(hDate.month, hDate.year);
        var gDate = HijriParser.toGregorian(hDate.year, hDate.month, daysInMonth);
        var finalGDate = new Date(gDate.getTime());
        finalGDate = new Date(finalGDate.setDate(finalGDate.getDate() + 1));
        var finalHDate = this.getHijriDate(finalGDate);
        if (hDate.month === finalHDate.month) {
            return finalGDate;
        }
        finalHDate = this.getHijriDate(gDate);
        if (hDate.month === finalHDate.month) {
            return gDate;
        }
        return new Date(gDate.setDate(gDate.getDate() - 1));
    };
    Islamic.prototype.isMonthStart = function (date) {
        var hijriDate = this.getHijriDate(date);
        return (hijriDate.date === 1);
    };
    Islamic.prototype.getLeapYearDaysCount = function () {
        return 355;
    };
    Islamic.prototype.getYearDaysCount = function (date, interval) {
        var hDate = this.getHijriDate(date);
        return this.isLeapYear(hDate.year, interval) ? 355 : 354;
    };
    Islamic.prototype.getDate = function (date) {
        var hijriDate = this.getHijriDate(date);
        return hijriDate.date;
    };
    Islamic.prototype.getMonth = function (date) {
        var hDate = this.getHijriDate(date);
        return hDate.month;
    };
    Islamic.prototype.getFullYear = function (date) {
        var hDate = this.getHijriDate(date);
        return hDate.year;
    };
    Islamic.prototype.getYearLastDate = function (date, interval) {
        var hDate = this.getHijriDate(date);
        var gDate = HijriParser.toGregorian(hDate.year + interval, 1, 0);
        return gDate;
    };
    Islamic.prototype.getMonthDaysCount = function (date) {
        var maxDate = this.lastDateOfMonth(date);
        var hijriDate = this.getHijriDate(maxDate);
        return hijriDate.date;
    };
    Islamic.prototype.getMonthStartDate = function (date) {
        var firstDate = this.firstDateOfMonth(date);
        return new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate(), date.getHours(), date.getMinutes());
    };
    Islamic.prototype.getMonthEndDate = function (date) {
        var lastDate = this.lastDateOfMonth(date);
        lastDate.setDate(lastDate.getDate() + 1);
        return new Date(lastDate.setMonth(lastDate.getMonth()));
    };
    Islamic.prototype.getExpectedDays = function (date, days) {
        var hDate = this.getHijriDate(date);
        var day = [];
        for (var i = 0; i < days.length; i++) {
            var gDate = HijriParser.toGregorian(hDate.year, hDate.month, days[i]);
            day.push(gDate.getDate());
        }
        return day;
    };
    Islamic.prototype.setDate = function (dateObj, date) {
        var hDate = this.getHijriDate(dateObj);
        var gDate = HijriParser.toGregorian(hDate.year, hDate.month, date);
        this.updateDateObj(dateObj, gDate);
    };
    Islamic.prototype.setValidDate = function (date, interval, startDate, monthValue, beginDate) {
        var firstDate = (!isNullOrUndefined(beginDate)) ? this.firstDateOfMonth(beginDate) : date;
        var hDate = this.getHijriDate(firstDate);
        var gDate = HijriParser.toGregorian(hDate.year, hDate.month + interval, startDate);
        this.updateDateObj(date, gDate);
    };
    Islamic.prototype.setMonth = function (date, interval, startDate) {
        var hDate = this.getHijriDate(date);
        var gDate = HijriParser.toGregorian(hDate.year, interval, startDate);
        this.updateDateObj(date, gDate);
    };
    Islamic.prototype.addYears = function (date, interval, monthValue) {
        var hDate = this.getHijriDate(date);
        var gDate = HijriParser.toGregorian(hDate.year + interval, monthValue, 1);
        this.updateDateObj(date, gDate);
    };
    Islamic.prototype.isSameMonth = function (date1, date2) {
        var currentHijri = this.getHijriDate(date1);
        var tempHijri = this.getHijriDate(date2);
        return (currentHijri.month === tempHijri.month);
    };
    Islamic.prototype.checkMonth = function (date, months) {
        var hDate = this.getHijriDate(date);
        return (months.indexOf(hDate.month) === -1);
    };
    Islamic.prototype.compareMonth = function (date1, date2) {
        var hDate = this.getHijriDate(date1);
        var hDate1 = this.getHijriDate(date2);
        return (hDate.month > hDate1.month);
    };
    Islamic.prototype.isSameYear = function (date1, date2) {
        var hDate = this.getHijriDate(date1);
        var hDate1 = this.getHijriDate(date2);
        return (hDate.year === hDate1.year);
    };
    Islamic.prototype.isLastMonth = function (date) {
        var hDate = this.getHijriDate(date);
        return (hDate.month === 12);
    };
    Islamic.prototype.updateDateObj = function (date, gDate) {
        date.setFullYear(gDate.getFullYear(), gDate.getMonth(), gDate.getDate());
    };
    Islamic.prototype.isLeapYear = function (year, interval) {
        return (14 + 11 * (year + interval)) % 30 < 11;
    };
    Islamic.prototype.getDaysInMonth = function (month, year) {
        var length = 0;
        length = 29 + ((month + 1) % 2);
        if (month === 11 && this.isLeapYear(year, 0)) {
            length++;
        }
        return length;
    };
    Islamic.prototype.getHijriDate = function (date) {
        return HijriParser.getHijriDate(date);
    };
    return Islamic;
}());
export { Islamic };
