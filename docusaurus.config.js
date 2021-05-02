/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Yblockchain Docs',
  tagline: 'Say Yes to Blockchain',
  url: 'https://yblockcha.in',
  baseUrl: '/docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/yblockfav.ico',
  organizationName: 'yblockchain', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Yblockchain',
      logo: {
        alt: '',
        src: 'img/yblocklogo.png',
      },
      items: [
        {
          to: 'events-kit/introduction',
          activeBasePath: 'docs',
          label: 'Events Kit',
          position: 'left',
        },
        {
          to: 'brand-kit/',
          activeBasePath: 'docs',
          label: 'Brand Kit',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/yblockchain/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    colorMode:{
      respectPrefersColorScheme: true,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Yblockchainorg',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} - Yblockchain. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/yblockchain/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
