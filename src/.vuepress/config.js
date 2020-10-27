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
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://meteostat.net/files/favicon-16x16.png' }],
    ['meta', { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://meteostat.net/files/favicon-32x32.png' }],
    ['meta', { rel: 'icon', href: 'https://meteostat.net/files/icon.svg' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    docsRepo: 'meteostat/dev',
    docsDir: 'src',
    editLinks: true,
    docsBranch: 'main',
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
        link: '/docs/api/'
      },
      {
        text: 'Contributing',
        link: '/docs/contributing/'
      },
      {
        text: 'Project',
        items: [
          {
            text: 'Meteostat',
            items: [
              {
                text: 'Webapp',
                link: 'https://meteostat.net/en'
              }
            ]
          },
          {
            text: 'Legal',
            items: [
              {
                text: 'Terms & License',
                link: '/docs/terms'
              }, {
                text: 'Legal Disclosure',
                link: 'https://meteostat.net/en/legal'
              }, {
                text: 'Privacy',
                link: 'https://meteostat.net/en/privacy'
              }
            ]
          }
        ]
      },
      {
        text: 'GitHub',
        link: 'https://github.com/meteostat'
      }
    ],
    sidebar: {
      '/docs/contributing/': [
        {
          title: 'Fundamentals',
          collapsable: false,
          children: [
            {
              title: 'Getting Started',
              path: '/docs/contributing/'
            },
            {
              title: 'Documentation',
              path: '/docs/contributing/docs'
            }
          ]
        },
        {
          title: 'Interfaces',
          collapsable: false,
          children: [
            {
              title: 'Python',
              path: '/docs/python/contributing'
            }
          ]
        },
        {
          title: 'Database',
          collapsable: false,
          children: [
            {
              title: 'Weather Stations',
              path: 'stations'
            }
          ]
        }
      ],
      '/docs/bulk/': [
        {
          title: 'Bulk Data',
          collapsable: false,
          children: [
            {
              title: 'Getting Started',
              path: '/docs/bulk/'
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
      '/docs/api/': [
        {
          title: 'JSON API',
          collapsable: false,
          children: [
            {
              title: 'Getting Started',
              path: '/docs/api/'
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
            'formats',
            'terms',
            'sources'
          ]
        },
        {
          title: 'Interfaces',
          collapsable: false,
          children: [
            '/docs/python/',
            '/docs/bulk/',
            '/docs/api/'
          ]
        },
        {
          title: 'Miscellaneous',
          collapsable: false,
          children: [
            {
              title: 'Contributing',
              path: '/docs/contributing/'
            }
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
    '@vuepress/plugin-medium-zoom'
  ]
}
