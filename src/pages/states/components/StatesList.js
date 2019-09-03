import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../../../data/states-summary.json';
import StateCard from './StateCard';

const parseData = data => {
  return data.reduce((acc, state) => {
    const { sigla, name, chars, not_pulling_qty } = state

    acc[sigla] = {
      sigla,
      name,
      chars,
      notPulling: not_pulling_qty
    }

    return acc
  }, {})
}

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatesList = () => {
  const [ states ] = useState(parseData(data))

  window.scrollTo(0, 0)

  return (
    <>
      <ListContainer style={{ width: '100%' }}>
        {
          Object.values(states).map((state, index) => {
            return <StateCard key={index} state={state} />
          })
        }
      </ListContainer>
    </>
  )
}

export default StatesList;
