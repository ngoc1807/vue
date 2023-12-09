import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Lesson1",
    component: () => import("@/pages/lesson/lesson1.page.vue"),
  },
  {
    path: "/Lesson2",
    name: "Lesson2",
    component: () => import("@/pages/lesson/lesson2.page.vue"),
  },
  {
    path: "/Emit1",
    name: "Emit1",
    component: () => import("@/pages/lesson/sendEvents1/VueEmit.vue"),
  },

  {
    path: "/products",
    name: "Products",
    component: () => import("@/pages/client/products.page.vue"),
  },

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
