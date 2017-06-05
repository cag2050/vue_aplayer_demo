import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Aplayer from '../components/Aplayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Aplayer',
      component: Aplayer
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
