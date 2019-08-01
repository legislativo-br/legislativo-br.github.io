import React, { Component } from 'react';
import styled from 'styled-components';
import Select from '../../../components/Select';

const Container = styled.div``;

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
      ]
    }
  }
  
  render() {
    const { orderOptions } = this.state
    const { order } = this.props

    return (
      <Container>
        <Select
          value={order}
          options={orderOptions}
          onChange={this.props.onChangeOrder}
        />
      </Container>
    )
  }
}
