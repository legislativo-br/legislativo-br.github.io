import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => {
  const { name } = props;

  return (
    <span className="icon">
      <i className={name} aria-hidden={true} />
    </span>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
