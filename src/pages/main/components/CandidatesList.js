import React, { Component } from 'react';
import styled from 'styled-components';

// data
import CandidatesData from '../../../data/candidates.json';

// components
import CandidateBox from '../../../components/CandidateBox';
import { Section, Content, Container } from '../../../styles';

const CandidatesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default class CandidatesList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       candidates: CandidatesData
    }
  }

  renderCandidatesList () {
    return this.state.candidates.map((candidate, key) => {
      return <CandidateBox candidate={candidate} key={key} />
    })
  }
  
  render() {
    return (
      <Section>
        <Content center>
          <Container>
            <h2> Conheça os deputados eleitos nominalmente </h2>

            <CandidatesListContainer>
              {this.renderCandidatesList()}
            </CandidatesListContainer>
          </Container>
        </Content>
      </Section>
    )
  }
}
