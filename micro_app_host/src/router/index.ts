import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import { myQNavEventName } from '@/shared/eventBus';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/AboutView.vue'),
  },
  {
    path: '/microAppOne',
    name: 'microAppOne',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/MicroAppOneView.vue'),
  },
  {
    path: '/microAppOne/*',
    name: 'microAppOneWildcard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/MicroAppOneView.vue'),
  },
  {
    path: '/microAppTwo',
    name: 'microAppTwo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/MicroAppTwoView.vue'),
  },
  {
    path: '/microAppTwo/*',
    name: 'microAppTwoWildcard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/MicroAppTwoView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to, from) => {
  // console.log('Route has changed', to, from);
  window.eventBus?.emit(myQNavEventName, { fullPath: to.fullPath });
  // dispatchMyQNavEvent(to.fullPath);
});

export default router;
