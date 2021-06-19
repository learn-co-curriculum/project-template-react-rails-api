import { TestHelper } from '@syncfusion/ej2-base/helpers/e2e';
/**
 * E2E test helpers for Chips to easily interact and the test the component
 */
export declare class ChipsHelper extends TestHelper {
    id: string;
    wrapperFn: Function;
    /**
     * Initialize the Chips E2E helpers
     * @param id Element id of the Chip element
     * @param wrapperFn Pass the wrapper function
     */
    constructor(id: string, wrapperFn: Function);
    /**
     * Used to get root element of the Chip component
     */
    getElement(): any;
    /**
     * Used to get the focused chip element from the chip list.
     */
    getFocusedChip(): any;
    /**
     * Used to get the active chip element from the chip list.
     */
    getActiveChip(): any;
    /**
     * Used to get N'th chip item from the chip list.
     * N -> value count starts from 1.
     */
    getNthChip(nthItem: number): any;
}
