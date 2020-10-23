const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Meteostat Developers',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: 'Last Updated',
    logo: 'https://meteostat.net/files/icon.svg',
    nav: [
      {
        text: 'Python',
        link: '/docs/python/'
      },
      {
        text: 'Bulk Data',
        link: '/docs/bulk/'
      },
      {
        text: 'JSON API',
        link: '/docs/api/v2/'
      },
      {
        text: 'Project',
        items: [{
          text: 'Legal',
          items: [
            {
              text: 'Terms',
              link: '/docs/getting-started.html'
            }, {
              text: 'Legal Disclosure',
              link: '/docs/bulk-data.html'
            }, {
              text: 'Privacy',
              link: '/docs/bulk-data.html'
            }
          ]
        },
        {
          text: 'Meteostat',
          items: [
            {
              text: 'Webapp',
              link: '/docs/json-api.html'
            }
          ]
        }]
      },
      {
        text: 'GitHub',
        link: 'https://github.com/meteostat'
      }
    ],
    sidebar: {
      '/docs/bulk/': [
        {
          title: 'Bulk Data',
          collapsable: false,
          children: [
            {
              title: 'Getting Started',
              path: '/docs/bulk/'
            }
          ]
        }
      ],
      '/docs/python/': [
        {
          title: 'Python Library',
          collapsable: false,
          children: [
            {
              title: 'Getting Started',
              path: '/docs/python/'
            },
            {
              title: 'Configuration',
              path: 'configuration'
            },
            {
              title: 'Weather Stations',
              path: 'stations'
            },
            {
              title: 'Hourly Data',
              path: 'hourly'
            },
            {
              title: 'Daily Data',
              path: 'daily'
            },
            {
              title: 'Contributing',
              path: 'contributing'
            }
          ]
        }
      ],
      '/docs/api/v2/': [
        {
          title: 'JSON API',
          collapsable: false,
          children: [
            {
              title: 'Getting Started',
              path: '/docs/api/v2/'
            },
            {
              title: 'Weather Stations',
              collapsable: false,
              children: [
                {
                  title: 'Overview',
                  path: 'stations/'
                },
                {
                  title: 'Finding Stations',
                  path: 'stations/search'
                },
                {
                  title: 'Nearby Stations',
                  path: 'stations/nearby'
                },
                {
                  title: 'Meta Data',
                  path: 'stations/meta'
                },
                {
                  title: 'Hourly Data',
                  path: 'stations/hourly'
                },
                {
                  title: 'Daily Data',
                  path: 'stations/daily'
                },
                {
                  title: 'Climate Normals',
                  path: 'stations/climate'
                }
              ]
            },
            {
              title: 'Point Data',
              collapsable: false,
              children: [
                {
                  title: 'Overview',
                  path: 'point/'
                },
                {
                  title: 'Hourly Data',
                  path: 'point/hourly'
                },
                {
                  title: 'Daily Data',
                  path: 'point/daily'
                },
                {
                  title: 'Climate Normals',
                  path: 'point/climate'
                }
              ]
            }
          ]
        }
      ],
      '/docs/': [
        {
          title: 'Essentials',
          collapsable: false,
          children: [
            '',
            'formats'
          ]
        },
        {
          title: 'Interfaces',
          collapsable: false,
          children: [
            '/docs/python/',
            '/docs/bulk/',
            '/docs/api/v2/'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
