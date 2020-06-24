<template>
  <main>
    <VueMarkdown
      id="body-text"
      :source="body"
      :prerender="prerender"
      :postrender="postrender"
      :anchorAttributes="{ target: '_blank' }"
      :linkify="false"
      :breaks="false"
    />
  </main>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  name: 'CoverLetter',
  components: { VueMarkdown },
  data: function() {
    return {
      body: ''
    };
  },
  methods: {
    prerender: str => str.trim(),
    postrender: str => str.replace(/<p>\s*?\/\/! ?/g, `<p class="no-indent">`)
  },
  mounted: function() {
    try {
      this.body = require('@/cover-letter.md').default;
    } catch (err) {
      this.body = `Could not load \`src/cover-letter.md\`. Did you create the file?`;
    }
  }
}
</script>

<style scoped>
main {
  border-top: 0.075rem solid rgb(18, 13, 13);
  padding: 0.9rem 1rem 0;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
}

* >>> p:not(.no-indent) {
  text-indent: 4em;
}

* >>> p {
  margin-top: 0.5em;
}

* >>> ol, * >>> ul,
* >>> ol + p, * >>> ul + p {
  margin-top: 0.35em;
}

* >>> ol ol, * >>> ol ul,
* >>> ul ol, * >>> ul ul {
  margin-top: 0;
}
</style>