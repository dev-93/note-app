import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "login",
  },
  {
    path: "/login",
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    path: "/signUp",
    component: () => import("@/views/SignUpPage.vue"),
  },
  {
    path: "/main",
    component: () => import("@/views/MainPage.vue"),
  },
  {
    path: "/add",
    component: () => import("@/views/PostAddPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/NotFoundPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
