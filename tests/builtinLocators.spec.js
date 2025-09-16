const {test, expect} = require('@playwright/test')
test('Built-inlocators', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const logo = await page.getByAltText("company-branding")
    await expect(logo).toBeVisible()

//get by placeholder
await page.getByPlaceholder("auth.username").fill(Admin)
await page.getBy

})