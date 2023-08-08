<script setup>
defineProps({
  title: {
    type: String
  },
  typename: {
    type: String
  }
})
</script>
<template>
  <div class="row mb-4">
    <label for="status" class="col-md-4 col-lg-12 col-form-label">{{ title }}</label>
    <div class="col-12 col-md-8 col-lg-12">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="aktif" id="aktif" value="aktif" />
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
</template>
