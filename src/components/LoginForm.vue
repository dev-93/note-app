<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id:</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw:</label>
      <input id="password" type="text" v-model="password" />
    </div>
    <button>로그인</button>
  </form>
</template>

<script>
import { loginUser } from "@/api/index";

export default {
  data() {
    return {
      username: "",
      password: "",
      logMessage: "",
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
      };
      const { data } = await loginUser(userData);
      console.log(data);
      this.initForm();
    },
    initForm() {
      this.username = "";
      this.password = "";
    },
  },
};
</script>

<style></style>
