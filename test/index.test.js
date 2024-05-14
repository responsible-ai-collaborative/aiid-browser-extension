const puppeteer = require('puppeteer');

const EXTENSION_PATH = 'build/chromium';

beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false,
    args: [
      `--disable-extensions-except=${EXTENSION_PATH}`,
      `--load-extension=${EXTENSION_PATH}`
    ]
  });
});

afterEach(async () => {
  await browser.close();
  browser = undefined;
});

let browser;

test('Test', async () => {

});

