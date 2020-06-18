<template>
  <main>
    <ResumeSection title="Skills">
      <ResumeSubsection
        v-for="([subsection, content], i) in Object.entries(resume.skills)"
        :header="subsection"
        :body="content"
        :key="i"
      />
    </ResumeSection>

    <ResumeSection title="Education">
      
    </ResumeSection>

    <ResumeSection title="Working Experience">

    </ResumeSection>

    <ResumeSection title="Other Achievements">

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
