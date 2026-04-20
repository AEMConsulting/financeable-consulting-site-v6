import { expect, test } from '@playwright/test'

test('design version five loads the v1 homepage with the alternate palette', async ({ page }) => {
  await page.goto('/v5/')

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
