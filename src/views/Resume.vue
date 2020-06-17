<template>
  <main>
    <Section title="Skills"></Section>
    <Section title="Education"></Section>
    <Section title="Working Experience"></Section>
    <Section title="Other Achievements"></Section>
  </main>
</template>

<script>
import Section from '@/components/ResumeSection';

export default {
  name: 'Resume',
  components: { Section }
}
</script>
