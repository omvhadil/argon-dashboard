<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
import DataTable from 'datatables.net-vue3'
import DataTablesCore from 'datatables.net-bs5'
import 'datatables.net-select'
import 'datatables.net-responsive'

const router = useRouter()

DataTable.use(DataTablesCore)
const options = {
  responsive: true
}
</script>
<template>
  <div class="text-white mb-4">
    <span class="fs-6">Faktur Pembayaran / Tabel Faktur</span>
    <p class="fw-bold">Table Faktur</p>
  </div>
  <!-- card dashboard -->
  <div class="row gy-3">
    <div class="col-12 col-md-6 col-lg-2">
      <div class="card rounded-4">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="">
              <p class="mb-1 text-uppercase fw-medium text-secondary">Lunas</p>
              <h5 class="fw-bold">2.231</h5>
              <p class="mb-0 text-secondary">Peserta didik</p>
            </div>
            <div class="card-icon bg-primary bg-gradient">
              <i class="ri-exchange-dollar-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-2">
      <div class="card rounded-4">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="">
              <p class="mb-1 text-uppercase fw-medium text-secondary">belum lunas</p>
              <h5 class="fw-bold">3.543</h5>
              <p class="mb-0 text-secondary">Peserta didik</p>
            </div>
            <div class="card-icon bg-danger bg-gradient">
              <i class="ri-user-follow-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-2">
      <div class="card rounded-4">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="">
              <p class="mb-1 text-uppercase fw-medium text-secondary">total faktur</p>
              <h5 class="fw-bold">5.434</h5>
              <p class="mb-0 text-secondary">Faktur</p>
            </div>
            <div class="card-icon bg-warning bg-gradient">
              <i class="ri-survey-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-3">
      <div class="card rounded-4">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="">
              <p class="mb-1 text-uppercase fw-medium text-secondary">total tertagih</p>
              <h5 class="fw-bold">3.332</h5>
              <p class="mb-0 text-secondary">Peserta didik</p>
            </div>
            <div class="card-icon bg-secondary bg-gradient">
              <i class="ri-hand-coin-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-3">
      <div class="card rounded-4">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="">
              <p class="mb-1 text-uppercase fw-medium text-secondary">total penerimaan</p>
              <h5 class="fw-bold">Rp 875.774.474</h5>
              <p class="mb-0 text-secondary">Dari 500 Faktur</p>
            </div>
            <div class="card-icon bg-success bg-gradient">
              <i class="ri-wallet-3-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- datatable faktur -->
  <div class="row">
    <div class="col-12 col-lg-12 mx-auto">
      <div class="card mt-4">
        <div class="card-body">
          <!-- title card  -->
          <div class="d-flex px-3 mt-2">
            <div class="mb-4">
              <h5 class="title-card m-0 fw-bold text-dark-emphasis">Tabel Faktur</h5>
              <span class="subtitle-card text-secondary">format tabel</span>
            </div>
            <div class="ms-auto">
              <button
                class="btn btn-green-gradient"
                @click="router.push('/faktur-pembayaran/tambah-faktur')"
              >
                <i class="ri-add-line"></i>
                <span class="ms-2">Tambah Faktur</span>
              </button>
            </div>
          </div>
          <div class="data-tables">
            <DataTable class="display nowrap" :options="options">
              <thead>
                <tr>
                  <th></th>
                  <th>Nama</th>
                  <th>Alamat</th>
                  <th>Tanggal lahir</th>
                  <th>Jenis Kelamin</th>
                  <th>Nama wali</th>
                  <th>Keterangan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>1</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td></td>
                  <td>3</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td></td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                </tr>
              </tbody></DataTable
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import 'bootstrap';
@import 'datatables.net-bs5';
</style>
