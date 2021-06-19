import { CompressedStreamWriter } from './compression-writer';
import { Save } from '@syncfusion/ej2-file-utils';
var CRC32TABLE = [];
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
var ZipArchive = /** @class */ (function () {
    /**
     * constructor for creating ZipArchive instance
     */
    function ZipArchive() {
        if (CRC32TABLE.length === 0) {
            ZipArchive.initCrc32Table();
        }
        this.files = [];
        this.level = 'Normal';
        Save.isMicrosoftBrowser = !(!navigator.msSaveBlob);
    }
    Object.defineProperty(ZipArchive.prototype, "compressionLevel", {
        /**
         * gets compression level
         */
        get: function () {
            return this.level;
        },
        /**
         * sets compression level
         */
        set: function (level) {
            this.level = level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZipArchive.prototype, "length", {
        /**
         * gets items count
         */
        get: function () {
            if (this.files === undefined) {
                return 0;
            }
            return this.files.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * add new item to archive
     * @param {ZipArchiveItem} item - item to be added
     * @returns {void}
     */
    ZipArchive.prototype.addItem = function (item) {
        if (item === null || item === undefined) {
            throw new Error('ArgumentException: item cannot be null or undefined');
        }
        for (var i = 0; i < this.files.length; i++) {
            var file = this.files[i];
            if (file instanceof ZipArchiveItem) {
                if (file.name === item.name) {
                    throw new Error('item with same name already exist');
                }
            }
        }
        this.files.push(item);
    };
    /**
     * add new directory to archive
     * @param directoryName directoryName to be created
     * @returns {void}
     */
    ZipArchive.prototype.addDirectory = function (directoryName) {
        if (directoryName === null || directoryName === undefined) {
            throw new Error('ArgumentException: string cannot be null or undefined');
        }
        if (directoryName.length === 0) {
            throw new Error('ArgumentException: string cannot be empty');
        }
        if (directoryName.slice(-1) !== '/') {
            directoryName += '/';
        }
        if (this.files.indexOf(directoryName) !== -1) {
            throw new Error('item with same name already exist');
        }
        this.files.push(directoryName);
    };
    /**
     * gets item at specified index
     * @param {number} index - item index
     * @returns {ZipArchiveItem}
     */
    ZipArchive.prototype.getItem = function (index) {
        if (index >= 0 && index < this.files.length) {
            return this.files[index];
        }
        return undefined;
    };
    /**
     * determines whether an element is in the collection
     * @param {string | ZipArchiveItem} item - item to search
     * @returns {boolean}
     */
    ZipArchive.prototype.contains = function (item) {
        return this.files.indexOf(item) !== -1 ? true : false;
    };
    /**
     * save archive with specified file name
     * @param {string} fileName save archive with specified file name
     * @returns {Promise<ZipArchive>}
     */
    ZipArchive.prototype.save = function (fileName) {
        if (fileName === null || fileName === undefined || fileName.length === 0) {
            throw new Error('ArgumentException: fileName cannot be null or undefined');
        }
        if (this.files.length === 0) {
            throw new Error('InvalidOperation');
        }
        var zipArchive = this;
        var promise;
        return promise = new Promise(function (resolve, reject) {
            zipArchive.saveInternal(fileName, false).then(function () {
                resolve(zipArchive);
            });
        });
    };
    /**
     * Save archive as blob
     * @return {Promise<Blob>}
     */
    ZipArchive.prototype.saveAsBlob = function () {
        var zipArchive = this;
        var promise;
        return promise = new Promise(function (resolve, reject) {
            zipArchive.saveInternal('', true).then(function (blob) {
                resolve(blob);
            });
        });
    };
    ZipArchive.prototype.saveInternal = function (fileName, skipFileSave) {
        var _this = this;
        var zipArchive = this;
        var promise;
        return promise = new Promise(function (resolve, reject) {
            var zipData = [];
            var dirLength = 0;
            for (var i = 0; i < zipArchive.files.length; i++) {
                var compressedObject = _this.getCompressedData(_this.files[i]);
                compressedObject.then(function (data) {
                    dirLength = zipArchive.constructZippedObject(zipData, data, dirLength, data.isDirectory);
                    if (zipData.length === zipArchive.files.length) {
                        var blob = zipArchive.writeZippedContent(fileName, zipData, dirLength, skipFileSave);
                        resolve(blob);
                    }
                });
            }
        });
    };
    /**
     * release allocated un-managed resource
     * @returns {void}
     */
    ZipArchive.prototype.destroy = function () {
        if (this.files !== undefined && this.files.length > 0) {
            for (var i = 0; i < this.files.length; i++) {
                var file = this.files[i];
                if (file instanceof ZipArchiveItem) {
                    file.destroy();
                }
                file = undefined;
            }
            this.files = [];
        }
        this.files = undefined;
        this.level = undefined;
    };
    ZipArchive.prototype.getCompressedData = function (item) {
        var zipArchive = this;
        var promise = new Promise(function (resolve, reject) {
            if (item instanceof ZipArchiveItem) {
                var reader_1 = new FileReader();
                reader_1.onload = function () {
                    var input = new Uint8Array(reader_1.result);
                    var data = {
                        fileName: item.name, crc32Value: 0, compressedData: [],
                        compressedSize: undefined, uncompressedDataSize: input.length, compressionType: undefined,
                        isDirectory: false
                    };
                    if (zipArchive.level === 'Normal') {
                        zipArchive.compressData(input, data, CRC32TABLE);
                        var length_1 = 0;
                        for (var i = 0; i < data.compressedData.length; i++) {
                            length_1 += data.compressedData[i].length;
                        }
                        data.compressedSize = length_1;
                        data.compressionType = '\x08\x00'; //Deflated = 8
                    }
                    else {
                        data.compressedSize = input.length;
                        data.crc32Value = zipArchive.calculateCrc32Value(0, input, CRC32TABLE);
                        data.compressionType = '\x00\x00'; // Stored = 0
                        data.compressedData.push(input);
                    }
                    resolve(data);
                };
                reader_1.readAsArrayBuffer(item.data);
            }
            else {
                var data = {
                    fileName: item, crc32Value: 0, compressedData: '', compressedSize: 0, uncompressedDataSize: 0,
                    compressionType: '\x00\x00', isDirectory: true
                };
                resolve(data);
            }
        });
        return promise;
    };
    ZipArchive.prototype.compressData = function (input, data, crc32Table) {
        var compressor = new CompressedStreamWriter(true);
        var currentIndex = 0;
        var nextIndex = 0;
        do {
            if (currentIndex >= input.length) {
                compressor.close();
                break;
            }
            nextIndex = Math.min(input.length, currentIndex + 16384);
            var subArray = input.subarray(currentIndex, nextIndex);
            data.crc32Value = this.calculateCrc32Value(data.crc32Value, subArray, crc32Table);
            compressor.write(subArray, 0, nextIndex - currentIndex);
            currentIndex = nextIndex;
        } while (currentIndex <= input.length);
        data.compressedData = compressor.compressedData;
        compressor.destroy();
    };
    ZipArchive.prototype.constructZippedObject = function (zipParts, data, dirLength, isDirectory) {
        var extFileAttr = 0;
        var date = new Date();
        if (isDirectory) {
            extFileAttr = extFileAttr | 0x00010; // directory flag
        }
        extFileAttr = extFileAttr | (0 & 0x3F);
        var header = this.writeHeader(data, date);
        var localHeader = 'PK\x03\x04' + header + data.fileName;
        var centralDir = this.writeCentralDirectory(data, header, dirLength, extFileAttr);
        zipParts.push({ localHeader: localHeader, centralDir: centralDir, compressedData: data });
        return dirLength + localHeader.length + data.compressedSize;
    };
    ZipArchive.prototype.writeHeader = function (data, date) {
        var zipHeader = '';
        zipHeader += '\x0A\x00' + '\x00\x00'; // version needed to extract & general purpose bit flag
        zipHeader += data.compressionType; // compression method Deflate=8,Stored=0
        zipHeader += this.getBytes(this.getModifiedTime(date), 2); // last modified Time
        zipHeader += this.getBytes(this.getModifiedDate(date), 2); // last modified date
        zipHeader += this.getBytes(data.crc32Value, 4); // crc-32 value
        zipHeader += this.getBytes(data.compressedSize, 4); // compressed file size
        zipHeader += this.getBytes(data.uncompressedDataSize, 4); // uncompressed file size
        zipHeader += this.getBytes(data.fileName.length, 2); // file name length
        zipHeader += this.getBytes(0, 2); // extra field length
        return zipHeader;
    };
    ZipArchive.prototype.writeZippedContent = function (fileName, zipData, localDirLen, skipFileSave) {
        var cenDirLen = 0;
        var buffer = [];
        for (var i = 0; i < zipData.length; i++) {
            var item = zipData[i];
            cenDirLen += item.centralDir.length;
            buffer.push(this.getArrayBuffer(item.localHeader));
            while (item.compressedData.compressedData.length) {
                buffer.push(item.compressedData.compressedData.shift().buffer);
            }
        }
        for (var i = 0; i < zipData.length; i++) {
            buffer.push(this.getArrayBuffer(zipData[i].centralDir));
        }
        buffer.push(this.getArrayBuffer(this.writeFooter(zipData, cenDirLen, localDirLen)));
        var blob = new Blob(buffer, { type: 'application/zip' });
        if (!skipFileSave) {
            Save.save(fileName, blob);
        }
        return blob;
    };
    ZipArchive.prototype.writeCentralDirectory = function (data, localHeader, offset, externalFileAttribute) {
        var directoryHeader = 'PK\x01\x02' +
            this.getBytes(0x0014, 2) + localHeader + // inherit from file header
            this.getBytes(0, 2) + // comment length
            '\x00\x00' + '\x00\x00' + // internal file attributes 
            this.getBytes(externalFileAttribute, 4) + // external file attributes
            this.getBytes(offset, 4) + // local fileHeader relative offset
            data.fileName;
        return directoryHeader;
    };
    ZipArchive.prototype.writeFooter = function (zipData, centralLength, localLength) {
        var dirEnd = 'PK\x05\x06' + '\x00\x00' + '\x00\x00' +
            this.getBytes(zipData.length, 2) + this.getBytes(zipData.length, 2) +
            this.getBytes(centralLength, 4) + this.getBytes(localLength, 4) +
            this.getBytes(0, 2);
        return dirEnd;
    };
    ZipArchive.prototype.getArrayBuffer = function (input) {
        var a = new Uint8Array(input.length);
        for (var j = 0; j < input.length; ++j) {
            a[j] = input.charCodeAt(j) & 0xFF;
        }
        return a.buffer;
    };
    ZipArchive.prototype.getBytes = function (value, offset) {
        var bytes = '';
        for (var i = 0; i < offset; i++) {
            bytes += String.fromCharCode(value & 0xff);
            value = value >>> 8;
        }
        return bytes;
    };
    ZipArchive.prototype.getModifiedTime = function (date) {
        var modTime = date.getHours();
        modTime = modTime << 6;
        modTime = modTime | date.getMinutes();
        modTime = modTime << 5;
        return modTime = modTime | date.getSeconds() / 2;
    };
    ZipArchive.prototype.getModifiedDate = function (date) {
        var modiDate = date.getFullYear() - 1980;
        modiDate = modiDate << 4;
        modiDate = modiDate | (date.getMonth() + 1);
        modiDate = modiDate << 5;
        return modiDate = modiDate | date.getDate();
    };
    ZipArchive.prototype.calculateCrc32Value = function (crc32Value, input, crc32Table) {
        crc32Value ^= -1;
        for (var i = 0; i < input.length; i++) {
            crc32Value = (crc32Value >>> 8) ^ crc32Table[(crc32Value ^ input[i]) & 0xFF];
        }
        return (crc32Value ^ (-1));
    };
    /**
     * construct cyclic redundancy code table
     * @private
     */
    ZipArchive.initCrc32Table = function () {
        var i;
        for (var j = 0; j < 256; j++) {
            i = j;
            for (var k = 0; k < 8; k++) {
                i = ((i & 1) ? (0xEDB88320 ^ (i >>> 1)) : (i >>> 1));
            }
            CRC32TABLE[j] = i;
        }
    };
    return ZipArchive;
}());
export { ZipArchive };
/**
 * Class represent unique ZipArchive item
 * ```typescript
 * let archiveItem = new ZipArchiveItem(archive, 'directoryName\fileName.txt');
 * ```
 */
var ZipArchiveItem = /** @class */ (function () {
    /**
     * constructor for creating {ZipArchiveItem} instance
     * @param {Blob|ArrayBuffer} data file data
     * @param {itemName} itemName absolute file path
     */
    function ZipArchiveItem(data, itemName) {
        if (data === null || data === undefined) {
            throw new Error('ArgumentException: data cannot be null or undefined');
        }
        if (itemName === null || itemName === undefined) {
            throw new Error('ArgumentException: string cannot be null or undefined');
        }
        if (itemName.length === 0) {
            throw new Error('string cannot be empty');
        }
        this.data = data;
        this.name = itemName;
    }
    Object.defineProperty(ZipArchiveItem.prototype, "name", {
        /**
         * Get the name of archive item
         * @returns string
         */
        get: function () {
            return this.fileName;
        },
        /**
         * Set the name of archive item
         * @param  {string} value
         */
        set: function (value) {
            this.fileName = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * release allocated un-managed resource
     * @returns {void}
     */
    ZipArchiveItem.prototype.destroy = function () {
        this.fileName = undefined;
        this.data = undefined;
    };
    return ZipArchiveItem;
}());
export { ZipArchiveItem };
