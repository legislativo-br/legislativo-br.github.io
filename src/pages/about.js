import React from 'react';
import styled from 'styled-components';
import { Text, PageContainer, Content } from '../styles';

const Container = styled(PageContainer)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem 2rem 2rem;
  text-align: center;

  i {
    font-size: 3rem;
  }

  .button {
    position: absolute;
    top: 5px;
    left: 5px;
  }

  @media (max-width: 600px) {
    padding: 2rem 1rem 1rem;
  }
`;

export default () => {
  window.scrollTo(0, 0)

  return (
    <Container>
      <Content center>
        <h1> Conheça o projeto </h1>

        <Text>
          <p> O projeto "Como meu deputado foi eleito?" tem como objetivo trazer para o eleitor a possibilidade de pesquisar de maneira rápida se o candidato em que votou para Deputado Federal foi eleito nominalmente, ou, devido ao sistema eleitoral, pelo voto do candidato mais eleito do partido ou coligação </p>

          <p> A motivação para construir esse site se dá pelo fato de que muitas pessoas não conhecem o Sistema Proporcional usado para eleição dos cargos de Deputado e Vereador. Sendo assim, ele tem como objetivo possibilitar um acesso ao dado de quantos deputados foram eleitos possuindo uma quantidade de votos superior ao Quociente Eleitoral. </p>

          <p> O cálculo para o Quociente Eleitoral é simples: basta pegar a quantidade de votos nominais (votos em candidatos específicos ou no partido - voto em legenda) e dividir pela quantidade de cadeiras que o Estado tem direito a possuir. Este projeto, portanto, vem para mostrar quais deputados possuíram votação tão expressiva que conseguiram quantidade maior de votos que o Quociente Eleitoral do Estado ao qual concorriam. </p>
        </Text>
      </Content>
    </Container>
  )
}
