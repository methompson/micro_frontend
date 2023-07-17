<template>
  <div id="microApp1">
    <nav>
      <router-link :to="`${routePrefix}/`">Home</router-link> |
      <router-link :to="`${routePrefix}/about`">About</router-link> |
      <router-link :to="`${routePrefix}/microComponent`"
        >Micro Random</router-link
      >
      |
      <router-link :to="`${routePrefix}/badLink`">Bad Link</router-link>
    </nav>

    Micro Application One (using Vue 2)!

    <router-view />

    <HostListener />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import HostListener from '@/components/HostListener.vue';
import { routePrefix } from './router';

// We 'namespace' our application by using the routePrefix. This allows us to
// route directly to this application without having to worry about conflicting
// routes with the host application.

export default {
  name: 'MicroAppOne',
  components: {
    HostListener,
  },
  computed: {
    routePrefix() {
      return routePrefix;
    },
  },
  methods: {
    ...mapActions([
      'getHostDataFromLocalStorage',
      'getMicroAppDataFromLocalStorage',
    ]),
  },
  created() {
    // on creation, we get data from the local storage from the host app.
    // we also get the data for this micro app from the local storage.
    // This allows the user to navigate away from this application and come back
    // without losing their data or progress.
    this.getHostDataFromLocalStorage();
    this.getMicroAppDataFromLocalStorage();
  },
};
</script>

<style>
#microApp1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
