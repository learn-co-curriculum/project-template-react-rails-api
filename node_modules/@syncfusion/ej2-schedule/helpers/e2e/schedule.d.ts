import { TestHelper } from '@syncfusion/ej2-base/helpers/e2e';
/**
 * export schedule component
 */
export declare class ScheduleHelper extends TestHelper {
    id: string;
    wrapperFn: Function;
    /**
     * Initialize the Schedule E2E helpers
     *
     * @param {string} id Element id of the Schedule
     * @param {Function} wrapperFn Pass the wrapper function
     */
    constructor(id: string, wrapperFn: Function);
    /**
     * Retrieves the rendered html element of Schedule.
     *
     * @function getElement
     * @returns {HTMLElement} Returns the rendered html element of Schedule.
     */
    getElement(): HTMLElement;
    /**
     * Retrieves the rendered html element of event editor Dialog
     *
     * @function getEventWindow
     * @returns {HTMLElement} Returns the rendered html element of Dialog.
     */
    getEventWindow(): HTMLElement;
    /**
     * Retrieves the rendered html element of RecurrenceAlert.
     *
     * @function getAlertDialog
     * @returns {HTMLElement} Returns the rendered html element of RecurrenceAlert.
     */
    getAlertDialog(): HTMLElement;
    /**
     * Retrieves the rendered html element of QuickInfo.
     *
     * @function getQuickPopup
     * @returns {HTMLElement} the rendered html element of QuickInfo.
     */
    getQuickPopup(): HTMLElement;
    /**
     * Retrieves the rendered html element of ViewEventInfo.
     *
     * @function getMorePopup
     * @returns {HTMLElement} Returns the rendered html element of ViewEventInfo.
     */
    getMorePopup(): HTMLElement;
}
