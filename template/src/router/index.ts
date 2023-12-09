import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/client/home.page.vue";
import Products from "@/pages/client/products.page.vue";

const routes = [
  // { path: "/", name: "", component: Home },
  // {
  //   path: "/home",
  //   name: "Home",
  //   // lazy load : when user click to link -> load js link
  //   component: () => import("@/pages/client/home.page.vue"),
  // },
  {
    path: "/products",
    name: "Products",
    component: () => import("@/pages/client/products.page.vue"),
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
