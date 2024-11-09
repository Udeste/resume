import CurriculumVitae from '@/views/curriculum-vitae/curriculumVitae.vue';
import { createMemoryHistory, createRouter } from 'vue-router'

export default createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'curriculum-vitae',
      component: CurriculumVitae
    }
  ]
});
