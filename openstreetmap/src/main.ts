import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createPinia } from "pinia";
import router from "./router";
import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'
const pinia = createPinia();
createApp(App).use(pinia).use(router).use(OpenLayersMap).mount("#app");
