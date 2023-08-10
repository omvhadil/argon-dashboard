<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="text-white mb-4">
    <span class="fs-6">Master Tagihan / Tahun Ajaran</span>
    <p class="fw-bold">Edit Tahun Ajaran</p>
  </div>

  <div class="row">
    <div class="col-12 col-lg-10 mx-auto">
      <div class="card mt-4">
        <div class="card-body">
          <!-- title card  -->
          <div class="mb-4">
            <h5 class="title-card m-0 fw-bold text-dark-emphasis">Form Edit</h5>
            <span class="subtitle-card text-secondary">Tahun Ajaran</span>
          </div>
          <form action="">
            <!-- judul -->
            <div class="row mb-4">
              <label for="tahun-ajaran" class="col-md-4 col-lg-3 col-form-label fw-medium"
                >Judul</label
              >
              <div class="col-12 col-md-8 col-lg-9">
                <input
                  type="text"
                  name=""
                  class="form-control"
                  id="tahun-ajaran"
                  placeholder="2022-2023"
                />
              </div>
            </div>
            <!-- tahun awal -->
            <div class="row mb-4">
              <label for="tahun-awal" class="col-md-4 col-lg-3 col-form-label fw-medium"
                >Dimulai Pada</label
              >
              <div class="col-12 col-md-8 col-lg-9">
                <input type="date" name="" class="form-control" id="tahun-awal" />
              </div>
            </div>
            <!-- tahun akhir -->
            <div class="row mb-4">
              <label for="tahun-akhir" class="col-md-4 col-lg-3 col-form-label fw-medium"
                >Berakhir Pada</label
              >
              <div class="col-12 col-md-8 col-lg-9">
                <input type="date" name="" class="form-control" id="tahun-akhir" />
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
