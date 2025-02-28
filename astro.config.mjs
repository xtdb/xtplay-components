import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import yaml from '@rollup/plugin-yaml';
import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
    site: 'https://docs.xtdb.com',

    integrations: [

        tailwind({ applyBaseStyles: false }),

        swup({
            theme: false,
            animationClass: false,
            containers: ['.main-frame', '.sidebar'],
            smoothScrolling: false,
            progress: true,
            globalInstance: true,
        }),
    ],

    build: {
        format: "file"
    },

    vite: {
        plugins: [yaml()]
    },
});
