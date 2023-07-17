<template><span></span></template>

<script>
import { mapActions } from 'vuex';

import { myQNavEventName } from '@/shared/eventBus';

/**
 * The host listener listens to events from the host or other clients. It
 * reacts to navigation changes and app data changes.
 */

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(['getHostDataFromLocalStorage']),
    onNavChange(ev) {
      // We use a timeout to make sure the router is ready to handle the
      // navigation change. Otherwise, we might get an error. This pulls
      // the function out of the event loop.
      setTimeout(() => {
        const $route = this.$route;
        const fullPath = ev?.fullPath;

        if (typeof fullPath !== 'string') {
          return;
        }

        // We compare the current route to the full path from the event.
        // If they're different, we "navigate" with the application's router.
        const theSame = fullPath === $route.fullPath;

        if (!theSame) {
          this.$router.push(fullPath);
        }
      }, 0);
    },
    onAppDataChange() {
      this.getHostDataFromLocalStorage();
    },
  },
  mounted() {
    // We subscribe to the event bus to listen for navigation changes and
    // app data changes.
    window.eventBus?.subscribe(myQNavEventName, this.onNavChange);
    window.eventBus?.subscribe('appDataChange', this.onAppDataChange);
  },
  beforeDestroy() {
    // We unsubscribe from the event bus when the component is destroyed.
    window.eventBus?.unsubscribe(myQNavEventName, this.onNavChange);
    window.eventBus?.unsubscribe('appDataChange', this.onAppDataChange);
  },
};
</script>
