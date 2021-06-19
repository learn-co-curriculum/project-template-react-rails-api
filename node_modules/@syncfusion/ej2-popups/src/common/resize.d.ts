/**
 * Provides information about a Resize event.
 */
export interface ResizeArgs {
    element: HTMLElement | string;
    direction: string;
    minHeight: number;
    minWidth: number;
    maxHeight?: number;
    maxWidth?: number;
    boundary?: HTMLElement | string;
    resizeBegin(e: MouseEvent): void;
    resizing(e: MouseEvent): void;
    resizeComplete(e: MouseEvent): void;
    proxy: any;
}
/**
 *
 * @param {ResizeArgs} args - specifies the resize args
 * @returns {void}
 */
export declare function createResize(args: ResizeArgs): void;
/**
 *
 * @param {number} minimumHeight - specifies the number
 * @returns {void}
 */
export declare function setMinHeight(minimumHeight: number): void;
/**
 *
 * @param {number} value - specifies the number value
 * @returns {void}
 */
export declare function setMaxWidth(value: number): void;
/**
 *
 * @param {number} value - specifies the number value
 * @returns {void}
 */
export declare function setMaxHeight(value: number): void;
/**
 * @returns {void}
 */
export declare function removeResize(): void;
