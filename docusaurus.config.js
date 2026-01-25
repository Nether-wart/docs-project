// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Nether_wart' Site",
    tagline: 'Dinosaurs are cool',
    favicon: 'img/favicon.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://netherwart.qzz.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/docs-project',

    onBrokenLinks: 'throw',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },


    markdown: {
        mermaid: true,
    },

    themes: ['@docusaurus/theme-mermaid',
        [
          require.resolve("@easyops-cn/docusaurus-search-local"),
          /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
          ({
            // ... 你的选项。
            // 只要索引文件可能长期缓存，建议使用 `hashed`。
            hashed: true,

            // 对于使用中文的文档，建议设置:
            language: ["en", "zh"],

            // 自定义聚焦搜索栏的键盘快捷键（默认是 "mod+k"）:
            // searchBarShortcutKeymap: "s", // 使用 'S' 键
            // searchBarShortcutKeymap: "ctrl+shift+f", // 使用 Ctrl+Shift+F

            // 如果你使用了 `noIndex: true`，设置 `forceIgnoreNoIndex` 来启用本地索引:
            // forceIgnoreNoIndex: true,
          }),
        ],
    ],

    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            crossorigin: 'anonymous',
        },
    ],


    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex]
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            colorMode: {
                respectPrefersColorScheme: true,
            },
            navbar: {
                title: 'My Site',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Tutorial',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [

                ]
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
