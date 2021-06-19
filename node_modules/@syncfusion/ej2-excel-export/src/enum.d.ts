/**
 * LineStyle
 */
export declare type LineStyle = 'thin' | 'thick' | 'medium' | 'none';
/**
 * HAlignType
 */
export declare type HAlignType = 'center ' | 'justify' | 'left' | 'right' | 'general';
/**
 * VAlignType
 */
export declare type VAlignType = 'bottom' | 'center' | 'top';
/**
 * HyperLinkType
 */
export declare type HyperLinkType = 'none' | 'url' | 'file' | 'unc' | 'workbook';
/**
 * SaveType
 */
export declare type SaveType = 'xlsx' | 'csv';
/**
 * CellType
 * @private
 */
export declare type CellType = 
/**
 * Cell containing a boolean.
 */
'b' | 
/**
 * Cell containing an error.
 */
'e' | 
/**
 * Cell containing an (inline) rich string.
 */
'inlineStr' | 
/**
 * Cell containing a number.
 */
'n' | 
/**
 * Cell containing a shared string.
 */
's' | 
/**
 * Cell containing a formula string.
 */
'str' | 
/**
 * Cell containing a formula.
 */
'f';
/**
 * BlobSaveType
 */
export declare type BlobSaveType = 
/**
 * MIME Type for .csv file
 */
'text/csv' | 
/**
 * MIME Type for .xlsx file
 */
'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
