import { expect, test } from '@playwright/test'

test('design version six loads the editorial brass homepage variant', async ({ page }) => {
  await page.goto('/v6/')

  await expect(
    page.getByRole('heading', {
      name: 'For businesses that need clearer monthly decisions.',
    }),
  ).toBeVisible()

  await expect(
    page.getByRole('heading', {
      name: 'Three finance support routes, built around the moments growing businesses lose clarity.',
    }),
  ).toBeVisible()
})
