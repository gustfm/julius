import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const Summary = () =>
  import(/* webpackChunkName: "summary" */ "../app/Summary.vue");

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "summary",
    component: Summary,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
