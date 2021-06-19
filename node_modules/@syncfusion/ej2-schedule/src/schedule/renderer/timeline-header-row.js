import { createElement } from '@syncfusion/ej2-base';
import { MS_PER_DAY, capitalizeFirstWord } from '../base/util';
/**
 * timeline header rows
 */
var TimelineHeaderRow = /** @class */ (function () {
    function TimelineHeaderRow(parent, renderDates) {
        this.parent = parent;
        this.renderDates = renderDates;
    }
    TimelineHeaderRow.prototype.groupByYear = function (dates) {
        var result = {};
        for (var _i = 0, dates_1 = dates; _i < dates_1.length; _i++) {
            var d = dates_1[_i];
            var key = d.getFullYear();
            result[key] = result[key] || [];
            result[key].push(d);
        }
        return result;
    };
    TimelineHeaderRow.prototype.groupByMonth = function (dates) {
        var result = {};
        for (var _i = 0, dates_2 = dates; _i < dates_2.length; _i++) {
            var d = dates_2[_i];
            var key = (d.getFullYear() - 1970) * 12 + d.getMonth();
            result[key] = result[key] || [];
            result[key].push(d);
        }
        return result;
    };
    TimelineHeaderRow.prototype.groupByWeek = function (dates) {
        var result = {};
        for (var _i = 0, dates_3 = dates; _i < dates_3.length; _i++) {
            var d = dates_3[_i];
            var jsDate = +new Date(1970, 0, 1);
            var tzOffsetDiff = d.getTimezoneOffset() - new Date(1970, 0, 1).getTimezoneOffset();
            var key = Math.ceil(((((+d - jsDate) - (tzOffsetDiff * 60 * 1000)) / MS_PER_DAY) + new Date(jsDate).getDay() + 1) / 7);
            if (this.parent.firstDayOfWeek && this.parent.firstDayOfWeek > new Date(+d).getDay()) {
                key = key - 1;
            }
            result[key] = result[key] || [];
            result[key].push(d);
        }
        return result;
    };
    TimelineHeaderRow.prototype.generateSlots = function (data, colspan, row, cls, type) {
        var _this = this;
        var dateParser = function (date, format) {
            return _this.parent.globalize.formatDate(date, { format: format, calendar: _this.parent.getCalendarMode() });
        };
        var tdDatas = [];
        var keys = Object.keys(data);
        for (var i = 0; i < keys.length; i++) {
            var dates = data[keys[i]];
            var htmlCol = void 0;
            if (row.template) {
                var args = { date: dates[0], type: type };
                var templateId = this.parent.element.id + '_headerRowTemplate';
                htmlCol = [].slice.call(this.parent.templateParser(row.template)(args, this.parent, 'template', templateId, false));
            }
            else {
                var viewTemplate = void 0;
                switch (row.option) {
                    case 'Year':
                        viewTemplate = "<span class=\"e-header-year\">" + dateParser(dates[0], 'y') + "</span>";
                        break;
                    case 'Month':
                        viewTemplate = "<span class=\"e-header-month\">" + capitalizeFirstWord(dateParser(dates[0], 'MMMM'), 'single') + "</span>";
                        break;
                    case 'Week':
                        viewTemplate = "<span class=\"e-header-week\">" + this.parent.getWeekNumberContent(dates) + "</span>";
                }
                var headerWrapper = createElement('div', { innerHTML: viewTemplate });
                htmlCol = [].slice.call(headerWrapper.childNodes);
            }
            tdDatas.push({ date: dates[0], type: type, className: [cls], colSpan: dates.length * colspan, template: htmlCol });
        }
        return tdDatas;
    };
    TimelineHeaderRow.prototype.generateColumnLevels = function (dateSlots, hourSlots) {
        var levels = [];
        var rows = this.parent.activeViewOptions.headerRows;
        var lastLevelColspan = 1;
        if (rows[rows.length - 1].option === 'Hour' && hourSlots.length > 0) {
            lastLevelColspan = hourSlots.length / dateSlots.length;
        }
        var tdDatas = [];
        var byYear;
        var byMonth;
        var byWeek;
        for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
            var row = rows_1[_i];
            switch (row.option) {
                case 'Year':
                    byYear = this.groupByYear(this.renderDates);
                    tdDatas = this.generateSlots(byYear, lastLevelColspan, row, 'e-header-year-cell', 'yearHeader');
                    levels.push(tdDatas);
                    break;
                case 'Month':
                    byMonth = this.groupByMonth(this.renderDates);
                    tdDatas = this.generateSlots(byMonth, lastLevelColspan, row, 'e-header-month-cell', 'monthHeader');
                    levels.push(tdDatas);
                    break;
                case 'Week':
                    byWeek = this.groupByWeek(this.renderDates);
                    tdDatas = this.generateSlots(byWeek, lastLevelColspan, row, 'e-header-week-cell', 'weekHeader');
                    levels.push(tdDatas);
                    break;
                case 'Date':
                    tdDatas = dateSlots;
                    tdDatas = tdDatas.map(function (value) {
                        value.colSpan = lastLevelColspan;
                        return value;
                    });
                    levels.push(tdDatas);
                    break;
                case 'Hour':
                    if (hourSlots.length > 0) {
                        levels.push(hourSlots);
                    }
                    break;
            }
        }
        return levels;
    };
    return TimelineHeaderRow;
}());
export { TimelineHeaderRow };
