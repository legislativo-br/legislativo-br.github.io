import React from 'react';
import styled from 'styled-components';

const contributors = [
  {
    title: 'Emanuel Gonçalves',
    url: 'https://github.com/emanuelgsouza',
    image: 'https://avatars3.githubusercontent.com/u/20342656?v=3&u=5e6a0e43ca2afbd8e1cf0b75022cff5f0c2dc7e8&s=400'
  }
]

const Footer = styled.footer`
  background-color: #34314D;
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

const ContributorItem = (props) => {
  return (
    <Item>
      <a
        href={props.url}
        target="blank"
        title={`Conheça o Github de ${props.title}`}>
        <img src={props.image} alt={`Foto de perfil de ${props.title}`} />
        <p> {props.title} </p>
      </a>
    </Item>
  )
}

const Contributor = () => {
  return (
    <Footer>
      <h2 className="title"> Conheça quem trabalha no projeto </h2>
      <div className="container">
        {
          contributors.map((contributor, key) => {
            return <ContributorItem key={key} { ...contributor } />
          })
        }
      </div>
    </Footer>
  )
}

export default Contributor
