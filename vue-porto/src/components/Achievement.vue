<script setup>
const props = defineProps({
  year: String,
  job:  String,
  title: String,
  description: String,
  yearColor: String,
});
</script>

<template>
  <div class="row px-3 py-2 align-items-center mt-3">
    <div class="col-md-4 p-4">
      <p id="year" :style="{ color: props.yearColor ?? '#fff' }">
        {{ props.year }}
      </p>
      <p id="job">{{ props.job }}</p>
    </div>
    <div class="col-md-8 text-start">
      <h6 class="fw-bold">{{ props.title }}</h6>
      <p align="justify">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.col-md-4 {
  height: auto;
  background: linear-gradient(155deg, #1e40af, #1055C9);
  border-radius: 10px;
}

.col-md-4 p {
  margin: 1px 0px;
}

.col-md-4 #year {
  font-weight: bold;
}
</style>