import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' keeps emitted asset links relative so the build stays portable
// when copied to the repo root and served from the domain root by GitHub Pages.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
