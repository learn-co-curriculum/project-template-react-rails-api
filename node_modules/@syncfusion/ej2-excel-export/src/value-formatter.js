import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { Internationalization } from '@syncfusion/ej2-base';
// import { IValueFormatter } from '../base/interface';
/**
 * ValueFormatter class to globalize the value.
 * @private
 */
var ValueFormatter = /** @class */ (function () {
    function ValueFormatter(cultureName) {
        this.intl = new Internationalization();
        // if (!isNullOrUndefined(cultureName)) {
        //     this.intl.culture = cultureName;
        // }
    }
    ValueFormatter.prototype.getFormatFunction = function (format, isServerRendered) {
        if (format.type) {
            if (isServerRendered) {
                format.isServerRendered = true;
            }
            return this.intl.getDateFormat(format);
        }
        else {
            return this.intl.getNumberFormat(format);
        }
    };
    // public getParserFunction(format: NumberFormatOptions | DateFormatOptions): Function {
    //     if ((<DateFormatOptions>format).type) {
    //         return this.intl.getDateParser(<DateFormatOptions>format);
    //     } else {
    //         return this.intl.getNumberParser(<DateFormatOptions>format);
    //     }
    // }
    // public fromView(value: string, format: Function, type?: string): string | number | Date {
    //     if (type === 'date' || type === 'datetime' || type === 'number') {
    //         return format(value);
    //     } else {
    //         return value;
    //     }
    // }
    ValueFormatter.prototype.toView = function (value, format) {
        var result = value;
        if (!isNullOrUndefined(format) && !isNullOrUndefined(value)) {
            result = format(value);
        }
        return result;
    };
    // public setCulture(cultureName: string): void {
    //     if (!isNullOrUndefined(cultureName)) {
    //         setCulture(cultureName);
    //     }
    // }
    /* tslint:disable:no-any */
    ValueFormatter.prototype.displayText = function (value, format, isServerRendered) {
        return this.toView(value, this.getFormatFunction(format, isServerRendered));
    };
    return ValueFormatter;
}());
export { ValueFormatter };
