<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div>Micro App 1</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class HomeView extends Vue {}
</script>
