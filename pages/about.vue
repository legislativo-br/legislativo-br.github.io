<template>
  <section class="page-container section content">
    <h1>Um pouco mais a respeito do projeto</h1>

    <div>
      <p>
        O projeto &lsquo;Como meu deputado foi eleito?&rsquo; tem como objetivo
        trazer para o eleitor a possibilidade de pesquisar de maneira rápida se
        o candidato em que votou para Deputado Federal foi eleito nominalmente,
        ou, devido ao sistema eleitoral, pelo voto do candidato mais eleito do
        partido ou coligação
      </p>

      <p>
        A motivação para construir esse site se dá pelo fato de que muitas
        pessoas não conhecem o Sistema Proporcional usado para eleição dos
        cargos de Deputado e Vereador. Sendo assim, ele tem como objetivo
        possibilitar um acesso ao dado de quantos deputados foram eleitos
        possuindo uma quantidade de votos superior ao Quociente Eleitoral.
      </p>

      <p>
        O cálculo para o Quociente Eleitoral é simples: basta pegar a quantidade
        de votos nominais (votos em candidatos específicos ou no partido - voto
        em legenda) e dividir pela quantidade de cadeiras que o Estado tem
        direito a possuir. Este projeto, portanto, vem para mostrar quais
        deputados possuíram votação tão expressiva que conseguiram quantidade
        maior de votos que o Quociente Eleitoral do Estado ao qual concorriam.
      </p>

      <p>
        Para mais informações a respeito do Sistema Proporcional, recomendam-se
        as seguintes referências:
      </p>

      <ul>
        <li>
          <a
            href="https://www.politize.com.br/deputados-como-sao-eleitos/"
            title="Confira o material do Politize sobre o sistema proporcional"
            target="blank"
          >
            Material do Politize</a
          >
        </li>
        <li>
          <a
            href="https://www.camara.leg.br/noticias/544742-deputados-sao-eleitos-pelo-sistema-proporcional-veja-como-funciona/"
            title="Confira o material oficial da Câmara sobre o sistema proporcional"
            target="blank"
          >
            Material da Congresso Nacional</a
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style></style>
