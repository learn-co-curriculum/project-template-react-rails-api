import { isUndefined } from './util';
var REGX_MOBILE = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i;
var REGX_IE = /msie|trident/i;
var REGX_IE11 = /Trident\/7\./;
var REGX_IOS = /(ipad|iphone|ipod touch)/i;
var REGX_IOS7 = /(ipad|iphone|ipod touch);.*os 7_\d|(ipad|iphone|ipod touch);.*os 8_\d/i;
var REGX_ANDROID = /android/i;
var REGX_WINDOWS = /trident|windows phone|edge/i;
var REGX_VERSION = /(version)[ \/]([\w.]+)/i;
var REGX_BROWSER = {
    OPERA: /(opera|opr)(?:.*version|)[ \/]([\w.]+)/i,
    EDGE: /(edge)(?:.*version|)[ \/]([\w.]+)/i,
    CHROME: /(chrome|crios)[ \/]([\w.]+)/i,
    PANTHOMEJS: /(phantomjs)[ \/]([\w.]+)/i,
    SAFARI: /(safari)[ \/]([\w.]+)/i,
    WEBKIT: /(webkit)[ \/]([\w.]+)/i,
    MSIE: /(msie|trident) ([\w.]+)/i,
    MOZILLA: /(mozilla)(?:.*? rv:([\w.]+)|)/i
};
/* istanbul ignore else  */
if (typeof window !== 'undefined') {
    window.browserDetails = window.browserDetails || {};
}
/**
 * Get configuration details for Browser
 * @private
 */
