import { TdData } from '../base/interface';
import { Schedule } from '../base/schedule';
import { Month } from './month';
/**
 * timeline month view
 */
export declare class TimelineMonth extends Month {
    viewClass: string;
    isInverseTableSelect: boolean;
    private appointment;
    constructor(parent: Schedule);
    protected getModuleName(): string;
    onDataReady(): void;
    getLeftPanelElement(): HTMLElement;
    scrollTopPanel(target: HTMLElement): void;
    setContentHeight(content: HTMLElement, leftPanelElement: HTMLElement, height: number): void;
    getDateSlots(renderDates: Date[], workDays: number[]): TdData[];
    renderLeftIndent(tr: Element): void;
    renderContent(): void;
    private getRowCount;
    getContentSlots(): TdData[][];
    updateClassList(data: TdData): void;
    unWireEvents(): void;
    getMonthStart(currentDate: Date): Date;
    getMonthEnd(currentDate: Date): Date;
    generateColumnLevels(): TdData[][];
    destroy(): void;
}
