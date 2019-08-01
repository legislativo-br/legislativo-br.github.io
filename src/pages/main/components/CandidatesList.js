import React, { Component } from 'react';
import styled from 'styled-components';
import { orderBy } from 'lodash';

// data
import CandidatesData from '../../../data/candidates.json';

// components
import CandidateBox from '../../../components/CandidateBox';
import CandidatesFilter from './CandidatesFilter';
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
      order: 'urne_name',
      party: null,
      state: null,
      candidates: CandidatesData
    }

    this.handleChangeOrder = this.handleChangeOrder.bind(this)
  }

  renderCandidatesList ({ orderColumn }) {
    return this.getCandidatesOrdered(orderColumn).map((candidate, key) => {
      return <CandidateBox candidate={candidate} key={key} />
    })
  }

  getCandidatesOrdered (orderColumn) {
    const candidates = this.state.candidates || []
    const order = orderColumn === 'urne_name' ? 'asc' : 'desc'
    return orderBy(candidates, [orderColumn], [order])
  }

  handleChangeOrder (e) {
    const value = e.target.value
    this.setState({
      order: value
    })
  }
  
  render() {
    const { order } = this.state
    return (
      <Section>
        <Content center>
          <Container>
            <h2> Conheça os deputados eleitos nominalmente </h2>

            <CandidatesFilter
              order={this.state.order}
              onChangeOrder={this.handleChangeOrder}
            />

            <CandidatesListContainer>
              {this.renderCandidatesList({ orderColumn: order })}
            </CandidatesListContainer>
          </Container>
        </Content>
      </Section>
    )
  }
}
