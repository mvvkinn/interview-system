import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import axios from "axios";
import VueCookies from "vue-cookies";
import io from "socket.io-client";
import loadScript from "vue-plugin-load-script";

Vue.use(loadScript);

// 쿠키를 사용한다.
Vue.use(VueCookies);

const socket = io("http://localhost:3000", {
  // transports: ["websocket"],
  // withCredentials: true.valueOf,
});

Vue.prototype.$socket = socket;

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  loadScript,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
