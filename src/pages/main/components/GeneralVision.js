import React, { Component } from 'react';
import styled from 'styled-components';

import generalSummaryData from '../../../data/general-summary.json';
import { Section, Container, Content } from '../../../styles';
import BarChart from '../../../components/BarChart';
import LinkButton from '../../../components/Button';

const GeneralVisionContainer = styled(Section)`
  background-color: white;
`;

export default class GeneralVision extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      series: this.getSeries()
    }
  }

  getSeries () {
    const data = generalSummaryData[0]
    const { not_pulling_qty, chars } = data

    return [{
      name: 'Eleitos Nominalmente',
      data: [ not_pulling_qty ]
    }, {
      name: 'Eleitos por puxadinho',
      data: [ (chars - not_pulling_qty) ]
    }]
  }
  
  render() {
    const { series } = this.state
    return (
      <GeneralVisionContainer>
        <Content center>
          <Container>
            <h2> Visão Geral </h2>
            <p> A seguir, um gráfico que mostra o quantidade de cadeiras ocupadas por deputados eleitos nominalmente ou por <a href="http://www.tse.jus.br/eleitor/glossario/termos/quociente-partidario" title="Acesse a explicação do TSE a respeito do termo Quociente Partidário">Quociente Partidário</a> </p>
            <BarChart series={series} />
            <br />
            <LinkButton
              label="Veja os dados por Estado"
              route="/states"
            />
          </Container>
        </Content>
      </GeneralVisionContainer>
    )
  }
}
