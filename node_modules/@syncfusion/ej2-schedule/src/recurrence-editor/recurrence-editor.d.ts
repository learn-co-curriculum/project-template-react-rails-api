import { Component, INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { EmitType, L10n } from '@syncfusion/ej2-base';
import { RecurrenceEditorModel } from './recurrence-editor-model';
import { CalendarType } from '../common/calendar-util';
/**
 * Represents the RecurrenceEditor component.
 * ```html
 * <div id="recurrence"></div>
 * ```
 * ```typescript
 * <script>
 *   var recObj = new RecurrenceEditor();
 *   recObj.appendTo("#recurrence");
 * </script>
 * ```
 */
export declare class RecurrenceEditor extends Component<HTMLElement> implements INotifyPropertyChanged {
    /**
     * Sets the recurrence pattern on the editor.
     *
     * @default ['none', 'daily', 'weekly', 'monthly', 'yearly']
     */
    frequencies: RepeatType[];
    /**
     * Sets the first day of the week.
     *
     * @default 0
     */
    firstDayOfWeek: number;
    /**
     * Sets the start date on recurrence editor.
     *
     * @default new Date()
     * @aspDefaultValue DateTime.Now
     */
    startDate: Date;
    /**
     * Sets the user specific date format on recurrence editor.
     *
     * @default null
     */
    dateFormat: string;
    /**
     * Sets the specific calendar type to be applied on recurrence editor.
     *
     * @default 'Gregorian'
     */
    calendarMode: CalendarType;
    /**
     * Allows styling with custom class names.
     *
     * @default null
     */
    cssClass: string;
    /**
     * Sets the recurrence rule as its output values.
     *
     * @default null
     */
    value: string;
    /**
     * Sets the minimum date on recurrence editor.
     *
     * @default new Date(1900, 0, 1)
     * @aspDefaultValue new DateTime(1900, 1, 1)
     */
    minDate: Date;
    /**
     * Sets the maximum date on recurrence editor.
     *
     * @default new Date(2099, 11, 31)
     * @aspDefaultValue new DateTime(2099, 12, 31)
     */
    maxDate: Date;
    /**
     * Sets the current repeat type to be set on the recurrence editor.
     *
     * @default 0
     * @aspType int
     */
    selectedType: number;
    /**
     * Triggers for value changes on every sub-controls rendered within the recurrence editor.
     *
     * @event 'change'
     */
    change: EmitType<RecurrenceEditorChangeEventArgs>;
    /**
     * Constructor for creating the widget
     *
     * @param {RecurrenceEditorModel} options Accepts the recurrence editor model properties to initiate the rendering
     * @param {string | HTMLElement} element Accepts the DOM element reference
     */
    constructor(options?: RecurrenceEditorModel, element?: string | HTMLElement);
    localeObj: L10n;
    private defaultLocale;
    private renderStatus;
    private ruleObject;
    private recurrenceCount;
    private monthDate;
    private repeatInterval;
    private untilDateObj;
    private repeatType;
    private endType;
    private monthWeekPos;
    private monthWeekDays;
    private monthValue;
    private onMonthDay;
    private onWeekDay;
    private dayButtons;
    private monthButtons;
    private calendarUtil;
    private startState;
    protected preRender(): void;
    private applyCustomClass;
    private initialize;
    private triggerChangeEvent;
    private resetDayButton;
    private daySelection;
    private rtlClass;
    private updateUntilDate;
    private selectMonthDay;
    private updateForm;
    private updateEndOnForm;
    private freshOnEndForm;
    private showFormElement;
    private renderDropdowns;
    private setDefaultValue;
    private resetFormValues;
    private getPopupWidth;
    private renderDatePickers;
    private getFormat;
    private dayButtonRender;
    private radioButtonRender;
    private numericTextboxRender;
    private renderComponent;
    private rotateArray;
    private getEndData;
    private getDayPosition;
    private getRepeatData;
    private getMonthPosData;
    private getDayData;
    private getMonthData;
    private setTemplate;
    private getSelectedDaysData;
    private getSelectedMonthData;
    private getIntervalData;
    private getEndOnCount;
    private getYearMonthRuleData;
    private updateWeekButton;
    private updateMonthUI;
    private updateUI;
    private getUntilData;
    private destroyComponents;
    resetFields(): void;
    updateRuleUntilDate(startDate: Date): void;
    private getCalendarMode;
    getRuleSummary(rule?: string): string;
    getRecurrenceDates(startDate: Date, rule: string, excludeDate?: string, maximumCount?: number, viewDate?: Date): number[];
    getRecurrenceRule(): string;
    setRecurrenceRule(rule: string, startDate?: Date): void;
    /**
     * Destroys the widget.
     *
     * @returns {void}
     */
    destroy(): void;
    /**
     * Get component name.
     *
     * @returns {string} Returns the module name
     * @private
     */
    getModuleName(): string;
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @returns {string} Returns the persisted state
     */
    getPersistData(): string;
    /**
     * Initialize the control rendering
     *
     * @returns {void}
     * @private
     */
    render(): void;
    /**
     * Called internally, if any of the property value changed.
     *
     * @param {RecurrenceEditorModel} newProp Accepts the changed properties new values
     * @param {RecurrenceEditorModel} oldProp Accepts the changed properties old values
     * @returns {void}
     * @private
     */
    onPropertyChanged(newProp: RecurrenceEditorModel, oldProp: RecurrenceEditorModel): void;
}
/**
 * Interface that holds the option on changing the rule in the recurrence editor.
 */
export interface RecurrenceEditorChangeEventArgs {
    /** Returns the current recurrence rule. */
    value: string;
}
export declare type RepeatType = 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly';
