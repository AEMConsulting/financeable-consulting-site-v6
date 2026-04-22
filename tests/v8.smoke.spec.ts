import { expect, test } from '@playwright/test'

test('v8 loads with the new hero video and glass hero shapes', async ({ page }) => {
  await page.goto('/v8/', { waitUntil: 'domcontentloaded' })

  await expect(
    page.getByRole('heading', {
      name: 'Clarity for growing businesses.',
    }),
  ).toBeVisible()

  await expect(page.locator('.v8-hero-video')).toBeVisible()
  await expect(page.locator('.v8-hero-copy-column')).toBeVisible()
  await expect(page.locator('.v5-hero-consultation-card')).toBeVisible()
})
