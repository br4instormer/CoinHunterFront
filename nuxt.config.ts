import { fileURLToPath } from 'url'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [{
        name: 'Content-Security-Policy',
        content: 'This is my page description.'
      }]
    }
  },
  typescript: {
    typeCheck: true
  },
  pages: true,
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/eslint-module',
    'nuxt-security',
    '@pinia/nuxt',
    'nuxt-swiper',
    '@nuxtjs/i18n',
    '@vite-pwa/nuxt'
  ],
  i18n: {
    lazy: true,
    langDir: './locales',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
      cookieCrossOrigin: true
    },
    locales: [
      { code: 'ru', name: 'Русский', file: 'ru-RU.json' },
      { code: 'en', name: 'English', file: 'en-US.json' }
    ]
  },
  css: ['@/assets/css/style.scss'],
  plugins: [
    { src: '~/plugins/scroll-behavior.client.js', mode: 'client' },
    { src: '~/plugins/recaptcha.client.js', mode: 'client' }
  ],
  alias: {
    '@svg': fileURLToPath(new URL('./assets/svg', import.meta.url)),
    '@css': fileURLToPath(new URL('./assets/css', import.meta.url)),
    '@img': fileURLToPath(new URL('./assets/img', import.meta.url))
  },
  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        scss: {
          sourceMap: true,
          additionalData: `
            @use "@/assets/css/mixins/text.scss" as *;
          `
        }
      }
    }
  },
  routeRules: {
    '/api/**': { proxy: { to: process.env.NUXT_BASE_API_URL || 'https://0.0.0.0/api/**' } }
  },
  security: {
    headers: {
      crossOriginEmbedderPolicy: 'unsafe-none'
    }
  },
  components: [
    { global: true, path: '~/components', pathPrefix: false }
  ],
  runtimeConfig: {
    public: {
      recaptchaKey: process.env.NUXT_RECAPTCHA_SITE_KEY || '6Le5HTcpAAAAAKNCPWcZxjIQRCKpjxWia4HkbeMW'
    }
  },
  pwa: {
    registerType: 'autoUpdate',
    workbox: {
      navigateFallback: undefined
    },
    manifest: {
      name: 'CoinHunter',
      short_name: 'CoinHunter',
      start_url: '/',
      scope: '/',
      background_color: '#03041c',
      description: 'CoinHunter',
      icons: [
        {
          src: 'manifest/windows11/SmallTile.scale-100.png',
          sizes: '71x71'
        },
        {
          src: 'manifest/windows11/SmallTile.scale-125.png',
          sizes: '89x89'
        },
        {
          src: 'manifest/windows11/SmallTile.scale-150.png',
          sizes: '107x107'
        },
        {
          src: 'manifest/windows11/SmallTile.scale-200.png',
          sizes: '142x142'
        },
        {
          src: 'manifest/windows11/SmallTile.scale-400.png',
          sizes: '284x284'
        },
        {
          src: 'manifest/windows11/Square150x150Logo.scale-100.png',
          sizes: '150x150'
        },
        {
          src: 'manifest/windows11/Square150x150Logo.scale-125.png',
          sizes: '188x188'
        },
        {
          src: 'manifest/windows11/Square150x150Logo.scale-150.png',
          sizes: '225x225'
        },
        {
          src: 'manifest/windows11/Square150x150Logo.scale-200.png',
          sizes: '300x300'
        },
        {
          src: 'manifest/windows11/Square150x150Logo.scale-400.png',
          sizes: '600x600'
        },
        {
          src: 'manifest/windows11/Wide310x150Logo.scale-100.png',
          sizes: '310x150'
        },
        {
          src: 'manifest/windows11/Wide310x150Logo.scale-125.png',
          sizes: '388x188'
        },
        {
          src: 'manifest/windows11/Wide310x150Logo.scale-150.png',
          sizes: '465x225'
        },
        {
          src: 'manifest/windows11/Wide310x150Logo.scale-200.png',
          sizes: '620x300'
        },
        {
          src: 'manifest/windows11/Wide310x150Logo.scale-400.png',
          sizes: '1240x600'
        },
        {
          src: 'manifest/windows11/LargeTile.scale-100.png',
          sizes: '310x310'
        },
        {
          src: 'manifest/windows11/LargeTile.scale-125.png',
          sizes: '388x388'
        },
        {
          src: 'manifest/windows11/LargeTile.scale-150.png',
          sizes: '465x465'
        },
        {
          src: 'manifest/windows11/LargeTile.scale-200.png',
          sizes: '620x620'
        },
        {
          src: 'manifest/windows11/LargeTile.scale-400.png',
          sizes: '1240x1240'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.scale-100.png',
          sizes: '44x44'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.scale-125.png',
          sizes: '55x55'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.scale-150.png',
          sizes: '66x66'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.scale-200.png',
          sizes: '88x88'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.scale-400.png',
          sizes: '176x176'
        },
        {
          src: 'manifest/windows11/StoreLogo.scale-100.png',
          sizes: '50x50'
        },
        {
          src: 'manifest/windows11/StoreLogo.scale-125.png',
          sizes: '63x63'
        },
        {
          src: 'manifest/windows11/StoreLogo.scale-150.png',
          sizes: '75x75'
        },
        {
          src: 'manifest/windows11/StoreLogo.scale-200.png',
          sizes: '100x100'
        },
        {
          src: 'manifest/windows11/StoreLogo.scale-400.png',
          sizes: '200x200'
        },
        {
          src: 'manifest/windows11/SplashScreen.scale-100.png',
          sizes: '620x300'
        },
        {
          src: 'manifest/windows11/SplashScreen.scale-125.png',
          sizes: '775x375'
        },
        {
          src: 'manifest/windows11/SplashScreen.scale-150.png',
          sizes: '930x450'
        },
        {
          src: 'manifest/windows11/SplashScreen.scale-200.png',
          sizes: '1240x600'
        },
        {
          src: 'manifest/windows11/SplashScreen.scale-400.png',
          sizes: '2480x1200'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.targetsize-16.png',
          sizes: '16x16'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.targetsize-20.png',
          sizes: '20x20'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.targetsize-24.png',
          sizes: '24x24'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.targetsize-30.png',
          sizes: '30x30'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.targetsize-32.png',
          sizes: '32x32'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.targetsize-36.png',
          sizes: '36x36'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.targetsize-40.png',
          sizes: '40x40'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.targetsize-44.png',
          sizes: '44x44'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.targetsize-48.png',
          sizes: '48x48'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.targetsize-60.png',
          sizes: '60x60'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.targetsize-64.png',
          sizes: '64x64'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.targetsize-72.png',
          sizes: '72x72'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.targetsize-80.png',
          sizes: '80x80'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.targetsize-96.png',
          sizes: '96x96'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.targetsize-256.png',
          sizes: '256x256'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-unplated_targetsize-16.png',
          sizes: '16x16'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-unplated_targetsize-20.png',
          sizes: '20x20'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-unplated_targetsize-24.png',
          sizes: '24x24'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-unplated_targetsize-30.png',
          sizes: '30x30'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-unplated_targetsize-32.png',
          sizes: '32x32'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-unplated_targetsize-36.png',
          sizes: '36x36'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-unplated_targetsize-40.png',
          sizes: '40x40'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-unplated_targetsize-44.png',
          sizes: '44x44'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-unplated_targetsize-48.png',
          sizes: '48x48'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-unplated_targetsize-60.png',
          sizes: '60x60'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-unplated_targetsize-64.png',
          sizes: '64x64'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-unplated_targetsize-72.png',
          sizes: '72x72'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-unplated_targetsize-80.png',
          sizes: '80x80'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-unplated_targetsize-96.png',
          sizes: '96x96'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-unplated_targetsize-256.png',
          sizes: '256x256'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png',
          sizes: '16x16'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png',
          sizes: '20x20'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png',
          sizes: '24x24'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png',
          sizes: '30x30'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png',
          sizes: '32x32'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png',
          sizes: '36x36'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png',
          sizes: '40x40'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png',
          sizes: '44x44'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png',
          sizes: '48x48'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png',
          sizes: '60x60'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png',
          sizes: '64x64'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png',
          sizes: '72x72'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png',
          sizes: '80x80'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png',
          sizes: '96x96'
        },
        {
          src: 'manifest/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png',
          sizes: '256x256'
        },
        {
          src: 'manifest/android/android-launchericon-512-512.png',
          sizes: '512x512'
        },
        {
          src: 'manifest/android/android-launchericon-192-192.png',
          sizes: '192x192'
        },
        {
          src: 'manifest/android/android-launchericon-144-144.png',
          sizes: '144x144'
        },
        {
          src: 'manifest/android/android-launchericon-96-96.png',
          sizes: '96x96'
        },
        {
          src: 'manifest/android/android-launchericon-72-72.png',
          sizes: '72x72'
        },
        {
          src: 'manifest/android/android-launchericon-48-48.png',
          sizes: '48x48'
        },
        {
          src: 'manifest/ios/16.png',
          sizes: '16x16'
        },
        {
          src: 'manifest/ios/20.png',
          sizes: '20x20'
        },
        {
          src: 'manifest/ios/29.png',
          sizes: '29x29'
        },
        {
          src: 'manifest/ios/32.png',
          sizes: '32x32'
        },
        {
          src: 'manifest/ios/40.png',
          sizes: '40x40'
        },
        {
          src: 'manifest/ios/50.png',
          sizes: '50x50'
        },
        {
          src: 'manifest/ios/57.png',
          sizes: '57x57'
        },
        {
          src: 'manifest/ios/58.png',
          sizes: '58x58'
        },
        {
          src: 'manifest/ios/60.png',
          sizes: '60x60'
        },
        {
          src: 'manifest/ios/64.png',
          sizes: '64x64'
        },
        {
          src: 'manifest/ios/72.png',
          sizes: '72x72'
        },
        {
          src: 'manifest/ios/76.png',
          sizes: '76x76'
        },
        {
          src: 'manifest/ios/80.png',
          sizes: '80x80'
        },
        {
          src: 'manifest/ios/87.png',
          sizes: '87x87'
        },
        {
          src: 'manifest/ios/100.png',
          sizes: '100x100'
        },
        {
          src: 'manifest/ios/114.png',
          sizes: '114x114'
        },
        {
          src: 'manifest/ios/120.png',
          sizes: '120x120'
        },
        {
          src: 'manifest/ios/128.png',
          sizes: '128x128'
        },
        {
          src: 'manifest/ios/144.png',
          sizes: '144x144'
        },
        {
          src: 'manifest/ios/152.png',
          sizes: '152x152'
        },
        {
          src: 'manifest/ios/167.png',
          sizes: '167x167'
        },
        {
          src: 'manifest/ios/180.png',
          sizes: '180x180'
        },
        {
          src: 'manifest/ios/192.png',
          sizes: '192x192'
        },
        {
          src: 'manifest/ios/256.png',
          sizes: '256x256'
        },
        {
          src: 'manifest/ios/512.png',
          sizes: '512x512'
        },
        {
          src: 'manifest/ios/1024.png',
          sizes: '1024x1024'
        }
      ],
      related_applications: [
        {
          platform: 'webapp',
          url: 'https://coin-hunter.trade/manifest.webmanifest'
        }
      ]
    }
  }
})
