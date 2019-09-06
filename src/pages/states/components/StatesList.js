import React from 'react';
import data from '../../../data/states-summary.json';
import StateCard from './StateCard';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;

  .state_card:not(:first-of-type) {
    margin-top: 1rem;
  }
`;

const parseData = data => {
  return data.reduce((acc, state) => {
    const { sigla, name, chars, not_pulling_qty, election_quotient } = state;

    acc[sigla] = {
      sigla,
      name,
      chars,
      quotient: election_quotient,
      notPulling: not_pulling_qty,
    };

    return acc;
  }, {});
};

const StatesList = () => {
  const states = parseData(data);

  return (
    <Container>
      {Object.values(states).map((state, index) => {
        return <StateCard key={index} state={state} />;
      })}
    </Container>
  );
};

export default StatesList;
