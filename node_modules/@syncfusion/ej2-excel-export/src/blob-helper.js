/**
 * BlobHelper class
 * @private
 */
var BlobHelper = /** @class */ (function () {
    function BlobHelper() {
        /* tslint:disable:no-any */
        this.parts = [];
    }
    /* tslint:disable:no-any */
    BlobHelper.prototype.append = function (part) {
        this.parts.push(part);
        this.blob = undefined; // Invalidate the blob
    };
    BlobHelper.prototype.getBlob = function () {
        return new Blob(this.parts, { type: 'text/plain' });
    };
    return BlobHelper;
}());
export { BlobHelper };
