/**
 * React Component Base
 */
import * as React from 'react';
interface Changes {
    index?: number;
    value?: Object;
    key?: string;
}
interface ObjectValidator {
    status?: boolean;
    changedProperties?: Changes[];
}
export declare class ComponentBase<P, S> extends React.Component<P, S> {
    /**
     * @private
     */
    static reactUid: number;
    private setProperties;
    private element;
    private appendTo;
    private destroy;
    private getModuleName;
    private prevProperties;
    private checkInjectedModules;
    private curModuleName;
    private getInjectedModules;
    private injectedModules;
    private skipRefresh;
    protected htmlattributes: {
        [key: string]: Object;
    };
    private controlAttributes;
    directivekeys: {
        [key: string]: Object;
    };
    private attrKeys;
    private cachedTimeOut;
    private isAppendCalled;
    private initRenderCalled;
    private isReactForeceUpdate;
    private isReact;
    private modelObserver;
    private isDestroyed;
    private isProtectedOnChange;
    private canDelayUpdate;
    private reactElement;
    portals: any;
    protected value: any;
    protected columns: any;
    componentDidMount(): void;
    private renderReactComponent;
    /**
     * @private
     */
    shouldComponentUpdate(nextProps: Object): boolean;
    /**
     * @private
     */
    private updateProperties;
    refreshProperties(dProps: Object, nextProps: Object, silent?: boolean): void;
    private processComplexTemplate;
    getDefaultAttributes(): Object;
    trigger(eventName: string, eventProp?: any, successHandler?: any): void;
    private compareValues;
    compareObjects(oldProps: any, newProps: any, propName?: string): ObjectValidator;
    private refreshChild;
    componentWillUnmount(): void;
    renderReactTemplates(callback?: any): void;
    clearTemplate(templateNames: string[], index?: any, callback?: any): void;
    private validateChildren;
    private getChildType;
    getChildProps(subChild: React.ReactNode[], matcher: {
        [key: string]: Object;
    } & string): Object[];
    getInjectedServices(): Object[];
}
export {};
