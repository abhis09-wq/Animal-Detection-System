import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      "e3ed2743-6f34-4b56-b475-2572dcdf2199-00-60ibgt7imwai.sisko.replit.dev"
    ],
    proxy: {
      '/api/twilio': {
        target: 'https://api.twilio.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/twilio/, '')
      }
    }
  }
})
