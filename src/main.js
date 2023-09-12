import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import "@coreui/coreui/dist/css/coreui.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
// import "@/styles/style.css";
import CoreuiVue from "@coreui/vue";
import CIcon from "@coreui/icons-vue";
import { iconsSet as icons } from "@/assets/icons";

const app = createApp(App);

const isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn === null) {
  // Tidak ada isi di dalam localStorage untuk kunci 'isLoggedIn'
  localStorage.setItem("isLoggedIn", "true");
  console.log("localStorage kosong");
} else {
  // Terdapat isi di dalam localStorage untuk kunci 'isLoggedIn'
  console.log("localStorage memiliki isi:", isLoggedIn);
}

app.use(store);
app.use(router);
app.use(CoreuiVue);
app.provide("icons", icons);
app.component("CIcon", CIcon);
app.mount("#app");
