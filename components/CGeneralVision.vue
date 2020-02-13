<template>
  <section class="general-vision">
    <div class="container content text-center">
      <h2>Proporção geral dos Deputados Federais</h2>
      <p>
        A seguir, um gráfico que mostra a proporção de cadeiras ocupadas por
        deputados eleitos nominalmente ou por
        <a
          class="link is-inverted"
          href="http://www.tse.jus.br/eleitor-e-eleicoes/eleitor/glossario/termos/quociente-eleitoral"
          title="Acesse a explicação do TSE a respeito do termo Quociente Eleitoral"
          >Quociente Eleitoral</a
        >. Sendo assim, dos <span class="mark-white">513</span> lugares
        disputados, apenas <span class="mark-white">26</span> foram ocupados por
        candidatos que conseguiram se eleger obtendo mais votos que o Quociente
        Eleitoral. Isso representa apenas <span class="mark-white">5%</span> das
        cadeiras no Congresso Nacional.
      </p>

      <div class="pictogram-container">
        <CPictogram :chars="100" :selected="proportion" inverted />
      </div>

      <nuxt-link class="button is-secondary" to="/states">
        Veja os dados por Estado
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import CPictogram from '../components/CPictogram'

export default {
  name: 'CGeneralVision',
  components: {
    CPictogram
  },
  props: {
    summaryData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    currentData() {
      return this.summaryData[0]
    },
    proportion() {
      const { not_pulling_qty: notPulling, chars } = this.currentData
      return Math.floor((notPulling / chars) * 100)
    }
  }
}
</script>

<style lang="scss">
.general-vision {
  background-color: $primary;
  color: $white;
  padding: 2rem 1.25rem;

  .pictogram-container {
    max-width: 500px;
    margin: 2rem auto;
  }

  .container {
    max-width: 700px;
  }
}
</style>
