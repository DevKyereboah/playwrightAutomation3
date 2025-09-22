const {test, expect} = require('@playwright/test')
const { register } = require('module')
test('Assertion', async ({page})=>{
    await page.goto("https://demo.nopcommerce.com/register")

   await expect(page).toHaveURL("https://demo.nopcommerce.com/register")
   await expect(page).toHaveTitle('nopCommerce demo store. Register')
   const logo = page.locator('.header-logo')
   await expect(logo).toBeVisible()

   // expect to be enabled
   const searchBox = page.getByPlaceholder('Search store')
   await expect(searchBox).toBeEnabled();
   await expect(searchBox).not.toBeDisabled();
   await page.getByPlaceholder('Search store').fill('social')

   // expect locator tobecheked  Radio button
   const maleRadioButton = page.locator('#gender-male')
   await maleRadioButton.click()
   await expect(maleRadioButton).toBeChecked()

   // check box
   const newsletterCheckBox = await page.locator("#Newsletter")
   await expect(newsletterCheckBox).toBeChecked()

   //expect locator to have attribute
   const regButton = await page.locator('#register-button')
   await expect(regButton).toHaveAttribute('type', 'submit')
   
   //element matched text
   await expect(await page.locator('.page-title')).toHaveText('Register')

    //element matched text
   await expect(await page.locator('.page-title')).toContainText('Reg')

   //to have value 
   const emailInput = await page.locator('#Email')
   await emailInput.fill('test@demo.com')
   await expect(emailInput).toHaveValue('test@demo.com')

   //expect locator to have count(dropdowns)
   
})