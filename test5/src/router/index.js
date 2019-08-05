import Vue from 'vue'
import Router from 'vue-router'

  Vue.use(Router)

  export default new Router({
  routes: [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/index.vue'),
    children: [
      {
        path: 'Recommend',
        name: 'Recommend',
        component: () => import('@/views/Recommend.vue'),
      },
      {
        path: 'Singer',
        name: 'Singer',
        component: () => import('@/views/Singer.vue'),
      },
      {
        path: 'Top',
        name: 'Top',
        component: () => import('@/views/Top.vue'),
      },
      {
        path: 'Search',
        name: 'Search',
        component: () => import( '@/views/Search.vue'),
      },
    ]
  },
  {
    path: 'SingerDetails',
    name: 'SingerDetails',
    component: () => import('@/views/SingerDetails.vue'),
  }
  ]
  })
