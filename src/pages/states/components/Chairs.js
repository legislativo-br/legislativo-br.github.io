import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  font-size: 1.3rem;

  p:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }

  .icon {
    margin-right: 1rem;
  }

  .selected {
    color: var(--accent);
  }
`;

const Chairs = props => {
  const { chars, selected } = props;

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
  );
};

Chairs.propTypes = {
  chars: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
};

export default Chairs;
