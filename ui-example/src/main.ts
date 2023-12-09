import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers/config";
import "./../node_modules/bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import "jquery";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faPlus,
  faMagnifyingGlass,
  faFilter,
  faArrowDownUpAcrossLine,
  faChevronDown,
  faEllipsis,
  faGear,
  faCircleQuestion,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faPlus,
  faMagnifyingGlass,
  faFilter,
  faArrowDownUpAcrossLine,
  faChevronDown,
  faEllipsis,
  faGear,
  faCircleQuestion,
  faEllipsisVertical
);

/* add font awesome icon component */

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
