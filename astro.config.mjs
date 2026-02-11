import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

export default defineConfig({
  site: import.meta.env.PUBLIC_SITE_URL || 'https://kadokou.gastsar.fr',
  output: 'server',
  adapter: netlify(),
  image: {
    remotePatterns: [{ protocol: 'https', hostname: 'res.cloudinary.com' }],
  },
  integrations: [
    AstroPWA({
      mode: 'production',
      base: '/',
      scope: '/',
      includeAssets: ['favicon.ico'],
      registerType: 'autoUpdate',
      manifest: {
        name: 'Kadô-kou',
        short_name: 'Kadô-kou',
        description: "L'application de liste de cadeaux qui simplifie vos événements",
        theme_color: '#FDFBF7',
        background_color: '#FDFBF7',
        display: 'standalone',
        orientation: 'portrait-primary',
        icons: [
          {
            src: 'public/favicon.ico',
            sizes: 'any',
            type: 'image/x-icon'
          },
          {
            src: 'public/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'public/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'public/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        navigateFallback: '/',
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              }
            }
          },
          {
            urlPattern: /\.(?:js|css)$/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-resources'
            }
          }
        ]
      },
      devOptions: {
        enabled: false,
        navigateFallbackAllowlist: [/^\//]
      },
      experimental: {
        directoryAndTrailingSlashHandler: true
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});