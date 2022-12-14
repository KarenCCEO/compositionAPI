import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contador',
    name: 'Contador',
    component: ()=> import('../views/Contador.vue')
  },
  {
    path: '/pokemon',
    name: 'Pokemon',
    component: ()=> import('../views/Pokemon.vue')
  },
  {
    path: '/pokemon/:nombre',
    name: 'Poke',
    //se agrega el props para pasar los datos a poke.vue
    props: true,
    component: ()=> import('../views/Poke.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
