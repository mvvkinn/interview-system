//src/store/index.js

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  // 여러 컴포넌트에서 공유할 공동의 상태
  state: {},

  // state를 변경시키기 위한 유일한 방법 (동기적 로직)
  mutations: {},

  // 공동의 상태를 계산하여 state의 값을 반환
  getters: {},

  // 비동기적 로직
  actions: {},
});
