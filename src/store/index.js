import { createStore } from "vuex";

const store = createStore({
  state: {
    username: "",
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
  },
});

export default store;
