import { test, expect } from '@playwright/test'

test.describe('Navbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForSelector('nav')
  })

  test('desktop nav contains expected links', async ({ page }) => {
    const links = page.locator('nav a')
    await expect(links.first()).toBeVisible()
    const texts = await links.allTextContents()
    expect(texts).toEqual(expect.arrayContaining(['About', 'Experience', 'Projects', 'Contact']))
  })

  test('mobile menu toggles and shows links', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 })
    const menuButton = page.locator('nav button[aria-label]')
    await expect(menuButton).toBeVisible()

    // Open menu
    await menuButton.click()
    // Mobile menu should show nav links — assert aria label changed and link visible
    await expect(menuButton).toHaveAttribute('aria-label', 'Close Menu')
    // the mobile menu's link is the last matching anchor in the nav
    const aboutLink = page.locator('nav a[href="#about"]').last()
    await expect(aboutLink).toBeVisible()

    // Close menu and assert aria label toggles back
    await menuButton.click()
    await expect(menuButton).toHaveAttribute('aria-label', 'Open Menu')
  })
})
