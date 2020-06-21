import Vue from 'vue';
import VueRouter from 'vue-router';
import Resume from '@/views/Resume.vue';

import { name } from '@/resume';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Resume',
    component: Resume,
    beforeEnter: (to, from, next) => { document.title = `${name} | Resume`; next(); },
    production: true
  },
  {
    path: '/cover-letter',
    name: 'CoverLetter',
    component: () => import('../views/CoverLetter'),
    beforeEnter: (to, from, next) => { document.title = `${name} | Cover Letter`; next(); },
    production: false // Hide the cover-letter when deployed. Only when hosting locally.
  }
];

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: process.env.NODE_ENV === 'production' ? routes.filter(r => r.production) : routes
});