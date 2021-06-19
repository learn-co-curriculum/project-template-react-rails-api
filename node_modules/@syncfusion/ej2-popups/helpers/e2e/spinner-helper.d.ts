import { TestHelper } from '@syncfusion/ej2-base/helpers/e2e';
export declare class SpinnerHelper extends TestHelper {
    id: string;
    wrapperFn: Function;
    constructor(id: string, wrapperFn: Function);
    /**
     * The method which returns target element of the Spinner control.
     */
    getSpinner(): any;
    /**
     * The getSpinnerPane method which returns wrapper element of the Spinner control.
     */
    getSpinnerPane(): any;
    /**
     * The method which returns Spinner image.
     */
    getSpinnerImage(): any;
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
     * The invoke method is used to access the public methods available in Spinner control.
     * @param fName - Specifies method name of the Spinner control. It must be string type.
     * @param args - Specifies arguments. This is optional.
     */
    invoke(fName: string, args?: any[]): void;
}
