const puppeteer = require('puppeteer');

const URL = process.argv[2] || false;
if(!URL){ return false; }

const default_args = {
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox'
    ]
}

puppeteer.launch(default_args).then(async browser => {
  const page = await browser.newPage();
  const response = await page.goto(URL);
  const html = await response.text();
  console.log(html);
  await browser.close();
});

