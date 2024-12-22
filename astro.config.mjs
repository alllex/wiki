// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://alllex.github.io',
    integrations: [
        starlight({
            title: 'Wiki by Alex',
            social: {
                github: 'https://github.com/alllex/wiki',
            },
            favicon: '/favicon.ico',
            sidebar: [
                {
                    label: 'Intro',
                    autogenerate: { directory: 'intro' },
                },
                {
                    label: 'Shells',
                    autogenerate: { directory: 'shells' },
                },
            ],
        }),
    ],
});
