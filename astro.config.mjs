import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        external: ['airtable']
      }
    }
  },
  adapter: cloudflare({ mode: "directory" }),
});