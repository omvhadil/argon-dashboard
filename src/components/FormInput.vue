<script setup>
defineProps({
  placeholder: {
    type: String
  },
  for_id: {
    type: String
  },
  title: {
    type: String
  },
  type: {
    type: String
  }
})
</script>
<template>
  <div class="row mb-4">
    <label :for="for_id" class="col-12 col-md-4 col-lg-3 col-form-label">{{ title }}</label>
    <div class="col-12 col-md-8 col-lg-9">
      <input
        :type="type"
        name=""
        required
        class="form-control"
        :id="for_id"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>
