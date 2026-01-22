// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://whybepb.github.io',
  base: '/architectural-portfolio',
  vite: {
    plugins: [tailwindcss()]
  }
});