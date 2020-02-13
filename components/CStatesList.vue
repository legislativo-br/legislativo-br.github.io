<template>
  <div class="states-list">
    <CStateCard v-for="(state, key) in statesData" :key="key" :state="state" />
  </div>
</template>

<script>
import CStateCard from '../components/CStateCard'

export default {
  name: 'CStatesList',
  components: { CStateCard },
  props: {
    statesData: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.states-list {
  width: 100%;

  .state-card:not(:first-of-type) {
    margin-top: 1rem;
  }
}
</style>
