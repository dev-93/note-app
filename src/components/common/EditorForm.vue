<template>
  <QuillEditor
    :modules="modules"
    toolbar="full"
    contentType="html"
    v-model:content="content"
    v-on:change="$event => $emit('setContents', $event)"
  />
  <div>
    <button>test</button>
  </div>
</template>

<script lang="ts">
import { QuillEditor } from "@vueup/vue-quill";
import BlotFormatter from "quill-blot-formatter";

export default {
  name: "EditorForm",
  components: {
    QuillEditor,
  },
  props: {
    contents: {
      type: String,
      required: false,
    },
  },
  // computed: {
  //   onEmit() {
  //     return this.$emit("setContents", this.content);
  //   },
  // },
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
  // methods: {
  //   onEmit() {
  //     this.$emit("setContents", this.content);
  //   },
  // },
};
</script>

<style>
.ql-editor {
  min-height: 250px;
}
</style>
