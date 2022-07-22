import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://seven-tec.github.io/vite-react-api/",
  plugins: [react()]
})
