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
      <div class="row">
        <div class="col-12 col-lg-7">
          <div class="mb-4">
            <h5>Ditagihkan Kepada</h5>
          </div>
          <!-- cari peserta didik -->
          <div class="row mb-4">
            <div class="col-6 col-md-4 col-lg-4">Cari Peserta Didik</div>
            <div class="col-6 col-md-8 col-lg-6">
              <div class="input-group border rounded-2">
                <input type="text" class="form-control border-0" id="" placeholder="Cari..." />
                <span class="input-group-text border-0">
                  <i class="ri-search-line fw-bold text-secondary"></i>
                </span>
              </div>
            </div>
          </div>
          <!-- nama peserta didik -->
          <div class="row mb-4">
            <div class="col-6 col-md-4 col-lg-4">Nama Peserta Didik</div>
            <div class="col-6 col-md-8 col-lg-8">:-</div>
          </div>
          <!-- jenis peserta didik  -->
          <div class="row mb-4">
            <div class="col-6 col-md-4 col-lg-4">Jenis Peserta Didik</div>
            <div class="col-6 col-md-8 col-lg-8">:-</div>
          </div>
          <!-- NIUP -->
          <div class="row mb-4">
            <div class="col-6 col-md-4 col-lg-4">NIUP</div>
            <div class="col-6 col-md-8 col-lg-8">:-</div>
          </div>
          <!-- lembaga pendidikan  -->
          <div class="row mb-4">
            <div class="col-6 col-md-4 col-lg-4">Lembaga Pendidikan</div>
            <div class="col-6 col-md-8 col-lg-8">:-</div>
          </div>
          <!-- domisili pesantren  -->
          <div class="row mb-4">
            <div class="col-6 col-md-4 col-lg-4">Domisili Pesantren</div>
            <div class="col-6 col-md-8 col-lg-8">:-</div>
          </div>
          <!-- alamat  -->
          <div class="row mb-4">
            <div class="col-6 col-md-4 col-lg-4">Alamat</div>
            <div class="col-6 col-md-8 col-lg-8">:-</div>
          </div>
        </div>
        <div class="col-12 col-lg-5">
          <div class="mb-4">
            <h5>Detail Faktur</h5>
          </div>
          <!-- master faktur -->
          <div class="row mb-4">
            <label for="master-faktur" class="col-md-4 col-lg-12 col-form-label">
              Master Faktur
            </label>
            <div class="col-12 col-md-8 col-lg-12">
              <input
                type="search"
                class="form-control"
                id="master-faktur"
                value="Exc:99f8f83nj9d"
                readonly
              />
            </div>
          </div>
          <!-- nomor faktur -->
          <div class="row mb-4">
            <label for="nomor-faktur" class="col-md-4 col-lg-12 col-form-label">
              Nomor Faktur
            </label>
            <div class="col-12 col-md-8 col-lg-12">
              <input
                type="search"
                class="form-control"
                id="nomor-faktur"
                value="Exc:99f8f83nj9d"
                readonly
              />
            </div>
          </div>
          <!-- ditagihkan pada -->
          <div class="row mb-4">
            <label for="ditagihkan-pada" class="col-md-4 col-lg-12 col-form-label">
              Ditagihkan Pada
            </label>
            <div class="col-12 col-md-8 col-lg-12">
              <input type="date" class="form-control" id="ditagihkan-pada" />
            </div>
          </div>
          <!-- jatuh tempo pada -->
          <div class="row mb-4">
            <label for="jatuh-tempo-pada" class="col-md-4 col-lg-12 col-form-label">
              Jatuh Tempo Pada
            </label>
            <div class="col-12 col-md-8 col-lg-12">
              <input type="date" class="form-control" id="jatuh-tempo-pada" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card mt-4">
    <div class="card-body">
      <div class="row">
        <div class="col-12">
          <!-- tab manu -->
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
      <div class="row">
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
            <button class="btn btn-dark" type="button">
              <i class="ri-save-3-line"></i> Simpan
            </button>
            <button class="btn btn-dark" type="button">
              <i class="ri-eye-line"></i> Pratinjau
            </button>
            <button class="btn btn-dark" type="button">
              <i class="ri-send-plane-line"></i> Kirim
            </button>
            <button class="btn btn-dark" type="button">
              <i class="ri-printer-line"></i> Cetak
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
