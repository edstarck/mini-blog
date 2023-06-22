export default [
  {
    path: '/post/:slug',
    name: 'post',
    component: () => import('@/components/PostPreview.vue'),
  },
]
