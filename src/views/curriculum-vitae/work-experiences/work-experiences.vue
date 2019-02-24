<template>
  <div>
    <h1>work experience</h1>
    <work-experience
      v-for="experience in experiences"
      :key="experience.title"
      :experience="experience"
    ></work-experience>
  </div>
</template>

<script>
import WorkExperience from './work-experience.vue';

export default {
  name: 'WorkExperiences',
  components: {
    WorkExperience
  },
  computed: {
    experiences() {
      return this.$store.state.cv.experiences;
    }
  }
};
</script>
