import React from 'react';
import styled from 'styled-components';
import Input from '../components/Input';

const Container = styled.main`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 1rem 1rem;
`;

export default () => {
  return (
    <Container>
      <h1 className="text-center"> Encontre seu deputado </h1>

      <Input
        label="Nome do deputado"
        helper="Digite as primeiras 6 letras para começar a busca"
      />
    </Container>
  )
}
