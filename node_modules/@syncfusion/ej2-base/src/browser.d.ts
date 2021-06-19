/**
 * Get configuration details for Browser
 * @private
 */
export declare class Browser {
    private static uA;
    private static extractBrowserDetail;
    /**
     * To get events from the browser
     * @param {string} event - type of event triggered.
     * @returns {Boolean}
     */
    private static getEvent;
    /**
     * To get the Touch start event from browser
     * @returns {string}
     */
    private static getTouchStartEvent;
    /**
     * To get the Touch end event from browser
     * @returns {string}
     */
    private static getTouchEndEvent;
    /**
     * To get the Touch move event from browser
     * @returns {string}
     */
    private static getTouchMoveEvent;
    /**
     * To cancel the touch event from browser
     * @returns {string}
     */
    private static getTouchCancelEvent;
    /**
     * To get the value based on provided key and regX
     * @param {string} key
     * @param {RegExp} regX
     * @returns {Object}
     */
    private static getValue;
    /**
     * Property specifies the userAgent of the browser. Default userAgent value is based on the browser.
     * Also we can set our own userAgent.
     */
    static userAgent: string;
    /**
     * Property is to get the browser information like Name, Version and Language
     * @returns BrowserInfo
     */
    static readonly info: BrowserInfo;
    /**
     * Property is to get whether the userAgent is based IE.
     */
    static readonly isIE: Boolean;
    /**
     * Property is to get whether the browser has touch support.
     */
    static readonly isTouch: Boolean;
    /**
     * Property is to get whether the browser has Pointer support.
     */
    static readonly isPointer: Boolean;
    /**
     * Property is to get whether the browser has MSPointer support.
     */
    static readonly isMSPointer: Boolean;
    /**
     * Property is to get whether the userAgent is device based.
     */
    static readonly isDevice: Boolean;
    /**
     * Property is to get whether the userAgent is IOS.
     */
    static readonly isIos: Boolean;
    /**
     * Property is to get whether the userAgent is Ios7.
     */
    static readonly isIos7: Boolean;
    /**
     * Property is to get whether the userAgent is Android.
     */
    static readonly isAndroid: Boolean;
    /**
     * Property is to identify whether application ran in web view.
     */
    static readonly isWebView: Boolean;
    /**
     * Property is to get whether the userAgent is Windows.
     */
    static readonly isWindows: Boolean;
    /**
     * Property is to get the touch start event. It returns event name based on browser.
     */
    static readonly touchStartEvent: string;
    /**
     * Property is to get the touch move event. It returns event name based on browser.
     */
    static readonly touchMoveEvent: string;
    /**
     * Property is to get the touch end event. It returns event name based on browser.
     */
    static readonly touchEndEvent: string;
    /**
     * Property is to cancel the touch end event.
     */
    static readonly touchCancelEvent: string;
}
export interface BrowserDetails {
    isAndroid?: Boolean;
    isDevice?: Boolean;
    isIE?: Boolean;
    isIos?: Boolean;
    isIos7?: Boolean;
    isMSPointer?: Boolean;
    isPointer?: Boolean;
    isTouch?: Boolean;
    isWebView?: Boolean;
    isWindows?: Boolean;
    info?: BrowserInfo;
    touchStartEvent?: string;
    touchMoveEvent?: string;
    touchEndEvent?: string;
    touchCancelEvent?: string;
}
export interface BrowserInfo {
    name?: string;
    version?: string;
    culture?: {
        name?: string;
        language?: string;
    };
}
