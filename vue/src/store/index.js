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
  },

  getters: {
    //쿠키에 저장된 토큰 가져오기
    getToken() {
      let Token = VueCookies.get("Token");
      return {
        Token: Token,
      };
    },

    getUser() {
      let user = JSON.parse(localStorage.getItem("user"));

      return {
        user: user,
      };
    },
  },

  actions: {
    login: async ({ commit }, params) => {
      return await axios
        .post("/auth/signin", params)
        .then((res) => {
          commit("loginToken", res.data.token);
          commit("loginUser", res.data.userDTO);
          router.push("/main");
          return res.status;
        })
        .catch((e) => e.response.status);
    },

    isDuplicate: async (_, params) => {
      return await axios
        .post("/auth/emailDuplication", params)
        .then((res) => res.data.emailDuplication)
        .catch((e) => e.response.status);
    },

    logout: ({ commit }) => {
      // 로그아웃
      commit("removeToken");
    },

    apply: async (_, params) => {
      return await axios
        .post("/apply", params)
        .then((res) => res.status)
        .catch((e) => e.response.status);
    },

    score: async (_, params) => {
      return await axios
        .post("/score", params)
        .then((res) => res.status)
        .catch((e) => e.response.status);
    },

    notice: async (_, params) => {
      return await axios
        .post("/notice", params)
        .then((res) => res.status)
        .catch((e) => e.response.status);
    },

    uploadNotice: async (_, params) => {
      return await axios
        .post("/notice/upload/notice", params)
        .then((res) => res.data)
        .catch((e) => e.response.status);
    },

    amendNotice: async (_, params) => {
      return await axios
        .post("/notice/update", params)
        .then((res) => res.status)
        .catch((e) => e.response.status);
    },

    amendNoticeImg: async (_, params) => {
      return await axios
        .post("/notice/upload/notice", params)
        .then((res) => res.data)
        .catch((e) => e.response.status);
    },

    registResume: async (_, params) => {
      return await axios
        .post("/resume", params)
        .then((res) => res.status)
        .catch((e) => e.response.status);
    },

    amendResume: async (_, params) => {
      return await axios
        .post("/resume/update", params)
        .then((res) => res.status)
        .catch((e) => e.response.status);
    },

    amendResumeImg: async (_, params) => {
      return await axios
        .post("/resume/upload", params)
        .then((res) => res.status)
        .catch((e) => e.response.status);
    },

    upload: async (_, params) => {
      return await axios
        .post("/resume/upload", params)
        .then((res) => res.data)
        .catch((e) => e.response.status);
    },
  },
});
