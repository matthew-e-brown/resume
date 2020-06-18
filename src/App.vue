<template>
  <div id="page">
    <h1>{{ name }}</h1>
    <ContactGrid :contact="contact" />
    <router-view />
  </div>
</template>

<script>
import ResumeData from '@/resume-data';
import ContactGrid from '@/components/ContactGrid';

export default {
  name: 'Page',
  components: { ContactGrid },
  data: function() {
    return {
      name: ResumeData.name,
      contact: ResumeData.contact,
      prod: (process.env.NODE_ENV === 'production')
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Catamaran', sans-serif;
  font-weight: 900;
  font-size: 2.83em;
  color: var(--header1);
}
</style>

<style>
:root {
  --header1: rgb(0, 69, 134);
  --header2: rgb(0, 102, 204);
  --header3: rgb(118, 113, 113);
  --off-black: rgb(18, 13, 13);
}

:root {
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: var(--off-black);
  background-color: rgb(220, 236, 252);
}

/* Width: 8.5in / 1/72in per pt / 12pt per em */
/* Padding: 15mm, 22.5mm / (1/72 * 25.4mm) per pt / 12pt per em */
#page {
  box-sizing: border-box;
  width: 51rem;
  padding: 3.5433rem 5.3149rem;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
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
  a { text-decoration-line: none; }

  @page {
    width: 8.5in;
    height: 11in;
    margin: 15mm 22.5mm 15mm 22.5mm;
  }
}

h1, h2, h3, h4, h5, h6 {
  margin-block-start: 0;
  margin-block-end: 0;
}

a {
  color: var(--off-black);
  transition: color 125ms ease-in-out;
}

a:hover {
  color: rgb(0, 97, 209);
}

i {
  color: rgb(66, 63, 63);
}

main>* {
  margin: 0.85rem 0;
}

main>:last-child {
  margin-bottom: 0;
}
</style>