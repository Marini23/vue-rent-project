import Foo from "./pages/Foo.vue";
import Bar from "./pages/Bar.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar },
];

export const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});
