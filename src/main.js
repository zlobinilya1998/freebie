import Vue from "vue";
import App from "./App.vue";
import { OhVueIcon, Toast, Ripple } from "./js/plugins/index";
import router from "@/js/router/index.js";

Vue.config.productionTip = false;
Vue.use(Toast);
Vue.directive("ripple", Ripple);

//Register global component
Vue.component("v-icon", OhVueIcon);

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
