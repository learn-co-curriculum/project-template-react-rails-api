import { TestHelper } from '@syncfusion/ej2-base/helpers/e2e';
export declare class SideBarHelper extends TestHelper {
    id: string;
    wrapperFn: Function;
    /**
     * Initialize the Sidebar E2E helpers.
     * @param id Element id of the Sidebar component.
     * @param wrapperFn Pass the wrapper function.
     */
    constructor(id: string, wrapperFn: Function);
    /**
     * Gets the selector of the Sidebar component.
     */
    selector(arg: any): any;
    /**
     * Gets the element of the Sidebar component with the given id.
     */
    getElement(): any;
    /**
     * Gets the Sidebar element.
     */
    getSidebar(): any;
    /**
     * Gets the left side opened Sidebar element.
     */
    getLeftSideBar(): any;
    /**
     * Gets the left side positioned Sidebar element.
     */
    getLeft(): any;
    /**
     * Gets the right side positioned Sidebar element.
     */
    getRight(): any;
    /**
     * Gets the right side opened Sidebar element.
     */
    getRightSideBar(): any;
    /**
     * Gets the Dock state Sidebar element.
     */
    getDockSidebar(): any;
    /**
     * Gets the Expanded Dock state Sidebar element.
     */
    getExpandedDockSidebar(): any;
    /**
     * Gets the Collapsed Dock state Sidebar element.
     */
    getCollapsedDockSidebar(): any;
    /**
     * Gets the Over state Sidebar element.
     */
    getOverStateSidebar(): any;
    /**
     * Gets the Expanded Over state Sidebar element.
     */
    getExpandedOverStateSidebar(): any;
    /**
     * Gets the Collapsed Over state Sidebar element.
     */
    getCollapsedOverStateSidebar(): any;
    /**
     * Gets the Push state Sidebar element.
     */
    getPushStateSidebar(): any;
    /**
     * Gets the Expanded Push state Sidebar element.
     */
    getExpandedPushStateSidebar(): any;
    /**
     * Gets the Collapsed Push state Sidebar element.
     */
    getCollapsedPushStateSidebar(): any;
    /**
     * Gets the Slide state Sidebar element.
     */
    getSlideStateSidebar(): any;
    /**
     * Gets the Collapsed Slide state Sidebar element.
     */
    getExpandedSlideStateSidebar(): any;
    /**
     * Gets the Collapsed slide state Sidebar element.
     */
    getCollapsedSlideStateSidebar(): any;
    /**
     * Gets the overlay element from the Sidebar.
     */
    getOverlayElement(): any;
    setModel(property: any, value: any): any;
    getModel(property: any): any;
    invoke(fName: any, args?: any): any;
}
