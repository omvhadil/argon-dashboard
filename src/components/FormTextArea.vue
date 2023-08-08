<script setup>
defineProps({
  title: {
    type: String
  }
})
</script>
<template>
  <div class="row mb-4">
    <label for="deskripsi" class="col-12 col-md-4 col-lg-3 col-form-label">{{ title }}</label>
    <div class="col-12 col-md-8 col-lg-9">
      <textarea class="form-control" name="" id="deskripsi" rows="3"></textarea>
    </div>
  </div>
</template>
