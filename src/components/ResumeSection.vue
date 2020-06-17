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