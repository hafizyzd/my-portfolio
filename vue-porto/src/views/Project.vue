<script setup>
import { onMounted, ref } from "vue";
import Card from "../components/Card.vue";
import axios from "axios";
const query = ref({});
const getData = () => {
  axios
    .get("http://localhost:3000/porto")
    .then((res) => {
      query.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
onMounted(() => {
  getData();
});
</script>
<template>
  <div class="container" id="project">
    <div class="col-md-10 mx-auto">
      <h1 class="text-center fw-bold fs-1 mt-5">Projects</h1>
      <Card v-for="data in query" class="my-5">
        <div class="row">
          <div class="col-md-5 align-self-center">
            <img class="img-fluid rounded-4" :src="data.image" alt="" />
          </div>
          <div class="col-md-7 align-self-center mt-3 mt-lg-0">
            <h3 class="fw-bold fs-3">{{ data.title }}</h3>
            <p>
              {{ data.description }}
            </p>
              <a :href="data.link_demo" class="btn btn-secondary btn-sm">
                <span class="material-symbols-outlined">frame_inspect</span>
                View Details
              </a>
              <a :href="data.link_github" class="ms-1 btn btn-primary btn-sm">
                <span class="material-symbols-outlined">code</span>
                Source Code
              </a>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>
<style scoped>
#project {
  margin-top: 100px;
  min-height: 100vh;
}
.btn-secondary {
  background-color: linear-gradient(155deg, #393E46, #948979);;
  color: white;
  border: none;
}
.btn-primary {
  background-color: linear-gradient(155deg, #1e40af, #1055C9);
}

.btn {
  display: inline-flex; 
  align-items: center;  
  gap: 6px;             
}
</style>