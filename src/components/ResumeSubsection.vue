<template>
  <div class="subsection" :class="{ 'no-headers': !hasHeader }">
    <div v-if="hasHeader">
      <h3>{{ header }}</h3>
    </div>
    <div>
      <template v-for="([subheader, body], i) in Object.entries(content)">
        <h4 :key="`h4-${i}`">{{ subheader }}</h4>
        <VueMarkdown
          :key="i"
          :source="body"
          :prerender="prerender"
          :anchorAttributes="{ target: '_blank' }"
          class="body-text"
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
  grid-template-columns: 7.25rem 1fr;
}

.subsection>* {
  padding: 0.3rem;
}
.subsection>:first-child {
  padding-left: 0;
}

.subsection>:last-child {
  padding-right: 0;
}

.no-headers {
  padding-left: 0;
  padding-right: 0;
}

h3 {
  font-size: 1rem;
  font-weight: 400;
  color: var(--header3);
}

h4 {
  margin-bottom: 0.3em;
}

.body-text {
  margin-bottom: 0.25em;
}

.body-text:last-child {
  margin-bottom: 0;
}

* >>> ul {
  list-style-type: square;
  padding-inline-start: 2.4em;
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