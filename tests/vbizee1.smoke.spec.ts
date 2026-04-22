import { expect, test } from '@playwright/test'

test('VBizee1 route loads the new Bizee-style landing page', async ({ page }) => {
  await page.goto('/VBizee1/')

  await expect(
    page.getByRole('heading', {
      name: 'Clarity for growing businesses.',
    }),
  ).toBeVisible()

  await expect(
    page.getByRole('heading', {
      name: 'Three ways to get clarity before it becomes a problem.',
    }),
  ).toBeVisible()

  await expect(page.locator('#services article')).toHaveCount(3)
  await expect(page.locator('#faq article')).toHaveCount(4)
})
