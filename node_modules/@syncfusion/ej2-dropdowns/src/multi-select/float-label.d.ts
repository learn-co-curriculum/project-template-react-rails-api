import { FloatLabelType } from '@syncfusion/ej2-inputs';
/**
 * Function to create Float Label element.
 *
 * @param {HTMLDivElement} overAllWrapper - Overall wrapper of multiselect.
 * @param {HTMLElement} searchWrapper - Search wrapper of multiselect.
 * @param {HTMLElement} element - The given html element.
 * @param {HTMLInputElement} inputElement - Specify the input wrapper.
 * @param {number[] | string[] | boolean[]} value - Value of the MultiSelect.
 * @param {FloatLabelType} floatLabelType - Specify the FloatLabel Type.
 * @param {string} placeholder - Specify the PlaceHolder text.
 */
export declare function createFloatLabel(overAllWrapper: HTMLDivElement, searchWrapper: HTMLElement, element: HTMLElement, inputElement: HTMLInputElement, value: number[] | string[] | boolean[], floatLabelType: FloatLabelType, placeholder: string): void;
/**
 * Function to update status of the Float Label element.
 *
 * @param {string[] | number[] | boolean[]} value - Value of the MultiSelect.
 * @param {HTMLElement} label - Float label element.
 */
export declare function updateFloatLabelState(value: string[] | number[] | boolean[], label: HTMLElement): void;
/**
 * Function to remove Float Label element.
 *
 * @param {HTMLDivElement} overAllWrapper - Overall wrapper of multiselect.
 * @param {HTMLDivElement} componentWrapper - Wrapper element of multiselect.
 * @param {HTMLElement} searchWrapper - Search wrapper of multiselect.
 * @param {HTMLInputElement} inputElement - Specify the input wrapper.
 * @param {number[] | string[] | boolean[]} value - Value of the MultiSelect.
 * @param {FloatLabelType} floatLabelType - Specify the FloatLabel Type.
 * @param {string} placeholder - Specify the PlaceHolder text.
 */
export declare function removeFloating(overAllWrapper: HTMLDivElement, componentWrapper: HTMLDivElement, searchWrapper: HTMLElement, inputElement: HTMLInputElement, value: number[] | string[] | boolean[], floatLabelType: FloatLabelType, placeholder: string): void;
/**
 * Function to set the placeholder to the element.
 *
 * @param {number[] | string[] | boolean[]} value - Value of the MultiSelect.
 * @param {HTMLInputElement} inputElement - Specify the input wrapper.
 * @param {string} placeholder - Specify the PlaceHolder text.
 */
export declare function setPlaceHolder(value: number[] | string[] | boolean[], inputElement: HTMLInputElement, placeholder: string): void;
/**
 * Function for focusing the Float Element.
 *
 * @param {HTMLDivElement} overAllWrapper - Overall wrapper of multiselect.
 * @param {HTMLDivElement} componentWrapper - Wrapper element of multiselect.
 */
export declare function floatLabelFocus(overAllWrapper: HTMLDivElement, componentWrapper: HTMLDivElement): void;
/**
 * Function to focus the Float Label element.
 *
 * @param {HTMLDivElement} overAllWrapper - Overall wrapper of multiselect.
 * @param {HTMLDivElement} componentWrapper - Wrapper element of multiselect.
 * @param {number[] | string[] | boolean[]} value - Value of the MultiSelect.
 * @param {FloatLabelType} floatLabelType - Specify the FloatLabel Type.
 * @param {string} placeholder - Specify the PlaceHolder text.
 */
export declare function floatLabelBlur(overAllWrapper: HTMLDivElement, componentWrapper: HTMLDivElement, value: number[] | string[] | boolean[], floatLabelType: FloatLabelType, placeholder: string): void;
