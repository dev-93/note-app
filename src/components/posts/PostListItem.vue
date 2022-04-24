<template>
  <li>
    <a @click.stop="routeEditPage">
      <div class="post-title">
        {{ postItem.title }}
      </div>
      <div class="post-contents">
        <span v-html="postItem.contents"></span>
      </div>
      <div class="post-item">
        <span>{{ $filters.formatDate(postItem.createdAt) }}</span>
        <div class="icon-box">
          <i class="icon ion-md-create" @click.stop="routeEditPage"></i>
          <i class="icon ion-md-trash" @click.stop="deleteItem"></i>
        </div>
      </div>
    </a>
  </li>
</template>

<script lang="ts">
import { deletePost } from "@/api/posts";

export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deleteItem() {
      if (confirm("You want to delete it?")) {
        await deletePost(this.postItem._id);
        this.$emit("refresh");
      }
    },
    routeEditPage() {
      this.$router.push(`/post/${this.postItem._id}`);
    },
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
}
a:hover {
  color: inherit;
}
.post-item {
  display: flex;
  align-items: center;
}
.icon-box {
  margin-left: auto;
}
</style>
