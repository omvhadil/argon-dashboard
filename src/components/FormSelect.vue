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
  },
  data: {
    type: Array
  },
  required: {
    type: Boolean
  }
})
</script>
<template>
  <div class="row mb-4">
    <label :for="for_id" class="col-12 col-md-4 col-lg-3 col-form-label">{{ title }}</label>
    <div class="col">
      <select
        class="form-select"
        name=""
        :id="for_id"
        aria-label="Default select example"
        :required="required"
      >
        <option selected>{{ placeholder }}</option>
        <option v-for="item in data" :key="item.id" :value="item.name">{{ item.name }}</option>
      </select>
    </div>
  </div>
</template>
