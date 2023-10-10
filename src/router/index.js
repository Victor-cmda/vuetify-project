// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'clients',
        name: 'Clients',
        component: () => import('@/views/clients/Index.vue'),
      },
      {
        path: 'suppliers',
        name: 'Suppliers',
        component: () => import('@/views/suppliers/Index.vue'),
      },
      {
        path: 'seller',
        name: 'Seller',
        component: () => import('@/views/seller/Index.vue'),
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('@/views/products/Index.vue'),
      },
      {
        path: 'budget',
        name: 'Budget',
        component: () => import('@/views/budget/Index.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
