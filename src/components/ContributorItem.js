import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Item = styled.div`
  max-width: 150px;
  padding: 0.25rem;
  text-align: center;

  img {
    width: 100px;
    border-radius: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ContributorItem = props => {
  return (
    <Item>
      <a
        href={props.url}
        target="blank"
        title={`Conheça o Github de ${props.title}`}
      >
        <img src={props.image} alt={`Foto de perfil de ${props.title}`} />
        <p> {props.title} </p>
      </a>
    </Item>
  );
};

ContributorItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
};

export default ContributorItem;
