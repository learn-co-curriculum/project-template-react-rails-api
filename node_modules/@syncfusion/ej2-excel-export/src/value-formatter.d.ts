import { NumberFormatOptions, DateFormatOptions } from '@syncfusion/ej2-base';
/**
 * ValueFormatter class to globalize the value.
 * @private
 */
export declare class ValueFormatter {
    private intl;
    constructor(cultureName?: string);
    getFormatFunction(format: NumberFormatOptions | DateFormatOptions, isServerRendered: boolean): Function;
    toView(value: number | Date, format: Function): string | Object;
    displayText(value: any, format: NumberFormatOptions | DateFormatOptions, isServerRendered: boolean): string;
}
