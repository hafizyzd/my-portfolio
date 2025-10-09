<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Card from '../components/Card.vue';

const route = useRoute();
const project = ref(null);

const getProjectDetails = () => {
    const projectID = route.params.id;
    axios
        .get('/db.json') 
        .then((res) => {
            project.value = res.data.porto.find(p => p.id === projectID);
        })
        .catch((err) => {
            console.log("Failed to fetch project details:", err.message);
        })
}

onMounted(() => {
    getProjectDetails();
});
</script>

<template>
<div class="container" id="project-details" v-if="project">
    <div class="col-md-10 mx-auto">
        <h1 class="text-center fw-bold fs-1 mt-5">{{ project.title }}</h1>
        <div id="projectCarousel" class="carousel slide my-5" data-bs-ride="carousel">
            <div class="carousel-inner rounded-4">
            <div
                v-for="(image, index) in project.project_images"
                :key="index"
                :class="['carousel-item', { active: index === 0 }]"
            >
                <img :src="image" class="d-block w-100" :alt="project.title + ' image ' + (index + 1)" />
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <Card class="my-4 text-start">
            <h3>Description Project</h3>
            <p>{{ project.description }}</p>
        </Card>

        <div class="row">
            <div class="col-md-6 mt-2">
                <Card class="text-start">
                    <h3>Feature</h3>
                    <ul>
                        <li v-for="feature in project.key_features" :key="features">{{ feature }}</li>
                    </ul>
                </Card>
            </div>
            <div class="col-md-6 mt-2">
                <Card class="text-start">
                    <h3>Tools</h3>
                    <ul>
                        <li v-for="tool in project.tools" :key="tools"> {{ tool }}</li>
                    </ul>
                </Card>
            </div>
        </div>
   </div>
</div>
<div v-else class="text-center mt-5">
    <P>Loading project details</P>
</div>

</template>

<style scoped>
    #project-details {
    margin-top: 100px;
    min-height: 100vh;
    }
    .carousel-item img {
    max-height: 500px;
    object-fit: cover;
    }
    ul {
    padding-left: 20px;
    }
    li {
    margin-bottom: 8px;
    }
</style>