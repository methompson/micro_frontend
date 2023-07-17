<template>
  <div>
    <div :id="appId"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      app: undefined,
    };
  },
  computed: {
    appId() {
      return 'microAppOneElement';
    },
    appExists() {
      const result = window.microAppOne !== undefined;

      return result;
    },
  },
  methods: {
    mountApplication() {
      this.app = window?.microAppOne?.(this.appId);
    },
    mountScript() {
      const script = document.createElement('script');
      script.src = 'http://localhost:8081/main.js';

      document.querySelector('head').appendChild(script);
      script.addEventListener('load', () => {
        this.mountApplication();
      });
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
    this.app?.$destroy();
  },
};
</script>
