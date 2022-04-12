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
          <textarea id="contents" type="text" rows="5" v-model="contents" />
          <QuillEditor
            :modules="modules"
            toolbar="full"
            v-model:content="contents"
            contentType="html"
          />
          <p
            v-if="!isContentsValid"
            class="validation-text warning isContentTooLong"
          >
            Contents length must be less than 200
          </p>
        </div>
        <button @click.self.prevent="backToList" class="back btn">Back</button>
        <button type="submit" class="edit btn">Edit</button>
      </form>

      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { fetchPost, editPost } from "@/api/posts";
import { QuillEditor } from "@vueup/vue-quill";
import BlotFormatter from "quill-blot-formatter";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  components: {
    QuillEditor,
  },
  setup: () => {
    const modules = {
      name: "blotFormatter",
      module: BlotFormatter,
      options: {
        modules: {
          toolbar: ["bold", "italic", "underline"],
        },
        placeholder: "입력해주세요",
        theme: "snow",
      },
    };
    return { modules };
  },
  data() {
    return {
      title: "",
      contents: "",
      logMessage: "",
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      const id = this.$route.params.id;
      try {
        await editPost(id, {
          title: this.title,
          contents: this.contents,
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
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    this.title = data.title;
    this.contents = data.contents;
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
