import { TestHelper } from '@syncfusion/ej2-base/helpers/e2e';
export declare class AccordionHelper extends TestHelper {
    id: string;
    wrapperFn: Function;
    /**
    * Initialize the Accordion E2E helpers
    * @param {string} id Element id of the Accordion
    * @param {Function} wrapperFn Pass the wrapper function
    */
    constructor(id: string, wrapperFn: Function);
    /**
      * Retrieves the selector.
      */
    selector(arg: any): any;
    /**
      * Retrieves the rendered html element of Accordion.
      */
    getElement(): any;
    /**
      * Retrieves the rendered html element of Accordion Item.
      */
    getItemElement(): any;
    /**
      * Retrieves the rendered html element of Accordion Header.
      */
    getHeaderElement(): any;
    /**
      * Retrieves the rendered html element of Accordion Panel.
      */
    getPanelElement(): any;
    /**
      * Retrieves the rendered html element of active/selected item.
      */
    getActiveElement(): any;
    /**
      * Retrieves the rendered html element of expand state item.
      */
    getExpandStateElement(): any;
    /**
     * The setModel method is used to set the value of the property.
     * @param {any} property denotes name of the property.
     * @param {any} value denotes corresponding value of the property.
     */
    setModel(property: any, value: any): any;
    /**
     * The getModel method is used to return value for the property.
     * @param {any} property denotes name of the property which value is to be get.
     */
    getModel(property: any): any;
    /**
     * The invoke method is used to access the public methods available in Accordion control.
     * @param {any} - fName denotes the function name of the Accordion control.
     * @param {any} - args denotes the arguments of function.
     */
    invoke(functionName: any, args?: any): any;
}
