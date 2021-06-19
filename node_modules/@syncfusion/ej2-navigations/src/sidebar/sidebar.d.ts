import { Component } from '@syncfusion/ej2-base';
import { EmitType, INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { SidebarModel } from './sidebar-model';
/**
 * Specifies the Sidebar types.
 */
export declare type SidebarType = 'Slide' | 'Over' | 'Push' | 'Auto';
/**
 * Specifies the Sidebar positions.
 */
export declare type SidebarPosition = 'Left' | 'Right';
/**
 * Sidebar is an expandable or collapsible
 * component that typically act as a side container to place the primary or secondary content alongside of the main content.
 * ```html
 * <aside id="sidebar">
 * </aside>
 * ```
 * ```typescript
 * <script>
 *   let sidebarObject: Sidebar = new Sidebar();
 *   sidebarObject.appendTo("#sidebar");
 * </script>
 * ```
 */
export declare class Sidebar extends Component<HTMLElement> implements INotifyPropertyChanged {
    private modal;
    private mainContentEle;
    private sidebarEle;
    private sidebarEleCopy;
    protected tabIndex: string;
    private windowWidth;
    private isBlazor;
    private targetEle;
    /**
     * Specifies the size of the Sidebar in dock state.
     * > For more details about dockSize refer to
     * [`Dock`](https://ej2.syncfusion.com/documentation/sidebar/docking-sidebar/) documentation.
     *
     * @default 'auto'
     */
    dockSize: string | number;
    /**
     * Specifies the media query string for resolution, which when met opens the Sidebar.
     * ```typescript
     *   let defaultSidebar: Sidebar = new Sidebar({
     *       mediaQuery:'(min-width: 600px)'
     *   });
     * ```
     * > For more details about mediaQuery refer to
     * [`Auto Close`](https://ej2.syncfusion.com/documentation/sidebar/auto-close/) documentation.
     *
     * @default null
     * @aspType string
     * @blazorType string
     */
    mediaQuery: string | MediaQueryList;
    /**
     * Specifies the docking state of the component.
     * > For more details about enableDock refer to
     * [`Dock`](https://ej2.syncfusion.com/documentation/sidebar/docking-sidebar/) documentation.
     *
     * @default false
     */
    enableDock: boolean;
    /**
     * Enables the expand or collapse while swiping in touch devices.
     * This is not a sidebar property.
     *
     * @default 'en-US'
     * @private
     */
    locale: string;
    /**
     * Enable or disable persisting component's state between page reloads. If enabled, following list of states will be persisted.
     * 1. Position
     * 2. Type
     *
     * @default false
     */
    enablePersistence: boolean;
    /**
     * Enables the expand or collapse while swiping in touch devices.
     *
     * @default true
     */
    enableGestures: boolean;
    /**
     * Gets or sets the Sidebar component is open or close.
     * > When the Sidebar type is set to `Auto`,
     * the component will be expanded in the desktop and collapsed in the mobile mode regardless of the isOpen property.
     *
     * @default false
     */
    isOpen: boolean;
    /**
     * Specifies the Sidebar in RTL mode that displays the content in the right-to-left direction.
     *
     * @default false
     */
    enableRtl: boolean;
    /**
     * Enable or disable the animation transitions on expanding or collapsing the Sidebar.
     *
     * @default true
     */
    animate: boolean;
    /**
     * Specifies the height of the Sidebar.
     *
     * @default 'auto'
     * @private
     */
    height: string | number;
    /**
     * Specifies whether the Sidebar need to be closed or not when document area is clicked.
     *
     * @default false
     */
    closeOnDocumentClick: boolean;
    /**
     * Specifies the position of the Sidebar (Left/Right) corresponding to the main content.
     * > For more details about SidebarPosition refer to
     * [`position`](https://ej2.syncfusion.com/documentation/sidebar/getting-started/#position) documentation.
     *
     * @default 'Left'
     */
    position: SidebarPosition;
    /**
     * Allows to place the sidebar inside the target element.
     * > For more details about target refer to
     * [`Custom Context`](https://ej2.syncfusion.com/documentation/sidebar/custom-context/) documentation.
     *
     * @default null
     */
    target: HTMLElement | string;
    /**
     * Specifies the whether to apply overlay options to main content when the Sidebar is in an open state.
     * > For more details about showBackdrop refer to
     * [`Backdrop`](https://ej2.syncfusion.com/documentation/sidebar/getting-started/#enable-backdrop) documentation.
     *
     * @default false
     */
    showBackdrop: boolean;
    /**
     * Specifies the expanding types of the Sidebar.
     * * `Over` - The sidebar floats over the main content area.
     * * `Push` - The sidebar pushes the main content area to appear side-by-side, and shrinks the main content within the screen width.
     * * `Slide` - The sidebar translates the x and y positions of main content area based on the sidebar width.
     * The main content area will not be adjusted within the screen width.
     * * `Auto` - Sidebar with `Over` type in mobile resolution and `Push` type in other higher resolutions.
     * > For more details about SidebarType refer to
     * [`SidebarType`](../../sidebar/variations/) documentation.
     *
     * @default 'Auto'
     */
    type: SidebarType;
    /**
     * Specifies the width of the Sidebar. By default, the width of the Sidebar sets based on the size of its content.
     * Width can also be set in pixel values.
     *
     * @default 'auto'
     */
    width: string | number;
    /**
     * Specifies the z-index of the Sidebar. It is applicable only when sidebar act as overlay type.
     *
     * @default 1000
     * @aspType double
     * @blazorType double
     */
    zIndex: string | number;
    /**
     * Triggers when component is created.
     *
     * @event
     *
     * @blazorProperty 'Created'
     *
     */
    created: EmitType<Object>;
    /**
     * Triggers when component is closed.
     *
     * @event
     * @blazorProperty 'OnClose'
     * @blazorType Syncfusion.Blazor.Navigations.EventArgs
     */
    close: EmitType<EventArgs>;
    /**
     * Triggers when component is opened.
     *
     * @event
     * @blazorProperty 'OnOpen'
     * @blazorType Syncfusion.Blazor.Navigations.EventArgs
     */
    open: EmitType<EventArgs>;
    /**
     * Triggers when the state(expand/collapse) of the component is changed.
     *
     * @event
     * @blazorProperty 'Changed'
     */
    change: EmitType<ChangeEventArgs>;
    /**
     * Triggers when component gets destroyed.
     *
     * @event
     * @blazorProperty 'Destroyed'
     */
    destroyed: EmitType<Object>;
    constructor(options?: SidebarModel, element?: string | HTMLElement);
    protected preRender(): void;
    protected render(): void;
    protected initialize(): void;
    private setEnableRTL;
    private setTarget;
    private getTargetElement;
    private setCloseOnDocumentClick;
    private setWidth;
    private setDimension;
    private setZindex;
    private addClass;
    private checkType;
    private transitionEnd;
    private destroyBackDrop;
    /**
     * Hide the Sidebar component, if it is in an open state.
     *
     * @returns {void}
     *
     */
    hide(e?: Event): void;
    private setTimeOut;
    /**
     * Shows the Sidebar component, if it is in closed state.
     *
     * @returns {void}
     */
    show(e?: Event): void;
    private setAnimation;
    private triggerChange;
    private setDock;
    private createBackDrop;
    protected getPersistData(): string;
    /**
     * Returns the current module name.
     *
     * @returns {string} - returns module name.
     * @private
     *
     */
    protected getModuleName(): string;
    /**
     * Shows or hides the Sidebar based on the current state.
     *
     * @returns {void}
     */
    toggle(e?: Event): void;
    protected getState(): boolean;
    private setMediaQuery;
    protected resize(e: Event): void;
    private documentclickHandler;
    private enableGestureHandler;
    private setEnableGestures;
    private wireEvents;
    private unWireEvents;
    /**
     * Called internally if any of the property value changed.
     *
     * @param {SidebarModel} newProp - specifies newProp value.
     * @param {SidebarModel} oldProp - specifies oldProp value.
     * @returns {void}
     * @private
     *
     */
    onPropertyChanged(newProp: SidebarModel, oldProp: SidebarModel): void;
    protected setType(type?: string): void;
    /**
     * Removes the control from the DOM and detaches all its related event handlers. Also it removes the attributes and classes.
     *
     * @returns {void}
     *
     */
    destroy(): void;
}
/**
 *
 * Defines the event arguments for the event.
 *
 * @returns void
 */
export interface ChangeEventArgs {
    /**
     * Returns event name
     */
    name: string;
    /**
     * Defines the element.
     */
    element: HTMLElement;
}
export interface TransitionEvent extends Event {
    /**
     * Returns event name
     */
    propertyName: string;
}
export interface EventArgs {
    /**
     * Illustrates whether the current action needs to be prevented or not.
     */
    cancel?: boolean;
    /**
     *  Defines the Sidebar model.
     */
    model?: SidebarModel;
    /**
     * Defines the element.
     */
    element: HTMLElement;
    /**
     * Defines the boolean that returns true when the Sidebar is closed by user interaction, otherwise returns false.
     */
    isInteracted?: boolean;
    /**
     * Defines the original event arguments.
     */
    event?: MouseEvent | Event;
}
