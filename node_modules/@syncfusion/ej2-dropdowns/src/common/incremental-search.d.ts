/**
 * IncrementalSearch module file
 */
export declare type SearchType = 'StartsWith' | 'Equal';
/**
 * Search and focus the list item based on key code matches with list text content
 *
 * @param  { number } keyCode - Specifies the key code which pressed on keyboard events.
 * @param  { HTMLElement[]} items - Specifies an array of HTMLElement, from which matches find has done.
 * @param { number } selectedIndex - Specifies the selected item in list item, so that search will happen
 * after selected item otherwise it will do from initial.
 * @param  { boolean } ignoreCase - Specifies the case consideration when search has done.
 * @param {string} elementId - Specifies the list element ID.
 * @param {boolean} isBlazor - Specifies the platform is Blazor or not.
 * @returns {Element} Returns list item based on key code matches with list text content.
 */
export declare function incrementalSearch(keyCode: number, items: HTMLElement[], selectedIndex: number, ignoreCase: boolean, elementId: string, isBlazor?: boolean): Element;
/**
 * Search the list item based on given input value matches with search type.
 *
 * @param {string} inputVal - Specifies the given input value.
 * @param {HTMLElement[]} items - Specifies the list items.
 * @param {SearchType} searchType - Specifies the filter type.
 * @param {boolean} ignoreCase - Specifies the case sensitive option for search operation.
 * @returns {Element | number} Returns the search matched items.
 */
export declare function Search(inputVal: string, items: HTMLElement[], searchType: SearchType, ignoreCase?: boolean): {
    [key: string]: Element | number;
};
