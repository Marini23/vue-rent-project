import Foo from "./pages/Foo.vue";
import Bar from "./pages/Bar.vue";
import HomePage from "./pages/HomePage.vue";
import ApartmentPage from "./pages/ApartmentPage.vue";
import ErrorPage from "./pages/ErrorPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar },
  { path: "/", component: HomePage, name: "homepage" },
  { path: "/apartments/:id", component: ApartmentPage, name: "apartmentpage" },
  { path: "/:catchAll(.*)", component: ErrorPage, name: "errorpage" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});
