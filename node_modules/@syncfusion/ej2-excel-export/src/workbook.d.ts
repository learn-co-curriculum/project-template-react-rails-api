import { CellStyles } from './cell-style';
import { SaveType, BlobSaveType } from './enum';
/**
 * Workbook class
 */
export declare class Workbook {
    private mArchive;
    private sharedString;
    private sharedStringCount;
    cellStyles: Map<string, CellStyles>;
    mergedCellsStyle: Map<string, {
        x: number;
        y: number;
        styleIndex: number;
    }>;
    private worksheets;
    private builtInProperties;
    private mFonts;
    private mBorders;
    private mFills;
    private mNumFmt;
    private mStyles;
    private mCellXfs;
    private mCellStyleXfs;
    private mergeCells;
    private csvHelper;
    private mSaveType;
    private mHyperLinks;
    private unitsProportions;
    private hyperlinkStyle;
    private printTitles;
    private culture;
    private currency;
    private intl;
    private globalStyles;
    private rgbColors;
    private drawingCount;
    private imageCount;
    constructor(json: any, saveType: SaveType, culture?: string, currencyString?: string, separator?: string);
    private parserBuiltInProperties;
    private parserWorksheets;
    private mergeOptions;
    private applyProperties;
    private getCellName;
    private getColumnName;
    private parserPrintTitle;
    private parserFreezePanes;
    private parserColumns;
    private parserRows;
    private insertMergedCellsStyle;
    private createCell;
    private parserRow;
    private parseGrouping;
    private parseCells;
    private GetColors;
    private processColor;
    private processCellValue;
    private applyGlobalStyle;
    private parserCellStyle;
    private switchNumberFormat;
    private getNumberFormat;
    private parserBorder;
    private processCellStyle;
    private processNumFormatId;
    private isNewFont;
    private isNewBorder;
    private isAllBorder;
    private compareStyle;
    private contains;
    private getCellValueType;
    private parseCellType;
    private parserImages;
    private parseFilters;
    private parserImage;
    saveAsBlob(blobSaveType: BlobSaveType): Promise<{
        blobData: Blob;
    }>;
    save(fileName: string, proxyUrl?: string): void;
    private saveInternal;
    private saveWorkbook;
    private saveWorksheets;
    private saveWorksheet;
    private saveDrawings;
    private updatelastRowOffset;
    private updatelastColumnOffSet;
    private convertToPixels;
    private convertBase64toImage;
    private saveDrawingRelations;
    private pixelsToColumnWidth;
    private ColumnWidthToPixels;
    private trunc;
    private pixelsToRowHeight;
    private saveSheetRelations;
    private saveSheetView;
    private saveSharedString;
    private processString;
    private saveStyles;
    private updateCellXfsStyleXfs;
    private saveNumberFormats;
    private saveFonts;
    private saveFills;
    private saveBorders;
    private saveCellStyles;
    private saveCellStyleXfs;
    private saveCellXfs;
    private saveAlignment;
    private saveApp;
    private saveCore;
    private saveTopLevelRelation;
    private saveWorkbookRelation;
    private saveContentType;
    private addToArchive;
    private processMergeCells;
    private updatedMergedCellStyles;
    /**
     * Returns the tick count corresponding to the given year, month, and day.
     * @param year number value of year
     * @param month number value of month
     * @param day number value of day
     */
    private dateToTicks;
    /**
     * Return the tick count corresponding to the given hour, minute, second.
     * @param hour number value of hour
     * @param minute number value if minute
     * @param second number value of second
     */
    private timeToTicks;
    /**
     * Checks if given year is a leap year.
     * @param year Year value.
     */
    isLeapYear(year: number): boolean;
    /**
     * Converts `DateTime` to the equivalent OLE Automation date.
     */
    private toOADate;
}
/**
 * BuiltInProperties Class
 * @private
 */
export declare class BuiltInProperties {
    author: string;
    comments: string;
    category: string;
    company: string;
    manager: string;
    subject: string;
    title: string;
    createdDate: Date;
    modifiedDate: Date;
    tags: string;
    status: string;
}
