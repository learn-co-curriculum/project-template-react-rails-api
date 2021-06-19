import { TestHelper } from '@syncfusion/ej2-base/helpers/e2e';
/**
 * export schedule component
 */
export declare class RecurrenceEditorHelper extends TestHelper {
    id: string;
    wrapperFn: Function;
    /**
     * Initialize the Recurrence Editor E2E helpers
     *
     * @param {string} id Element id of the Recurrence Editor
     * @param {Function} wrapperFn Pass the wrapper function
     */
    constructor(id: string, wrapperFn: Function);
    /**
     * Retrieves the rendered html element of Recurrence Editor.
     *
     * @function getElement
     * @returns {HTMLElement} Returns the rendered html element of Recurrence Editor.
     */
    getElement(): HTMLElement;
    /**
     * Set the repeat type into setModel based on selected value.
     *
     * @function changeRepeatType
     * @param {string | number} repeatType (Never, Daily, Weekly, Monthly, Yearly) of the event.
     * @returns {void}
     */
    changeRepeatType(repeatType: string | number): void;
}
