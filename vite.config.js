import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  server: {
    host: true, // 👈 This allows LAN access
    port: 5173  // 👈 Optional: set the port if you want a fixed one
  }
})
