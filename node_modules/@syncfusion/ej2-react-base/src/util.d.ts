/**
 * Util for React Base
 */
import * as React from 'react';
export declare function applyMixins(derivedClass: any, baseClass: any[]): void;
declare type MouseEventHandler<T = Element> = React.EventHandler<React.MouseEvent<T>>;
declare type FocusEventHandler<T = Element> = React.EventHandler<React.FocusEvent<T>>;
export interface DefaultHtmlAttributes {
    alt?: string;
    className?: string;
    disabled?: boolean;
    form?: string;
    id?: string;
    name?: string;
    readOnly?: boolean;
    style?: React.CSSProperties;
    tabIndex?: number;
    title?: string;
    type?: string;
    onClick?: MouseEventHandler;
    onFocus?: FocusEventHandler;
    onBlur?: FocusEventHandler;
    immediateRender?: boolean;
    delayUpdate?: string | boolean;
    onChange?: any;
}
export {};
