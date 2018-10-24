//const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
const puppeteer = require('puppeteer');

const URL = process.env.URL || process.argv[2];

puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']}).then(async browser => {
  const page = await browser.newPage();
  //const response = await page.goto(URL);
await page.setRequestInterception(true);
page.on('request', interceptedRequest => {
        if(interceptedRequest.resourceType() == "xhr"){
            console.log(interceptedRequest.url());
        }
        interceptedRequest.continue();
});
  await page.goto(URL);
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
        }?
        console.log(response.url());
    });
*/
  //console.log(response.text());
  await browser.close();
});
