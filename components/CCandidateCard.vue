<template>
  <CCard :title="candidate.urne_name">
    <p>{{ votes }} votos</p>

    <CChips>
      <CChip :label="number" icon="fas fa-vote-yea" />
      <CChip :label="sigla" icon="fas fa-flag" />
      <CChip :label="state" icon="fas fa-map-marker-alt" />
    </CChips>
  </CCard>
</template>

<script>
import { formatNumber } from '../suport/utils'
import CCard from './CCard'
import CChip from './CChip'
import CChips from './CChips'

export default {
  name: 'CCandidateCard',
  components: {
    CCard,
    CChip,
    CChips
  },
  props: {
    candidate: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    name() {
      return this.candidate.name || ''
    },
    votes() {
      return formatNumber(this.candidate.votes)
    },
    number() {
      return this.candidate.number
    },
    sigla() {
      return this.candidate.sigla_party
    },
    state() {
      return this.candidate.state_sigla
    }
  }
}
</script>
