import Vue from 'vue'
import Router from 'vue-router'
import film from './../../views/film.vue'
import index from './../../views/index.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/film',
      name: 'film',
      component: film
    }
  ]
})
