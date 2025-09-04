import { defineConfig } from 'vite'
import { resolve, join } from 'node:path'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@domain/*': resolve(join(__dirname, 'src/domain/*')),
      '@application/*': resolve(join(__dirname, 'src/application/*')),
      '@infrastructure/*': resolve(join(__dirname, 'src/infrastructure/*')),
      '@presentation/*': resolve(join(__dirname, 'src/presentation/*')),
    },
  },
})
