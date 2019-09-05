import React from 'react';
import Header from './components/Header';
import GeneralVision from './components/GeneralVision';
import CandidatesList from './components/CandidatesList';
import { PageContainer, Container } from '../../styles';
import Banner from '../../components/Banner';

export default class IndexPage extends React.Component {
  render() {
    window.scrollTo(0, 0);

    return (
      <PageContainer paddingless>
        <Banner />

        <Header />

        <GeneralVision />

        <Container>
          <CandidatesList />
        </Container>
      </PageContainer>
    );
  }
}
