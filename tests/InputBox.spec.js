const {test, expect} = require('@playwright/test')
test("input box and checkbox", async({page})=>{
    // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // const userNameInput = page.locator("input[placeholder='Username']")
    // await expect(userNameInput).toBeVisible()
    // await expect(userNameInput).toBeEmpty()
    // await expect(userNameInput).toBeEditable()
    // await expect(userNameInput).toBeEnabled()
    // await userNameInput.fill('Admin')

    // const passwordInput = page.locator("input[placeholder='Password']")
    // await expect(passwordInput).toBeVisible()
    // await expect(passwordInput).toBeEmpty()
    // await passwordInput.fill('admin123')

    // await page.waitForTimeout(5000)

    // await page.locator("button[type='submit']").click()
    // // await page.locator("input[placeholder='Username']").fill("Admin")

    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2Fgift-cards")
    await page.locator('#Newsletter').isChecked()
    await page.locator("#Newsletter").toBeChecked()
   
})