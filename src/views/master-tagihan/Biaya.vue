<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="text-white mb-4">
    <span class="fs-6">Master Tagihan / Biaya</span>
    <p class="fw-bold">Biaya</p>
  </div>
  <div class="row">
    <div class="col-12 col-lg-10 mx-auto">
      <div class="card mt-4">
        <div class="card-body">
          <!-- title card  -->
          <div class="mb-4">
            <h5 class="title-card m-0">Informasi Umum</h5>
            <span class="subtitle-card text-secondary">format tabel</span>
          </div>
          <form action="">
            <!-- nama biaya -->
            <div class="row mb-4">
              <label for="nama-biaya" class="col-md-4 col-lg-12 col-form-label">Nama Biaya</label>
              <div class="col-12 col-md-8 col-lg-12">
                <input
                  type="text"
                  name=""
                  class="form-control"
                  id="nama-biaya"
                  placeholder="Nama Biaya..."
                />
              </div>
            </div>
            <!-- jenis biaya  -->
            <div class="row mb-4">
              <label for="jenis-biaya" class="col-md-4 col-lg-12 col-form-label">Jenis Biaya</label>
              <div class="col-12 col-md-8 col-lg-12">
                <select
                  class="form-select"
                  name=""
                  id="jenis-biaya"
                  aria-label="Default select example"
                >
                  <option selected>pilih jenis biaya</option>
                  <option value="barang">barang</option>
                  <option value="jasa">jasa</option>
                  <option value="group">group</option>
                </select>
              </div>
            </div>
            <!-- kategori biaya  -->
            <div class="row mb-4">
              <label for="kategori-biaya" class="col-md-4 col-lg-12 col-form-label"
                >Kategori Biaya</label
              >
              <div class="col-12 col-md-8 col-lg-12">
                <select
                  class="form-select"
                  name=""
                  id="kategori-biaya"
                  aria-label="Default select example"
                >
                  <option selected>pilih kategori biaya</option>
                  <option value="kateogri-1">kategori 1</option>
                  <option value="kategori-2">kategori 2</option>
                  <option value="kategori-3">kategori 3</option>
                </select>
              </div>
            </div>
            <!-- kode biaya  -->
            <div class="row mb-4">
              <label for="kode-biaya" class="col-md-4 col-lg-12 col-form-label">Kode Biaya</label>
              <div class="col-12 col-md-8 col-lg-12">
                <select
                  class="form-select"
                  name=""
                  id="kode-biaya"
                  aria-label="Default select example"
                >
                  <option selected>pilih kode biaya</option>
                  <option value="barang-&-jasa">barang & jasa</option>
                </select>
              </div>
            </div>
            <!-- satuan  -->
            <div class="row mb-4">
              <label for="satuan" class="col-md-4 col-lg-12 col-form-label">Satuan</label>
              <div class="col-12 col-md-8 col-lg-12">
                <select class="form-select" name="" id="satuan" aria-label="Default select example">
                  <option selected>pilih satuan</option>
                  <option value="pcs">PCS</option>
                  <option value="setel">Setel</option>
                </select>
              </div>
            </div>
            <!-- harga / nominal -->
            <div class="row mb-4">
              <label for="harga-nominal" class="col-md-4 col-lg-12 col-form-label"
                >Harga / Nominal</label
              >
              <div class="col-12 col-md-8 col-lg-12">
                <div class="input-group">
                  <span class="input-group-text">Rp</span>
                  <input type="text" name="" class="form-control" placeholder="10.000" />
                  <span class="input-group-text">.00</span>
                </div>
              </div>
            </div>
            <!-- deskripsi -->
            <div class="row mb-4">
              <label for="deskripsi" class="col-md-4 col-lg-12 col-form-label">Deskripsi</label>
              <div class="col-12 col-md-8 col-lg-12">
                <textarea class="form-control" name="" id="deskripsi" rows="3"></textarea>
              </div>
            </div>
            <!-- status -->
            <div class="row mb-4">
              <label for="status" class="col-md-4 col-lg-12 col-form-label">Status</label>
              <div class="col-12 col-md-8 col-lg-12">
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
            <!-- btn simpan -->
            <div class="row mt-4">
              <div class="col-12 d-flex justify-content-end">
                <button type="submit" class="btn btn-dark">Simpan</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
