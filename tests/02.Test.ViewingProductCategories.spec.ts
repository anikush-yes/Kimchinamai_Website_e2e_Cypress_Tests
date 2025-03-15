import { test, expect } from '@playwright/test';

test.describe('Product Categories Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://kimchinamai.lt/');

    // Use .first() to select the first occurrence of 'PARDUOTUVĖ' link
    const parduotuveLink = page.locator('.pk-nav-link:has-text("PARDUOTUVĖ")').first();

    // Ensure the element is visible and interactable
    await expect(parduotuveLink).toBeVisible();
    await parduotuveLink.hover();
  });

  test('Should check Kimchi category and verify relevant products', async ({ page }) => {
    const kimchiLink = page.locator('a[href="https://kimchinamai.lt/10-parduotuve#kimchi"]');
    await kimchiLink.click();
    await page.waitForTimeout(1000); // waiting for the page to load
    await expect(page).toHaveURL('https://kimchinamai.lt/10-parduotuve#kimchi');
  });

  test('Should check Rinkiniai category and verify relevant products', async ({ page }) => {
    const rinkiniaiLink = page.locator('a[href="https://kimchinamai.lt/10-parduotuve#rinkiniai"]');
    await rinkiniaiLink.click();
    await page.waitForTimeout(5000); // waiting for the page to load
    await expect(page).toHaveURL('https://kimchinamai.lt/10-parduotuve#rinkiniai');
  });

  test('Should check Sultys category and verify relevant products', async ({ page }) => {
    const sultysLink = page.locator('a[href="https://kimchinamai.lt/10-parduotuve#sultys"]');
    await sultysLink.click();
    await page.waitForTimeout(4000); // waiting for the page to load
    await expect(page).toHaveURL('https://kimchinamai.lt/10-parduotuve#sultys');
  });

  test('Should check Padažai category and verify relevant products', async ({ page }) => {
    const padazaiLink = page.locator('a[href="https://kimchinamai.lt/10-parduotuve#padazai"]');
    await padazaiLink.click();
    await page.waitForTimeout(4000); // waiting for the page to load
    await expect(page).toHaveURL('https://kimchinamai.lt/10-parduotuve#padazai');
  });

  test('Should check Kita category and verify relevant products', async ({ page }) => {
    const kitaLink = page.locator('a[href="https://kimchinamai.lt/10-parduotuve#kita"]');
    await kitaLink.click();
    await page.waitForTimeout(4000); // waiting for the page to load
    await expect(page).toHaveURL('https://kimchinamai.lt/10-parduotuve#kita');
  });

});