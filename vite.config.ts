import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// ==== Plugins for Auto Import ==== //
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Icons from 'unplugin-icons/vite'
import IconResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      dts: './src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      imports: ['vue', 'pinia', 'vue-router', 'vue-i18n'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: './src/components.d.ts',
      resolvers: [ElementPlusResolver(), IconResolver()],
    }),
    Icons({ autoInstall: true, compiler: 'vue3' }),
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
      },
    },
  },
})
