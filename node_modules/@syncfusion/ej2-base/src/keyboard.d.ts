import { INotifyPropertyChanged } from './notify-property-change';
import { Base, EmitType } from './base';
import { KeyboardEventsModel } from './keyboard-model';
/**
 * KeyboardEvents
 */
export interface KeyboardEventArgs extends KeyboardEvent {
    /**
     * action of the KeyboardEvent
     */
    action: string;
}
/**
 * KeyboardEvents class enables you to bind key action desired key combinations for ex., Ctrl+A, Delete, Alt+Space etc.
 * ```html
 * <div id='testEle'>  </div>;
 * <script>
 *   let node: HTMLElement = document.querySelector('#testEle');
 *   let kbInstance = new KeyboardEvents({
 *       element: node,
 *       keyConfigs:{ selectAll : 'ctrl+a' },
 *       keyAction: function (e:KeyboardEvent, action:string) {
 *           // handler function code
 *       }
 *   });
 * </script>
 * ```
 */
export declare class KeyboardEvents extends Base<HTMLElement> implements INotifyPropertyChanged {
    /**
     * Specifies key combination and it respective action name.
     * @default null
     */
    keyConfigs: {
        [key: string]: string;
    };
    /**
     * Specifies on which event keyboardEvents class should listen for key press. For ex., `keyup`, `keydown` or `keypress`
     * @default keyup
     */
    eventName: string;
    /**
     * Specifies the listener when keyboard actions is performed.
     * @event
     */
    keyAction: EmitType<KeyboardEventArgs>;
    /**
     * Initializes the KeyboardEvents
     * @param {HTMLElement} element
     * @param {KeyboardEventsModel} options
     */
    constructor(element: HTMLElement, options?: KeyboardEventsModel);
    /**
     * Unwire bound events and destroy the instance.
     * @return {void}
     */
    destroy(): void;
    /**
     * Function can be used to specify certain action if a property is changed
     * @param newProp
     * @param oldProp
     * @returns {void}
     * @private
     */
    onPropertyChanged(newProp: KeyboardEventsModel, oldProp?: KeyboardEventsModel): void;
    protected bind(): void;
    /**
     * To get the module name, returns 'keyboard'.
     * @private
     */
    getModuleName(): string;
    /**
     * Wiring event handlers to events
     */
    private wireEvents;
    /**
     * Unwiring event handlers to events
     */
    private unwireEvents;
    /**
     * To handle a key press event returns null
     */
    private keyPressHandler;
    private static configCache;
    /**
     * To get the key configuration data
     * @param {string} config - configuration data
     * returns {KeyData}
     */
    private static getKeyConfigData;
    private static getKeyCode;
}
