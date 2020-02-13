<template>
  <div class="chairs">
    <p>
      <i class="fas fa-user-tie" />

      <span> Votos: {{ votes }} votos </span>
    </p>

    <p>
      <i class="fas fa-vote-yea" />

      <span> QE: {{ quotient }} votos </span>
    </p>

    <p>
      <i class="fas fa-chair" />

      <span> {{ chars }} cadeiras </span>
    </p>

    <p class="selected">
      <i class="fas fa-chair" />

      <span> {{ notPulling }} deputado(s) </span>
    </p>
  </div>
</template>

<script>
import { formatNumber } from '../suport/utils'

export default {
  name: 'CChairs',
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
    },
    quotient() {
      return formatNumber(this.state.election_quotient)
    },
    votes() {
      return formatNumber(this.state.nominal_votes + this.state.legend_votes)
    }
  }
}
</script>

<style lang="scss">
.chairs {
  font-size: 1.3rem;
  display: inline-flex;
  flex-direction: column;

  p:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }

  p.selected {
    color: $accent;
  }

  .icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
  }
}
</style>
