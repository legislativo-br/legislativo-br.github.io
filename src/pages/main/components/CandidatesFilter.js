import React, { Component } from 'react';
import styled from 'styled-components';
import Select from '../../../components/Select';
import statesSummary from '../../../data/states-summary.json';

const Container = styled.div`
  display: flex;
  justify-content: center;

  select:first-child {
    margin-right: 4px;
  }
`;

export default class CandidatesFilter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      orderOptions: [
        {
          label: 'Ordenando por Nome',
          value: 'urne_name'
        },
        {
          label: 'Ordenando por Votos',
          value: 'votes'
        }
      ],
      stateOptions: this.getStatesFromSummary()
    }
  }

  getStatesFromSummary () {
    return [
      {
        label: 'Visualizando todos os Estados',
        value: ''
      },
      ...statesSummary.map(state => {
        return {
          label: `Filtre por ${state.name}`,
          value: state.sigla
        }
      })
    ]
  }
  
  render() {
    const { orderOptions, stateOptions } = this.state
    const { order, state } = this.props

    return (
      <Container>
        <Select
          value={order}
          options={orderOptions}
          onChange={this.props.onChangeOrder}
        />

        <Select
          value={state}
          options={stateOptions}
          onChange={this.props.onChangeState}
        />
      </Container>
    )
  }
}
