import React from 'react';
import styled from 'styled-components';
import {
  PageContainer,
  Container,
  Content,
  Section as SectionBase
} from '../../styles';
import StatesList from './components/StatesList';

const ContainerPage = styled(PageContainer)`
  background-color: #34314D;
  color: white;
`;

const Section = styled(SectionBase)`
  max-width: 800px;
  margin: 0 auto;
`;

const StatesPage = () => {
  return (
    <ContainerPage>
      <Container>
        <Section>
          <Content>
            <h1> Visão por Estado </h1>

            <p> O objetivo desta visualização é mostrar, por Estado, a quantidade de deputados que foram eleitos com votos acima do Quociente Eleitoral em comparação com a quantidade de cadeiras disponíveis no pleito. </p>
          </Content>
          <br />
          <StatesList />
        </Section>
      </Container>
    </ContainerPage>
  )
}

export default StatesPage;
