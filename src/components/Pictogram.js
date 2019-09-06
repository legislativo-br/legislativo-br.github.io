import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 0.5rem;
  font-size: 1.5rem;
  color: ${props => (props.inverted ? 'white' : 'var(--primary)')};

  .selected {
    color: var(--accent);
  }
`;

const Icon = ({ selected }) => {
  return (
    <span className={selected ? 'selected' : null}>
      <i className="fas fa-user-tie"></i>
    </span>
  );
};

Icon.propTypes = {
  selected: PropTypes.bool,
};

const rendersIcons = (chars, selected) => {
  return Array(chars)
    .fill(0)
    .map((_, key) =>
      key < selected ? <Icon key={key} selected /> : <Icon key={key} />
    );
};

const Pictogram = props => {
  const { chars, selected, inverted } = props;

  return (
    <Container inverted={inverted || false}>
      {rendersIcons(chars, selected)}
    </Container>
  );
};

Pictogram.propTypes = {
  chars: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
  inverted: PropTypes.bool.isRequired,
};

export default Pictogram;
