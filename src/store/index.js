import { createStore } from "vuex";

const store = createStore({
  state: {
    username: "",
  },
  getters: {
    isLogin(state) {
      return state.username !== "";
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = "";
    },
  },
});

export default store;
