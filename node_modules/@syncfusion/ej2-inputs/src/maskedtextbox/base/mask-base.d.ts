import { BaseEventArgs } from '@syncfusion/ej2-base';
/**
 * @hidden
 * Built-in masking elements collection.
 */
export declare const regularExpressions: {
    [key: string]: string;
};
interface MaskFocusEventArgs extends BaseEventArgs {
    /** Returns selectionStart value as zero by default */
    selectionStart?: number;
    /** Returns selectionEnd value depends on mask length */
    selectionEnd?: number;
    /** Returns the original event arguments. */
    event?: MouseEvent | FocusEvent | TouchEvent | KeyboardEvent;
    /** Returns the value of MaskedTextBox. */
    value?: string;
    /** Returns the maskedValue of MaskedTextBox. */
    maskedValue?: string;
    /** Returns the MaskedTextBox container element */
    container?: HTMLElement;
}
/**
 * Generate required masking elements to the MaskedTextBox from user mask input.
 *
 * @hidden
 */
export declare function createMask(): void;
/**
 * Apply mask ability with masking elements to the MaskedTextBox.
 *
 * @hidden
 */
export declare function applyMask(): void;
/**
 * To wire required events to the MaskedTextBox.
 *
 * @hidden
 */
export declare function wireEvents(): void;
/**
 * To unwire events attached to the MaskedTextBox.
 *
 * @hidden
 */
export declare function unwireEvents(): void;
/**
 * To bind required events to the MaskedTextBox clearButton.
 *
 * @hidden
 */
export declare function bindClearEvent(): void;
/**
 * To get masked value from the MaskedTextBox.
 *
 * @hidden
 */
export declare function unstrippedValue(element: HTMLInputElement): string;
/**
 * To extract raw value from the MaskedTextBox.
 *
 * @hidden
 */
export declare function strippedValue(element: HTMLInputElement, maskValues: string): string;
export declare function maskInputMouseDownHandler(): void;
export declare function maskInputMouseUpHandler(): void;
export declare function maskInputFocusHandler(event: MouseEvent | FocusEvent | TouchEvent | KeyboardEvent): void;
export declare function triggerFocus(eventArgs: MaskFocusEventArgs, inputElement: HTMLInputElement): void;
export declare function maskInputBlurHandler(event: MouseEvent | FocusEvent | TouchEvent | KeyboardEvent): void;
export declare function maskInputDropHandler(event: MouseEvent): void;
export declare function mobileRemoveFunction(): void;
/**
 * To set updated values in the MaskedTextBox.
 *
 * @hidden
 */
export declare function setMaskValue(val?: string): void;
/**
 * To set updated values in the input element.
 *
 * @hidden
 */
export declare function setElementValue(val: string, element?: HTMLInputElement): void;
/**
 * Provide mask support to input textbox through utility method.
 *
 * @hidden
 */
export declare function maskInput(args: MaskInputArgs): void;
/**
 * Gets raw value of the textbox which has been masked through utility method.
 *
 * @hidden
 */
export declare function getVal(args: GetValueInputArgs): string;
/**
 * Gets masked value of the textbox which has been masked through utility method.
 *
 * @hidden
 */
export declare function getMaskedVal(args: GetValueInputArgs): string;
/**
 * Arguments to get the raw and masked value of MaskedTextBox which has been masked through utility method.
 *
 * @hidden
 */
export interface GetValueInputArgs {
    element: HTMLInputElement;
    mask: string;
    promptChar?: string;
    customCharacters?: {
        [x: string]: Object;
    };
}
/**
 * Arguments to mask input textbox through utility method.
 *
 * @hidden
 */
export interface MaskInputArgs extends GetValueInputArgs {
    value?: string;
}
/**
 * Arguments to perform undo and redo functionalities.
 *
 * @hidden
 */
export declare class MaskUndo {
    value: string;
    startIndex: number;
    endIndex: number;
}
export {};
