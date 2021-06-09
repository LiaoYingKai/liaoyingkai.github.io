/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Kai.Dev',
  tagline: 'Dinosaurs are cool',
  url: 'https://LiaoYingKai.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'LiaoYingKai', // Usually your GitHub org/user name.
  projectName: 'liaoyingkai.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Kai.Dev',
      logo: {
        alt: 'Kai.Dev Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {to: '/project', label: 'Project', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {
              label: 'Docs',
              to: '/docs/intro',
            },
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/profile.php?id=100000371132182',
            },
            {
              label: 'Github',
              href: 'https://github.com/LiaoYingKai?tab=repositories',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/%E8%8B%B1%E5%87%B1-%E5%BB%96-23771b171/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
