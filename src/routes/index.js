import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/page1/index.vue"),
    },
    {
      path: "/page2",
      name: "page2",
      component: () => import("../views/page2/index.vue"),
    },
    {
      path: "/page3",
      name: "page3",
      component: () => import("../views/page3/index.vue"),
    },
    {
      path: "/BasicGrammar",
      name: "BasicGrammar",
      component: () => import("../views/BasicGrammar/index.vue"),
    },
    {
      path: "/PRButton",
      name: "PRButton",
      component: () => import("../views/PRButton/index.vue"),
    },
  ],
});
