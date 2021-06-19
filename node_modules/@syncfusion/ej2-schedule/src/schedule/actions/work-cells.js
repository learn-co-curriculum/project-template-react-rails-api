/* eslint-disable @typescript-eslint/no-explicit-any */
import { extend, closest, isNullOrUndefined, EventHandler } from '@syncfusion/ej2-base';
import * as event from '../base/constant';
import * as cls from '../base/css-constant';
/**
 * Work cell interactions
 */
var WorkCellInteraction = /** @class */ (function () {
    function WorkCellInteraction(parent) {
        this.parent = parent;
        EventHandler.add(this.parent.element, 'mouseover', this.onHover, this);
    }
    WorkCellInteraction.prototype.cellMouseDown = function (e) {
        if (this.isPreventAction(e)) {
            return;
        }
        this.parent.notify(event.cellMouseDown, { event: e });
    };
    WorkCellInteraction.prototype.cellClick = function (e) {
        var _this = this;
        if (this.isPreventAction(e)) {
            return;
        }
        var queryStr = '.' + cls.WORK_CELLS_CLASS + ',.' + cls.ALLDAY_CELLS_CLASS + ',.' + cls.HEADER_CELLS_CLASS;
        var target = closest(e.target, queryStr);
        if (isNullOrUndefined(target)) {
            return;
        }
        if (!isNullOrUndefined(closest(e.target, '.' + cls.NEW_EVENT_CLASS))) {
            this.parent.eventWindow.openEditor(this.parent.activeCellsData, 'Add');
            return;
        }
        var navigateEle = closest(e.target, '.' + cls.NAVIGATE_CLASS);
        var navigateView = this.parent.getNavigateView();
        var sameView = this.parent.currentView === navigateView;
        if (isNullOrUndefined(navigateEle) || sameView ||
            isNullOrUndefined(this.parent.viewOptions[navigateView.charAt(0).toLowerCase() + navigateView.slice(1)])) {
            if (this.parent.activeViewOptions.readonly && this.parent.currentView !== 'MonthAgenda') {
                if (this.parent.quickPopup) {
                    this.parent.quickPopup.quickPopupHide();
                }
                return;
            }
            if (this.parent.isAdaptive && (e.target.classList.contains(cls.MORE_INDICATOR_CLASS) ||
                closest(e.target, '.' + cls.MORE_INDICATOR_CLASS))) {
                return;
            }
            var isWorkCell_1 = target.classList.contains(cls.WORK_CELLS_CLASS) ||
                target.classList.contains(cls.ALLDAY_CELLS_CLASS);
            if (isWorkCell_1 && e.shiftKey && e.which === 1 && this.parent.keyboardInteractionModule) {
                this.parent.keyboardInteractionModule.onMouseSelection(e);
                return;
            }
            this.parent.activeCellsData = this.parent.getCellDetails(target);
            var args = extend(this.parent.activeCellsData, { cancel: false, event: e, name: 'cellClick' });
            this.parent.trigger(event.cellClick, args, function (clickArgs) {
                if (!clickArgs.cancel) {
                    if (isWorkCell_1) {
                        _this.parent.selectCell(target);
                    }
                    if (_this.parent.allowInline) {
                        var inlineArgs = {
                            element: clickArgs.element,
                            groupIndex: clickArgs.groupIndex, type: 'Cell'
                        };
                        _this.parent.notify(event.inlineClick, inlineArgs);
                    }
                    else {
                        _this.parent.notify(event.cellClick, clickArgs);
                    }
                }
                else {
                    if (_this.parent.quickPopup) {
                        _this.parent.quickPopup.quickPopupHide();
                    }
                }
            });
        }
        else {
            var date = this.parent.getDateFromElement(target);
            if (!isNullOrUndefined(date) && !this.parent.isAdaptive && this.parent.isMinMaxDate(date)) {
                this.parent.setProperties({ selectedDate: date }, true);
                this.parent.changeView(this.parent.getNavigateView(), e);
            }
        }
    };
    WorkCellInteraction.prototype.cellDblClick = function (e) {
        var _this = this;
        var queryStr = '.' + cls.WORK_CELLS_CLASS + ',.' + cls.ALLDAY_CELLS_CLASS + ',.' + cls.HEADER_CELLS_CLASS;
        var target = closest(e.target, queryStr);
        if (this.parent.activeViewOptions.readonly || this.isPreventAction(e) || isNullOrUndefined(target)) {
            return;
        }
        var args = extend(this.parent.activeCellsData, { cancel: false, event: e, name: 'cellDoubleClick' });
        this.parent.trigger(event.cellDoubleClick, args, function (clickArgs) {
            var date = new Date(clickArgs.startTime.getTime());
            if (!_this.parent.isMinMaxDate(new Date(date.setHours(0, 0, 0, 0)))) {
                return;
            }
            if (!clickArgs.cancel) {
                _this.parent.eventWindow.openEditor(_this.parent.activeCellsData, 'Add');
            }
        });
    };
    WorkCellInteraction.prototype.onHover = function (e) {
        var targetSelector = '.' + cls.WORK_CELLS_CLASS + ',.' + cls.TIME_SLOT_CLASS + ',.' + cls.ALLDAY_CELLS_CLASS + ',.' +
            cls.HEADER_CELLS_CLASS + ',.' + cls.RESOURCE_CELLS_CLASS + ',.' + cls.APPOINTMENT_CLASS + ',.' + cls.WEEK_NUMBER_CLASS +
            ',.' + cls.MONTH_HEADER_CLASS;
        var hoverTarget = closest(e.target, targetSelector);
        if (hoverTarget) {
            var hoverArgs = { element: hoverTarget, event: e };
            this.parent.trigger(event.hover, hoverArgs);
        }
    };
    WorkCellInteraction.prototype.isPreventAction = function (e) {
        if (closest(e.target, '.' + cls.NAVIGATE_CLASS)) {
            return false;
        }
        if (closest(e.target, '.' + cls.APPOINTMENT_WRAPPER_CLASS) &&
            !closest(e.target, '.' + cls.MORE_INDICATOR_CLASS)) {
            return true;
        }
        var target = closest(e.target, '.' + cls.APPOINTMENT_CLASS + ',.' + cls.RESOURCE_GROUP_CELLS_CLASS);
        if (!isNullOrUndefined(target)) {
            return true;
        }
        target = closest(e.target, '.' + cls.HEADER_CELLS_CLASS);
        if (this.parent.activeView.isTimelineView() && !isNullOrUndefined(target)) {
            return true;
        }
        return false;
    };
    WorkCellInteraction.prototype.destroy = function () {
        EventHandler.remove(this.parent.element, 'mouseover', this.onHover);
    };
    return WorkCellInteraction;
}());
export { WorkCellInteraction };
