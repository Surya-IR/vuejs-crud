import Vue from 'vue'
import VueRouter from 'vue-router'
import Formlogin from '../components/Formlogin.vue'
import CrudPage from '../components/CrudPage.vue'
import AddNew from '../components/AddNew.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Formlogin',
    component: Formlogin
  },
  {
    path: '/CRUD',
    name: 'CrudPage',
    component: CrudPage
  },
  {
    path: '/addnew',
    name: 'AddNew',
    component: AddNew
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
