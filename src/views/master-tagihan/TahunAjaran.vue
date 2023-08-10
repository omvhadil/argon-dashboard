<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
import { tahunajaran } from '@/storage/Index.js'

const router = useRouter()
</script>
<template>
  <div class="text-white mb-4">
    <span class="fs-6">Master Tagihan / Tahun Ajaran</span>
    <p class="fw-bold">Tahun Ajaran</p>
  </div>
  <!-- table tahun ajaran -->
  <div class="card">
    <div class="card-body">
      <!-- title card  -->
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="mb-4">
            <h5 class="title-card m-0 fw-semibold text-dark-emphasis">Tabel Tahun Ajaran</h5>
            <span class="subtitle-card text-secondary">Total Data: -</span>
          </div>
        </div>
        <div class="col-12 col-md-6 d-flex justify-content-end">
          <div>
            <button
              @click="router.push('/master-tagihan/tambah-tahun-ajaran')"
              class="btn btn-green-gradient d-flex align-items-center"
            >
              <i class="ri-add-line fs-5 me-2"></i>Tambah Tahun Ajaran
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
              <th>Tahun Ajaran</th>
              <th>Dimulai Pada</th>
              <th>Berakhir Pada</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tahunajaran" :key="item.id">
              <td>{{ index + 1 }}</td>
              <td>{{ item.tahun_ajaran }}</td>
              <td>{{ item.dimulai }}</td>
              <td>{{ item.berakhir }}</td>
              <td>
                <div class="d-flex gap-2">
                  <button
                    @click="router.push('/master-tagihan/edit-tahun-ajaran')"
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
</template>
