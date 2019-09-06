import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Pictogram from '../../../components/Pictogram';
import Chairs from './Chairs';

const Card = styled.section`
  width: 100%;
  display: flex;
  padding: 1rem 1.2rem;
  background-color: var(--primary-dark);
  border-radius: var(--card-radious);
  box-shadow: var(--box-shadow);

  .column {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (max-width: 552px) {
    display: block;

    .column {
      width: 100%;
    }

    .column:first-of-type {
      margin-bottom: 1rem;
    }
  }
`;

const CardTitle = styled.div`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 0.5rem;
`;

const StateCard = props => {
  const { name, chars, notPulling } = props.state;

  return (
    <Card className="state_card">
      <div className="column">
        <CardTitle>
          <h2> {name} </h2>
        </CardTitle>

        <Chairs state={props.state} />
      </div>

      <div className="column">
        <Pictogram chars={chars} inverted selected={notPulling} />
      </div>
    </Card>
  );
};

StateCard.propTypes = {
  state: PropTypes.object.isRequired,
};

export default StateCard;
