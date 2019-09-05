import React, { Component } from 'react';
import styled from 'styled-components';
import Select from '../../../components/Select';
import statesSummary from '../../../data/states-summary.json';
import PropTypes from 'prop-types';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & :first-child {
    margin-right: 4px;
  }

  @media screen and (max-width: 552px) {
    select {
      width: 100%;
    }

    & :first-child {
      margin-right: 0;
      margin-bottom: 0.5rem;
    }
  }
`;

class CandidatesFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderOptions: [
        {
          label: 'Ordenando por Nome',
          value: 'urne_name',
        },
        {
          label: 'Ordenando por Votos',
          value: 'votes',
        },
      ],
      stateOptions: this.getStatesFromSummary(),
    };
  }

  getStatesFromSummary() {
    return [
      {
        label: 'Visualize todos os Estados',
        value: '',
      },
      ...statesSummary.map(state => {
        return {
          label: `Filtre por ${state.name}`,
          value: state.sigla,
        };
      }),
    ];
  }

  render() {
    const { orderOptions, stateOptions } = this.state;
    const { order, state } = this.props;

    return (
      <Container>
        <Select
          label="Ordene por"
          id="select_order"
          value={order}
          options={orderOptions}
          onChange={this.props.onChangeOrder}
        />

        <Select
          label="Visualize todos os Estados"
          id="select_state"
          value={state}
          options={stateOptions}
          onChange={this.props.onChangeState}
        />
      </Container>
    );
  }
}

CandidatesFilter.propTypes = {
  order: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  onChangeOrder: PropTypes.func.isRequired,
  onChangeState: PropTypes.func.isRequired,
};

export default CandidatesFilter;
