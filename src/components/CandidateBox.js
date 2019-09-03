import React from "react";
import styled from "styled-components";

import Chip from "./Chip";
import { Card, CardTitle, CardContent } from '../styles';
import { formatNumber } from "../support/utils";
import { ChipsContainer } from '../styles';

const CandidateName = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

const Component = props => {
  const {
    name,
    urne_name,
    number,
    sigla_party,
    state_sigla,
    votes
  } = props.candidate;

  return (
    <Card>
      <CardTitle>
        <span>{urne_name}</span>
      </CardTitle>

      <CardContent>
        <CandidateName>{name}</CandidateName>

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
