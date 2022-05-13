import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    // 縮寫圖片連結路徑
    // alias: {
    //   '/images': 'src/assets/images',
    // },
  },
})