<template>
  <div>
    <div :id="appId"></div>
  </div>
</template>

<script>
// import microAppTwo from 'http://localhost:8001/microAppTwo.js';
import { defineAsyncComponent } from 'vue';

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
      const result = window.microAppTwo !== undefined;

      return result;
    },
  },
  methods: {
    mountApplication() {
      const result = window?.microAppTwo?.(this.appId);
      // console.log('mountApplication', result);
      this.app = result;
    },
    async mountScript() {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = 'http://localhost:8001/style.css';
      document.querySelector('head').appendChild(style);

      // const js = defineAsyncComponent(() =>
      //   import('http://localhost:8001/microAppTwo.js'),
      // );

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
    // console.log('beforeDestroy app', this.app);
    this.app?.unmount();
  },
};
</script>
