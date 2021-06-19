/**
 * class provide compression library
 * ```typescript
 * let archive = new ZipArchive();
 * archive.compressionLevel = 'Normal';
 * let archiveItem = new ZipArchiveItem(archive, 'directoryName\fileName.txt');
 * archive.addItem(archiveItem);
 * archive.save(fileName.zip);
 * ```
 */
export declare class ZipArchive {
    private files;
    private level;
    /**
     * gets compression level
     */
    /**
    * sets compression level
    */
    compressionLevel: CompressionLevel;
    /**
     * gets items count
     */
    readonly length: number;
    /**
     * constructor for creating ZipArchive instance
     */
    constructor();
    /**
     * add new item to archive
     * @param {ZipArchiveItem} item - item to be added
     * @returns {void}
     */
    addItem(item: ZipArchiveItem): void;
    /**
     * add new directory to archive
     * @param directoryName directoryName to be created
     * @returns {void}
     */
    addDirectory(directoryName: string): void;
    /**
     * gets item at specified index
     * @param {number} index - item index
     * @returns {ZipArchiveItem}
     */
    getItem(index: number): ZipArchiveItem;
    /**
     * determines whether an element is in the collection
     * @param {string | ZipArchiveItem} item - item to search
     * @returns {boolean}
     */
    contains(item: string | ZipArchiveItem): boolean;
    /**
     * save archive with specified file name
     * @param {string} fileName save archive with specified file name
     * @returns {Promise<ZipArchive>}
     */
    save(fileName: string): Promise<ZipArchive>;
    /**
     * Save archive as blob
     * @return {Promise<Blob>}
     */
    saveAsBlob(): Promise<Blob>;
    private saveInternal;
    /**
     * release allocated un-managed resource
     * @returns {void}
     */
    destroy(): void;
    private getCompressedData;
    private compressData;
    private constructZippedObject;
    private writeHeader;
    private writeZippedContent;
    private writeCentralDirectory;
    private writeFooter;
    private getArrayBuffer;
    private getBytes;
    private getModifiedTime;
    private getModifiedDate;
    private calculateCrc32Value;
    /**
     * construct cyclic redundancy code table
     * @private
     */
    static initCrc32Table(): void;
}
/**
 * Class represent unique ZipArchive item
 * ```typescript
 * let archiveItem = new ZipArchiveItem(archive, 'directoryName\fileName.txt');
 * ```
 */
export declare class ZipArchiveItem {
    data: Blob | ArrayBuffer;
    private fileName;
    /**
     * Get the name of archive item
     * @returns string
     */
    /**
    * Set the name of archive item
    * @param  {string} value
    */
    name: string;
    /**
     * constructor for creating {ZipArchiveItem} instance
     * @param {Blob|ArrayBuffer} data file data
     * @param {itemName} itemName absolute file path
     */
    constructor(data: Blob | ArrayBuffer, itemName: string);
    /**
     * release allocated un-managed resource
     * @returns {void}
     */
    destroy(): void;
}
export interface CompressedData {
    fileName: string;
    compressedData: Uint8Array[] | string;
    uncompressedDataSize: number;
    compressedSize: number;
    crc32Value: number;
    compressionType: string;
    isDirectory: boolean;
}
export interface ZippedObject {
    localHeader: string;
    centralDir: string;
    compressedData: CompressedData;
}
/**
 * Compression level.
 */
export declare type CompressionLevel = 'NoCompression' | 'Normal';
