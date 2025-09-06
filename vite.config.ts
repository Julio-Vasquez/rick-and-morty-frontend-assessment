import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig, mergeConfig } from 'vite'
import { defineConfig as defineConfigVitest } from 'vitest/config'

// https://vite.dev/config/
const viteConfig = defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
})

const vitestConfig = defineConfigVitest({
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

export default mergeConfig(viteConfig, vitestConfig)
