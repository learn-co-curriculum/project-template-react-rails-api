import { Schedule } from '../base/schedule';
/**
 * `touch` module is used to handle touch interactions.
 */
export declare class ScheduleTouch {
    private element;
    private currentPanel;
    private previousPanel;
    private nextPanel;
    private parent;
    private touchObj;
    private timeStampStart;
    private isScrollTriggered;
    private touchLeftDirection;
    private touchRightDirection;
    constructor(parent: Schedule);
    private scrollHandler;
    private swipeHandler;
    private tapHoldHandler;
    private renderPanel;
    private swapPanels;
    private confirmSwipe;
    private cancelSwipe;
    private onTransitionEnd;
    private getTranslateX;
    private setDimensions;
    resetValues(): void;
    destroy(): void;
}
