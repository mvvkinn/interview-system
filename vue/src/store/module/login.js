//로그인 처리 관련 저장소 모듈
export const login = {
  state: {
    host: "http://localhost::3000",
    accessToken: null,
    refreshToken: null,
  },
  mutations: {
    loginToken(state, payload) {
      this.$cookies.set("accessToken", payload.accessToken, "60s");
      this.$cookies.set("refreshToken", payload.refreshToken, "1h");
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
    refreshToken(state, payload) {
      //accessToken 재셋팅
      this.$cookies.set("accessToken", payload.accessToken, "60s");
      this.$cookies.set("refreshToken", payload.refreshToken, "1h");
      state.accessToken = payload;
    },
    removeToken() {
      this.$cookies.remove("accessToken");
      this.$cookies.remove("refreshToken");
    },
  },
  getters: {
    //쿠키에 저장된 토큰 가져오기
    getToken() {
      let ac = this.$cookies.get("accessToken");
      let rf = this.$cookies.get("refreshToken");
      return {
        access: ac,
        refresh: rf,
      };
    },
  },
  actions: {
    login: async ({ commit }, params) => {
      await this.$axios
        .post("/auth/signin", params)
        .then((res) => {
          commit("loginToken", res.data.auth_info);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    // refreshToken: async ({ commit }) => {
    //   // accessToken 재요청
    //   //accessToken 만료로 재발급 후 재요청시 비동기처리로는 제대로 처리가 안되서 promise로 처리함

    //   await this.$axios
    //     .post("/v1/auth/certify")
    //     .then((res) => {
    //       commit("refreshToken", res.data.auth_info);
    //     })
    //     .catch((err) => {
    //       console.log("refreshToken error : ", err.config);
    //     });
    // },
    logout: ({ commit }) => {
      // 로그아웃
      commit("removeToken");
      location.reload();
    },
  },
};
