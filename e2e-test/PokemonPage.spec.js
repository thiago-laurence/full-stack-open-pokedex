import { test, describe, expect } from '@playwright/test'
const PORT = 8080

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto(`http://localhost:${PORT}`)
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
})