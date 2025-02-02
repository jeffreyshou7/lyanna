import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: 'Dashboard', elSvgIcon: 'Fold' }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/list',
    name: 'User',
    meta: {
        title: 'User',
        icon: 'user'
    },
    children: [
        {
            path: 'create',
            component: () => import('@/views/user/create.vue'),
            name: 'CreateUser',
            meta: { title: 'CreateUser', icon: 'edit' }
        },
        {
            path: ':id(\\d+)/edit',
            component: () => import('@/views/user/edit.vue'),
            name: 'EditUser',
            meta: { title: 'EditUser', noCache: true },
            hidden: true
        },
        {
            path: 'list',
            component: () => import('@/views/user/list.vue'),
            name: 'UserList',
            meta: { title: 'UserList', icon: 'list' }
        }
    ]
  },
  {
      path: '/post',
      component: Layout,
      redirect: '/post/list',
      name: 'Post',
      meta: {
          title: 'Post',
          icon: 'documentation'
      },
      children: [
          {
              path: 'create',
              component: () => import('@/views/post/create.vue'),
              name: 'CreatePost',
              meta: { title: 'CreatePost', icon: 'edit' }
          },
          {
              path: ':id(\\d+)/edit',
              component: () => import('@/views/post/edit.vue'),
              name: 'EditPost',
              meta: { title: 'EditPost', noCache: true },
              hidden: true
          },
          {
              path: 'list',
              component: () => import('@/views/post/list.vue'),
              name: 'PostList',
              meta: { title: 'PostList', icon: 'list' }
          }
      ]
  },
  {
      path: '/topic',
      component: Layout,
      redirect: '/topics/list',
      name: 'Topic',
      meta: {
          title: 'Topic',
          icon: 'edit'
      },
      children: [
          {
              path: 'create',
              component: () => import('@/views/topic/create.vue'),
              name: 'CreateTopic',
              meta: { title: 'CreateTopic', icon: 'edit' }
          },
          {
              path: ':id(\\d+)/edit',
              component: () => import('@/views/topic/edit.vue'),
              name: 'EditTopic',
              meta: { title: 'EditTopic', noCache: true },
              hidden: true
          },
          {
              path: 'list',
              component: () => import('@/views/topic/list.vue'),
              name: 'TopicList',
              meta: { title: 'TopicList', icon: 'list' }
          }
      ]
  },
  {
      path: '/favorites',
      component: Layout,
      children: [
          {
              path: 'index',
              component: () => import('@/views/favorite.vue'),
              name: 'Favorites',
              meta: { title: 'Favorites', icon: 'collection' }
          }
      ]
  },
  {
    path: '/setting',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/setting-switch.vue'),
        name: 'Setting',
        meta: { title: 'Setting', icon: 'example' }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // 404 page must be placed at the end !!!
  // using pathMatch install of "*" in vue-router 4.0
  { path: '/:pathMatch(.*)', redirect: '/404', hidden: true }
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})

export default router
