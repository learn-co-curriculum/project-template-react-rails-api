interface BeforeSanitizeHtml {
    /** Illustrates whether the current action needs to be prevented or not. */
    cancel?: boolean;
    /** It is a callback function and executed it before our inbuilt action. It should return HTML as a string.
     * @function
     * @param {string} value - Returns the value.
     * @returns {string}
     */
    /** Returns the selectors object which carrying both tags and attributes selectors to block list of cross-site scripting attack.
     *  Also possible to modify the block list in this event.
     */
    selectors?: SanitizeSelectors;
}
interface SanitizeSelectors {
    /** Returns the tags. */
    tags?: string[];
    /** Returns the attributes. */
    attributes?: SanitizeRemoveAttrs[];
}
interface SanitizeRemoveAttrs {
    /** Defines the attribute name to sanitize */
    attribute?: string;
    /** Defines the selector that sanitize the specified attributes within the selector */
    selector?: string;
}
export declare class SanitizeHtmlHelper {
    static removeAttrs: SanitizeRemoveAttrs[];
    static removeTags: string[];
    static wrapElement: HTMLElement;
    static beforeSanitize(): BeforeSanitizeHtml;
    static sanitize(value: string): string;
    static serializeValue(item: BeforeSanitizeHtml, value: string): string;
    private static removeElement;
    private static removeXssTags;
    private static removeJsEvents;
    private static removeXssAttrs;
}
export {};
