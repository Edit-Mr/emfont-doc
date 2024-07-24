/** @format */

// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "emfont Docs",
    tagline: "Official Documentation for emfont",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://doc.font.emtech.cc",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "Edit-Mr", // Usually your GitHub org/user name.
    projectName: "emfont-doc", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "zh-Hans",
        locales: ["zh-Hans", "en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: "./sidebars.js",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/Edit-Mr/emfont-doc",
                    routeBasePath: "/",
                },
                blog: false,
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
            "@docusaurus/preset-classic",
            {
                gtag: {
                    trackingID: "G-H69XEEC798",
                    anonymizeIP: true,
                },
            },
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "emfont",
                // logo: {
                //     alt: "emfont Logo",
                //     src: "img/logo.svg",
                // },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialSidebar",
                        position: "left",
                        label: "Tutorial",
                    },
                    {
                        href: "https://font.emtech.cc",
                        label: "emfont",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Tutorial",
                                to: "/docs/intro",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Discord",
                                href: "https://discord.gg/W8r9x4PwUE",
                            },
                            {
                                label: "Telegram",
                                href: "https://t.me/emfont",
                            },
                        ],
                    },
                    {
                        title: "Source Code",
                        items: [
                            {
                                label: "emfont",
                                href: "https://github.com/Edit-Mr/emfont",
                            },
                            {
                                label: "Documentation",
                                href: "https://github.com/Edit-Mr/emfont-doc",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Elvis Mao`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
