import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/setupTests.ts',
    css: true,
    coverage: {
      all: false,
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      reportsDirectory: './coverage',
      include: ['src/**/*.{ts,tsx}'],
    },
    exclude: ['node_modules', 'dist'],
    include: ['src/**/__tests__/**/*.{test,spec}.{ts,tsx}'],
  },
})
