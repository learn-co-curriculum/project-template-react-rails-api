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
import { EventHandler, createElement, formatUnit } from '@syncfusion/ej2-base';
import { Month } from './month';
import { TimelineEvent } from '../event-renderer/timeline-view';
import { TimelineHeaderRow } from './timeline-header-row';
import * as util from '../base/util';
import * as event from '../base/constant';
import * as cls from '../base/css-constant';
/**
 * timeline month view
 */
var TimelineMonth = /** @class */ (function (_super) {
    __extends(TimelineMonth, _super);
    function TimelineMonth(parent) {
        var _this = _super.call(this, parent) || this;
        _this.viewClass = 'e-timeline-month-view';
        _this.isInverseTableSelect = true;
        _this.appointment = null;
        return _this;
    }
    TimelineMonth.prototype.getModuleName = function () {
        return 'timelineMonth';
    };
    TimelineMonth.prototype.onDataReady = function () {
        this.appointment = new TimelineEvent(this.parent, 'day');
        this.appointment.renderAppointments();
        this.parent.notify(event.eventsLoaded, {});
    };
    TimelineMonth.prototype.getLeftPanelElement = function () {
        return this.element.querySelector('.' + cls.RESOURCE_COLUMN_WRAP_CLASS);
    };
    TimelineMonth.prototype.scrollTopPanel = function (target) {
        _super.prototype.scrollTopPanel.call(this, target);
        this.scrollHeaderLabels(target);
    };
    TimelineMonth.prototype.setContentHeight = function (content, leftPanelElement, height) {
        if (leftPanelElement) {
            leftPanelElement.style.height = formatUnit(height - this.getScrollXIndent(content));
        }
        content.style.height = formatUnit(height);
    };
    TimelineMonth.prototype.getDateSlots = function (renderDates, workDays) {
        var dateSlots = [];
        for (var _i = 0, renderDates_1 = renderDates; _i < renderDates_1.length; _i++) {
            var col = renderDates_1[_i];
            var classList = [cls.HEADER_CELLS_CLASS];
            if (this.isCurrentDate(col)) {
                classList.push(cls.CURRENT_DAY_CLASS);
            }
            dateSlots.push({ date: col, type: 'dateHeader', className: classList, colSpan: 1, workDays: workDays });
        }
        return dateSlots;
    };
    TimelineMonth.prototype.renderLeftIndent = function (tr) {
        if (this.parent.activeViewOptions.group.resources.length > 0 && !this.parent.uiStateValues.isGroupAdaptive) {
            this.parent.resourceBase.renderResourceHeaderIndent(tr);
        }
    };
    TimelineMonth.prototype.renderContent = function () {
        var contentTr = createElement('tr');
        if (this.parent.activeViewOptions.group.resources.length > 0 && !this.parent.uiStateValues.isGroupAdaptive) {
            var resTd = createElement('td');
            resTd.appendChild(this.parent.resourceBase.createResourceColumn());
            contentTr.appendChild(resTd);
        }
        var contentTd = createElement('td');
        this.element.querySelector('tbody').appendChild(contentTr);
        var wrap = createElement('div', { className: cls.CONTENT_WRAP_CLASS });
        wrap.appendChild(this.renderContentArea());
        wrap.appendChild(this.createEventTable(this.getRowCount()));
        this.collapseRows(wrap);
        EventHandler.add(wrap, 'scroll', this.onContentScroll, this);
        contentTd.appendChild(wrap);
        if (this.parent.virtualScrollModule) {
            this.parent.virtualScrollModule.renderVirtualTrack(wrap);
        }
        contentTr.appendChild(contentTd);
    };
    TimelineMonth.prototype.getRowCount = function () {
        if (this.parent.activeViewOptions.group.resources.length > 0 && !this.parent.uiStateValues.isGroupAdaptive) {
            return this.parent.resourceBase.renderedResources.length;
        }
        return 1;
    };
    TimelineMonth.prototype.getContentSlots = function () {
        var slotDatas = [];
        for (var row = 0; row < this.getRowCount(); row++) {
            for (var _i = 0, _a = this.colLevels[this.colLevels.length - 1]; _i < _a.length; _i++) {
                var data = _a[_i];
                data.className = [cls.WORK_CELLS_CLASS];
                if (this.parent.activeViewOptions.group.resources.length > 0 && !this.parent.uiStateValues.isGroupAdaptive) {
                    var resLevel = this.parent.resourceBase.renderedResources[row];
                    data.workDays = resLevel.resourceData[resLevel.resource.workDaysField] || this.parent.workDays;
                    data.className = data.className.concat(resLevel.className);
                    data.groupIndex = resLevel.groupIndex;
                    data.groupOrder = resLevel.groupOrder;
                }
                var slotData = {
                    date: new Date(+data.date), colSpan: data.colSpan, groupIndex: data.groupIndex, workDays: data.workDays,
                    type: 'monthCells', className: data.className
                };
                if (!slotDatas[row]) {
                    slotDatas[row] = [];
                }
                slotDatas[row].push(slotData);
            }
        }
        return slotDatas;
    };
    TimelineMonth.prototype.updateClassList = function (data) {
        if (!this.parent.isMinMaxDate(data.date)) {
            data.className.push(cls.DISABLE_DATES);
        }
    };
    TimelineMonth.prototype.unWireEvents = function () {
        EventHandler.remove(this.getContentAreaElement(), 'scroll', this.onContentScroll);
    };
    TimelineMonth.prototype.getMonthStart = function (currentDate) {
        var monthStart = this.parent.calendarUtil.firstDateOfMonth(util.resetTime(currentDate));
        return new Date(monthStart.getFullYear(), monthStart.getMonth(), monthStart.getDate());
    };
    TimelineMonth.prototype.getMonthEnd = function (currentDate) {
        var monthStart = this.parent.calendarUtil.firstDateOfMonth(util.resetTime(currentDate));
        return this.parent.calendarUtil.lastDateOfMonth(util.addMonths(new Date(+monthStart), this.parent.activeViewOptions.interval - 1));
    };
    TimelineMonth.prototype.generateColumnLevels = function () {
        var colLevels = [];
        var level = this.getDateSlots(this.renderDates, this.parent.activeViewOptions.workDays);
        colLevels.push(level);
        if (this.parent.activeViewOptions.group.resources.length > 0) {
            this.parent.resourceBase.generateResourceLevels(level, !this.parent.uiStateValues.isGroupAdaptive);
        }
        var hourSlots = [];
        if (this.parent.activeViewOptions.headerRows.length > 0) {
            var renderGn = new TimelineHeaderRow(this.parent, this.renderDates);
            colLevels = renderGn.generateColumnLevels(level, hourSlots);
        }
        this.colLevels = colLevels;
        return colLevels;
    };
    TimelineMonth.prototype.destroy = function () {
        if (!this.parent || this.parent && this.parent.isDestroyed) {
            return;
        }
        if (this.element) {
            var contentScrollableEle = this.element.querySelector('.' + cls.CONTENT_WRAP_CLASS);
            if (contentScrollableEle) {
                EventHandler.remove(contentScrollableEle, 'scroll', this.onContentScroll);
            }
        }
        if (this.appointment) {
            this.appointment.destroy();
            this.appointment = null;
        }
        _super.prototype.destroy.call(this);
    };
    return TimelineMonth;
}(Month));
export { TimelineMonth };
