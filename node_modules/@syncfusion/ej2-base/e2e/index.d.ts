

import { ProtractorBrowser, promise } from 'protractor';

/**
  * Extended Protractor Browser
  */
export interface ProtractorTypes extends ProtractorBrowser {
    compareScreen: (element: any, fileName: string, options?: any, done?: any) => {};
    waitForEvent: (id: string, moduleName: string, eventName: string) => promise.Promise<any>;
    load: (path: string) => void;
    loadAsync: (path: String) => void;
    injectScript: (path: string) => promise.Promise<any>;
    injectCSS: (path: string) => void;
    saveRegion: (element: any,fileName: string, options?: any) => promise.Promise<any>;
    saveCheckImage: (element: any, fileName: string, options?: any, done?: any) => promise.Promise<any>;
    checkRegion: (element: any,fileName: string, options?: any) => {};
    basePath: string;
    pixDiff: any;
    pixResult: any;
    isDesktop: boolean;
    browserName: string;
    css: string;
}

export declare let browser: ProtractorTypes;


export * from "protractor";

