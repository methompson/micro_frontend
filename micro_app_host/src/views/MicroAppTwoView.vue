<template>
  <div>
    <div :id="appId"></div>
  </div>
</template>

<script>
// import { defineAsyncComponent } from 'vue';

/**
 * We save the app to a variable so we can destroy it when the component is destroyed.
 * We have to explicitly destroy the app because the app doesn't automatically destroy
 * just because it's unmounted.
 */
export default {
  data() {
    return {
      app: undefined,
    };
  },
  computed: {
    appId() {
      return 'microAppTwoElement';
    },
    appExists() {
      // We check for the existence of the app in the Window global scope
      const result = window.microAppTwo !== undefined;

      return result;
    },
  },
  methods: {
    mountApplication() {
      // We run the app function, which mounts to an ID that is provided.
      const result = window?.microAppTwo?.(this.appId);

      this.app = result;
    },
    async mountScript() {
      /**
       * Vue3 + Vite doesn't bundle css in javascript, so we have to load
       * the css separately. A better option for the application is to
       * deep scop the CSS in the root component for the application.
       */
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = 'http://localhost:8001/style.css';
      document.querySelector('head').appendChild(style);

      // Vue provides this, but I don't know if we need to use this.
      // const js = defineAsyncComponent(() =>
      //   import('http://localhost:8001/microAppTwo.js'),
      // );

      /**
       * MicroAppTwo is an ES Module. We can't just append a script tag to the head
       * and expect it to work. We have to import the module, and then add the
       * mount function to the Window global scope.
       */
      const result = await import('http://localhost:8001/microAppTwo.js');
      window.microAppTwo = result.default;
      this.mountApplication();
    },
  },
  mounted() {
    if (this.appExists) {
      this.mountApplication();
    } else {
      this.mountScript();
    }
  },
  beforeDestroy() {
    // We explicitly unmount the app when the component is destroyed.
    // console.log('beforeDestroy app', this.app);
    this.app?.unmount();
  },
};
</script>
