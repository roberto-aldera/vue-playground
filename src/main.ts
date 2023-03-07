import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import NewPage from "./components/NewPage.vue";
import ChildPage from "./components/ChildPage.vue";

import "./assets/main.css";
import "mdb-vue-ui-kit/css/mdb.min.css";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: App },
    { path: "/new-page", component: NewPage },
    { path: "/child-page", component: ChildPage },
    {
      path: "/page/:id",
      component: NewPage,
      name: "page",
    },
  ],
});

const pinia = createPinia();
const app = createApp({});
app.use(router);
app.use(pinia);

app.mount("#app");
