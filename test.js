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
/*
await page.setRequestInterception(true);
page.on('request', interceptedRequest => {
        if(interceptedRequest.resourceType() == "xhr"){
            console.log(interceptedRequest.url());
        }
        interceptedRequest.continue();
});
*/
  //await page.screenshot({ path:'test.png', fullPage: true})
/*
function logRequest(interceptedRequest) {
    console.log('hoge');
  //console.log('A request was made:', interceptedRequest.url());
}
*/
//page.on('request', logRequest);  //await page.goto(URL);
//page.on('request', console.log('hoge'));  //await page.goto(URL);
/*
page.on('request', r => {
  //if (r.resourceType() === 'xhr')
    console.log('XHR: ' + r.url());
});
*/
/*
  console.log(response.request().resourceType());
    page.on('response', response => {
        console.log(response.request().resourceType());
        if ('xhr' !== response.request().resourceType()){
            return ;
        }
        console.log(response.url());
    });
*/
  const html = await response.text();
  console.log(html);
  await page.goto(URL);
  await browser.close();
});

