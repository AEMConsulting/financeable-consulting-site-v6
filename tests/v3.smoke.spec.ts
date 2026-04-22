import { expect, test } from '@playwright/test'

test('design version three loads the v2-derived hero update and capability pills', async ({ page }) => {
  await page.goto('/v3/')

  await expect(
    page.getByRole('heading', {
      name: 'Clarity for growing businesses.',
    }),
  ).toBeVisible()

  await expect(
    page.getByText('No retainer or commitment required. First conversation is exploratory.'),
  ).toBeVisible()

  await expect(
    page.locator('#features article.feature-card').getByRole('link', { name: 'Explore more' }),
  ).toHaveCount(3)

  await expect(
    page.locator('.v5-hero-consultation-card').getByText(
      'No retainer or commitment required. First conversation is exploratory.',
    ),
  ).toHaveCount(0)
})
