import { config } from 'dotenv'
import { defineConfig } from 'vitest/config'

config()

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
  },
})
