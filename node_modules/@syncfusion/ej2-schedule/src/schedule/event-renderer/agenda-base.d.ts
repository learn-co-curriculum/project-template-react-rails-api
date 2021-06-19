import { ViewBase } from '../renderer/view-base';
import { Schedule } from '../base/schedule';
export declare class AgendaBase extends ViewBase {
    constructor(parent: Schedule);
    createAgendaContentElement(type: string, listData: Record<string, any>[], aTd: Element, groupOrder?: string[], groupIndex?: number): Element;
    createAppointment(event: Record<string, any>): HTMLElement[];
    processAgendaEvents(events: Record<string, any>[]): Record<string, any>[];
    wireEventActions(): void;
    calculateResourceTableElement(tBody: Element, noOfDays: number, agendaDate: Date): void;
    private createResourceTableRow;
    createDateHeaderElement(date: Date): Element;
    renderEmptyContent(tBody: Element, agendaDate: Date): void;
    createTableRowElement(date: Date, type: string): Element;
    destroy(): void;
}
