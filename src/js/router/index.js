import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/js/Pages/Home/Index.vue")
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("@/js/Pages/Blog/Index.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
