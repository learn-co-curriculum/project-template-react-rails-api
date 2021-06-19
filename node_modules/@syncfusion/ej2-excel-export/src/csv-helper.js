import { ValueFormatter } from './value-formatter';
/**
 * CsvHelper class
 * @private
 */
var CsvHelper = /** @class */ (function () {
    /* tslint:disable:no-any */
    function CsvHelper(json, separator) {
        this.csvStr = '';
        if (separator === null || separator === undefined) {
            this.separator = ',';
        }
        else {
            this.separator = separator;
        }
        this.formatter = new ValueFormatter();
        this.isMicrosoftBrowser = !(!navigator.msSaveBlob);
        if (json.isServerRendered !== null && json.isServerRendered !== undefined) {
            this.isServerRendered = json.isServerRendered;
        }
        if (json.styles !== null && json.styles !== undefined) {
            this.globalStyles = new Map();
            for (var i = 0; i < json.styles.length; i++) {
                if (json.styles[i].name !== undefined && json.styles[i].numberFormat !== undefined) {
                    this.globalStyles.set(json.styles[i].name, json.styles[i].numberFormat);
                }
            }
        }
        // Parses Worksheets data to DOM.        
        if (json.worksheets !== null && json.worksheets !== undefined) {
            this.parseWorksheet(json.worksheets[0]);
        }
        //this.csvStr = 'a1,a2,a3\nb1,b2,b3';
    }
    CsvHelper.prototype.parseWorksheet = function (json) {
        //Rows
        if (json.rows !== null && json.rows !== undefined) {
            this.parseRows(json.rows);
        }
    };
    /* tslint:disable:no-any */
    CsvHelper.prototype.parseRows = function (rows) {
        var count = 1;
        for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
            var row = rows_1[_i];
            //Row index
            if (row.index !== null && row.index !== undefined) {
                while (count < row.index) {
                    this.csvStr += '\n';
                    count++;
                }
                this.parseRow(row);
            }
            else {
                throw Error('Row index is missing.');
            }
        }
    };
    /* tslint:disable:no-any */
    CsvHelper.prototype.parseRow = function (row) {
        if (row.cells !== null && row.cells !== undefined) {
            var count = 1;
            for (var _i = 0, _a = row.cells; _i < _a.length; _i++) {
                var cell = _a[_i];
                //cell index
                if (cell.index !== null && cell.index !== undefined) {
                    while (count < cell.index) {
                        this.csvStr += this.separator;
                        count++;
                    }
                    this.parseCell(cell);
                }
                else {
                    throw Error('Cell index is missing.');
                }
            }
        }
    };
    /* tslint:disable:no-any */
    CsvHelper.prototype.parseCell = function (cell) {
        var csv = this.csvStr;
        if (cell.value !== undefined) {
            if (cell.value instanceof Date) {
                if (cell.style !== undefined && cell.style.numberFormat !== undefined) {
                    /* tslint:disable-next-line:max-line-length */
                    try {
                        csv += this.parseCellValue(this.formatter.displayText(cell.value, { type: 'dateTime', skeleton: cell.style.numberFormat }, this.isServerRendered));
                    }
                    catch (error) {
                        /* tslint:disable-next-line:max-line-length */
                        csv += this.parseCellValue(this.formatter.displayText(cell.value, { type: 'dateTime', format: cell.style.numberFormat }, this.isServerRendered));
                    }
                }
                else if (cell.style !== undefined && cell.style.name !== undefined && this.globalStyles.has(cell.style.name)) {
                    /* tslint:disable-next-line:max-line-length */
                    try {
                        csv += this.parseCellValue(this.formatter.displayText(cell.value, { type: 'dateTime', skeleton: this.globalStyles.get(cell.style.name) }, this.isServerRendered));
                    }
                    catch (error) {
                        /* tslint:disable-next-line:max-line-length */
                        csv += this.parseCellValue(this.formatter.displayText(cell.value, { type: 'dateTime', format: this.globalStyles.get(cell.style.name) }, this.isServerRendered));
                    }
                }
                else {
                    csv += cell.value;
                }
            }
            else if (typeof (cell.value) === 'boolean') {
                csv += cell.value ? 'TRUE' : 'FALSE';
            }
            else if (typeof (cell.value) === 'number') {
                if (cell.style !== undefined && cell.style.numberFormat !== undefined) {
                    /* tslint:disable-next-line:max-line-length */
                    csv += this.parseCellValue(this.formatter.displayText(cell.value, { format: cell.style.numberFormat }, this.isServerRendered));
                }
                else if (cell.style !== undefined && cell.style.name !== undefined && this.globalStyles.has(cell.style.name)) {
                    /* tslint:disable-next-line:max-line-length */
                    csv += this.parseCellValue(this.formatter.displayText(cell.value, { format: this.globalStyles.get(cell.style.name) }, this.isServerRendered));
                }
                else {
                    csv += cell.value;
                }
            }
            else {
                csv += this.parseCellValue(cell.value);
            }
        }
        this.csvStr = csv;
    };
    CsvHelper.prototype.parseCellValue = function (value) {
        var val = '';
        var length = value.length;
        for (var start = 0; start < length; start++) {
            if (value[start] === '\"') {
                val += value[start].replace('\"', '\"\"');
            }
            else {
                val += value[start];
            }
        }
        value = val;
        if (value.indexOf(this.separator) !== -1 || value.indexOf('\n') !== -1) {
            return value = '\"' + value + '\"';
        }
        else {
            return value;
        }
    };
    /**
     * Saves the file with specified name and sends the file to client browser
     * @param  {string} fileName- file name to save.
     * @param  {Blob} buffer- the content to write in file
     */
    CsvHelper.prototype.save = function (fileName) {
        this.buffer = new Blob(['\ufeff' + this.csvStr], { type: 'text/csv;charset=UTF-8' });
        if (this.isMicrosoftBrowser) {
            navigator.msSaveBlob(this.buffer, fileName);
        }
        else {
            var dataUrl_1 = window.URL.createObjectURL(this.buffer);
            var dwlLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
            dwlLink.download = fileName;
            dwlLink.href = dataUrl_1;
            var event_1 = document.createEvent('MouseEvent');
            event_1.initEvent('click', true, true);
            dwlLink.dispatchEvent(event_1);
            setTimeout(function () {
                window.URL.revokeObjectURL(dataUrl_1);
            });
        }
    };
    CsvHelper.prototype.saveAsBlob = function () {
        return new Blob(['\ufeff' + this.csvStr], { type: 'text/csv;charset=UTF-8' });
    };
    return CsvHelper;
}());
export { CsvHelper };
