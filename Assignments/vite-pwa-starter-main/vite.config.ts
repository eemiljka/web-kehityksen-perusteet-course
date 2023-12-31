import {defineConfig} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';

export default defineConfig({
  base: './',
  plugins: [
    VitePWA({
      registerType: 'prompt',
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,ttf}'],
        sourcemap: true,
      },
      manifest: {
        theme_color: '#f69435',
        background_color: '#f69435',
        display: 'standalone',
        scope: './',
        start_url: './index.html',
        name: 'vite-pwa-example',
        short_name: 'vite-pwa',
        icons: [
          {
            src: './public/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './public/icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: './public/icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: './public/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: './public/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: './public/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
});
