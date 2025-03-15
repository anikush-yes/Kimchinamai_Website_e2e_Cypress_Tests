import { test, expect } from '@playwright/test';

test.describe('Product Listings', () => {

  test('Should verify product details are correct', async ({ page }) => {
    // 1. Launch the browser and navigate to the page
    await page.goto('https://kimchinamai.lt/');

    // 2. Click on the 'PARDUOTUVĖ' link and verify the URL
    const parduotuveLinks = page.locator('.pk-nav-link:has-text("PARDUOTUVĖ")');
    
    // Ensure we click the first one if there are multiple
    await parduotuveLinks.first().click();
    await expect(page).toHaveURL('https://kimchinamai.lt/10-parduotuve');

    // 3. Select a product from the list
    const productLink = page.locator('h3.ce-product-name a:has-text("Tradicinis kimchi su jūros gėrybėmis")');
    await productLink.click();

    // 4. Verify the product name, price, and description
    const productName = page.locator('h1.ce-product-name');
    await expect(productName).toHaveText('Tradicinis kimchi su jūros gėrybėmis');

    const productPrice = page.locator('div.ce-product-price span');
    await expect(productPrice).toContainText('10,20 €');

    const productDescription = page.locator('div.ce-product-description-short p');
    await expect(productDescription).toBeVisible();

    // Extract the text content and normalize it
    const descriptionText = await productDescription.textContent();
    const normalizedText = descriptionText ? descriptionText.replace(/\s+/g, ' ').trim() : '';  // Added check for null/undefined
    const expectedText = 'Tradicinis - tikra kimchi klasika. Gamyboje naudojami kokybiškas ančiuvių padažas, fermentuotos saeujeot krevetės bei gochugaru pipirai suteikia mūsų receptui autentišką skonių paletę. Būtina paragauti visiems norintiems susidaryti nuomonę apie klasikinio paruošimo kimchi.';
    
    expect(normalizedText).toBe(expectedText);

    // 5. Check if 'Į KREPŠELĮ' button is visible
    const addToCartButton = page.locator('button:has-text("Į KREPŠELĮ")');
    await expect(addToCartButton).toBeVisible();

    // 6. Check if 'Aprašymas' dropdown content is available
    const descriptionTab = page.locator('text=Aprašymas');
    await descriptionTab.click();

    const descriptionContent = page.locator('#elementor-tab-content-1091');
    await expect(descriptionContent).toBeVisible();
    await expect(descriptionContent).toContainText('Sudėtis');
    await expect(descriptionContent).toContainText('Grynasis kiekis: 500 g');
    await expect(descriptionContent).toContainText('Pagaminta Lietuvoje');

    // 7. Check if 'Prekių pristatymas' dropdown content is available
    const deliveryTab = page.locator('text=Prekių pristatymas');
    await deliveryTab.click();

    const deliveryContent = page.locator('#elementor-tab-content-1092');
    await expect(deliveryContent).toBeVisible();
    await expect(deliveryContent).toContainText('Užsakymus įprastai išsiunčiame pirmadieniais ir ketvirtadieniais');
    await expect(deliveryContent).toContainText('pristatymas užtrunka vieną darbo dieną');
    await expect(deliveryContent).toContainText('kimchi pristatomi sufasuoti į tam pritaikytą pakuotę');
  });

});