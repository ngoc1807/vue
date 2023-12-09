import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import sourceData from "@/data/data.json";
const routes: RouteRecordRaw[] = [
  // { path: "/", name: "", component: Home },
  // {
  //   path: "/home",
  //   name: "Home",
  //   // lazy load : when user click to link -> load js link
  //   component: () => import("@/pages/client/home.page.vue"),
  // },

  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/client/products.page.vue"),
    // c2
    alias: "/home",
  },
  // c2
  // {
  //   path: "/home",
  //   redirect: "/",
  // },

  // protected router
  {
    path: "/protected",
    name: "protected",
    components: {
      default: () => import("@/pages/client/protected.page.vue"),
      LeftSidebar: () => import("@/components/ui/Sidebar.vue"),
    },
    meta: {
      requireAuth: true,
    },
  },

  // case 1
  // path: "/example/:id+",
  // :id+ : no master have / it navigate to login page

  // case 2

  // d :is digits
  // + : more and more

  //case3 :
  // path: "/example/:id(\\d+)+",
  // no master have / it navigate to login page but id have digits

  // case4
  // path: "/example/:id(\\d+)*",
  // example : /example is work too

  // case5
  // path: "/example/:id(\\d+)?",
  // example : just /example word
  {
    path: "/example/:id(\\d+)*",
    component: () => import("@/pages/client/login.page.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/client/login.page.vue"),
  },

  {
    path: "/invoices",
    name: "invoices",
    components: {
      default: () => import("@/pages/client/invoices.page.vue"),
      LeftSidebar: () => import("@/components/ui/Sidebar.vue"),
    },
    meta: {
      requireAuth: true,
    },
  },

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
    // Route Guards
    beforeEnter(to: any, from: any) {
      const exists = sourceData.destinations.find(
        (destination) => destination.id === parseInt(to.params.id)
      );
      if (!exists)
        return {
          name: "NotFound",
        };
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/components/ui/notfound.ui.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "test-link-active-with-class",
  scrollBehavior(to, from, savedPosition) {
    // scroll top=0  after 3s when had navigation page
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, behavior: "smooth" }), 3000);
      })
    );

    // case 2:
    // return savedPosition || { top: 200 };

    // case :3
    //  return {top:null,left:null, behavior:null}
  },
});

router.beforeEach((to, from) => {
  const store = localStorage.getItem("isLogin") || "";
  const isLogin = store ? JSON.parse(store) : "";

  console.log("isLogin", isLogin);
  if (to.meta.requireAuth && !isLogin?.login) {
    return { name: "login", query: { redirect: to.fullPath } };
  }
});

export default router;
