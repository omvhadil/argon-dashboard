<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { biaya } from '@/storage/Index.js'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <div class="text-white mb-4">
    <span class="fs-6">Master Tagihan / Biaya</span>
    <p class="fw-bold">Biaya</p>
  </div>
  <!-- table satuan biaya -->
  <div class="card">
    <div class="card-body">
      <!-- title card  -->
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="mb-4">
            <h5 class="title-card m-0 fw-semibold text-dark-emphasis">Tabel Biaya</h5>
            <span class="subtitle-card text-secondary">format tabel</span>
          </div>
        </div>
        <div class="col-12 col-md-6 d-flex justify-content-end">
          <div>
            <button
              @click="router.push('/master-tagihan/tambah-biaya')"
              class="btn btn-green-gradient d-flex align-items-center"
            >
              <i class="ri-add-line fs-5 me-2"></i> Biaya
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
              <th>Nama Biaya</th>
              <th>Jenis Biaya</th>
              <th>Kategori Biaya</th>
              <th>Sub-Kategori</th>
              <th>Qty</th>
              <th>Satuan</th>
              <th>Nominal</th>
              <th>Keterangan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in biaya" :key="item.id">
              <td>{{ index + 1 }}</td>
              <td>{{ item.nama_biaya }}</td>
              <td>{{ item.jenis_biaya }}</td>
              <td>{{ item.kategori_biaya }}</td>
              <td>{{ item.subkategori_biaya }}</td>
              <td>{{ item.qty }}</td>
              <td>{{ item.satuan }}</td>
              <td>{{ item.nominal }}</td>
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
<style scoped></style>
