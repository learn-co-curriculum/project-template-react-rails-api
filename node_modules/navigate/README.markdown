# navigate

A router for the browser (client-side JavaScript).

- [Overview](#overview)
- [Installation](#installation)
- [API](#api)
- [Development](#development)

## Overview

* Has no dependencies.
* Supports Asynchronous Module Loader (AMD, RequireJS), CommonJS (Node.js require) and regular &lt;script&gt; loading.
* If HTML5 History API is not available, falls back to hashes.
* Handles click events on same origin links.
* Tested on these browsers:
  - Mozilla Firefox 1.0+
  - Opera 8.00+
  - Google Chrome 1+
  - Microsoft Internet Explorer 6+
  - Apple Safari 3.0+

## Installation

  Install manually by adding to your HTML file:

    <script src="/path/to/navigate/navigate.js"></script>

  Install with [npm](https://www.npmjs.org/package/navigate):

    $ npm install --save navigate

  Install with [component](http://component.io/jakutis/navigate):

    $ component install jakutis/navigate

  Install with [bower](http://bower.io):

    $ bower install --save navigate

## API

    // configure, can be called anytime at all (including never)
    navigate({
        // whether same origin a.href clicks are captured
        clickHandlingEnabled : true,
        // URL path prefix
        basePath : ''
    });

    // initialize
    navigate();

    // get current page (also initialize, if not initialized)
    navigate(function(entryPage) {
        console.log('Entry page to this web app is ' + entryPage);
    });

    // handle navigations to /user/* pages
    navigate(/^\/user\/(.+)$/, function(args, from, to) {
        console.log('Navigated from page ' + from + ' to ' + to);
        console.log('Showing user ' + args[0]);
    });

    // navigate to user's "tahu" page
    navigate('/user/tahu');

## Development

    TODO
