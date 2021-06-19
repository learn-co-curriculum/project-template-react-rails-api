import { TestHelper } from '@syncfusion/ej2-base/helpers/e2e';
export declare class TabHelper extends TestHelper {
    id: string;
    wrapperFn: Function;
    /**
    * Initialize the Tab E2E helpers
    * @param {string} id Element id of the Tab
    * @param {Function} wrapperFn Pass the wrapper function
    */
    constructor(id: string, wrapperFn: Function);
    /**
      * Retrieves the selector.
      */
    selector(arg: any): any;
    /**
      * Retrieves the rendered html element of Tab.
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
      * Retrieves the rendered html element of Tab Header.
      */
    getHeader(): any;
    /**
      * Retrieves the rendered html element of Tab Content.
      */
    getContent(): any;
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
     * The invoke method is used to access the public methods available in Tab control.
     * @param {any} - fName denotes the function name of the Tab control.
     * @param {any} - args denotes the arguments of function.
     */
    invoke(fName: any, args?: any): any;
}
