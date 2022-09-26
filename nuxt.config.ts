import { defineNuxtConfig } from 'nuxt'
import { PugExtractor } from 'vite-plugin-windicss'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  meta: {
    htmlAttrs: {
      lang: 'zh-cn'
    },
    title: '企业文档',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0,user-scalable=no' }
    ],
  },
  buildModules: ['nuxt-windicss'],
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
            'naive-ui',
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer'
          ]
        : ['@juggle/resize-observer']
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : []
    },
    server: {
      proxy: {
        "/api": {
          target: 'http://localhost:2333',
          changeOrigin: true,
          //rewrite: (path) => path.replace(/^\/api/, ""),
        },
        "/data": {
          target: 'http://localhost:2333',
          changeOrigin: true,
          //rewrite: (path) => path.replace(/^\/static/, ""),
        },
      },
    }
  },
  windicss: {
    config: {
      extract: {
        extractors: [{
          extractor: PugExtractor,
          extensions: ['vue', 'pug']
        }]
      }
    }
  }
})
