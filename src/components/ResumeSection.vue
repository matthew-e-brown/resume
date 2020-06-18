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
  margin-block-start: -0.15rem;
  font-family: 'Catamaran', sans-serif;
  font-weight: 900;
  font-size: 1.2em;
  letter-spacing: 0.24em;
  font-variant: small-caps;
  color: var(--header2);
  border-bottom: 0.075rem solid var(--off-black);
}
</style>