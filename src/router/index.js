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
              path: '/faktur-pembayaran/tambah-faktur',
              name: 'tambah-faktur',
              component: () => import('../views/faktur-pembayaran/tambah-faktur/TambahFaktur.vue')
            },
            {
              path: '/faktur-pembayaran/lunas',
              name: 'lunas',
              component: () => import('../views/faktur-pembayaran/Lunas.vue')
            },
            {
              path: '/faktur-pembayaran/belum-lunas',
              name: 'belum-lunas',
              component: () => import('../views/faktur-pembayaran/BelumLunas.vue')
            },
            {
              path: '/faktur-pembayaran/refund',
              name: 'refund',
              component: () => import('../views/faktur-pembayaran/Refund.vue')
            },
            {
              path: '/faktur-pembayaran/dibatalkan',
              name: 'dibatalkan',
              component: () => import('../views/faktur-pembayaran/Dibatalkan.vue')
            },
          ]
        },
        {
          path: '/potongan-biaya',
          name: 'potongan-biaya',
          children: [
            {
              path: '/potongan-biaya/penerima',
              name: 'penerima',
              component: () => import('../views/potongan-biaya/Penerima.vue')
            },
            {
              path: '/potongan-biaya/jenis-potongan',
              name: 'jenis-potongan',
              component: () => import('../views/potongan-biaya/JenisPotongan.vue')
            },
            {
              path: '/potongan-biaya/sumber-potongan',
              name: 'sumber-potongan',
              component: () => import('../views/potongan-biaya/SumberPotongan.vue')
            },
          ]
        },
        {
          path: '/master-tagihan',
          name: 'master-tagihan',
          children: [
            {
              path: '/master-tagihan/biaya',
              name: 'biaya',
              component: () => import('../views/master-tagihan/Biaya.vue')
            },
            {
              path: '/master-tagihan/group-biaya',
              name: 'group-biaya',
              component: () => import('../views/master-tagihan/GroupBiaya.vue')
            },
            {
              path: '/master-tagihan/satuan-biaya',
              name: 'satuan-biaya',
              component: () => import('../views/master-tagihan/SatuanBiaya.vue')
            },
            {
              path: '/master-tagihan/tambah-satuan',
              name: 'tambah-satuan-biaya',
              component: () => import('../views/master-tagihan/satuan/TambahSatuan.vue')
            },
            {
              path: '/master-tagihan/tahun-ajaran',
              name: 'tahun-ajaran',
              component: () => import('../views/master-tagihan/TahunAjaran.vue')
            },
            {
              path: '/master-tagihan/tambah-tahun-ajaran',
              name: 'tambah-tahun-ajaran',
              component: () => import('../views/master-tagihan/tahun-ajaran/TambahTahunAjaran.vue')
            },
            {
              path: '/master-tagihan/kategori-biaya',
              name: 'kategori-biaya',
              component: () => import('../views/master-tagihan/KategoriBiaya.vue')
            },
            {
              path: '/master-tagihan/tambah-kategori',
              name: 'tambah-kategori',
              component: () => import('../views/master-tagihan/kategori/TambahKategori.vue')
            },
            {
              path: '/master-tagihan/tambah-subkategori',
              name: 'tambah-subkategori',
              component: () => import('../views/master-tagihan/kategori/TambahSubKategori.vue')
            },
            {
              path: '/master-tagihan/master-faktur',
              name: 'master-faktur',
              component: () => import('../views/master-tagihan/MasterFaktur.vue')
            },
          ]
        },
        {
          path: '/keringanan-biaya',
          name: 'keringanan-biaya',
          component: () => import('../views/DispensasiKeringanan.vue')
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
