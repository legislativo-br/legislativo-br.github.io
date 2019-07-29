import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputContainer = styled.div`
  padding: 1rem;
  color: white;
  background-color: #6c7b95;

  label {
    display: block;
    color: inherit;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  input {
    display: block;
    width: 100%;
    font-size: 1.4rem;
    padding: 0.5rem;
    color: inherit;
    border: none;
    background-color: inherit;
    outline-color: transparent;
  }

  .internal-help {
    display: block;
    margin-top: 0.3rem;
    font-size: 1.1rem;
  }
`;

const InputComponent = props => {
  return (
    <InputContainer>
      <label htmlFor="internal"> {props.label} </label>
      <input
        id="internal"
        placeholder={props.placeholder}
      />
      <span className="internal-help"> {props.helper} </span>
    </InputContainer>
  )
};

InputComponent.propTypes = {
  label: PropTypes.string.isRequired
};

export default InputComponent;
