import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import { makeRouter } from './router';
import type { EventBus } from './shared/eventBus';

declare global {
  interface Window {
    eventBus?: EventBus;
  }
}

export default function makeMicroAppTwo(mountPoint: string) {
  const app = createApp(App);

  app.use(createPinia());
  app.use(makeRouter());

  app.mount(`#${mountPoint}`);

  return app;
}
