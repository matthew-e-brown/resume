<template>
  <div id="page">
    <h1>Matthew Brown</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      prod: (process.env.NODE_ENV === 'production')
    }
  }
}
</script>

<style>
:root {
  --header1: rgb(0, 69, 134);
  --header2: rgb(0, 102, 204);
  --header3: rgb(118, 113, 113);
}

:root {
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-size: 16px;
  color: rgb(12, 16, 18);
  background-color: rgb(220, 236, 252);
}

body {
  display: flex;
  justify-content: center;
}

/* Width: 8.5in / 1/72in per pt / 12pt per em */
/* Padding: 15mm, 22.5mm / (1/72 * 25.4mm) per pt / 12pt per em */
#page {
  width: 51rem;
  padding: 3.5433rem 5.3149rem;
  background-color: white;
}

@media not print {
  #page {
    box-shadow: 0.1em 0.25em 0.85em 0.12em rgba(14, 14, 14, 0.35);
    border-radius: 0.5rem;
  }
}

@media only print {
  :root { font-size: 12pt; background: none; }
  body, #page { margin: 0; padding: 0; }

  @page {
    width: 8.5in;
    height: 11in;
    margin: 15mm 22.5mm 15mm 22.5mm;
  }
}
</style>