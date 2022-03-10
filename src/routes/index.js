import { createWebHistory, createRouter } from "vue-router";
import store from "@/store/index";

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
    meta: { auth: true },
  },
  {
    path: "/add",
    component: () => import("@/views/PostAddPage.vue"),
    meta: { auth: true },
  },
  {
    path: "/post/:id",
    component: () => import("@/views/PostEditPage.vue"),
    meta: { auth: true },
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

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    alert("인증이 필요합니다");
    next("/login");
  }
  next();
});

export default router;
