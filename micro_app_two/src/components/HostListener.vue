<template><span></span></template>

<script>
import { myQNavEventName } from '@/shared/eventBus';

// Look at micro_app_one's HostListener commentary to understand this component.

export default {
  data() {
    return {};
  },
  methods: {
    onNavChange(ev) {
      setTimeout(() => {
        const $route = this.$route;
        const fullPath = ev?.fullPath;

        if (typeof fullPath !== 'string') {
          return;
        }

        const theSame = fullPath === $route.fullPath;

        if (!theSame) {
          this.$router.push(fullPath);
        }
      }, 0);
    },
    onAppDataChange() {
      console.log('App 2 onAppDataChange!');
    },
  },
  mounted() {
    window.eventBus?.subscribe(myQNavEventName, this.onNavChange);
    window.eventBus?.subscribe('appDataChange', this.onAppDataChange);
  },
  beforeUnmount() {
    window.eventBus?.unsubscribe(myQNavEventName, this.onNavChange);
    window.eventBus?.unsubscribe('appDataChange', this.onAppDataChange);
  },
};
</script>
