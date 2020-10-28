/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({ router }) => {
  router.addRoutes([
    {
      path: '/api/*',
      redirect: '/docs/api/*'
    },
    {
      path: '/bulk',
      redirect: '/docs/bulk'
    }
  ])
}
