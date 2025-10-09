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
    class="hero-container container d-flex align-items-center justify-content-center mt-6 mb-3"
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

/* ▼ TAMBAHKAN KODE INI ▼ */
.hero-image {
  max-width: 350px; /* Perkecil ukuran default gambar */
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.hero-text:hover,
.hero-image:hover {
  transform: translateY(-10px) scale(1.02);
  border-radius: 1rem;
}

@media (max-width: 768px) {
  h1.hero-text {
    font-size: 3.5rem !important;
  }
  .hero-container {
    padding-top: 5rem;
    height: auto !important;
    text-align: center;
  }
  /* ▼ TAMBAHKAN KODE INI ▼ */
  .hero-image {
    margin-top: 2rem; /* Beri jarak atas pada mobile */
    max-width: 300px; /* Perkecil lagi ukurannya untuk tablet/mobile */
  }
}

@media (max-width: 576px) {
  h1.hero-text {
    font-size: 2.5rem !important;
  }
}
</style>



