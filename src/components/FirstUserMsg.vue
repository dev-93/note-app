<template>
  <div>
    <p v-if="isUserLogin">
      {{ $store.state.username }}님 찾고 싶은 title을 입력해주세요!
    </p>
    <p v-else>wating</p>
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
};
</script>

<style scoped>
p {
  text-align: center;
}
</style>
