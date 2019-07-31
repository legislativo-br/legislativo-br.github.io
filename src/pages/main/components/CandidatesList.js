import React, { Component } from 'react';
import { Section, Content, Container } from '../../../styles';

export default class CandidatesList extends Component {
  render() {
    return (
      <Section>
        <Content>
          <Container>
            <h2> Conheça os deputados eleitos nominalmente </h2>
            <p> Lista dos deputados aqui! </p>
          </Container>
        </Content>
      </Section>
    )
  }
}
