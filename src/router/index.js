import Vue from 'vue'
import Router from 'vue-router'
import UserOverview from '@/components/UserOverview'
import UserDetails from '@/components/UserDetails'
import UserEdit from '@/components/UserEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserOverview',
      component: UserOverview
    },
    {
      path: '/details/:id',
      name: 'UserDetails',
      component: UserDetails
    },
    {
      path: '/edit/:id',
      name: 'UserEdit',
      component: UserEdit
    }
  ]
})
