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

test('Extension loads and service worker starts in Chrome', async () => {
  const extBackgroundTarget = await browser.waitForTarget(t => t.type() === 'service_worker');
  const extWorker = await extBackgroundTarget.worker();
});

