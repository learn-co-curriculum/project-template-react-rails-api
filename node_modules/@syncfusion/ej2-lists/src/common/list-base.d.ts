import { Query } from '@syncfusion/ej2-data';
export declare let cssClass: ClassList;
/**
 * An interface that holds item class list
 */
export interface ClassList {
    li: string;
    ul: string;
    group: string;
    icon: string;
    text: string;
    check: string;
    checked: string;
    selected: string;
    expanded: string;
    textContent: string;
    hasChild: string;
    level: string;
    url: string;
    collapsible: string;
    disabled: string;
    image: string;
    iconWrapper: string;
    anchorWrap: string;
    navigable: string;
}
/**
 * Sorting Order
 */
export declare type SortOrder = 'None' | 'Ascending' | 'Descending';
/**
 * Base List Generator
 */
export declare namespace ListBase {
    /**
     *
     * Default mapped fields.
     */
    const defaultMappedFields: FieldsMapping;
    /**
     * Function helps to created and return the UL Li element based on your data.
     *
     * @param  {createElementParams} createElement - Specifies an array of JSON data.
     *
     * @param  {{Object}[]} dataSource - Specifies an array of JSON data.
     *
     * @param  {ListBaseOptions} options? - Specifies the list options that need to provide.
     *
     * @param  {boolean} isSingleLevel? - Specifies the list options that need to provide.
     *
     * @param  {any} componentInstance? - Specifies the list options that need to provide.
     *
     * @returns  {createElement} createListFromJson - Specifies the list options that need to provide.
     */
    function createList(createElement: createElementParams, dataSource: {
        [key: string]: Object;
    }[] | string[] | number[], options?: ListBaseOptions, isSingleLevel?: boolean, componentInstance?: any): HTMLElement;
    /**
     * Function helps to created an element list based on string array input .
     *
     * @param  {createElementParams} createElement - Specifies an array of JSON data.
     *
     * @param  {{Object}[]} dataSource - Specifies an array of JSON data.
     *
     * @param  {ListBaseOptions} options? - Specifies the list options that need to provide.
     *
     * @param  {boolean} isSingleLevel? - Specifies the list options that need to provide.
     *
     * @param  {any} componentInstance? - Specifies the list options that need to provide.
     *
     * @returns  {createElement} generateUL - returns the list options that need to provide.
     */
    function createListFromArray(createElement: createElementParams, dataSource: string[] | number[], isSingleLevel?: boolean, options?: ListBaseOptions, componentInstance?: any): HTMLElement;
    /**
     * Function helps to created an element list based on string array input .
     *
     * @param  {createElementParams} createElement - Specifies an array of JSON data.
     *
     * @param  {{Object}[]} dataSource - Specifies an array of JSON data.
     *
     * @param  {ListBaseOptions} options? - Specifies the list options that need to provide.
     *
     * @param  {boolean} isSingleLevel? - Specifies the list options that need to provide.
     *
     * @param  {any} componentInstance? - Specifies the list options that need to provide.
     *
     * @returns  {HTMLElement[]} subChild - returns the list options that need to provide.
     */
    function createListItemFromArray(createElement: createElementParams, dataSource: string[] | number[], isSingleLevel?: boolean, options?: ListBaseOptions, componentInstance?: any): HTMLElement[];
    /**
     * Function helps to created an element list based on array of JSON input .
     *
     * @param  {createElementParams} createElement - Specifies an array of JSON data.
     *
     * @param  {{Object}[]} dataSource - Specifies an array of JSON data.
     *
     * @param  {ListBaseOptions} options? - Specifies the list options that need to provide.
     *
     * @param  {boolean} isSingleLevel? - Specifies the list options that need to provide.
     *
     * @param  {number} level? - Specifies the list options that need to provide.
     *
     * @param  {any} componentInstance? - Specifies the list options that need to provide.
     *
     * @returns  {HTMLElement[]} child - returns the list options that need to provide.
     */
    function createListItemFromJson(createElement: createElementParams, dataSource: {
        [key: string]: Object;
    }[], options?: ListBaseOptions, level?: number, isSingleLevel?: boolean, componentInstance?: any): HTMLElement[];
    /**
     * Function helps to created an element list based on array of JSON input .
     *
     * @param  {createElementParams} createElement - Specifies an array of JSON data.
     *
     * @param  {{Object}[]} dataSource - Specifies an array of JSON data.
     *
     * @param  {ListBaseOptions} options? - Specifies the list options that need to provide.
     *
     * @param  {number} level? - Specifies the list options that need to provide.
     *
     * @param  {boolean} isSingleLevel? - Specifies the list options that need to provide.
     *
     * @param  {any} componentInstance? - Specifies the list options that need to provide.
     *
     * @returns  {createElement} generateUL - Specifies the list options that need to provide.
     */
    function createListFromJson(createElement: createElementParams, dataSource: {
        [key: string]: Object;
    }[], options?: ListBaseOptions, level?: number, isSingleLevel?: boolean, componentInstance?: any): HTMLElement;
    /**
     * Return the next or previous visible element.
     *
     * @param  {Element[]|NodeList} elementArray - An element array to find next or previous element.
     * @param  {Element} li - An element to find next or previous after this element.
     * @param  {boolean} isPrevious? - Specify when the need get previous element from array.
     */
    function getSiblingLI(elementArray: Element[] | NodeList, element: Element, isPrevious?: boolean): Element;
    /**
     * Return the index of the li element
     *
     * @param  {Element} item - An element to find next or previous after this element.
     * @param  {Element[]} elementArray - An element array to find index of given li.
     */
    function indexOf(item: Element, elementArray: Element[] | NodeList): number;
    /**
     * Returns the grouped data from given dataSource.
     *
     * @param  {{Object}[]} dataSource - The JSON data which is necessary to process.
     * @param  {FieldsMapping} fields - Fields that are mapped from the data source.
     * @param  {SortOrder} sortOrder- Specifies final result sort order.
     */
    function groupDataSource(dataSource: {
        [key: string]: Object;
    }[], fields: FieldsMapping, sortOrder?: SortOrder): {
        [key: string]: Object;
    }[];
    /**
     * Returns a sorted query object.
     *
     * @param  {SortOrder} sortOrder - Specifies that sort order.
     * @param  {string} sortBy - Specifies sortBy fields.
     * @param  {Query} query - Pass if any existing query.
     */
    function addSorting(sortOrder: SortOrder, sortBy: string, query?: Query): Query;
    /**
     * Return an array of JSON Data that processed based on queries.
     *
     * @param  {{Object}[]} dataSource - Specifies local JSON data source.
     *
     * @param  {Query} query - Specifies query that need to process.
     */
    function getDataSource(dataSource: {
        [key: string]: Object;
    }[], query: Query): {
        [key: string]: Object;
    }[];
    /**
     * Created JSON data based the UL and LI element
     *
     * @param  {HTMLElement|Element} element - UL element that need to convert as a JSON
     * @param  {ListBaseOptions} options? - Specifies listbase option for fields.
     */
    function createJsonFromElement(element: HTMLElement | Element, options?: ListBaseOptions): {
        [key: string]: Object;
    }[];
    /**
     * Created UL element from content template.
     *
     * @param  {string} template - that need to convert and generate li element.
     * @param  {{Object}[]} dataSource - Specifies local JSON data source.
     * @param  {ListBaseOptions} options? - Specifies listbase option for fields.
     */
    function renderContentTemplate(createElement: createElementParams, template: string, dataSource: {
        [key: string]: Object;
    }[] | string[] | number[], fields?: FieldsMapping, options?: ListBaseOptions, componentInstance?: any): HTMLElement;
    /**
     * Created header items from group template.
     *
     * @param  {string} template - that need to convert and generate li element.
     *
     * @param  {{Object}[]} dataSource - Specifies local JSON data source.
     *
     * @param  {FieldsMapping} fields - Specifies fields for mapping the dataSource.
     *
     * @param  {Element[]} headerItems? - Specifies listbase header items.
     */
    function renderGroupTemplate(groupTemplate: string, groupDataSource: {
        [key: string]: Object;
    }[], fields: FieldsMapping, headerItems: Element[], options?: ListBaseOptions, componentInstance?: any): Element[];
    function generateId(): string;
    /**
     * Returns UL element based on the given LI element.
     *
     * @param  {HTMLElement[]} liElement - Specifies array of LI element.
     *
     * @param  {string} className? - Specifies class name that need to be added in UL element.
     *
     * @param  {ListBaseOptions} options? - Specifies ListBase options.
     */
    function generateUL(createElement: createElementParams, liElement: HTMLElement[], className?: string, options?: ListBaseOptions): HTMLElement;
    /**
     * Returns LI element with additional DIV tag based on the given LI element.
     *
     * @param  {liElement} liElement - Specifies LI element.
     *
     * @param  {string} className? - Specifies class name that need to be added in created DIV element.
     *
     * @param  {ListBaseOptions} options? - Specifies ListBase options.
     */
    function generateIcon(createElement: createElementParams, liElement: HTMLElement, className?: string, options?: ListBaseOptions): HTMLElement;
}
export declare type createElementParams = (tag: string, prop?: {
    id?: string;
    className?: string;
    innerHTML?: string;
    styles?: string;
    attrs?: {
        [key: string]: string;
    };
}) => HTMLElement;
/**
 * An interface that holds the field mappings
 */
