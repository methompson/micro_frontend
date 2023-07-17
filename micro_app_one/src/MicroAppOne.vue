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
      'getAppDataFromLocalStorage',
      'getMicroAppDataFromLocalStorage',
    ]),
  },
  created() {
    this.getAppDataFromLocalStorage();
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
