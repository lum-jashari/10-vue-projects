import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: () => import("../components/WelcomeComponent.vue"),
    },
    {
      path: "/todo",
      name: "todo",
      component: () => import("../components/TodoList.vue"),
    },
    {
      path: "/accordion",
      name: "accordion",
      component: () => import("../components/AccordionComponent.vue"),
    },
    {
      path: "/calculator",
      name: "calculator",
      component: () => import("../components/AmazingCalculator.vue"),
    },
    {
      path: "/jokes",
      name: "jokes",
      component: () => import("../components/DadJokes.vue"),
    },
    {
      path: "/form",
      name: "form",
      component: () => import("../components/FormValidation.vue"),
    },
    {
      path: "/github",
      name: "github",
      component: () => import("../components/GithubUsersSearch.vue"),
    },
    {
      path: "/password",
      name: "password",
      component: () => import("../components/PasswordGenerator.vue"),
    },
    {
      path: "/tabs",
      name: "tabs",
      component: () => import("../components/ProgressSteps.vue"),
    },
    {
      path: "/quotes",
      name: "quotes",
      component: () => import("../components/RandomQuoteGenerator.vue"),
    },
    {
      path: "/wiki",
      name: "wiki",
      component: () => import("../components/WikiClone.vue"),
    },
  ],
});

export default router;
