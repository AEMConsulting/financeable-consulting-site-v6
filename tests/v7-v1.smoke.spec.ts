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

  const howItWorksHeading = page.getByRole('heading', { name: 'Review. Build. Decide.' })
  const outcomesHeading = page.getByRole('heading', { name: 'Finance support that delivers operating control.' })
  const whyHeading = page.getByRole('heading', {
    name: 'More than reporting, less than a full-time senior finance hire.',
  })

  await expect(howItWorksHeading).toBeVisible()
  await expect(outcomesHeading).toBeVisible()
  await expect(whyHeading).toBeVisible()

  const howBox = await howItWorksHeading.boundingBox()
  const outcomesBox = await outcomesHeading.boundingBox()
  const whyBox = await whyHeading.boundingBox()

  expect(howBox).not.toBeNull()
  expect(outcomesBox).not.toBeNull()
  expect(whyBox).not.toBeNull()
  expect((howBox?.y ?? 0) < (outcomesBox?.y ?? 0)).toBe(true)
  expect((outcomesBox?.y ?? 0) < (whyBox?.y ?? 0)).toBe(true)
})
