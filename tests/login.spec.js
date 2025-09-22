// tests/login.spec.js (CommonJS)
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

// __dirname is available automatically in CommonJS
test('login page', async ({ page }) => {
  const filePath = path.join(__dirname, 'test-data', 'Login-user.json');

  let user;
  try {
    const rawData = fs.readFileSync(filePath, 'utf8');
    user = JSON.parse(rawData);
  } catch (err) {
    throw new Error(`Failed to read/parse JSON at ${filePath}: ${err.message}`);
  }

  const username = user.username || user.Username || '';
  const password = user.password || user.Password || '';

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/.*dashboard.*/);
});
