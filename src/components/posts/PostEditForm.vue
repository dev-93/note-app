<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title:</label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents:</label>

          <EditorForm v-if="isDataGet" />
        </div>
        <div class="bt-box">
          <button @click.self.prevent="backToList" class="back btn">
            Back
          </button>
          <button type="submit" class="edit btn">Edit</button>
        </div>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { fetchPost, editPost } from "@/api/posts";
import EditorForm from "../common/EditorForm.vue";

export default {
  components: {
    EditorForm,
  },
  data() {
    return {
      title: "",
      logMessage: "",
      isDataGet: false,
    };
  },
  methods: {
    async submitForm() {
      const id = this.$route.params.id;
      try {
        await editPost(id, {
          title: this.title,
          contents: this.$store.state.postContents,
        });
        this.$router.push("/main");
      } catch (error) {
        console.log(error);
        this.logMessage = error;
      }
    },
    backToList() {
      this.$router.go(-1);
    },
  },
  unmounted() {
    this.title = "";
    this.$store.state.postContents = "";
  },
  async beforeMount() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);

    this.title = data.title;
    this.$store.state.postContents = data.contents;
    await this.$nextTick();
    this.isDataGet = true;
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}

.edit {
  color: white;
}

.back {
  color: black;
  background: rgba(0, 0, 0, 0.2);
  margin-right: 10px;
}
</style>
