import React, { Component } from 'react';
import styled from 'styled-components';
import { orderBy, filter, isEmpty } from 'lodash';

// data
import CandidatesData from '../../../data/candidates.json';

// components
import CandidateBox from '../../../components/CandidateBox';
import CandidatesFilter from './CandidatesFilter';
import { Section, Content, Container } from '../../../styles';

const CandidatesListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin: 1rem auto;
  max-width: 920px;

  @media screen and (max-width: 552px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 553px) and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default class CandidatesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: 'urne_name',
      sigla_party: null,
      state_sigla: null,
      candidates: CandidatesData,
    };

    this.handleChangeOrder = this.handleChangeOrder.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
  }

  renderCandidatesList({ orderColumn, state_sigla, sigla_party }) {
    const { candidates } = this.state;
    const data = this.getCandidatesOrdered(candidates, orderColumn);
    return this.getCandidatesFiltered(data, { state_sigla, sigla_party }).map(
      (candidate, key) => {
        return <CandidateBox candidate={candidate} key={key} />;
      }
    );
  }

  getCandidatesOrdered(candidates, orderColumn) {
    const order = orderColumn === 'urne_name' ? 'asc' : 'desc';
    return orderBy(candidates, [orderColumn], [order]);
  }

  getCandidatesFiltered(data, filterData) {
    const filterObject = this.getFilterData(filterData);
    if (isEmpty(filterObject)) {
      return data;
    }

    return filter(data, filterObject);
  }

  getFilterData(filterData) {
    return Object.keys(filterData).reduce((acc, key) => {
      if (filterData[key]) {
        acc[key] = filterData[key];
      }

      return acc;
    }, {});
  }

  handleChangeOrder(e) {
    const value = e.target.value;
    this.setState({
      order: value,
    });
  }

  handleChangeState(e) {
    const value = e.target.value;
    this.setState({
      state_sigla: value,
    });
  }

  render() {
    const { order, state_sigla, sigla_party } = this.state;
    const data = { orderColumn: order, state_sigla, sigla_party };
    return (
      <Section>
        <Content center>
          <Container>
            <h2> Conheça os deputados eleitos nominalmente </h2>

            <CandidatesFilter
              order={this.state.order}
              onChangeOrder={this.handleChangeOrder}
              onChangeState={this.handleChangeState}
            />

            <CandidatesListContainer>
              {this.renderCandidatesList(data)}
            </CandidatesListContainer>
          </Container>
        </Content>
      </Section>
    );
  }
}
