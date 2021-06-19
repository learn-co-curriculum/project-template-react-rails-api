/**
 * Save class provide method to save file
 * ```typescript
 * let blob : Blob = new Blob([''], { type: 'text/plain' });
 * Save.save('fileName.txt',blob);
 */
export declare class Save {
    static isMicrosoftBrowser: boolean;
    /**
     * Initialize new instance of {save}
     */
    constructor();
    /**
     * Saves the file with specified name and sends the file to client browser
     * @param  {string} fileName- file name to save.
     * @param  {Blob} buffer- the content to write in file
     * @param  {boolean} isMicrosoftBrowser- specify whether microsoft browser or not
     * @returns {void}
     */
    static save(fileName: string, buffer: Blob): void;
    private static saveInternal;
    /**
     *
     * @param {string} extension - get mime type of the specified extension
     * @private
     */
    static getMimeType(extension: string): string;
}
