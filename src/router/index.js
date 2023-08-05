import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'primary-layout',
      component: () => import('../layouts/PrimaryLayout.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('../views/Dashboard.vue')
        },
        {
          path: '/faktur-pembayaran',
          name: 'faktur-pembayaran',
          children: [
            {
              path: '/faktur-pembayaran/tabel-faktur',
              name: 'tabel-faktur',
              component: () => import('../views/faktur-pembayaran/TabelFaktur.vue')
            },
            {
              path: '/faktur-pembayaran/lunas',
              name: 'lunas',
              component: () => import('../views/faktur-pembayaran/Lunas.vue')
            },
          ]
        },
        
        {
          path: '/satuan-periode',
          name: 'satuan-periode',
          component: () => import('../views/SatuanPeriode.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/Login.vue')
    }
  ]
})

export default router
