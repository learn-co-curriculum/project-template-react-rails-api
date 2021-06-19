import { TestHelper } from '@syncfusion/ej2-base/helpers/e2e';
export declare class ToolbarHelper extends TestHelper {
    id: string;
    wrapperFn: Function;
    /**
    * Initialize the Toolbar E2E helpers
    * @param {string} id Element id of the Toolbar
    * @param {Function} wrapperFn Pass the wrapper function
    */
    constructor(id: string, wrapperFn: Function);
    /**
      * Retrieves the selector.
      */
    selector(arg: any): any;
    /**
      * Retrieves the rendered html element of Toolbar.
      */
    getElement(): any;
    /**
      * Retrieves the rendered html element of Left Scroll Navigation.
      */
    getLeftScrollNavigationElement(): any;
    /**
      * Retrieves the rendered html element of Right Scroll Navigation.
      */
    getRightScrollNavigationElement(): any;
    /**
      * Retrieves the rendered html element of Overflow Navigation.
      */
    getOverflowNavigationElement(): any;
    /**
      * Retrieves the rendered html element of Toolbar items.
      */
    getItems(): any;
    /**
      * Retrieves the rendered html element of Toolbar item.
      */
    getItemElement(): any;
    /**
      * Retrieves the rendered html element of Overflow Item.
      */
    getOverflowItemElement(): any;
    /**
     * The setModel method is used to set the value of the property.
     * @param {any} property denotes name of the property.
     * @param {any} value denotes corresponding value of the property.
     */
    setModel(property: any, value: any): any;
    /**
     * The getModel method is used to return value for the property.
     * @param {any} property denotes name of the property which value is to be updated.
     */
    getModel(property: any): any;
    /**
     * The invoke method is used to access the public methods available in Toolbar control.
     * @param {any} - fName denotes the function name of the Toolbar control.
     * @param {any} - args denotes the arguments of function.
     */
    invoke(fName: any, args?: any): any;
}
