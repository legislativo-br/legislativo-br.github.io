import React from 'react';
import styled from 'styled-components';
import { PageContainer, Container, Content } from '../../styles';
import StatesList from './components/StatesList';

const ContainerPage = styled(PageContainer)`
  background-color: #34314d;
  color: white;
`;

const StatesPage = () => {
  return (
    <ContainerPage>
      <Container max="800px">
        <section>
          <Content>
            <h1> Visão por Estado </h1>

            <p>
              O objetivo desta visualização é mostrar, por Estado, a quantidade
              de deputados que foram eleitos com votos acima do Quociente
              Eleitoral em comparação com a quantidade de cadeiras disponíveis
              no pleito.
            </p>
          </Content>
          <br />
          <StatesList />
        </section>
      </Container>
    </ContainerPage>
  );
};

export default StatesPage;
