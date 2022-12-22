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
Vue.prototype.$seolmockup =
  "https://c9be7795-dba6-43e3-b014-c14cda040542.mock.pstmn.io";

Vue.prototype.$eMockUp =
  "https://80f083a6-6900-4471-abc4-2578a12a2af3.mock.pstmn.io";

Vue.config.productionTip = false;

new Vue({
  loadScript,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
