import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TEXT_COLORS = {
  primary: 'var(--primary)',
  accent: 'var(--primary)',
};

const getColorByType = type => {
  return TEXT_COLORS[type] || 'var(--primary)';
};

const BG_COLORS = {
  primary: 'var(--white)',
  accent: 'var(--accent)',
};

const getBgByType = type => {
  return BG_COLORS[type] || 'var(--white)';
};

const Chip = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 7px 12px;
  border-radius: 4px;
  border: none;
  background-color: ${props => getBgByType(props.type)};
  color: ${props => getColorByType(props.type)};
  font-size: 1rem;

  i {
    margin-right: 4px;
  }
`;

const Component = props => {
  const { label, icon } = props;

  return (
    <Chip className="chip" type={props.type}>
      <i aria-hidden="true" className={icon}></i>
      <span>{label}</span>
    </Chip>
  );
};

Component.propTypes = {
  label: PropTypes.any.isRequired,
  icon: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Component;
