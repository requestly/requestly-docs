// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const fs = require('fs');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');

const docsDropdownHTML = fs.readFileSync('./src/snippets/docsDropdown.html', 'utf-8');

const redirects = require('./static/redirect.js');

/** @type {import('@docusaurus/preset-classic').Options} */
const defaultSettings = {};

/**
 * Defines a section with overridable defaults
 * @param {string} section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function defineSection(section, version = {}, options = {}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      path: `docs/${section}`,
      routeBasePath: section,
      id: section.replace("/", "_"),  // id can't contain /
      sidebarPath: require.resolve('./sidebars-default.js'),
      breadcrumbs: true,
      editUrl: 'https://github.com/requestly/requestly-docs/tree/master/',
      versions: version && {
        current: {
          label: version.label,
        },
      },
      ...defaultSettings,
      ...options,
    }),
  ];
}

const SECTIONS = [
  defineSection('browser-extension/chrome'),
  defineSection('browser-extension/firefox'),
  defineSection('browser-extension/edge'),
  defineSection('browser-extension/brave'),
  defineSection('browser-extension/safari'),
  defineSection('browser-extension/opera'),
  defineSection('desktop-app/mac'),
  defineSection('desktop-app/linux'),
  defineSection('desktop-app/windows'),
  defineSection('mocks'),
  defineSection('session-recording'),
  defineSection('android-sdk'),
  defineSection('guides'),
]


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Requestly Docs',
  tagline: '🚀 Open-Source developer tool to Intercept & Modify HTTP(s) requests',
  url: 'https://docs.requestly.io',
  baseUrl: '/', // TODO: Change this to /
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'requestly', // Usually your GitHub org/user name.
  projectName: 'requestly-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/home',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars-home.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/requestly/requestly-docs/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/requestly/requestly-docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleTagManager: {
          containerId: 'GTM-TCTH4MB',
        },
      }),
    ],
  ],

  plugins: [
    tailwindPlugin,
    ...SECTIONS,
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [...redirects]
      },
    ],
  ],

  scripts: [
    // This is changing global theme. Removing this for now
    // {src: '/js/docsGPT.js', async: true, defer: true},
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        logo: {
          alt: 'Requestly Logo',
          src: 'img/logo-light.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Docs',
            position: 'left',
            className: 'requestly-dropdown',
            items: [
              {
                type: 'html',
                value: docsDropdownHTML,
                className: 'requestly-dropdown',
              },
            ],
          },
          {
            label: 'Guides',
            href: "/guides",
            position: 'left',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/requestly/requestly',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://bit.ly/requestly-slack',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/requestly',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/SumMHwuaZv',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/RequestlyIO',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://requestly.io/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/requestly/requestly',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RQ Labs, Inc. All rights reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: '9XGUC0VD49',
        apiKey: 'f4cf1f5835307321d97cabf8076c692c',
        indexName: 'requestly',
        contextualSearch: true,
        searchParameters: {},
      },
    }),
};

module.exports = config;
