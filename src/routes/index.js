import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/login",
    component: () => import("@/views/LoginPage"),
  },
  {
    path: "/signUp",
    component: () => import("@/views/SignUpPage"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
