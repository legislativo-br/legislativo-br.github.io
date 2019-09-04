import React from 'react';
import { PageContainer, Container, Content, Section } from '../../styles';
import StatesList from './components/StatesList';

const StatesPage = () => {
  return (
    <PageContainer>
      <Container>
        <Section>
          <Content>
            <h1> Visão por Estado </h1>

            <p> O objetivo desta visualização é mostrar, por Estado, a quantidade de deputados que foram eleitos com votos acima do Quociente Eleitoral. </p>
          </Content>
          <br />
          <StatesList />
        </Section>
      </Container>
    </PageContainer>
  )
}

export default StatesPage;
