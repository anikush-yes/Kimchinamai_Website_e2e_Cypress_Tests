import { test, expect } from '@playwright/test';

test.describe('Shopping Cart', () => {

  test.setTimeout(90000); // Padidina timeout iki 90 sekundžių

  test('Verify product details and shopping cart functionality', async ({ page }) => {
    await page.goto('https://kimchinamai.lt/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('menuitem', { name: 'PARDUOTUVĖ' }).first().click();
    await page.waitForLoadState('networkidle');

    await page.getByRole('article')
      .filter({ hasText: '10,20 € Tradicinis kimchi su' })
      .getByRole('button')
      .click();

    await page.getByRole('link', { name: 'KREPŠELIS' }).click();
    await page.waitForLoadState('networkidle');

    const productLink = page.locator('#main')
      .getByRole('link', { name: /Tradicinis kimchi/ });

    await productLink.waitFor({ state: 'visible', timeout: 60000 });
    await productLink.click();

    await page.waitForLoadState('networkidle');

    const price = await page.locator('.ce-product-price > span').first().textContent();

    // Naudojame `toBe` arba `toMatch`
    const priceText = price?.replace(/\s/g, ''); // Pašalina visus tarpelius
expect(priceText).toBe('10,20€');
    
    // Patikriname prekės aprašymą
    await expect(page.getByText('Tradicinis - tikra kimchi')).toBeVisible();
  });
});