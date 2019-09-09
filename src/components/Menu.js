import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/images/logo.png';
import PropTypes from 'prop-types';

const MenuContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  width: 100%;
  padding: 1rem 2rem;
  background-color: var(--primary);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 552px) {
    padding: 1rem;
  }
`;

const LogoContainer = styled.figure`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 100%;
`;

const LinksItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;

  .link-item {
    position: relative;
    color: white;
    padding: 0 1.25rem;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -5px;
      right: 0;
      width: 100%;
      height: 2px;
      background-color: var(--accent);
      opacity: 0;
      transition: opacity 0.3s ease-out;
    }

    &:hover,
    &.active {
      &::before {
        opacity: 1;
      }
    }

    @media screen and (max-width: 552px) {
      margin: 0 0.25rem;
      padding: 0 0.25rem;
    }
  }

  .external-link {
    color: white;
    font-size: 1.5rem;
    padding-left: 1.25rem;

    &:hover {
      color: var(--accent);
    }

    @media screen and (max-width: 552px) {
      padding-left: 0.25rem;
    }
  }
`;

const WrapperLink = props => {
  const isCurrentPath = props.path === props.to;
  return (
    <Link
      title={props.title}
      className={`link-item ${isCurrentPath ? 'active' : null}`}
      to={props.to}
    >
      {props.label}
    </Link>
  );
};

WrapperLink.propTypes = {
  path: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const Menu = props => {
  const pathname = props.location.pathname || ''; // eslint-disable-line

  return (
    <MenuContainer>
      <Link to="/" title="Ir para a Página Principal">
        <LogoContainer>
          <img src={Logo} alt="" />
        </LogoContainer>
      </Link>

      <LinksItem>
        <WrapperLink
          title="Confira a página com os resultados por Estado"
          to="/states"
          label="Estados"
          path={pathname}
        />

        <WrapperLink
          title="Conheça o projeto"
          to="/about"
          label="Sobre"
          path={pathname}
        />

        <a
          target="blank"
          className="external-link"
          href="https://github.com/legislativo-br"
          title="Visite o repositório do projeto"
        >
          <i className="fab fa-github-square"></i>
        </a>
      </LinksItem>
    </MenuContainer>
  );
};

export default withRouter(Menu);
