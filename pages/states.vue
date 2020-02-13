<template>
  <section class="page-container states-page">
    <div class="container content">
      <h1>Visão por Estado</h1>

      <p>
        O objetivo desta visualização é mostrar, por Estado, a quantidade de
        deputados que foram eleitos com votos acima do Quociente Eleitoral (QE)
        em comparação com a quantidade de cadeiras disponíveis no pleito. Tal
        quantidade estará demarcada com uma
        <span class="text-accent">cor</span> diferente nos cards abaixo.
      </p>

      <br />
      <CStatesList :states-data="statesData" />
    </div>
  </section>
</template>

<script>
import CStatesList from '../components/CStatesList'

import statesData from '../data/states-summary.json'

export default {
  name: 'StatesPage',
  components: { CStatesList },
  data: () => ({
    statesData: JSON.parse(JSON.stringify(statesData))
  })
}
</script>

<style lang="scss">
.states-page {
  background-color: $primary;
  color: $white;

  .container {
    max-width: 800px;
  }
}
</style>
