
# AIID Widget Extension

Adds a button to the browser that opens the current web page in the [AIID](https://github.com/responsible-ai-collaborative/aiid) submission form.

To build:

```
npm run build
```

This will create  `build/chromium/`, `build/firefox/`, and `build/aiid-widget-web-ext.zip`. The first of these can be [loaded as an unpacked extension](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked) in chromium-derived browsers, and the latter two can be [loaded as temporary add-on](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) in Firefox.

Tests can be run with

```
npm run test
```

Currently this will load the extension in Chromium and then run a test which does nothing.

