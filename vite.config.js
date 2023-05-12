import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,
  },
  server: {
    watch: {
      usePolling: true
    },
    open: true,
  },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: 'pages', replacement: '/src/pages' },
      { find: 'components', replacement: '/src/components' },
      { find: 'theme', replacement: '/src/theme' },
    ]
  }
})
