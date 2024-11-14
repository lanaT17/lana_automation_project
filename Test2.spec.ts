import { test, expect } from '@playwright/test';


test('Add product to the cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click(),({timeout: 10000 });
    await expect(page.getByText('Products')).toBeVisible();

    await page.locator('text=Add to cart').first().click();
    await expect(page.locator('.shopping_cart_badge')).toHaveCount(1);

    await page.locator('.shopping_cart_link').click();
    await expect(page.locator('.inventory_item_name').first()).toBeVisible();

    await page.locator('text=Remove').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);


});

