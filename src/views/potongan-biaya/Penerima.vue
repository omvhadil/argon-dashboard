<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
// import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div class="text-white mb-4">
    <span class="fs-6">Potongan Biaya / Penerima</span>
    <p class="fw-bold">Penerima</p>
  </div>
  <div class="card mt-3">
    <div class="card-body">
      <div class="row w-100">
        <div class="col-12 mb-4 mt-3">
          <input class="form-control" type="search" placeholder="Search" aria-label=" example" />
        </div>
      </div>
      <div class="row w-100">
        <div class="col-12 col-lg-7">
          <div class="mb-4">
            <h5>Detail Peserta Didik</h5>
          </div>
          <div class="row mb-4">
            <div class="col-6 col-md-4 col-lg-4">Nama Lengkap</div>
            <div class="col-6 col-md-8 col-lg-8">:-</div>
          </div>
          <div class="row mb-4">
            <div class="col-6 col-md-4 col-lg-4">NIUP</div>
            <div class="col-6 col-md-8 col-lg-8">:-</div>
          </div>
          <div class="row mb-4">
            <div class="col-6 col-md-4 col-lg-4">Lembaga Pendidikan</div>
            <div class="col-6 col-md-8 col-lg-8">:-</div>
          </div>
          <div class="row mb-4">
            <div class="col-6 col-md-4 col-lg-4">Domisili Pesantren</div>
            <div class="col-6 col-md-8 col-lg-8">:-</div>
          </div>
          <div class="row mb-4">
            <div class="col-6 col-md-4 col-lg-4">Alamat</div>
            <div class="col-6 col-md-8 col-lg-8">:-</div>
          </div>
        </div>
        <div class="col-12 col-lg-5">
          <div class="mb-4">
            <h5>Informasi Faktur</h5>
          </div>
          <div class="row mb-4">
            <label for="inputBiaya" class="col-md-4 col-lg-12 col-form-label">
              Faktur Tagihan
            </label>
            <div class="col-12 col-md-8 col-lg-12">
              <input
                type="search"
                class="form-control"
                id="inputBiaya"
                placeholder="Cari faktur tagihan"
              />
            </div>
          </div>
          <div class="row mb-4">
            <label for="inputBiaya" class="col-md-4 col-lg-12 col-form-label">Nomor Faktur</label>
            <div class="col-12 col-md-8 col-lg-12">
              <select class="form-select" aria-label="Default select example">
                <option selected>Pilih Nomor Faktur</option>
                <option value="1">Contoh 1</option>
                <option value="2">Contoh 2</option>
                <option value="3">Contoh 3</option>
              </select>
            </div>
          </div>
          <div class="row mb-4">
            <label for="inputBiaya" class="col-md-4 col-lg-12 col-form-label">
              Faktur Tagihan
            </label>
            <div class="col-12 col-md-8 col-lg-12">
              <input type="date" class="form-control" id="inputBiaya" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card mt-4">
    <div class="card-body">
      <div class="row w-100">
        <div class="col-12">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link text-secondary actived" href="">Potongan Biaya</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="">Berkas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="#">Keterangan</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="#">Log Activitas</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row w-100">
        <div class="col-12 col-md-9 col-lg-8">
          <div class="content py-3" style="min-height: 5rem !important">
            <span
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eius ratione
              aliquid, eaque veritatis, in aut ut sapiente eum amet unde ea pariatur laborum libero?
              Suscipit iure voluptates aliquam tempore hic odio earum veritatis, rem animi
              asperiores minus ex voluptatibus molestias modi ab in nesciunt non quasi aspernatur
              reiciendis deserunt amet nam distinctio labore! Totam, omnis, voluptates dolorum iste
              sint commodi dignissimos, veritatis voluptate aliquam qui vitae similique labore
              adipisci placeat quis odio? Non fuga optio, quia beatae incidunt sequi exercitationem
              rerum! Distinctio nesciunt explicabo voluptatem consequuntur cumque quidem vel commodi
              dolorem veniam veritatis, animi numquam officiis at eum sit dicta rem omnis culpa
              repellendus quia iste quos. Quidem, dicta laudantium harum ipsa soluta quisquam quasi,
              accusantium sunt amet dolore veniam est cupiditate dignissimos autem in repellat
              impedit sint, reprehenderit laborum. Consectetur blanditiis non odit cumque laborum?
              Veritatis dolorem nostrum, maxime, qui deserunt, velit ipsa ea cumque aliquid quaerat
              cupiditate laborum ex molestias sunt minima vel consequatur quasi praesentium
              molestiae fuga? Quam dolor magni nesciunt fugit suscipit, recusandae nobis facere
              dolorem dolores, itaque necessitatibus in, et hic deserunt! Nostrum, in laborum.
              Similique architecto at excepturi aliquid, quod accusamus quibusdam numquam maiores
              dicta expedita? Tempora quidem laborum magni ducimus consequuntur debitis!</span
            >
          </div>
        </div>
        <div class="col-12 col-md-3 col-lg-4 py-3">
          <div class="d-grid gap-2">
            <button class="btn btn-secondary" type="button">
              <i class="ri-save-3-line"></i> Simpan
            </button>
            <button class="btn btn-secondary" type="button">
              <i class="ri-eye-line"></i> Pratinjau
            </button>
            <button class="btn btn-secondary" type="button">
              <i class="ri-send-plane-line"></i> Kirim
            </button>
            <button class="btn btn-secondary" type="button">
              <i class="ri-printer-line"></i> Cetak
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
