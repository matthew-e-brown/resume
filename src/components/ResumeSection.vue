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
    title: { required: true, type: String, validator: str => !/[^\w-, ]/g.test(str) }
  },
  data: function() {
    return {
      header: this.title,
      ID: this.title.toLowerCase().replace(/[ ,]+/g, '-')
    }
  }
}
</script>

<style scoped>
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
}
</style>