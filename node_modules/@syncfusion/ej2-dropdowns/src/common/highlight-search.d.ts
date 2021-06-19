export declare type HightLightType = 'Contains' | 'StartsWith' | 'EndsWith';
/**
 * Function helps to find which highlightSearch is to call based on your data.
 *
 * @param  {HTMLElement} element - Specifies an li element.
 * @param  {string} query - Specifies the string to be highlighted.
 * @param  {boolean} ignoreCase - Specifies the ignoreCase option.
 * @param  {HightLightType} type - Specifies the type of highlight.
 * @returns {void}
 */
export declare function highlightSearch(element: HTMLElement, query: string, ignoreCase: boolean, type?: HightLightType, isBlazor?: boolean): void;
/**
 * Function helps to remove highlighted element based on your data.
 *
 * @param  {HTMLElement} content - Specifies an content element.
 * @returns {void}
 */
export declare function revertHighlightSearch(content: HTMLElement): void;
