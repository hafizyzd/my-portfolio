<script setup>
const props = defineProps({
  data: Array,
});
</script>
<template>
  <ul class="d-flex flex-wrap gap-2">
    <li v-for="(data, index) in props.data" :key="index">{{ data }}</li>
  </ul>
</template>
<style scoped>
ul li {
  font-size: 15px;
  padding: 5px 20px;
  background-color: #1B3C53;
  list-style: none;
  border-radius: 50px;
  font-weight: bold;
  color: #fff;
}
</style>