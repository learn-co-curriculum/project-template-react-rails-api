import { ActionBaseArgs, ResizeEdges, DragEventArgs, ResizeEventArgs } from '../base/interface';
import { Schedule } from '../base/schedule';
import { MonthEvent } from '../event-renderer/month';
import { VerticalEvent } from '../event-renderer/vertical-view';
import { YearEvent } from '../event-renderer/year';
/**
 * Base class for the common drag and resize related actions
 */
export declare class ActionBase {
    parent: Schedule;
    actionObj: ActionBaseArgs;
    resizeEdges: ResizeEdges;
    scrollArgs: ActionBaseArgs;
    scrollEdges: ResizeEdges;
    monthEvent: MonthEvent;
    verticalEvent: VerticalEvent;
    yearEvent: YearEvent;
    daysVariation: number;
    constructor(parent: Schedule);
    getChangedData(multiData?: Record<string, any>[]): Record<string, any>;
    saveChangedData(eventArgs: DragEventArgs | ResizeEventArgs, isMultiSelect?: boolean): void;
    calculateIntervalTime(date: Date): Date;
    getContentAreaDimension(): Record<string, any>;
    getPageCoordinates(e: MouseEvent & TouchEvent): (MouseEvent & TouchEvent) | Touch;
    getIndex(index: number): number;
    updateTimePosition(date: Date, multiData?: Record<string, any>[]): void;
    getResourceElements(table: HTMLTableCellElement[]): HTMLTableCellElement[];
    getOriginalElement(element: HTMLElement): HTMLElement[];
    createCloneElement(element: HTMLElement): HTMLElement;
    removeCloneElementClasses(): void;
    removeCloneElement(): void;
    getCursorElement(e: MouseEvent & TouchEvent): HTMLElement;
    autoScroll(): void;
    autoScrollValidation(): boolean;
    actionClass(type: string): void;
    updateScrollPosition(e: MouseEvent & TouchEvent): void;
    updateOriginalElement(cloneElement: HTMLElement): void;
    getUpdatedEvent(startTime: Date, endTime: Date, eventObj: Record<string, any>): Record<string, any>;
    dynamicYearlyEventsRendering(event: Record<string, any>, isResize?: boolean): void;
    renderDynamicElement(cellTd: HTMLElement | Element, element: HTMLElement, isAppointment?: boolean): void;
    createAppointmentElement(resIndex: number, innerText: string): HTMLElement;
    dynamicEventsRendering(event: Record<string, any>): void;
    destroy(): void;
}
