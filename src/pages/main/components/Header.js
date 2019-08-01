import React from 'react';
import { withRouter } from 'react-router-dom';
import { Hero, Content, Container, PrimaryButton } from '../../../styles';

const Header = props => {
  return (
    <Hero>
      <Content center>
        <Container>

          <p> O projeto "Como meu deputado foi eleito?", tem como objetivo trazer para o contexto dos eleitores, dados das Eleições Federais de 2018, a fim de informar a respeito da quantidade de deputados que foram eleitos diretamente pelos seus votos (eleitos nominalmente), e comparar o quantitativo em relação aos que foram "puxados" (eleitos por <a href="http://www.tse.jus.br/eleitor/glossario/termos/quociente-partidario" title="Acesse a explicação do TSE a respeito do termo Quociente Partidário">Quociente Partidário</a>). </p>

          <p> Nesta página você poderá analisar os dados nacionalmente, como na próxima seção, bem como visualizar os candidatos que foram eleitos nominalmente (conseguiram uma quantidade de votos acima do <a href="http://www.tse.jus.br/eleitor-e-eleicoes/eleitor/glossario/termos/quociente-eleitoral" title="Acesse a explicação do TSE a respeito do termo Quociente Eleitoral">Quociente Eleitoral</a>) </p>

          <PrimaryButton onClick={() => props.history.push("/about")}>
            Conheça mais do projeto
          </PrimaryButton>
        </Container>
      </Content>
    </Hero>
  )
}

export default withRouter(Header)
