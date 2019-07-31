import React from 'react';
import { withRouter } from 'react-router-dom';
import { Hero, Content, Container, PrimaryButton } from '../../../styles';

const Header = props => {
  return (
    <Hero>
      <Content center>
        <Container>

          <p> O projeto "Como meu deputado foi eleito", tem como objetivo trazer para o contexto dos eleitores, dados das eleições federais de 2018, afim de informar a respeito da quantidade de deputados que foram eleitos diretamente pelos seus votos, e comparar o quantitativo em relação aos que foram "puxados". </p>

          <p> Nesta página você poderá analisar os dados nacionalmente, como na próxima seção, bem como visualizar os candidatos que foram eleitos nominalmente (conseguiram uma quantidade de votos acima do Quociente Eleitoral) </p>

          <PrimaryButton onClick={() => props.history.push("/about")}>
            Conheça mais do projeto
          </PrimaryButton>
        </Container>
      </Content>
    </Hero>
  )
}

export default withRouter(Header)
