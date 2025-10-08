<script setup>
const props = defineProps({
  name: String,
  job: String,
  description: String,
  image: String,
});
</script>

<template>
  <div
    class="container d-flex align-items-center justify-content-center mt-6 mb-3"
    style="height: 100vh; wight: 100vh">
    <div class="row d-flex align-items-center items-centers">
      <div class="col-md-6 d-grid gap-3">
        <h1 class="fw-bold hero-text" style="font-size: 5.5rem" v-html="props.name" />
        <h4 class="hero-text">{{ props.job }}</h4>
        <p class="hero-text" align="justify">
          {{ props.description }}
        </p>
      </div>
      <div class="col-md-6">
        <img
          :src="
            props.image ?? 'https://source.unsplash.com/1600x1500/?programming'
          "
          alt=""
          class="img-fluid rounded-5 hero-image" 
          style="max-width: 400px; display: block; margin: auto;"
          />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-text,
.hero-image {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.hero-text:hover,
.hero-image:hover {
  transform: translateY(-10px) scale(1.02);
  border-radius: 1rem; 
}
</style>



