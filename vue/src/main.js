import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import axios from "axios";
import VueCookies from "vue-cookies";
import loadScript from "vue-plugin-load-script";

Vue.use(loadScript);

// 쿠키를 사용한다.
Vue.use(VueCookies);

Vue.prototype.$axios = axios;

Vue.prototype.$eMockUp =
  "https://8b9634c1-85ba-4027-9009-702300573ece.mock.pstmn.io";

Vue.config.productionTip = false;

new Vue({
  loadScript,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
