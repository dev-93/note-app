import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      username: "",
    };
  },
});

export default store;
