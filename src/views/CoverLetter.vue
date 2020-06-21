<template>
  <main>
    <p v-html="bodyText"></p>
  </main>
</template>

<script>
export default {
  name: 'CoverLetter',
  data: function() {
    return {
      greeting: '',
      bodyText: '',
      signOff: '',
    }
  },
  mounted: function() {
    try {
      this.bodyText = require('@/cover-letter.md').default;
    } catch (err) {
      this.bodyText = `
        Could not load \`src/cover-letter.md\`. Did you create the file?
      `;
      return;
    }

    if (this.bodyText == '') {
      this.bodyText = `There's no text in \`src/cover-letter.md\`.`;
    }
  }
}
</script>