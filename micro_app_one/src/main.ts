/* eslint-disable @typescript-eslint/no-inferrable-types */
import Vue from 'vue';
import MicroAppOne from './MicroAppOne.vue';
import router from './router';
import store from './store';
import { EventBus } from './shared/eventBus';

declare global {
  interface Window {
    eventBus?: EventBus;
  }
}

export default function makeMicroApp(mountPoint: string = 'microApp1') {
  Vue.config.productionTip = false;

  return new Vue({
    router,
    store,
    render: (h) => h(MicroAppOne),
  }).$mount(`#${mountPoint}`);
}

// if (process.env.NODE_ENV === 'development') {
// makeMicroApp();
// }
