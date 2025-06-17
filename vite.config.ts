// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  // 👇 ADD THIS 'base' PROPERTY 👇
  base: '/global-ecommerce-dashboard/', // e.g., '/my-awesome-dashboard/'
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
