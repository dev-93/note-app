<template>
  <div>
    <AppHeader />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AppHeader from "@/components/common/AppHeader.vue";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

@Options({
  components: {
    AppHeader,
  },
})
export default class App extends Vue {}
</script>

<style>
@import "./css/reset.css";
@import "./css/common.css";
</style>
