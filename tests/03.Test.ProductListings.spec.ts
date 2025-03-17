import { test, expect } from '@playwright/test';

test.describe('Product Listings', () => {

  test('Should verify product details are correct', async ({ page }) => {
    // 1. Launch the browser and navigate to the page
    await page.goto('https://kimchinamai.lt/');


      await page.getByRole('menuitem', { name: 'PARDUOTUVĖ' }).first().click();
      await page.getByRole('article').filter({ hasText: '10,20 € Tradicinis kimchi su' }).getByRole('button').click();
      await page.getByRole('link', { name: 'KREPŠELIS' }).click();
      await page.locator('#main').getByRole('link', { name: 'Tradicinis kimchi su jūros gė' }).click();
      await page.locator('.ce-product-price > span').first().click();
      await page.getByText('Tradicinis - tikra kimchi').click();
    
    });
  });