
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
   headers: {
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
    },
})
