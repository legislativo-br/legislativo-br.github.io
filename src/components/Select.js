import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// inspired by Bulma Select
const Select = styled.select`
  position: relative;
  padding: 0.3rem;
  background-color: var(--white);
  border: 1px solid var(--primary);
  border-radius: 4px;
  color: inherit;
  vertical-align: top;
  max-width: 100%;
`;

const Component = props => {
  return (
    <div>
      <label className="hide-element" htmlFor={props.id}>
        {props.label}
      </label>
      <Select id={props.id} value={props.value} onChange={props.onChange}>
        {props.options.map((option, key) => {
          return (
            <option value={option.value} key={key}>
              {' '}
              {option.label}{' '}
            </option>
          );
        })}
      </Select>
    </div>
  );
};

Component.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Component;
