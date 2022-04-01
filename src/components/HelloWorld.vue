<template>
  <button @click="show = !show">Toggle List</button>
  <button @click="addItem()">Push Number</button>
  <button @click="list.pop()">Pop Number</button>
  <button @click="list.reverse()">Reverse List</button>

  <ul v-if="show && list.length">
    <li v-for="item of list" v-bind:key="item">{{ item }}</li>
  </ul>
  <p v-else-if="list.length">List is not empty, but hidden.</p>
  <p v-else>List is empty.</p>
</template>

<script lang="ts">
export default {
  data() {
    return {
      show: true,
      list: [1, 2, 3],
    };
  },
  methods: {
    addItem(): void {
      const maxNum: number = Math.max(...this.list);
      this.list.push(maxNum + 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul li {
  list-style: initial;
}
</style>
