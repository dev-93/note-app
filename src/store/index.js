import { createStore } from "vuex";
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from "@/utils/cookies";
import { loginUser } from "@/api/index";

const store = createStore({
  state: {
    username: getUserFromCookie() || "",
    token: getAuthFromCookie() || "",
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
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async LOGIN({ commit, userData }) {
      const { data } = await loginUser(userData);
      commit("setToken", data.token);
      commit("setUsername", data.user.username);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);

      return data;
    },
  },
});

export default store;
