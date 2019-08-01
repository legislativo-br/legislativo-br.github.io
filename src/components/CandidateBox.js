import React from "react";
import styled from "styled-components";

import Chip from "./Chip";
import { formatNumber } from "../support/utils";
import { ChipsContainer } from '../styles';

// inspired by Quasar Framework Card style
const Container = styled.div`
  position: relative;
  width: 300px;
  padding: 1rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background-color: white;
  text-align: left;
  margin: 8px;

  /* for mobile screens */
  @media screen and (max-width: 527px) {
    width: 100%;
  }
`;

const CandidateName = styled.p`
  margin: 0;
`;


const Component = props => {
  const {
    urne_name,
    number,
    sigla_party,
    state_sigla,
    votes
  } = props.candidate;

  return (
    <Container>
      <CandidateName> {urne_name} </CandidateName>

      <p>{formatNumber(votes)} votos</p>

      <ChipsContainer>
        <Chip icon="fas fa-vote-yea" label={number} />
        <Chip icon="fas fa-flag" label={sigla_party} />
        <Chip icon="fas fa-map-marker-alt" label={state_sigla} />
      </ChipsContainer>
    </Container>
  );
};

export default Component;
