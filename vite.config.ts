import { defineConfig } from 'vite'
import { resolve, join } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: '@domain', replacement: resolve(join(__dirname, 'src/domain')) },
      {
        find: '@application',
        replacement: resolve(join(__dirname, 'src/application')),
      },
      {
        find: '@infrastructure',
        replacement: resolve(join(__dirname, 'src/infrastructure')),
      },
      {
        find: '@presentation',
        replacement: resolve(join(__dirname, 'src/presentation')),
      },
    ],
  },
})
