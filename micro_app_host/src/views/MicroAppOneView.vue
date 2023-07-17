<template>
  <!-- We have to place the application within a div because if the application exists
  at the root level of the template, Vue cannot unmount the HTML element when
  you navigate away. -->
  <div>
    <div :id="appId"></div>
  </div>
</template>

<script>
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
      return 'microAppOneElement';
    },
    appExists() {
      // We check for the existence of the app in the Window global scope
      const result = window.microAppOne !== undefined;

      return result;
    },
  },
  methods: {
    mountApplication() {
      // We run the app function, which mounts to an ID that is provided.
      this.app = window?.microAppOne?.(this.appId);
    },
    mountScript() {
      // Micro App One appends the application to the Window global scope.
      // We create a script tag, provide the source, append it to the head,
      // and then wait for the script to load before we mount the application.
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
    // We explicitly destroy the app when the component is destroyed.
    this.app?.$destroy();
  },
};
</script>
