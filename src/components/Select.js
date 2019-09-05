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

const Wrapper = styled.div`
`;

const Component = props => {
  return (
    <Wrapper>
      <label className="hide-element" htmlFor={props.id}>{props.label}</label>
      <Select id={props.id} value={props.value} onChange={props.onChange}>
        {
          props.options.map((option, key) => {
            return <option value={option.value} key={key}> {option.label} </option>
          })
        }
      </Select>
    </Wrapper>
  )
};

export default Component;
