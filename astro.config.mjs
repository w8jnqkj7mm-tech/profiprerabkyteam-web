import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://profiprerabkyteam.sk',
  vite: {
    ssr: {
      external: ['sharp']
    }
  },
  compressHTML: true,
  i18n: {
    defaultLocale: 'sk',
    locales: ['sk']
  }
});
