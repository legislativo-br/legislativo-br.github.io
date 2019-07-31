import React, { Component } from 'react';
import styled from 'styled-components';
import c3 from 'c3';

import generalSummaryData from '../../../data/general-summary.json';
import { Section, Container, Content, PrimaryButton } from '../../../styles';

const GeneralVisionContainer = styled(Section)`
`;

export default class GeneralVision extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      chart: null
    }
  }
  
  componentDidMount() {
    const data = generalSummaryData[0]
    const { not_pulling_qty, chars } = data
    const chart = c3.generate({
        bindto: '#generalChart',
        data: {
          type : 'pie',
          columns: [
            ['Eleitos Nominalmente', not_pulling_qty],
            ['Eleitos por puxadinho', (chars - not_pulling_qty)]
          ]
        }
    })

    this.setState({
      chart
    })
  }
  
  render() {
    return (
      <GeneralVisionContainer>
        <Content center>
          <Container>
            <h2> Visão Geral </h2>
            <div id="generalChart"></div>
            <PrimaryButton> Veja os dados por Estado </PrimaryButton>
          </Container>
        </Content>
      </GeneralVisionContainer>
    )
  }
}
