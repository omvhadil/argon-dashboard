<script setup>
import { kategori } from '@/storage/Index.js'
</script>
<template>
  <div class="text-white mb-4">
    <span class="fs-6">Master Tagihan / Kategori Biaya</span>
    <p class="fw-bold">Tambah Sub-Kategori</p>
  </div>
  <!-- tambah biaya -->
  <div class="row">
    <div class="col-12 col-lg-10 mx-auto">
      <div class="card mt-4">
        <div class="card-body">
          <!-- title card  -->
          <div class="mb-4">
            <h5 class="title-card m-0 fw-bold text-dark-emphasis">Form Tambah</h5>
            <span class="subtitle-card text-secondary">Sub-Kategori Biaya</span>
          </div>
          <form action="">
            <!-- nama kategori -->
            <div class="row mb-4">
              <label for="nama-kategori" class="col-md-4 col-lg-3 col-form-label fw-medium"
                >Nama Sub Kategori</label
              >
              <div class="col-12 col-md-8 col-lg-9">
                <input
                  type="text"
                  name=""
                  class="form-control"
                  id="nama-kategori"
                  placeholder="Contoh: Seragam MTS Putra"
                />
              </div>
            </div>
            <!-- kategori utama  -->
            <div class="row mb-4">
              <label for="kategori-utama" class="col-md-4 col-lg-3 col-form-label fw-medium"
                >Kategori Utama</label
              >
              <div class="col-12 col-md-8 col-lg-9">
                <select
                  class="form-select"
                  name=""
                  id="kategori-utama"
                  aria-label="Default select example"
                >
                  <option selected>pilih kategori utama</option>
                  <option v-for="item in kategori" :key="item.id" :value="item.nama_kategori">
                    {{ item.nama_kategori }}
                  </option>
                </select>
              </div>
            </div>
            <!-- btn simpan -->
            <div class="row mt-4">
              <div class="col-12 d-flex gap-3 justify-content-end">
                <button type="reset" class="btn btn-outline-dark">Reset</button>
                <button type="submit" class="btn btn-dark">Simpan</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
