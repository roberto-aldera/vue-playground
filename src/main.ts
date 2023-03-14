import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import NewPage from "./components/NewPage.vue";
import ChildPage from "./components/ChildPage.vue";
import ItemGrid from "./components/ItemGrid.vue";

import "./assets/main.css";
import "mdb-vue-ui-kit/css/mdb.min.css";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: App },
    { path: "/child-page", component: ChildPage },
    {
      path: "/page/:name",
      component: ItemGrid,
      name: "ItemGrid",
    },
    {
      path: "/page/:name/:id",
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
