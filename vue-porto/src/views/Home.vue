<script setup>
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";

const name = "Hafiz Yazid Muhammad";
const job = "IT Developer";
const description =
  "Fresh graduate of Telkom University's Information Technology program, specializing in full-stack programming. Experienced in designing and building responsive and secure web applications using Laravel, VueJS, NodeJS, and relational databases such as MySQL and Oracle SQL. Familiar with clean architecture approaches, performance optimization, and efficient API development. Actively contributes to full- stack programming projects with measurable results and is ready to make a positive impact as a solution- oriented full- stack programmer.";
const image = "../assets/img/Hafiz_4x6.jpg";

</script>

<template>
  <Hero :name="name" :job="job" :description="description" :image="image" />
  <About
  small-description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?"
  github="hafizyzd"
  linkedin="hafiz-yazid-muhammad"
  instagram="its.hafizyazid"
  />
</template>
