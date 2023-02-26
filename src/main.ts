import { createApp } from "vue";
// import * as VueRouter from "vue-router";
// import VueRouter from "vue-router";
import App from "./App.vue";
// import NewPage from "./components/NewPage.vue";

import "./assets/main.css";
import "mdb-vue-ui-kit/css/mdb.min.css";

// createApp(App).mount("#app");

// const { createRouter, createWebHistory, createWebHashHistory } = VueRouter;
// const { createApp } = Vue;
import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
} from "vue-router";

const Home = {
    template: `<div>home</div>`,
};

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

// // 1. Define route components.
// // These can be imported from other files
// // const Home = app.component(TheHome);
// const Home = { template: "<div>Home</div>" };
// // const About = { template: "<div>About</div>" };

// // 2. Define some routes
// // Each route should map to a component.
// // We'll talk about nested routes later.
// const routes = [
//     { path: "/", component: Home },
//     { path: "/newpage", component: NewPage },
// ];

// // 3. Create the router instance and pass the `routes` option
// // You can pass in additional options here, but let's
// // keep it simple for now.
// const router = VueRouter.createRouter({
//     // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//     history: VueRouter.createWebHashHistory(),
//     routes, // short for `routes: routes`
// });

// // 5. Create and mount the root instance.
// // const app = createApp({});
// const app = createApp(App); //.mount("#app");

// // Make sure to _use_ the router instance to make the
// // whole app router-aware.
// app.use(router);

// app.mount("#app");

// // Now the app has started!
