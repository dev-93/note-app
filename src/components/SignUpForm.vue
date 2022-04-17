<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <button
          :disabled="!isUsernameValid || !password"
          type="submit"
          class="btn"
          :class="!isUsernameValid || !password ? 'disabled' : null"
        >
          회원 가입
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { registerUser } from "@/api/auth";
import validateEmail from "@/utils/validation";

export default {
  data() {
    return {
      // form values
      username: "",
      password: "",
      nickname: "",
      // log
      logMessage: "",
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      if (!this.username) {
        this.logMessage = `id를 입력해주세요`;
        return;
      }
      if (!this.password) {
        this.logMessage = `pw를 입력해주세요`;
        return;
      }
      if (!this.nickname) {
        this.logMessage = `nickname을 입력해주세요`;
        return;
      }

      if (!this.isUsernameValid) {
        this.logMessage = `id는 이메일 형식에 맞춰주세요`;
        return;
      }

      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      try {
        const { data } = await registerUser(userData);
        this.logMessage = `${data.username} 님이 가입되었습니다`;
        this.$router.push("/login");
        this.initForm();
      } catch (error: any) {
        if (error.response?.status) {
          this.logMessage = `${this.username}은 이미 있는 아이디입니다.`;
        }
      }
    },
    initForm() {
      this.username = "";
      this.password = "";
      this.nickname = "";
      this.logMessage = "";
    },
  },
};
</script>

<style></style>
