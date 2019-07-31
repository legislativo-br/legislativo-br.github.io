import React, { Component } from 'react';
import styled from 'styled-components';
import { Section, Container, Content, PrimaryButton } from '../../../styles';

const GeneralVisionContainer = styled(Section)`
`;

export default class GeneralVision extends Component {
  render() {
    return (
      <GeneralVisionContainer>
        <Content>
          <Container>
            <h2> Visão Geral </h2>
            <p> Chart em breve! </p>
            <PrimaryButton> Veja os dados por Estado </PrimaryButton>
          </Container>
        </Content>
      </GeneralVisionContainer>
    )
  }
}
