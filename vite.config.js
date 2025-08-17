import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Change the base path to your correct repository name
  base: "/e-plantShopping/",
  plugins: [react()],
})