import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/pages/client/home/home.page.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "",
    redirect: "Home",
  },
  {
    path: "/home",
    name: "Home",
    // lazy load : when user click to link -> load js link
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("@/pages/client/products.page.vue"),
  },

  {
    path: "/movies",
    name: "Movies",
    component: () => import("@/pages/client/movies/movies.page.vue"),
  },
  // {
  //   path: "/products-test/:id",
  //   name: "ProductDetails.show",
  //   component: () => import("@/pages/client/product-details.page.vue"),
  // },
  {
    path: "/products-test/:id/:slug",
    name: "ProductDetails.show",
    component: () => import("@/pages/client/product-details.page.vue"),
    // props: true,
    // case 2 :  config before passe
    props: (route: any) => ({ ...route.params, id: parseInt(route.params.id) }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "test-link-active-with-class",
});

export default router;
