import { Component, EmitType } from '@syncfusion/ej2-base';
import { INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { KeyboardEventArgs, ChildProperty } from '@syncfusion/ej2-base';
import { Ajax } from '@syncfusion/ej2-base';
import { UploaderModel, AsyncSettingsModel, ButtonsPropsModel, FilesPropModel } from './uploader-model';
export declare type DropEffect = 'Copy' | 'Move' | 'Link' | 'None' | 'Default';
export declare class FilesProp extends ChildProperty<FilesProp> {
    /**
     * Specifies the name of the file
     *
     * @default ''
     */
    name: string;
    /**
     * Specifies the size of the file
     *
     * @default null
     */
    size: number;
    /**
     * Specifies the type of the file
     *
     * @default ''
     */
    type: string;
}
export declare class ButtonsProps extends ChildProperty<ButtonsProps> {
    /**
     * Specifies the text or html content to browse button
     *
     * @default 'Browse...'
     */
    browse: string | HTMLElement;
    /**
     * Specifies the text or html content to upload button
     *
     * @default 'Upload'
     */
    upload: string | HTMLElement;
    /**
     * Specifies the text or html content to clear button
     *
     * @default 'Clear'
     */
    clear: string | HTMLElement;
}
export declare class AsyncSettings extends ChildProperty<AsyncSettings> {
    /**
     * Specifies the URL of save action that will receive the upload files and save in the server.
     * The save action type must be POST request and define the argument as same input name used to render the component.
     * The upload operations could not perform without this property.
     *
     * @default ''
     */
    saveUrl: string;
    /**
     * Specifies the URL of remove action that receives the file information and handle the remove operation in server.
     * The remove action type must be POST request and define “removeFileNames” attribute to get file information that will be removed.
     * This property is optional.
     *
     * @default ''
     */
    removeUrl: string;
    /**
     * Specifies the chunk size to split the large file into chunks, and upload it to the server in a sequential order.
     * If the chunk size property has value, the uploader enables the chunk upload by default.
     * It must be specified in bytes value.
     *
     * > For more information, refer to the [chunk upload](../../uploader/chunk-upload/) section from the documentation.
     *
     * @default 0
     */
    chunkSize: number;
    /**
     * Specifies the number of retries that the uploader can perform on the file failed to upload.
     * By default, the uploader set 3 as maximum retries. This property must be specified to prevent infinity looping.
     *
     * @default 3
     */
    retryCount: number;
    /**
     * Specifies the delay time in milliseconds that the automatic retry happens after the delay.
     *
     * @default 500
     */
    retryAfterDelay: number;
}
export interface FileInfo {
    /**
     * Returns the upload file name.
     */
    name: string;
    /**
     * Returns the details about upload file.
     *
     * @blazorType object
     */
    rawFile: string | Blob;
    /**
     * Returns the size of file in bytes.
     */
    size: number;
    /**
     * Returns the status of the file.
     */
    status: string;
    /**
     * Returns the MIME type of file as a string. Returns empty string if the file’s type is not determined.
     */
    type: string;
    /**
     * Returns the list of validation errors (if any).
     */
    validationMessages: ValidationMessages;
    /**
     * Returns the current state of the file such as Failed, Canceled, Selected, Uploaded, or Uploading.
     */
    statusCode: string;
    /**
     * Returns where the file selected from, to upload.
     */
    fileSource?: string;
    /**
     * Returns the respective file list item.
     */
    list?: HTMLElement;
    /**
     * Returns the input element mapped with file list item.
     */
    input?: HTMLInputElement;
    /**
     * Returns the unique upload file name ID.
     */
    id?: string;
}
export interface MetaData {
    chunkIndex: number;
    blob: Blob | string;
    file: FileInfo;
    start: number;
    end: number;
    retryCount: number;
    request: Ajax;
}
export interface ValidationMessages {
    /**
     * Returns the minimum file size validation message, if selected file size is less than specified minFileSize property.
     */
    minSize?: string;
    /**
     * Returns the maximum file size validation message, if selected file size is less than specified maxFileSize property.
     */
    maxSize?: string;
}
export interface SelectedEventArgs {
    /**
     * Returns the original event arguments.
     */
    event: MouseEvent | TouchEvent | DragEvent | ClipboardEvent;
    /**
     * Defines whether the current action can be prevented.
     */
    cancel: boolean;
    /**
     * Returns the list of selected files.
     */
    filesData: FileInfo[];
    /**
     * Determines whether the file list generates based on the modified data.
     */
    isModified: boolean;
    /**
     * Specifies the modified files data to generate the file items. The argument depends on `isModified` argument.
     */
    modifiedFilesData: FileInfo[];
    /**
     * Specifies the step value to the progress bar.
     */
    progressInterval: string;
    /**
     * Specifies whether the file selection has been canceled
     */
    isCanceled?: boolean;
    /**
     * Set the current request header to the XMLHttpRequest instance.
     *
     * @blazorType object
     */
    currentRequest?: {
        [key: string]: string;
    }[];
    /**
     * Defines the additional data in key and value pair format that will be submitted to the upload action.
     */
    customFormData: {
        [key: string]: Object;
    }[];
}
export interface BeforeRemoveEventArgs {
    /**
     * Defines whether the current action can be prevented.
     */
    cancel: boolean;
    /**
     * Defines the additional data with key and value pair format that will be submitted to the remove action.
     *
     * @blazorType object
     */
    customFormData: {
        [key: string]: Object;
    }[];
    /**
     * Returns the XMLHttpRequest instance that is associated with remove action.
     *
     * @blazorType object
     */
    currentRequest?: {
        [key: string]: string;
    }[];
}
export interface RemovingEventArgs {
    /**
     * Defines whether the current action can be prevented.
     */
    cancel: boolean;
    /**
     * Defines the additional data with key and value pair format that will be submitted to the remove action.
     *
     * @blazorType object
     */
    customFormData: {
        [key: string]: Object;
    }[];
    /**
     * Returns the original event arguments.
     */
    event: MouseEvent | TouchEvent | KeyboardEventArgs;
    /**
     * Returns the list of files’ details that will be removed.
     */
    filesData: FileInfo[];
    /**
     * Returns the XMLHttpRequest instance that is associated with remove action.
     *
     * @blazorType object
     */
    currentRequest?: XMLHttpRequest;
    /**
     * Defines whether the selected raw file send to server remove action.
     * Set true to send raw file.
     * Set false to send file name only.
     */
    postRawFile?: boolean;
}
export interface ClearingEventArgs {
    /**
     * Defines whether the current action can be prevented.
     */
    cancel: boolean;
    /**
     * Returns the list of files that will be cleared from the FileList.
     */
    filesData: FileInfo[];
}
export interface BeforeUploadEventArgs {
    /**
     * Defines whether the current action can be prevented.
     */
    cancel: boolean;
    /**
     * Defines the additional data in key and value pair format that will be submitted to the upload action.
     *
     * @blazorType object
     */
    customFormData: {
        [key: string]: Object;
    }[];
    /**
     * Returns the XMLHttpRequest instance that is associated with upload action.
     *
     * @blazorType object
     */
    currentRequest?: {
        [key: string]: string;
    }[];
}
export interface UploadingEventArgs {
    /**
     * Returns the list of files that will be uploaded.
     */
    fileData: FileInfo;
    /**
     * Defines the additional data in key and value pair format that will be submitted to the upload action.
     *

     */
    customFormData: {
        [key: string]: Object;
    }[];
    /**
     * Defines whether the current action can be prevented.
     */
    cancel: boolean;
    /**
     * Returns the chunk size in bytes if the chunk upload is enabled.
     */
    chunkSize?: number;
    /**
     * Returns the index of current chunk if the chunk upload is enabled.
     */
    currentChunkIndex?: number;
    /**
     * Returns the XMLHttpRequest instance that is associated with upload action.
     *

     */
    currentRequest?: XMLHttpRequest;
}
export interface ProgressEventArgs {
    /**
     * Returns the original event arguments.
     */
    e?: object;
    /**
     * Returns the details about upload file.
     */
    file?: FileInfo;
    /**
     * Returns the upload event operation.
     */
    operation?: string;
}
export interface UploadChangeEventArgs {
    /**
     * Returns the list of files that will be cleared from the FileList.
     *
     * @blazorType List<Syncfusion.Blazor.Inputs.Internal.UploadFiles>
     */
    files?: FileInfo[];
}
export interface FailureEventArgs extends SuccessEventArgs {
}
export interface SuccessEventArgs {
    /**
     * Returns the original event arguments.
     */
    e?: object;
    /**
     * Returns the details about upload file.
     */
    file?: FileInfo;
    /**
     * Returns the upload status.
     */
    statusText?: string;
    /**
     * Returns the upload event operation.
     */
    operation: string;
    /**
     * Returns the upload event operation.
     */
    response?: ResponseEventArgs;
    /**
     * Returns the upload chunk index.
     */
    chunkIndex?: number;
    /**
     * Returns the upload chunk size.
     */
    chunkSize?: number;
    /**
     * Returns the total chunk size.
     */
    totalChunk?: number;
    /**
     * Returns the original event arguments.
     */
    event?: object;
}
export interface ResponseEventArgs {
    headers?: string;
    readyState?: object;
    statusCode?: object;
    statusText?: string;
    withCredentials?: boolean;
}
export interface CancelEventArgs {
    /**
     * Defines whether the current action can be prevented.
     */
    cancel: boolean;
    /**
     * Returns the original event arguments.
     */
    event: ProgressEventInit;
    /**
     * Returns the file details that will be canceled.
     */
    fileData: FileInfo;
    /**
     * Defines the additional data in key and value pair format that will be submitted when the upload action is canceled.
     *
     * @blazorType object
     */
    customFormData: {
        [key: string]: Object;
    }[];
}
export interface PauseResumeEventArgs {
    /**
     * Returns the original event arguments.
     */
    event: Event;
    /**
     * Returns the file data that is Paused or Resumed.
     */
    file: FileInfo;
    /**
     * Returns the total number of chunks.
     */
    chunkCount: number;
    /**
     * Returns the index of chunk that is Paused or Resumed.
     */
    chunkIndex: number;
    /**
     * Returns the chunk size value in bytes.
     */
    chunkSize: number;
}
export interface ActionCompleteEventArgs {
    /**
     * Return the selected file details.
     */
    fileData: FileInfo[];
}
export interface RenderingEventArgs {
    /**
     * Return the current file item element.
     */
    element: HTMLElement;
    /**
     * Return the current rendering file item data as File object.
     */
    fileInfo: FileInfo;
    /**
     * Return the index of the file item in the file list.
     */
    index: number;
    /**
     * Return whether the file is preloaded
     */
    isPreload: boolean;
}
export interface FileListRenderingEventArgs {
    /**
     * Return the current file item element.
     */
    element: HTMLElement;
    /**
     * Return the current rendering file item data as File object.
     */
    fileInfo: FileInfo;
    /**
     * Return the index of the file item in the file list.
     */
    index: number;
    /**
     * Return whether the file is preloaded
     */
    isPreload: boolean;
}
/**
 * The uploader component allows to upload images, documents, and other files from local to server.
 * ```html
 * <input type='file' name='images[]' id='upload'/>
 * ```
 * ```typescript
 * <script>
 *   var uploadObj = new Uploader();
 *   uploadObj.appendTo('#upload');
 * </script>
 * ```
 */
export declare class Uploader extends Component<HTMLInputElement> implements INotifyPropertyChanged {
    private initialAttr;
    private uploadWrapper;
    private browseButton;
    private listParent;
    private sortFilesList;
    private actionButtons;
    private uploadButton;
    private clearButton;
    private pauseButton;
    private formElement;
    private dropAreaWrapper;
    private filesEntries;
    private uploadedFilesData;
    private base64String;
    private currentRequestHeader;
    private customFormDatas;
    private dropZoneElement;
    private l10n;
    private preLocaleObj;
    private uploadTemplateFn;
    private keyboardModule;
    private progressInterval;
    private progressAnimation;
    private isForm;
    private allTypes;
    private keyConfigs;
    private localeText;
    private pausedData;
    private uploadMetaData;
    private tabIndex;
    private btnTabIndex;
    private disableKeyboardNavigation;
    private count;
    private actionCompleteCount;
    private flag;
    private selectedFiles;
    private browserName;
    private uploaderOptions;
    private uploaderName;
    private isServerBlazor;
    private isBlazorSaveUrl;
    private isBlazorTemplate;
    private fileStreams;
    private newFileRef;
    private isFirstFileOnSelection;
    private dragCounter;
    /**
     * Get the file item(li) which are shown in file list.
     *
     * @private
     */
    fileList: HTMLElement[];
    /**
     * Get the data of files which are shown in file list.
     *
     * @private
     */
    filesData: FileInfo[];
    /**
     * Configures the save and remove URL to perform the upload operations in the server asynchronously.
     *
     * @default { saveUrl: '', removeUrl: '' }
     */
    asyncSettings: AsyncSettingsModel;
    /**
     * By default, the file uploader component is processing the multiple files simultaneously.
     * If sequentialUpload property is enabled, the file upload component performs the upload one after the other.
     *
     * @default false
     */
    sequentialUpload: boolean;
    /**
     * You can add the additional html attributes such as disabled, value etc., to the element.
     * If you configured both property and equivalent html attribute then the component considers the property value.
     * {% codeBlock src='uploader/htmlAttributes/index.md' %}{% endcodeBlock %}
     *
     * @default {}
     */
    htmlAttributes: {
        [key: string]: string;
    };
    /**
     * Specifies the CSS class name that can be appended with root element of the uploader.
     * One or more custom CSS classes can be added to a uploader.
     *
     * @default ''
     */
    cssClass: string;
    /**
     * Specifies Boolean value that indicates whether the component is enabled or disabled.
     * The uploader component does not allow to interact when this property is disabled.
     *
     * @default true
     */
    enabled: boolean;
    /**
     * Specifies the HTML string that used to customize the content of each file in the list.
     *
     * > For more information, refer to the [template](../../uploader/template/) section from the documentation.
     *
     * @default null
     */
    template: string;
    /**
     * Specifies a Boolean value that indicates whether the multiple files can be browsed or
     * dropped simultaneously in the uploader component.
     *
     * @default true
     */
    multiple: boolean;
    /**
     * By default, the uploader component initiates automatic upload when the files are added in upload queue.
     * If you want to manipulate the files before uploading to server, disable the autoUpload property.
     * The buttons “upload” and “clear” will be hided from file list when autoUpload property is true.
     *
     * @default true
     */
    autoUpload: boolean;
    /**
     * You can customize the default text of “browse, clear, and upload” buttons with plain text or HTML elements.
     * The buttons’ text can be customized from localization also. If you configured both locale and buttons property,
     * the uploader component considers the buttons property value.
     * {% codeBlock src='uploader/buttons/index.md' %}{% endcodeBlock %}
     *
     * @default { browse : 'Browse...', clear: 'Clear', upload: 'Upload' }
     */
    buttons: ButtonsPropsModel;
    /**
     * Specifies the extensions of the file types allowed in the uploader component and pass the extensions
     * with comma separators. For example,
     * if you want to upload specific image files,  pass allowedExtensions as “.jpg,.png”.
     *
     * @default ''
     */
    allowedExtensions: string;
    /**
     * Specifies the minimum file size to be uploaded in bytes.
     * The property used to make sure that you cannot upload empty files and small files.
     *
     * @default 0
     */
    minFileSize: number;
    /**
     * Specifies the maximum allowed file size to be uploaded in bytes.
     * The property used to make sure that you cannot upload too large files.
     *
     * @default 30000000
     */
    maxFileSize: number;
    /**
     * Specifies the drop target to handle the drag-and-drop upload.
     * By default, the component creates wrapper around file input that will act as drop target.
     *
     * > For more information, refer to the [drag-and-drop](../../uploader/file-source/#drag-and-drop) section from the documentation.
     *
     * @default null
     */
    dropArea: string | HTMLElement;
    /**
     * Specifies the list of files that will be preloaded on rendering of uploader component.
     * The property used to view and remove the uploaded files from server. By default, the files are configured with
     * uploaded successfully state. The following properties are mandatory to configure the preload files:
     * * Name
     * * Size
     * * Type
     *
     * {% codeBlock src='uploader/files/index.md' %}{% endcodeBlock %}
     *
     * @default { name: '', size: null, type: '' }
     */
    files: FilesPropModel[];
    /**
     * Specifies a Boolean value that indicates whether the default file list can be rendered.
     * The property used to prevent default file list and design own template for file list.
     *
     * @default true
     */
    showFileList: boolean;
    /**
     * Specifies a Boolean value that indicates whether the folder of files can be browsed in the uploader component.
     *
     * > When enabled this property, it allows only files of folder to select or drop to upload and
     * it cannot be allowed to select or drop files.
     *
     * @default false
     */
    directoryUpload: boolean;
    /**
     * Specifies the drag operation effect to the uploader component. Possible values are Copy , Move, Link and None.
     *
     * By default, the uploader component works based on the browser drag operation effect.
     *
     * @default 'Default'
     */
    dropEffect: DropEffect;
    /**
     * Triggers when the component is created.
     *
     * @event created
     * @blazorProperty 'Created'
     */
    created: EmitType<Object>;
    /**
     * Triggers after all the selected files has processed to upload successfully or failed to server.
     *
     * @event actionComplete
     * @blazorProperty 'OnActionComplete'
     */
    actionComplete: EmitType<ActionCompleteEventArgs>;
    /**
     * DEPRECATED-Triggers before rendering each file item from the file list in a page.
     * It helps to customize specific file item structure.
     *
     * @event rendering
     */
    rendering: EmitType<RenderingEventArgs>;
    /**
     * Triggers when the upload process before. This event is used to add additional parameter with upload request.
     *
     * @event beforeUpload
     * @blazorProperty 'BeforeUpload'
     */
    beforeUpload: EmitType<BeforeUploadEventArgs>;
    /**
     * Triggers before rendering each file item from the file list in a page.
     * It helps to customize specific file item structure.
     *
     * @event fileListRendering
     * @blazorProperty 'OnFileListRender'
     */
    fileListRendering: EmitType<FileListRenderingEventArgs>;
    /**
     * Triggers after selecting or dropping the files by adding the files in upload queue.
     *
     * @event selected
     * @blazorProperty 'FileSelected'
     */
    selected: EmitType<SelectedEventArgs>;
    /**
     * Triggers when the upload process gets started. This event is used to add additional parameter with upload request.
     *
     * @event uploading
     * @blazorProperty 'OnUploadStart'
     */
    uploading: EmitType<UploadingEventArgs>;
    /**
     * Triggers when the AJAX request gets success on uploading files or removing files.
     *
     * <table>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * Event arguments<br/></td><td colSpan=1 rowSpan=1>
     * Description<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * event<br/></td><td colSpan=1 rowSpan=1>
     * Ajax progress event arguments.<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * file<br/></td><td colSpan=1 rowSpan=1>
     * File information which is uploaded/removed.<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * name<br/></td><td colSpan=1 rowSpan=1>
     * Name of the event<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * operation<br/></td><td colSpan=1 rowSpan=1>
     * It indicates the success of the operation whether its uploaded or removed<br/></td></tr>
     * </table>
     *
     * @event success
     * @blazorProperty 'Success'
     * @blazorType SuccessEventArgs
     */
    success: EmitType<Object>;
    /**
     * Triggers when the AJAX request fails on uploading or removing files.
     *
     * <table>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * Event arguments<br/></td><td colSpan=1 rowSpan=1>
     * Description<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * event<br/></td><td colSpan=1 rowSpan=1>
     * Ajax progress event arguments.<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * file<br/></td><td colSpan=1 rowSpan=1>
     * File information which is failed from upload/remove.<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * name<br/></td><td colSpan=1 rowSpan=1>
     * Name of the event<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * operation<br/></td><td colSpan=1 rowSpan=1>
     * It indicates the failure of the operation whether its upload or remove<br/></td></tr>
     * </table>
     *
     * @event failure
     * @blazorProperty 'OnFailured'
     * @blazorType FailureEventArgs
     */
    failure: EmitType<Object>;
    /**
     * Triggers on removing the uploaded file. The event used to get confirm before removing the file from server.
     *
     * @event removing
     * @blazorProperty 'OnRemove'
     */
    removing: EmitType<RemovingEventArgs>;
    /**
     * Triggers on remove the uploaded file. The event used to get confirm before remove the file from server.
     *
     * @event beforeRemove
     * @blazorProperty 'BeforeRemove'
     */
    beforeRemove: EmitType<BeforeRemoveEventArgs>;
    /**
     * Triggers before clearing the items in file list when clicking “clear”.
     *
     * @event clearing
     * @blazorProperty 'OnClear'
     */
    clearing: EmitType<ClearingEventArgs>;
    /**
     * Triggers when uploading a file to the server using the AJAX request.
     *
     * <table>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * Event arguments<br/></td><td colSpan=1 rowSpan=1>
     * Description<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * event<br/></td><td colSpan=1 rowSpan=1>
     * Ajax progress event arguments.<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * file<br/></td><td colSpan=1 rowSpan=1>
     * File information which is uploading to server.<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * name<br/></td><td colSpan=1 rowSpan=1>
     * Name of the event<br/></td></tr>
     * </table>
     *
     * @event progress
     * @blazorProperty 'Progressing'
     * @blazorType ProgressEventArgs
     */
    progress: EmitType<Object>;
    /**
     * Triggers when changes occur in uploaded file list by selecting or dropping files.
     *
     * <table>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * Event arguments<br/></td><td colSpan=1 rowSpan=1>
     * Description<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * file<br/></td><td colSpan=1 rowSpan=1>
     * File information which is successfully uploaded to server or removed in server.<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * name<br/></td><td colSpan=1 rowSpan=1>
     * Name of the event<br/></td></tr>
     * </table>
     *
     * @event change
     * @blazorProperty 'ValueChange'
     * @blazorType UploadChangeEventArgs
     */
    change: EmitType<Object>;
    /**
     * Fires when the chunk file uploaded successfully.
     *
     * <table>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * Event arguments<br/></td><td colSpan=1 rowSpan=1>
     * Description<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * chunkIndex<br/></td><td colSpan=1 rowSpan=1>
     * Returns current chunk index.<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * chunkSize<br/></td><td colSpan=1 rowSpan=1>
     * Returns the size of the chunk file.<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * file<br/></td><td colSpan=1 rowSpan=1>
     * File information which is uploading to server.<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * name<br/></td><td colSpan=1 rowSpan=1>
     * Name of the event<br/></td></tr>
     * </table>
     *
     * @event chunkSuccess
     * @blazorProperty 'OnChunkSuccess'
     * @blazorType SuccessEventArgs
     */
    chunkSuccess: EmitType<Object>;
    /**
     * Fires if the chunk file failed to upload.
     *
     * <table>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * Event arguments<br/></td><td colSpan=1 rowSpan=1>
     * Description<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * chunkIndex<br/></td><td colSpan=1 rowSpan=1>
     * Returns current chunk index.<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * chunkSize<br/></td><td colSpan=1 rowSpan=1>
     * Returns the size of the chunk file.<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * file<br/></td><td colSpan=1 rowSpan=1>
     * File information which is uploading to server.<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * name<br/></td><td colSpan=1 rowSpan=1>
     * Name of the event<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * totalChunk<br/></td><td colSpan=1 rowSpan=1>
     * Returns the total chunk count<br/></td></tr>
     * <tr>
     * <td colSpan=1 rowSpan=1>
     * cancel<br/></td><td colSpan=1 rowSpan=1>
     * Prevent triggering of failure event when we pass true to this attribute<br/></td></tr>
     * </table>
     *
     * @event chunkFailure
     * @blazorProperty 'OnChunkFailured'
     * @blazorType FailureEventArgs
     */
    chunkFailure: EmitType<Object>;
    /**
     * Fires when every chunk upload process gets started. This event is used to add additional parameter with upload request.
     *
     * @event chunkUploading
     * @blazorProperty 'OnChunkUploadStart'
     */
    chunkUploading: EmitType<UploadingEventArgs>;
    /**
     * Fires if cancel the chunk file uploading.
     *
     * @event canceling
     * @blazorProperty 'OnCancel'
     */
    canceling: EmitType<CancelEventArgs>;
    /**
     * Fires if pause the chunk file uploading.
     *
     * @event pausing
     * @blazorProperty 'Paused'
     */
    pausing: EmitType<PauseResumeEventArgs>;
    /**
     * Fires if resume the paused chunk file upload.
     *
     * @event resuming
     * @blazorProperty 'OnResume'
     */
    resuming: EmitType<PauseResumeEventArgs>;
    /**
     * Triggers when change the Uploader value.
     *
     * @param {UploaderModel} options - Specifies the Uploader model.
     * @param {string | HTMLInputElement} element - Specifies the element to render as component.
     * @private
     */
    constructor(options?: UploaderModel, element?: string | HTMLInputElement);
    /**
     * Calls internally if any of the property value is changed.
     *
     * @param {UploaderModel} newProp - Returns the dynamic property value of the component.
     * @param {UploaderModel} oldProp - Returns the previous property value of the component.
     * @returns {void}
     * @private
     */
    onPropertyChanged(newProp: UploaderModel, oldProp: UploaderModel): void;
    private setLocalizedTexts;
    private getKeyValue;
    private updateFileList;
    private reRenderFileList;
    protected preRender(): void;
    private formRendered;
    protected getPersistData(): string;
    /**
     * Return the module name of the component.
     *
     * @returns {string} Returns the component name.
     */
    getModuleName(): string;
    private updateDirectoryAttributes;
    /**
     * To Initialize the control rendering
     *
     * @private
     * @returns {void}
     */
    render(): void;
    private renderBrowseButton;
    private renderActionButtons;
    private serverActionButtonsEventBind;
    private serverUlElement;
    private wireActionButtonEvents;
    private unwireActionButtonEvents;
    private removeActionButtons;
    private renderButtonTemplates;
    private initializeUpload;
    private renderPreLoadFiles;
    private checkActionButtonStatus;
    private setDropArea;
    private updateDropArea;
    private createDropTextHint;
    private updateHTMLAttrToElement;
    private updateHTMLAttrToWrapper;
    private setMultipleSelection;
    private checkAutoUpload;
    private sequenceUpload;
    private setCSSClass;
    private wireEvents;
    private unWireEvents;
    private resetForm;
    private keyActionHandler;
    private getCurrentMetaData;
    private removeFocus;
    private browseButtonClick;
    private uploadButtonClick;
    private clearButtonClick;
    private bindDropEvents;
    private unBindDropEvents;
    private onDragEnter;
    private onDragLeave;
    private dragHover;
    private dropElement;
    private onPasteFile;
    private getSelectedFiles;
    private removeFiles;
    private removeFilesData;
    private removeUploadedFile;
    private removingEventCallback;
    private updateFormData;
    private updateCustomheader;
    private removeCompleted;
    private removeFailed;
    private getFilesFromFolder;
    private checkDirectoryUpload;
    traverseFileTree(item: any, event?: MouseEvent | TouchEvent | DragEvent | ClipboardEvent): void;
    private readFileFromDirectory;
    private pushFilesEntries;
    private onSelectFiles;
    private getBase64;
    private renderSelectedFiles;
    private updateInitialFileDetails;
    private _internalRenderSelect;
    private allowUpload;
    private isFormUpload;
    private clearData;
    private updateSortedFileList;
    private isBlank;
    private checkExtension;
    private validatedFileSize;
    private isPreLoadFile;
    private createCustomfileList;
    private createParentUL;
    private formFileList;
    private formValidateFileInfo;
    private addInvalidClass;
    private createFormInput;
    private getFileSize;
    private mergeFileInfo;
    private statusForFormUpload;
    private formCustomFileList;
    /**
     * Create the file list for specified files data.
     *
     * @param { FileInfo[] } fileData - Specifies the files data for file list creation.
     * @returns {void}
     */
    createFileList(fileData: FileInfo[], isSelectedFile?: boolean): void;
    private getSlicedName;
    private setListToFileInfo;
    private truncateName;
    private getFileType;
    private getFileNameOnly;
    private setInitialAttributes;
    private filterfileList;
    private updateStatus;
    private getLiElement;
    private createProgressBar;
    private updateProgressbar;
    private changeProgressValue;
    private uploadInProgress;
    private cancelUploadingFile;
    private removecanceledFile;
    private renderFailureState;
    private reloadcanceledFile;
    private uploadComplete;
    private getResponse;
    private serverRemoveIconBindEvent;
    private raiseSuccessEvent;
    private uploadFailed;
    private uploadSequential;
    private checkActionComplete;
    private raiseActionComplete;
    private getSelectedFileStatus;
    private updateProgressBarClasses;
    private removeProgressbar;
    private animateProgressBar;
    private setExtensions;
    private templateComplier;
    private setRTL;
    private localizedTexts;
    private setControlStatus;
    private checkHTMLAttributes;
    private chunkUpload;
    private sendRequest;
    private uploadingEventCallback;
    private eventCancelByArgs;
    private checkChunkUpload;
    private chunkUploadComplete;
    private sendNextRequest;
    private removeChunkFile;
    private pauseUpload;
    private abortUpload;
    private resumeUpload;
    private updateMetaData;
    private removeChunkProgressBar;
    private chunkUploadFailed;
    private retryRequest;
    private checkPausePlayAction;
    private retryUpload;
    private chunkUploadInProgress;
    /**
     * It is used to convert bytes value into kilobytes or megabytes depending on the size based
     * on [binary prefix](https://en.wikipedia.org/wiki/Binary_prefix).
     *
     * @param { number } bytes - Specifies the file size in bytes.
     * @returns {string}
     */
    bytesToSize(bytes: number): string;
    /**
     * Allows you to sort the file data alphabetically based on its file name clearly.
     *
     * @param { FileList } filesData - specifies the files data for upload.
     * @returns {File[]}
     */
    sortFileList(filesData?: FileList): File[];
    /**
     * Removes the component from the DOM and detaches all its related event handlers. Also it removes the attributes and classes.
     *
     * @method destroy
     * @returns {void}
     */
    destroy(): void;
    /**
     * Allows you to call the upload process manually by calling save URL action.
     * To process the selected files (added in upload queue), pass an empty argument otherwise
     * upload the specific file based on its argument.
     *
     * @param { FileInfo | FileInfo[] } files - Specifies the files data for upload.
     * @param {boolean} custom - Specifies whether the uploader is rendered with custom file list.
     * @returns {void}
     */
    upload(files?: FileInfo | FileInfo[], custom?: boolean): void;
    private getFilesInArray;
    private serverReadFileBase64;
    private uploadFileCount;
    private getFileRead;
    private getFileInfo;
    private uploadFiles;
    private uploadFilesRequest;
    private spliceFiles;
    /**
     * Remove the uploaded file from server manually by calling the remove URL action.
     * If you pass an empty argument to this method, the complete file list can be cleared,
     * otherwise remove the specific file based on its argument (“file_data”).
     *
     * @param { FileInfo | FileInfo[] } fileData - specifies the files data to remove from file list/server.
     * @param { boolean } customTemplate - Set true if the component rendering with customize template.
     * @param { boolean } removeDirectly - Set true if files remove without removing event.
     * @param { boolean } postRawFile - Set false, to post file name only to the remove action.
     * @returns {void}
     */
    remove(fileData?: FileInfo | FileInfo[], customTemplate?: boolean, removeDirectly?: boolean, postRawFile?: boolean, args?: MouseEvent | TouchEvent | KeyboardEventArgs): void;
    /**
     * Clear all the file entries from list that can be uploaded files or added in upload queue.
     *
     * @returns {void}
     */
    clearAll(): void;
    /**
     * Get the data of files which are shown in file list.
     *
     * @param { number } index - specifies the file list item(li) index.
     * @returns {FileInfo[]}
     */
    getFilesData(index?: number): FileInfo[];
    /**
     * Pauses the in-progress chunked upload based on the file data.
     *
     * @param { FileInfo | FileInfo[] } fileData - specifies the files data to pause from uploading.
     * @param { boolean } custom - Set true if used custom UI.
     * @returns {void}
     */
    pause(fileData?: FileInfo | FileInfo[], custom?: boolean): void;
    private pauseUploading;
    private getFiles;
    /**
     * Resumes the chunked upload that is previously paused based on the file data.
     *
     * @param { FileInfo | FileInfo[] } fileData - specifies the files data to resume the paused file.
     * @param { boolean } custom - Set true if used custom UI.
     * @returns {void}
     */
    resume(fileData?: FileInfo | FileInfo[], custom?: boolean): void;
    private resumeFiles;
    /**
     * Retries the canceled or failed file upload based on the file data.
     *
     * @param { FileInfo | FileInfo[] } fileData - specifies the files data to retry the canceled or failed file.
     * @param { boolean } fromcanceledStage - Set true to retry from canceled stage and set false to retry from initial stage.
     * @param {boolean} custom -Specifies whether the uploader is rendered with custom file list.
     * @returns {void}
     */
    retry(fileData?: FileInfo | FileInfo[], fromcanceledStage?: boolean, custom?: boolean): void;
    private retryFailedFiles;
    /**
     * Stops the in-progress chunked upload based on the file data.
     * When the file upload is canceled, the partially uploaded file is removed from server.
     *
     * @param { FileInfo | FileInfo[] } fileData - specifies the files data to cancel the progressing file.
     * @returns {void}
     */
    cancel(fileData?: FileInfo[]): void;
    private cancelUpload;
    private showHideUploadSpinner;
}
