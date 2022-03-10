import { createApp } from "vue";
import App from "./App.vue";
import router from "@/routes/index";
import store from "@/store/index";
import { formatDate } from "@/utils/filters";

const app = createApp(App);
app.use(store);
app.use(router);
app.config.globalProperties.$filters = {
  formatDate,
};
app.mount("#app");
