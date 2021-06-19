import { VScroll } from './v-scroll';
import { HScroll } from './h-scroll';
/**
 * Used to add scroll in menu.
 *
 * @param {createElementType} createElement - Specifies the create element model
 * @param {HTMLElement} container - Specifies the element container
 * @param {HTMLElement} content - Specifies the content element
 * @param {string} scrollType - Specifies the scroll type
 * @param {boolean} enableRtl - Specifies the enable RTL property
 * @param {boolean} offset - Specifies the offset value
 * @returns {HTMLElement} - Element
 * @hidden
 */
export declare function addScrolling(createElem: createElementType, container: HTMLElement, content: HTMLElement, scrollType: string, enableRtl: boolean, offset?: number): HTMLElement;
/**
 * Used to destroy the scroll option.
 *
 * @param {VScroll | HScroll} scrollObj - Specifies the scroller object
 * @param {Element} element - Specifies the element
 * @param {HTMLElement} skipEle - Specifies the skip  element
 * @returns {void}
 * @hidden
 */
export declare function destroyScroll(scrollObj: VScroll | HScroll, element: Element, skipEle?: HTMLElement): void;
declare type createElementType = (tag: string, prop?: {
    className?: string;
}) => HTMLElement;
export {};
