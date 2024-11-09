<template>
  <div id="curriculum-vitae">
    <div class="header">
      <ContactInfo/>
    </div>
    <div class="body flex flex-row">
      <div class="flex flex-col">
        <Summary class="p-r-10"/>
        <Certifications class="p-r-10"/>
      </div>
      <div class="flex flex-col">
        <!-- <work-experiences></work-experiences> -->
        <EducationList id="education-list"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Summary from './Summary.vue';
import ContactInfo from './ContactInfo.vue';
import EducationList from './education/EducationList.vue';
import Certifications from './certifications/Certifications.vue';
import WorkExperiences from './work-experiences/work-experiences.vue';

</script>
<style lang="scss" scoped>
#curriculum-vitae {
  width: 800px;
  margin: 50px auto;
  position: relative;
}
</style>