export interface FieldsMapping {
    id?: string;
    text?: string;
    value?: string;
    isChecked?: string;
    isVisible?: string;
    url?: string;
    enabled?: string;
    groupBy?: string;
    expanded?: string;
    selected?: string;
    iconCss?: string;
    /**
     * @blazorType object
     */
    child?: string;
    tooltip?: string;
    hasChildren?: string;
    /**
     * @blazorType object
     */
    htmlAttributes?: string;
    /**
     * @blazorType object
     */
    urlAttributes?: string;
    imageUrl?: string;
    /**
     * @blazorType object
     */
    imageAttributes?: string;
}
/**
 * An enum type that denotes the Expand Icon Position. Available options are as follows Right, Left;
 */
export declare type Position = 'Right' | 'Left';
/**
 * An interface that holds item aria attributes mapping
 */
export interface AriaAttributesMapping {
    level?: number;
    listRole?: string;
    itemRole?: string;
    groupItemRole?: string;
    itemText?: string;
    wrapperRole?: string;
}
/**
 * Basic ListBase Options
 */
export interface ListBaseOptions {
    /**
     * Specifies that fields that mapped in dataSource
     */
    fields?: FieldsMapping;
    /**
     * Specifies the aria attributes
     */
    ariaAttributes?: AriaAttributesMapping;
    /**
     * Specifies to show checkBox
     */
    showCheckBox?: boolean;
    /**
     * Specifies to show icon
     */
    showIcon?: boolean;
    /**
     * Specifies to show collapsible icon
     */
    expandCollapse?: boolean;
    /**
     * Specifies when need to add additional UL list class
     */
    listClass?: string;
    /**
     * Specifies when need to add additional LI item class
     */
    itemClass?: string;
    /**
     * Enables when need process depth child processing.
     */
    processSubChild?: boolean;
    /**
     * Specifies the sort order
     */
    sortOrder?: SortOrder;
    /**
     * Specifies the item template
     */
    template?: string;
    /**
     * Specifies the group header template
     */
    groupTemplate?: string;
    /**
     * Specifies the ListView header template
     */
    headerTemplate?: string;
    /**
     * Specifies the callback function that triggered before each list creation
     */
    itemCreating?: Function;
    /**
     * Specifies the callback function that triggered after each list creation
     */
    itemCreated?: Function;
    /**
     * Specifies the customizable expand icon class
     */
    expandIconClass?: string;
    /**
     * Specifies the customized class name based on their module name
     */
    moduleName?: string;
    /**
     * Specifies the expand/collapse icon position
     */
    expandIconPosition?: Position;
    /**
     * Specifies the template ID
     */
    templateID?: string;
    /**
     * Specifies the groupTemplate ID
     */
    groupTemplateID?: string;
    /**
     * Force template compiler to compile as string template
     */
    isStringTemplate?: string;
    /**
     * Remove Blazor ID from items
     */
    removeBlazorID?: boolean;
    /**
     * Defines whether to allow the cross scripting site or not.
     */
    enableHtmlSanitizer?: boolean;
    /**
     * If set true to this property then the entire list will be navigate-able instead of text element
     */
    itemNavigable?: boolean;
}
/**
 * Used to get dataSource item from complex data using fields.
 *
 * @param {Object} dataSource - Specifies an  JSON or String data.
 *
 * @param {FieldsMapping} fields - Fields that are mapped from the dataSource.
 */
export declare function getFieldValues(dataItem: {
    [key: string]: Object;
} | string | number, fields: FieldsMapping): {
    [key: string]: Object;
} | string | number;
