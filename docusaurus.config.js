/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'YBlockchain Docs',
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
      title: 'YBlockchain',
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
      defaultMode: 'dark',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Yblockchain - Docs',
          items: [
            {
              label: 'Events Kit',
              to: 'events-kit/introduction',
            },
            {
              label: 'Brand Kit',
              to: 'brand-kit/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://chat.yblockcha.in/',
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
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: 'Yblockchain Website',
              href: 'https://yblockcha.in/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/yblockchain',
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
