import React from 'react';
import styled from 'styled-components';
import ContributorItem from './ContributorItem';

const contributors = [
  {
    title: 'Emanuel Gonçalves',
    url: 'https://github.com/emanuelgsouza',
    image:
      'https://avatars3.githubusercontent.com/u/20342656?v=3&u=5e6a0e43ca2afbd8e1cf0b75022cff5f0c2dc7e8&s=400',
  },
];

const Footer = styled.footer`
  background-color: var(--primary);
  color: white;
  padding: 2rem;
  text-align: center;
  font-size: 1rem;

  .container {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

const Contributor = () => {
  return (
    <Footer>
      <h2 className="title"> Conheça quem trabalha no projeto </h2>
      <div className="container">
        {contributors.map((contributor, key) => {
          return <ContributorItem key={key} {...contributor} />;
        })}
      </div>
    </Footer>
  );
};

export default Contributor;
