<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">기록용</h1>
      <FirstUserMsg />

      <div class="search-box">
        <input
          class="search_input"
          v-model.trim="search"
          placeholder="please search title"
          ref="answer"
        />
      </div>

      <LoadingSpinner v-if="isLoading" />

      <ul v-else class="list_box">
        <div v-if="isEmpty" class="empty-box">찾는 내용이 없습니다</div>

        <PostListItem
          v-else
          v-for="postItem in getListByTitle"
          :key="postItem._id"
          :postItem="postItem"
          @refresh="fetchData"
        />
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <i class="ion-md-add"></i>
    </router-link>
  </div>
</template>

<script lang="ts">
import { fetchPosts } from "@/api/posts";
import PostListItem from "@/components/posts/PostListItem.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";
import FirstUserMsg from "@/components/FirstUserMsg.vue";

export default {
  components: {
    PostListItem,
    LoadingSpinner,
    FirstUserMsg,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
      search: "",
      isEmpty: false,
    };
  },
  computed: {
    getListByTitle() {
      return this.postItems.filter((post: any) => {
        return post.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  watch: {
    getListByTitle: {
      handler: function (newVal: any) {
        this.isEmpty = newVal.length ? false : true;
      },
    },
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();

      this.isLoading = false;
      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchData();
  },
  mounted() {
    this.$refs.answer.focus();
  },
};
</script>

<style>
.search_input {
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
}

.search-box {
  width: calc(100% - 10px);
  background: white;
  margin: 0 auto;
  padding: 40px;
}

.empty-box {
  margin: 100px auto;
  color: red;
}
</style>
