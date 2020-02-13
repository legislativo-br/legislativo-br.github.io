<template>
  <div class="home-page">
    <CBanner />

    <CHomeHeader />

    <CGeneralVision :summary-data="summaryData" />

    <CCandidatesList :candidates-data="candidatesData" />
  </div>
</template>

<script>
import CBanner from '../components/CBanner'
import CHomeHeader from '../components/CHomeHeader'
import CGeneralVision from '../components/CGeneralVision'
import CCandidatesList from '../components/CCandidatesList'

import candidatesData from '../data/candidates.json'
import summaryData from '../data/general-summary.json'

export default {
  name: 'IndexPage',
  components: {
    CBanner,
    CHomeHeader,
    CGeneralVision,
    CCandidatesList
  },
  data: () => ({
    candidatesData: JSON.parse(JSON.stringify(candidatesData)),
    summaryData: JSON.parse(JSON.stringify(summaryData))
  })
}
</script>
