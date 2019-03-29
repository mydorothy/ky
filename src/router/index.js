import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Account from '@/components/account/account'
import Login from '@/components/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path:'/account',
      name:'account',
      component:Account
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})
