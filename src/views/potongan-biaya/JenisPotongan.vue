<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { jenisPotongan } from '@/storage/Index.js'
</script>
<template>
  <div class="text-white mb-4">
    <span class="fs-6">Potongan Biaya / Jenis Potongan</span>
    <p class="fw-bold">Jenis Potongan</p>
  </div>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <div class="mb-4">
            <h5 class="title-card m-0 fw-semibold text-dark-emphasis">Tabel Jenis Potongan</h5>
            <span class="subtitle-card text-secondary">Total Data: -</span>
          </div>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Jenis Potongan</th>
                  <th>Category Potongan</th>
                  <th>Tindakan</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in jenisPotongan" :key="item.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.jenis_potongan }}</td>
                  <td>{{ item.kategori_potongan }}</td>
                  <td>
                    <div class="d-flex gap-2">
                      <button class="btn btn-sm btn-secondary" type="button">
                        <i class="ri-eye-fill"></i>
                      </button>
                      <button class="btn btn-sm btn-secondary" type="button">
                        <i class="ri-settings-3-fill"></i>
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
