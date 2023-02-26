import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import "mdb-vue-ui-kit/css/mdb.min.css";

import { createRouter, createWebHistory } from "vue-router";

const Foo = { template: "<div>foo</div>" };
const Bar = { template: "<div>bar</div>" };

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: App },
    { path: "/foo", component: Foo },
    { path: "/bar", component: Bar },
  ],
});

const app = createApp({});
app.use(router);

app.mount("#app");
