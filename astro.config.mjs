// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "https://alllex.github.io",
    integrations: [
        starlight({
            title: "Wiki by Alex",
            logo: {
                src: "./src/assets/logo.webp",
            },
            social: {
                github: "https://github.com/alllex/wiki",
            },
            editLink: {
                baseUrl: "https://github.com/alllex/wiki/edit/main/",
            },
            lastUpdated: true,
            favicon: "/favicon.ico",
            customCss: [
                "@fontsource-variable/noto-sans",
                "@fontsource-variable/noto-sans/wght-italic.css",
                "@fontsource-variable/jetbrains-mono",
                "@fontsource-variable/jetbrains-mono/wght-italic.css",
                "./src/tailwind.css",
            ],
            expressiveCode: {
                styleOverrides: { borderRadius: "0.3rem" },
            },
            sidebar: [
                {
                    label: "Intro",
                    autogenerate: { directory: "intro" },
                },
                {
                    label: "Shells",
                    autogenerate: { directory: "shells" },
                },
                {
                    label: "Colors",
                    autogenerate: { directory: "colors" },
                },
            ],
        }),
        tailwind({
            applyBaseStyles: false,
        }),
    ],
});
