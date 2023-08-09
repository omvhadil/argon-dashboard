<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
import { satuan } from '@/storage/Index.js'

const router = useRouter()
</script>
<template>
  <div class="text-white mb-4">
    <span class="fs-6">Master Tagihan / Satuan Biaya</span>
    <p class="fw-bold">Satuan Biaya</p>
  </div>
  <!-- table  -->
  <!-- table subkategori biaya -->
  <div class="card">
    <div class="card-body">
      <!-- title card  -->
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="mb-4">
            <h5 class="title-card m-0 fw-semibold text-dark-emphasis">Tabel Satuan Biaya</h5>
            <span class="subtitle-card text-secondary">format tabel</span>
          </div>
        </div>
        <div class="col-12 col-md-6 d-flex justify-content-end">
          <div>
            <button
              @click="router.push('/master-tagihan/tambah-satuan')"
              class="btn btn-green-gradient d-flex align-items-center"
            >
              <i class="ri-add-line fs-5 me-2"></i> Satuan Biaya
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
              <th>Satuan</th>
              <th>Keterangan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in satuan" :key="item.id">
              <td>{{ index + 1 }}</td>
              <td>{{ item.nama_satuan }}</td>
              <td>{{ item.keterangan }}</td>
              <td class="d-flex gap-2">
                <button class="btn btn-sm btn-secondary" title="edit">
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
</template>
