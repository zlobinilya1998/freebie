import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/js/Pages/Home.vue")
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("@/js/Pages/Blog.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
