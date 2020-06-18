<template>
  <div class="subsection">
    <h3>{{ header }}</h3>
    <div class="subsubsection">
      <template v-for="([subheader, content], i) in Object.entries(body)">
        <h4 :key="`h4-${i}`">{{ subheader }}</h4>
        <ul :key="`ul-${i}`">
          <!-- Template is used to allow for v-if on the <li> -->
          <template v-for="(item, j) in content">
            <li v-if="!item.sublist" :key="`li-${i}-${j}`">
              <span v-html="parse(item)"></span>
            </li>
            <li v-else :key="`li-${i}-${j}`">
              <span v-html="parse(item['text'])"></span>
              <ul>
                <li v-for="(subitem, l) in item['sublist']" :key="`li-${i}-${j}-${l}`">
                  <span v-html="parse(subitem)"></span>
                </li>
              </ul>
            </li>
          </template>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Not going to be an ID this time, no regex needed:
    header: { required: true, type: String },
    body: { required: true, type: Object }
  },
  methods: {
    parse: function(str) {
      return str.replace(/\[(.*?)\]\((.*?)\)/g, `<a href="$2" rel="_blank">$1</a>`);
    }
  }
}
</script>

<style scoped>
.subsection {
  display: grid;
  grid-template-columns: 3fr 7fr;
}
</style>