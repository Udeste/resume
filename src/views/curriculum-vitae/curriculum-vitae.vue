<template>
  <div id="curriculum-vitae">
    <div class="header">
      <information></information>
    </div>
    <div class="body flex flex-row">
      <div class="flex flex-col">
        <about class="p-r-10"></about>
        <certifications class="p-r-10"></certifications>
      </div>
      <div class="flex flex-col">
        <work-experiences></work-experiences>
        <educations id="educations"></educations>
      </div>
    </div>
  </div>
</template>

<script>
import About from './about.vue';
import Information from './information.vue';
import Educations from './educations/educations.vue';
import Certifications from './certifications/certifications.vue';
import WorkExperiences from './work-experiences/work-experiences.vue';

export default {
  name: 'CurriculumVitae',
  components: {
    About,
    Information,
    Educations,
    Certifications,
    WorkExperiences
  }
};
</script>
<style lang="scss" scoped>
#curriculum-vitae {
  width: 800px;
  margin: 50px auto;
  position: relative;
}
</style>
