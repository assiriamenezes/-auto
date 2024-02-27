// @ts-check
const { test, expect } = require('@playwright/test');

test('acessar página do ifood > entrar', async ({ page }) => {
  await page.goto('https://www.ifood.com.br/');

  await page.getByRole('button', { name: 'Entrar' }).click();
  await expect(page).toHaveURL('https://www.ifood.com.br/entrar');

});
