import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/images/logo.png';

const MenuContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  width: 100%;
  padding: 1rem 2rem;
  background-color: #34314d;
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
      background-color: #f6b642;
      opacity: 0;
      transition: opacity 0.3s ease-out;
    }

    &:hover {
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
      color: #f6b642;
    }

    @media screen and (max-width: 552px) {
      padding-left: 0.25rem;
    }
  }
`;

const Menu = () => {
  return (
    <MenuContainer>
      <Link to="/" title="Ir para a Página Principal">
        <LogoContainer>
          <img src={Logo} alt="" />
        </LogoContainer>
      </Link>

      <LinksItem>
        <Link
          title="Confira a página com os resultados por Estado"
          className="link-item"
          to="/states"
        >
          {' '}
          Estados{' '}
        </Link>

        <Link title="Conheça o projeto" className="link-item" to="/about">
          {' '}
          Sobre{' '}
        </Link>

        <a
          target="blank"
          className="external-link"
          href="https://github.com/legislative-votes-br"
          title="Visite o repositório do projeto"
        >
          <i className="fab fa-github-square"></i>
        </a>
      </LinksItem>
    </MenuContainer>
  );
};

export default withRouter(Menu);
