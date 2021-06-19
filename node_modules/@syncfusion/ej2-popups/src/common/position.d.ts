/**
 *
 * @param {HTMLElement} anchor - specifies the element
 * @param {HTMLElement} element - specifies the element
 * @returns {OffsetPosition} - returns the value
 */
export declare function calculateRelativeBasedPosition(anchor: HTMLElement, element: HTMLElement): OffsetPosition;
/**
 *
 * @param {Element} currentElement - specifies the element
 * @param {string} positionX - specifies the position
 * @param {string} positionY - specifies the position
 * @param {boolean} parentElement - specifies the boolean
 * @param {ClientRect} targetValues - specifies the client
 * @returns {OffsetPosition} - returns the position
 */
export declare function calculatePosition(currentElement: Element, positionX?: string, positionY?: string, parentElement?: boolean, targetValues?: ClientRect): OffsetPosition;
/**
 * Provides information about a OffsetPosition.
 */
export interface OffsetPosition {
    left: number;
    top: number;
}
