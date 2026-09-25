import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // GitHub Pages hosts this repo at /YUZU_FINAL/
  base: command === 'build' ? '/YUZU_FINAL/' : '/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
}))
