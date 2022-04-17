<template>
  <QuillEditor
    :modules="modules"
    toolbar="full"
    contentType="html"
    v-model:content="this.$store.state.postContents"
  />
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
  setup: () => {
    const modules = {
      name: "blotFormatter",
      module: BlotFormatter,
      options: {
        modules: {
          toolbar: ["bold", "italic", "underline"],
        },
      },
    };
    return { modules };
  },
};
</script>

<style>
.ql-editor {
  min-height: 250px;
}
</style>
