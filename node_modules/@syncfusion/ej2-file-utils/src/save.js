/**
 * Save class provide method to save file
 * ```typescript
 * let blob : Blob = new Blob([''], { type: 'text/plain' });
 * Save.save('fileName.txt',blob);
 */
var Save = /** @class */ (function () {
    /**
     * Initialize new instance of {save}
     */
    function Save() {
        // tslint:disable
    }
    /**
     * Saves the file with specified name and sends the file to client browser
     * @param  {string} fileName- file name to save.
     * @param  {Blob} buffer- the content to write in file
     * @param  {boolean} isMicrosoftBrowser- specify whether microsoft browser or not
     * @returns {void}
     */
    Save.save = function (fileName, buffer) {
        if (fileName === null || fileName === undefined || fileName === '') {
            throw new Error('ArgumentException: fileName cannot be undefined, null or empty');
        }
        var extension = fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length);
        var mimeType = this.getMimeType(extension);
        if (mimeType !== '') {
            buffer = new Blob([buffer], { type: mimeType });
        }
        if (this.isMicrosoftBrowser) {
            navigator.msSaveBlob(buffer, fileName);
        }
        else {
            var downloadLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
            this.saveInternal(fileName, extension, buffer, downloadLink, 'download' in downloadLink);
        }
    };
    Save.saveInternal = function (fileName, extension, buffer, downloadLink, hasDownloadAttribute) {
        if (hasDownloadAttribute) {
            downloadLink.download = fileName;
            var dataUrl_1 = window.URL.createObjectURL(buffer);
            downloadLink.href = dataUrl_1;
            var event_1 = document.createEvent('MouseEvent');
            event_1.initEvent('click', true, true);
            downloadLink.dispatchEvent(event_1);
            setTimeout(function () {
                window.URL.revokeObjectURL(dataUrl_1);
                dataUrl_1 = undefined;
            });
        }
        else {
            if (extension !== 'docx' && extension !== 'xlsx') {
                var url = window.URL.createObjectURL(buffer);
                var isPopupBlocked = window.open(url, '_blank');
                if (!isPopupBlocked) {
                    window.location.href = url;
                }
            }
            else {
                var reader_1 = new FileReader();
                reader_1.onloadend = function () {
                    var isPopupBlocked = window.open(reader_1.result, '_blank');
                    if (!isPopupBlocked) {
                        window.location.href = reader_1.result;
                    }
                };
                reader_1.readAsDataURL(buffer);
            }
        }
    };
    /**
     *
     * @param {string} extension - get mime type of the specified extension
     * @private
     */
    Save.getMimeType = function (extension) {
        var mimeType = '';
        switch (extension) {
            case 'html':
                mimeType = 'text/html';
                break;
            case 'pdf':
                mimeType = 'application/pdf';
                break;
            case 'docx':
                mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
                break;
            case 'xlsx':
                mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                break;
            case 'txt':
                mimeType = 'text/plain';
                break;
        }
        return mimeType;
    };
    return Save;
}());
export { Save };
