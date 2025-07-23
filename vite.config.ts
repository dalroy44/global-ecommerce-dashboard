// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { codecovVitePlugin } from '@codecov/vite-plugin'

export default defineConfig({
  // 👇 ADD THIS 'base' PROPERTY 👇
  base: '/global-ecommerce-dashboard/', // e.g., '/my-awesome-dashboard/'
  plugins: [
    react(),
    codecovVitePlugin({
      enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
      bundleName: '<bundle project name>',
      uploadToken: process.env.CODECOV_TOKEN,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
