/**
 * Collision module.
 */
import { OffsetPosition } from './position';
/**
 * Provides information about a CollisionCoordinates.
 */
export interface CollisionCoordinates {
    X: boolean;
    Y: boolean;
}
/**
 *
 * @param {HTMLElement} element - specifies the element
 * @param {HTMLElement} viewPortElement - specifies the element
 * @param {CollisionCoordinates} axis - specifies the collision coordinates
 * @param {OffsetPosition} position - specifies the position
 * @returns {void}
 */
export declare function fit(element: HTMLElement, viewPortElement?: HTMLElement, axis?: CollisionCoordinates, position?: OffsetPosition): OffsetPosition;
/**
 *
 * @param {HTMLElement} element - specifies the html element
 * @param {HTMLElement} viewPortElement - specifies the html element
 * @param {number} x - specifies the number
 * @param {number} y - specifies the number
 * @returns {string[]} - returns the string value
 */
export declare function isCollide(element: HTMLElement, viewPortElement?: HTMLElement, x?: number, y?: number): string[];
/**
 *
 * @param {HTMLElement} element - specifies the element
 * @param {HTMLElement} target - specifies the element
 * @param {number} offsetX - specifies the number
 * @param {number} offsetY - specifies the number
 * @param {string} positionX - specifies the string value
 * @param {string} positionY - specifies the string value
 * @param {HTMLElement} viewPortElement - specifies the element
 * @param {CollisionCoordinates} axis - specifies the collision axis
 * @param {boolean} fixedParent - specifies the boolean
 * @returns {void}
 */
export declare function flip(element: HTMLElement, target: HTMLElement, offsetX: number, offsetY: number, positionX: string, positionY: string, viewPortElement?: HTMLElement, axis?: CollisionCoordinates, fixedParent?: boolean): void;
