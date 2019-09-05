import React from 'react';
import { Chip } from '../styles';
import PropTypes from 'prop-types';

const Component = props => {
  const { label, icon } = props;

  return (
    <Chip>
      <i aria-hidden="true" className={icon}></i>
      <span>{label}</span>
    </Chip>
  );
};

Component.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Component;
