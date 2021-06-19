/**
 * Ajax class provides ability to make asynchronous HTTP request to the server
 * ```typescript
 *   var ajax = new Ajax("index.html", "GET", true);
 *   ajax.send().then(
 *               function (value) {
 *                   console.log(value);
 *               },
 *               function (reason) {
 *                   console.log(reason);
 *               });
 * ```
 */
export declare class Ajax {
    /**
     * Specifies the URL to which request to be sent.
     * @default null
     */
    url: string;
    /**
     * Specifies which HTTP request method to be used. For ex., GET, POST
     * @default GET
     */
    type: string;
    /**
     * Specifies the data to be sent.
     * @default null
     */
    data: string | Object;
    /**
     * A boolean value indicating whether the request should be sent asynchronous or not.
     * @default true
     */
    mode: boolean;
    /**
     * Specifies the callback for creating the XMLHttpRequest object.
     * @default null
     */
    httpRequest: XMLHttpRequest;
    /**
     * A boolean value indicating whether to ignore the promise reject.
     * @private
     * @default true
     */
    emitError: boolean;
    private options;
    onLoad: (this: XMLHttpRequest, ev: Event) => Object;
    onProgress: (this: XMLHttpRequest, ev: Event) => Object;
    onError: (this: XMLHttpRequest, ev: Event) => Object;
    onAbort: (this: XMLHttpRequest, ev: Event) => Object;
    onUploadProgress: (this: XMLHttpRequest, ev: Event) => Object;
    private contentType;
    private dataType;
    /**
     * Constructor for Ajax class
     * @param  {string|Object} options?
     * @param  {string} type?
     * @param  {boolean} async?
     * @returns defaultType
     */
    constructor(options?: string | Object, type?: string, async?: boolean, contentType?: string);
    /**
     * Send the request to server.
     * @param {any} data - To send the user data
     * @return {Promise}
     */
    send(data?: string | Object): Promise<Ajax>;
    /**
     * Specifies the callback function to be triggered before sending request to sever.
     * This can be used to modify the XMLHttpRequest object before it is sent.
     * @event
     */
    beforeSend: Function;
    /**
     * Specifies callback function to be triggered after XmlHttpRequest is succeeded.
     * The callback will contain server response as the parameter.
     * @event
     */
    onSuccess: Function;
    /**
     * Triggers when XmlHttpRequest is failed.
     * @event
     */
    onFailure: Function;
    private successHandler;
    private failureHandler;
    private stateChange;
    /**
     * To get the response header from XMLHttpRequest
     * @param  {string} key Key to search in the response header
     * @returns {string}
     */
    getResponseHeader(key: string): string;
}
export interface HeaderOptions {
    readyState?: number;
    getResponseHeader?: Function;
    setRequestHeader?: Function;
    overrideMimeType?: Function;
}
/**
 * Specifies the ajax beforeSend event arguments
 * @event
 */
export interface BeforeSendEventArgs {
    /** To cancel the ajax request in beforeSend */
    cancel?: boolean;
    /** Returns the request sent from the client end */
    httpRequest?: XMLHttpRequest;
}
