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
    ['meta', { name: 'theme-color', content: '#0678BE' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://meteostat.net/files/favicon-16x16.png' }],
    ['meta', { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://meteostat.net/files/favicon-32x32.png' }],
    ['meta', { rel: 'icon', href: 'https://meteostat.net/files/icon.svg' }],
    ['script', {}, `
      var _paq = window._paq = window._paq || [];
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
        var u="//analytics.meteostat.org/";
        _paq.push(['setTrackerUrl', u+'matomo.php']);
        _paq.push(['setSiteId', '3']);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
      })();
    `]
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
        text: 'Guide',
        items: [
          {
            text: 'Overview',
            link: '/guide'
          },
          {
            text: 'Formats & Units',
            link: '/formats'
          },
          {
            text: 'Terms & License',
            link: '/terms'
          },
          {
            text: 'Data Sources',
            link: '/sources'
          }
        ]
      },
      {
        text: 'JSON API',
        link: '/api/'
      },
      {
        text: 'Python',
        link: '/python/'
      },
      {
        text: 'Bulk Data',
        link: '/bulk/'
      },
      {
        text: 'Contributing',
        link: '/contributing/'
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
              },
              {
                text: 'Twitter',
                link: 'https://twitter.com/meteost'
              },
              {
                text: 'Blog',
                link: 'https://medium.com/meteostat'
              },
              {
                text: 'LinkedIn',
                link: 'https://www.linkedin.com/company/meteostat/'
              },
              {
                text: 'Donation',
                link: 'https://www.paypal.me/meteostat'
              }
            ]
          },
          {
            text: 'Legal',
            items: [
              {
                text: 'Terms & License',
                link: '/terms'
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
      '/contributing/': [
        {
          title: 'Fundamentals',
          collapsable: false,
          children: [
            {
              title: 'Getting Started',
              path: '/contributing/'
            },
            {
              title: 'Documentation',
              path: 'docs'
            }
          ]
        },
        {
          title: 'Data',
          collapsable: false,
          children: [
            {
              title: 'Weather Stations',
              path: 'stations'
            }
          ]
        },
        {
          title: 'Interfaces',
          collapsable: false,
          children: [
            {
              title: 'Python',
              path: '/python/contributing'
            }
          ]
        }
      ],
      '/bulk/': [
        {
          title: 'Bulk Data',
          collapsable: false,
          children: [
            {
              title: 'Getting Started',
              path: '/bulk/'
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
              title: 'Monthly Data',
              path: 'monthly'
            }
          ]
        }
      ],
      '/python/': [
        {
          title: 'Python Library',
          collapsable: false,
          children: [
            {
              title: 'Getting Started',
              path: '/python/'
            },
            {
              title: 'Point Data',
              path: 'point'
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
            },
            {
              title: 'API',
              children: [
                {
                  title: 'meteostat.Point',
                  path: 'api/point/'
                },
                {
                  title: 'meteostat.Stations',
                  path: 'api/stations/'
                },
                {
                  title: 'meteostat.Stations.nearby',
                  path: 'api/stations/nearby'
                },
                {
                  title: 'meteostat.Stations.bounds',
                  path: 'api/stations/bounds'
                },
                {
                  title: 'meteostat.Stations.region',
                  path: 'api/stations/region'
                },
                {
                  title: 'meteostat.Stations.id',
                  path: 'api/stations/id'
                },
                {
                  title: 'meteostat.Stations.inventory',
                  path: 'api/stations/inventory'
                },
                {
                  title: 'meteostat.Stations.convert',
                  path: 'api/stations/convert'
                },
                {
                  title: 'meteostat.Stations.fetch',
                  path: 'api/stations/fetch'
                },
                {
                  title: 'meteostat.Stations.count',
                  path: 'api/stations/count'
                },
                {
                  title: 'meteostat.Stations.clear_cache',
                  path: 'api/stations/clear_cache'
                },
                {
                  title: 'meteostat.Hourly',
                  path: 'api/hourly/'
                },
                {
                  title: 'meteostat.Hourly.normalize',
                  path: 'api/hourly/normalize'
                },
                {
                  title: 'meteostat.Hourly.aggregate',
                  path: 'api/hourly/aggregate'
                },
                {
                  title: 'meteostat.Hourly.interpolate',
                  path: 'api/hourly/interpolate'
                },
                {
                  title: 'meteostat.Hourly.convert',
                  path: 'api/hourly/convert'
                },
                {
                  title: 'meteostat.Hourly.coverage',
                  path: 'api/hourly/coverage'
                },
                {
                  title: 'meteostat.Hourly.fetch',
                  path: 'api/hourly/fetch'
                },
                {
                  title: 'meteostat.Hourly.count',
                  path: 'api/hourly/count'
                },
                {
                  title: 'meteostat.Hourly.clear_cache',
                  path: 'api/hourly/clear_cache'
                },
                {
                  title: 'meteostat.Daily',
                  path: 'api/daily/'
                },
                {
                  title: 'meteostat.Daily.normalize',
                  path: 'api/daily/normalize'
                },
                {
                  title: 'meteostat.Daily.aggregate',
                  path: 'api/daily/aggregate'
                },
                {
                  title: 'meteostat.Daily.interpolate',
                  path: 'api/daily/interpolate'
                },
                {
                  title: 'meteostat.Daily.convert',
                  path: 'api/daily/convert'
                },
                {
                  title: 'meteostat.Daily.coverage',
                  path: 'api/daily/coverage'
                },
                {
                  title: 'meteostat.Daily.fetch',
                  path: 'api/daily/fetch'
                },
                {
                  title: 'meteostat.Daily.count',
                  path: 'api/daily/count'
                },
                {
                  title: 'meteostat.Daily.clear_cache',
                  path: 'api/daily/clear_cache'
                },
                {
                  title: 'meteostat.units',
                  path: 'api/units'
                }
              ]
            }
          ]
        }
      ],
      '/api/': [
        {
          title: 'JSON API',
          collapsable: false,
          children: [
            {
              title: 'Getting Started',
              path: '/api/'
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
            },
            {
              title: 'Wrapper',
              collapsable: false,
              children: [
                {
                  title: 'JavaScript',
                  path: 'wrapper/javascript'
                }
              ]
            },
            {
              title: 'Get A Key',
              path: 'https://auth.meteostat.net/'
            }
          ]
        }
      ],
      '/': [
        {
          title: 'Essentials',
          collapsable: false,
          children: [
            'guide',
            'formats',
            'terms',
            'sources'
          ]
        },
        {
          title: 'Interfaces',
          collapsable: false,
          children: [
            '/api/',
            '/python/',
            '/bulk/'
          ]
        },
        {
          title: 'Connect',
          collapsable: false,
          children: [
            {
              title: 'Twitter',
              path: 'https://twitter.com/meteost'
            },
            {
              title: 'Blog',
              path: 'https://medium.com/meteostat'
            },
            {
              title: 'LinkedIn',
              path: 'https://www.linkedin.com/company/meteostat/'
            },
            {
              title: 'PayPal Donation',
              path: 'https://www.paypal.me/meteostat'
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
