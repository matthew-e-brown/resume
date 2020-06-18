<template>
  <main>
    <ContactGrid :contact="resume.contact" />
    <Section title="Skills"></Section>
    <Section title="Education"></Section>
    <Section title="Working Experience"></Section>
    <Section title="Other Achievements"></Section>
  </main>
</template>

<script>
import ResumeData from '@/resume-data';
import Section from '@/components/ResumeSection';
import ContactGrid from '@/components/ContactGrid';

export default {
  name: 'Resume',
  components: { Section, ContactGrid },
  data: function() {
    return {
      resume: ResumeData
    }
  }
}
</script>
