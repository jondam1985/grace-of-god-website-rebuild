import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
        rollupOptions: {
            external: [
                'airtable'
            ]
        }
    }
  },
  output: 'server',
  adapter: cloudflare({ mode: "directory" }),
});