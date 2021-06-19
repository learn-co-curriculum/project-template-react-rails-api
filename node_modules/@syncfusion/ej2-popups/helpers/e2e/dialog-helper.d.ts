import { TestHelper } from '@syncfusion/ej2-base/helpers/e2e';
export declare class DialogHelper extends TestHelper {
    id: string;
    wrapperFn: Function;
    constructor(id: string, wrapperFn: Function);
    /**
     * The method which returns Dialog control's root element.
     */
    getDialog(): any;
    /**
     * The method which returns content container of the Dialog control.
     */
    getContentElement(): any;
    /**
     * The method which returns header container of the Dialog control.
     */
    getHeaderElement(): any;
    /**
     * The method which returns footer buttons of the Dialog control.
     */
    getFooterButtons(): any;
    /**
     * The method which returns close icon's button of the Dialog control.
     */
    getCloseButton(): any;
    /**
     * The getModel method is used to return value of the property.
     * @param property - Specifies name of the property. It must be string type.
     */
    getModel(property: string): void;
    /**
     * The setModel method is used to set value for the property. It will accepts two arguments.
     * @param property - Specifices name of the property which value is to be updated.
     * @param value - Specifies corresponding value of the property.
     */
    setModel(property: string, value: any): void;
    /**
     * The invoke method is used to access the public methods available in Dialog control.
     * @param fName - Specifies method name of the Dialog control. It must be string type.
     * @param args - Specifies arguments. This is optional.
     */
    invoke(fName: string, args?: any[]): void;
}
