import { createRouter, createWebHistory, type Router } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { myQNavEventName } from '@/shared/eventBus';

export const routePrefix = '/microAppTwo';

export function makeRouter(): Router {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: `${routePrefix}/`,
        name: 'home',
        component: HomeView,
      },
      {
        path: `${routePrefix}/about`,
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/AboutView.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'wildcard',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/AboutView.vue'),
      },
    ],
  });

  router.afterEach((to) => {
    window.eventBus?.emit(myQNavEventName, { fullPath: to.fullPath });
  });

  return router;
}
