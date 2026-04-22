import { expect, test } from '@playwright/test'

test('v7/v1 loads with the stronger hero CTA and no CTA heading', async ({ page }) => {
  await page.goto('/v7/v1/')

  await expect(
    page.getByRole('heading', {
      name: 'Clarity for growing businesses.',
    }),
  ).toBeVisible()

  await expect(page.locator('.v5-hero-consultation-card')).toBeVisible()
  await expect(page.locator('.v5-hero-consultation-card').getByText("Let's talk")).toBeVisible()
  await expect(
    page.locator('.v5-hero-consultation-card').getByRole('heading', { name: 'Book a consultation' }),
  ).toHaveCount(0)
  await expect(page.locator('.v5-hero-consultation-card').getByLabel('What do you need support with?')).toBeVisible()
})
