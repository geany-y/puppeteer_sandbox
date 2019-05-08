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


const puppeteer = require('puppeteer');

const URL = process.argv[2] || false;
if(!URL){ return false; }

const default_args = {
    /*
    headless: false,
    slowMo: 100
    */
    args: [
         '--no-sandbox',
        '--disable-setuid-sandbox'
    ]
}

puppeteer.launch(default_args).then(async browser => {
    const page = await browser.newPage();
    //const response = await page.goto(URL);
    await page.goto(URL);

    //await page.waitForNavigation({waituntil: 'domcontentloaded'});
    await page.waitFor(5000);
    await page.click('.elLogin a');
    //console.log(await (await login_element.getProperty('href')).jsonValue());
    await page.waitFor(5000);
    await page.type('#username','');
    await page.waitFor(1000);
    await page.click('#btnNext');
    await page.waitFor(5000);
    await page.type('#passwd','');
    await page.click('#persistent');
    await page.click('#btnSubmit');
    await page.waitFor(1000);


    await page.screenshot({path: 'mfc.png', fullPage:true})
    //await page.$$eval('body', (el) => {console.log('hello');});
    //const html = await response.text();
    //const html = await page.content();
    //console.log(html);
    await browser.close();
});



