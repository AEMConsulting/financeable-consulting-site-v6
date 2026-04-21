import { expect, test } from '@playwright/test'

test('design version two loads the live text variant with updated hero and capabilities copy', async ({ page }) => {
  await page.goto('/v2/')

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
  await expect(
    page.getByText(
      'Reporting, cash visibility, and finance leadership without the full-time CFO hire, made for founders.',
    ),
  ).toBeVisible()
})
