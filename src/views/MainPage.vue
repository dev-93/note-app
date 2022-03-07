<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
    </div>
  </div>
</template>

<script>
import { fetchPosts } from "@/api/index";

export default {
  methods: {
    async fetchData() {
      const response = await fetchPosts();
      console.log(response);
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
