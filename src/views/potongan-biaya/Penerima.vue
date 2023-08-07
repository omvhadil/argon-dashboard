<!-- eslint-disable vue/multi-word-component-names -->
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
</template>
