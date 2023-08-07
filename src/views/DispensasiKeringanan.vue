<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import DataTable from 'datatables.net-vue3'
import DataTablesCore from 'datatables.net-bs5'
import 'datatables.net-select'
import 'datatables.net-responsive'

DataTable.use(DataTablesCore)
const options = {
  responsive: true
}
</script>
<template>
  <div class="text-white mb-4">
    <p class="fw-bold">Dispensasi/Keringanan</p>
  </div>
  <div class="card">
    <div class="card-body">
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
</template>
<style scoped>
@import 'bootstrap';
@import 'datatables.net-bs5';
</style>
