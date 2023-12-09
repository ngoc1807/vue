import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "vue3-carousel/dist/carousel.css";
import "./style.css";
const pinia = createPinia();
createApp(App).use(pinia).use(router).mount("#app");
//# sourceMappingURL=main.js.map