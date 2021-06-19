import { IMulitSelect } from './interface';
import { InputObject } from '@syncfusion/ej2-inputs';
import { KeyboardEventArgs } from '@syncfusion/ej2-base';
/**
 * The Multiselect enable CheckBoxSelection call this inject module.
 */
export declare class CheckBoxSelection {
    private parent;
    private checkAllParent;
    private selectAllSpan;
    filterInput: HTMLInputElement;
    private filterInputObj;
    private backIconElement;
    private clearIconElement;
    private checkWrapper;
    list: HTMLElement;
    private activeLi;
    private activeEle;
    constructor(parent?: IMulitSelect);
    getModuleName(): string;
    addEventListener(): void;
    removeEventListener(): void;
    listOption(args: {
        [key: string]: Object;
    }): void;
    private setPlaceholder;
    private checboxCreate;
    private setSelectAll;
    destroy(): void;
    listSelection(args: IUpdateListArgs): void;
    private validateCheckNode;
    private clickHandler;
    private changeState;
    protected setSearchBox(args: IUpdateListArgs): InputObject | void;
    private clickOnBackIcon;
    private clearText;
    private setDeviceSearchBox;
    private setSearchBoxPosition;
    protected setPopupFullScreen(): void;
    protected targetElement(): string;
    private onBlur;
    protected onDocumentClick(e: MouseEvent): void;
    private getFocus;
    private checkSelectAll;
    private setLocale;
    private getActiveList;
    private setReorder;
}
export interface ItemCreatedArgs {
    curData: {
        [key: string]: Object;
    };
    item: HTMLElement;
    text: string;
}
export interface IUpdateListArgs {
    module: string;
    enable: boolean;
    li: HTMLElement;
    e: MouseEvent | KeyboardEventArgs;
    popupElement: HTMLElement;
    value: string;
    index: number;
}
