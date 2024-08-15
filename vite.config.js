import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/netflix-gpt/', // This is the path from your homepage
  plugins: [react()]
})

