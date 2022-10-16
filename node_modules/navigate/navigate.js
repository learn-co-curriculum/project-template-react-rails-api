/*
Copyright (C) 2012 Vytautas Jakutis <vytautas@jakut.is>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function (name, context, definition) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition(name, context);
    } else if (typeof define === 'function' && typeof define.amd === 'object') {
        define(definition);
    } else {
        context[name] = definition(name, context);
    }
})('navigate', this, function (name, context) {
    var lastPath, getCurrentPath, handle, w, html5, add, navigate, regexps, handlers;
    var iframe, lastIframePath, hashToPath, lastButton;
    lastPath = null;
    w = window;
    var ie = typeof w.attachEvent !== 'undefined' && typeof w.addEventListener === 'undefined';
    var opts = {
        clickHandlingEnabled : true,
        basePath : ''
    };
    var initialized = false;
    var addEvent = w.attachEvent ? function(obj, eventType, listener) {
        obj.attachEvent('on' + eventType, listener);
    } : function(obj, eventType, listener) {
        obj.addEventListener(eventType, listener, false);
    };
    var hasAttribute = typeof w.document.body.hasAttribute === 'undefined' ? function(el, attr) {
        return el.attributes[attr].specified;
    } : function(el, attr) {
        return el.hasAttribute(attr);
    };
    html5 = 'onpopstate' in w;
    regexps = [];
    handlers = [];
    add = function(regexp, handler) {
        regexps.push(regexp);
        handlers.push(handler);
        return function() {
            for(var n = regexps.length; n > 0; ) {
                n -= 1;
                if(regexps[n] === regexp && handlers[n] === handler) {
                    regexps.splice(n, 1);
                    handlers.splice(n, 1);
                }
            }
        };
    };
    handle = function(path) {
        if(!initialized || path === lastPath) {
            return;
        }
        var handled = false;
        for(var n = regexps.length, i = 0; i < n; i += 1) {
            var args = regexps[i].exec(path);
            if(args !== null) {
                args.shift();
                handlers[i](args, lastPath, path);
                handled = true;
                break;
            }
        }
        lastPath = path;
        return handled;
    };
    hashToPath = function(path) {
        if(path.charAt(0) === '#') {
            path = path.substr(1);
        }
        if(path === '') {
            return '/';
        }
        return path;
    };
    var getHTML5Path = function() {
        var path = w.document.location.pathname + w.document.location.search;
        path = path.substr(opts.basePath.length);
        return path === '' ? '/' : path;
    };
    var getHTML4Path = function() {
        return hashToPath(w.location.hash);
    };
    if(html5) {
        getCurrentPath = getHTML5Path;
        addEvent(w, 'popstate', function() {
            handle(getCurrentPath());
        });
        navigate = function(path) {
            w.history.pushState({}, '', opts.basePath + path);
            handle(path);
        };
    } else {
        getCurrentPath = getHTML4Path;
        if('onhashchange' in w && (!w.document.documentMode || w.document.documentMode >= 8)) {
            addEvent(w, 'hashchange', function() {
                handle(getCurrentPath());
            });
            navigate = function(path) {
                w.location.hash = '#' + path;
                handle(path);
            };
        } else if(ie) {
            iframe = w.document.createElement('iframe');
            iframe.style.display = 'none';
            w.document.body.appendChild(iframe);
            iframe.contentWindow.document.open();
            iframe.contentWindow.document.close();

            lastIframePath = null;
            w.setInterval(function() {
                var path = getCurrentPath();
                var iframePath = hashToPath(iframe.contentWindow.document.location.hash);
                if(lastPath !== path) {
                    iframe.contentWindow.document.open();
                    iframe.contentWindow.document.close();
                    iframe.contentWindow.document.location.hash = '#' + path;
                    lastIframePath = path;
                    iframePath = path;
                } else if(lastIframePath !== iframePath) {
                    path = iframePath;
                    w.location.hash = '#' + path;
                    lastIframePath = iframePath;
                }
                handle(path);
            }, 300);
            navigate = function(path) {
                w.location.hash = '#' + path;
            };
        } else {
            w.setInterval(function() {
                handle(getCurrentPath());
            }, 300);
            navigate = function(path) {
                w.location.hash = '#' + path;
            };
        }
    }
    lastButton = 0;
    addEvent(w.document, 'mousedown', function(e) {
        if(typeof w.event !== 'undefined' && typeof w.event.button !== 'undefined') {
            lastButton = w.event.button;
        }
    });
    addEvent(w.document, 'click', function(e) {
        if(!opts.clickHandlingEnabled) {
            return;
        }
        e = e || w.event;
        if(typeof e.which === 'undefined') {
            if(lastButton !== 1) {
                return;
            }
        } else {
            if(e.which !== 1) {
                return;
            }
        }
        if(e.defaultPrevented) {
            return;
        }
        var el = e.target || e.srcElement;
        while (el && el.nodeName !== 'A') {
            el = el.parentNode;
        }
        if (!el || el.nodeName !== 'A') {
            return;
        }
        if (el.hash !== '' && el.hash !== '#') {
            return;
        }
        var origin = w.location.protocol + '//' + w.location.hostname;
        if (w.location.port) {
            origin += ':' + w.location.port;
        }
        if(!hasAttribute(el, 'href')) {
            return;
        }
        var href = el.href;
        if(!(typeof el.hostname === 'string' && el.hostname === '') && href.indexOf(origin) !== 0) {
            return;
        }
        var path = el.pathname + el.search;
        if(path.charAt(0) !== '/') {
            path = '/' + path;
        }
        if(path.substr(0, opts.basePath.length) !== opts.basePath) {
            return;
        }
        if(e.preventDefault) {
            e.preventDefault();
        }
        e.returnValue = false;
        navigate(path.substr(opts.basePath.length));
        return false;
    });

    return function(a, b) {
        if(typeof a === 'string' && typeof b === 'undefined') {
            navigate(a);
        } else if((typeof a === 'object' || typeof a === 'function') && typeof b === 'function') {
            return add(a, b);
        } else if((typeof a === 'undefined' || typeof a === 'function') && typeof b === 'undefined') {
            a = a || function() {};
            if(!initialized) {
                initialized = true;
                var path;
                if(html5) {
                    path = getHTML4Path();
                    if(path !== '/') {
                        navigate(path);
                    }
                    w.location.hash = '';
                    a(getCurrentPath());
                } else {
                    path = getHTML5Path();
                    if(path === '/') {
                        w.setTimeout(function() {
                            a(getCurrentPath());
                        }, 0);
                    } else {
                        w.location.href = opts.basePath + '/#' + path;
                        a(path);
                    }
                }
            } else {
                a(getCurrentPath());
            }
        } else if(typeof a === 'object' && typeof b === 'undefined') {
            for(var i in a) {
                if(a.hasOwnProperty(i)) {
                    opts[i] = a[i];
                }
            }
            if(opts.basePath.charAt(opts.basePath.length - 1) === '/') {
                opts.basePath = opts.basePath.substr(0, opts.basePath.length - 1);
            }
        } else {
            throw new Error('navigate.js: incorrect arguments: ' + a + '(' +
                typeof a + '), ' + b + ' (' + typeof b + ')');
        }
    };
});
