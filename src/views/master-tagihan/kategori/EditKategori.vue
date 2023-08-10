<template>
  <div class="text-white mb-4">
    <span class="fs-6">Master Tagihan / Kategori Biaya</span>
    <p class="fw-bold">Edit Kategori Biaya</p>
  </div>
  <!-- tambah biaya -->
  <div class="row">
    <div class="col-12 col-lg-10 mx-auto">
      <div class="card mt-4">
        <div class="card-body">
          <!-- title card  -->
          <div class="mb-4">
            <h5 class="title-card m-0 fw-bold text-dark-emphasis">Form Edit</h5>
            <span class="subtitle-card text-secondary">Kategori Biaya</span>
          </div>
          <form action="">
            <!-- nama kategori -->
            <div class="row mb-4">
              <label for="nama-kategori" class="col-md-4 col-lg-3 col-form-label fw-medium"
                >Nama Kategori</label
              >
              <div class="col-12 col-md-8 col-lg-9">
                <input
                  type="text"
                  name=""
                  class="form-control"
                  id="nama-kategori"
                  placeholder="Baju"
                />
              </div>
            </div>
            <!-- deskripsi -->
            <div class="row mb-4">
              <label for="deskripsi" class="col-md-4 col-lg-3 col-form-label fw-medium"
                >Deskripsi</label
              >
              <div class="col-12 col-md-8 col-lg-9">
                <textarea
                  class="form-control"
                  placeholder="Baju Putra"
                  name=""
                  id="deskripsi"
                  rows="3"
                ></textarea>
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
