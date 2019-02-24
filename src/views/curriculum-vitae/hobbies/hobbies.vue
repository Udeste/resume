<template>
  <div id="work-experiences">
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
<style lang="scss" scoped>
#work-experiences {
  position: absolute;
  right: 0;
  width: 60%;
  h1 {
    border-bottom: 2px solid #ffb400;
  }
}
</style>
