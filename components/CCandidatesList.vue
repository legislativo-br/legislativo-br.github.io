<template>
  <section class="section container content text-center">
    <div>
      <h2>Quem teve mais votos que o Quociente Eleitoral</h2>

      <CCandidatesFilter
        @select-state="onSelectState"
        @select-party="onSelectParty"
        @filter-name="onFilterByName"
      />

      <div v-if="hasCandidates" class="candidates-list">
        <CCandidateCard
          v-for="(candidate, key) in candidates"
          :key="key"
          :candidate="candidate"
        />
      </div>

      <div v-else>
        <br />
        <p>
          Não candidatos com votos maiores que o Quociente Eleitoral dado o
          filtro acima
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import orderBy from 'lodash/orderBy'
import filter from 'lodash/filter'
import CCandidateCard from './CCandidateCard'
import CCandidatesFilter from './CCandidatesFilter'

export default {
  name: 'CCandidatesList',
  components: {
    CCandidatesFilter,
    CCandidateCard
  },
  props: {
    candidatesData: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    state: '',
    party: '',
    name: ''
  }),
  computed: {
    candidates() {
      const data = orderBy(this.candidatesData, ['votes'], ['desc'])

      if (this.filtersData) {
        return this.processByName(filter(data, this.filtersData))
      }

      return this.processByName(data)
    },
    filtersData() {
      const opts = {}

      if (this.state) {
        opts.state_sigla = this.state
      }

      if (this.party) {
        opts.sigla_party = this.party
      }

      return opts
    },
    hasCandidates() {
      return this.candidates.length > 0
    }
  },
  methods: {
    onSelectState(state) {
      this.state = state
    },
    onSelectParty(party) {
      this.party = party
    },
    onFilterByName(name) {
      this.name = name
    },
    processByName(data) {
      if (this.name) {
        return data.filter((item) => {
          const name = item.name.toLowerCase()
          const substr = this.name.toLowerCase()

          return name.includes(substr)
        })
      }

      return data
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
