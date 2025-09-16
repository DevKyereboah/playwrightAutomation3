const {test, expect} = require('@playwright/test')
test('Locators', async ({page}) =>{
    await page.goto("https://www.demoblaze.com/index.html")
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('panoval')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("button[onclick='logIn()']").click()
    const logoutLink = await page.locator("//a[@id='logout2']")
    await expect(logoutLink).toBeVisible();

   

})