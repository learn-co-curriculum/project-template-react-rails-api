import * as React from 'react';
import { RecurrenceEditor, RecurrenceEditorModel } from '@syncfusion/ej2-schedule';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
/**
 * `RecurrenceEditorComponent` represents the react RecurrenceEditor.
 * ```tsx
 * <RecurrenceEditorComponent/>
 * ```
 */
export declare class RecurrenceEditorComponent extends RecurrenceEditor {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<RecurrenceEditorModel & DefaultHtmlAttributes>;
    setState: any;
    private getDefaultAttributes;
    initRenderCalled: boolean;
    private checkInjectedModules;
    private immediateRender;
    props: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<RecurrenceEditorModel & DefaultHtmlAttributes>;
    forceUpdate: (callBack?: () => any) => void;
    context: Object;
    portals: any;
    isReactComponent: Object;
    refs: {
        [key: string]: React.ReactInstance;
    };
    constructor(props: any);
    render(): any;
}
