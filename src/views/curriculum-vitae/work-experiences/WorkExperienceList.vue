<template>
  <div>
    <h1>Work experience</h1>
    <WorkExperienceEntry
      v-for="experience in workExperience"
      :key="experience.title"
      :experience="experience"
    />
  </div>
</template>

<script setup>
import WorkExperienceEntry from './WorkExperienceEntry.vue';
import { useStore } from 'vuex'

const store = useStore()

const { workExperience } = store.state.cv;
</script>
