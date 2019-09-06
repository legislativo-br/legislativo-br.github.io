import React from 'react';
import data from '../../../data/states-summary.json';
import StateCard from './StateCard';

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
    <div style={{ width: '100%' }}>
      {Object.values(states).map((state, index) => {
        return <StateCard key={index} state={state} />;
      })}
    </div>
  );
};

export default StatesList;
