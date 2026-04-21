import { expect, test } from '@playwright/test'

test('v1 loads the published v5 homepage variant', async ({ page }) => {
  await page.goto('/v1/')

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
