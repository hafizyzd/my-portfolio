<script setup>
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import imageHafiz from "../assets/img/Hafiz_4x6.jpg";

const name = "Hafiz Yazid Muhammad";
const job = "IT Developer";
const description =
  "Fresh graduate of Telkom University's Information Technology program, specializing in full-stack programming. Experienced in designing and building responsive and secure web applications using Laravel, VueJS, NodeJS, and relational databases such as MySQL and Oracle SQL. Familiar with clean architecture approaches, performance optimization, and efficient API development. Actively contributes to full- stack programming projects with measurable results and is ready to make a positive impact as a solution- oriented full- stack programmer.";
const image = imageHafiz;

</script>

<template>
    <Hero :name="name" :job="job" :description="description" :image="image" />
    <About
    small-description=""
    description="A recent graduate of Information Technology from Telkom University with a specialization in  full-stack programming. Experienced in building responsive and secure web applications using Laravel, VueJS, and NodeJS."
    github="hafizyzd"
    linkedin="hafiz-yazid-muhammad"
    instagram="its.hafizyazid"
    />
</template>