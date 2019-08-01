import React from "react";
import styled from "styled-components";

import Chip from "./Chip";
import { formatNumber } from "../support/utils";
import { ChipsContainer } from '../styles';

// inspired by Quasar Framework Card style
const Container = styled.div`
  position: relative;
  width: 300px;
  margin: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background-color: white;
  text-align: left;
  overflow: hidden;

  .section {
    padding: 1rem;
  }

  /* for mobile screens */
  @media screen and (max-width: 527px) {
    width: 100%;
  }
`;

const CandidateUrneName = styled.div`
  text-align: center;
  margin: 0;
  padding: 7px 12px;
  background-color: #F6B642;
  color: white;
`;

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
    <Container>
      <CandidateUrneName>
        <span>{urne_name}</span>
      </CandidateUrneName>
      <div className="section">
        <CandidateName>{name}</CandidateName>

        <p>{formatNumber(votes)} votos</p>

        <ChipsContainer>
          <Chip icon="fas fa-vote-yea" label={number} />
          <Chip icon="fas fa-flag" label={sigla_party} />
          <Chip icon="fas fa-map-marker-alt" label={state_sigla} />
        </ChipsContainer>
      </div>
    </Container>
  );
};

export default Component;
