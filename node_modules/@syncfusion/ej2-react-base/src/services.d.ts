/**
 * Dependency injection
 */
import * as React from 'react';
export declare class Inject extends React.PureComponent<{
    services: Object[];
}, {}> {
    static isService: boolean;
    render(): any;
}
