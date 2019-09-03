import React from 'react';
import styled from 'styled-components';

// inspired by Bulma Select
const Select = styled.select`
  position: relative;
  padding: 0.3rem;
  background-color: #fff;
  border: 1px solid #34314D;
  border-radius: 4px;
  color: #4a4a4a;
  vertical-align: top;
  max-width: 100%;
`;

const Component = props => {
  return (
    <Select value={props.value} onChange={props.onChange}>
      {
        props.options.map((option, key) => {
          return <option value={option.value} key={key}> {option.label} </option>
        })
      }
    </Select>
  )
};

export default Component;
