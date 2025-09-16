const {test, expect} = require('@playwright/test')
test('Home page test', async ({page}) =>{
    await page.goto('https://www.demoblaze.com/index.html');

    const pageTitle = await page.title()
    console.log('page titile is : ', pageTitle)

    const pageUrl = await page.url();
    console.log('page url is :', pageUrl)
})
