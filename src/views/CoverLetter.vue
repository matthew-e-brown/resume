<template>
  <main>
    <VueMarkdown id="intro-text" :source="greeting" v-bind="markdownProps" />
    <VueMarkdown id="body-text" :source="body" v-bind="markdownProps" />
    <VueMarkdown id="outro-text" :source="signoff" v-bind="markdownProps" />
  </main>
</template>

<script>
import dedent from 'dedent-js';
import VueMarkdown from 'vue-markdown';

export default {
  name: 'CoverLetter',
  components: { VueMarkdown },
  data: function() {
    return {
      greeting: '',
      signoff: '',
      body: '',
      markdownProps: {
        prerender: this.prerender,
        anchorAttributes: { target: '_blank' },
        linkify: false,
        breaks: false
      }
    };
  },
  methods: {
    prerender: function(str) {
      return dedent(str).trim();
    }
  },
  mounted: function() {
    try {
      this.body = require('@/cover-letter.md').default;
    } catch (err) {
      this.body = `Could not load \`src/cover-letter.md\`. Did you create the file?`;
      return;
    }

    this.body = this.body
      .replace(/<!-- (greeting|signoff|intro|outro) -->\r?\n(.+)\r?\n<!-- \1 -->/gs, (...args) => {
        const [ , spot, text ] = args;
        switch (spot) {
          case 'intro': case 'greeting': this.greeting = text; break;
          case 'outro': case 'signoff': this.signoff = text; break;
        }
        return '';
      });
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
</style>