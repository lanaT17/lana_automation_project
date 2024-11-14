import { test, expect } from '@playwright/test';


test('Perform Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
   // await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
   // await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click(),({timeout: 10000 });

    

    await expect(page.getByText('Products')).toBeVisible(), ({timeout: 10000 });
    await expect(page.locator('a.shopping_cart_link')).toBeVisible();
    expect(await page.locator('.inventory_item_name').count()).toBeGreaterThan(1);
});