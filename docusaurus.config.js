module.exports = {
  title: 'DataDocks Docs',
  tagline: 'DataDocks makes scheduling your loads easy',
  url: 'https://docs.datatocks.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'nickrakovsky', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      // title: 'DataDocks',
      logo: {
        alt: 'DataDocks Logo',
        src: 'img/datadocks-logo.png',
      },
      items: [
        {
          to: '/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} DataDocks, Inc.`,
    },
    gtag: {
      trackingID: process.env.GTAG_TRACKING_ID
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: "/"
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
