<template>
  <div id="mao"></div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

import MicroApp from '@/views/MicroApp.vue';

export default {
  name: 'MAO',
  components: {
    // MicroApp,
  },
  mounted() {
    const router = new VueRouter({
      mode: 'history',
      base: process.env.BASE_URL,
      routes: [],
    });
    new Vue({
      render: (h) => h(MicroApp),
    }).$mount('#mao');
  },
};
</script>
