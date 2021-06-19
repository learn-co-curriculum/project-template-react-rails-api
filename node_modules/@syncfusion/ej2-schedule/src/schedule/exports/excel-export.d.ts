import { Schedule } from '../base/schedule';
import { ExportOptions } from '../base/interface';
/**
 * Excel Export Module
 */
export declare class ExcelExport {
    private parent;
    constructor(parent: Schedule);
    initializeExcelExport(excelExportOptions: ExportOptions): void;
    private processWorkbook;
    protected getModuleName(): string;
    destroy(): void;
}
