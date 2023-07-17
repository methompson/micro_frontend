<template><span></span></template>

<script>
import { mapActions } from 'vuex';

import { myQNavEventName } from '@/shared/eventBus';

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(['getAppDataFromLocalStorage']),
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
      this.getAppDataFromLocalStorage();
    },
  },
  mounted() {
    // window.addEventListener(myQNavEventName, this.onNavChange);
    window.eventBus?.subscribe(myQNavEventName, this.onNavChange);
    window.eventBus?.subscribe('appDataChange', this.onAppDataChange);
  },
  beforeDestroy() {
    // window.removeEventListener(myQNavEventName, this.onNavChange);
    window.eventBus?.unsubscribe(myQNavEventName, this.onNavChange);
    window.eventBus?.unsubscribe('appDataChange', this.onAppDataChange);
  },
};
</script>
