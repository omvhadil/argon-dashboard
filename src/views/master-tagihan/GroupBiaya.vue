<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>
<template>
  <div class="text-white mb-4">
    <span class="fs-6">Master Tagihan / Group Biaya</span>
    <p class="fw-bold">Group Biaya</p>
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
            <!-- nama group biaya -->
            <div class="row mb-4">
              <label for="nama-group-biaya" class="col-md-4 col-lg-3 col-form-label fw-medium"
                >Nama Group Biaya</label
              >
              <div class="col-12 col-md-8 col-lg-9">
                <input
                  type="text"
                  name=""
                  class="form-control"
                  id="nama-group-biaya"
                  placeholder="Exc: Paket MTS"
                />
              </div>
            </div>
            <!-- biaya  -->
            <div class="row mb-4">
              <label for="biaya" class="col-md-4 col-lg-3 col-form-label fw-medium">Biaya</label>
              <div class="col-12 col-md-8 col-lg-9">
                <select class="form-select" size="3" multiple aria-label="Multiple select example">
                  <option selected>pilih biaya</option>
                  <option value="1">seragan pesantren putri</option>
                  <option value="2">seragam pramuka putri</option>
                  <option value="3">seragam khas</option>
                </select>
              </div>
            </div>
            <!-- status -->
            <div class="row mb-4">
              <label for="status" class="col-md-4 col-lg-3 col-form-label fw-medium">Status</label>
              <div class="col-12 col-md-8 col-lg-9">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="aktif"
                    id="aktif"
                    value="aktif"
                    checked
                  />
                  <label class="form-check-label" for="aktif">Aktif</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="nonaktif"
                    id="nonaktif"
                    value="nonaktif"
                  />
                  <label class="form-check-label" for="nonaktif">Nonaktif</label>
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
