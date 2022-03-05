import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/login",
    name: "Login",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
