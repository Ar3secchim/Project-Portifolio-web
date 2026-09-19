import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('loads both locales and keeps the route while switching', async ({
  page,
}) => {
  await page.goto('/pt/cases/homelab');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Homelab',
  );

  await page.getByRole('button', { name: 'Switch to English' }).click();
  await expect(page).toHaveURL(/\/en\/cases\/homelab$/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'learning systems',
  );
});

test('supports keyboard navigation in the knowledge map', async ({ page }) => {
  await page.goto('/pt/knowledge');
  const firstNode = page.locator('.knowledge-node').first();
  await firstNode.focus();
  await page.keyboard.press('Enter');
  await expect(firstNode).toHaveAttribute('aria-pressed', 'true');
});

test('has no automatically detectable accessibility violations', async ({
  page,
}) => {
  await page.goto('/pt');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
