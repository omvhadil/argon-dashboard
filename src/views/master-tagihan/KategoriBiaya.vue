<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
import { kategori, subkategori } from '@/storage/Index.js'

const router = useRouter()
</script>
<template>
  <div class="text-white mb-4">
    <span class="fs-6">Master Tagihan / Kategori Biaya</span>
    <p class="fw-bold">Kategori Biaya</p>
  </div>

  <div class="row">
    <div class="col-12 col-lg-6">
      <!-- table kategori baiaya -->
      <div class="card">
        <div class="card-body">
          <!-- title card  -->
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="mb-4">
                <h5 class="title-card m-0 fw-semibold text-dark-emphasis">Tabel Kategori</h5>
                <span class="subtitle-card text-secondary">Total Data: -</span>
              </div>
            </div>
            <div class="col-12 col-md-6 d-flex justify-content-end">
              <div>
                <button
                  @click="router.push('/master-tagihan/tambah-kategori')"
                  class="btn btn-green-gradient d-flex align-items-center"
                >
                  <i class="ri-add-line fs-5 me-2"></i>Kategori
                </button>
              </div>
            </div>
          </div>
          <!-- table  -->
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Kategori</th>
                  <th>Keterangan</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in kategori" :key="item.id">
                  <td>{{ index + 1 }}</td>
                  <td class="text-uppercase">{{ item.nama_kategori }}</td>
                  <td>{{ item.deskripsi }}</td>
                  <td class="d-flex gap-2">
                    <button
                      @click="router.push('/master-tagihan/edit-kategori')"
                      class="btn btn-sm btn-secondary"
                      title="edit"
                    >
                      <i class="ri-edit-box-line"></i>
                    </button>
                    <button class="btn btn-sm btn-secondary" title="hapus">
                      <i class="ri-delete-bin-6-line"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-6">
      <!-- table subkategori biaya -->
      <div class="card">
        <div class="card-body">
          <!-- title card  -->
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="mb-4">
                <h5 class="title-card m-0 fw-semibold text-dark-emphasis">Tabel Sub-Kategori</h5>
                <span class="subtitle-card text-secondary">Total Data: -</span>
              </div>
            </div>
            <div class="col-12 col-md-6 d-flex justify-content-end">
              <div>
                <button
                  @click="router.push('/master-tagihan/tambah-subkategori')"
                  class="btn btn-green-gradient d-flex align-items-center"
                >
                  <i class="ri-add-line fs-5 me-2"></i>Sub-Kategori
                </button>
              </div>
            </div>
          </div>
          <!-- table  -->
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Kategori</th>
                  <th>Nama Sub-Kategori</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in subkategori" :key="item.id">
                  <td>{{ index + 1 }}</td>
                  <td class="text-uppercase">{{ item.kategori }}</td>
                  <td>{{ item.nama_subKategori }}</td>
                  <td>
                    <div class="d-flex gap-2">
                      <button
                        @click="router.push('/master-tagihan/edit-subkategori')"
                        class="btn btn-sm btn-secondary"
                        title="edit"
                      >
                        <i class="ri-edit-box-line"></i>
                      </button>
                      <button class="btn btn-sm btn-secondary" title="hapus">
                        <i class="ri-delete-bin-6-line"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
