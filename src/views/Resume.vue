<template>
  <main>
    <ResumeSection title="Skills"></ResumeSection>
    <ResumeSection title="Education"></ResumeSection>
    <ResumeSection title="Working Experience"></ResumeSection>
    <ResumeSection title="Other Achievements"></ResumeSection>
  </main>
</template>

<script>
import ResumeData from '@/resume-data';
import ResumeSection from '@/components/ResumeSection';

export default {
  name: 'Resume',
  components: { ResumeSection },
  data: function() {
    return {
      resume: ResumeData
    }
  }
}
</script>
