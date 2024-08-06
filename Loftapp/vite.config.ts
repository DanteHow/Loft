import { fileURLToPath, URL } from 'node:url'

import WindiCSS from 'vite-plugin-windicss'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    WindiCSS(),
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue'],
      dts: 'src/auto-imports.d.ts'
    }),
    Components({
      dirs: ["src/VueComponents"],
      resolvers: [
        (ionic) => {
          if (ionic.startsWith('Ion'))
            return { name: "Ion" + ionic.slice(3), from:'@ionic/vue' }
        }
      ]
    })

  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
