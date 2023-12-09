import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DashboardView from "@/views/dashboard/Main.vue";
import HomeView from "@/views/home/Main.vue";
import ClientLayout from "@/layouts/client/Main.vue";

import LoginPage from "@/views/login/Main.vue";
import ForgotPasswordPage from "@/views/forgot-password/Main.vue";

import RegisterPage from "@/views/register/Main.vue";
import ChangePasswordPage from "@/views/change-password/Main.vue";
import BlogsPage from "@/views/blogs/Main.vue";
import BlogsDetail from "@/views/blog-detail/Main.vue";

import FAQPage from "@/views/faq/Main.vue";

import ProfilePage from "@/views/profile/Main.vue";
import ErrorPage from "@/views/error-page/Main.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "",
    redirect: "home",
  },

  {
    path: "/home",
    component: ClientLayout,
    children: [
      {
        path: "",
        name: "home-page",
        component: HomeView,
      },
    ],
  },
  {
    path: "/blogs",
    component: ClientLayout,
    children: [
      {
        path: "",
        name: "blogs-page",
        component: BlogsPage,
      },
      {
        path: "sport",
        name: "sport-page",
        component: BlogsPage,
      },
      {
        path: "detail",
        name: "blog-detail-page",
        component: BlogsDetail,
      },
      // {
      //   path: ":id",
      //   name: "blog-detail-page",
      //   component: BlogsDetail,
      // },
    ],
  },

  {
    path: "/faq",
    component: ClientLayout,
    children: [
      {
        path: "",
        name: "faq-page",
        component: FAQPage,
      },
    ],
  },

  {
    path: "/login",
    component: LoginPage,
    name: "login-page",
  },
  {
    path: "/forgot-password",
    component: ForgotPasswordPage,
    name: "forgot-password-page",
  },
  {
    path: "/register",
    component: RegisterPage,
    name: "register-page",
  },

  // router protected
  {
    path: "/profile",
    component: ClientLayout,
    children: [
      {
        path: "",
        name: "profile-page",
        component: ProfilePage,
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});
export default router;
