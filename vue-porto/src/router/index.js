import { createRouter, createWebHistory } from "vue-router";
import Resume from "../views/Resume.vue";
import Project from "../views/Project.vue";
import ViewDetail from "../views/ViewDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "resume",
      component: Resume,
    },
    {
      path: "/project",
      name: "project",
      component: Project,
    },
    {
      path: "/project/:id",
      name: "project-details",
      component: ViewDetail,
    },
  ],
});

export default router;
