<template>
  <div class="about">
    <div>About Page</div>

    <div>
      <button @click="setNewOrgId">Set Org Id</button>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['setOrgId']),
    setNewOrgId() {
      this.setOrgId(uuidv4());
    },
  },
};
</script>
