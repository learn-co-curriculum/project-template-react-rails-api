/**
 * Base E2E Helper Function
 */
export declare abstract class TestHelper {
    abstract id: string;
    abstract wrapperFn: Function;
    selector(arg: any): any;
    setModel(property: string, value: any): any;
    getModel(property: string): any;
    invoke(fName: string, args?: any[]): any;
    eventHandler(eventName: string, callback: any): any;
}
