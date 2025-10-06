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
  <!-- make project component -->
  <div class="container" id="project">
    <div class="col-md-6 mx-auto">
      <h1 class="text-center fw-bold fs-1 mt-5">My Projects</h1>

      <Card v-for="data in query" class="my-5">
        <div class="row">
          <div class="col-md-5 align-self-center">
            <img
              class="img-fluid rounded-4"
              :src="data.image"
              alt="" />
          </div>
          <div class="col-md-7 align-self-center mt-3 mt-lg-0">
            <h3 class="fw-bold fs-3">{{data.title}}</h3>
            <p>
             {{ data.description }}
            </p>
            <a :href="data.link_demo" class="btn btn-secondary btn-sm">Visit demo</a>
            <a :href="data.link_github" class="ms-1 btn btn-primary btn-sm">Source Code</a>
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
  background-color: rgb(230, 230, 230);
  color: black;
}

.btn-primary {
  background-color: rgb(58, 151, 250);
}
</style>
