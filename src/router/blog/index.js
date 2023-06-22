export default [
  {
    path: '/articles/:slug',
    name: 'article',
    component: () => import('@/components/ArticleCard.vue'),
  },
]
