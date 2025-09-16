const {test, expect} = require('@playwright/test')
test('locating multiple element', async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")

    // locating multiple element
    // const links = await page.$$('a')
    // for(const link of links){
    //     const linktext = await link.textContent()
    //     console.log("these are the links on the page", linktext)
    // }
    page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
    const products = await page.$$("//div[@id='tbodyid']//div//h4/a")
    for(const product of products){
        const productName = await product.textContent();
        console.log("products names are: ", productName)
    }

    
})
