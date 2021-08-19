import Vue from "vue";
import App from "./App.vue";
import { OhVueIcon } from "./js/plugins/index";
import router from "@/js/router/index.js";
Vue.component("v-icon", OhVueIcon);

Vue.config.productionTip = false;
new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
