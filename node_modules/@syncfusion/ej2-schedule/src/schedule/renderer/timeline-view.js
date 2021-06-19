var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { isNullOrUndefined, createElement, prepend, extend, formatUnit, append, setStyleAttribute } from '@syncfusion/ej2-base';
import { VerticalView } from './vertical-view';
import { TimelineEvent } from '../event-renderer/timeline-view';
import { TimelineHeaderRow } from './timeline-header-row';
import * as event from '../base/constant';
import * as cls from '../base/css-constant';
import * as util from '../base/util';
/**
 * timeline views
 */
var TimelineViews = /** @class */ (function (_super) {
    __extends(TimelineViews, _super);
    function TimelineViews(parent) {
        var _this = _super.call(this, parent) || this;
        _this.timelineAppointment = null;
        _this.baseCssClass = 'e-timeline-view';
        return _this;
    }
    TimelineViews.prototype.getModuleName = function () {
        return 'timelineViews';
    };
    TimelineViews.prototype.getLeftPanelElement = function () {
        return this.element.querySelector('.' + cls.RESOURCE_COLUMN_WRAP_CLASS);
    };
    TimelineViews.prototype.scrollTopPanel = function (target) {
        _super.prototype.scrollTopPanel.call(this, target);
        this.scrollHeaderLabels(target);
    };
    TimelineViews.prototype.scrollToWorkHour = function () {
        var start = this.parent.getStartEndTime(this.parent.workHours.start);
        var currDateTime = this.isWorkDay(this.parent.selectedDate) && this.parent.workHours.highlight &&
            !isNullOrUndefined(start) ? new Date(+this.parent.selectedDate).setHours(start.getHours(), start.getMinutes(), 0, 0)
            : new Date(+this.parent.selectedDate).setHours(0, 0, 0, 0);
        var queryString = '[data-date="' + new Date(currDateTime).getTime().toString() + '"]';
        var firstWorkHourCell = this.element.querySelector(queryString);
        if (firstWorkHourCell) {
            this.getContentAreaElement().scrollLeft = !this.parent.enableRtl ? firstWorkHourCell.offsetLeft :
                -(this.parent.getContentTable().offsetWidth - firstWorkHourCell.offsetLeft - firstWorkHourCell.offsetWidth);
        }
    };
    TimelineViews.prototype.scrollToHour = function (hour, scrollDate) {
        var date;
        var index;
        if (scrollDate) {
            index = this.parent.getIndexOfDate(this.renderDates, util.resetTime(scrollDate));
            if (index >= 0) {
                var timeString = hour.split(':');
                if (timeString.length === 2) {
                    date = new Date(scrollDate.setHours(parseInt(timeString[0], 10), parseInt(timeString[1], 10), 0));
                }
            }
        }
        date = isNullOrUndefined(scrollDate) ? this.parent.getStartEndTime(hour) : date;
        if (isNullOrUndefined(date)) {
            return;
        }
        var scrollLeft = isNullOrUndefined(scrollDate) ? this.getLeftFromDateTime(null, date) :
            this.getLeftFromDateTime([index], date);
        this.getScrollableElement().scrollLeft = !this.parent.enableRtl ? scrollLeft : -scrollLeft;
    };
    TimelineViews.prototype.generateColumnLevels = function () {
        var levels = [];
        var dateSlots = this.getDateSlots(this.renderDates, this.parent.activeViewOptions.workDays);
        levels.push(dateSlots);
        if (this.parent.activeViewOptions.group.resources.length > 0) {
            this.parent.resourceBase.generateResourceLevels(dateSlots, !this.parent.uiStateValues.isGroupAdaptive);
        }
        var hourSlots = [];
        if (this.parent.activeViewOptions.timeScale.enable) {
            hourSlots = this.generateTimeSlots(levels[levels.length - 1]);
            levels.push(hourSlots);
        }
        if (this.parent.activeViewOptions.headerRows.length > 0) {
            var renderGn = new TimelineHeaderRow(this.parent, this.renderDates);
            levels = renderGn.generateColumnLevels(dateSlots, hourSlots);
        }
        return levels;
    };
    TimelineViews.prototype.generateTimeSlots = function (dateSlots) {
        var _this = this;
        var handler = function (r) {
            r.type = r.first ? 'majorSlot' : 'minorSlot';
            r.className = r.first ? [cls.TIME_SLOT_CLASS] : [cls.TIME_SLOT_CLASS, cls.TIME_CELLS_CLASS];
            r.workDays = _this.parent.activeViewOptions.workDays;
            return r;
        };
        var timeSlotData = this.getTimeSlotRows(handler);
        var slots = [];
        for (var _i = 0, dateSlots_1 = dateSlots; _i < dateSlots_1.length; _i++) {
            var data = dateSlots_1[_i];
            data.colSpan = timeSlotData.length;
            var tempTimeSlots = extend([], timeSlotData, null, true);
            for (var _a = 0, tempTimeSlots_1 = tempTimeSlots; _a < tempTimeSlots_1.length; _a++) {
                var slot = tempTimeSlots_1[_a];
                var cellDate = util.resetTime(new Date('' + data.date));
                slot.date = util.setTime(cellDate, util.getDateInMs(slot.date));
                slots.push(slot);
            }
        }
        return slots;
    };
    TimelineViews.prototype.changeCurrentTimePosition = function () {
        if (!this.parent || this.parent && this.parent.isDestroyed) {
            return;
        }
        this.removeCurrentTimeIndicatorElements();
        var currentDateIndex = this.getCurrentTimeIndicatorIndex();
        var left = this.getLeftFromDateTime(currentDateIndex, this.parent.getCurrentTime());
        var height = this.element.querySelector('.' + cls.CONTENT_TABLE_CLASS).offsetHeight;
        var headerWrap = this.element.querySelector('.' + cls.DATE_HEADER_WRAP_CLASS);
        var contentWrap = this.element.querySelector('.' + cls.CONTENT_WRAP_CLASS);
        contentWrap.appendChild(createElement('div', {
            className: cls.CURRENT_TIMELINE_CLASS,
            styles: (this.parent.enableRtl ? 'right' : 'left') + ':' + formatUnit(left) + '; height:' + formatUnit(height)
        }));
        if (this.parent.virtualScrollModule) {
            var timeIndicator = this.parent.element.querySelector('.' + cls.CURRENT_TIMELINE_CLASS);
            var element = this.parent.element.querySelector('.' + cls.CONTENT_WRAP_CLASS + ' table');
            setStyleAttribute(timeIndicator, {
                transform: element.style.transform
            });
        }
        var currentTimeEle = createElement('div', {
            innerHTML: this.parent.getTimeString(this.parent.getCurrentTime()),
            className: cls.CURRENT_TIME_CLASS
        });
        headerWrap.appendChild(currentTimeEle);
        currentTimeEle.style[this.parent.enableRtl ? 'right' : 'left'] = formatUnit(left - (currentTimeEle.offsetWidth / 2));
    };
    TimelineViews.prototype.getLeftFromDateTime = function (currentDateIndex, date) {
        var startHour = this.getStartHour();
        var endHour = this.getEndHour();
        var diffInDates = 0;
        var diffInMinutes = ((date.getHours() - startHour.getHours()) * 60) + (date.getMinutes() - startHour.getMinutes());
        if (!isNullOrUndefined(currentDateIndex)) {
            var end = (endHour.getHours() === 0) ? 24 : endHour.getHours();
            if (currentDateIndex[0] !== 0) {
                diffInDates = (currentDateIndex[0]) * ((end - startHour.getHours()) * 60) + (endHour.getMinutes() - startHour.getMinutes());
            }
            diffInMinutes = diffInDates + diffInMinutes;
        }
        return (diffInMinutes * this.getWorkCellWidth() * this.parent.activeViewOptions.timeScale.slotCount) /
            this.parent.activeViewOptions.timeScale.interval;
    };
    TimelineViews.prototype.getWorkCellWidth = function () {
        return this.element.querySelector('.e-work-cells').getBoundingClientRect().width;
    };
    TimelineViews.prototype.renderHeader = function () {
        var tr = createElement('tr');
        if (this.parent.activeViewOptions.group.resources.length > 0 && !this.parent.uiStateValues.isGroupAdaptive) {
            this.parent.resourceBase.renderResourceHeaderIndent(tr);
        }
        var dateTd = createElement('td');
        dateTd.appendChild(this.renderDatesHeader());
        tr.appendChild(dateTd);
        prepend([tr], this.element.querySelector('tbody'));
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    TimelineViews.prototype.createAllDayRow = function (table, tdData) { };
    TimelineViews.prototype.getCurrentTimeIndicatorIndex = function () {
        var currentDateIndex = [];
        var index = this.parent.getIndexOfDate(this.renderDates, util.resetTime(this.parent.getCurrentTime()));
        if (index >= 0) {
            currentDateIndex.push(index);
        }
        return currentDateIndex;
    };
    TimelineViews.prototype.renderContent = function () {
        var tr = createElement('tr');
        if (this.parent.activeViewOptions.group.resources.length > 0 && !this.parent.uiStateValues.isGroupAdaptive) {
            var resTd = createElement('td');
            resTd.appendChild(this.parent.resourceBase.createResourceColumn());
            tr.appendChild(resTd);
        }
        var workTd = createElement('td');
        var wrap = this.renderContentArea();
        wrap.appendChild(this.createEventTable(this.getRowCount()));
        this.collapseRows(wrap);
        workTd.appendChild(wrap);
        tr.appendChild(workTd);
        if (this.parent.virtualScrollModule) {
            this.parent.virtualScrollModule.renderVirtualTrack(wrap);
        }
        this.element.querySelector('tbody').appendChild(tr);
    };
    TimelineViews.prototype.getRowCount = function () {
        if (this.parent.activeViewOptions.group.resources.length > 0 && !this.parent.uiStateValues.isGroupAdaptive) {
            return this.parent.resourceBase.renderedResources.length;
        }
        return 1;
    };
    TimelineViews.prototype.getResourceTdData = function (i, tdData) {
        var resLevel = this.parent.resourceBase.renderedResources[i];
        var resSHr = resLevel.resourceData[resLevel.resource.startHourField] || this.parent.workHours.start;
        var resEHr = resLevel.resourceData[resLevel.resource.endHourField] || this.parent.workHours.end;
        tdData.startHour = this.parent.getStartEndTime(resSHr);
        tdData.endHour = this.parent.getStartEndTime(resEHr);
        tdData.workDays = resLevel.resourceData[resLevel.resource.workDaysField] || this.parent.workDays;
        tdData.className = resLevel.className;
        tdData.groupIndex = resLevel.groupIndex;
        tdData.groupOrder = resLevel.groupOrder;
        return tdData;
    };
    TimelineViews.prototype.renderContentTable = function (table) {
        var tBody = table.querySelector('tbody');
        append(this.getContentRows(), tBody);
    };
    TimelineViews.prototype.getContentRows = function () {
        var rows = [];
        var tr = createElement('tr', { attrs: { role: 'row' } });
        var td = createElement('td', { attrs: { role: 'gridcell', 'aria-selected': 'false' } });
        var trCount = this.getRowCount();
        for (var i = 0; i < trCount; i++) {
            var ntr = tr.cloneNode();
            for (var _i = 0, _a = this.colLevels[this.colLevels.length - 1]; _i < _a.length; _i++) {
                var tdData = _a[_i];
                if (this.parent.activeViewOptions.group.resources.length > 0 && !this.parent.uiStateValues.isGroupAdaptive) {
                    tdData = this.getResourceTdData(i, tdData);
                }
                var ntd = this.createContentTd(tdData, tdData, td);
                ntr.appendChild(ntd);
            }
            rows.push(ntr);
        }
        return rows;
    };
    TimelineViews.prototype.getContentTdClass = function (r) {
        return (r.first || !this.parent.activeViewOptions.timeScale.enable) ? [cls.WORK_CELLS_CLASS] :
            [cls.WORK_CELLS_CLASS, cls.ALTERNATE_CELLS_CLASS];
    };
    TimelineViews.prototype.renderEvents = function () {
        this.timelineAppointment = new TimelineEvent(this.parent, this.parent.activeViewOptions.timeScale.enable ? 'hour' : 'day');
        this.timelineAppointment.renderAppointments();
        this.parent.notify(event.eventsLoaded, {});
    };
    TimelineViews.prototype.destroy = function () {
        if (!this.parent || this.parent && this.parent.isDestroyed) {
            return;
        }
        if (this.timelineAppointment) {
            this.timelineAppointment.destroy();
            this.timelineAppointment = null;
        }
        _super.prototype.destroy.call(this);
    };
    return TimelineViews;
}(VerticalView));
export { TimelineViews };
