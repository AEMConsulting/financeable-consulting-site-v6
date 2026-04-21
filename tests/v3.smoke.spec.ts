import { expect, test } from '@playwright/test'

test('design version three loads the reordered live layout with outcomes before Why Cuno', async ({ page }) => {
  await page.goto('/v3/')

  await expect(
    page.getByRole('heading', {
      name: 'Clarity for growing businesses.',
    }),
  ).toBeVisible()

  const outcomesHeading = page.getByRole('heading', {
    name: 'Finance support that delivers operating control.',
  })
  const whyHeading = page.getByRole('heading', {
    name: 'More than reporting, less than a full-time senior finance hire.',
  })

  await expect(outcomesHeading).toBeVisible()
  await expect(whyHeading).toBeVisible()

  const outcomesBox = await outcomesHeading.boundingBox()
  const whyBox = await whyHeading.boundingBox()

  expect(outcomesBox).not.toBeNull()
  expect(whyBox).not.toBeNull()
  expect((outcomesBox?.y ?? 0) < (whyBox?.y ?? 0)).toBe(true)

  await expect(page.locator('#benefits .swiper-slide')).toHaveCount(4)
})
