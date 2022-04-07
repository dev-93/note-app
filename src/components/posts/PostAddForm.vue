<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div v-if="editor"></div>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title:</label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents:</label>
          <textarea id="contents" type="text" rows="5" v-model="contents" />
          <p
            v-if="!isContentsValid"
            class="validation-text warning isContentTooLong"
          >
            Contents length must be less than 200
          </p>
        </div>
        <button @click.self.prevent="backToList" class="back btn">Back</button>
        <button type="submit" class="btn">Create</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { createPost } from "@/api/posts";
import "@toast-ui/editor/dist/toastui-editor.css";

export default {
  data() {
    return {
      title: "",
      contents: "",
      logMessage: "",
      editor: "",
      editorText: "This is initialValue.",
      editorOptions: {
        hideModeSwitch: true,
      },
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  mounted() {
    this.getEditor();
  },
  methods: {
    getEditor() {
      this.editor = Editor;
    },
    async submitForm() {
      if (!this.title) {
        this.logMessage = "title을 입력해주세요";
        return;
      } else if (!this.contents) {
        this.logMessage = "contents를 입력해주세요";
        return;
      }

      try {
        await createPost({
          title: this.title,
          contents: this.contents,
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
