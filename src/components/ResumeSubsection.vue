<template>
  <h3>{{ header }}</h3>
</template>

<script>
export default {
  props: {
    // Not going to be an ID this time, no regex needed:
    header: { required: true, type: String }
  }
}
</script>