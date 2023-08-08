<script setup>
defineProps({
  title: {
    type: String
  }
})
</script>
<template>
  <div class="row mb-4">
    <label :for="for_id" class="col-12 col-md-4 col-lg-3 col-form-label">{{ title }}</label>
    <div class="col-12 col-md-8 col-lg-9">
      <select class="form-select" size="3" aria-label="Size 3 select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>
</template>
