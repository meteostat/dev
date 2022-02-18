const { description } = require('../../package')

module.exports = {
  title: 'Meteostat Developers',
  description: description,
  theme: 'carbon',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#0678BE' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://media.meteostat.net/favicon-16x16.png' }],
    ['meta', { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://media.meteostat.net/favicon-32x32.png' }],
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
    carbonAds: {
      serve: "CESDK2QN",
      placement: "devmeteostatnet"
    },
    docsRepo: 'meteostat/dev',
    docsDir: 'src',
    editLinks: true,
    docsBranch: 'main',
    lastUpdated: 'Last Updated',
    logo: 'https://media.meteostat.net/icon.svg',
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
            text: 'Data Quality',
            link: '/quality'
          },
          {
            text: 'Data Sources',
            link: '/sources'
          },
          {
            text: 'Contribute',
            link: '/contribute'
          },
          {
            text: 'Donate',
            link: '/donate'
          },
          {
            text: 'FAQ',
            link: '/faq'
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
            },
            {
              title: 'Climate Normals',
              path: 'normals'
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
              title: 'Monthly Data',
              path: 'monthly'
            },
            {
              title: 'Climate Normals',
              path: 'normals'
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
                  title: 'meteostat.TimeSeries',
                  path: 'api/timeseries/'
                },
                {
                  title: 'meteostat.TimeSeries.normalize',
                  path: 'api/timeseries/normalize'
                },
                {
                  title: 'meteostat.TimeSeries.aggregate',
                  path: 'api/timeseries/aggregate'
                },
                {
                  title: 'meteostat.TimeSeries.interpolate',
                  path: 'api/timeseries/interpolate'
                },
                {
                  title: 'meteostat.TimeSeries.convert',
                  path: 'api/timeseries/convert'
                },
                {
                  title: 'meteostat.TimeSeries.coverage',
                  path: 'api/timeseries/coverage'
                },
                {
                  title: 'meteostat.TimeSeries.fetch',
                  path: 'api/timeseries/fetch'
                },
                {
                  title: 'meteostat.TimeSeries.count',
                  path: 'api/timeseries/count'
                },
                {
                  title: 'meteostat.TimeSeries.stations',
                  path: 'api/timeseries/stations'
                },
                {
                  title: 'meteostat.TimeSeries.clear_cache',
                  path: 'api/timeseries/clear_cache'
                },
                {
                  title: 'meteostat.Hourly',
                  path: 'api/hourly/'
                },
                {
                  title: 'meteostat.Daily',
                  path: 'api/daily/'
                },
                {
                  title: 'meteostat.Monthly',
                  path: 'api/monthly/'
                },
                {
                  title: 'meteostat.Normals',
                  path: 'api/normals/'
                },
                {
                  title: 'meteostat.Normals.convert',
                  path: 'api/normals/convert'
                },
                {
                  title: 'meteostat.Normals.fetch',
                  path: 'api/normals/fetch'
                },
                {
                  title: 'meteostat.Normals.count',
                  path: 'api/normals/count'
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
                  title: 'Monthly Data',
                  path: 'stations/monthly'
                },
                {
                  title: 'Climate Normals',
                  path: 'stations/normals'
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
                  title: 'Monthly Data',
                  path: 'point/monthly'
                },
                {
                  title: 'Climate Normals',
                  path: 'point/normals'
                }
              ]
            },
            {
              title: 'Playground',
              path: 'https://rapidapi.com/meteostat/api/meteostat/'
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
            'quality',
            'sources',
            'contribute',
            'donate',
            'faq'
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
              title: 'LinkedIn',
              path: 'https://www.linkedin.com/company/meteostat/'
            },
            {
              title: 'Blog',
              path: 'https://medium.com/meteostat'
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
