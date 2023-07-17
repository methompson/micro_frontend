<template>
  <div id="app">
    <div>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/microAppOne">Microapp</router-link> |
        <router-link to="/microAppOne/microComponent"
          >Microapp Random</router-link
        >
        | <router-link to="/microAppTwo">Microapp 2</router-link> |
        <router-link to="/microAppTwo/about">Microapp 2 About</router-link> |
      </nav>

      <div>
        <button @click="setNewOrgId">Set Org Id</button>
      </div>
    </div>
    <router-view />

    <NavListener />
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { mapActions } from 'vuex';

import NavListener from '@/components/NavListener.vue';

export default {
  name: 'App',
  components: {
    NavListener,
  },
  methods: {
    ...mapActions(['setOrgId']),
    setNewOrgId() {
      this.setOrgId(uuidv4());
    },
  },
};
</script>

<style>
#app {
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
