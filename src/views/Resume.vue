<template>
  <main>
    <ResumeSection
      v-for="([header, section], i) in Object.entries(resume.body)"
      :title="header"
      :key="i"
    >
      <ResumeSubsection
        v-for="([subheader, content], j) in Object.entries(section)"
        :header="subheader"
        :content="content"
        :key="j"
      />
    </ResumeSection>
  </main>
</template>

<script>
import ResumeData from '@/resume-data';
import ResumeSection from '@/components/ResumeSection';
import ResumeSubsection from '@/components/ResumeSubsection';

export default {
  name: 'Resume',
  components: { ResumeSection, ResumeSubsection },
  data: function() {
    return {
      resume: ResumeData
    }
  }
}
</script>
