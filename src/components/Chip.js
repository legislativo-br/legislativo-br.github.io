import React from 'react';
import styled from 'styled-components';

const ChipContainer = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 7px 12px;
  border-radius: 4px;
  border: none;
  background-color: white;
  color: #34314D;
  font-size: 0.8rem;

  i {
    font-size: 14px;
    margin-right: 4px;
  }
`;

const Chip = props => {
  const { label, icon } = props
  return (
    <ChipContainer>
      <i aria-hidden="true" className={icon}></i>
      <span>{label}</span>
    </ChipContainer>
  )
};

export default Chip;
