import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Layout from "@/pages/admin/dashboard.page.vue";
const Layout = () => import("@/components/ui/layout.ui.vue");
const Dashboard = () => import("@/pages/admin/dashboard/dashboard.page.vue");
const DirectionsManagement = () =>
  import("@/pages/admin/directions-management/directions-management.page.vue");

const LandmarkManagement = () =>
  import("@/pages/admin/landmark-management/landmark-management.page.vue");

const MovementHistory = () =>
  import("@/pages/admin/movement-history/movement-history.page.vue");

const Example1 = () => import("@/pages/admin/example/example1.page.vue");
const Example2 = () => import("@/pages/admin/example/example2.page.vue");
const routes: RouteRecordRaw[] = [
  // { path: "/", name: "", component: Home },
  {
    path: "/",
    redirect: "/sign-in",
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () => import("@/pages/auth/sign-in.page.vue"),
  },

  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("@/pages/auth/forgot-password.page.vue"),
  },
  {
    path: "/dashboard",
    component: Layout,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "directions-management",
        name: "DirectionsManagement",
        component: DirectionsManagement,
      },
      {
        path: "landmark-management",
        name: "LandmarkManagement",
        component: LandmarkManagement,
      },
      {
        path: "movement-history",
        name: "MovementHistory",
        component: MovementHistory,
      },

      {
        path: "example-1",
        name: "Example1",
        component: Example1,
      },
      {
        path: "example-2",
        name: "Example2",
        component: Example2,
      },
    ],
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
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "sidebar-link-active",
});

export default router;
