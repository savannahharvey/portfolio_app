import { test, expect } from '@playwright/test'

test.describe('Contact section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForSelector('#contact')
  })

  test('shows contact info links', async ({ page }) => {
    const email = page.locator('a[href^="mailto:"]')
    const phone = page.locator('a[href^="tel:"]')
    await expect(email).toBeVisible()
    await expect(phone).toBeVisible()
  })

  test('contact form elements exist and can be filled', async ({ page }) => {
    const name = page.locator('#name')
    const email = page.locator('#email')
    const message = page.locator('#message')
    const send = page.locator('button:has-text("Send Message")')

    await expect(name).toBeVisible()
    await name.fill('Test User')
    await expect(email).toBeVisible()
    await email.fill('test@example.com')
    await expect(message).toBeVisible()
    await message.fill('Hello from Playwright test')
    await expect(send).toBeVisible()
  })
})
