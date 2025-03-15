import { test, expect } from '@playwright/test';

test.describe('Shopping Cart', () => {

  test('Should add a product to the cart and verify it', async ({ page }) => {

    // 4.1-4.2 Navigate to the product page
    await page.goto('https://kimchinamai.lt/');
    
    // Click on the 'PARDUOTUVĖ' link
    const parduotuveLink = page.locator('.pk-nav-link:has-text("PARDUOTUVĖ")');
    await parduotuveLink.click();
    await expect(page).toHaveURL('https://kimchinamai.lt/10-parduotuve');

    // 4.3 Click 'Į krepšelį' (Add to Cart) on a product
    const addToCartButtons = page.locator('a[href="#ce-action=addToCart"]');
    await addToCartButtons.first().click(); // Clicking the first product's Add to Cart button
    await page.waitForTimeout(500); // Wait for the product to be added

    // 4.4 Open the Cart (Krepšelis)
    const cartButton = page.locator('.elementor-button--view-cart').first();
    await cartButton.click();
    await page.waitForTimeout(500);

    // 4.5 Verify that the selected product appears in the cart
    const cartItems = page.locator('ul.cart-items li.cart-item');
    const itemCount = await cartItems.count(); // Get the number of items in the cart
    expect(itemCount).toBeGreaterThan(0); // Ensure there's at least one item in the cart
  });

});