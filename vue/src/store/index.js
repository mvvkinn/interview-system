//src/store/index.js

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueCookies from "vue-cookies";
import router from "@/router";

// 쿠키를 사용한다.
Vue.use(VueCookies);

Vue.use(Vuex);

export const store = new Vuex.Store({
  // 여러 컴포넌트에서 공유할 공동의 상태
  state: {
    Token: null,
    user: {
      address: null,
      birthdate: null,
      email: null,
      gender: null,
      name: null,
      phone: null,
      recieve_info: null,
      role: null,
      username: null,
      zipcode: null,
    },
    isLogin: null,
    isEmail: null,
  },

  mutations: {
    // 로그인 토큰 쿠키에 저장, 1시간동안
    loginToken(state, payload) {
      VueCookies.set("Token", payload, "1h");
      state.Token = payload;
      localStorage.setItem("Token", payload);
    },

    // 쿠키에 저장되어있는 토큰 제거
    removeToken() {
      VueCookies.remove("Token");
      localStorage.clear();
    },

    // 사용자 정보 state.user에 저장
    loginUser(state, payload) {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },

    isLogin(state, payload) {
      state.isLogin = payload;
    },

    isEmail(state, payload) {
      state.isEmail = payload;
      console.log(state.isEmail);
    },
  },

  getters: {
    //쿠키에 저장된 토큰 가져오기
    getToken() {
      let Token = VueCookies.get("Token");
      return {
        Token: Token,
      };
    },
  },

  actions: {
    login: async ({ commit }, params) => {
      await axios
        .post("/auth/signin", params)
        .then((res) => {
          commit("loginToken", res.data.token);
          commit("loginUser", res.data.userDTO);
          commit("isLogin", false);
          router.push("/main");
        })
        .catch((err) => {
          console.log(err.message);
          commit("isLogin", true);
        });
    },

    isEmail: async ({ commit }, params) => {
      await axios
        .post("/auth/signin", params)
        .then(() => {})
        .catch((err) => {
          console.log(err.response.data.errors.message);
          if (err.response.data.errors.message.includes("Can't")) {
            commit("isEmail", false);
          } else {
            commit("isEmail", true);
          }
        });
    },

    logout: ({ commit }) => {
      // 로그아웃
      commit("removeToken");
    },
  },
});
