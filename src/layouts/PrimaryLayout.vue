<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { onClickOutside } from '@vueuse/core'

const toggleRef = ref(false)
const toggle = ref(false)

onClickOutside(toggleRef, (event) => {
  console.log(event)
  toggle.value = false
})
</script>
<template>
  <div class="bg-header bg-green w-100 position-absolute"></div>
  <!-- begin:sidebar  -->
  <aside
    ref="toggleRef"
    class="sidebar bg-white position-absolute rounded-start-4"
    :class="toggle ? 'active' : ''"
  >
    <div class="sidebar-header">
      <h3 class="text-center p-3">SIMTREN</h3>
    </div>
    <hr class="m-0" />
    <div>
      <ul class="navbar-nav p-3">
        <!-- dashboard -->
        <li class="nav-item">
          <RouterLink
            exact-active-class="active"
            to="/"
            class="nav-link d-flex align-items-center gap-3 fs-6 px-3 text-secondary"
          >
            <i class="ri-dashboard-3-line fs-5" style="color: #6600ff"></i>
            <span>Dashboard</span>
          </RouterLink>
        </li>
        <p class="fw-bold text-secondary m-0 my-2 mt-4">TAGIHAN BPS</p>
        <!-- faktur pembayaran -->
        <li class="nav-item">
          <RouterLink
            active-class="active"
            to="/faktur-pembayaran"
            href="#fakturpembayaran"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="fakturpembayaran"
            class="nav-link d-flex align-items-center gap-3 fs-6 px-3 text-secondary"
          >
            <i class="ri-draft-line fs-5" style="color: #ff6600"></i>
            <span>Faktur Pembayaran</span>
            <i class="ri-arrow-down-s-line fs-5 fw-semibold ms-auto"></i>
          </RouterLink>
          <div class="collapse" id="fakturpembayaran">
            <ul class="nav-menu ms-4 text-secondary">
              <li class="nav-item">
                <RouterLink
                  to="/faktur-pembayaran/tabel-faktur"
                  exact-active-class="aktif"
                  class="nav-link"
                  >Table Faktur</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  to="/faktur-pembayaran/lunas"
                  exact-active-class="aktif"
                  class="nav-link"
                  >Lunas</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  to="/faktur-pembayaran/belum-lunas"
                  exact-active-class="aktif"
                  class="nav-link"
                  >Belum Lunas</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  to="/faktur-pembayaran/refund"
                  exact-active-class="aktif"
                  class="nav-link"
                  >Refund</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  to="/faktur-pembayaran/dibatalkan"
                  exact-active-class="aktif"
                  class="nav-link"
                  >Dibatalkan</RouterLink
                >
              </li>
            </ul>
          </div>
        </li>
        <!-- potongan biaya -->
        <li class="nav-item">
          <RouterLink
            active-class="active"
            to="/potongan-biaya"
            href="#potonganbiaya"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="potonganbiaya"
            class="nav-link d-flex align-items-center gap-3 fs-6 px-3 text-secondary"
          >
            <i class="ri-building-3-line fs-5" style="color: #000099"></i>
            <span>Potongan Biaya</span>
            <i class="ri-arrow-down-s-line fs-5 fw-semibold ms-auto"></i>
          </RouterLink>
          <div class="collapse" id="potonganbiaya">
            <ul class="nav-menu ms-4 text-secondary">
              <li class="nav-item">
                <RouterLink
                  to="/potongan-biaya/penerima"
                  exact-active-class="aktif"
                  class="nav-link"
                  >Penerima</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  to="/potongan-biaya/jenis-potongan"
                  exact-active-class="aktif"
                  class="nav-link"
                  >Jenis Potongan</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  to="/potongan-biaya/sumber-potongan"
                  exact-active-class="aktif"
                  class="nav-link"
                  >Sumber Potongan</RouterLink
                >
              </li>
            </ul>
          </div>
        </li>
        <!-- master tagihan -->
        <li class="nav-item">
          <RouterLink
            active-class="active"
            to="/master-tagihan"
            href="#mastertagihan"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="mastertagihan"
            class="nav-link d-flex align-items-center gap-3 fs-6 px-3 text-secondary"
          >
            <i class="ri-database-2-line fs-5" style="color: #00ff00"></i>
            <span>Potongan Biaya</span>
            <i class="ri-arrow-down-s-line fs-5 fw-semibold ms-auto"></i>
          </RouterLink>
          <div class="collapse" id="mastertagihan">
            <ul class="nav-menu ms-4 text-secondary">
              <li class="nav-item">
                <RouterLink to="/master-tagihan/biaya" exact-active-class="aktif" class="nav-link"
                  >Biaya</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  to="/master-tagihan/group-biaya"
                  exact-active-class="aktif"
                  class="nav-link"
                  >Group Biaya</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  to="/master-tagihan/satuan-biaya"
                  exact-active-class="aktif"
                  class="nav-link"
                  >Satuan Biaya</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  to="/master-tagihan/tahun-ajaran"
                  exact-active-class="aktif"
                  class="nav-link"
                  >Tahun Ajaran</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  to="/master-tagihan/Kategori-biaya"
                  exact-active-class="aktif"
                  class="nav-link"
                  >Kategori Biaya</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  to="/master-tagihan/master-faktur"
                  exact-active-class="aktif"
                  class="nav-link"
                  >Master Faktur</RouterLink
                >
              </li>
            </ul>
          </div>
        </li>
        <!-- dispensasi/keringanan -->
        <li class="nav-item">
          <RouterLink
            to="/keringanan-biaya"
            exact-active-class="active"
            class="nav-link d-flex align-items-center gap-3 fs-6 px-3 text-secondary"
          >
            <i class="ri-sensor-line fs-5" style="color: #ffcc00"></i>
            <span>Keringanan/Dispen</span>
          </RouterLink>
        </li>
        <!-- satuan periode  -->
        <li class="nav-item">
          <RouterLink
            to="/satuan-periode"
            exact-active-class="active"
            class="nav-link d-flex align-items-center gap-3 fs-6 px-3 text-secondary"
          >
            <i class="ri-calendar-todo-line fs-5" style="color: #993333"></i>
            <span>Satuan Periode</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>
  <!-- end:sidebar  -->
  <main class="main-content position-relative">
    <!-- begin:navbar  -->
    <nav class="navbar pt-4 text-white">
      <div class="row g-0 w-100 px-4 align-items-center">
        <div class="col-6">
          <div class="search">
            <input type="text" class="form-control" id="" placeholder="Search" />
          </div>
        </div>
        <div class="col-6">
          <div class="d-flex gap-3 fs-5 justify-content-end ms-auto ms-md-4 align-items-center">
            <div class="profile dropdown ms-auto cursor">
              <a
                class="text-decoration-none text-white d-flex align-items-center gap-1"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="ri-user-3-fill"></i>
                <span class="d-none d-md-block fs-6">Sign In</span>
              </a>
              <ul class="dropdown-menu dropdown-menu-end mt-2">
                <li><span class="dropdown-item-text">Profile</span></li>
                <li><a class="dropdown-item" href="#">Activity Log</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Login</a></li>
              </ul>
            </div>
            <div class="setting cursor">
              <i class="ri-settings-3-fill"></i>
            </div>
            <div @click="toggle = !toggle" class="toggle d-block d-lg-none cursor">
              <i class="ri-menu-line"></i>
            </div>
            <div class="notification dropdown cursor">
              <a
                class="text-decoration-none text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="ri-notification-4-fill"></i>
              </a>
              <ul class="dropdown-menu dropnotif dropdown-menu-end p-3">
                <li class="d-flex">
                  <div>
                    <h6 class="m-0">New Message from Laur</h6>
                    <p class="text-small text-secondary">13 minutes ago</p>
                  </div>
                </li>
                <li class="d-flex">
                  <div>
                    <span>New Message from Laur</span>
                  </div>
                </li>
                <li class="d-flex">
                  <div>
                    <span>New Message from Laur</span>
                  </div>
                </li>
                <li class="d-flex">
                  <div>
                    <span>New Message from Laur</span>
                  </div>
                </li>
                <li class="d-flex">
                  <div>
                    <span>New Message from Laur</span>
                  </div>
                </li>
                <li class="d-flex">
                  <div>
                    <span>New Message from Laur</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- end:navbar  -->
    <div class="px-4 mt-4">
      <RouterView />
    </div>
  </main>
</template>
