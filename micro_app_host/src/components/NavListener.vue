<template><span></span></template>

<script>
import { myQNavEventName } from '@/shared/eventBus';

/**
 * The host listener listens to events from the clients.
 */
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
  },
  mounted() {
    window.eventBus?.subscribe(myQNavEventName, this.onNavChange);
  },
  beforeDestroy() {
    window.eventBus?.unsubscribe(myQNavEventName, this.onNavChange);
  },
};
</script>
