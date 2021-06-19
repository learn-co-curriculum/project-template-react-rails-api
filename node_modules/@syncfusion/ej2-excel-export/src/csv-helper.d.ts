/**
 * CsvHelper class
 * @private
 */
export declare class CsvHelper {
    private isMicrosoftBrowser;
    private buffer;
    private csvStr;
    private formatter;
    private globalStyles;
    private isServerRendered;
    private separator;
    constructor(json: any, separator: string);
    private parseWorksheet;
    private parseRows;
    private parseRow;
    private parseCell;
    private parseCellValue;
    /**
     * Saves the file with specified name and sends the file to client browser
     * @param  {string} fileName- file name to save.
     * @param  {Blob} buffer- the content to write in file
     */
    save(fileName: string): void;
    saveAsBlob(): Blob;
}
