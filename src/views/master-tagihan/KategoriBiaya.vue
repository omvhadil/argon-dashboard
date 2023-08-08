<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="text-white mb-4">
    <span class="fs-6">Master Tagihan / Kategori Biaya</span>
    <p class="fw-bold">Kategori Biaya</p>
  </div>
  <div class="row">
    <div class="col-12 col-lg-10 mx-auto">
      <div class="card mt-4">
        <div class="card-body">
          <!-- title card  -->
          <div class="mb-4">
            <h5 class="title-card m-0 fw-bold text-dark-emphasis">Informasi Umum</h5>
            <span class="subtitle-card text-secondary">format tabel</span>
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
                  placeholder="Nama Kategori..."
                />
              </div>
            </div>
            <!-- Jenis kategori -->
            <div class="row mb-4">
              <label for="jenis-kategori" class="col-md-4 col-lg-3 col-form-label fw-medium"
                >Jenis Kategori</label
              >
              <div class="col-12 col-md-8 col-lg-9">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="utama"
                    id="utama"
                    value="utama"
                    checked
                  />
                  <label class="form-check-label" for="utama">Utama</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="sub-kategori"
                    id="sub-kategori"
                    value="sub-kategori"
                  />
                  <label class="form-check-label" for="sub-kategori">Sub Kategori</label>
                </div>
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
                  <option value="buku">buku</option>
                  <option value="seragam">seragam</option>
                  <option value="biaya non barang">biaya non barang</option>
                  <option value="atk">atk</option>
                </select>
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
