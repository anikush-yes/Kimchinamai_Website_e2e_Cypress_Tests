import { test, expect } from '@playwright/test';

test.describe('Verifies that the navigation menu functions correctly by ensuring each menu item redirects to the appropriate page', () => {
  test('Redirects the user without errors to the correct page: Pagrindinis, Parduotuvė, Tinklaraštis, Kontaktai, and the content of the page should be displayed properly.', async ({ page }) => {
    
    // Launch the browser and go to the home page (base URL)
    await page.goto('https://kimchinamai.lt/');

    // PAGRINDINIS (Main page link)
    await page.locator('.pk-nav-link', { hasText: 'PAGRINDINIS' }).first().click({ force: true });
    await expect(page).toHaveURL('https://kimchinamai.lt/');

    // PARDUOTUVĖ (Store page link)
    await page.locator('.pk-nav-link', { hasText: 'PARDUOTUVĖ' }).click({ force: true });
    await expect(page).toHaveURL('https://kimchinamai.lt/10-parduotuve');

    // TINKLARAŠTIS (Blog page link)
    await page.locator('.pk-nav-link', { hasText: 'TINKLARAŠTIS' }).click({ force: true });
    await expect(page.locator('h1')).toContainText('AR ŽINOJOTE?');

    // Clearing cookies, localStorage, and reloading the page
    await page.context().clearCookies();
    await page.evaluate(() => localStorage.clear());
    await page.reload();

    // KONTAKTAI (Contacts page link) using the long CSS selector
    await page.locator('.elementor-element-2fbda9c.elementor-sticky--active > :nth-child(1) > :nth-child(1) > .elementor-element-326c126 > :nth-child(1) > :nth-child(1) > .elementor-element-00ee875 > :nth-child(1) > .pk-ce-widget-wrapper > .pk-ce-widget > .pk-nav > .pk-nav-ul > :nth-child(4) > .flex-container > .pk-nav-link')
      .click({ force: true });

    // Verifying the contact page URL and that the expected text is visible
    await expect(page).toHaveURL('https://kimchinamai.lt/susisiekite-su-mumis');
    await expect(page.locator('text=SUSISIEKITE SU MUMIS')).toBeVisible();
  });
});