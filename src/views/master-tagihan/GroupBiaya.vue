<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { groupBiaya } from '@/storage/Index.js'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <div class="text-white mb-4">
    <span class="fs-6">Master Tagihan / Group Biaya</span>
    <p class="fw-bold">Group Biaya</p>
  </div>
  <!-- table satuan biaya -->
  <div class="card">
    <div class="card-body">
      <!-- title card  -->
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="mb-4">
            <h5 class="title-card m-0 fw-semibold text-dark-emphasis">Tabel Group Biaya</h5>
            <span class="subtitle-card text-secondary">Total Data: -</span>
          </div>
        </div>
        <div class="col-12 col-md-6 d-flex justify-content-end">
          <div>
            <button
              @click="router.push('/master-tagihan/tambah-group-biaya')"
              class="btn btn-green-gradient d-flex align-items-center"
            >
              <i class="ri-add-line fs-5 me-2"></i> Tambah Group Biaya
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
              <th>Nama Group Biaya</th>
              <th>Biaya</th>
              <th>Nominal Asli</th>
              <th>Nominal Group</th>
              <th>Status</th>
              <th>Deskripsi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in groupBiaya" :key="item.id">
              <td>{{ index + 1 }}</td>
              <td>{{ item.nama_group_biaya }}</td>
              <td>
                <div class="d-grid">
                  <span
                    v-for="itm in item.biaya"
                    :key="itm.id"
                    class="badge bg-dark-subtle text-dark mb-1"
                    >{{ itm.nama_biaya }}</span
                  >
                </div>
              </td>
              <td>{{ item.nominal_asli }}</td>
              <td>{{ item.nominal_group }}</td>
              <td>
                <span class="badge bg-success-subtle text-success mb-1">{{ item.status }}</span>
              </td>
              <td>{{ item.descripsi }}</td>
              <td>
                <div class="d-flex gap-2">
                  <button
                    @click="router.push('/master-tagihan/edit-group-biaya')"
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
<style scoped></style>
