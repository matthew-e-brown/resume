<template>
  <section :id="`${ID}-section`">
    <h2 :id="ID">{{ header }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'ResumeSection',
  props: {
    title: { required: true, type: String }
  },
  data: function() {
    return {
      header: this.title,
      ID: this.title.toLowerCase().replace(/[^\w]+/g, '-').replace(/[^\w]+$/g, '')
    }
  }
}
</script>

<style scoped>
section {
  break-inside: avoid-page;
}

h2 {
  font-family: 'Catamaran', sans-serif;
  font-weight: 900;
  font-size: 1.2em;
  font-variant: small-caps;
  letter-spacing: 0.2em;
  line-height: 1.4rem;
  margin: 0.25em -0.5rem 0.25em -0.5rem;
  padding: 0 0.5rem;
  color: var(--header2);
  border-bottom: 0.075rem solid var(--body);
  break-before: avoid-page;
  break-after: avoid-page;
}
</style>