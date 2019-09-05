import React from 'react';
import { PageContainer, Container, Content } from '../styles';

const AboutPage = () => {
  window.scrollTo(0, 0);

  return (
    <PageContainer>
      <Container max="992px">
        <Content center>
          <h1> Conheça o projeto </h1>

          <div>
            <p>
              O projeto &lsquo;Como foi eleito meu deputado?&rsquo; tem como
              objetivo trazer para o eleitor a possibilidade de pesquisar de
              maneira rápida se o candidato em que votou para Deputado Federal
              foi eleito nominalmente, ou, devido ao sistema eleitoral, pelo
              voto do candidato mais eleito do partido ou coligação
            </p>

            <p>
              A motivação para construir esse site se dá pelo fato de que muitas
              pessoas não conhecem o Sistema Proporcional usado para eleição dos
              cargos de Deputado e Vereador. Sendo assim, ele tem como objetivo
              possibilitar um acesso ao dado de quantos deputados foram eleitos
              possuindo uma quantidade de votos superior ao Quociente Eleitoral.
            </p>

            <p>
              O cálculo para o Quociente Eleitoral é simples: basta pegar a
              quantidade de votos nominais (votos em candidatos específicos ou
              no partido - voto em legenda) e dividir pela quantidade de
              cadeiras que o Estado tem direito a possuir. Este projeto,
              portanto, vem para mostrar quais deputados possuíram votação tão
              expressiva que conseguiram quantidade maior de votos que o
              Quociente Eleitoral do Estado ao qual concorriam.
            </p>
          </div>
        </Content>
      </Container>
    </PageContainer>
  );
};

export default AboutPage;
