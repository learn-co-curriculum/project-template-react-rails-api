/**
 * EventHandler class provides option to add, remove, clear and trigger events to a HTML DOM element
 * @private
 * ```html
 * <div id="Eventdiv">  </div>
 * <script>
 *   let node: HTMLElement = document.querySelector("#Eventdiv");
 *   EventHandler.addEventListener(node, "click", function(){
 *       // click handler function code
 *   });
 *   EventHandler.addEventListener(node, "onmouseover", function(){
 *       // mouseover handler function code
 *   });
 *   EventHandler.removeEventListener(node, "click", function(){
 *       // click handler function code
 *   });
 *   eventObj.clearEvents();
 * </script>
 * ```
 */
export declare class EventHandler {
    private static addOrGetEventData;
    /**
     * Add an event to the specified DOM element.
     * @param {any} element - Target HTML DOM element
     * @param {string} eventName - A string that specifies the name of the event
     * @param {Function} listener - Specifies the function to run when the event occurs
     * @param {Object} bindTo - A object that binds 'this' variable in the event handler
     * @param {number} debounce - Specifies at what interval given event listener should be triggered.
     * @return {Function}
     */
    static add(element: Element | HTMLElement | Document, eventName: string, listener: Function, bindTo?: Object, intDebounce?: number): Function;
    /**
     * Remove an event listener that has been attached before.
     * @param {any} element - Specifies the target html element to remove the event
     * @param {string} eventName - A string that specifies the name of the event to remove
     * @param {Function} listener - Specifies the function to remove
     * @return {void}
     */
    static remove(element: Element | HTMLElement | Document, eventName: string, listener: Function): void;
    /**
     * Clear all the event listeners that has been previously attached to the element.
     * @param {any} element - Specifies the target html element to clear the events
     * @return {void}
     */
    static clearEvents(element: Element): void;
    /**
     * Trigger particular event of the element.
     * @param {any} element - Specifies the target html element to trigger the events
     * @param {string} eventName - Specifies the event to trigger for the specified element.
     * Can be a custom event, or any of the standard events.
     * @param {any} eventProp - Additional parameters to pass on to the event properties
     * @return {void}
     */
    static trigger(element: HTMLElement, eventName: string, eventProp?: Object): void;
}
/**
 * Common Event argument for all base Essential JavaScript 2 Events.
 * @private
 */
export interface BaseEventArgs {
    /**
     * Specifies name of the event.
     */
    name?: string;
}
