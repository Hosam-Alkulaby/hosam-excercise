import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Invoice from '../views/Invoice.vue'
import NewInvo from '../views/NewInvo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/invoice',
      component: Invoice,
    },
    {
      path:'/newinvoice',
      name:'NewInvo',
      component: NewInvo,
    }
  ]
})

export default router
