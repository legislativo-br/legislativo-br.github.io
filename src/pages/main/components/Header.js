import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Content, PrimaryButton } from '../../../styles';
import CamaraPhoto from '../../../assets/images/camara.jpg';

const Hero = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
  background-color: var(--white);

  .camara-photo {
    display: inline-flex;
    align-items: center;
    flex: 1;
    max-width: 600px;

    img {
      border-radius: var(--card-radious);
      box-shadow: var(--box-shadow);
    }
  }

  .camera-info {
    display: inline-flex;
    align-items: center;
    flex: 1;
    padding: 1rem;
  }

  @media screen and (max-width: 768px) {
    display: block;
    padding: 2rem 1rem;

    .camera-info {
      padding: 1rem 0;
    }
  }
`;

const Header = props => {
  return (
    <Hero>
      <div className="camara-photo">
        <figure>
          <img src={CamaraPhoto} alt="Foto da Câmara de Deputados do Brasil" />
        </figure>
      </div>
      <div className="camera-info">
        <Content>
          <p>
            O projeto &lsquo;Como meu deputado foi eleito?&rsquo; tem como
            objetivo trazer de maneira clara, dados das Eleições Federais de
            2018, a fim de informar a respeito do quantitativo de Deputados
            Federais que foram eleitos somente pelos seus votos, isto é, tendo
            mais votos que o{' '}
            <a
              className="link"
              href="http://www.tse.jus.br/eleitor/glossario/termos/quociente-partidario"
              title="Acesse a explicação do TSE a respeito do termo Quociente Partidário"
            >
              Quociente Partidário
            </a>{' '}
            do Estado em que se elegeram, e comparar o quantitativo em relação
            aos que foram &lsquo;puxados&lsquo;, isto é, eleitos com menos votos
            que o{' '}
            <a
              className="link"
              href="http://www.tse.jus.br/eleitor/glossario/termos/quociente-partidario"
              title="Acesse a explicação do TSE a respeito do termo Quociente Partidário"
            >
              Quociente Partidário
            </a>
            .
          </p>

          <br />

          <div>
            <PrimaryButton onClick={() => props.history.push('/about')}>
              Conheça mais do projeto
            </PrimaryButton>
          </div>
        </Content>
      </div>
    </Hero>
  );
};

export default withRouter(Header);
