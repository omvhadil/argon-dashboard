<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Multiselect from '@vueform/multiselect'
import { kategori, satuan } from '@/storage/Index.js'
import { reactive } from 'vue'

const data = reactive({
  jenis_biaya: '',
  value: null,
  data: [
    {
      id: 1,
      name_subkategori: 'seragam'
    }
  ]
})
</script>
<template>
  <div class="text-white mb-4">
    <span class="fs-6">Master Tagihan / Biaya</span>
    <p class="fw-bold">Tambah Biaya</p>
  </div>
  <div class="row">
    <div class="col-12 col-lg-10 mx-auto">
      <div class="card mt-4">
        <div class="card-body">
          <!-- title card  -->
          <div class="mb-4">
            <h5 class="title-card m-0 fw-bold text-dark-emphasis">Form Tambah</h5>
            <span class="subtitle-card text-secondary"> Biaya</span>
          </div>
          <form action="">
            <!-- nama biaya -->
            <div class="row mb-4">
              <label for="nama-biaya" class="col-md-4 col-lg-3 col-form-label fw-medium"
                >Nama Biaya</label
              >
              <div class="col-12 col-md-8 col-lg-9">
                <input
                  type="text"
                  name=""
                  class="form-control"
                  id="nama-biaya"
                  placeholder="Contoh: Seragam MTS"
                />
              </div>
            </div>
            <!-- jenis biaya  -->
            <div class="row mb-4">
              <label for="jenis-biaya" class="col-md-4 col-lg-3 col-form-label fw-medium"
                >Jenis Biaya</label
              >
              <div class="col-12 col-md-8 col-lg-9">
                <select
                  class="form-select"
                  name=""
                  id="jenis-biaya"
                  aria-label="Default select example"
                  v-model="data.jenis_biaya"
                >
                  <option value>pilih jenis biaya</option>
                  <option value="barang">barang</option>
                  <option value="jasa">jasa</option>
                  <option value="group">group</option>
                </select>
              </div>
            </div>
            <!-- kategori biaya  -->
            <div class="row mb-4">
              <label for="kategori-biaya" class="col-md-4 col-lg-3 col-form-label fw-medium"
                >Kategori Biaya</label
              >
              <div class="col-12 col-md-8 col-lg-9">
                <select
                  class="form-select"
                  name=""
                  id="kategori-biaya"
                  aria-label="Default select example"
                >
                  <option selected>pilih kategori biaya</option>
                  <option v-for="item in kategori" :key="item.id" :value="item.nama_kategori">
                    {{ item.nama_kategori }}
                  </option>
                </select>
              </div>
            </div>
            <!-- sub kategori biaya  -->
            <div class="row mb-4">
              <label for="kategori-biaya" class="col-md-4 col-lg-3 col-form-label fw-medium"
                >Sub-Kategori Biaya</label
              >
              <div class="col-12 col-md-8 col-lg-9">
                <Multiselect
                  v-model="data.value"
                  mode="tags"
                  placeholder="Pilih SubKategori"
                  :options="data.data"
                  :search="true"
                />
              </div>
            </div>
            <!-- QTY -->
            <div :class="data.jenis_biaya === 'jasa' ? 'd-none' : ''" class="row mb-4">
              <label for="nama-biaya" class="col-md-4 col-lg-3 col-form-label fw-medium">Qty</label>
              <div class="col-12 col-md-8 col-lg-9">
                <input
                  type="text"
                  name=""
                  class="form-control"
                  id="nama-biaya"
                  placeholder="Contoh: 1"
                />
              </div>
            </div>
            <!-- satuan -->
            <div :class="data.jenis_biaya === 'jasa' ? 'd-none' : ''" class="row mb-4">
              <label for="satuan" class="col-md-4 col-lg-3 col-form-label fw-medium">Satuan</label>
              <div class="col-12 col-md-8 col-lg-9">
                <select class="form-select" name="" id="satuan" aria-label="Default select example">
                  <option selected>pilih satuan</option>
                  <option v-for="item in satuan" :key="item.id" :value="item.nama_satuan">
                    {{ item.nama_satuan }}
                  </option>
                </select>
              </div>
            </div>
            <!-- harga / nominal -->
            <div class="row mb-4">
              <label for="harga-nominal" class="col-md-4 col-lg-3 col-form-label fw-medium"
                >Harga / Nominal</label
              >
              <div class="col-12 col-md-8 col-lg-9">
                <div class="input-group">
                  <span class="input-group-text">Rp</span>
                  <input type="text" name="" class="form-control" placeholder="Contoh: 10.000" />
                  <span class="input-group-text">.00</span>
                </div>
              </div>
            </div>
            <!-- deskripsi -->
            <div class="row mb-4">
              <label for="deskripsi" class="col-md-4 col-lg-3 col-form-label fw-medium"
                >Deskripsi</label
              >
              <div class="col-12 col-md-8 col-lg-9">
                <textarea class="form-control" name="" id="deskripsi" rows="3"></textarea>
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
<style src="@vueform/multiselect/themes/default.css"></style>
