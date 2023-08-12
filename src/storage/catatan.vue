<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { reactive, watch } from 'vue'

const dataKategori = [
  {
    id: 1,
    nama_kategori: 'Baju',
    sub_kategori: [
      {
        id: 1,
        nama_subKategori: 'seragam MTS'
      },
      {
        id: 2,
        nama_subKategori: 'seragam MA'
      }
    ]
  },
  {
    id: 2,
    nama_kategori: 'Buku',
    sub_kategori: [
      {
        id: 1,
        nama_subKategori: 'Buku MTS'
      },
      {
        id: 2,
        nama_subKategori: 'Buku MA'
      }
    ]
  },
  {
    id: 3,
    nama_kategori: 'Spp',
    sub_kategori: [
      {
        id: 1,
        nama_subKategori: 'Spp MTS'
      },
      {
        id: 2,
        nama_subKategori: 'Spp MA'
      }
    ]
  }
]

const FormModel = reactive({
  kategori: null,
  subKategori: null
})

watch(
  () => FormModel.kategori,
  (newValue, oldValue) => {
    if (newValue !== oldValue && newValue !== null) {
      FormModel.subKategori = dataKategori[FormModel.kategori - 1].sub_kategori.map(
        (item) => item.nama_subKategori
      )
    }
  }
)
</script>

<template>
  <p>
    Kategori
    <select v-model="FormModel.kategori">
      <option value>pilih kategori</option>
      <option v-for="item in dataKategori" :key="item.id" :value="item.id">
        {{ item.nama_kategori }}
      </option>
    </select>
  </p>
  <p>
    Sub-Kategori
    <select>
      <option selected>pilih subKategori</option>
      <option v-for="item in dataKategori" :key="item.id" :value="item.nama_kategori">
        {{ item.nama_kategori }}
      </option>
    </select>
  </p>
  <p>{{ FormModel.subKategori }}</p>
</template>
