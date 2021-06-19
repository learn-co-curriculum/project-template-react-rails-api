import { ListView, ItemCreatedArgs, Fields, UISelectedItem } from './list-view';
/**
 * ElementContext
 */
export interface ElementContext extends HTMLElement {
    context: {
        [key: string]: string | object;
    };
}
export declare class Virtualization {
    constructor(instance: ListView);
    private listViewInstance;
    private headerData;
    private templateData;
    private topElementHeight;
    private bottomElementHeight;
    listItemHeight: number;
    private domItemCount;
    private expectedDomItemCount;
    private scrollPosition;
    private onVirtualScroll;
    private updateUl;
    private checkListWrapper;
    private iconCssWrapper;
    uiFirstIndex: number;
    private uiLastIndex;
    private totalHeight;
    private topElement;
    private bottomElement;
    private activeIndex;
    private uiIndices;
    private listDiff;
    private elementDifference;
    /**
     * For internal use only.
     *
     * @private
     */
    isNgTemplate(): boolean;
    /**
     * For internal use only.
     *
     * @private
     */
    uiVirtualization(): void;
    private wireScrollEvent;
    private updateUlContainer;
    private ValidateItemCount;
    private uiIndicesInitialization;
    refreshItemHeight(): void;
    private getscrollerHeight;
    private onVirtualUiScroll;
    private onLongScroll;
    private onNormalScroll;
    private updateUiContent;
    private changeElementAttributes;
    private findDSAndIndexFromId;
    getSelectedItems(): UISelectedItem;
    selectItem(obj: Fields | HTMLElement | Element): void;
    enableItem(obj: Fields | HTMLElement | Element): void;
    disableItem(obj: Fields | HTMLElement | Element): void;
    showItem(obj: Fields | HTMLElement | Element): void;
    hideItem(obj: Fields | HTMLElement | Element): void;
    removeItem(obj: HTMLElement | Element | Fields): void;
    setCheckboxLI(li: HTMLElement | Element, e?: MouseEvent | KeyboardEvent | FocusEvent): void;
    setSelectLI(li: HTMLElement | Element, e?: MouseEvent | KeyboardEvent | FocusEvent): void;
    checkedItem(checked: boolean): void;
    private addUiItem;
    private removeUiItem;
    private changeUiIndices;
    addItem(data: DataSource[], fields: Fields, dataSource: DataSource[]): void;
    private createAndInjectNewItem;
    createUIItem(args: ItemCreatedArgs): void;
    private compileTemplate;
    private onChange;
    private updateContextData;
    private classProperty;
    private attributeProperty;
    private textProperty;
    reRenderUiVirtualization(): void;
    private updateUI;
    private onNgChange;
    getModuleName(): string;
    destroy(): void;
}
interface DataSource {
    [key: string]: object;
}
export {};
