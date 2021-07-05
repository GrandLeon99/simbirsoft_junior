import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: { name: 'PageTeams' },
  },
  {
    path: '/competitions',
    name: 'PageCompetitions',
    component: () => import('../views/PageCompetitions.vue'),
    meta: {
      title: 'Список лиг',
    },
    query: {
      search: '',
      dateStart: '',
      dateEnd: '',
    },
  },
  {
    path: '/teams',
    name: 'PageTeams',
    component: () => import('../views/PageTeams.vue'),
    meta: {
      title: 'Список команд',
    },
    query: {
      search: '',
      dateStart: '',
      dateEnd: '',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
