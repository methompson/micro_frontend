/* eslint-disable @typescript-eslint/no-inferrable-types */
import Vue from 'vue';
import MicroAppOne from './MicroAppOne.vue';
import router from './router';
import store from './store';
import { EventBus } from './shared/eventBus';

// This declaration allows us to tell the application that there is a global variable called eventBus
// that is of type EventBus. This is needed because we are using the eventBus to communicate between
// the host and client applications.
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

// If we want to run the app in development mode, we can uncomment the following line
// if (process.env.NODE_ENV === 'development') {
// makeMicroApp();
// }
