const {test, expect} = require('@playwright/test')
test("soft assertion", async ({page})=>{
    // await page.goto("https://www.demoblaze.com/index.html")
    // await expect(page).toHaveTitle('STORE');
    // await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    // await expect(page.locator('.navbar-brand')).toBeVisible()

    //Soft Assetions
      await expect.soft(page).toHaveTitle('STORE123');
    await expect.soft.soft(page).toHaveURL('https://www.demoblaze.com/index.html')
    await expect(page.locator('.navbar-brand')).toBeVisible()
})