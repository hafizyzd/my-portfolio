<script setup>
const props = defineProps({
  title: String,
  class: String,
});
</script>

<template>
  <div class="card shadow bg-gray-800 rounded-4 " :class="class">
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

