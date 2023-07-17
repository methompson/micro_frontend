import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import { myQNavEventName } from '@/shared/eventBus';

Vue.use(VueRouter);

export const routePrefix = '/microAppOne';

/**
 * Each route is prefixed with the routePrefix. This essentially namespaces the routes
 * so that they don't conflict with the host application's routes.
 */
const routes: Array<RouteConfig> = [
  {
    path: `${routePrefix}/`,
    name: 'home',
    component: Home,
  },
  {
    path: `${routePrefix}/about`,
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/MA1About.vue'),
  },
  {
    path: `${routePrefix}/microComponent`,
    name: 'Micro Component',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/components/microComponent.vue'),
  },
  {
    path: '/*',
    name: 'wildcard',
    component: Home,
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
  window.eventBus?.emit(myQNavEventName, {
    fullPath: to.fullPath,
  });
});

export default router;
