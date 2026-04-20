import { expect, test } from '@playwright/test'

test('design version two loads with its own hero and service section', async ({ page }) => {
  await page.goto('/v2/')

  await expect(page.getByText('Design version 02')).toBeVisible()
  await expect(
    page.getByRole('heading', {
      name: 'For businesses that need clearer monthly decisions.',
    }),
  ).toBeVisible()
  await expect(
    page.getByRole('heading', {
      name: 'Three routes. One cleaner monthly operating picture.',
    }),
  ).toBeVisible()
  await expect(page.getByRole('link', { name: 'View original' })).toHaveAttribute('href', '../')
})