var Browser = /** @class */ (function () {
    function Browser() {
    }
    Browser.extractBrowserDetail = function () {
        var browserInfo = { culture: {} };
        var keys = Object.keys(REGX_BROWSER);
        var clientInfo = [];
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            clientInfo = Browser.userAgent.match(REGX_BROWSER[key]);
            if (clientInfo) {
                browserInfo.name = (clientInfo[1].toLowerCase() === 'opr' ? 'opera' : clientInfo[1].toLowerCase());
                browserInfo.name = (clientInfo[1].toLowerCase() === 'crios' ? 'chrome' : browserInfo.name);
                browserInfo.version = clientInfo[2];
                browserInfo.culture.name = browserInfo.culture.language = navigator.language;
                if (!!Browser.userAgent.match(REGX_IE11)) {
                    browserInfo.name = 'msie';
                    break;
                }
                var version = Browser.userAgent.match(REGX_VERSION);
                if (browserInfo.name === 'safari' && version) {
                    browserInfo.version = version[2];
                }
                break;
            }
        }
        return browserInfo;
    };
    /**
     * To get events from the browser
     * @param {string} event - type of event triggered.
     * @returns {Boolean}
     */
    Browser.getEvent = function (event) {
        // tslint:disable-next-line:no-any
        var events = {
            start: {
                isPointer: 'pointerdown', isTouch: 'touchstart', isDevice: 'mousedown'
            },
            move: {
                isPointer: 'pointermove', isTouch: 'touchmove', isDevice: 'mousemove'
            },
            end: {
                isPointer: 'pointerup', isTouch: 'touchend', isDevice: 'mouseup'
            },
            cancel: {
                isPointer: 'pointercancel', isTouch: 'touchcancel', isDevice: 'mouseleave'
            }
        };
        return (Browser.isPointer && !Browser.isWindows ? events[event].isPointer :
            (Browser.isTouch ? events[event].isTouch + (!Browser.isDevice ? ' ' + events[event].isDevice : '')
                : events[event].isDevice));
    };
    /**
     * To get the Touch start event from browser
     * @returns {string}
     */
    Browser.getTouchStartEvent = function () {
        return Browser.getEvent('start');
    };
    /**
     * To get the Touch end event from browser
     * @returns {string}
     */
    Browser.getTouchEndEvent = function () {
        return Browser.getEvent('end');
    };
    /**
     * To get the Touch move event from browser
     * @returns {string}
     */
    Browser.getTouchMoveEvent = function () {
        return Browser.getEvent('move');
    };
    /**
     * To cancel the touch event from browser
     * @returns {string}
     */
    Browser.getTouchCancelEvent = function () {
        return Browser.getEvent('cancel');
    };
    /**
     * To get the value based on provided key and regX
     * @param {string} key
     * @param {RegExp} regX
     * @returns {Object}
     */
    Browser.getValue = function (key, regX) {
        var browserDetails = window.browserDetails;
        if ('undefined' === typeof browserDetails[key]) {
            return browserDetails[key] = regX.test(Browser.userAgent);
        }
        return browserDetails[key];
    };
    Object.defineProperty(Browser, "userAgent", {
        get: function () {
            return Browser.uA;
        },
        //Properties 
        /**
         * Property specifies the userAgent of the browser. Default userAgent value is based on the browser.
         * Also we can set our own userAgent.
         */
        set: function (uA) {
            Browser.uA = uA;
            window.browserDetails = {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "info", {
        //Read Only Properties
        /**
         * Property is to get the browser information like Name, Version and Language
         * @returns BrowserInfo
         */
        get: function () {
            if (isUndefined(window.browserDetails.info)) {
                return window.browserDetails.info = Browser.extractBrowserDetail();
            }
            return window.browserDetails.info;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIE", {
        /**
         * Property is to get whether the userAgent is based IE.
         */
        get: function () {
            return Browser.getValue('isIE', REGX_IE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isTouch", {
        /**
         * Property is to get whether the browser has touch support.
         */
        get: function () {
            if (isUndefined(window.browserDetails.isTouch)) {
                return (window.browserDetails.isTouch =
                    ('ontouchstart' in window.navigator) ||
                        (window &&
                            window.navigator &&
                            (window.navigator.maxTouchPoints > 0)) || ('ontouchstart' in window));
            }
            return window.browserDetails.isTouch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isPointer", {
        /**
         * Property is to get whether the browser has Pointer support.
         */
        get: function () {
            if (isUndefined(window.browserDetails.isPointer)) {
                return window.browserDetails.isPointer = ('pointerEnabled' in window.navigator);
            }
            return window.browserDetails.isPointer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isMSPointer", {
        /**
         * Property is to get whether the browser has MSPointer support.
         */
        get: function () {
            if (isUndefined(window.browserDetails.isMSPointer)) {
                return window.browserDetails.isMSPointer = ('msPointerEnabled' in window.navigator);
            }
            return window.browserDetails.isMSPointer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isDevice", {
        /**
         * Property is to get whether the userAgent is device based.
         */
        get: function () {
            return Browser.getValue('isDevice', REGX_MOBILE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIos", {
        /**
         * Property is to get whether the userAgent is IOS.
         */
        get: function () {
            return Browser.getValue('isIos', REGX_IOS);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIos7", {
        /**
         * Property is to get whether the userAgent is Ios7.
         */
        get: function () {
            return Browser.getValue('isIos7', REGX_IOS7);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isAndroid", {
        /**
         * Property is to get whether the userAgent is Android.
         */
        get: function () {
            return Browser.getValue('isAndroid', REGX_ANDROID);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isWebView", {
        /**
         * Property is to identify whether application ran in web view.
         */
        get: function () {
            if (isUndefined(window.browserDetails.isWebView)) {
                window.browserDetails.isWebView = !(isUndefined(window.cordova) && isUndefined(window.PhoneGap)
                    && isUndefined(window.phonegap) && window.forge !== 'object');
                return window.browserDetails.isWebView;
            }
            return window.browserDetails.isWebView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isWindows", {
        /**
         * Property is to get whether the userAgent is Windows.
         */
        get: function () {
            return Browser.getValue('isWindows', REGX_WINDOWS);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchStartEvent", {
        /**
         * Property is to get the touch start event. It returns event name based on browser.
         */
        get: function () {
            if (isUndefined(window.browserDetails.touchStartEvent)) {
                return window.browserDetails.touchStartEvent = Browser.getTouchStartEvent();
            }
            return window.browserDetails.touchStartEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchMoveEvent", {
        /**
         * Property is to get the touch move event. It returns event name based on browser.
         */
        get: function () {
            if (isUndefined(window.browserDetails.touchMoveEvent)) {
                return window.browserDetails.touchMoveEvent = Browser.getTouchMoveEvent();
            }
            return window.browserDetails.touchMoveEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchEndEvent", {
        /**
         * Property is to get the touch end event. It returns event name based on browser.
         */
        get: function () {
            if (isUndefined(window.browserDetails.touchEndEvent)) {
                return window.browserDetails.touchEndEvent = Browser.getTouchEndEvent();
            }
            return window.browserDetails.touchEndEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchCancelEvent", {
        /**
         * Property is to cancel the touch end event.
         */
        get: function () {
            if (isUndefined(window.browserDetails.touchCancelEvent)) {
                return window.browserDetails.touchCancelEvent = Browser.getTouchCancelEvent();
            }
            return window.browserDetails.touchCancelEvent;
        },
        enumerable: true,
        configurable: true
    });
    /* istanbul ignore next */
    Browser.uA = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    return Browser;
}());
export { Browser };
