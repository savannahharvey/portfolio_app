import { test, expect } from '@playwright/test'

test.describe('Projects section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForSelector('#projects')
  })

  test('renders project cards', async ({ page }) => {
    const projectHeadings = page.locator('#projects h3')
    const count = await projectHeadings.count()
    expect(count).toBeGreaterThanOrEqual(3)
    const first = projectHeadings.first()
    await expect(first).toBeVisible()
    const text = await first.textContent()
    expect(text).toBeTruthy()
  })

  test('expands a project card to show details', async ({ page }) => {
    const firstCard = page.locator('#projects div').first()
    await firstCard.click()
    // Expect expanded section to reveal list items (skills)
    const skills = firstCard.locator('ul li')
    await expect(skills.first()).toBeVisible()
  })
})
