<template>
  <div class="candidates-filter">
    <CInput
      :value="name"
      @input="onInputName"
      label="Digite um nome de um deputado"
      name="deputado"
    />
    <CSelect
      :value="state"
      :options="stateOptions"
      @input="onSelectState"
      label="Selecione um estado"
      name="state"
    />

    <CSelect
      :value="party"
      :options="partyOptions"
      @input="onSelectParty"
      label="Selecione um partido"
      name="party"
    />
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import CandidatesData from '../data/candidates.json'
import StatesData from '../data/states-summary.json'
import CSelect from './CSelect'
import CInput from './CInput'

export default {
  name: 'CCandidatesFilter',
  components: {
    CSelect,
    CInput
  },
  data: () => ({
    state: '',
    party: '',
    name: '',
    partyOptions: CandidatesData.reduce((acc, candidate) => {
      if (acc[candidate.sigla_party]) {
        return acc
      }

      acc.push({
        label: candidate.sigla_party,
        value: candidate.sigla_party
      })

      return acc
    }, []),
    stateOptions: StatesData.map((state) => {
      return {
        label: state.name,
        value: state.sigla
      }
    })
  }),
  methods: {
    onSelectState(state) {
      this.state = state
      this.$emit('select-state', state)
    },
    onSelectParty(party) {
      this.party = party
      this.$emit('select-party', party)
    },
    onInputName: debounce(function(name) {
      this.name = name
      this.$emit('filter-name', name)
    }, 1000)
  }
}
</script>

<style lang="scss">
.candidates-filter {
  max-width: 920px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .field:first-child {
    flex: 1;
  }

  .field {
    margin-right: 4px;
  }

  @media screen and (max-width: 552px) {
    select {
      width: 100%;
    }
    & .field {
      margin-right: 0;
      margin-bottom: 0.5rem;
    }
  }
}
</style>
