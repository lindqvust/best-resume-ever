import Vue from 'vue';
import Router from 'vue-router';
import Resume from '../pages/resume.vue';
import Home from '../pages/home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/resume/:resumeid',
      name: 'resume',
      component: Resume,
    },
  ],
});
