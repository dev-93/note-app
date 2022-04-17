<template>
  <div class="contents">
    <h1 class="page-header">Post 작성하기</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title:</label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents:</label>

          <EditorForm />
        </div>
        <div class="bt-box">
          <button @click.self.prevent="backToList" class="back btn">
            Back
          </button>
          <button type="submit" class="btn">Create</button>
        </div>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { createPost } from "@/api/posts";
import EditorForm from "../common/EditorForm.vue";

export default {
  components: {
    EditorForm,
  },
  data() {
    return {
      title: "",
      logMessage: "",
      value: "",
    };
  },
  unmounted() {
    this.title = "";
    this.$store.state.postContents = "";
  },
  computed: {
    getPostContents: function () {
      return this.$store.state.postContents;
    },
    isContentsValid() {
      return this.$store.state.postContents.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      if (!this.title) {
        this.logMessage = "title을 입력해주세요";
        return;
      } else if (!this.$store.state.postContents) {
        this.logMessage = "contents를 입력해주세요";
        return;
      }

      try {
        await createPost({
          title: this.title,
          contents: this.$store.state.postContents,
        });

        this.$router.push("/main");
      } catch (error: any) {
        console.log(error.response.data.message);
        this.logMessage = error.response.data.message;
      }
    },
    backToList() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}

.back {
  color: black;
  background: rgba(0, 0, 0, 0.2);
  margin-right: 10px;
}
</style>
