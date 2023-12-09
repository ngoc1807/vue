import { defineStore } from "pinia";

export const useClientMenuStore = defineStore("clientMenu", {
  state: () => ({
    menu: [
      {
        icon: "HomeIcon",
        pageName: "home-page",
        title: "Home",
        // subMenu: [],
        path: "home",
      },

      {
        icon: "HomeIcon",
        pageName: "blogs-page",
        title: "Blogs",
        path: "blogs",
        subMenu: [
          {
            icon: "",
            pageName: "sport-page",
            title: "Sport page",
          },
          {
            icon: "",
            pageName: "blog-detail-page",
            title: "Detail page",
          },
        ],
      },
      {
        icon: "HomeIcon",
        pageName: "faq-page",
        title: "FAQ",
        path: "faq",
      },
    ],
  }),
});
