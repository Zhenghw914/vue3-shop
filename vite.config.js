import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
  ],
  // 配置别名/
  resolve: {
    alias: {
      '@': path.resolve(__dirname,"src")
    }
  },
})
