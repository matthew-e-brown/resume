<template>
  <div class="subsection" :class="{ 'no-headers': !hasHeader }">
    <h3 v-if="hasHeader">{{ header }}</h3>
    <div>
      <template v-for="([subheader, body], i) in Object.entries(content)">
        <h4 :key="`h4-${i}`">{{ subheader }}</h4>
        <VueMarkdown
          :key="i"
          :source="body"
          :prerender="prerender"
          :anchorAttributes="{ target: '_blank' }"
        />
      </template>
    </div>
  </div>
</template>

<script>
import dedent from 'dedent-js';
import VueMarkdown from 'vue-markdown';

export default {
  name: 'ResumeSubsection',
  components: { VueMarkdown },
  props: {
    // Not going to be an ID this time, no regex needed:
    header: { required: true, type: String },
    content: { required: true, type: Object }
  },
  methods: {
    prerender: str => dedent(str)
  },
  computed: {
    hasHeader: function() {
      return this.header != '__no-header__'
    }
  }
}
</script>

<style scoped>
.subsection:not(.no-headers) {
  display: grid;
  grid-template-columns: 3fr 7fr;
}

* >>> ul {
  list-style-type: square;
}

* >>> ul ul li {
  list-style-type: none;
  position: relative;
}

* >>> ul ul li::before {
  position: absolute;
  left: -1.4em;
  top: 0.5em;
  transform: translateY(-25%);
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  font-family: "Font Awesome 5 Pro";
  font-weight: 900;
  content: "\f178"
}
</style>