import Vue from 'vue';
import Router from 'vue-router';
import CurriculumVitae from '@/views/curriculum-vitae/curriculum-vitae.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'curriculum-vitae',
      component: CurriculumVitae
    }
  ]
});
