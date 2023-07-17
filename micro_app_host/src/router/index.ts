import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import { myQNavEventName } from '@/shared/eventBus';

Vue.use(VueRouter);

/**
 * Each route for an external application is prefixed with the name of the application.
 */

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

/**
 * This is a global after hook that will be called after every route change.
 * It will emit an event to the eventBus that will be picked up by the host application and
 * all other client applications. This is how we will keep the navigation in sync between
 * all of the applications.
 */
router.afterEach((to, from) => {
  // console.log('Route has changed', to, from);
  window.eventBus?.emit(myQNavEventName, { fullPath: to.fullPath });
});

export default router;
