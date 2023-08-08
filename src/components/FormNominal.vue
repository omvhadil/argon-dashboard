<script setup>
defineProps({
  title: {
    type: String
  },
  for_id: {
    type: String
  },
  placeholder: {
    type: String
  }
})
</script>
<template>
  <div class="row mb-4">
    <label :for="for_id" class="col-12 col-md-4 col-lg-3 col-form-label">{{ title }}</label>
    <div class="col-12 col-md-8 col-lg-9">
      <div class="input-group">
        <span class="input-group-text">Rp</span>
        <input type="text" :id="for_id" class="form-control" :placeholder="placeholder" />
        <span class="input-group-text">.00</span>
      </div>
    </div>
  </div>
</template>
