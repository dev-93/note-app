import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/login",
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    path: "/signUp",
    component: () => import("@/views/SignUpPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
