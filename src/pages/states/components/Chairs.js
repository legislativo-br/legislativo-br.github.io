import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 1.3rem;

  p:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }

  .icon {
    margin-right: 1rem;
  }
  
  .selected {
    color: #F6B642;
  }
`;

const Chairs = props => {
  const { chars, selected } = props

  return (
    <Container>
      <p>
        <span className="icon">
          <i className="fas fa-chair"></i>
        </span>

        <span>{chars} cadeiras</span>
      </p>

      <p className="selected">
        <span className="icon">
          <i className="fas fa-chair"></i>
        </span>
        <span>{selected} deputados</span>
      </p>
    </Container>
  )
}

export default Chairs;
