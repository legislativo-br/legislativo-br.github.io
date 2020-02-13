<template>
  <section class="section container content text-center">
    <div>
      <h2>Quem teve mais votos que o Quociente Eleitoral</h2>

      <!-- filter -->

      <div class="candidates-list">
        <CCandidateCard
          v-for="(candidate, key) in candidates"
          :key="key"
          :candidate="candidate"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { orderBy } from 'lodash'
import CCandidateCard from './CCandidateCard'

export default {
  name: 'CCandidatesList',
  components: {
    CCandidateCard
  },
  props: {
    candidatesData: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    orderColumn: 'votes',
    order: 'desc'
  }),
  computed: {
    candidates() {
      return orderBy(this.candidatesData, [this.orderColumn], [this.order])
    }
  }
}
</script>

<style lang="scss">
.candidates-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin: 1rem auto;
  max-width: 920px;

  @media screen and (max-width: 552px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 553px) and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
