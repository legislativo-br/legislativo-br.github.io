import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = props => {
  const { type, route, label } = props;

  return (
    <Link className={`button ${type || 'is-primary'}`} to={route}>
      {label}
    </Link>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  route: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default withRouter(Button);
