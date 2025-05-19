const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true
  });

  const page = await browser.newPage();
  await page.goto('https://envioues123.github.io/baccarat-template/', {
    waitUntil: 'networkidle2'
  });

  await page.screenshot({ path: 'screenshot.png', fullPage: true });
  await browser.close();
})();
