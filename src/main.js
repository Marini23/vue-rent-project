import "./assets/scss/index.scss";

import { router } from "./router.js";

import { createApp } from "vue";
import App from "./App.vue";

// createApp(App).mount("#app");
createApp(App).use(router).mount("#app");
