<script setup>
import { computed, onBeforeUnmount, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

import HostListener from './components/HostListener.vue';
import HelloWorld from './components/HelloWorld.vue';
import { routePrefix } from './router';

const route = computed(() => routePrefix);

const appOn = ref(true);

// This sets appOn to false. The idea was that this trigger's the unmount lifecycle
// function in child components. I'm not sure if this is required or not
onBeforeUnmount(() => {
  appOn.value = false;
});
</script>

<template>
  <!-- Using a v-if here to attempt to unmount all components that
  have event hooks attached to them. -->
  <span v-if="appOn" span>
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />

        <nav>
          <RouterLink :to="`${routePrefix}/`">Home</RouterLink>
          <RouterLink :to="`${routePrefix}/about`">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />

    <HostListener />
  </span>
  <span v-else></span>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
