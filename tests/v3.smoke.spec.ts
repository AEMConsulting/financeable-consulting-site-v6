import { expect, test } from '@playwright/test'

test('design version three keeps v2 structure but updates the hero CTA', async ({ page }) => {
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
    page.locator('.v5-hero-consultation-card'),
  ).toBeVisible()

  await expect(
    page.locator('.v5-hero-consultation-card').getByText(
      'No retainer or commitment required. First conversation is exploratory.',
    ),
  ).toHaveCount(0)

  await expect(
    page.locator('.v5-hero-consultation-card').getByRole('heading', { name: 'Book a consultation' }),
  ).toHaveCount(0)

  await expect(page.locator('.v5-hero-consultation-card').getByLabel('Your name')).toBeVisible()
  await expect(page.locator('.v5-hero-consultation-card').getByLabel('Work email')).toBeVisible()
  await expect(page.locator('.v5-hero-consultation-card').getByLabel('Company')).toBeVisible()
})
