<template>
  <section class="home-section">
    <div class="camara-photo">
      <figure>
        <img
          src="../assets/images/camara.jpg"
          alt="Foto da Câmara de Deputados do Brasil"
        />
      </figure>
    </div>
    <div class="camera-info">
      <div class="content">
        <p>
          O projeto &lsquo;Como meu deputado foi eleito?&rsquo; tem como
          objetivo trazer de maneira clara, dados das Eleições Federais de
          2018,a fim de informar a respeito do quantitativo de Deputados
          Federais que foram eleitos somente pelos seus votos, isto é, tendo
          mais votos que o
          <a
            class="link"
            href="http://www.tse.jus.br/eleitor/glossario/termos/quociente-partidario"
            title="Acesse a explicação do TSE a respeito do termo Quociente Partidário"
            >Quociente Partidário</a
          >
          do Estado em que se elegeram, e comparar o quantitativo em relação aos
          que foram &lsquo;puxados&lsquo;, isto é, eleitos com menos votos que o
          <a
            class="link"
            href="http://www.tse.jus.br/eleitor/glossario/termos/quociente-partidario"
            title="Acesse a explicação do TSE a respeito do termo Quociente Partidário"
            >Quociente Partidário</a
          >
          .
        </p>

        <br />

        <nuxt-link class="button is-primary" to="/about"
          >Conheça mais do projeto</nuxt-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CHomeHeader'
}
</script>

<style lang="scss">
.home-section {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
  background-color: $white;

  .camara-photo {
    display: inline-flex;
    align-items: center;
    flex: 1;
    max-width: 600px;

    img {
      border-radius: $card-radious;
      box-shadow: $box-shadow;
    }
  }

  .camera-info {
    display: inline-flex;
    align-items: center;
    flex: 1;
    padding: 1rem;
  }

  @media screen and (max-width: 768px) {
    display: block;
    padding: 2rem 1rem;

    .camera-info {
      padding: 1rem 0;
    }
  }
}
</style>
