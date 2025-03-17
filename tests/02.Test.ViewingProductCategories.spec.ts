import { test } from '@playwright/test';

test.describe('Product Categories Page', () => {

  test('test', async ({ page }) => {
    await page.goto('https://kimchinamai.lt/10-parduotuve');

    await page.getByRole('menuitem', { name: 'PARDUOTUVĖ' }).first().hover();
    await page.getByRole('link', { name: 'KIMCHI', exact: true }).click();
    await page.getByRole('link', { name: 'RINKINIAI' }).click();
    await page.getByRole('link', { name: 'PROBIOTINĖS SULTYS', exact: true }).click();
    await page.getByRole('link', { name: 'FERMENTUOTI PADAŽAI' }).click();
    await page.getByRole('link', { name: 'KITA' }).click();
  });

});
