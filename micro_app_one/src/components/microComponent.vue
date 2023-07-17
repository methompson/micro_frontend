<template>
  <div>
    <div>Micro Component</div>
    <div><button @click="setRandomValue">Set Random Value</button></div>
    <div>Random Value: {{ randomValue }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      randomValue: 'randomValue',
    }),
  },
  methods: {
    ...mapActions({
      setRandomValue: 'setRandomValue',
    }),
  },
};
</script>
