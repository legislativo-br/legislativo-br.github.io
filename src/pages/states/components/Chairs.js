import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../../../components/Icon';
import { formatNumber } from '../../../support/utils';

const Container = styled.div`
  font-size: 1.3rem;
  display: inline-flex;
  flex-direction: column;

  p:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }

  p.selected {
    color: var(--accent);
  }

  .icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
  }
`;

const Data = (icon, label, isSelected) => {
  return (
    <p className={isSelected ? 'selected' : null}>
      <Icon name={icon} />

      <span> {label} </span>
    </p>
  );
};

const Chairs = props => {
  const { chars, notPulling, quotient } = props.state;

  return (
    <Container>
      {Data('fas fa-user-tie', `Votos: ${formatNumber(quotient)} votos`)}

      {Data('fas fa-vote-yea', `QE: ${formatNumber(quotient)} votos`)}

      {Data('fas fa-chair', `${chars} cadeiras`)}

      {Data('fas fa-chair', `${notPulling} deputado(s)`, true)}
    </Container>
  );
};

Chairs.propTypes = {
  state: PropTypes.object.isRequired,
};

export default Chairs;
