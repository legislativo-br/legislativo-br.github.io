<template>
  <div class="state-card">
    <div class="column">
      <div class="state-card-title">
        <h2>{{ state.name }}</h2>
      </div>

      <CChairs :state="state" />
    </div>

    <div class="column">
      <CPictogram :chars="chars" :selected="notPulling" inverted />
    </div>
  </div>
</template>

<script>
import CChairs from './CChairs'
import CPictogram from './CPictogram'

export default {
  name: 'CStateCard',
  components: { CChairs, CPictogram },
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    chars() {
      return this.state.chars
    },
    notPulling() {
      return this.state.not_pulling_qty
    }
  }
}
</script>

<style lang="scss">
.state-card {
  width: 100%;
  display: flex;
  padding: 1rem 1.2rem;
  background-color: $primary-dark;
  border-radius: $card-radious;
  box-shadow: $box-shadow;

  .column {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (max-width: 552px) {
    display: block;

    .column {
      width: 100%;
    }

    .column:first-of-type {
      margin-bottom: 1rem;
    }
  }

  .state-card-title {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 0.5rem;
  }
}
</style>
