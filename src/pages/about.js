import React from 'react';
import styled from 'styled-components';
import Contributors from '../components/Contributors';

const Container = styled.main`
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
    padding: 1rem;
  }
`;

const Text = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default () => {
  return (
    <Container>
      <div>
        <i className="fas fa-vote-yea"></i>

        <h1> Conheça o projeto </h1>

        <Text>
          <p> O projeto "Como meu deputado foi eleito?" tem como objetivo trazer para o eleitor a possibilidade de pesquisar de maneira rápida se o candidato em que votou para Deputado Federal foi eleito nominalmente, ou, devido ao sistema eleitoral, pelo voto do candidato mais eleito do partido ou coligação </p>
        </Text>

        <Contributors />
      </div>
    </Container>
  )
}
