import { createApp } from "vue";
import App from "./App.vue";
import NewPageVue from "./components/NewPage.vue";
import ChildPage from "./components/ChildPage.vue";

import "./assets/main.css";
import "mdb-vue-ui-kit/css/mdb.min.css";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: App },
    { path: "/new-page", component: NewPageVue },
    { path: "/child-page", component: ChildPage },
    { path: "/page/:id", component: NewPageVue, name: "page" },
  ],
});

const app = createApp({});
app.use(router);

app.mount("#app");
