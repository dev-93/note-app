<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="password" v-model="password" />
        </div>
        <button
          :disabled="!isUsernameValid || !password"
          type="submit"
          class="btn"
          :class="!isUsernameValid || !password ? 'disabled' : null"
        >
          로그인
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import validateEmail from "@/utils/validation";

export default {
  data() {
    return {
      username: "",
      password: "",
      logMessage: "",
    };
  },
  computed: {
    isUsernameValid(): Boolean {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm(): Promise<void> {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };

        await this.$store.dispatch("LOGIN", userData);
        this.$router.push("/main");
        this.initForm();
      } catch (error: any) {
        console.log(error.response.data);
        this.logMessage = error.response.data;
      }
    },
    initForm(): void {
      this.username = "";
      this.password = "";
    },
  },
};
</script>

<style>
.btn {
  color: white;
}
</style>
