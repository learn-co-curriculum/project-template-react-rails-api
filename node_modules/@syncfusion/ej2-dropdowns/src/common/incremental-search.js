/**
 * IncrementalSearch module file
 */
var queryString = '';
var prevString = '';
var matches = [];
var activeClass = 'e-active';
var prevElementId = '';
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
export function incrementalSearch(keyCode, items, selectedIndex, ignoreCase, elementId, isBlazor) {
    queryString += String.fromCharCode(keyCode);
    setTimeout(function () {
        queryString = '';
    }, 1000);
    var index;
    queryString = ignoreCase ? queryString.toLowerCase() : queryString;
    if (prevElementId === elementId && prevString === queryString) {
        for (var i = 0; i < matches.length; i++) {
            if (matches[i].classList.contains(activeClass)) {
                index = i;
                break;
            }
        }
        index = index + 1;
        return matches[index];
    }
    else {
        var listItems = items;
        var strLength = queryString.length;
        var text = void 0;
        var item = void 0;
        selectedIndex = selectedIndex ? selectedIndex + 1 : 0;
        var i = selectedIndex;
        matches = [];
        do {
            if (i === listItems.length) {
                i = -1;
            }
            if (i === -1) {
                index = 0;
            }
            else {
                index = i;
            }
            item = listItems[index];
            if (isBlazor) {
                text = ignoreCase ? item.textContent.trim().toLowerCase() : item.textContent.trim();
            }
            else {
                text = ignoreCase ? item.innerText.toLowerCase() : item.innerText;
            }
            if (text.substr(0, strLength) === queryString) {
                matches.push(listItems[index]);
            }
            i++;
        } while (i !== selectedIndex);
        prevString = queryString;
        prevElementId = elementId;
        return matches[0];
    }
}
/**
 * Search the list item based on given input value matches with search type.
 *
 * @param {string} inputVal - Specifies the given input value.
 * @param {HTMLElement[]} items - Specifies the list items.
 * @param {SearchType} searchType - Specifies the filter type.
 * @param {boolean} ignoreCase - Specifies the case sensitive option for search operation.
 * @returns {Element | number} Returns the search matched items.
 */
export function Search(inputVal, items, searchType, ignoreCase) {
    var listItems = items;
    ignoreCase = ignoreCase !== undefined && ignoreCase !== null ? ignoreCase : true;
    var itemData = { item: null, index: null };
    if (inputVal && inputVal.length) {
        var strLength = inputVal.length;
        var queryStr = ignoreCase ? inputVal.toLocaleLowerCase() : inputVal;
        for (var i = 0, itemsData = listItems; i < itemsData.length; i++) {
            var item = itemsData[i];
            var text = (ignoreCase ? item.textContent.toLocaleLowerCase() : item.textContent).replace(/^\s+|\s+$/g, '');
            if ((searchType === 'Equal' && text === queryStr) || (searchType === 'StartsWith' && text.substr(0, strLength) === queryStr)) {
                itemData.item = item;
                itemData.index = i;
                return { item: item, index: i };
            }
        }
        return itemData;
    }
    return itemData;
}
