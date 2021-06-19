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
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createElement, addClass, formatUnit, remove } from '@syncfusion/ej2-base';
import { AgendaBase } from '../event-renderer/agenda-base';
import { Month } from './month';
import * as util from '../base/util';
import * as events from '../base/constant';
import * as cls from '../base/css-constant';
/**
 * month agenda view
 */
var MonthAgenda = /** @class */ (function (_super) {
    __extends(MonthAgenda, _super);
    function MonthAgenda(parent) {
        var _this = _super.call(this, parent) || this;
        _this.dayNameFormat = 'narrow';
        _this.viewClass = 'e-month-agenda-view';
        _this.monthAgendaDate = new Date('' + parent.selectedDate);
        return _this;
    }
    MonthAgenda.prototype.getModuleName = function () {
        return 'monthAgenda';
    };
    MonthAgenda.prototype.renderAppointmentContainer = function () {
        var contentArea = this.getContentAreaElement();
        var wrapperContainer = createElement('div', { className: cls.WRAPPER_CONTAINER_CLASS });
        contentArea.appendChild(wrapperContainer);
        var appWrap = createElement('div', { className: cls.APPOINTMENT_WRAP_CLASS });
        wrapperContainer.appendChild(appWrap);
        this.appendAppContainer(appWrap);
        this.setEventWrapperHeight();
    };
    MonthAgenda.prototype.getDayNameFormat = function () {
        if (this.parent.isAdaptive) {
            return 'narrow';
        }
        return 'abbreviated';
    };
    MonthAgenda.prototype.setEventWrapperHeight = function () {
        var headerHeight = (this.parent.headerModule ? this.parent.headerModule.getHeaderElement().offsetHeight : 0) + 2;
        var resourceWrapper = this.parent.element.querySelector('.' + cls.RESOURCE_HEADER_TOOLBAR);
        if (resourceWrapper) {
            headerHeight += resourceWrapper.offsetHeight;
        }
        var contentArea = this.getContentAreaElement().firstElementChild;
        var dateHeader = this.element.querySelector('.' + cls.DATE_HEADER_WRAP_CLASS);
        var availHeight = this.parent.element.offsetHeight - headerHeight - dateHeader.offsetHeight - contentArea.offsetHeight;
        var wrapperContainer = this.element.querySelector('.' + cls.WRAPPER_CONTAINER_CLASS);
        var eventWrapper = this.element.querySelector('.' + cls.APPOINTMENT_WRAP_CLASS);
        if (this.parent.height !== 'auto') {
            wrapperContainer.style.height = eventWrapper.style.height = formatUnit(availHeight);
        }
    };
    MonthAgenda.prototype.onDataReady = function (args) {
        this.setEventWrapperHeight();
        this.clearElements();
        var eventCollection = args.processedData;
        if (this.parent.uiStateValues.isGroupAdaptive) {
            var resource = this.parent.resourceBase.lastResourceLevel[this.parent.uiStateValues.groupIndex];
            eventCollection = this.parent.eventBase.filterEventsByResource(resource, eventCollection);
        }
        this.agendaBase = this.getAgendaBase();
        this.parent.eventsProcessed = this.agendaBase.processAgendaEvents(eventCollection);
        var count = 0;
        for (var _i = 0, _a = this.renderDates; _i < _a.length; _i++) {
            var date = _a[_i];
            var filterData = this.appointmentFiltering(date);
            var workCell = this.element.querySelectorAll('.' + cls.WORK_CELLS_CLASS)[count];
            if (filterData.length > 0) {
                if (!workCell.querySelector('.' + cls.APPOINTMENT_INDICATOR_CLASS)) {
                    workCell.appendChild(createElement('div', { className: cls.APPOINTMENT_INDICATOR_CLASS }));
                }
                if (date.getTime() === util.resetTime(new Date(this.monthAgendaDate.getTime())).getTime()) {
                    this.onEventRender(filterData, date);
                }
            }
            count++;
        }
        this.parent.notify(events.eventsLoaded, {});
    };
    MonthAgenda.prototype.onCellClick = function (event) {
        if (this.parent.quickPopup) {
            this.parent.quickPopup.quickPopupHide();
        }
        var filterData = this.appointmentFiltering(event.startTime);
        this.onEventRender(filterData, event.startTime);
        this.parent.notify(events.eventsLoaded, {});
        this.monthAgendaDate = new Date('' + event.startTime);
    };
    MonthAgenda.prototype.onEventRender = function (events, date) {
        this.agendaBase = this.getAgendaBase();
        var appWrap = this.element.querySelector('.' + cls.APPOINTMENT_WRAP_CLASS);
        util.removeChildren(appWrap);
        if (this.parent.activeViewOptions.group.resources.length === 0 || this.parent.uiStateValues.isGroupAdaptive) {
            if (events.length > 0) {
                var appContainer = createElement('div', { className: cls.APPOINTMENT_CONTAINER_CLASS });
                appWrap.appendChild(this.agendaBase.createAgendaContentElement('data', events, appContainer));
            }
            else {
                this.appendAppContainer(appWrap);
            }
        }
        else {
            if (events.length > 0) {
                var table = this.createTableLayout();
                var tBody = table.querySelector('tbody');
                this.agendaBase.calculateResourceTableElement(tBody, 1, date);
                table.appendChild(tBody);
                appWrap.appendChild(table);
            }
            else {
                this.appendAppContainer(appWrap);
            }
        }
        this.agendaBase.wireEventActions();
    };
    MonthAgenda.prototype.appointmentFiltering = function (date) {
        var dateStart = util.resetTime(new Date(date.getTime()));
        var dateEnd = util.setTime(new Date(dateStart.getTime()), util.MS_PER_DAY);
        return this.parent.eventBase.filterEvents(dateStart, dateEnd);
    };
    MonthAgenda.prototype.clearElements = function () {
        var appointmentIndicators = [].slice.call(this.element.querySelectorAll('.' + cls.APPOINTMENT_INDICATOR_CLASS));
        for (var _i = 0, appointmentIndicators_1 = appointmentIndicators; _i < appointmentIndicators_1.length; _i++) {
            var appointmentIndicator = appointmentIndicators_1[_i];
            remove(appointmentIndicator);
        }
        this.appendAppContainer(this.element.querySelector('.' + cls.APPOINTMENT_WRAP_CLASS));
    };
    MonthAgenda.prototype.appendAppContainer = function (appWrap) {
        var app = createElement('div', { className: cls.APPOINTMENT_CONTAINER_CLASS });
        addClass([app], cls.AGENDA_NO_EVENT_CLASS);
        app.innerHTML = this.parent.localeObj.getConstant('noEvents');
        util.removeChildren(appWrap);
        appWrap.appendChild(app);
    };
    MonthAgenda.prototype.getNextPreviousDate = function (type) {
        var selectedDate = this.parent.selectedDate;
        var interval = (type === 'next') ? this.parent.activeViewOptions.interval : -this.parent.activeViewOptions.interval;
        var navigateDate = util.addMonths(this.parent.selectedDate, interval);
        var month = (type === 'next') ? 2 : 0;
        var lastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + month, 0).getDate();
        var date = (lastDate >= this.monthAgendaDate.getDate()) ? this.monthAgendaDate.getDate() : lastDate;
        this.monthAgendaDate = new Date(navigateDate.getFullYear(), navigateDate.getMonth(), date);
        return this.monthAgendaDate;
    };
    MonthAgenda.prototype.getAgendaBase = function () {
        return this.agendaBase || new AgendaBase(this.parent);
    };
    MonthAgenda.prototype.destroy = function () {
        if (this.agendaBase) {
            this.agendaBase.destroy();
            this.agendaBase = null;
        }
        _super.prototype.destroy.call(this);
    };
    return MonthAgenda;
}(Month));
export { MonthAgenda };
