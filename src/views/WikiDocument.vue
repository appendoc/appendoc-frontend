<template>
  <div v-html="markdownToHtml"></div>
</template>

<script>
import wikiApi from "@/api/WikiApi";
import router from "@/router";
import {marked} from 'marked';


export default {
  NO_TITLE: '제목이 없는 문서일리가 없는데 제목이 없다..?',
  name: "WikiDocument",
  data() {
    return {
      markdown: ''
    }
  },
  computed: {
    markdownToHtml() {
      return marked(this.markdown)
    }
  },
  mounted() {
    const documentName = this.$route.params.documentName;
    const documentTitle = this.$route.params.documentName || this.NO_TITLE
    document.title = `${documentTitle} - Appendoc`;
    wikiApi
        .getWikiDocument(documentName)
        .then(wikiDocument => {
          this.markdown = wikiDocument.content
        })
        .catch(error => {
          console.error(error)
          router.push({name: 'Page Not Found'})
        })
  }
}
</script>

<style scoped>

</style>
