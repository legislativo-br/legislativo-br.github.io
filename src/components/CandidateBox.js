import React from "react";
import { initial } from 'lodash-es';

import Chip from "./Chip";
import { Card, CardTitle, CardContent, ChipsContainer } from '../styles';
import { formatNumber } from "../support/utils";

const getCandidateName = name => {
  const splits = name.split(' ')

  if (splits.length <= 3) {
    return splits.join(' ')
  }

  return initial(splits).join(' ')
}

const Component = props => {
  const {
    urne_name,
    number,
    sigla_party,
    state_sigla,
    votes
  } = props.candidate;

  return (
    <Card>
      <CardTitle>
        <span>{getCandidateName(urne_name)}</span>
      </CardTitle>

      <CardContent>
        <p>{formatNumber(votes)} votos</p>

        <ChipsContainer>
          <Chip icon="fas fa-vote-yea" label={number} />
          <Chip icon="fas fa-flag" label={sigla_party} />
          <Chip icon="fas fa-map-marker-alt" label={state_sigla} />
        </ChipsContainer>
      </CardContent>
    </Card>
  );
};

export default Component;
