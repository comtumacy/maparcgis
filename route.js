import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './src/store/store'
import login from './src/components/login/login'
import register from './src/components/login/register/register'
import map from './src/components/map/map'
import admin from './src/components/admin/adminIndex'
import adminLeftTableEdit from './src/components/admin/adminLeftTable/adminLeftTableEdit'
import adminLeftTableLook from './src/components/admin/adminLeftTable/adminLeftTableLook'
import adminLeftTableSet from './src/components/admin/adminLeftTable/adminLeftTableSet'
import adminLeftUserEdit from './src/components/admin/adminLeftUser/adminLeftUserEdit'
import adminLeftUserSet from './src/components/admin/adminLeftUser/adminLeftUserSet'
import adminLeftPermissionSet from './src/components/admin/adminLeftSet/adminLeftPermissionSet'
import adminLeftSafeSet from './src/components/admin/adminLeftSet/adminLeftSafeSet'
import test from './src/MD5/test'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/map',
    component: map
  },
  {
    path: '/test',
    component: test
  },
  {
    path: '/admin',
    component: admin,
    redirect: '/admin/adminLeftTableEdit',
    children: [
      {
        name: 'adminLeftTableEdit',
        path: 'adminLeftTableEdit',
        component: adminLeftTableEdit
      },
      {
        name: 'adminLeftTableLook',
        path: 'adminLeftTableLook',
        component: adminLeftTableLook
      },
      {
        name: 'adminLeftTableSet',
        path: 'adminLeftTableSet',
        component: adminLeftTableSet
      },
      {
        name: 'adminLeftUserEdit',
        path: 'adminLeftUserEdit',
        component: adminLeftUserEdit
      },
      {
        name: 'adminLeftUserSet',
        path: 'adminLeftUserSet',
        component: adminLeftUserSet
      },
      {
        name: 'adminLeftPermissionSet',
        path: 'adminLeftPermissionSet',
        component: adminLeftPermissionSet
      },
      {
        name: 'adminLeftSafeSet',
        path: 'adminLeftSafeSet',
        component: adminLeftSafeSet
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else if (to.path === '/register') {
    next()
  } else {
    if (store.getters.token_getters !== '') {
      next()
    } else if (store.getters.token_getters === '') {
      next('/login')
    }
  }
})

export default router
