import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import LinkButton from './Button';

const onHome = location => location.pathname === '/';

const Container = styled.p`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 2;
`;

const Menu = props => {
  if (onHome(props.location || {})) {
    return null
  }

  return (
    <Container>
      <LinkButton label="Página inicial" route="/" />
    </Container>
  )
};

export default withRouter(Menu)
