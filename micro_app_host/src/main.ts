import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { EventBus } from './shared/eventBus';

Vue.config.productionTip = false;

declare global {
  interface Window {
    eventBus?: EventBus;
  }
}

window.eventBus = new EventBus();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
