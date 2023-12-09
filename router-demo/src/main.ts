import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createPinia } from "pinia";
import router from "./router";
import AppLink from "./components/ui/AppLink.vue";

const pinia = createPinia();
createApp(App)
  .use(pinia)
  // wrap link with custom to open  Extending Router Link for External URLs
  .component("AppLink", AppLink)
  .use(router)
  .mount("#app");
