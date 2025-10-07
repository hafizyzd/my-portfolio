<script setup>
import { ref } from "vue";
import Card from "../components/Card.vue";
import CardItem from "../components/CardItem.vue";
import List from "../components/ItemList.vue";
import Achievement from "../components/Achievement.vue";
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import imageHafiz from "../assets/img/Hafiz_4x6.jpg";

const name = "Hafiz Yazid Muhammad";
const job = "IT Developer";
const description =
  "Fresh graduate of Telkom University's Information Technology program, specializing in full-stack programming. Experienced in designing and building responsive and secure web applications using Laravel, VueJS, NodeJS, and relational databases such as MySQL and Oracle SQL. Familiar with clean architecture approaches, performance optimization, and efficient API development. Actively contributes to full- stack programming projects with measurable results and is ready to make a positive impact as a solution- oriented full- stack programmer.";
const image = imageHafiz;

const skill = ref([
  "HTML",
  "CSS",
  "Javascript",
  "PHP",
  "Node JS",
  "Python",
  "Java",
  "Laravel",
  "Vue",
  "C++/C",
  "MySQL",
  "SQLite",
  "Oracle SQL",
  "Internet of Things",
  "Restful API"
]);

const experience = ref([
  {
    year: "Mar 2025 - Jun 2025",
    job: "Software Engineer Internship",
    location: "Direktorat Jenderal Bea Cukai, Jakarta",
    description:
      "For four months, I designed and developed a web-based violation data recapitulation system using Laravel & MySQL from start to finish. I also created an interactive dashboard that successfully reduced data analysis time and significantly improved system responsiveness.",
  },
  {
    year: "Oct 2024 - Feb 2025",
    job: "Chief Internet of Things",
    location: "Arcadia Flora Tech, Bandung",
    description:
      "I led the IoT product development cycle from concept to functional prototype in 5 months. My contribution in designing a real-time monitoring system helped the startup achieve Problem-Solution Fit validation (SRL 2) and gain recognition as a “GOOD Startup.”",
  },
  {
    year: "Feb 2024 - Jan 2025",
    job: "Assistant Practicum",
    location: "Informatics Lab Telkom University, Bandung",
    description:
      "Mentored more than 100 students in web programming and database practicums, successfully imparting material comprehension based on final student evaluations.",
  },
  {
    year: "Mar 2024 - Aug 2025",
    job: "Software Engineer",
    location: "Bandung Techno Park, Bandung",
    description:
      "Developing the “SpaceRent BTP” application in 6 months, successfully increased room management and booking efficiency by up to50% through an automated system.",
  },
]);

const education = ref([
  {
    year: "Aug 2021 - Aug 2025",
    major: "Bachelor of Information Technology",
    location: "Telkom University",
    description:
      "I am a Bachelor of Information Technology graduate from Telkom University with Cumlaude predicate and GPA 3.84/4.00. During my study period from August 2021 to August 2025, I was active in academic and innovation activities",
  },
]);


const achievements =  ref([
  {
    year: "2023",
    job: "Tim Leader",
    title:"Finalist Top 163 Telkom Indonesia Innovillage Social Project Program",
    description: "AquaFlow GreenHouse is a smart solution designed for the care of roses, integrating an IoT-based automated monitoring and watering system to simplify tasks for farmers.",
  },
  {
    year: "2025",
    job: "Presenter and Author",
    title:"Publication of the International Seminar on Intelligent Technology and Its Applications (ISITIA) 2025",
    description: "journal with the title “Knowledge Distillation for SQL Injection Detection on Edge IoT Dashboards Using BiLSTM"
  },

])
</script>

<template>
  <div>
    <Hero :name="name" :job="job" :description="description" :image="image" />
  </div>
  <!-- make resume component -->
  <div class="container" id="resume">
    <div class="col-md-8 mx-auto">
      <h1 class="text-center fw-bold fs-1">Resume</h1>

      <!-- Skill -->
      <h2 class="fw-bold mt-5">Skills</h2>
      <Card>
        <List :data="skill" />
      </Card>

      <!-- Experience -->
      <h2 class="fw-bold mt-5">Experiences</h2>
      <Card v-for="data in experience" class="mb-4">
        <CardItem
          :year="data.year"
          :job="data.job"
          :location="data.location"
          :description="data.description" />
      </Card>

      <!-- Education -->
      <h2 class="fw-bold mt-5">Education</h2>
      <Card v-for="data in education" class="mb-4">
        <CardItem
          yearColor="#fff"
          :year="data.year"
          :job="data.major"
          :location="data.location"
          :description="data.description" />
      </Card>

      <!-- Achievement -->
       <h2 class="fw-bold mt-5">Achievement</h2>
       <Card v-for="data in achievements" class="mb-4">
          <Achievement  
          :year="data.year" 
          :job="data.job"
          :title="data.title" 
          :description="data.description"
          />
       </Card>
    </div>
    <div>
      <About
        small-description=""
        description="A recent graduate of Information Technology from Telkom University with a specialization in  full-stack programming. Experienced in building responsive and secure web applications using Laravel, VueJS, and NodeJS."
        github="hafizyzd"
        linkedin="hafiz-yazid-muhammad"
        instagram="its.hafizyazid"
      />
    </div>
  </div>

  
</template>

<style scoped>
#resume {
  margin-top: 100px;
  min-height: 100vh;
}

#experience .card,
#education .card {
  border: 0px;
}

#position {
  height: 150px;
  background-color: rgb(248, 248, 248);
  border-radius: 10px;
}

#position p {
  margin: 1px 0px;
}

#position #year {
  color: rgb(51, 51, 103);
  font-weight: bold;
}

#position #location {
  font-size: 13px;
}
</style>
