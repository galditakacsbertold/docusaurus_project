// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Technical Documentation Demo',
    tagline: 'Docusaurus-based documentation with CI/CD and OpenAPI',
    favicon: 'img/favicon.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    url: 'https://galditakacsbertold.github.io',
    baseUrl: '/docusaurus_project/',

    organizationName: 'galditakacsbertold',
    projectName: 'docusaurus_project',

    trailingSlash: false,

    onBrokenLinks: process.env.CI ? 'throw' : 'warn',
    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'warn',
        },
    },

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    plugins: [
        [
            'docusaurus-plugin-openapi-docs',
            {
                id: 'openapi',
                docsPluginId: 'classic',
                config: {
                    petstore: {
                        specPath: 'openapi/petstore-api.yaml',
                        outputDir: 'docs/petstore',
                        sidebarOptions: {
                            groupPathsBy: 'tag',
                        },
                    },
                    orders: {
                        specPath: 'openapi/orders-api.yaml',
                        outputDir: 'docs/orders',
                        sidebarOptions: { groupPathsBy: 'tag' },
                    },
                },
            },
        ],
    ],

    themes: ['docusaurus-theme-openapi-docs'],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    routeBasePath: 'docs',
                    docItemComponent: "@theme/ApiItem",
                    editUrl:
                        'https://github.com/galditakacsbertold/docusaurus_project/edit/main/my-docs/',
                },
                blog: {
                    blogTitle: 'Documentation Blog',
                    blogDescription: 'Updates, release notes, and documentation best practices',
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/galditakacsbertold/docusaurus_project/edit/main/my-docs/',
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
                title: 'Docs Demo',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'tutorials/intro',
                        position: 'left',
                        label: 'Tutorial',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'guideSidebar',
                        position: 'left',
                        label: 'Guides',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'faqSidebar',
                        position: 'left',
                        label: 'FAQ',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'myApiSidebar',
                        position: 'left',
                        label: 'API Reference',
                    },
                    {
                        to: '/blog',
                        label: 'Blog',
                        position: 'left',
                    },
                    {
                        href: 'https://github.com/galditakacsbertold/docusaurus_project',
                        label: 'GitHub',
                        position: 'right',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'myOrdersApiSidebar',
                        position: 'left',
                        label: 'Orders API',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/tutorials/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'X',
                                href: 'https://x.com/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/facebook/docusaurus',
                            },
                        ],
                    },
                ],
                copyright:
                    `© ${new Date().getFullYear()} Documentation Demo. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
                additionalLanguages: ['bash', 'yaml', 'json'],
            },
            metadata: [
                { name: 'description', content: 'Technical documentation demo using Docusaurus, OpenAPI, and GitHub Actions' },
                { name: 'keywords', content: 'documentation, docusaurus, openapi, tech writing, ci/cd' },
            ],
        }),
};

export default config;
